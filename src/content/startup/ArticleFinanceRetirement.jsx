// src/content/startup/ArticleFinanceRetirement.jsx
import React from "react";

const ArticleFinanceRetirement = () => (
    <article className="article-card" itemScope itemType="https://schema.org/Article">
        <header className="article-header">
            <p className="eyebrow">재무 · 세무 인사이트</p>
            <h1 className="article-title" itemProp="headline">
                명목상 퇴직금·퇴직연금 설계로 대표이사 퇴직금 극대화하기
            </h1>
            <p className="article-subtitle">대표이사의 퇴직금, 단순 계산이 아닙니다</p>
            <meta itemProp="author" content="온비즈컨설팅 세무팀"/>
            <meta itemProp="datePublished" content="2025-10-17"/>
        </header>

        <section className="article-body" itemProp="articleBody">
            <p className="lead">
                많은 중소법인 대표님들은 “퇴직금은 마지막 급여 기준 30일치 × 근속연수”라고 단순히 생각하지만,
                대표이사의 경우 퇴직금은 기업 구조 설계와 세무 전략의 핵심 수단이 될 수 있습니다.
            </p>

            <h2>대표이사 퇴직금, 왜 중요할까?</h2>
            <p>
                대표이사 퇴직금은 단순한 ‘보상금’이 아니라 <strong>법인의 유보금을 대표 개인으로 이전할 수 있는 합법적 수단</strong>입니다.
                퇴직소득세율은 근로소득세보다 낮으며, 퇴직금은 전액 법인 비용(손금)으로 처리되어
                <strong>법인세 절감 + 상속세 절세</strong> 효과를 동시에 얻을 수 있습니다.
            </p>

            <h2>1️⃣ 퇴직금 산정 구조의 기본 원리</h2>
            <p>
                공식은 <b>퇴직금 = 1일 평균임금 × 30일 × 근속연수</b>이며,
                퇴직 직전 3개월 급여가 높을수록 퇴직금이 커집니다.
                즉, 퇴직 3~6개월 전 보수구조 조정을 통해 합법적으로 퇴직금을 극대화할 수 있습니다.
            </p>

            <div className="table-wrap">
                <table className="finance-table">
                    <thead>
                    <tr>
                        <th>구분</th>
                        <th>퇴직 직전 보수</th>
                        <th>근속연수</th>
                        <th>퇴직금</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>A 대표</td>
                        <td>월 500만 원</td>
                        <td>10년</td>
                        <td>5,000만 원</td>
                    </tr>
                    <tr>
                        <td>B 대표</td>
                        <td>월 1,000만 원 (퇴직 3개월 전 인상)</td>
                        <td>10년</td>
                        <td>1억 원</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <p className="muted">💡 같은 근속연수라도 보수 조정만으로 2배 차이가 납니다.</p>

            <h2>2️⃣ 정관과 이사회 결의로 퇴직금 기준 확립</h2>
            <ul className="blue-bullets">
                <li><b>정관 명시:</b> “대표이사 퇴직금은 최종 보수월액의 1개월분 × 근속연수로 한다.”</li>
                <li><b>이사회 결의:</b> 지급사유·금액·근속연수 명시 필수</li>
            </ul>
            <p>
                정관 규정이 없거나 과도한 금액은 세무조사 시 ‘상여금 처리’되어 손금 인정이 부인될 수 있습니다.
            </p>

            <h2>3️⃣ 퇴직연금(DC형·DB형)을 활용한 절세 구조</h2>
            <ul className="blue-bullets">
                <li><b>DC형(확정기여형):</b> 매년 일정 금액을 법인이 적립 → 전액 손금 인정</li>
                <li><b>DB형(확정급여형):</b> 대표 급여 인상 시 자동으로 퇴직금 규모 확대</li>
            </ul>
            <p>
                예: 월 급여 1,000만 원, 근속 10년, 퇴직연금 적용 시
                <b>법인세 약 2,000만 원</b>, <b>대표 개인세 약 1,200만 원</b> 절감 효과.
            </p>

            <h2>4️⃣ 퇴직금 극대화를 위한 명목상 구조 전략</h2>
            <ol className="num-steps">
                <li><b>퇴직 전 3개월 급여 인상 전략:</b> 평균보수 상승으로 퇴직금 자동 확대.</li>
                <li><b>근속연수별 가중치 규정:</b> 정관에 10년 이상 1.5배, 15년 이상 2배 지급 규정 추가.</li>
                <li><b>법인 연금보험/확정기여형 상품 활용:</b> 매월 납입액 전액 손금 처리 + 대표 노후자산 형성.</li>
            </ol>

            <h2>5️⃣ 퇴직금 과다지급 시 유의사항</h2>
            <ul className="check-list">
                <li>정관·이사회 결의 근거 없는 금액은 상여금으로 간주</li>
                <li>동종업계 대비 과도한 수준(최근 3년 평균보수의 1/10 초과)은 위험</li>
                <li>퇴직 후 일정 기간 내 실제 지급이 이뤄져야 손금 인정</li>
            </ul>

            <h2>6️⃣ 실제 사례로 보는 구조 설계</h2>
            <div className="case-box">
                <p>
                    <b>A법인 (매출 25억, 근속 12년)</b><br/>
                    퇴직 전 급여 700만 → 1,200만 원 인상 + 10년 이상 근속 시 1.5배 규정 추가.<br/>
                    결과: 퇴직금 <b>1억 2,600만 → 2억 2,000만 원</b>, 법인세 절감 <b>4,800만 원</b>, 실절세 약 <b>1억 원</b>.
                </p>
            </div>

            <div className="callout success">
                <p>
                    대표이사 퇴직금은 단순 계산이 아닙니다.
                    정관 설계와 보수조정만으로 <strong>법인 절세 + 개인 자산 이전</strong>을 동시에 달성할 수 있습니다.
                </p>
            </div>

            <div className="article-cta">
                <p>퇴직금·퇴직연금 설계 전문 컨설팅</p>
                <a href="/consult?topic=retirement" className="btn btn-custom" itemProp="url">
                    대표이사 퇴직금 컨설팅 신청
                </a>
            </div>
        </section>
    </article>
);

export default ArticleFinanceRetirement;
