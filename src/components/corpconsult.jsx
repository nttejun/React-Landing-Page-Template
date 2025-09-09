import React, { useState } from "react";

export const CorpConsultForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    company: "",
    category: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("제출된 데이터:", formData);

    // 실제 전송 예시:
    // emailjs.send("SERVICE_ID", "TEMPLATE_ID", formData, "PUBLIC_KEY");

    setFormData({
      name: "",
      phone: "",
      company: "",
      category: "",
      message: "",
    });
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
      `}</style>

      <h2>법인 상담 신청</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">대표자 성함</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="홍길동"
            required
            value={formData.name}
            onChange={handleChange}
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
            required
            value={formData.phone}
            onChange={handleChange}
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
            autoComplete="organization"
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">상담 항목</label>
          <select
            id="category"
            name="category"
            required
            value={formData.category}
            onChange={handleChange}
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
          ></textarea>
        </div>

        <button type="submit">상담 신청하기</button>
      </form>
    </div>
  );
};

