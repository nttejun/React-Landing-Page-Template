import React, { useState } from "react";

// 개발/배포 자동 분기: 로컬은 8888 프록시, 배포는 상대 경로
const ENDPOINT = "/.netlify/functions/triggerSubscribeEmail";

export const CorpConsultForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    company: "",
    category: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [notice, setNotice] = useState(null); // { type: 'success'|'error', text: string }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const resetForm = () =>
      setFormData({ name: "", phone: "", company: "", category: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setNotice(null);

    if (!formData.name || !formData.phone || !formData.category) {
      setNotice({ type: "error", text: "성함, 연락처, 상담 항목은 필수입니다." });
      return;
    }
    const phoneOk = /^01[0-9]-?\d{3,4}-?\d{4}$/.test(formData.phone);
    if (!phoneOk) {
      setNotice({ type: "error", text: "연락처 형식을 확인해주세요. 예) 010-1234-5678" });
      return;
    }

    setSending(true);
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const isJson = (res.headers.get("content-type") || "").includes("application/json");
      const data = isJson ? await res.json() : { error: await res.text() };

      if (!res.ok) throw new Error(data?.error || `전송 실패 (${res.status})`);

      setNotice({ type: "success", text: "상담 신청이 전송되었습니다. 곧 연락드리겠습니다!" });
      resetForm();
    } catch (err) {
      console.error("Submit error:", err);
      setNotice({ type: "error", text: "전송에 실패했습니다. 잠시 후 다시 시도해주세요." });
    } finally {
      setSending(false);
    }
  };

  return (
      <div className="form-container">
        <style>{`
        body { font-family: Arial, sans-serif; background:#f9f9f9; }
        .form-container {
          max-width: 500px;
          margin: 50px auto;
          padding: 20px;
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }
        .form-container h2 { text-align: center; margin-bottom: 20px; }
        .form-group { margin-bottom: 15px; }
        label { display: block; margin-bottom: 5px; font-weight: bold; }
        input, select, textarea, button {
          width: 100%; padding: 10px; border-radius: 8px;
          border: 1px solid #ccc; font-size: 14px;
        }
        button {
          background: #007BFF; color: #fff; border: none;
          font-weight: bold; cursor: pointer;
        }
        button:hover { background: #0056b3; }
        .msg { margin-top: 12px; font-size: 14px; }
        .msg.success { color:#0a7a28; }
        .msg.error { color:#b00020; }
      `}</style>

        <h2>법인 보험 상담 신청</h2>

        {/* action은 접근성/폴백용, 실제 전송은 fetch로 처리 */}
        <form action={ENDPOINT} method="POST" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="name">대표자 성함</label>
            <input
                type="text"
                id="name"
                name="name"
                placeholder="홍길동"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={sending}
                autoComplete="name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">연락처</label>
            <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="010-1234-5678"
                value={formData.phone}
                onChange={handleChange}
                required
                disabled={sending}
                autoComplete="tel"
            />
          </div>

          <div className="form-group">
            <label htmlFor="company">법인명</label>
            <input
                type="text"
                id="company"
                name="company"
                placeholder="○○ 주식회사"
                value={formData.company}
                onChange={handleChange}
                disabled={sending}
                autoComplete="organization"
            />
          </div>

          <div className="form-group">
            <label htmlFor="category">상담 항목</label>
            <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                disabled={sending}
            >
              <option value="">상담 주제를 선택하세요</option>
              <option>가지급금 / 가수금 정리</option>
              <option>대표이사 퇴직금·퇴직연금 설계</option>
              <option>법인세 / 상속·증여세 절세</option>
              <option>정책자금 및 정부지원금 상담</option>
              <option>법인 자금 → 개인 자금 이전 방법</option>
              <option>법인 신용등급 / 대출 전략</option>
              <option>임원·대표자 보장성 보험</option>
              <option>퇴직연금(DB/DC) 및 직원 복리후생</option>
              <option>키맨(Key-Man) 보험</option>
              <option>기타 맞춤 상담</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">추가 내용</label>
            <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="상세한 상담 요청 내용을 작성해주세요"
                value={formData.message}
                onChange={handleChange}
                disabled={sending}
            />
          </div>

          {notice && <div className={`msg ${notice.type}`}>{notice.text}</div>}

          <button type="submit" disabled={sending}>
            {sending ? "전송 중..." : "상담 신청하기"}
          </button>
        </form>
      </div>
  );
};

export default CorpConsultForm;
