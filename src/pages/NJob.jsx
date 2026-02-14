import React, { useState, useEffect, useCallback, useRef } from "react";
import "./NJob.css";

// ─── 커스텀 셀렉트 컴포넌트 ───
const CustomSelect = ({ value, onChange, options, placeholder, disabled }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const handleClick = (e) => {
            if (ref.current && !ref.current.contains(e.target)) setOpen(false);
        };
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, []);

    const selected = options.find((o) => o.value === value);

    return (
        <div className={`custom-select${open ? " open" : ""}${disabled ? " disabled" : ""}`} ref={ref}>
            <button
                type="button"
                className={`custom-select-trigger${!value ? " placeholder" : ""}`}
                onClick={() => !disabled && setOpen((p) => !p)}
                disabled={disabled}
            >
                <span className="custom-select-value">{selected ? selected.label : placeholder}</span>
                <span className="custom-select-arrow" />
            </button>
            {open && (
                <ul className="custom-select-dropdown">
                    {options.map((opt) => (
                        <li
                            key={opt.value}
                            className={`custom-select-option${opt.value === value ? " selected" : ""}`}
                            onClick={() => { onChange(opt.value); setOpen(false); }}
                        >
                            {opt.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

// ─── 지역 데이터 ───
const regionData = {
    "서울특별시": ["강남구","강동구","강북구","강서구","관악구","광진구","구로구","금천구","노원구","도봉구","동대문구","동작구","마포구","서대문구","서초구","성동구","성북구","송파구","양천구","영등포구","용산구","은평구","종로구","중구","중랑구"],
    "부산광역시": ["강서구","금정구","기장군","남구","동구","동래구","부산진구","북구","사상구","사하구","서구","수영구","연제구","영도구","중구","해운대구"],
    "대구광역시": ["남구","달서구","달성군","동구","북구","서구","수성구","중구"],
    "인천광역시": ["강화군","계양구","남동구","동구","미추홀구","부평구","서구","연수구","옹진군","중구"],
    "광주광역시": ["광산구","남구","동구","북구","서구"],
    "대전광역시": ["대덕구","동구","서구","유성구","중구"],
    "울산광역시": ["남구","동구","북구","울주군","중구"],
    "세종특별자치시": ["세종시"],
    "경기도": ["가평군","고양시","과천시","광명시","광주시","구리시","군포시","김포시","남양주시","동두천시","부천시","성남시","수원시","시흥시","안산시","안성시","안양시","양주시","양평군","여주시","연천군","오산시","용인시","의왕시","의정부시","이천시","파주시","평택시","포천시","하남시","화성시"],
    "강원특별자치도": ["강릉시","고성군","동해시","삼척시","속초시","양구군","양양군","영월군","원주시","인제군","정선군","철원군","춘천시","태백시","평창군","홍천군","화천군","횡성군"],
    "충청북도": ["괴산군","단양군","보은군","영동군","옥천군","음성군","제천시","증평군","진천군","청주시","충주시"],
    "충청남도": ["계룡시","공주시","금산군","논산시","당진시","보령시","부여군","서산시","서천군","아산시","예산군","천안시","청양군","태안군","홍성군"],
    "전북특별자치도": ["고창군","군산시","김제시","남원시","무주군","부안군","순창군","완주군","익산시","임실군","장수군","전주시","정읍시","진안군"],
    "전라남도": ["강진군","고흥군","곡성군","광양시","구례군","나주시","담양군","목포시","무안군","보성군","순천시","신안군","여수시","영광군","영암군","완도군","장성군","장흥군","진도군","함평군","해남군","화순군"],
    "경상북도": ["경산시","경주시","고령군","구미시","군위군","김천시","문경시","봉화군","상주시","성주군","안동시","영덕군","영양군","영주시","영천시","예천군","울릉군","울진군","의성군","청도군","청송군","칠곡군","포항시"],
    "경상남도": ["거제시","거창군","고성군","김해시","남해군","밀양시","사천시","산청군","양산시","의령군","진주시","창녕군","창원시","통영시","하동군","함안군","함양군","합천군"],
    "제주특별자치도": ["서귀포시","제주시"],
};

const jobOptions = ["직장인", "자영업", "프리랜서", "대학생", "주부", "무직/구직중", "기타"];

// ─── 스크롤 등장 훅 ───
const useScrollReveal = (delay = 0) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    if (delay > 0) {
                        setTimeout(() => setIsVisible(true), delay);
                    } else {
                        setIsVisible(true);
                    }
                } else {
                    setIsVisible(false);
                }
            },
            { threshold: 0.15 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [delay]);

    return [ref, isVisible];
};

// ═══════════════════════════════════════════════
// 섹션 1: 히어로
// ═══════════════════════════════════════════════
const HeroSection = ({ onApply }) => {
    const scrollDown = () => {
        window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    };

    const [subtitleRef, subtitleVisible] = useScrollReveal(200);
    const [buttonsRef, buttonsVisible] = useScrollReveal(500);
    const [arrowRef, arrowVisible] = useScrollReveal(800);

    return (
        <section className="njob-hero-section">
            {/* 상단 배너 */}
            <div className="hero-top-banner">
                <div className="banner-inner">
                    <span className="banner-text">
                        다른 곳에서 시작한 설계사가{" "}
                        결국 <span className="banner-highlight">디앤제이</span>로 정착하는 이유는?
                    </span>
                    <a href="#reasons" className="banner-cta">
                        바로 이 3가지 이유 때문입니다 &rarr;
                    </a>
                </div>
            </div>

            <div className="hero-container">
                <h1 className="hero-title">
                    디앤제이 보험N잡<br />
                    이 곳에서 시작하는 이유가 있습니다.
                </h1>
                <p ref={subtitleRef} className={`hero-subtitle scroll-reveal ${subtitleVisible ? "revealed" : ""}`}>
                    업계 최고 수준의 수수료, 영업 강요없는 분위기,<br />
                    지속적이고 체계적인 교육까지...
                </p>
                <div ref={buttonsRef} className={`hero-buttons scroll-reveal ${buttonsVisible ? "revealed" : ""}`}>
                    <a
                        href="https://pf.kakao.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hero-btn hero-btn-kakao"
                    >
                        카톡으로 편하게 질문하기
                    </a>
                    <button className="hero-btn hero-btn-ebook" onClick={onApply}>
                        디앤제이 보험 N잡크루 지원하기
                    </button>
                </div>
            </div>

            <button ref={arrowRef} className={`hero-scroll-indicator scroll-reveal ${arrowVisible ? "revealed" : ""}`} onClick={scrollDown}>
                <span className="scroll-arrow">&darr;</span>
            </button>
        </section>
    );
};

// ═══════════════════════════════════════════════
// 섹션 2: 실제로 활동이 가능할까요?
// ═══════════════════════════════════════════════
const activityFeatures = [
    {
        image: "/img/njob/activity-subway.png",
        title: "출퇴근 자유 · 시간 자유",
        desc: "정해진 출근도, 퇴근도 없습니다. 내 일정에 맞춰 자유롭게 일하고, 원하는 만큼 수익을 만들어보세요.",
    },
    {
        image: "/img/njob/activity-phone.png",
        title: "준비물은 단 하나!",
        desc: "노트북 또는 스마트폰만 있으면 사무실, 집, 카페 등 장소에 상관없이 언제든 업무가 가능합니다.",
    },
    {
        image: "/img/njob/activity-manager.png",
        title: "어려움? 걱정하지 마세요!",
        desc: "활동 중 생기는 궁금증이나 어려움은 매니저들이 언제든 안내해 드립니다.",
    },
    {
        image: "/img/njob/activity-growth.png",
        title: "배울 기회는 항상 Open!",
        desc: "매주 평일 교육이 열리며 가능한 시간에 맞춰 선택적으로 참여할 수 있습니다.",
    },
];

const ActivitySection = () => (
    <section className="njob-activity-section">
        <div className="section-container">
            <h2 className="activity-title">실제로 활동이 가능할까요?</h2>
            <p className="activity-subtitle">
                <span className="text-orange">가능합니다.</span> 현재 활동중인 디앤제이 멤버는 자유롭게
                <br />
                <strong>출퇴근 · 재택근무</strong>를 하고 있습니다.
            </p>

            <div className="activity-cards">
                {activityFeatures.map((f, idx) => (
                    <div className="activity-card" key={idx}>
                        <div className="activity-card-img">
                            <img src={f.image} alt={f.title} />
                        </div>
                        <h3 className="activity-card-title">{f.title}</h3>
                        <p className="activity-card-desc">{f.desc}</p>
                    </div>
                ))}
            </div>

            <p className="activity-bottom-text">
                본업이 있어도, 육아 중이어도, <span className="text-orange">누구나</span> 시작할 수 있습니다.
            </p>
        </div>
    </section>
);

// ═══════════════════════════════════════════════
// 섹션 3: 자유로운 보험N잡 크루활동
// ═══════════════════════════════════════════════
const incomeSlides = [
    { header: "드림앤조이N잡크루", amount: "1,500,000원", date: "12.20", desc: "드림앤조이N잡크...", historyAmount: "1,500,000원" },
    { header: "드림앤조이N잡크루", amount: "2,300,000원", date: "11.20", desc: "드림앤조이N잡크...", historyAmount: "2,300,000원" },
    { header: "드림앤조이N잡크루", amount: "800,000원", date: "10.20", desc: "드림앤조이N잡크...", historyAmount: "800,000원" },
    { header: "드림앤조이N잡크루", amount: "3,100,000원", date: "09.20", desc: "드림앤조이N잡크...", historyAmount: "3,100,000원" },
];

const incomeFeatures = [
    {
        image: "/img/njob/feature-laptop.png",
        badge: "노트북 하나로 어디서든 OK",
        desc: "노트북 하나면 시간과 장소에 상관없이 내가 원하는 때, 주말도 상관없이 업무가 가능합니다.",
    },
    {
        image: "/img/njob/feature-mentor.png",
        badge: "크루만을 위한 지점장의 1:1 멘토케어",
        desc: "제안서부터 계약상담까지 베테랑 지점장이 전담 지원을 해드립니다.",
    },
    {
        image: "/img/njob/feature-education.png",
        badge: "N잡 눈높이 교육! 금융 지식 성장!",
        desc: "보험지식이 없어도 괜찮아요. 건강, 세금, 법인 등 체계적인 교육과정을 통해 금융 부가 성장할 수 있습니다",
    },
    {
        image: "/img/njob/feature-nopressure.png",
        badge: "실적 걱정은 No! No!",
        desc: "최소 실적 조건이 전혀 없습니다. 보험N잡에게 맞게 자유로운 참여와 전문가의 상담시스템을 통해 전혀 부담이 없습니다.",
    },
];

const IncomeSection = ({ onApply }) => {
    const [current, setCurrent] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const goTo = useCallback(
        (idx) => {
            if (isAnimating) return;
            setIsAnimating(true);
            setCurrent(idx);
            setTimeout(() => setIsAnimating(false), 500);
        },
        [isAnimating]
    );

    useEffect(() => {
        const timer = setInterval(() => {
            goTo((current + 1) % incomeSlides.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [current, goTo]);

    return (
        <section className="njob-income-section">
            <div className="hero-bg-shapes">
                <div className="shape shape-ring"></div>
                <div className="shape shape-coin coin-1">&#11088;</div>
                <div className="shape shape-cone"></div>
            </div>

            {/* 상단 타이틀 배너 */}
            <div className="income-title-banner">
                <h2>
                    자유로운 보험N잡 크루활동
                    <br />
                    디앤제이에서 시작하는 이유는 분명합니다
                </h2>
            </div>

            <div className="income-container">
                {/* 좌측: 2x2 피처 카드 */}
                <div className="income-features-grid">
                    {incomeFeatures.map((f, idx) => (
                        <div className="income-feature-card" key={idx}>
                            <div className="income-feature-img">
                                <img src={f.image} alt={f.badge} />
                            </div>
                            <span className="income-feature-badge">{f.badge}</span>
                            <p className="income-feature-desc">{f.desc}</p>
                        </div>
                    ))}
                </div>

                {/* 우측: 폰 목업 */}
                <div className="income-visual">
                    <div className="phone-mockup">
                        <div className="phone-screen">
                            <div className="phone-slider">
                                {incomeSlides.map((slide, idx) => (
                                    <div className={`phone-slide ${idx === current ? "active" : ""}`} key={idx}>
                                        <div className="phone-header">{slide.header}</div>
                                        <div className="phone-amount">{slide.amount}</div>
                                        <div className="phone-history">
                                            <div className="history-item">
                                                <span className="date">{slide.date}</span>
                                                <span className="desc">{slide.desc}</span>
                                                <span className="amount">{slide.historyAmount}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="slide-dots">
                                {incomeSlides.map((_, idx) => (
                                    <button
                                        className={`slide-dot ${idx === current ? "active" : ""}`}
                                        key={idx}
                                        onClick={() => goTo(idx)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 하단 CTA 버튼 */}
            <div className="income-cta-buttons">
                <a
                    href="https://pf.kakao.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="income-cta-btn income-cta-kakao"
                >
                    카톡 문의하기
                </a>
                <a
                    href="https://www.instagram.com/dreamnjoy_official/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="income-cta-btn income-cta-insta"
                >
                    인스타 둘러보기
                </a>
            </div>

            <p className="income-disclaimer">
                *수익은 개인의 활동에 따라 달라질 수 있으며, 해당 금액은 예시입니다.
            </p>
        </section>
    );
};

// ═══════════════════════════════════════════════
// 섹션 4: 내 보험, 우리가족 보험 설계는 이제 직접하세요
// ═══════════════════════════════════════════════
const insuranceCards = [
    {
        image: "/img/njob/person-woman.png",
        title: "내 보험부터 차근차근",
        desc: "내가 가입한 보험을 분석해보고 점검하는 것에서 시작합니다.",
    },
    {
        image: "/img/njob/person-family.png",
        title: "가족의 보장까지 함께",
        desc: "배우자, 자녀, 부모, 형제까지 가입한 보험을 살펴볼 수 있습니다.",
    },
    {
        image: "/img/njob/person-friends.png",
        title: "주변 사람들에게까지",
        desc: "보험을 이해하게 되면 지인과 동료에게도 도움을 줄 수 있습니다.",
    },
];

const InsuranceDesignSection = () => (
    <section className="njob-insurance-section">
        <div className="section-container">
            <h2 className="insurance-title">
                내 <span className="text-orange">보험</span>을 점검하는 것부터 시작입니다.
            </h2>
            <p className="insurance-subtitle">
                직접 보장내용을 살펴보고 설계를 경험하면서 가족과 지인에게도 필요한 정보를 나눌 수 있습니다.
                <br />새로 준비하기 전에, 현재 보험부터 점검하세요. 불필요한 과한 보험료는 없는지 먼저 확인하는 것이 중요합니다.
            </p>

            <div className="insurance-content">
                <div className="insurance-table-wrap">
                    <img
                        src="/img/njob/insurance-table.png"
                        alt="보험 상품별 가입현황 분석표"
                        className="insurance-table-img"
                    />
                </div>
                <div className="insurance-cards">
                    {insuranceCards.map((card, idx) => (
                        <div className="insurance-card" key={idx}>
                            <div className="insurance-card-img">
                                <img src={card.image} alt={card.title} />
                            </div>
                            <div className="insurance-card-text">
                                <h3>{card.title}</h3>
                                <p>{card.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

// ═══════════════════════════════════════════════
// 섹션 5: 얼마나 벌 수 있는데요?
// ═══════════════════════════════════════════════
const IncomeCalcSection = () => {
    const [desiredIncome, setDesiredIncome] = useState("");
    const requiredPremium = desiredIncome ? Math.ceil(Number(desiredIncome) / 12) : 0;

    const handleInputChange = (e) => {
        const val = e.target.value.replace(/[^0-9]/g, "");
        if (val === "" || (Number(val) >= 0 && Number(val) <= 9999)) {
            setDesiredIncome(val);
        }
    };

    return (
        <section className="njob-calc-section">
            <div className="section-container">
                <h2 className="calc-title">얼마를 벌 수 있을까요?</h2>
                <p className="calc-subtitle">
                    디앤제이는 수수료로 장난치지 않습니다.
                    <br />
                    모든 파트너의 수수료는 100% 투명하게 전산화되어 관리됩니다.
                </p>

                <div className="calc-card">
                    <div className="calc-card-header">
                        <span className="calc-icon">&#128202;</span>
                        <span className="calc-label">예상소득 계산기</span>
                    </div>

                    <div className="calc-input-area">
                        <span className="calc-input-label">벌고 싶은 월 금액</span>
                        <span className="calc-input-desc">목표 월 소득을 입력해 주세요</span>
                        <div className="calc-input-wrap">
                            <input
                                type="text"
                                inputMode="numeric"
                                value={desiredIncome}
                                onChange={handleInputChange}
                                placeholder="100"
                                className="calc-input"
                            />
                            <span className="calc-input-unit">만원</span>
                        </div>
                    </div>

                    {desiredIncome && Number(desiredIncome) > 0 && (
                        <div className="calc-result">
                            <span className="calc-result-label">필요한 월 보험계약료</span>
                            <span className="calc-result-value">{requiredPremium}만원</span>
                            <span className="calc-result-sub">정도면 달성할 수 있어요!</span>
                        </div>
                    )}

                    <p className="calc-disclaimer">
                        ※ 위 내용은 2025년 11월 1주차의 A손해보험 실제 기준 예시이며,
                        <br />
                        상품 환산율과 보험사에 따라 소득은 달라질 수 있습니다.
                    </p>
                </div>
            </div>
        </section>
    );
};

// ═══════════════════════════════════════════════
// 섹션 6: 무기가 32개인 설계사 vs 무기가 1개인 설계사
// ═══════════════════════════════════════════════
const CompanySection = () => {
    const [compareRef, compareVisible] = useScrollReveal();
    const [lifeRef, lifeVisible] = useScrollReveal();
    const [nonlifeRef, nonlifeVisible] = useScrollReveal();

    return (
        <section id="reasons" className="njob-company-section">
            <div className="section-container">
                <span className="company-badge">디앤제이가 특별한 이유 &#9313;</span>
                <h2 className="company-title">
                    선택지가 하나뿐인 설계사 <span className="company-vs">vs</span> 선택지 30개를 보유한 설계사
                </h2>
                <p className="company-subtitle">
                    고객에게 딱 맞는 상품은 A사인데, 내가 속한 곳은 B사만 팔아야 한다면?
                    <br />
                    디앤제이는 모든 보험사의 상품을 비교/분석할 수 있습니다.
                </p>

                <div
                    ref={compareRef}
                    className={`company-compare scroll-reveal ${compareVisible ? "revealed" : ""}`}
                >
                    <div className="compare-side compare-others">
                        <div className="compare-circles-row">
                            <div className="compare-circle-small">
                                <span>A사</span>
                            </div>
                            <div className="compare-circle-small">
                                <span>B사</span>
                            </div>
                            <div className="compare-circle-small">
                                <span>C사</span>
                            </div>
                        </div>
                        <p className="compare-label">타사 설계사</p>
                        <p className="compare-desc">1개 보험사 상품만 판매</p>
                    </div>

                    <div className="compare-vs">VS</div>

                    <div className="compare-side compare-dnj">
                        <div className="compare-circle-big">
                            <span className="compare-big-number">30곳</span>
                            <span className="compare-big-unit">보험회사</span>
                        </div>
                        <p className="compare-label compare-label-dnj">디앤제이</p>
                        <p className="compare-desc">30개 보험사 상품 비교·분석</p>
                    </div>
                </div>

                <div className="company-logos-section">
                    <div
                        ref={lifeRef}
                        className={`company-logos-group scroll-reveal ${lifeVisible ? "revealed" : ""}`}
                    >
                        <h3 className="logos-group-title">생명보험사</h3>
                        <img src="/img/insurance-life.png" alt="제휴 생명보험사 로고" className="logos-group-img" />
                    </div>
                    <div
                        ref={nonlifeRef}
                        className={`company-logos-group scroll-reveal ${nonlifeVisible ? "revealed" : ""}`}
                    >
                        <h3 className="logos-group-title">손해보험사</h3>
                        <img src="/img/insurance-nonlife.png" alt="제휴 손해보험사 로고" className="logos-group-img" />
                    </div>
                </div>
            </div>
        </section>
    );
};

// ═══════════════════════════════════════════════
// 섹션 7: 평생 직업이 되도록 돕습니다
// ═══════════════════════════════════════════════
const eduSlides = [
    {
        image: "/img/edu/class-01.png",
        badge: "격주 줌 세미나 진행",
        title: <>등록하면 끝?<br /><span className="text-orange">방치하지 않습니다.</span></>,
        desc: <>부업이라고 대충 알려주지 않습니다.<br />매월 2회, Live 줌 세미나를 통해 최신 트렌드와 판매 화법을 체계적으로 교육합니다.</>,
        list: ["매월 2회 정기 교육", "최신 트렌드 및 판매 화법 공유", "실시간 Q&A 및 피드백"],
    },
    {
        image: "/img/edu/class-02.png",
        badge: "1:1 전담 멘토링",
        title: <>혼자가 아닙니다.<br /><span className="text-orange">전담 매니저가 함께합니다.</span></>,
        desc: <>제안서 작성부터 고객 상담까지,<br />베테랑 지점장이 1:1로 밀착 케어하여 실전에서 바로 성과를 낼 수 있도록 돕습니다.</>,
        list: ["1:1 전담 매니저 배정", "제안서·상담 실전 코칭", "성과 분석 및 맞춤 피드백"],
    },
    {
        image: "/img/edu/class-03.png",
        badge: "체계적 교육 커리큘럼",
        title: <>보험 지식 제로?<br /><span className="text-orange">걱정하지 마세요.</span></>,
        desc: <>보험 기초부터 세금, 법인, 건강보험까지<br />단계별 커리큘럼으로 금융 전문가로 성장할 수 있습니다.</>,
        list: ["기초부터 심화까지 단계별 교육", "건강·세금·법인 등 전문 분야 학습", "교육 자료 및 영상 무제한 제공"],
    },
];

const LifelongSection = () => {
    const [eduIdx, setEduIdx] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setEduIdx((prev) => (prev + 1) % eduSlides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const current = eduSlides[eduIdx];

    return (
        <section className="njob-lifelong-section">
            <div className="section-container">
                <h2 className="lifelong-title">평생 직업이 되도록 돕습니다.</h2>
                <p className="lifelong-subtitle">
                    월 1,000만원의 환상보다, 월 100만원이 끊기지 않는 평생 부업을 만들어 갑니다.
                </p>

                <div className="lifelong-content">
                    <div className="lifelong-image-wrap">
                        <div className="tablet-frame">
                            <div className="edu-slider">
                                {eduSlides.map((slide, i) => (
                                    <img
                                        key={i}
                                        src={slide.image}
                                        alt={`디앤제이 교육 ${i + 1}`}
                                        className={`edu-slide ${i === eduIdx ? "active" : ""}`}
                                    />
                                ))}
                            </div>
                            <div className="edu-dots">
                                {eduSlides.map((_, i) => (
                                    <button
                                        key={i}
                                        className={`edu-dot ${i === eduIdx ? "active" : ""}`}
                                        onClick={() => setEduIdx(i)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="lifelong-info-card" key={eduIdx}>
                        <div className="lifelong-badge-row">
                            <span className="lifelong-check-badge">&#10004;</span>
                            <span className="lifelong-badge-text">{current.badge}</span>
                        </div>

                        <h3 className="lifelong-card-title">{current.title}</h3>

                        <p className="lifelong-card-desc">{current.desc}</p>

                        <ul className="lifelong-card-list">
                            {current.list.map((item, i) => (
                                <li key={i}>
                                    <span className="check-icon">&#10004;</span> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

// ═══════════════════════════════════════════════
// 섹션 8: 디앤제이 어떻게 시작하나요?
// ═══════════════════════════════════════════════
const startSteps = [
    { num: 1, title: "디앤제이 상담", sub: null },
    { num: 2, title: "보험설계사 시험 응시", sub: null },
    { num: 3, title: "합격 후 교육이수", sub: "(보험설계사 온라인 교육)" },
    { num: 4, title: "30개 보험사 코드 발급", sub: "(생명보험 19개, 손해보험 11개)" },
    { num: 5, title: "파트너 전담매니저 1:1 매칭", sub: null },
];

const StepSection = () => {
    const timelineRef = useRef(null);
    const [visibleSteps, setVisibleSteps] = useState([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    startSteps.forEach((_, idx) => {
                        setTimeout(() => {
                            setVisibleSteps((prev) => [...prev, idx]);
                        }, idx * 400);
                    });
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );
        if (timelineRef.current) observer.observe(timelineRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="njob-step-section">
            <div className="section-container">
                <h2 className="step-title">디앤제이 어떻게 시작하나요?</h2>
                <p className="step-subtitle">아주 쉽습니다. 이렇게만 따라 하세요.</p>

                <div className="step-timeline" ref={timelineRef}>
                    <div className="step-line" />
                    {startSteps.map((step, idx) => (
                        <div
                            className={`step-item ${visibleSteps.includes(idx) ? "step-visible" : ""}`}
                            key={idx}
                        >
                            <div className="step-circle">{step.num}</div>
                            <p className="step-name">{step.title}</p>
                            {step.sub && <p className="step-sub">{step.sub}</p>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// ═══════════════════════════════════════════════
// 섹션 9: 자주 묻는 질문
// ═══════════════════════════════════════════════
const faqData = [
    {
        q: "디앤제이 파트너는 어떻게 시작하나요?",
        a: "손해보험협회, 생명보험 협회에서 주관하는 보험 설계사 자격시험에 합격하면 바로 시작할 수 있어요.",
    },
    {
        q: "시작하는데 비용이 들어가나요?",
        a: "교육비는 전액 지원됩니다. 자격시험 응시료(약 2만원)만 발생하며, 그 외 초기 비용은 없습니다.",
    },
    {
        q: "수수료는 어떤 방식으로 지급되나요?",
        a: "보험계약 체결 시 수수료가 발생하며, 매월 정산하여 투명하게 지급됩니다. 모든 수수료는 100% 전산화되어 관리됩니다.",
    },
    {
        q: "출근, 교육을 받아야 하나요?",
        a: "출근 의무는 전혀 없습니다. 교육은 온라인으로 진행되며, 격주 줌 세미나를 통해 최신 트렌드와 판매 전략을 공유합니다.",
    },
    {
        q: "정말 실적 압박이 없나요?",
        a: "네, 실적 압박이 전혀 없습니다. 디앤제이는 파트너의 자율성을 최우선으로 존중하며, 본인의 페이스에 맞춰 자유롭게 활동할 수 있습니다.",
    },
    {
        q: "한 회사 상품만 팔아야 하나요?",
        a: "아닙니다. 디앤제이는 32개 보험사와 제휴하고 있어, 고객에게 가장 적합한 상품을 비교·분석하여 추천할 수 있습니다.",
    },
];

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section id="faq" className="njob-faq-section">
            <div className="section-container">
                <h2 className="faq-title">자주 묻는 질문</h2>
                <p className="faq-subtitle">궁금한 점이 있으시면 언제든 문의해 주세요.</p>

                <div className="faq-list">
                    {faqData.map((faq, idx) => (
                        <div
                            className={`faq-item ${openIndex === idx ? "open" : ""}`}
                            key={idx}
                            onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                        >
                            <div className="faq-question">
                                <span className="q-text">{faq.q}</span>
                                <span className={`q-arrow ${openIndex === idx ? "open" : ""}`} />
                            </div>
                            {openIndex === idx && (
                                <div className="faq-answer">
                                    <span className="a-text">{faq.a}</span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// ═══════════════════════════════════════════════
// 플로팅 버튼
// ═══════════════════════════════════════════════
const FloatingButtons = ({ onApply }) => {
    const scrollToTop = () => {
        const page = document.getElementById("top");
        if (page) {
            page.scrollIntoView({ behavior: "smooth" });
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <div className="floating-buttons">
            <button className="float-btn apply-btn" onClick={onApply}>
                N잡크루
                <br />
                지원하기
            </button>
            <button className="float-btn scroll-btn" onClick={scrollToTop}>
                맨 위로
                <br />
                올라가기
            </button>
        </div>
    );
};

// ═══════════════════════════════════════════════
// 신청 모달
// ═══════════════════════════════════════════════
const ApplyModal = ({ isOpen, onClose }) => {
    const [form, setForm] = useState({
        name: "",
        birthYear: "",
        birthMonth: "",
        birthDay: "",
        phone: "",
        email: "",
        sido: "",
        sigungu: "",
        job: "",
        referralCode: "",
        experience: "",
    });
    const [sending, setSending] = useState(false);
    const [result, setResult] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => {
            if (name === "sido") return { ...prev, sido: value, sigungu: "" };
            return { ...prev, [name]: value };
        });
    };

    const validate = () => {
        if (!form.name.trim()) return "이름을 입력해주세요.";
        if (!form.birthYear || !form.birthMonth || !form.birthDay) return "생년월일을 입력해주세요.";
        if (!/^01[0-9]\d{7,8}$/.test(form.phone.replace(/-/g, ""))) return "올바른 휴대전화 번호를 입력해주세요.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return "올바른 이메일을 입력해주세요.";
        if (!form.experience) return "설계사 경력 유무를 선택해주세요.";
        return null;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const error = validate();
        if (error) {
            setResult({ type: "error", msg: error });
            return;
        }

        setSending(true);
        setResult(null);

        const birth = `${form.birthYear}-${form.birthMonth.padStart(2, "0")}-${form.birthDay.padStart(2, "0")}`;
        const region = form.sido && form.sigungu ? `${form.sido} ${form.sigungu}` : form.sido || "-";

        try {
            const res = await fetch("/.netlify/functions/triggerNjobApplyEmail", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: form.name.trim(),
                    birth,
                    phone: form.phone.replace(/-/g, ""),
                    email: form.email.trim(),
                    region,
                    job: form.job || "-",
                    referralCode: form.referralCode.trim() || "-",
                    experience: form.experience,
                }),
            });

            if (res.ok) {
                setResult({ type: "success", msg: "신청이 완료되었습니다!" });
                setForm({
                    name: "", birthYear: "", birthMonth: "", birthDay: "",
                    phone: "", email: "", sido: "", sigungu: "",
                    job: "", referralCode: "", experience: "",
                });
            } else {
                const data = await res.json();
                setResult({ type: "error", msg: data.error || "발송에 실패했습니다. 다시 시도해주세요." });
            }
        } catch {
            setResult({ type: "error", msg: "네트워크 오류가 발생했습니다." });
        } finally {
            setSending(false);
        }
    };

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) onClose();
    };

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [isOpen]);

    if (!isOpen) return null;

    const sigunguList = form.sido ? regionData[form.sido] || [] : [];

    return (
        <div className="apply-overlay" onClick={handleOverlayClick}>
            <div className="apply-modal">
                <div className="apply-modal-header">
                    <div className="apply-modal-logo">
                        <span className="logo-brand">디앤제이</span>{" "}
                        <span className="logo-njob">N잡크루</span>
                    </div>
                    <button className="apply-modal-close" onClick={onClose}>&times;</button>
                </div>

                <div className="apply-modal-body">
                    <div className="apply-modal-title">
                        <p className="modal-title-accent">1분이면 신청!</p>
                        <p className="modal-title-sub"><em>꼭 필요한 정보</em>만 받고 있어요</p>
                    </div>

                    <form onSubmit={handleSubmit} className="apply-form">
                        <div className="form-group">
                            <label className="form-label">이름<span className="required">*</span></label>
                            <input type="text" name="name" className="form-input" placeholder="예) 홍길동" value={form.name} onChange={handleChange} />
                        </div>

                        <div className="form-group">
                            <label className="form-label">생년월일<span className="required">*</span></label>
                            <div className="form-row birth-row">
                                <input type="number" name="birthYear" className="form-input" placeholder="년도" value={form.birthYear} onChange={handleChange} min="1900" max="2010" />
                                <input type="number" name="birthMonth" className="form-input" placeholder="월" value={form.birthMonth} onChange={handleChange} min="1" max="12" />
                                <input type="number" name="birthDay" className="form-input" placeholder="일" value={form.birthDay} onChange={handleChange} min="1" max="31" />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="form-label">휴대전화<span className="required">*</span></label>
                            <input type="tel" name="phone" className="form-input" placeholder="휴대전화" value={form.phone} onChange={handleChange} />
                        </div>

                        <div className="form-group">
                            <label className="form-label">이메일<span className="required">*</span></label>
                            <input type="email" name="email" className="form-input" placeholder="이메일" value={form.email} onChange={handleChange} />
                        </div>

                        <div className="form-group">
                            <label className="form-label">지역</label>
                            <div className="form-row">
                                <CustomSelect
                                    value={form.sido}
                                    onChange={(v) => setForm((p) => ({ ...p, sido: v, sigungu: "" }))}
                                    options={Object.keys(regionData).map((s) => ({ value: s, label: s }))}
                                    placeholder="시/도"
                                />
                                <CustomSelect
                                    value={form.sigungu}
                                    onChange={(v) => setForm((p) => ({ ...p, sigungu: v }))}
                                    options={sigunguList.map((g) => ({ value: g, label: g }))}
                                    placeholder="시/군/구"
                                    disabled={!form.sido}
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="form-label">직업</label>
                            <CustomSelect
                                value={form.job}
                                onChange={(v) => setForm((p) => ({ ...p, job: v }))}
                                options={jobOptions.map((j) => ({ value: j, label: j }))}
                                placeholder="직업을 선택해 주세요."
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">
                                추천인정보 <span className="label-hint">(닉네임, 이름, 검색, 블로그, 인스타 등)</span>
                            </label>
                            <input type="text" name="referralCode" className="form-input" placeholder="추천인정보" value={form.referralCode} onChange={handleChange} />
                        </div>

                        <div className="form-group">
                            <label className="form-label">설계사 경력 유무<span className="required">*</span></label>
                            <div className="form-row exp-row">
                                <button type="button" className={`exp-btn ${form.experience === "있음" ? "active" : ""}`} onClick={() => setForm((p) => ({ ...p, experience: "있음" }))}>있음</button>
                                <button type="button" className={`exp-btn ${form.experience === "없음" ? "active" : ""}`} onClick={() => setForm((p) => ({ ...p, experience: "없음" }))}>없음</button>
                            </div>
                        </div>

                        {result && <div className={`form-result ${result.type}`}>{result.msg}</div>}

                        <button type="submit" className="apply-submit-btn" disabled={sending}>
                            {sending ? "신청 중..." : "신청하기"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

// ═══════════════════════════════════════════════
// 메인 컴포넌트
// ═══════════════════════════════════════════════
const NJob = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <div id="top" className="njob-page">
            <HeroSection onApply={openModal} />
            <ActivitySection />
            <IncomeSection onApply={openModal} />
            <InsuranceDesignSection />
            <IncomeCalcSection />
            <CompanySection />
            <LifelongSection />
            <StepSection />
            <FAQSection />
            <FloatingButtons onApply={openModal} />
            <ApplyModal isOpen={modalOpen} onClose={closeModal} />
        </div>
    );
};

export default NJob;
