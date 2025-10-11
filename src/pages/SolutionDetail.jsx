import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./SolutionDetail.css";

/* ───────── 상단 Hero ───────── */
const Hero = ({ title, subtitle }) => (
    <section className="sol-hero">
        <div className="container">
            {subtitle ? <p className="sol-eyebrow">{subtitle}</p> : <div style={{ height: 8 }} />}
            <h1 className="sol-title">{title}</h1>
            <div className="sol-breadcrumb">
                <Link to="/">홈</Link> <span>›</span>{" "}
                <Link to="/#solution-bands">솔루션</Link> <span>›</span>{" "}
                <strong>{title}</strong>
            </div>
        </div>
    </section>
);

/* ───────── (1) 재무/세무 상세 ───────── */
const Article_FinanceTax = () => (
    <article className="article-card" itemScope itemType="https://schema.org/Article">
        <header className="article-header">
            <p className="eyebrow">재무 · 세무 인사이트</p>
            <h1 className="article-title" itemProp="headline">
                [1편] 대표이사 가지급금, 왜 반드시 정리해야 할까?
            </h1>
            <p className="article-subtitle">💡 대표님들이 가장 자주 하는 세무 질문 TOP 1</p>
            <meta itemProp="author" content="온비즈컨설팅 세무팀" />
            <meta itemProp="datePublished" content="2025-10-11" />
        </header>

        {/* 목차 */}
        <nav className="toc" aria-label="목차">
            <ol>
                <li><a href="#risk">가지급금이 위험한 이유</a></li>
                <li><a href="#causes">가지급금 발생 원인</a></li>
                <li><a href="#case">실제 사례</a></li>
                <li><a href="#steps">정리 방법 3단계</a></li>
                <li><a href="#consulting">컨설팅 포인트</a></li>
                <li><a href="#conclusion">마무리</a></li>
            </ol>
        </nav>

        {/* KPI */}
        <section className="kpi-strip" aria-label="핵심 지표">
            <div className="kpi"><span className="num">4.6%</span><span className="label">인정이자율(’25)</span></div>
            <div className="kpi"><span className="num">₩4,600,000</span><span className="label">1억 당 연간 이자</span></div>
            <div className="kpi"><span className="num">1~2년</span><span className="label">권장 정리 기간</span></div>
        </section>

        <section className="article-body" itemProp="articleBody">
            <p className="lead">
                “가지급금이 좀 있는데, 굳이 지금 정리해야 하나요?” 이 질문은 중소법인 대표님들이 세무 점검 시 가장 자주 묻는 내용입니다.
                가지급금은 단순히 “회사 돈을 대표가 잠시 빌려간 상태”처럼 보이지만 세법에서는 결코 가볍게 보지 않습니다.
            </p>

            <p>
                시간이 지날수록 <strong>세금 리스크, 신용 리스크, 상속 리스크</strong>로 번지며 대표 개인의 자산에도 영향을 줍니다.
                그러므로 “일단 두자”가 아니라 <strong>전략적으로 정리해야 하는 부채</strong>로 접근해야 합니다.
            </p>

            <h2 id="risk">가지급금이 위험한 3가지 이유</h2>

            <h3>1️⃣ 법인세 추가 과세 (인정이자 부과)</h3>
            <p>국세청은 가지급금을 <strong>‘무이자 대여’</strong>로 간주하여 매년 <strong>인정이자</strong>를 계산, 법인세를 추가 부과합니다.</p>
            <div className="callout info">
                <p><strong>예시</strong> · 가지급금 1억 → 연간 <b>460만 원</b> 이자 인식. 3~5년 누적 시 수천만 원까지 확대될 수 있습니다.</p>
            </div>

            <h3>2️⃣ 세무조사 리스크</h3>
            <p>장기 보유·규모 과다 시 <strong>표적조사 리스트</strong> 포함 가능. 세무조사 1순위가 되기 쉽습니다.</p>

            <h3>3️⃣ 상속·증여세 폭탄</h3>
            <p>사망 시 가지급금은 <strong>“회사가 대표에게 받을 채권”</strong>으로 상속재산에 포함되어 자녀의 세부담이 급증합니다.</p>

            <h2 id="causes">가지급금이 생기는 대표적인 원인</h2>
            <ul className="blue-bullets">
                <li>대표 개인 경비를 법인카드로 결제</li>
                <li>세금·보험료 등을 회사가 대신 납부</li>
                <li>대표 개인 명의 계좌로 매출금 입금</li>
                <li>거래처 정산 중 일시 미처리금 발생</li>
            </ul>
            <p className="muted">대부분 <strong>법인/개인의 금전 경계가 모호</strong>한 상황에서 발생 — 회계 오류가 아닌 <b>경영관리 이슈</b>입니다.</p>

            <h2 id="case">실제 사례로 보는 가지급금 리스크</h2>
            <div className="case-box">
                <p>A중소기업은 3년간 가족경비 법인카드 사용으로 가지급금 <b>2.4억</b> 누적 → 법인세 추가 <b>1,200만</b>, 인정이자 <b>330만</b> 증가.</p>
                <p>대표 보수 조정 + 일부 배당전환으로 <b>1년 내 완전 정리</b>, 대표 개인세 절감 및 <b>신용평가 개선</b>.</p>
            </div>

            <h2 id="steps">가지급금 정리 방법 3단계</h2>
            <ol className="num-steps">
                <li><strong>대표 보수 조정</strong> — 급여/상여 상계. 무리한 인상은 부당행위 소지 → <b>전년 대비 10~20%</b> 권장.</li>
                <li><strong>배당전환 전략</strong> — 이익잉여금 충분 시 <b>배당소득세 14%</b>로 효율 정리(이중과세 회피).</li>
                <li><strong>상환 또는 출자전환</strong> — 상환/자본전환으로 <b>부채비율 개선</b>·<b>신용등급 향상</b>.</li>
            </ol>

            <h2 id="consulting">🧭 컨설팅 포인트: “정리 시점이 곧 절세 타이밍”</h2>
            <ul className="check-list">
                <li>정리 시점에 따라 법인세·소득세·상속세 효과가 크게 달라짐</li>
                <li>세무·법무 <b>시뮬레이션 기반</b> 플랜 필수</li>
                <li>사례: <b>가지급금 5억 → 2년 내 전액 상환</b> / 조사 0건 / 세금절감 <b>4천만+</b></li>
            </ul>

            <h2 id="conclusion">지금 점검이 절세의 시작입니다</h2>
            <div className="callout success">
                <p>장부에 ‘가지급금’이 <b>1,000만 원+</b>이면 곧바로 플랜을 수립하세요. 미루면 세금은 커지고, 정리하면 <b>재무 건전성</b>이 즉시 개선됩니다.</p>
            </div>

            <div className="article-cta">
                <p>세무·회계·법무 전문가가 함께하는 중소법인 가지급금 정리</p>
                <a href="/consult?topic=finance" className="btn btn-custom" itemProp="url">무료 세무 컨설팅 신청</a>
            </div>
        </section>
    </article>
);

/** ② 자금조달 / 운용 (policy) — 법인자금 운용 콘텐츠 */
const Article_FundOps = () => (
    <article className="article-card" itemScope itemType="https://schema.org/Article">
        <header className="article-header">
            <p className="eyebrow">자금조달 · 운용 인사이트</p>
            <h1 className="article-title" itemProp="headline">
                법인자금 운용, 예금만으론 부족하다 — 안전자산 vs 투자자산의 균형 전략
            </h1>
            <p className="article-subtitle">💡 중소법인 대표님들의 공통 고민</p>
            <meta itemProp="author" content="온비즈컨설팅 재무팀" />
            <meta itemProp="datePublished" content="2025-10-11" />
        </header>

        {/* 목차 */}
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

        {/* 핵심지표 */}
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
            <p>
                중소법인은 매년 이익이 쌓이며 이익잉여금(유보금)이 발생합니다.
                하지만 대부분의 법인이 이 자금을 보통예금 계좌에 방치하고 있습니다.
            </p>
            <div className="callout info">
                <p>
                    💡 <strong>문제점:</strong> 2%대 금리로는 물가상승률을 따라가지 못해 실질가치가 감소하며,
                    일정 수준 이상이 되면 ‘초과유보금’으로 간주되어 <b>법인세 부담이 증가</b>할 수 있습니다.
                </p>
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
                법인 정관에 <strong>‘투자·자금 운용 관련 조항’</strong>이 포함되어 있다면,
                법인 명의의 금융투자·부동산 투자도 가능합니다.
                다만, <b>투자 목적이 대표 개인의 이익이 아닌 법인의 이익</b>이어야 하며,
                정관에 ‘금융자산 운용’, ‘유가증권 투자’, ‘부동산 임대’ 등의 문구가 포함되어야 합니다.
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
            <p>
                특히 <strong>대표이사 퇴직금 구조</strong>로 활용하면 매년 비용처리가 가능하며,
                법인세 절감과 안정적 자산 확보를 동시에 달성할 수 있습니다.
            </p>

            <h2 id="invest">4️⃣ 투자자산 운용 전략</h2>
            <h3>① 채권 / 회사채 / 국공채</h3>
            <p>위험도 낮고 수익률 3~4%. 원금 손실 거의 없으며 회계상 관리가 명확합니다.</p>

            <h3>② 펀드 / ETF (지수형)</h3>
            <p>중위험·중수익 (5~10%), 장기 보유 중심 권장.
                단기 매매는 잡이익 과세로 불리할 수 있습니다.</p>

            <h3>③ 부동산 / 상가 분양권 투자</h3>
            <p>고위험·고수익 (6~10%).
                단, <strong>법인 정관에 부동산임대 목적 포함</strong> 및
                사업자 등록 필요합니다.</p>

            <h2 id="tax">5️⃣ 법인 자금 운용 시 세무 포인트</h2>
            <div className="table-wrap">
                <table className="finance-table">
                    <thead>
                    <tr><th>항목</th><th>내용</th><th>주의점</th></tr>
                    </thead>
                    <tbody>
                    <tr><td>투자수익</td><td>이자, 배당, 매매차익 발생 시 법인세 과세</td><td>세율 약 10~22%</td></tr>
                    <tr><td>개인전용 사용</td><td>대표 개인이 법인 자금을 임의 운용</td><td>횡령 간주 가능</td></tr>
                    <tr><td>투자손실</td><td>법인 자금 손실 발생</td><td>비용 인정 어려움</td></tr>
                    <tr><td>정관 미포함</td><td>사업 목적 외 투자행위</td><td>불법 행위 간주 가능</td></tr>
                    </tbody>
                </table>
            </div>
            <p className="muted">⚠️ 법인 통장에서 개인 계좌로 이체해 투자하는 행위는 명백한 세무 리스크입니다.</p>

            <h2 id="example">6️⃣ 실제 운용 예시</h2>
            <div className="case-box">
                <table className="finance-table">
                    <thead>
                    <tr><th>구분</th><th>금액</th><th>비중</th><th>운용전략</th></tr>
                    </thead>
                    <tbody>
                    <tr><td>운영자금</td><td>1억 원</td><td>40%</td><td>MMDA, 보통예금</td></tr>
                    <tr><td>비상자금</td><td>7,000만 원</td><td>28%</td><td>단기정기예금, 기업보험</td></tr>
                    <tr><td>투자자금</td><td>8,000만 원</td><td>32%</td><td>ETF 50%, 채권 30%, 펀드 20%</td></tr>
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

/** ③ 보험 / 리스크 (cert) — 직원이 있다면 보험이 필요합니다 */
const Article_InsuranceRisk = () => (
    <article className="article-card" itemScope itemType="https://schema.org/Article">
        <header className="article-header">
            <p className="eyebrow">보험 · 리스크 인사이트</p>
            <h1 className="article-title" itemProp="headline">
                직원이 있다면 보험이 필요합니다 — 중소법인을 위한 리스크 관리의 첫걸음
            </h1>
            <p className="article-subtitle">“직원이 있다는 건, 기업이 책임을 가진다는 뜻입니다.”</p>
            <meta itemProp="author" content="온비즈컨설팅 리스크관리팀" />
            <meta itemProp="datePublished" content="2025-10-11" />
        </header>

        {/* 목차 */}
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

        {/* 핵심 지표 */}
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
                    <tr><th>리스크 유형</th><th>발생 상황</th><th>결과</th></tr>
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
                <p>
                    <b>포인트:</b> 4대보험 미가입은 <b>세금 미납 못지않게 중대</b>하게 처리됩니다.
                    산재 발생 시 회사가 직접 보상 + 형사상 처벌 + 과태료 + 보험료 추징이 한꺼번에 올 수 있습니다.
                </p>
            </div>

            <h2 id="corp">3️⃣ 4대보험 외, 꼭 필요한 법인형 ‘기업 보험’ 구조</h2>

            <h3>🔹 근재보험(근로자재해보장보험)</h3>
            <p>
                <b>보장:</b> 산재 외 업무·통근 중 사고의 <b>민사책임</b> 보전(초과 위자료 등).<br/>
                <b>핵심:</b> 산재보험은 <i>공적 보상</i>, 근재보험은 <i>민사 보상</i> — <b>둘 다 필요</b>.
            </p>

            <h3>🔹 고용주 배상책임보험</h3>
            <p>
                직원 과실로 회사 손해 발생 시 법적 책임 보전. 제조·물류·서비스업 등 <b>실수 리스크 업종 필수</b>.
                분쟁 시 변호사 비용·합의금 보전.
            </p>

            <h3>🔹 단체상해보험 / 단체질병보험</h3>
            <p>
                근무 중 상해·질병·입원 등 보장. <b>보험료 전액 손금</b> 처리 가능 → 복지 제공 + 절세 동시 달성.
                스타트업/IT는 복지 브랜드로 활용 사례 다수.
            </p>

            <h2 id="benefit">4️⃣ 직원 복지와 리스크 관리는 함께 설계</h2>
            <div className="table-wrap">
                <table className="finance-table">
                    <thead>
                    <tr><th>항목</th><th>단기 효과</th><th>장기 효과</th></tr>
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
                <p>
                    <b>A사(직원 8명)</b>: 물류센터 작업 중 골절. 산재보상 외 <b>위자료 4,000만 원</b> 추가 청구.
                    <b>근재보험</b>으로 전액 보전 → 경영 차질 최소화.
                </p>
                <p>
                    <b>B사</b>: 동일 사고, 근재보험 없음. 대표 개인 통장에서 <b>3,800만 원</b> 지출 → 유동성 악화로 일시 휴업.
                </p>
            </div>

            <h2 id="consult">6️⃣ 컨설팅 포인트 — “보험은 비용이 아닌, 경영의 방패”</h2>
            <ul className="check-list">
                <li>직원 수·업종별 <b>리스크 매핑</b> 후 보장 공백 제거</li>
                <li>근재/배상/단체보험을 <b>맞춤 포트폴리오</b>로 구성</li>
                <li>보험료의 <b>세무상 비용처리</b> 구조 설계로 현금흐름 최적화</li>
            </ul>

            <div className="callout success">
                <p>
                    직원이 있다면 보험은 ‘선택’이 아니라 <b>‘책임’</b>입니다.
                    “사고가 나면 대응”이 아닌, “사고가 나도 멈추지 않는 구조”를 지금 만드세요 — 그 첫걸음이 <b>법인 보험 구조화</b>입니다.
                </p>
            </div>

            <div className="article-cta">
                <p>중소법인 리스크 관리 컨설팅</p>
                <a href="/consult?topic=cert" className="btn btn-custom" itemProp="url">
                    법인 맞춤형 보험 진단 리포트 무료 신청
                </a>
            </div>
        </section>
    </article>
);

/** ④ 인사 (bp) — 4대보험 부담 줄이는 합법적 방법 */
const Article_HR = () => (
    <article className="article-card" itemScope itemType="https://schema.org/Article">
        <header className="article-header">
            <p className="eyebrow">인사 · 노무 인사이트</p>
            <h1 className="article-title" itemProp="headline">
                4대보험 부담 줄이는 합법적 방법 — 중소법인의 인건비 절세 전략
            </h1>
            <p className="article-subtitle">중소기업에게 4대보험은 가장 큰 고정비입니다</p>
            <meta itemProp="author" content="온비즈컨설팅 노무·세무팀" />
            <meta itemProp="datePublished" content="2025-10-11" />
        </header>

        {/* 목차 */}
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

        {/* KPI 카드 */}
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
                <p>
                    예시:
                    기본급 300만 원 → 보험료 기준액 300만 원
                    기본급 260만 원 + 식대 10만 원 + 차량유지비 20만 원 → 기준액 260만 원
                    약 <b>13% 절감</b> 가능
                </p>
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
            <p>
                상여금이 매월 정기 지급되면 4대보험 기준에 포함됩니다.
                반면, <b>비정기적·성과연동형</b> 인센티브는 제외될 수 있습니다.
            </p>
            <ul className="blue-bullets">
                <li>매월 30만 원 정기상여 → 보험료 기준 포함</li>
                <li>반기·연간 성과급 → 제외 가능</li>
            </ul>
            <p>근로계약서와 인사규정에 <b>“성과기준에 따른 비정기 지급”</b>으로 명시하면 합법 절감이 가능합니다.</p>

            <h2 id="family">③ 가족 근로자·단시간 근로자 설계</h2>
            <p>
                가족이 함께 일한다면 모든 4대보험 가입이 필요한지 검토하세요.
                배우자·자녀 등 가족보조 형태는 고용·산재보험 제외 가능(실근무 증빙 필수).
            </p>

            <h3>단시간 근로자 (주 15시간 미만)</h3>
            <ul className="blue-bullets">
                <li>국민연금·건강보험 가입 의무 없음</li>
                <li>고용보험·산재보험은 일부 적용 가능</li>
                <li>근로시간·급여명세서 명시로 추후 분쟁 예방</li>
            </ul>
            <div className="callout success">
                <p>단시간 보조인력 활용 시 보험료를 <b>절반 이하</b>로 줄일 수 있습니다.</p>
            </div>

            <h2 id="govsupport">④ 정부지원 제도를 통한 보험료 보전</h2>
            <p>정부는 중소기업의 4대보험 부담을 완화하기 위해 다양한 보조 프로그램을 운영 중입니다.</p>

            <div className="table-wrap">
                <table className="finance-table">
                    <thead>
                    <tr><th>제도명</th><th>주요 대상</th><th>지원 내용</th></tr>
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
            <p>
                보험료 절감을 위해 프리랜서를 활용할 때,
                실질적으로 근로자이면 4대보험 소급 부과 및 과태료가 발생합니다.
            </p>
            <ul className="check-list">
                <li>근무시간이 고정되어 있다면 근로자로 간주</li>
                <li>회사의 지휘·감독 하 근무 시 근로계약 전환 대상</li>
                <li>정기 급여 지급 시 프리랜서로 인정 어려움</li>
            </ul>

            <h2 id="automation">⑥ 급여 자동화 및 시뮬레이션 도입</h2>
            <p>
                4대보험 자동계산·ERP 솔루션을 통해
                상여금 비정기화, 비과세 확대, 근로형태 변경 등의 시나리오를 미리 계산할 수 있습니다.
            </p>
            <div className="callout info">
                <p>
                    매월 납부액 변화를 실시간 확인하면,
                    연간 인건비 계획 + 세무·재무 건전성까지 함께 관리할 수 있습니다.
                </p>
            </div>

            <div className="article-cta">
                <p>
                    4대보험 절감 & 인건비 구조 컨설팅<br />
                    급여체계 진단 · 절감 시뮬레이션 · 정부지원금 연계 · 노무·세무 통합관리
                </p>
                <a href="/consult?topic=hr" className="btn btn-custom" itemProp="url">
                    인건비 절감 컨설팅 신청
                </a>
            </div>
        </section>
    </article>
);


/* ───────── 페이지 컨테이너 ───────── */
const SolutionDetail = () => {
    const { key } = useParams();
    useEffect(() => { window.scrollTo(0, 0); }, [key]);

    const titleMap = {
        startup: { title: "재무 / 세무", subtitle: "" },
        policy:  { title: "자금조달 / 운용", subtitle: "" },
        cert:    { title: "보험 / 리스크", subtitle: "" },
        bp:      { title: "인사", subtitle: "" },
    };

    const hero = titleMap[key] || { title: "솔루션", subtitle: "" };

    return (
        <main>
            <Hero title={hero.title} subtitle={hero.subtitle} />
            <div className="container sol-container">
                {key === "startup" && <Article_FinanceTax />}
                {key === "policy"  && <Article_FundOps />}
                {key === "cert"    && <Article_InsuranceRisk />}
                {key === "bp"      && <Article_HR />}

                {!["startup","policy","cert","bp"].includes(key) && (
                    <section className="article-card">
                        <div className="article-header">
                            <h2 className="article-title">준비중입니다</h2>
                        </div>
                        <div className="article-body">
                            <p>요청하신 항목의 상세 콘텐츠가 곧 업데이트 됩니다.</p>
                            <Link to="/" className="btn btn-custom">홈으로</Link>
                        </div>
                    </section>
                )}
            </div>
        </main>
    );
};

export default SolutionDetail;
