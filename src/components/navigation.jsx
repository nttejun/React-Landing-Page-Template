// src/components/navigation.jsx (또는 Navigation.jsx)
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navigation.css";

export const Navigation = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(o => !o);
  const close = () => setOpen(false);

  const location = useLocation();
  const isActive = (pathPrefix) => location.pathname.startsWith(pathPrefix);

  // 카테고리 정의
  const categories = [
    { key: "startup", label: "재무 세무" },
    { key: "policy",  label: "자금조달 운용" },
    { key: "cert",    label: "보험 리스크" },
    { key: "bp",      label: "인사" },
  ];

  return (
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            {/* 브랜드(로고 + 텍스트) */}
            <Link to="/" className="navbar-brand" onClick={close}>
              <img
                  src="/img/logo-row.jpeg"
                  alt="Dream & Joy"
                  className="navbar-img-logo"
              />
              <span className="brand-text">Dream &amp; Joy</span>
            </Link>

            {/* 햄버거 버튼 */}
            <button
                type="button"
                className={`navbar-toggle ${open ? "" : "collapsed"}`}
                aria-expanded={open}
                aria-controls="site-nav"
                onClick={toggle}
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
          </div>

          {/* collapse: 부트스트랩 JS 대신 'in' 클래스를 리액트로 제어 */}
          <div id="site-nav" className={`collapse navbar-collapse ${open ? "in" : ""}`}>
            <ul className="nav navbar-nav navbar-right">
              {/* 솔루션 카테고리들 */}
              {categories.map((c) => {
                const href = `/solutions/${c.key}`;
                return (
                    <li key={c.key} className={isActive(href) ? "active" : ""}>
                      <Link to={href} onClick={close}>
                        {c.label}
                      </Link>
                    </li>
                );
              })}

              {/* CTA */}
              <li>
                <Link to="/consult" className="nav-cta" onClick={close}>
                  법인 세무·자금 컨설팅 신청
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
};
