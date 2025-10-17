// src/content/policy/ArticleFundOps.jsx
import React from "react";

const ArticleFundOps = () => (
    <article className="article-card" itemScope itemType="https://schema.org/Article">
        <header className="article-header">
            <p className="eyebrow">자금조달 · 운용 인사이트</p>
            <h1 className="article-title" itemProp="headline">
                법인자금 운용, 예금만으론 부족하다 — 안전자산 vs 투자자산의 균형 전략
            </h1>
            <p className="article-subtitle">💡 중소법인 대표님들의 공통 고민</p>
            <meta itemProp="author" content="온비즈컨설팅 재무팀"/>
            <meta itemProp="datePublished" content="2025-10-11"/>
        </header>

        <nav className="toc" aria-label="목차">
            <ol>
                <li><a href="#why">법인 유보금 운용 필요성</a></li>
                <li><a href="#principles">자금 운용의 기본 원칙</a></li>
                <li><a href="#safe">안전자산 운용 전략</a></li>
                <li><a href="#invest">투자자산 운용 전략</a></li>
                <li><a href="#tax">세무 주의 포인트</a></li>
                <li><a href="#example">운용 예시</a></li>
                <li><a href="#consult">컨설팅 포인트</a></li>
            </ol>
        </nav>

        {/* KPI */}
        <section className="kpi-strip">
            <div className="kpi"><span className="num">40~60%</span><span className="label">추천 안전자산 비중</span></div>
            <div className="kpi"><span className="num">3~6개월</span><span className="label">비상자금 권장 규모</span></div>
            <div className="kpi"><span className="num">5~10%</span><span className="label">ETF/펀드 평균 수익률</span></div>
        </section>

        <section className="article-body" itemProp="articleBody">
            <p className="lead">
                “법인 통장에 현금이 쌓이는데, 그냥 예금으로 묶어두는 게 맞을까요?”
                회사의 유보금은 단순히 쌓아두는 돈이 아니라, <strong>기업의 성장과 리스크 관리에 직접적인 영향을 미치는 ‘운용 자산’</strong>입니다.
            </p>

            <h2 id="why">1️⃣ 법인 유보금, 왜 운용이 필요할까?</h2>
            <p>중소법인은 매년 이익이 쌓이며 이익잉여금(유보금)이 발생합니다. 하지만 대부분의 법인이 이 자금을 보통예금 계좌에 방치하고 있습니다.</p>
            <div className="callout info">
                <p>💡 <strong>문제점:</strong> 2%대 금리로는 물가상승률을 따라가지 못해 실질가치가 감소하며, 일정 수준 이상이 되면 ‘초과유보금’으로 간주되어 <b>법인세 부담이
                    증가</b>할 수 있습니다.</p>
            </div>

            <h2 id="principles">2️⃣ 법인 자금 운용의 기본 원칙</h2>
            <h3>원칙 1. 안전자산과 투자자산의 비율을 정하라</h3>
            <ul className="blue-bullets">
                <li>운영자금: 월 고정비(급여, 임대료, 세금 등) <b>3개월치 보유</b></li>
                <li>비상자금: 예기치 못한 매출 변동 대비, <b>3~6개월치 추가 확보</b></li>
                <li>투자자금: 나머지 자금으로 수익형 운용</li>
            </ul>
            <p className="muted">→ 자금 구간을 구분하면 위험이 자연스럽게 분산됩니다.</p>

            <h3>원칙 2. 법인 명의 투자도 합법적이다</h3>
            <p>
                법인 정관에 <strong>‘투자·자금 운용 관련 조항’</strong>이 포함되어 있다면, 법인 명의의 금융투자·부동산 투자도 가능합니다.
                다만, <b>투자 목적이 대표 개인의 이익이 아닌 법인의 이익</b>이어야 하며, 정관에 ‘금융자산 운용’, ‘유가증권 투자’, ‘부동산 임대’ 등의 문구가 포함되어야 합니다.
            </p>

            <h2 id="safe">3️⃣ 안전자산 운용 전략</h2>
            <h3>① 정기예금 / MMDA (단기운용형 예금)</h3>
            <ul className="blue-bullets">
                <li><b>장점:</b> 원금 보장, 즉시 현금화 가능</li>
                <li><b>단점:</b> 금리 낮음 (2~3%)</li>
                <li><b>추천 비율:</b> 전체 운용자금의 40~60%</li>
            </ul>
            <p>MMDA나 CMA는 유동성이 높아 급여·세금 납부용 자금 관리에 적합합니다.</p>

            <h3>② 보험형 운용 (기업형 IRP, 법인연금보험 등)</h3>
            <ul className="blue-bullets">
                <li><b>장점:</b> 세무상 비용 인정 가능, 퇴직금·성과급 대비 효과적</li>
                <li><b>단점:</b> 중도해지 시 불이익 존재</li>
                <li><b>활용 포인트:</b> 퇴직충당금 적립 + 절세 효과</li>
            </ul>
            <p>특히 <strong>대표이사 퇴직금 구조</strong>로 활용하면 매년 비용처리가 가능하며, 법인세 절감과 안정적 자산 확보를 동시에 달성할 수 있습니다.</p>

            <h2 id="invest">4️⃣ 투자자산 운용 전략</h2>
            <h3>① 채권 / 회사채 / 국공채</h3>
            <p>위험도 낮고 수익률 3~4%. 원금 손실 거의 없으며 회계상 관리가 명확합니다.</p>

            <h3>② 펀드 / ETF (지수형)</h3>
            <p>중위험·중수익 (5~10%), 장기 보유 중심 권장. 단기 매매는 잡이익 과세로 불리할 수 있습니다.</p>

            <h3>③ 부동산 / 상가 분양권 투자</h3>
            <p>고위험·고수익 (6~10%). 단, <strong>법인 정관에 부동산임대 목적 포함</strong> 및 사업자 등록 필요합니다.</p>

            <h2 id="tax">5️⃣ 법인 자금 운용 시 세무 포인트</h2>
            <div className="table-wrap">
                <table className="finance-table">
                    <thead>
                    <tr>
                        <th>항목</th>
                        <th>내용</th>
                        <th>주의점</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>투자수익</td>
                        <td>이자, 배당, 매매차익 발생 시 법인세 과세</td>
                        <td>세율 약 10~22%</td>
                    </tr>
                    <tr>
                        <td>개인전용 사용</td>
                        <td>대표 개인이 법인 자금을 임의 운용</td>
                        <td>횡령 간주 가능</td>
                    </tr>
                    <tr>
                        <td>투자손실</td>
                        <td>법인 자금 손실 발생</td>
                        <td>비용 인정 어려움</td>
                    </tr>
                    <tr>
                        <td>정관 미포함</td>
                        <td>사업 목적 외 투자행위</td>
                        <td>불법 행위 간주 가능</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <p className="muted">⚠️ 법인 통장에서 개인 계좌로 이체해 투자하는 행위는 명백한 세무 리스크입니다.</p>

            <h2 id="example">6️⃣ 실제 운용 예시</h2>
            <div className="case-box">
                <table className="finance-table">
                    <thead>
                    <tr>
                        <th>구분</th>
                        <th>금액</th>
                        <th>비중</th>
                        <th>운용전략</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>운영자금</td>
                        <td>1억 원</td>
                        <td>40%</td>
                        <td>MMDA, 보통예금</td>
                    </tr>
                    <tr>
                        <td>비상자금</td>
                        <td>7,000만 원</td>
                        <td>28%</td>
                        <td>단기정기예금, 기업보험</td>
                    </tr>
                    <tr>
                        <td>투자자금</td>
                        <td>8,000만 원</td>
                        <td>32%</td>
                        <td>ETF 50%, 채권 30%, 펀드 20%</td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <h2 id="consult">7️⃣ 컨설팅 포인트</h2>
            <ul className="check-list">
                <li>‘투자’가 아닌 <strong>‘구조 설계’ 중심</strong> 접근 필요</li>
                <li>법인세 절감 구조 + 퇴직금 설계 + 중장기 자금흐름표 통합 분석</li>
                <li>자금 운용 시뮬레이션 기반, 세무·법무 연계 전략</li>
            </ul>

            <div className="callout success">
                <p>돈을 ‘보유’가 아닌 ‘운용’으로 바꾸는 순간, 기업은 성장합니다.<br/>
                    법인의 돈은 회사 성장의 엔진입니다. 예금이 아닌 ‘운용의 관점’으로 바라보세요.</p>
            </div>

            <div className="article-cta">
                <a href="/consult?topic=policy" className="btn btn-custom" itemProp="url">법인 자금 운용 컨설팅 신청</a>
            </div>
        </section>
    </article>
);

export default ArticleFundOps;
