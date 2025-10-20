import React from "react";

const ArticleFinanceTax = () => (
    <article className="article-card" itemScope itemType="https://schema.org/Article">
        <header className="article-header">
            <p className="eyebrow">재무 · 세무 인사이트</p>
            <h1 className="article-title" itemProp="headline">
                대표이사 가지급금, 왜 반드시 정리해야 할까?
            </h1>
            <p className="article-subtitle">💡 대표님들이 가장 자주 하는 세무 질문 TOP 1</p>
            <meta itemProp="author" content="온비즈컨설팅 세무팀"/>
            <meta itemProp="datePublished" content="2025-10-11"/>
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

export default ArticleFinanceTax;
