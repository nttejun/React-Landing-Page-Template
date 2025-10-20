import React from "react";

const ArticleExecutiveInsuranceTax = () => (
    <article className="article-card" itemScope itemType="https://schema.org/Article">
        <header className="article-header">
            <p className="eyebrow">보험 · 리스크 인사이트</p>
            <h1 className="article-title" itemProp="headline">
                임원 보장성 보험(건강·상해) 세법 처리 — 비용 인정과 절세의 경계선
            </h1>
            <p className="article-subtitle">구조가 바뀌면 세금 효과가 바뀝니다. “누가 내고, 누가 받는가?”</p>
            <meta itemProp="author" content="온비즈컨설팅 리스크·세무팀" />
            <meta itemProp="datePublished" content="2025-10-18" />
        </header>

        {/* 목차 */}
        <nav className="toc" aria-label="목차">
            <ol>
                <li><a href="#why">왜 세무상 민감한가</a></li>
                <li><a href="#types">임원 보험의 기본 분류</a></li>
                <li><a href="#rule">세법의 판단 기준</a></li>
                <li><a href="#treatment">주요 상품별 세법 처리</a></li>
                <li><a href="#caution">세무상 주의 포인트</a></li>
                <li><a href="#compare">세무 처리 예시</a></li>
                <li><a href="#case">실제 적용 사례</a></li>
                <li><a href="#consult">컨설팅 포인트</a></li>
            </ol>
        </nav>

        {/* KPI/핵심 포인트 */}
        <section className="kpi-strip" aria-label="핵심 지표">
            <div className="kpi"><span className="num">법인=수익자</span><span className="label">손금 인정 전제</span></div>
            <div className="kpi"><span className="num">단체형</span><span className="label">복리후생비 처리 용이</span></div>
            <div className="kpi"><span className="num">환급 有</span><span className="label">자산계상 검토</span></div>
        </section>

        <section className="article-body" itemProp="articleBody">
            <h2 id="why">임원 보장성 보험, 왜 세무상 민감한가?</h2>
            <p className="lead">
                임원 건강·상해 보장은 경영 안정의 핵심이지만, <b>세법은 “누가 부담하고, 누가 혜택을 받는가”</b>로 비용 인정 여부를 달리 봅니다.
                같은 보험이라도 계약 구조에 따라 전액 손금, 일부 손금, 전액 불인정까지 달라질 수 있습니다.
            </p>

            <h2 id="types">1️⃣ 임원 보험의 기본 분류 — ‘보장 목적’이 세법을 가른다</h2>
            <div className="table-wrap">
                <table className="finance-table">
                    <thead>
                    <tr><th>구분</th><th>대표 상품</th><th>세법 분류</th><th>비용처리</th></tr>
                    </thead>
                    <tbody>
                    <tr><td>보장성(손해보험성)</td><td>상해/질병보험, 단체보험</td><td>위험보장</td><td>가능(법인 수익자 조건)</td></tr>
                    <tr><td>저축성</td><td>종신/변액/연금</td><td>자산성</td><td>불가 또는 자산계상</td></tr>
                    <tr><td>퇴직보장형</td><td>IRP, DC, DB</td><td>퇴직충당</td><td>가능(규정 충족 시)</td></tr>
                    </tbody>
                </table>
            </div>

            <h2 id="rule">2️⃣ 세법의 판단 기준 — “누가 혜택을 받는가?”</h2>
            <div className="table-wrap">
                <table className="finance-table">
                    <thead>
                    <tr><th>계약자(납입)</th><th>수익자(보험금)</th><th>세법 처리</th><th>비고</th></tr>
                    </thead>
                    <tbody>
                    <tr><td>법인</td><td>법인</td><td><b>전액 손금 인정</b></td><td>가장 안전</td></tr>
                    <tr><td>법인</td><td>임원(개인)</td><td><b>손금 불인정</b></td><td>상여 처리·추가 과세</td></tr>
                    <tr><td>임원(개인)</td><td>법인</td><td>개인 지출</td><td>실익 없음</td></tr>
                    <tr><td>임원(개인)</td><td>임원(개인)</td><td>개인보험</td><td>법인세 영향 無</td></tr>
                    </tbody>
                </table>
            </div>
            <p className="muted">결론: <b>계약자=법인 & 수익자=법인</b>일 때만 손금 처리 안전지대.</p>

            <h2 id="treatment">3️⃣ 대표적 보장성 보험의 세법 처리</h2>
            <h3>① 상해보험 / 단체상해보험</h3>
            <ul className="blue-bullets">
                <li><b>계약자:</b> 법인 / <b>수익자:</b> 법인</li>
                <li><b>처리:</b> 보험료 전액 손금, 보험금 수령 시 법인에 귀속</li>
                <li><b>포인트:</b> “업무상 사고로 회사가 피해” 논리 → 안전</li>
            </ul>

            <h3>② 질병·건강보험(진단·입원형)</h3>
            <ul className="blue-bullets">
                <li>수익자가 <b>법인</b>이면 손금 처리 가능</li>
                <li>수익자가 <b>임원 개인</b>이면 손금 불인정(상여 간주)</li>
            </ul>
            <div className="callout info">
                <p><b>주의:</b> 계약은 법인 명의라도 수익자를 개인으로 두면 매년 납입보험료가 대표의 급여로 과세될 수 있습니다.</p>
            </div>

            <h3>③ 단체보험(임직원 전체)</h3>
            <ul className="blue-bullets">
                <li>임원 포함 <b>전 직원</b> 대상이면 복리후생비로 전액 손금 용이</li>
                <li>임원만 별도 가입 시 특혜성 지급으로 손금 부인 리스크</li>
            </ul>

            <h2 id="caution">4️⃣ 세무상 주의 포인트</h2>
            <ul className="check-list">
                <li>수익자 개인 설정 시 <b>무조건 과세</b> (상여 + 4대보험 부담 증가)</li>
                <li>업무 관련성 불분명 → 손금 불인정 (약관/계약서에 업무 목적 명시)</li>
                <li><b>해약환급금</b> 발생 상품은 자산계상 필요(손금 불가)</li>
                <li>혼합형 상품 주의: <b>환급률 50%↑</b>면 저축성 분류 가능</li>
            </ul>

            <h2 id="compare">5️⃣ 세무 처리 예시 비교</h2>
            <div className="table-wrap">
                <table className="finance-table">
                    <thead>
                    <tr><th>구분</th><th>보험료 구조</th><th>세법 처리</th><th>결과</th></tr>
                    </thead>
                    <tbody>
                    <tr><td>법인/법인(상해)</td><td>법인 납입·법인 수익</td><td>손금 인정</td><td>절세 가능</td></tr>
                    <tr><td>법인/개인(질병)</td><td>법인 납입·개인 수익</td><td>손금 불인정</td><td>상여 과세</td></tr>
                    <tr><td>단체보험(전직원)</td><td>복리후생</td><td>손금 인정</td><td>무리 없음</td></tr>
                    <tr><td>종신/변액(환급 有)</td><td>법인 납입·환급 발생</td><td>자산계상</td><td>손금 불가</td></tr>
                    </tbody>
                </table>
            </div>

            <h2 id="case">6️⃣ 실제 적용 사례</h2>
            <div className="case-box">
                <p>
                    <b>A법인(직원 15명, 임원 2명)</b>은 대표 상해보험과 임직원 단체보험을 운용했으나, 대표 질병보험의 수익자를 개인으로 설정해
                    매년 400만원을 비용 처리하다 세무조사에서 <b>손금 불인정</b> 판정을 받았습니다.
                </p>
                <p>
                    ㈜온비즈컨설팅은 <b>수익자=법인</b>으로 변경하고 임원 포함 <b>전 직원 단체보험</b>으로 재편해 보험료 전액을 복리후생비로 처리.
                    결과적으로 <b>법인세 약 240만원</b> 절감, 구조 합법화, 세무 리스크 0.
                </p>
            </div>

            <div className="callout success">
                <p>
                    같은 보험이라도 <b>수익자 한 줄</b>로 세금이 달라집니다. 지금 계약 구조를 점검해 손금 인정의 안전지대를 확보하세요.
                </p>
            </div>

            <div className="article-cta">
                <p>임원/단체보험 구조 진단 · 수익자 변경 실무 · 회계·세무 처리 일괄 컨설팅</p>
                <a href="/consult?topic=exec-insurance" className="btn btn-custom" itemProp="url">
                    임원 보험 세법 컨설팅 신청
                </a>
            </div>
        </section>
    </article>
);

export default ArticleExecutiveInsuranceTax;
