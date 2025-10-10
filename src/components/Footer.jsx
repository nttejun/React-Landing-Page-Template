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
                    {/* 1) 회사 소개 */}
                    <div className="col-xs-12 col-sm-6 col-md-4 footer-col">
                        {/*<h4 className="ft-title" itemProp="name">{ci.nameKo}</h4>*/}
                        {/* 소셜 */}
                        {/*
                        {ci.socials?.length > 0 && (
                            <ul className="ft-socials">
                                {ci.socials.map((s, i) => (
                                    <li key={i}>
                                        <a href={s.href} target="_blank" rel="noreferrer" aria-label={s.icon}>
                                            <i className={s.icon} aria-hidden="true" />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        )}
                        */}
                    </div>

                    {/* 3) 연락처 */}
                    <div className="col-xs-12 col-sm-12 col-md-4 footer-col">
                        {/*<h5 className="ft-sub">연락처</h5>*/}
                        <ul className="ft-contact">
                            <li><i className="fa fa-map-marker" aria-hidden="true" /> {ci.address}</li>
                            {/*
                            <li><i className="fa fa-phone" aria-hidden="true" /> <a href={`tel:${ci.tel}`}>{ci.tel}</a></li>
                            {ci.fax && <li><i className="fa fa-fax" aria-hidden="true" /> {ci.fax}</li>}
                            <li><i className="fa fa-envelope" aria-hidden="true" /> <a href={`mailto:${ci.email}`}>{ci.email}</a></li>
                            */}
                            {ci.openHours && <li><i className="fa fa-clock-o" aria-hidden="true" /> {ci.openHours}</li>}
                        </ul>
                        {/*
                        {ci.bank && (
                            <div className="ft-bank">
                                <span className="label">입금계좌</span>
                                <span>{ci.bank.bankName} {ci.bank.account} ({ci.bank.holder})</span>
                            </div>
                        )}
                        */}
                    </div>
                </div>

                {/* 사업자 고시 라인 */}
                <div className="footer-meta">
                    <ul className="meta-list">
                        <li>대표자: {ci.ceo}</li>
                        <li>사업자등록번호: {ci.businessNo}</li>
                        {/*<li>개인정보보호책임자: {ci.privacyOfficer}</li>*/}
                    </ul>
                    <div className="copy">{ci.copyright}</div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;