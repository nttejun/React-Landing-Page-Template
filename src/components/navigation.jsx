// Navigation.jsx
import React, {useState} from "react";
import {Link} from "react-router-dom";

export const Navigation = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(o => !o);
  const close = () => setOpen(false);

  return (
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <img src="img/logo-row.jpeg" alt="Dream & Joy" className="navbar-img-logo"/>
            <a className="navbar-brand" href="/">
              <span className="brand-text">Dream & Joy</span>
            </a>

            {/* 햄버거 버튼 (부트스트랩 아이콘바 스타일 활용) */}
            <button
                type="button"
                className={`navbar-toggle ${open ? "" : "collapsed"}`}
                aria-expanded={open}
                aria-controls="site-nav"
                onClick={toggle}
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"/>
              <span className="icon-bar"/>
              <span className="icon-bar"/>
            </button>
          </div>

          {/* collapse: 부트스트랩 JS 대신 'in' 클래스를 리액트로 제어 */}
          <div id="site-nav" className={`collapse navbar-collapse ${open ? "in" : ""}`}>
            <ul className="nav navbar-nav navbar-right">
              {/*
              <li><a href="#features" className="page-scroll" onClick={close}>Features</a></li>
              <li><a href="#about" className="page-scroll" onClick={close}>About</a></li>
              <li><a href="#services" className="page-scroll" onClick={close}>Services</a></li>
              <li><a href="#portfolio" className="page-scroll" onClick={close}>Gallery</a></li>
              <li><a href="#testimonials" className="page-scroll" onClick={close}>Testimonials</a></li>
              <li><a href="#team" className="page-scroll" onClick={close}>Team</a></li>
              <li><a href="#contact" className="page-scroll" onClick={close}>Contact</a></li>
*/}
              <li><Link to="/consult" onClick={close}>법인 세무·자금 컨설팅 신청</Link></li>
            </ul>
          </div>
        </div>
      </nav>
  );
};
