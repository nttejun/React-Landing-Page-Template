import React from "react";

const ArticleFinanceRecovery = () => (
    <article className="article-card" itemScope itemType="https://schema.org/Article">
        <header className="article-header">
            <p className="eyebrow">재무 · 세무 인사이트</p>
            <h1 className="article-title" itemProp="headline">
                가수금·자본잠식 해소 방법 — 중소법인 재무건전성 회복 전략
            </h1>
            <p className="article-subtitle">가수금과 자본잠식, 중소기업의 ‘숨은 시한폭탄’</p>
            <meta itemProp="author" content="온비즈컨설팅 세무·재무팀" />
            <meta itemProp="datePublished" content="2025-10-18" />
        </header>

        {/* 목차 */}
        <nav className="toc" aria-label="목차">
            <ol>
                <li><a href="#intro">왜 지금, 가수금과 자본잠식인가</a></li>
                <li><a href="#what-deposit">가수금이란?</a></li>
                <li><a href="#what-capital">자본잠식이란?</a></li>
                <li><a href="#solve-deposit">가수금 해소 방법</a></li>
                <li><a href="#solve-capital">자본잠식 해소 방법</a></li>
                <li><a href="#tax">세무상 주의사항</a></li>
                <li><a href="#case">실제 사례</a></li>
                <li><a href="#outro">마무리</a></li>
            </ol>
        </nav>

        {/* 핵심 지표 */}
        <section className="kpi-strip" aria-label="핵심 지표">
            <div className="kpi"><span className="num">▲</span><span className="label">자본총계 회복</span></div>
            <div className="kpi"><span className="num">↓</span><span className="label">부채비율 개선</span></div>
            <div className="kpi"><span className="num">A→A+</span><span className="label">신용등급 상향 가능</span></div>
        </section>

        <section className="article-body" itemProp="articleBody">
            <h2 id="intro">왜 지금, 가수금과 자본잠식인가</h2>
            <p className="lead">
                대표 개인 자금이 법인으로 들어오거나, 반대로 대표가 법인 자금을 사용하면서
                <b> 가수금</b>·<b>가지급금</b>이 발생하는 경우가 잦습니다. 장기간 방치 시 이는 단순 회계항목이 아니라
                <b> 세무조사·신용평가·대출심사 리스크</b>로 직결됩니다. 더 나아가 자본총계가 마이너스로 전환되면
                <b> 자본잠식</b>이 되어 “존속 가능성 낮음”으로 해석되곤 합니다.
            </p>

            <h2 id="what-deposit">1️⃣ 가수금이란 무엇인가?</h2>
            <p>
                가수금(假受金)은 <b>회사가 대표에게 빌린 돈</b>을 의미합니다. 즉, 법인이 개인으로부터 자금을 수취했지만
                거래 사유가 확정되지 않아 임시 계상한 부채입니다.
            </p>
            <ul className="blue-bullets">
                <li><b>세무조사 리스크:</b> 출처 불분명 자금으로 의심 가능</li>
                <li><b>신용도 하락:</b> 부채비율 상승 → 외부평가 악화</li>
                <li><b>상속·증여 이슈:</b> 대표 사망 시 상속재산으로 간주</li>
                <li><b>법인세 왜곡:</b> 이자비용 미계상 시 과소비용 처리</li>
            </ul>

            <h2 id="what-capital">2️⃣ 자본잠식이란 무엇인가?</h2>
            <p>
                누적 손실이 자본금을 초과해 <b>자본총계가 마이너스</b>인 상태입니다. 이 경우 신규 대출·보증·입찰이 제한되고,
                투자자·거래처 신뢰도 저하, 외부감사 지적 등 복합 문제가 발생합니다.
            </p>

            <h2 id="solve-deposit">3️⃣ 가수금 해소 방법</h2>

            <h3>① 출자전환(가수금을 자본금으로 전환)</h3>
            <div className="callout info">
                <p><b>절차:</b> 이사회·주총 결의 → 정관 확인 → 출자전환 계약 → 등기</p>
            </div>
            <ul className="check-list">
                <li>부채비율 즉시 개선, 자본잠식 해소</li>
                <li>신용등급 1~2단계 상향 사례 다수</li>
            </ul>
            <p className="muted">예: 가수금 2억 → 자본금 전환 시 부채비율 400% → 150% 개선</p>

            <h3>② 가수금 상환</h3>
            <p>
                현금흐름이 충분한 법인은 직접 상환이 가장 깔끔합니다. 단, <b>자금출처 증빙</b>과
                <b> 이사회 의사록</b> 등 문서화가 필수입니다.
            </p>

            <h3>③ 배당전환 · 급여상계</h3>
            <ul className="blue-bullets">
                <li><b>배당전환:</b> 배당소득세(14%) 부담 후 구조 개선</li>
                <li><b>급여상계:</b> 법인세 절감 + 가수금 소멸</li>
            </ul>
            <p className="muted">세무 시뮬레이션 필수(이중과세/손금 인정 범위 점검).</p>

            <h2 id="solve-capital">4️⃣ 자본잠식 해소 방법</h2>

            <h3>① 감자 후 증자</h3>
            <p>
                감자로 누적결손을 상계한 뒤, 신규 자본 투입으로 재무구조를 재정비합니다.
                외부감사/등기 절차가 필요하지만 가장 강력한 개선책입니다.
            </p>
            <div className="case-box">
                <p>자본금 5억 / 결손 3억 → 감자 후 증자: 결손 제거 + 신용/대출여건 개선</p>
            </div>

            <h3>② 이익잉여금 누적으로 자연 해소</h3>
            <p>3년 내 손익 정상화 계획으로 당기순이익을 누적시켜 결손 상계. 비용 절감·보수/복리후생 구조 조정 병행.</p>

            <h3>③ 자산재평가</h3>
            <p>토지·건물·유가증권 등 재평가 이익을 자본잉여금으로 인식해 자본총계를 보강(평가보고서 필요).</p>

            <h2 id="tax">5️⃣ 세무상 주의사항</h2>
            <div className="table-wrap">
                <table className="finance-table">
                    <thead>
                    <tr><th>항목</th><th>내용</th><th>주의점</th></tr>
                    </thead>
                    <tbody>
                    <tr><td>출자전환</td><td>가수금 → 자본금 전환</td><td>평가금액 과대 시 증여세 이슈</td></tr>
                    <tr><td>배당전환</td><td>가수금 일부를 배당으로</td><td>소득세/법인세 이중과세 점검</td></tr>
                    <tr><td>감자·증자</td><td>결손 상계 + 재자본화</td><td>상법 절차(공고/주총) 미이행시 무효 위험</td></tr>
                    </tbody>
                </table>
            </div>

            <h2 id="case">6️⃣ 실제 사례</h2>
            <div className="case-box">
                <p>
                    <b>B법인(매출 30억, 20명)</b> — 가수금 3억, 결손 2억(자본잠식).<br/>
                    <b>설계:</b> 가수금 2억 출자전환 + 1억 급여상계 상환 + 결손 2억 감자 후 재증자.<br/>
                    <b>결과:</b> 자본총계 +3억, 부채비율 480%→160%, 법인세 절감 2,200만, 운전자금 한도 +30%.
                </p>
            </div>

            <div className="article-cta">
                <p>가수금/자본잠식 해소 · 감자/증자 · 출자전환 · 세무 시뮬레이션</p>
                <a href="/consult?topic=finance" className="btn btn-custom" itemProp="url">재무구조 컨설팅 신청</a>
            </div>
        </section>
    </article>
);

export default ArticleFinanceRecovery;
