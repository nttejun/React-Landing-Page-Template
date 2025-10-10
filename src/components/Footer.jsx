import React from "react";
import companyInfo from "../content/footer";
import "./Footer.css";

/**
 * 기업정보 푸터
 * - 마이크로데이터(schema.org Organization) 포함
 * - 반응형 3열: 회사/바로가기/연락처
 * - 하단 라인: 사업자 고시 정보 + 저작권
 */
const Footer = () => {
    const ci = companyInfo;

    return (
        <footer id="footer" className="site-footer" itemScope itemType="https://schema.org/Organization">
            {/* JSON-LD (SEO) */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": ci.nameEn || ci.nameKo,
                    "url": typeof window !== "undefined" ? window.location.origin : "",
                    "email": ci.email,
                    "telephone": ci.tel,
                    "address": { "@type": "PostalAddress", "streetAddress": ci.address },
                })
            }} />

            <div className="container">
                <div className="row footer-top">
                    {/* 3) 연락처 */}
                    <div className="col-xs-12 col-sm-12 col-md-4 footer-col">
                        {/*<h5 className="ft-sub">연락처</h5>*/}
                        <ul className="ft-contact">
                            <li><i className="fa fa-map-marker" aria-hidden="true" /> {ci.address}</li>
                            {ci.openHours && <li><i className="fa fa-clock-o" aria-hidden="true" /> {ci.openHours}</li>}
                        </ul>
                    </div>
                </div>

                {/* 사업자 고시 라인 */}
                <div className="footer-meta">
                    <ul className="meta-list">
                        <li>대표자: {ci.ceo}</li>
                        <li>사업자등록번호: {ci.businessNo}</li>
                    </ul>
                    <div className="copy">{ci.copyright}</div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;