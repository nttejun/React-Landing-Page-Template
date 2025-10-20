import React from "react";
import {Link} from "react-router-dom";
import {fallbackTileBg, solutionBands} from "../content/consultingContent";
import "./BusinessConsulting.css";

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
                        to={`/solutions/${b.key}`}
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
    </>
);

export default BusinessConsulting;
