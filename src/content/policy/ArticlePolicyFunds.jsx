import React from "react";

const ArticlePolicyFunds = () => (
    <article className="article-card" itemScope itemType="https://schema.org/Article">
        <header className="article-header">
            <p className="eyebrow">자금조달 · 정책자금 인사이트</p>
            <h1 className="article-title" itemProp="headline">
                정책자금, 중소기업의 성장 촉진제 — 중소벤처진흥공단·신용보증기금 활용 전략
            </h1>
            <p className="article-subtitle">중소기업의 성장에는 ‘자금의 속도’가 필요합니다</p>
            <meta itemProp="author" content="온비즈컨설팅 자금조달팀" />
            <meta itemProp="datePublished" content="2025-10-18" />
        </header>

        {/* 목차 */}
        <nav className="toc" aria-label="목차">
            <ol>
                <li><a href="#why">왜 정책자금인가</a></li>
                <li><a href="#purpose">정책자금의 핵심 목적</a></li>
                <li><a href="#institutions">주요 기관별 지원 구조</a></li>
                <li><a href="#process">활용 절차</a></li>
                <li><a href="#strategy">승인 전략</a></li>
                <li><a href="#caution">유의사항</a></li>
                <li><a href="#case">실제 사례</a></li>
            </ol>
        </nav>

        {/* KPI */}
        <section className="kpi-strip" aria-label="핵심 지표">
            <div className="kpi"><span className="num">~10년</span><span className="label">상환기간(거치 포함)</span></div>
            <div className="kpi"><span className="num">2~4%</span><span className="label">중진공 금리 밴드</span></div>
            <div className="kpi"><span className="num">100%</span><span className="label">신보 보증비율(프로그램별)</span></div>
        </section>

        <section className="article-body" itemProp="articleBody">
            <h2 id="why">왜 정책자금인가</h2>
            <p className="lead">
                은행 대출만으로는 신용등급·담보력·매출 이력의 제약을 넘기 어렵습니다. 이때 정부 연계의
                <b> 정책자금</b>은 저금리·장기상환 구조로 성장속도를 끌어올리는 가장 현실적인 해법입니다.
            </p>
            <p>
                정책자금은 중소벤처진흥공단(중진공), 신용보증기금(신보), 기술보증기금(기보), 소상공인시장진흥공단 등과
                연계해 공급되는 <b>저금리·장기</b> 자금입니다.
            </p>

            <h2 id="purpose">1️⃣ 정책자금의 핵심 목적</h2>
            <div className="table-wrap">
                <table className="finance-table">
                    <thead>
                    <tr><th>구분</th><th>목적</th><th>대표 기관</th></tr>
                    </thead>
                    <tbody>
                    <tr><td>창업기</td><td>초기 자금 확보</td><td>중진공 창업자금, 신보 창업보증</td></tr>
                    <tr><td>성장기</td><td>설비투자·운전자금</td><td>중진공 일반자금, 기보 기술보증</td></tr>
                    <tr><td>재도약기</td><td>구조조정·사업전환</td><td>중진공 재창업·구조개선자금</td></tr>
                    <tr><td>고용확대기</td><td>인건비·고용유지</td><td>고용노동부 고용안정장려금</td></tr>
                    <tr><td>수출확대기</td><td>수출입 운전자금</td><td>무역보험공사·수출입은행</td></tr>
                    </tbody>
                </table>
            </div>
            <p className="muted">핵심은 우리 기업의 <b>현재 단계</b>에 맞는 조합을 찾는 것.</p>

            <h2 id="institutions">2️⃣ 주요 기관별 지원 구조</h2>

            <h3>① 중소벤처진흥공단(중진공)</h3>
            <ul className="blue-bullets">
                <li><b>형태:</b> 직접 대출</li>
                <li><b>금리:</b> 연 2~4%</li>
                <li><b>상환:</b> 최대 10년(거치 3년 가능)</li>
                <li><b>주요 프로그램:</b> 일반경영안정자금, 창업·벤처자금, 스마트공장, 청년창업 등</li>
            </ul>
            <div className="callout info">
                <p><b>예시:</b> 매출 20억 제조기업, 스마트공장 2억(연 2.5%, 5년) 승인 → 은행 대비 이자 약 800만 절감 + 거치 혜택</p>
            </div>

            <h3>② 신용보증기금(신보)</h3>
            <ul className="blue-bullets">
                <li><b>형태:</b> 보증서 발급(간접 대출)</li>
                <li><b>보증비율:</b> 최대 100%</li>
                <li><b>보증료율:</b> 연 0.5~1.0%</li>
                <li><b>주요 프로그램:</b> 일반보증, 혁신기업, 매출연동, ESG 우수기업 보증</li>
            </ul>
            <p className="muted">담보 부족 시에도 <b>보증서</b>로 대출 실행.</p>
            <div className="callout info">
                <p><b>예시:</b> 보증서 2억 → 시중은행 대출 실행(금리 3.2%, 5년)</p>
            </div>

            <h3>③ 기술보증기금(기보)</h3>
            <ul className="blue-bullets">
                <li><b>형태:</b> 기술력 기반 보증</li>
                <li><b>평가:</b> 기술성·사업성·성장성(TCB)</li>
                <li><b>특화:</b> IT·바이오·AI·반도체 등 특허·R&D 기업</li>
            </ul>
            <p>기술신용평가 통과 시 금리우대 및 R&D 과제 연계 가능, 보증한도는 상황에 따라 <b>최대 수십억</b>까지 확대.</p>

            <h2 id="process">3️⃣ 정책자금 활용 절차</h2>
            <ol className="num-steps">
                <li><b>통합관리시스템 접속:</b> 정책자금 종합 포털 방문</li>
                <li><b>기업진단표 작성:</b> 재무·매출·인력·설비·기술 수준 입력</li>
                <li><b>사업계획서 제출:</b> 사용처·성과지표(매출·고용) 명시</li>
                <li><b>심사/현장실사:</b> 목적성·회수가능성 중심 평가</li>
                <li><b>대출/보증 실행:</b> 조건 확정 및 집행</li>
            </ol>
            <p className="muted"><b>핵심:</b> “자금 투입 → 매출·생산성 개선”을 수치로 제시.</p>

            <h2 id="strategy">4️⃣ 성공적으로 승인받는 전략</h2>
            <ul className="check-list">
                <li><b>재무제표 정비:</b> 최근 2~3년 가수금·가지급금·결손 과다 시 감점 → 선제 정리</li>
                <li><b>사업계획 품질:</b> 단순 운영자금이 아닌 <b>매출·고용 지표</b>로 목표 제시(예: 설비 1억 → 생산 30%↑)</li>
                <li><b>연계 활용:</b> 중진공(설비) + 신보(운전자금) 조합으로 한도·승인율 동시 확보</li>
            </ul>

            <h2 id="caution">5️⃣ 정책자금 활용 시 유의사항</h2>
            <ul className="blue-bullets">
                <li><b>용도 외 사용 금지:</b> 전용 시 회수 및 향후 제한</li>
                <li><b>대표 신용관리:</b> 개인 신용점수는 보증심사에 직접 반영</li>
                <li><b>부채·이자보상 관리:</b> 부채비율 500%↑는 제한 가능</li>
                <li><b>보증 만기관리:</b> 만기 2개월 전 연장 신청</li>
            </ul>

            <h2 id="case">6️⃣ 실제 사례 — 정책자금으로 체질 개선</h2>
            <div className="case-box">
                <p>
                    <b>A법인(매출 25억, 제조)</b> — 원자재 상승으로 유동성 경색.<br/>
                    <b>적용:</b> 중진공 일반경영안정 2억(2.7%) + 신보 운전자금 보증 1.5억(3.1%).<br/>
                    <b>결과:</b> 기존 6%대 대출 전액 상환, 연 이자 약 800만 절감 + 고용안정장려금 720만 연계 수령.
                </p>
            </div>

            <div className="callout success">
                <p>
                    정책자금은 “누가 먼저”보다 <b>“누가 더 준비되어 있나”</b>가 좌우합니다.
                    재무정비·사업계획·연계설계를 통해 승인 가능성을 높이세요.
                </p>
            </div>

            <div className="article-cta">
                <p>중진공/신보/기보 매칭 · 사업계획서 작성 · 재무정비 · 한도 시뮬레이션</p>
                <a href="/consult?topic=policy-fund" className="btn btn-custom" itemProp="url">
                    정책자금 컨설팅 신청
                </a>
            </div>
        </section>
    </article>
);

export default ArticlePolicyFunds;
