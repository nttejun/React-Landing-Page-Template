// src/content/cert/ArticleInsuranceRisk.jsx
import React from "react";

const ArticleInsuranceRisk = () => (
    <article className="article-card" itemScope itemType="https://schema.org/Article">
        <header className="article-header">
            <p className="eyebrow">보험 · 리스크 인사이트</p>
            <h1 className="article-title" itemProp="headline">
                직원이 있다면 보험이 필요합니다 — 중소법인을 위한 리스크 관리의 첫걸음
            </h1>
            <p className="article-subtitle">“직원이 있다는 건, 기업이 책임을 가진다는 뜻입니다.”</p>
            <meta itemProp="author" content="온비즈컨설팅 리스크관리팀"/>
            <meta itemProp="datePublished" content="2025-10-11"/>
        </header>

        <nav className="toc" aria-label="목차">
            <ol>
                <li><a href="#intro">왜 지금, 리스크 관리인가</a></li>
                <li><a href="#risks">주요 리스크 유형</a></li>
                <li><a href="#social4">필수 4대보험</a></li>
                <li><a href="#corp">법인형 기업보험 구조</a></li>
                <li><a href="#benefit">복지·리스크 동시 설계</a></li>
                <li><a href="#case">실제 사례</a></li>
                <li><a href="#consult">컨설팅 포인트</a></li>
                <li><a href="#outro">마무리</a></li>
            </ol>
        </nav>

        {/* KPI */}
        <section className="kpi-strip" aria-label="핵심 지표">
            <div className="kpi"><span className="num">1명↑</span><span className="label">근로자 있으면 산재 의무</span></div>
            <div className="kpi"><span className="num">100%</span><span className="label">산재 보험료 회사 부담</span></div>
            <div className="kpi"><span className="num">24h</span><span className="label">사고 즉시 대응 필요</span></div>
        </section>

        <section className="article-body" itemProp="articleBody">
            <h2 id="intro">왜 지금, 리스크 관리인가</h2>
            <p className="lead">
                직원은 회사의 성장 동력이지만 동시에 법적·재무적 리스크의 출발점이 됩니다.
                근로감독 강화 흐름 속에서 <strong>직원이 1명이라도 있다면 보험과 리스크 관리는 ‘의무’</strong>가 되었습니다.
            </p>

            <h2 id="risks">1️⃣ 직원이 있을 때 발생할 수 있는 주요 리스크</h2>
            <div className="table-wrap">
                <table className="finance-table">
                    <thead>
                    <tr>
                        <th>리스크 유형</th>
                        <th>발생 상황</th>
                        <th>결과</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>산업재해</td>
                        <td>근무 중 사고, 출장 중 교통사고 등</td>
                        <td>산재 보상 청구, 형사처벌 가능</td>
                    </tr>
                    <tr>
                        <td>직원 질병/부상</td>
                        <td>근무 외 질병으로 장기휴직</td>
                        <td>인건비 부담, 대체인력 비용 증가</td>
                    </tr>
                    <tr>
                        <td>업무 중 실수</td>
                        <td>고객 손해, 계약 누락 등</td>
                        <td>손해배상 소송, 거래 중단</td>
                    </tr>
                    <tr>
                        <td>노무분쟁</td>
                        <td>퇴직금·해고·연차 미지급 등</td>
                        <td>노동청 진정, 법적 비용 발생</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <p className="muted">
                특히 산재 보상과 퇴직금 문제는 소기업에서 빈번합니다. 보장 없으면 <b>회사 자금 직접 손실</b>로 이어지고,
                심하면 <b>대표 개인 형사 책임</b>까지 발생할 수 있습니다.
            </p>

            <h2 id="social4">2️⃣ 직원이 있다면 꼭 가입해야 하는 기본 4대 보험</h2>

            <h3>① 국민연금</h3>
            <ul className="blue-bullets">
                <li><b>목적:</b> 노후소득 보장</li>
                <li><b>부담:</b> 회사·직원 50%씩</li>
                <li><b>중요성:</b> 미납 시 체납가산금 + 대표 압류 위험</li>
            </ul>

            <h3>② 건강보험</h3>
            <ul className="blue-bullets">
                <li><b>목적:</b> 직원 의료비 지원</li>
                <li><b>특징:</b> 회사 부담 50%</li>
                <li><b>주의:</b> 퇴사 후 자격 상실 신고 지연 시 회사가 추가분 납부</li>
            </ul>

            <h3>③ 고용보험</h3>
            <ul className="blue-bullets">
                <li><b>목적:</b> 실업급여·고용안정</li>
                <li><b>혜택:</b> 정부 지원사업(일자리안정자금 등) 수혜</li>
                <li><b>주의:</b> 미가입 시 각종 장려금 신청 불가</li>
            </ul>

            <h3>④ 산재보험</h3>
            <ul className="blue-bullets">
                <li><b>목적:</b> 업무 중 사고·질병 보상</li>
                <li><b>특징:</b> <b>전액 회사 부담</b> (직원 부담 없음)</li>
                <li><b>법적 의무:</b> 근로자 1명이라도 있으면 <b>의무 가입</b></li>
            </ul>

            <div className="callout info">
                <p><b>포인트:</b> 4대보험 미가입은 <b>세금 미납 못지않게 중대</b>하게 처리됩니다. 산재 발생 시 회사가 직접 보상 + 형사상 처벌 + 과태료 + 보험료 추징이 한꺼번에 올
                    수 있습니다.</p>
            </div>

            <h2 id="corp">3️⃣ 4대보험 외, 꼭 필요한 법인형 ‘기업 보험’ 구조</h2>
            <h3>🔹 근재보험(근로자재해보장보험)</h3>
            <p><b>보장:</b> 산재 외 업무·통근 중 사고의 <b>민사책임</b> 보전(초과 위자료 등).<br/>
                <b>핵심:</b> 산재보험은 <i>공적 보상</i>, 근재보험은 <i>민사 보상</i> — <b>둘 다 필요</b>.</p>

            <h3>🔹 고용주 배상책임보험</h3>
            <p>직원 과실로 회사 손해 발생 시 법적 책임 보전. 제조·물류·서비스업 등 <b>실수 리스크 업종 필수</b>. 분쟁 시 변호사 비용·합의금 보전.</p>

            <h3>🔹 단체상해보험 / 단체질병보험</h3>
            <p>근무 중 상해·질병·입원 등 보장. <b>보험료 전액 손금</b> 처리 가능 → 복지 제공 + 절세 동시 달성. 스타트업/IT는 복지 브랜드로 활용 사례 다수.</p>

            <h2 id="benefit">4️⃣ 직원 복지와 리스크 관리는 함께 설계</h2>
            <div className="table-wrap">
                <table className="finance-table">
                    <thead>
                    <tr>
                        <th>항목</th>
                        <th>단기 효과</th>
                        <th>장기 효과</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>4대보험 완비</td>
                        <td>행정 리스크 차단</td>
                        <td>정부지원금·정책자금 자격 확보</td>
                    </tr>
                    <tr>
                        <td>단체보험 운영</td>
                        <td>직원 복지 만족도 상승</td>
                        <td>채용 경쟁력 강화</td>
                    </tr>
                    <tr>
                        <td>근재보험 가입</td>
                        <td>사고 시 즉시 보상</td>
                        <td>기업 이미지 보호</td>
                    </tr>
                    <tr>
                        <td>리스크 시스템화</td>
                        <td>분쟁 예방</td>
                        <td>법적·재무적 안정성 강화</td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <h2 id="case">5️⃣ 실제 사례 — 직원 한 명의 사고가 만든 차이</h2>
            <div className="case-box">
                <p><b>A사(직원 8명)</b>: 물류센터 작업 중 골절. 산재보상 외 <b>위자료 4,000만 원</b> 추가 청구. <b>근재보험</b>으로 전액 보전 → 경영 차질 최소화.
                </p>
                <p><b>B사</b>: 동일 사고, 근재보험 없음. 대표 개인 통장에서 <b>3,800만 원</b> 지출 → 유동성 악화로 일시 휴업.</p>
            </div>

            <h2 id="consult">6️⃣ 컨설팅 포인트 — “보험은 비용이 아닌, 경영의 방패”</h2>
            <ul className="check-list">
                <li>직원 수·업종별 <b>리스크 매핑</b> 후 보장 공백 제거</li>
                <li>근재/배상/단체보험을 <b>맞춤 포트폴리오</b>로 구성</li>
                <li>보험료의 <b>세무상 비용처리</b> 구조 설계로 현금흐름 최적화</li>
            </ul>

            <div className="callout success">
                <p>직원이 있다면 보험은 ‘선택’이 아니라 <b>‘책임’</b>입니다. “사고가 나면 대응”이 아닌, “사고가 나도 멈추지 않는 구조”를 지금 만드세요 — 그 첫걸음이 <b>법인 보험
                    구조화</b>입니다.</p>
            </div>

            <div className="article-cta">
                <p>중소법인 리스크 관리 컨설팅</p>
                <a href="/consult?topic=cert" className="btn btn-custom" itemProp="url">법인 맞춤형 보험 진단 리포트 무료 신청</a>
            </div>
        </section>
    </article>
);

export default ArticleInsuranceRisk;
