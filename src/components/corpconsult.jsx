// src/components/CorpConsultForm.jsx
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const ENDPOINT = "/.netlify/functions/triggerSubscribeEmail";

/** 포털 기반 모달 (전역 CSS 충돌 회피: 고유 클래스/인라인 스타일만 사용) */
function CorpModal({ open, type = "success", message = "", meta, onClose }) {
  const backdropRef = useRef(null);
  const closeBtnRef = useRef(null);

  useEffect(() => {
    const onKeyDown = (e) => e.key === "Escape" && onClose?.();
    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKeyDown);
      setTimeout(() => closeBtnRef.current?.focus(), 0);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  const node = (
      <div
          ref={backdropRef}
          role="presentation"
          onMouseDown={(e) => e.target === backdropRef.current && onClose?.()}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 999999, // 충돌 대비 충분히 높게
            padding: 16,
            backdropFilter: "blur(2px)",
          }}
          data-corp-modal-overlay // 고유 셀렉터
      >
        <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="corp-dialog-title"
            aria-describedby="corp-dialog-desc"
            style={{
              width: "100%",
              maxWidth: 460,
              background: "#fff",
              borderRadius: 16,
              padding: "22px 20px",
              boxShadow: "0 12px 28px rgba(0,0,0,.18)",
              display: "block",            // 강제 표시
              opacity: 1,                  // 투명화 방지
              pointerEvents: "auto",       // 클릭 가능
              transform: "translateY(0)",  // 숨김 트랜스폼 방지
            }}
            data-corp-modal-card
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
            <div
                style={{
                  width: 40, height: 40, borderRadius: "50%",
                  display: "grid", placeItems: "center", flex: "0 0 auto",
                  background: type === "success" ? "#e8f9ee" : "#fdecec",
                  color: type === "success" ? "#14a44d" : "#c0392b",
                  border: `1px solid ${type === "success" ? "#c7f2d7" : "#f7d3d0"}`,
                }}
            >
              {type === "success" ? (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M9 16.2l-3.5-3.6L4 14.1 9 19l12-12-1.5-1.4z" />
                  </svg>
              ) : (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M11 7h2v6h-2V7zm0 8h2v2h-2v-2z" />
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10
                  10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8
                  s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                  </svg>
              )}
            </div>
            <div id="corp-dialog-title" style={{ fontSize: 18, fontWeight: 800 }}>
              {type === "success" ? "전송 완료" : "전송 실패"}
            </div>
          </div>

          <div id="corp-dialog-desc" style={{ color: "#333", fontSize: 14, lineHeight: 1.55 }}>
            <p style={{ marginTop: 2 }}>{message}</p>

            {type === "success" && meta && (
                <div style={{ marginTop: 10, background: "#fafbff", border: "1px solid #eef3ff", borderRadius: 12, padding: 12 }}>
                  <dl style={{ display: "grid", gridTemplateColumns: "96px 1fr", gap: "8px 12px", margin: 0 }}>
                    <dt style={{ color: "#666" }}>성함</dt><dd style={{ margin: 0 }}>{meta.name || "-"}</dd>
                    <dt style={{ color: "#666" }}>연락처</dt><dd style={{ margin: 0 }}>{meta.phone || "-"}</dd>
                    <dt style={{ color: "#666" }}>법인명</dt><dd style={{ margin: 0 }}>{meta.company || "-"}</dd>
                    <dt style={{ color: "#666" }}>상담 항목</dt><dd style={{ margin: 0 }}>{meta.category || "-"}</dd>
                    <dt style={{ color: "#666" }}>추가 내용</dt>
                    <dd style={{ margin: 0, whiteSpace: "pre-wrap" }}>{meta.message || "-"}</dd>
                  </dl>
                </div>
            )}
          </div>

          <div style={{ display: "flex", justifyContent: "flex-end", gap: 8, marginTop: 18 }}>
            <button
                ref={closeBtnRef}
                onClick={onClose}
                style={{
                  background: "#edf2ff",
                  color: "#2f76ff",
                  border: "1px solid #cfe0ff",
                  padding: "10px 14px",
                  borderRadius: 10,
                  fontWeight: 700,
                }}
            >
              닫기
            </button>
          </div>
        </div>
      </div>
  );

  return createPortal(node, document.body);
}

export const CorpConsultForm = () => {
  const [formData, setFormData] = useState({
    name: "", phone: "", company: "", category: "", message: "",
  });
  const [sending, setSending] = useState(false);
  const [notice, setNotice] = useState(null);

  // 모달 상태
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState("success");
  const [modalMsg, setModalMsg] = useState("");
  const [modalMeta, setModalMeta] = useState(null); // 제출 스냅샷

  const openModal = (type, msg, meta) => {
    setModalType(type);
    setModalMsg(msg);
    setModalMeta(meta || null);
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);

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
      openModal("error", "입력값을 확인해 주세요. 필수 항목이 누락되었습니다.");
      return;
    }
    const phoneOk = /^01[0-9]-?\d{3,4}-?\d{4}$/.test(formData.phone);
    if (!phoneOk) {
      setNotice({ type: "error", text: "연락처 형식을 확인해주세요. 예) 010-1234-5678" });
      openModal("error", "연락처 형식이 올바르지 않습니다. 예) 010-1234-5678");
      return;
    }

    setSending(true);
    try {
      // 성공 시 모달에 보여줄 제출 스냅샷을 먼저 떼어 둡니다.
      const submitted = { ...formData };

      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const isJson = (res.headers.get("content-type") || "").includes("application/json");
      const data = isJson ? await res.json() : { error: await res.text() };
      if (!res.ok) throw new Error(data?.error || `전송 실패 (${res.status})`);

      setNotice({ type: "success", text: "상담 신청이 전송되었습니다. 곧 연락드리겠습니다!" });
      openModal("success", "상담 신청이 전송되었습니다. 곧 연락드리겠습니다!", submitted);
      resetForm();
    } catch (err) {
      console.error("Submit error:", err);
      setNotice({ type: "error", text: "전송에 실패했습니다. 잠시 후 다시 시도해주세요." });
      openModal("error", err?.message || "전송에 실패했습니다. 잠시 후 다시 시도해주세요.");
    } finally {
      setSending(false);
    }
  };

  return (
      <div className="form-container">
        <style>{`
        body { font-family: Arial, sans-serif; background:#f9f9f9; }
        .form-container {
          max-width: 520px; margin: 64px auto; padding: 24px;
          background: #fff; border-radius: 16px; box-shadow: 0 8px 24px rgba(0,0,0,0.08);
        }
        .form-container h2 { text-align: center; margin-bottom: 20px; font-size: 22px; }
        .form-group { margin-bottom: 16px; }
        label { display: block; margin-bottom: 6px; font-weight: bold; font-size: 14px; }
        input, select, textarea, button {
          width: 100%; padding: 12px; border-radius: 10px;
          border: 1px solid #d6d6d6; font-size: 14px; outline: none;
          transition: border-color .2s, box-shadow .2s;
        }
        input:focus, select:focus, textarea:focus {
          border-color: #5aa0ff; box-shadow: 0 0 0 3px rgba(90,160,255,0.18);
        }
        button {
          background: #2f76ff; color: #fff; border: none;
          font-weight: 700; cursor: pointer; letter-spacing: .2px;
        }
        button:hover { background: #1f66ef; }
        button:disabled { opacity: .7; cursor: not-allowed; }
        .msg { margin-top:12px; font-size:14px; }
        .msg.success { color:#0a7a28; }
        .msg.error { color:#b00020; }

        .spinner {
          display:inline-block; width:16px; height:16px; border:2px solid #fff; border-top-color: transparent;
          border-radius:50%; margin-right:8px; vertical-align:-2px; animation: spin .8s linear infinite;
        }
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>

        <h2>법인 상담 신청</h2>

        <form action={ENDPOINT} method="POST" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="name">대표자 성함</label>
            <input type="text" id="name" name="name" placeholder="홍길동"
                   value={formData.name} onChange={handleChange}
                   required disabled={sending} autoComplete="name" />
          </div>

          <div className="form-group">
            <label htmlFor="phone">연락처</label>
            <input type="tel" id="phone" name="phone" placeholder="010-1234-5678"
                   value={formData.phone} onChange={handleChange}
                   required disabled={sending} autoComplete="tel" />
          </div>

          <div className="form-group">
            <label htmlFor="company">법인명</label>
            <input type="text" id="company" name="company" placeholder="○○ 주식회사"
                   value={formData.company} onChange={handleChange}
                   disabled={sending} autoComplete="organization" />
          </div>

          <div className="form-group">
            <label htmlFor="category">상담 항목</label>
            <select id="category" name="category"
                    value={formData.category} onChange={handleChange}
                    required disabled={sending}>
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
            <textarea id="message" name="message" rows="4"
                      placeholder="상세한 상담 요청 내용을 작성해주세요"
                      value={formData.message} onChange={handleChange}
                      disabled={sending} />
          </div>

          {notice && <div className={`msg ${notice.type}`}>{notice.text}</div>}

          <button type="submit" disabled={sending}>
            {sending ? (<><span className="spinner" />전송 중...</>) : "상담 신청하기"}
          </button>
        </form>

        {/* 포털 모달 */}
        <CorpModal
            open={modalOpen}
            type={modalType}
            message={modalMsg}
            meta={modalType === "success" ? modalMeta : null}
            onClose={closeModal}
        />
      </div>
  );
};

export default CorpConsultForm;
