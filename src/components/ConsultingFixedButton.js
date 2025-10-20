import React from "react";
import { Link } from "react-router-dom";
import "./ConsultingFixedButton.css";

const ConsultingFixedButton = () => {
    return (
        <div className="consult-fixed-wrap">
            <Link to="/consult" className="consult-fixed-btn">
                💼 법인 컨설팅 신청하기
            </Link>
        </div>
    );
};

export default ConsultingFixedButton;
