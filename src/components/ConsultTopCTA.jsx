// src/components/ConsultTopCTA.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./ConsultTopCTA.css";

const ConsultTopCTA = () => {
    return (
        <section className="consult-top-cta">
            <div className="container text-center">
                <h2 className="cta-title">법인 세무·자금 컨설팅 신청</h2>
                <p className="cta-desc">
                    💡 아래 바로가기를 통해 30초 정도면 빠르게 <strong>법인 맞춤 절세·자금 전략 무료 진단</strong>을 진행하실 수 있습니다.
                </p>
                <Link to="/consult" className="btn btn-custom btn-lg">
                    법인 컨설팅 바로가기
                </Link>
            </div>
        </section>
    );
};

export default ConsultTopCTA;
