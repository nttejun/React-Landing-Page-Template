import React from "react";
import { Link } from "react-router-dom";
import { consultingServices, solutionBands, fallbackTileBg } from "../content/consultingContent";
import "./BusinessConsulting.css";

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

const SolutionBands = () => {
    return (
        <section id="solution-bands" className="biz-section biz-bands-area">
            <div className="container">
                <p className="biz-eyebrow">중소기업과 대표의 든든한 파트너</p>
                <h2 className="biz-hero-title">Dream And Joy</h2>
                <p className="biz-sub">세금 고민부터 자금 운용까지 D&J와 함께하세요.</p>
            </div>

            <div className="biz-bands-grid">
                {solutionBands.map((b, i) => (
                    <Link
                        key={b.key}
                        to={`/solutions/${b.key}`}                // ✅ /solutions/:key 로 이동
                        className="biz-band"
                        data-idx={i}
                        style={{ backgroundImage: `url(${b.bg || fallbackTileBg})` }}
                    >
                        <div className="biz-band__overlay" />
                        <div className="biz-band__inner">
                            <div>
                                <h3 className="biz-band__title">{b.title}</h3>
                                <div className="biz-band__subtitle">{b.subtitle}</div>
                            </div>

                            <div className="biz-band__btn">
                                <span>자세히보기</span>
                                <span className="arrow">›</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

const BusinessConsulting = () => (
    <>
        <SolutionBands />
        {/*<ServicesCards />*/}
    </>
);

export default BusinessConsulting;
