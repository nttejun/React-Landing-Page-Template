// src/content/bp/ArticleHR.jsx
import React from "react";

const ArticleHR = () => (
    <article className="article-card" itemScope itemType="https://schema.org/Article">
        <header className="article-header">
            <p className="eyebrow">인사 · 노무 인사이트</p>
            <h1 className="article-title" itemProp="headline">
                4대보험 부담 줄이는 합법적 방법 — 중소법인의 인건비 절세 전략
            </h1>
            <p className="article-subtitle">중소기업에게 4대보험은 가장 큰 고정비입니다</p>
            <meta itemProp="author" content="온비즈컨설팅 노무·세무팀"/>
            <meta itemProp="datePublished" content="2025-10-11"/>
        </header>

        <nav className="toc" aria-label="목차">
            <ol>
                <li><a href="#structure">임금구조 조정</a></li>
                <li><a href="#bonus">상여금·성과급 설계</a></li>
                <li><a href="#family">가족·단시간 근로자</a></li>
                <li><a href="#govsupport">정부지원제도</a></li>
                <li><a href="#outsourcing">외주·용역 주의사항</a></li>
                <li><a href="#automation">급여 자동화·시뮬레이션</a></li>
                <li><a href="#conclusion">마무리</a></li>
            </ol>
        </nav>

        {/* KPI */}
        <section className="kpi-strip" aria-label="핵심 지표">
            <div className="kpi"><span className="num">9~10%</span><span className="label">월 급여 대비 회사부담 비율</span></div>
            <div className="kpi"><span className="num">400만 원</span><span className="label">직원 10명 기준 월 부담액</span></div>
            <div className="kpi"><span className="num">13%</span><span className="label">비과세 설계 시 절감 가능률</span></div>
        </section>

        <section className="article-body" itemProp="articleBody">
            <p className="lead">
                4대보험은 피할 수 없습니다. 그러나 <strong>법적 구조 설계</strong>를 통해 부담을 줄이는 것은 가능합니다.
                단순히 보험료를 “적게 내는” 것이 아니라, <b>급여 체계·제도·지원금</b>을 활용한 절세 전략이 핵심입니다.
            </p>

            <h2 id="structure">① 임금구조를 조정해 보험료 기준 합리화</h2>
            <p>
                4대보험은 ‘총 보수액’을 기준으로 산정되며, <b>기본급 + 상여금 + 고정수당</b>이 포함됩니다.
                반면 <b>비과세 항목</b>은 제외되므로, 비과세 비중을 늘리면 기준액을 낮출 수 있습니다.
            </p>

            <div className="callout info">
                <p>예시: 기본급 300만 원 → 기준액 300만 원 / 기본급 260만 + 식대 10만 + 차량유지비 20만 → 기준액 260만 → 약 <b>13%</b> 절감</p>
            </div>

            <h3>활용 가능한 주요 비과세 항목</h3>
            <ul className="blue-bullets">
                <li>식대 — 월 10만 원까지 비과세</li>
                <li>자가운전보조금 — 월 20만 원까지 비과세</li>
                <li>육아·출산수당 등 복리후생성 급여</li>
                <li>야간근로수당, 출장비, 실비성 경비</li>
            </ul>
            <p className="muted">단, 명세서·근로계약서 항목 일치 필수. 형식적 비과세는 세무조사 시 부인될 수 있습니다.</p>

            <h2 id="bonus">② 상여금·성과급 지급주기 조정</h2>
            <p>상여금이 매월 정기 지급되면 4대보험 기준에 포함됩니다. 반면, <b>비정기적·성과연동형</b> 인센티브는 제외될 수 있습니다.</p>
            <ul className="blue-bullets">
                <li>매월 30만 원 정기상여 → 보험료 기준 포함</li>
                <li>반기·연간 성과급 → 제외 가능</li>
            </ul>
            <p>근로계약서와 인사규정에 <b>“성과기준에 따른 비정기 지급”</b>으로 명시하면 합법 절감이 가능합니다.</p>

            <h2 id="family">③ 가족 근로자·단시간 근로자 설계</h2>
            <p>가족이 함께 일한다면 모든 4대보험 가입이 필요한지 검토하세요. 배우자·자녀 등 가족보조 형태는 고용·산재보험 제외 가능(실근무 증빙 필수).</p>
            <h3>단시간 근로자 (주 15시간 미만)</h3>
            <ul className="blue-bullets">
                <li>국민연금·건강보험 가입 의무 없음</li>
                <li>고용보험·산재보험은 일부 적용 가능</li>
                <li>근로시간·급여명세서 명시로 추후 분쟁 예방</li>
            </ul>
            <div className="callout success"><p>단시간 보조인력 활용 시 보험료를 <b>절반 이하</b>로 줄일 수 있습니다.</p></div>

            <h2 id="govsupport">④ 정부지원 제도를 통한 보험료 보전</h2>
            <p>정부는 중소기업의 4대보험 부담을 완화하기 위해 다양한 보조 프로그램을 운영 중입니다.</p>
            <div className="table-wrap">
                <table className="finance-table">
                    <thead>
                    <tr>
                        <th>제도명</th>
                        <th>주요 대상</th>
                        <th>지원 내용</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>두루누리 사회보험 지원</td>
                        <td>근로자 10인 미만, 월 260만 원 이하</td>
                        <td>국민연금·고용보험료 60~80% 지원</td>
                    </tr>
                    <tr>
                        <td>일자리 안정자금 / 고용안정장려금</td>
                        <td>최저임금 근로자 고용 기업</td>
                        <td>인건비 및 사회보험료 일부 보전</td>
                    </tr>
                    <tr>
                        <td>청년일자리 도약장려금</td>
                        <td>청년 신규채용 후 6개월 근속</td>
                        <td>최대 960만 원 지원 (4대보험 필수)</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <p className="muted">지원금은 신청 시점·자격요건 충족 필요. 전문가 검토를 권장합니다.</p>

            <h2 id="outsourcing">⑤ 외주·용역 인력 활용 시 주의점</h2>
            <p>프리랜서로 계약했더라도 실질이 근로자이면 4대보험 소급 부과 및 과태료가 발생합니다.</p>
            <ul className="check-list">
                <li>근무시간 고정 → 근로자로 간주 가능</li>
                <li>지휘·감독 하 근무 → 근로계약 전환 대상</li>
                <li>정기 급여 지급 → 프리랜서 인정 어려움</li>
            </ul>

            <h2 id="automation">⑥ 급여 자동화 및 시뮬레이션 도입</h2>
            <p>자동계산·ERP로 상여 비정기화, 비과세 확대, 근로형태 변경의 효과를 사전에 시뮬레이션하세요.</p>
            <div className="callout info"><p>월 납부액 변화를 실시간 확인 → 연간 인건비 계획 + 세무·재무 건전성 동시 관리.</p></div>

            <div className="article-cta">
                <p>4대보험 절감 & 인건비 구조 컨설팅 — 급여체계 진단 · 절감 시뮬레이션 · 정부지원금 연계 · 노무·세무 통합관리</p>
                <a href="/consult?topic=hr" className="btn btn-custom" itemProp="url">인건비 절감 컨설팅 신청</a>
            </div>
        </section>
    </article>
);

export default ArticleHR;
