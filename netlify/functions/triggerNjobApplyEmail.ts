// netlify/functions/triggerNjobApplyEmail.ts
// N잡크루 지원 신청 전용 이메일 발송 함수.
// 기존 triggerSubscribeEmail.ts (법인 상담)와 동일한 구조, 별도 템플릿 사용.
// 템플릿: emails/njob-apply/index.html
// 필요한 ENV:
// - NETLIFY_EMAILS_SECRET : Netlify Emails secret
// - NETLIFY_FROM_EMAILS   : 발신/수신 이메일
// - REAL_HOST_URL         : 호스트 URL

import type { Handler } from "@netlify/functions";

type RequestBody = {
    name: string;
    birth: string;
    phone: string;
    email: string;
    region?: string;
    job?: string;
    referralCode?: string;
    experience: string;
};

export const handler: Handler = async function (event) {
    if (event.httpMethod !== "POST") {
        return json(405, { error: "Method Not Allowed" });
    }

    if (!event.body) {
        return json(400, { error: "Payload required" });
    }

    let requestBody: RequestBody;
    try {
        requestBody = JSON.parse(event.body) as RequestBody;
    } catch {
        return json(400, { error: "Invalid JSON" });
    }

    const { name, birth, phone, email, region, job, referralCode, experience } =
        requestBody || {};

    if (!name || !birth || !phone || !email || !experience) {
        return json(400, {
            error: "name, birth, phone, email, experience are required",
        });
    }

    // 환경변수 (기존 triggerSubscribeEmail.ts 와 동일)
    const secret = process.env.NETLIFY_EMAILS_SECRET;
    const from = process.env.NETLIFY_FROM_EMAILS || "no-reply@example.com";
    const to = process.env.NETLIFY_FROM_EMAILS || "owner@example.com";
    const templateName = "njob-apply"; // emails/njob-apply/* 템플릿

    if (!secret) {
        return json(500, { error: "Missing NETLIFY_EMAILS_SECRET" });
    }

    // 배포/프리뷰/로컬 모두 대응 (기존 함수와 동일)
    const baseUrl =
        process.env.URL ||
        `${(event.headers["x-forwarded-proto"] || "https")}://${event.headers.host}`;

    const subject = `N잡크루 지원 신청 - ${name}`;

    // Netlify Emails 템플릿으로 전달할 파라미터
    const parameters = {
        name,
        birth,
        phone,
        email,
        region: region || "-",
        job: job || "-",
        referralCode: referralCode || "-",
        experience,
        submittedAt: new Date().toISOString(),
    };

    // Netlify Emails 함수 호출 (기존 함수와 동일한 방식)
    const emailRes = await fetch(process.env.REAL_HOST_URL + `/.netlify/functions/emails/${templateName}`, {
        method: "POST",
        headers: {
            "netlify-emails-secret": secret as string,
        },
        body: JSON.stringify({
            from,
            to,
            subject,
            parameters,
        }),
    });

    const text = await emailRes.text();
    if (!emailRes.ok) {
        console.error("Netlify Emails error:", emailRes.status, text);
        return json(emailRes.status, { error: "Email send failed", detail: text });
    }

    return json(200, { ok: true, message: "N잡크루 지원 이메일 발송 완료!" });
};

function json(statusCode: number, obj: unknown) {
    return {
        statusCode,
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify(obj),
    };
}

export default handler;
