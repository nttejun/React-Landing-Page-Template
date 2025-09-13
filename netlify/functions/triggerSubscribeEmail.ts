// netlify/functions/consult-submit.ts
// Netlify Emails 예시 양식을 그대로 따르되, 상담 폼 데이터로 변환.
// 템플릿 함수 경로: /.netlify/functions/emails/consult-request
// 필요한 ENV:
// - NETLIFY_EMAILS_SECRET : Netlify Emails secret
// - EMAIL_FROM            : 발신자 (예: noreply@yourdomain.com)
// - OWNER_EMAIL           : 수신자(운영자) 이메일
//
// 로컬/프리뷰 환경에서도 동작하도록 process.env.URL 없으면 호스트 헤더로 기본 URL 구성.

import type { Handler } from "@netlify/functions";

type RequestBody = {
    name: string;
    phone: string;
    company?: string;
    category: string;
    message?: string;
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

    const { name, phone, company, category, message } = requestBody || {};
    if (!name || !phone || !category) {
        return json(400, { error: "name, phone, category are required" });
    }

    // 환경변수
    const secret = process.env.NETLIFY_EMAILS_SECRET;
    const from = process.env.NETLIFY_FROM_EMAILS || "no-reply@example.com";
    const to = process.env.NETLIFY_FROM_EMAILS || "owner@example.com";
    const templateName = "subscribed"; // emails/consult-request.* 템플릿 필요

    if (!secret) {
        return json(500, { error: "Missing NETLIFY_EMAILS_SECRET" });
    }

    // 배포/프리뷰/로컬 모두 대응
    const baseUrl =
        process.env.URL ||
        `${(event.headers["x-forwarded-proto"] || "https")}://${event.headers.host}`;

    const subject = `법인 보험 상담 신청 - ${name} / ${category}`;

    // Netlify Emails 템플릿으로 전달할 파라미터
    const parameters = {
        name,
        phone,
        company: company || "-",
        category,
        message: message || "",
        submittedAt: new Date().toISOString(),
    };

    console.error(">> 3");
    // Netlify Emails 함수 호출
    const emailRes = await fetch(`http://127.0.0.1:8888/.netlify/functions/emails/subscribed`, {
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

    return json(200, { ok: true, message: "Consult email sent!" });
};

function json(statusCode: number, obj: unknown) {
    return {
        statusCode,
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify(obj),
    };
}

export default handler;
