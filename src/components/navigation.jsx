import React from "react";
import { Link } from "react-router-dom"; // ★ 추가

export const Navigation = () => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        {/* ... 생략 ... */}
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            {/* 기존 앵커들 그대로 */}
            <li><a href="#features" className="page-scroll">Features</a></li>
            <li><a href="#about" className="page-scroll">About</a></li>
            <li><a href="#services" className="page-scroll">Services</a></li>
            <li><a href="#portfolio" className="page-scroll">Gallery</a></li>
            <li><a href="#testimonials" className="page-scroll">Testimonials</a></li>
            <li><a href="#team" className="page-scroll">Team</a></li>
            <li><a href="#contact" className="page-scroll">Contact</a></li>
            <li><a href="#bizcontact" className="page-scroll">BizContact</a></li>

            {/* ★ 새 페이지 라우팅 */}
            <li><Link to="/consult">법인 상담</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
