// src/sections/ServicesCards.jsx
import React from "react";
import { consultingServices } from "../content/consultingContent";
import "./BusinessConsulting.css"; // 기존 스타일 재사용

const ServicesCards = () => {
    return (
        <section id="consulting-services" className="biz-section biz-cards-area">
            <div className="container">
                <p className="biz-eyebrow">법인 대표님들을 위한</p>
                <h2 className="biz-hero-title">
                    종합 자문 <span className="hi">컨설팅 서비스</span>
                </h2>

                <div className="row biz-cards-grid">
                    {consultingServices.map((s, i) => (
                        <div className="col-xs-12 col-sm-6 col-md-3" key={i}>
                            {/* 각 카드마다 색상 포인트를 nth-child로 주기 위해 data-idx 제공 */}
                            <div className="biz-card" data-idx={i}>
                                <div className="biz-card__icon">
                                    <i className={s.icon} aria-hidden="true" />
                                </div>
                                <h3 className="biz-card__title">
                                    {s.title}
                                    {/* 노란 형광펜 마커 */}
                                    <span className="biz-marker" />
                                </h3>
                                <p className="biz-card__desc">{s.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesCards;
