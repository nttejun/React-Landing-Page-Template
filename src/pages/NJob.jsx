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
                        바로 이 2가지 이유 때문입니다 &rarr;
                    </a>
                </div>
            </div>

            <div className="hero-container">
                <h1 className="hero-title">
                    디앤제이 보험N잡<br />
                    이 곳에서 시작하는 이유가 있습니다.
                </h1>
                <p ref={subtitleRef} className={`hero-subtitle scroll-reveal ${subtitleVisible ? "revealed" : ""}`}>
                    보험료의 최대 10배 이상 소득가능!<br/>
                    탄력적인 자율출근제 자유로운 분위기!<br/>
                    상품교육 외 나만의 전문교육까지<br/>
                </p>
                <div ref={buttonsRef} className={`hero-buttons scroll-reveal ${buttonsVisible ? "revealed" : ""}`}>
                    <a
                        href="https://open.kakao.com/o/szaJYuji"
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
        image: "/img/njob/time.png",
        title: "출퇴근 자유 · 시간 자유",
        desc: "정해진 출근도, 퇴근도 없습니다. 내 일정에 맞춰 자유롭게 일하고, 원하는 만큼 수익을 만들어보세요.",
    },
    {
        image: "/img/njob/house.png",
        title: "준비물은 단 하나!",
        desc: "노트북 또는 스마트폰만 있으면 사무실, 집, 카페 등 장소에 상관없이 언제든 업무가 가능합니다.",
    },
    {
        image: "/img/njob/edu.png",
        title: "배울 기회는 항상 Open!",
        desc: "매주 평일 교육이 열리며 가능한 시간에 맞춰 선택적으로 참여할 수 있습니다.",
    },
    {
        image: "/img/njob/support.png",
        title: "어려움? 걱정하지 마세요!",
        desc: "활동 중 생기는 궁금증이나 어려움은 매니저들이 언제든 안내해 드립니다.",
    },
];

const ActivitySection = () => (
    <section className="njob-activity-section">
        <div className="section-container">
            <h2 className="activity-title">실제로 활동이 가능할까요?</h2>
            <p className="activity-subtitle">
                <span className="text-orange">가능합니다.</span> 현재 활동중인 디앤제이 멤버는 자유롭게 <strong>출퇴근 · 재택근무</strong>를 하고 있습니다.
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
                    href="https://open.kakao.com/o/szaJYuji"
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
// 섹션 4.5: N잡크루 리얼 후기
// ═══════════════════════════════════════════════
const reviews = [
    {
        tag: "경력단절",
        profile: "40대 / 前 외국계 은행 근무",
        quote: "내 보험은 내가 공부해 드는 시대, N잡 설계사로 건강과 노후를 동시에 챙기고 있어요",
        points: [
            "결혼과 출산, 육아를 하다 보니 경력이 잠시 멈추게 되었어요. 그러다 시간을 유연하게 활용할 수 있는 일을 찾다가 N잡을 알게 되었고, 자연스럽게 도전하게 되었습니다.",
            "예전에 가입했던 간병보험을 다시 살펴보니 중증 질환 위주로만 보장이 되어 있더라고요. 그래서 직접 공부하면서 보장 내용을 하나씩 비교해 보고, 저에게 맞게 다시 리모델링했습니다.",
            "초고령화 시대가 되면서 어르신들의 간병보험 상담을 도와드리고 있습니다. 필요한 보장을 안내해 드리며 보람도 느끼고, 동시에 수익도 만들어 가고 있습니다.",
        ],
        highlight: "제 보험을 직접 점검하면서 노후 건강까지 함께 준비할 수 있었습니다.",
        link: "https://www.instagram.com/reel/DH2S398hWyz/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
        tag: "프리랜서 블로거의 선택",
        profile: "30대 / 패션 블로거",
        quote: "연봉 8천 회사를 퇴사하고 프리랜서가 됐는데, N잡 설계사가 인생을 바꿨어요",
        points: [
            "멋지게 퇴사를 하고 블로그로 수익을 만들고 있었지만, 그것만으로는 조금 부족하다는 생각이 들었습니다. 그래서 N잡을 고민하던 중 설계사에 도전하게 되었습니다.",
            "1주일 정도 시간을 내어 집중해서 공부했고, 그 결과 생명보험과 손해보험 자격증을 동시에 취득할 수 있었습니다.",
            "제 보험을 다시 살펴보니 생각보다 불필요한 보장과 부족한 보장이 섞여 있더라고요. 그래서 직접 공부하면서 보험을 리모델링하고 제 상황에 맞게 다시 설계했습니다.",
        ],
        highlight: "월 6~8일 정도 시간을 투자해 최대 1,000만 원의 수익을 달성했습니다.",
        link: "https://www.instagram.com/reel/DGKV8z_BD2v/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
        tag: "가족 보험 전문가",
        profile: "30대 / 주부",
        quote: "월 80만원 보험료를 내면서도 받을 수 있는 게 없었던 언니를 보고 시작했어요",
        points: [
            "미국에 살고 있는 언니의 보험을 함께 확인해 보게 되었는데요. 살펴보니 사망이나 중증 질환 중심으로만 보장이 구성되어 있었습니다.",
            "그 일을 계기로 보험을 제대로 알아봐야겠다는 생각이 들었고, 결국 설계사 자격증까지 취득하게 되었습니다. 이후 6자매 가족의 보험을 직접 하나씩 리모델링했습니다.",
            "디앤제이에서 교재와 시험비를 지원해 주어서 준비하는 데 부담이 없었고, 그 덕분에 시험도 한 번에 합격할 수 있었습니다.",
        ],
        highlight: "월 최대 500만 원의 부수입을 만들면서 가족 보험도 직접 챙기는 시대입니다.",
        link: "https://www.instagram.com/reel/DHpXdCthUzI/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
        tag: "부모님 걱정에서 시작",
        profile: "30대 / 직장인(사무직)",
        quote: "80대 부모님 간병보험을 알아보다 보험에 대해 얼마나 무지했는지 깨달았어요",
        points: [
            "부모님의 간병·치매 보험 설명을 들어보았지만 내용이 쉽게 이해되지 않더라고요. 그래서 결국 직접 공부해 보기로 결심했습니다.",
            "생명보험과 손해보험 자격증을 취득한 뒤, 가족들의 보험을 하나씩 살펴보며 보장 내용을 다시 점검하게 되었습니다.",
            "주 1~2회 정도 시간을 내어 활동하고 있는데, 시간 대비 만족스러운 결과를 얻고 있습니다.",
        ],
        highlight: "건강도 챙기면서 월 100~200만 원의 부수입을 만들 수 있는 N잡입니다.",
        link: "https://www.instagram.com/reel/DIc8NtDBx8a/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
];

const ReviewSection = () => {
    const [current, setCurrent] = useState(0);
    const total = reviews.length;

    const prev = () => setCurrent((c) => (c - 1 + total) % total);
    const next = () => setCurrent((c) => (c + 1) % total);

    return (
        <section className="njob-review-section">
            <div className="section-container">
                <h2 className="review-section-title">N잡크루원들의 <em>리얼 후기</em></h2>
                <div className="review-slider">
                    <div className="review-track-wrap">
                        <div className="review-track" style={{ transform: `translateX(-${current * 100}%)` }}>
                            {reviews.map((r, idx) => (
                                <div className="review-card" key={idx}>
                                    <div className="review-card-head">
                                        <span className="review-tag">{r.tag}</span>
                                        <span className="review-profile">{r.profile}</span>
                                    </div>
                                    <p className="review-quote">"{r.quote}"</p>
                                    <ul className="review-points">
                                        {r.points.map((p, i) => (
                                            <li key={i}>{p}</li>
                                        ))}
                                    </ul>
                                    {r.link ? (
                                        <a href={r.link} target="_blank" rel="noopener noreferrer" className="review-highlight review-highlight-link">
                                            {r.highlight}
                                        </a>
                                    ) : (
                                        <div className="review-highlight">{r.highlight}</div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="review-controls">
                    <button className="review-nav" onClick={prev} aria-label="이전">&#8249;</button>
                    <div className="review-dots">
                        {reviews.map((_, idx) => (
                            <button
                                key={idx}
                                className={`review-dot${idx === current ? " active" : ""}`}
                                onClick={() => setCurrent(idx)}
                                aria-label={`후기 ${idx + 1}`}
                            />
                        ))}
                    </div>
                    <button className="review-nav" onClick={next} aria-label="다음">&#8250;</button>
                </div>
                <a
                    href="https://www.instagram.com/dreamnjoy_official/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="review-insta-link"
                >
                    자세한 후기를 확인하실 수 있습니다
                    <img src="/img/sns/insta.jpeg" alt="Instagram" className="review-insta-icon" />
                </a>
            </div>
        </section>
    );
};

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
                    고객에게 맞는 상품이 따로 있는데<br/>
                    한 회사 상품만 추천받는다면?
                </h2>
                <p className="company-subtitle">
                    디엔제이는 여러 보험사를 비교해
                    내게 맞는 가장 합리적인 보험 설계를 제공합니다
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
                <h2 className="lifelong-title">두 번째 직업으로<br/>새로운 수익을 만듭니다.</h2>
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
// 섹션 7.5: 차집사와 새로운 영업 기회
// ═══════════════════════════════════════════════
const ChajipsaSection = () => {
    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="chajipsa-section" ref={sectionRef}>
            <div className="section-container">
                <h2 className="chajipsa-title">디앤제이와 자동차보험 소득기회를 열어보세요!</h2>
                <div className="chajipsa-steps">

                    {/* STEP 1: 고객 전달 */}
                    <div className={`chajipsa-step ${visible ? "chajipsa-visible" : ""}`} style={{ transitionDelay: "0ms" }}>
                        <div className="chajipsa-illust">
                            <svg viewBox="0 0 160 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                                {/* Shadow */}
                                <ellipse cx="72" cy="168" rx="30" ry="6" fill="#b8d4ee" opacity="0.6"/>
                                {/* Legs */}
                                <rect x="58" y="128" width="13" height="38" rx="6" fill="#2563a8"/>
                                <rect x="75" y="128" width="13" height="38" rx="6" fill="#1e54a0"/>
                                {/* Shoes */}
                                <ellipse cx="64" cy="166" rx="9" ry="5" fill="#1a3a6e"/>
                                <ellipse cx="81" cy="166" rx="9" ry="5" fill="#1a3a6e"/>
                                {/* Body / Torso */}
                                <rect x="50" y="88" width="46" height="46" rx="12" fill="#3b82d4"/>
                                {/* Left arm (down) */}
                                <rect x="34" y="92" width="18" height="11" rx="5.5" fill="#3b82d4" transform="rotate(12 34 92)"/>
                                <ellipse cx="35" cy="108" rx="7" ry="7" fill="#f7c59e"/>
                                {/* Right arm (gesturing up) */}
                                <rect x="93" y="84" width="18" height="11" rx="5.5" fill="#3b82d4" transform="rotate(-40 93 84)"/>
                                <ellipse cx="105" cy="72" rx="7" ry="7" fill="#f7c59e"/>
                                {/* Neck */}
                                <rect x="67" y="74" width="12" height="16" rx="4" fill="#f7c59e"/>
                                {/* Head */}
                                <ellipse cx="73" cy="60" rx="22" ry="22" fill="#f7c59e"/>
                                {/* Hair */}
                                <path d="M51 54 Q52 34 73 31 Q94 34 95 54 Q90 42 73 41 Q56 42 51 54Z" fill="#2c1e0f"/>
                                {/* Eyes */}
                                <ellipse cx="65" cy="60" rx="3" ry="3.2" fill="#333"/>
                                <ellipse cx="81" cy="60" rx="3" ry="3.2" fill="#333"/>
                                {/* Smile */}
                                <path d="M65 70 Q73 77 81 70" stroke="#c47a3a" strokeWidth="2" fill="none" strokeLinecap="round"/>
                                {/* Speech bubble */}
                                <rect x="100" y="20" width="52" height="40" rx="10" fill="white" stroke="#3b82d4" strokeWidth="2.5"/>
                                {/* Bubble tail */}
                                <path d="M108 60 L104 72 L118 62" fill="white" stroke="#3b82d4" strokeWidth="2" strokeLinejoin="round"/>
                                {/* Dots in bubble */}
                                <circle cx="114" cy="40" r="4" fill="#3b82d4"/>
                                <circle cx="126" cy="40" r="4" fill="#3b82d4"/>
                                <circle cx="138" cy="40" r="4" fill="#3b82d4"/>
                            </svg>
                        </div>
                        <p className="chajipsa-step-text">고객 이름과 전화번호를<br /><strong>제휴사로 전달</strong>하면,</p>
                    </div>

                    {/* STEP 2: 직접 통화 + 계약 */}
                    <div className={`chajipsa-step ${visible ? "chajipsa-visible" : ""}`} style={{ transitionDelay: "200ms" }}>
                        <div className="chajipsa-illust">
                            <svg viewBox="0 0 200 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                                {/* Desk surface */}
                                <rect x="28" y="118" width="148" height="10" rx="5" fill="#9ac5e8"/>
                                <rect x="42" y="128" width="10" height="36" rx="5" fill="#9ac5e8"/>
                                <rect x="152" y="128" width="10" height="36" rx="5" fill="#9ac5e8"/>
                                {/* Monitor stand */}
                                <rect x="94" y="112" width="16" height="10" rx="3" fill="#7ab2dc"/>
                                <rect x="86" y="118" width="32" height="5" rx="2.5" fill="#7ab2dc"/>
                                {/* Monitor */}
                                <rect x="58" y="46" width="88" height="68" rx="8" fill="#1e3a5c" stroke="#3b82d4" strokeWidth="2.5"/>
                                <rect x="64" y="52" width="76" height="56" rx="5" fill="#e8f4fb"/>
                                {/* Checkmark circle on screen */}
                                <circle cx="102" cy="80" r="18" fill="#3b82d4"/>
                                <path d="M92 80 L99 88 L113 68" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
                                {/* Left person (agent, sitting) */}
                                {/* Head */}
                                <ellipse cx="32" cy="64" rx="16" ry="16" fill="#f7c59e"/>
                                <path d="M16 59 Q17 44 32 42 Q47 44 48 59 Q44 50 32 49 Q20 50 16 59Z" fill="#4a3728"/>
                                <ellipse cx="27" cy="64" rx="2.5" ry="2.5" fill="#333"/>
                                <ellipse cx="37" cy="64" rx="2.5" ry="2.5" fill="#333"/>
                                <path d="M27 71 Q32 76 37 71" stroke="#c47a3a" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
                                {/* Body */}
                                <rect x="20" y="80" width="24" height="38" rx="8" fill="#3b82d4"/>
                                {/* Neck */}
                                <rect x="26" y="72" width="12" height="12" rx="4" fill="#f7c59e"/>
                                {/* Arm pointing at screen */}
                                <path d="M44 92 Q52 86 60 80" stroke="#3b82d4" strokeWidth="9" strokeLinecap="round"/>
                                {/* Hand */}
                                <ellipse cx="60" cy="80" rx="7" ry="7" fill="#f7c59e"/>
                                {/* Other arm */}
                                <rect x="8" y="82" width="16" height="9" rx="4.5" fill="#3b82d4" transform="rotate(15 8 82)"/>
                                {/* Right person (standing) */}
                                {/* Shadow */}
                                <ellipse cx="170" cy="168" rx="18" ry="5" fill="#b8d4ee" opacity="0.5"/>
                                {/* Legs */}
                                <rect x="161" y="130" width="10" height="36" rx="5" fill="#1e54a0"/>
                                <rect x="174" y="130" width="10" height="36" rx="5" fill="#2563a8"/>
                                {/* Shoes */}
                                <ellipse cx="166" cy="165" rx="8" ry="4.5" fill="#1a3a6e"/>
                                <ellipse cx="179" cy="165" rx="8" ry="4.5" fill="#1a3a6e"/>
                                {/* Body */}
                                <rect x="155" y="92" width="36" height="42" rx="10" fill="#2563a8"/>
                                {/* Neck */}
                                <rect x="167" y="78" width="10" height="16" rx="4" fill="#f7c59e"/>
                                {/* Head */}
                                <ellipse cx="172" cy="64" rx="18" ry="18" fill="#f7c59e"/>
                                {/* Hair */}
                                <path d="M154 59 Q155 42 172 39 Q189 42 190 59 Q185 48 172 47 Q159 48 154 59Z" fill="#2c1e0f"/>
                                <ellipse cx="165" cy="63" rx="3" ry="3" fill="#333"/>
                                <ellipse cx="179" cy="63" rx="3" ry="3" fill="#333"/>
                                <path d="M165 72 Q172 78 179 72" stroke="#c47a3a" strokeWidth="2" fill="none" strokeLinecap="round"/>
                                {/* Arms */}
                                <rect x="138" y="96" width="20" height="10" rx="5" fill="#2563a8" transform="rotate(10 138 96)"/>
                                <rect x="188" y="96" width="18" height="10" rx="5" fill="#2563a8" transform="rotate(-10 188 96)"/>
                            </svg>
                        </div>
                        <p className="chajipsa-step-text">제휴사가 고객에게 <strong>직접 통화</strong>하여<br />보험 비교 견적 및 계약 진행하고,</p>
                    </div>

                    {/* STEP 3: 수수료 지급 */}
                    <div className={`chajipsa-step ${visible ? "chajipsa-visible" : ""}`} style={{ transitionDelay: "400ms" }}>
                        <div className="chajipsa-illust">
                            <svg viewBox="0 0 160 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                                {/* Shadow */}
                                <ellipse cx="72" cy="168" rx="30" ry="6" fill="#b8d4ee" opacity="0.6"/>
                                {/* Legs */}
                                <rect x="58" y="128" width="13" height="38" rx="6" fill="#1e54a0"/>
                                <rect x="75" y="128" width="13" height="38" rx="6" fill="#2563a8"/>
                                {/* Shoes */}
                                <ellipse cx="64" cy="166" rx="9" ry="5" fill="#1a3a6e"/>
                                <ellipse cx="81" cy="166" rx="9" ry="5" fill="#1a3a6e"/>
                                {/* Body / Suit */}
                                <rect x="50" y="88" width="46" height="46" rx="12" fill="#1e54a0"/>
                                {/* Suit lapels */}
                                <path d="M73 88 L65 100 L73 106 L81 100 Z" fill="#184a8e"/>
                                {/* Neck */}
                                <rect x="67" y="74" width="12" height="16" rx="4" fill="#f7c59e"/>
                                {/* Head */}
                                <ellipse cx="73" cy="58" rx="22" ry="22" fill="#f7c59e"/>
                                {/* Hair */}
                                <path d="M51 52 Q52 32 73 29 Q94 32 95 52 Q90 40 73 39 Q56 40 51 52Z" fill="#1a1a1a"/>
                                {/* Eyes */}
                                <ellipse cx="65" cy="58" rx="3" ry="3.2" fill="#333"/>
                                <ellipse cx="81" cy="58" rx="3" ry="3.2" fill="#333"/>
                                {/* Smile */}
                                <path d="M65 67 Q73 74 81 67" stroke="#c47a3a" strokeWidth="2" fill="none" strokeLinecap="round"/>
                                {/* Left arm (holding doc) */}
                                <rect x="30" y="90" width="24" height="12" rx="6" fill="#1e54a0" transform="rotate(20 30 90)"/>
                                {/* Document */}
                                <rect x="4" y="58" width="44" height="56" rx="6" fill="white" stroke="#3b82d4" strokeWidth="2.5"/>
                                <rect x="11" y="68" width="30" height="4" rx="2" fill="#3b82d4"/>
                                <rect x="11" y="77" width="22" height="4" rx="2" fill="#9ac5e8"/>
                                <rect x="11" y="86" width="26" height="4" rx="2" fill="#9ac5e8"/>
                                {/* Money badge on document */}
                                <circle cx="38" cy="100" rx="13" ry="13" fill="#ffa726"/>
                                <text x="31" y="105" fontSize="13" fontWeight="900" fill="white" fontFamily="Arial">W</text>
                                {/* Right arm (side) */}
                                <rect x="94" y="90" width="22" height="12" rx="6" fill="#1e54a0" transform="rotate(-15 94 90)"/>
                                <ellipse cx="114" cy="106" rx="8" ry="8" fill="#f7c59e"/>
                            </svg>
                        </div>
                        <p className="chajipsa-step-text">계약이 완료되면<br /><strong>수수료 익월 초 지급!</strong></p>
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
        q: "시작하는데 초기 자본이 필요한가요?",
        a: "초기 자본은 필요 없으며, 시험응시료와 보증보험 비용만 일부 발생합니다.",
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
            <ReviewSection />
            <IncomeCalcSection />
            <CompanySection />
            <LifelongSection />
            <ChajipsaSection />
            <StepSection />
            <FAQSection />
            <FloatingButtons onApply={openModal} />
            <ApplyModal isOpen={modalOpen} onClose={closeModal} />
        </div>
    );
};

export default NJob;
