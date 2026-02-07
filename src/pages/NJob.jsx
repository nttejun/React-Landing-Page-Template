import React, { useState, useEffect, useCallback, useRef } from "react";
import "./NJob.css";

// 커스텀 셀렉트 컴포넌트
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
        <div className={`custom-select${open ? ' open' : ''}${disabled ? ' disabled' : ''}`} ref={ref}>
            <button
                type="button"
                className={`custom-select-trigger${!value ? ' placeholder' : ''}`}
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
                            className={`custom-select-option${opt.value === value ? ' selected' : ''}`}
                            onClick={() => {
                                onChange(opt.value);
                                setOpen(false);
                            }}
                        >
                            {opt.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

// 지역 데이터
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

const jobOptions = [
    "직장인", "자영업", "프리랜서", "대학생", "주부", "무직/구직중", "기타"
];

// 네비게이션
const NJobNav = () => (
    <nav className="njob-nav">
        <div className="nav-container">
            <div className="nav-logo">
                <span className="logo-samsung">드림앤조이</span>
                <span className="logo-njob">N잡크루</span>
            </div>
            <div className="nav-links">
                <a href="#faq" className="nav-link">FAQ</a>
                <a href="https://www.instagram.com/dreamnjoy_official/" target="_blank" rel="noopener noreferrer" className="nav-icon">
                    <img src="/img/sns/insta.jpeg" alt="인스타그램" className="nav-sns-img" />
                </a>
                <a href="https://www.youtube.com/@%EB%93%9C%EB%A6%BC%EC%95%A4%EC%A1%B0%EC%9D%B4N%EC%9E%A1%ED%8C%8C%ED%8A%B8%EB%84%88" target="_blank" rel="noopener noreferrer" className="nav-icon">
                    <img src="/img/sns/youtube.svg" alt="유튜브" className="nav-sns-img" />
                </a>
            </div>
        </div>
    </nav>
);

// 섹션 1: 히어로
const HeroSection = ({ onApply }) => {
    const qaItems = [
        { question: "출근은 매일?", answer: "원할 때 언제든지" },
        { question: "N잡 소득은?", answer: "일하고 싶은 만큼만" },
        { question: "실적압박은?", answer: "영업 압박 No!" },
        { question: "투자금?", answer: "단돈 0원으로 가능!" },
    ];

    return (
        <section className="njob-hero-section">
            <div className="hero-container">
                <div className="hero-content">
                    <p className="hero-tagline">N잡 필수시대! 스마트한 보험 N잡 시작하세요</p>
                    <h1 className="hero-title">
                        보험N잡<br />이젠 <span className="title-highlight">필수!</span>
                    </h1>
                    <p className="hero-subtitle">
                        내가 원하는 시간에 자유롭게 일할 수 있다고?
                    </p>
                    <div className="hero-qa-grid">
                        {qaItems.map((item, idx) => (
                            <div className="qa-item" key={idx}>
                                <span className="qa-question">{item.question}</span>
                                <span className="qa-answer">{item.answer}</span>
                            </div>
                        ))}
                    </div>
                    <button className="hero-cta-btn" onClick={onApply}>
                        N잡크루 지원하기 <span className="arrow">→</span>
                    </button>
                </div>
            </div>
            <p className="hero-disclaimer">*수익은 개인의 활동에 따라 달라질 수 있으며, 해당 금액은 예시입니다.</p>
        </section>
    );
};

// 섹션 1.5: 수익 소개 (기존 히어로 콘텐츠)
const incomeSlides = [
    { header: "드림앤조이N잡크루", amount: "1,500,000원", date: "12.20", desc: "드림앤조이N잡크루 12월 입금", historyAmount: "1,500,000원" },
    { header: "드림앤조이N잡크루", amount: "2,300,000원", date: "11.20", desc: "드림앤조이N잡크루 11월 입금", historyAmount: "2,300,000원" },
    { header: "드림앤조이N잡크루", amount: "800,000원", date: "10.20", desc: "드림앤조이N잡크루 10월 입금", historyAmount: "800,000원" },
    { header: "드림앤조이N잡크루", amount: "3,100,000원", date: "09.20", desc: "드림앤조이N잡크루 9월 입금", historyAmount: "3,100,000원" },
];

const IncomeSection = ({ onApply }) => {
    const [current, setCurrent] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const goTo = useCallback((idx) => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrent(idx);
        setTimeout(() => setIsAnimating(false), 500);
    }, [isAnimating]);

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
                <div className="shape shape-coin coin-1">⭐</div>
                <div className="shape shape-coin coin-2">🪙</div>
                <div className="shape shape-cone"></div>
            </div>
            <div className="income-container">
                <div className="income-content">
                    <h2 className="income-title">
                        <span className="title-job">N잡도 찾고, </span>수익도 찾았다
                    </h2>
                    <p className="income-subtitle">
                        <b>
                        출퇴근 없이, 내 일정에 맞춰<br/>
                        부담 없이 시작하는 N잡 보험!<br/>
                        </b>
                    </p>
                    <button className="income-cta-btn" onClick={onApply}>
                        N잡크루 지원하기 <span className="arrow">→</span>
                    </button>
                </div>
                <div className="income-visual">
                    <div className="phone-mockup">
                        <div className="phone-screen">
                            <div className="phone-slider">
                                {incomeSlides.map((slide, idx) => (
                                    <div
                                        className={`phone-slide ${idx === current ? 'active' : ''}`}
                                        key={idx}
                                    >
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
                                        className={`slide-dot ${idx === current ? 'active' : ''}`}
                                        key={idx}
                                        onClick={() => goTo(idx)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className="income-disclaimer">*수익은 개인의 활동에 따라 달라질 수 있으며, 해당 금액은 예시입니다.</p>
        </section>
    );
};

// 섹션 2: 고민
// 섹션 3: 소개
const reviews = [
    {
        tag: "경력단절 → N잡 설계사",
        profile: "40대 / 前 외국계 은행 근무",
        quote: "내 보험은 내가 공부해 드는 시대, N잡 설계사로 건강과 노후를 동시에 챙기고 있어요",
        points: [
            "결혼·출산·육아 후 경력단절, 시간 자유로운 N잡을 찾다 설계사 도전",
            "과거 가입한 간병보험이 중증만 보장 → 공부 후 직접 리모델링 성공",
            "초고령화 시대, 어르신 간병보험 컨설팅으로 보람과 수익을 함께",
        ],
        highlight: "내 보험을 직접 점검하고 가족 건강까지 챙기는 N잡!",
    },
    {
        tag: "가족 보험 전문가",
        profile: "30대 / 육아맘",
        quote: "월 80만원 보험료를 내면서도 받을 수 있는 게 없었던 언니를 보고 시작했어요",
        points: [
            "미국 거주 언니의 보험 — 사망·중증만 보장되는 엉터리 설계 발견",
            "분노를 계기로 설계사 자격증 취득, 6자매 가족 보험을 직접 리모델링",
            "디앤제이 지원으로 교재·시험비 무료, 한 번에 합격",
        ],
        highlight: "월 최대 500만원 부수입, 가족 보험은 내가 책임지는 시대!",
    },
    {
        tag: "부모님 걱정에서 시작",
        profile: "30대 / 직장인 겸업",
        quote: "80대 부모님 간병보험을 알아보다 보험에 대해 얼마나 무지했는지 깨달았어요",
        points: [
            "부모님 간병·치매 보험 설명을 들어도 이해가 안 돼 직접 공부 결심",
            "생명·손해보험 자격증 취득 후 가족 보험 전면 점검",
            "주 1~2회 투자, 시간 대비 매우 만족스러운 성과",
        ],
        highlight: "월 부수입 100~200만원, 건강도 챙기고 돈도 버는 N잡!",
    },
    {
        tag: "프리랜서 블로거의 선택",
        profile: "30대 / 패션 블로거",
        quote: "연봉 8천 회사를 퇴사하고 프리랜서가 됐는데, N잡 설계사가 인생을 바꿨어요",
        points: [
            "멋지게 퇴사했지만 블로그 수익만으론 부족, N잡을 고민하던 중 설계사 도전",
            "1주 집중 공부로 생명·손해보험 자격증 동시 취득",
            "내 보험 분석해보니 엉망 → 직접 리모델링 후 맞춤 설계로 전환",
        ],
        highlight: "월 6~8일 투자로 월 수익 최대 1,000만원 달성!",
    },
];

const IntroSection = () => (
    <section className="njob-intro-section">
        <div className="section-container">
            <p className="intro-pretitle">고민을 기회로 바꾸는 해답!</p>

            <div className="intro-logo">
                <span className="logo-samsung-big">드림앤조이</span>
                <span className="logo-njob-big">N잡크루</span>
            </div>

            {/* N잡크루 후기 */}
            <div className="review-section">
                <h3 className="review-section-title">N잡크루원들의 <em>리얼 후기</em></h3>
                <div className="review-cards">
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
                            <div className="review-highlight">{r.highlight}</div>
                        </div>
                    ))}
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
        </div>
    </section>
);

// 섹션 5: 지원 혜택
const eduImages = [
    { src: "/img/edu/class-01.png", alt: "원데이 스페셜 클래스" },
    { src: "/img/edu/class-02.png", alt: "2월 원데이클래스" },
    { src: "/img/edu/class-03.png", alt: "디앤제이 ONE DAY Special Class" },
];

const BenefitSection = () => {
    const [eduIdx, setEduIdx] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setEduIdx((p) => (p + 1) % eduImages.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="njob-benefit-section">
            <div className="section-container">
                <h2 className="benefit-title">여러분은 소중한 N잡크루원!</h2>
                <p className="benefit-subtitle">
                    부담 없이 시작하고 성공적으로 정착할 수 있도록<br />
                    드림앤조이에서 아낌없이 도와드릴게요!
                </p>

                {/* 교육 프로그램 갤러리 */}
                <div className="edu-gallery">
                    <h3 className="edu-gallery-title">
                        매월 진행되는 <em>원데이 스페셜 클래스</em>
                    </h3>
                    <p className="edu-gallery-desc">
                        경제 동향, SNS 마케팅, 보험 전략 등 실전 중심의 교육을 무료로 제공합니다
                    </p>
                    <div className="edu-slider">
                        {eduImages.map((img, idx) => (
                            <div
                                className={`edu-slide ${idx === eduIdx ? 'active' : ''}`}
                                key={idx}
                            >
                                <img src={img.src} alt={img.alt} />
                            </div>
                        ))}
                    </div>
                    <div className="edu-dots">
                        {eduImages.map((_, idx) => (
                            <button
                                className={`edu-dot ${idx === eduIdx ? 'active' : ''}`}
                                key={idx}
                                onClick={() => setEduIdx(idx)}
                            />
                        ))}
                    </div>
                </div>

                <div className="benefit-items">
                    <div className="benefit-item">
                        <div className="benefit-text">
                            <span className="benefit-badge">멘토링</span>
                            <h3>보험 지식이 전혀 없어도<br/><em>괜찮아요!</em></h3>
                            <ul className="benefit-list">
                                <li>1:1 전담 멘토가 배정됩니다</li>
                                <li>교육 → 시험 → 등록 → 활동까지 전 과정 밀착 지원</li>
                                <li>언제든 궁금한 점은 바로 질문 가능</li>
                            </ul>
                        </div>
                        <div className="benefit-text">
                            <span className="benefit-badge">비용 지원</span>
                            <h3>초기 비용 0원!<br/><em>전액 무료로 시작하세요</em></h3>
                            <ul className="benefit-list">
                                <li>교육 수강료 전액 지원</li>
                                <li>추가 비용 부담 없이 가볍게 도전</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// 섹션 6: 시작하기
const StepSection = () => {
    const steps = [
        { num: 1, title: "N잡크루 지원", emoji: "🎧" },
        { num: 2, title: "교육 이수 후 시험 합격", emoji: "🎓" },
        { num: 3, title: "보험계약 체결 및 수익 창출", emoji: "💰" }
    ];

    return (
        <section className="njob-step-section">
            <div className="section-container">
                <div className="step-logo">
                    <span className="logo-samsung-big">드림앤조이</span>
                    <span className="logo-njob-big">N잡크루</span>
                </div>
                <h2 className="step-title">이렇게 시작하세요 🤗</h2>

                <div className="step-card">
                    <div className="steps">
                        {steps.map((step, idx) => (
                            <React.Fragment key={idx}>
                                <div className="step-item">
                                    <div className="step-emoji">{step.emoji}</div>
                                    <div className="step-badge">STEP {step.num}</div>
                                    <p className="step-name">{step.title}</p>
                                </div>
                                {idx < steps.length - 1 && <div className="step-line"></div>}
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                <div className="step-notes">
                    <p>※ 수익은 보험체결 후 발생되며 개인차가 있을 수 있습니다.</p>
                    <p>※ 보험업법상 보험설계사를 모집하는 것으로 정규 또는 비정규 직원 채용과는 무관합니다.</p>
                </div>
            </div>
        </section>
    );
};

// 섹션 7: FAQ
const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            q: "신청 후 불필요한 영업 관련 전화가 오지 않을까요?",
            a: "드림앤조이 N잡크루는 불필요한 상담전화가 없으며 지원자분들의 자율성을 최우선으로 존중합니다. 오직 설계사 자격 시험 합격과 전문 역량 강화에만 몰입할 수 있는 환경에서 부담 없이 가벼운 마음으로 새로운 도전을 시작하세요!"
        },
        {
            q: "자격 취득까지는 얼만큼의 시간이 필요한가요?",
            a: "개인차가 있지만 보통 2~4주 정도 소요됩니다."
        },
        {
            q: "자격만 취득하면 바로 설계사로 일할 수 있나요?",
            a: "네, 자격 취득 후 등록 절차를 거치면 바로 활동이 가능합니다."
        },
        {
            q: "자격시험에도 부분합격이 있나요?",
            a: "네, 과목별 부분합격제도가 있어 불합격 과목만 재응시 가능합니다."
        },
        {
            q: "자격시험이 많이 어렵나요?",
            a: "기본 교육을 충실히 이수하시면 충분히 합격 가능한 수준입니다."
        },
        {
            q: "설계사 자격 취득에 들어가는 비용은 없나요?",
            a: "교육비와 시험 응시료 모두 전액 지원됩니다. 초기 비용 0원으로 시작하세요!"
        }
    ];

    return (
        <section id="faq" className="njob-faq-section">
            <div className="section-container">
                <h2 className="faq-title">다른 사람들은 이런 걸 궁금해했어요 🤓</h2>

                <div className="faq-list">
                    {faqs.map((faq, idx) => (
                        <div
                            className={`faq-item ${openIndex === idx ? 'open' : ''}`}
                            key={idx}
                            onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                        >
                            <div className="faq-question">
                                <span className="q-badge">Q</span>
                                <span className="q-text">{faq.q}</span>
                                <span className="q-arrow">{openIndex === idx ? '∧' : '∨'}</span>
                            </div>
                            {openIndex === idx && (
                                <div className="faq-answer">
                                    <span className="a-badge">A</span>
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

// 플로팅 버튼
const FloatingButtons = ({ onApply }) => (
    <div className="floating-buttons">
        <button className="float-btn apply-btn" onClick={onApply}>
            N잡크루<br />지원하기
        </button>
        <button className="float-btn scroll-btn" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            맨 위로<br />올라가기
        </button>
    </div>
);

// 신청 모달
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
    const [result, setResult] = useState(null); // { type: 'success'|'error', msg }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => {
            if (name === "sido") {
                return { ...prev, sido: value, sigungu: "" };
            }
            return { ...prev, [name]: value };
        });
    };

    const validate = () => {
        if (!form.name.trim()) return "이름을 입력해주세요.";
        if (!form.birthYear || !form.birthMonth || !form.birthDay)
            return "생년월일을 입력해주세요.";
        if (!/^01[0-9]\d{7,8}$/.test(form.phone.replace(/-/g, "")))
            return "올바른 휴대전화 번호를 입력해주세요.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
            return "올바른 이메일을 입력해주세요.";
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
        const region =
            form.sido && form.sigungu
                ? `${form.sido} ${form.sigungu}`
                : form.sido || "-";

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
                setResult({
                    type: "error",
                    msg: data.error || "발송에 실패했습니다. 다시 시도해주세요.",
                });
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
                        <span className="logo-samsung">드림앤조이</span>{" "}
                        <span className="logo-njob">N잡크루</span>
                    </div>
                    <button className="apply-modal-close" onClick={onClose}>
                        &times;
                    </button>
                </div>

                <div className="apply-modal-body">
                    <div className="apply-modal-title">
                        <p className="modal-title-accent">1분이면 신청!</p>
                        <p className="modal-title-sub"><em>꼭 필요한 정보</em>만 받고 있어요</p>
                    </div>

                    <form onSubmit={handleSubmit} className="apply-form">
                        {/* 이름 */}
                        <div className="form-group">
                            <label className="form-label">
                                이름<span className="required">*</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                className="form-input"
                                placeholder="예) 홍길동"
                                value={form.name}
                                onChange={handleChange}
                            />
                        </div>

                        {/* 생년월일 */}
                        <div className="form-group">
                            <label className="form-label">
                                생년월일<span className="required">*</span>
                            </label>
                            <div className="form-row birth-row">
                                <input
                                    type="number"
                                    name="birthYear"
                                    className="form-input"
                                    placeholder="년도"
                                    value={form.birthYear}
                                    onChange={handleChange}
                                    min="1900"
                                    max="2010"
                                />
                                <input
                                    type="number"
                                    name="birthMonth"
                                    className="form-input"
                                    placeholder="월"
                                    value={form.birthMonth}
                                    onChange={handleChange}
                                    min="1"
                                    max="12"
                                />
                                <input
                                    type="number"
                                    name="birthDay"
                                    className="form-input"
                                    placeholder="일"
                                    value={form.birthDay}
                                    onChange={handleChange}
                                    min="1"
                                    max="31"
                                />
                            </div>
                        </div>

                        {/* 휴대전화 */}
                        <div className="form-group">
                            <label className="form-label">
                                휴대전화<span className="required">*</span>
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                className="form-input"
                                placeholder="휴대전화"
                                value={form.phone}
                                onChange={handleChange}
                            />
                        </div>

                        {/* 이메일 */}
                        <div className="form-group">
                            <label className="form-label">
                                이메일<span className="required">*</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                className="form-input"
                                placeholder="이메일"
                                value={form.email}
                                onChange={handleChange}
                            />
                        </div>

                        {/* 지역 */}
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

                        {/* 직업 */}
                        <div className="form-group">
                            <label className="form-label">직업</label>
                            <CustomSelect
                                value={form.job}
                                onChange={(v) => setForm((p) => ({ ...p, job: v }))}
                                options={jobOptions.map((j) => ({ value: j, label: j }))}
                                placeholder="직업을 선택해 주세요."
                            />
                        </div>

                        {/* 추천인정보 */}
                        <div className="form-group">
                            <label className="form-label">추천인정보 <span className="label-hint">(닉네임, 이름, 검색, 블로그, 인스타 등)</span></label>
                            <input
                                type="text"
                                name="referralCode"
                                className="form-input"
                                placeholder="추천인정보"
                                value={form.referralCode}
                                onChange={handleChange}
                            />
                        </div>

                        {/* 설계사 경력 유무 */}
                        <div className="form-group">
                            <label className="form-label">
                                설계사 경력 유무<span className="required">*</span>
                            </label>
                            <div className="form-row exp-row">
                                <button
                                    type="button"
                                    className={`exp-btn ${form.experience === "있음" ? "active" : ""}`}
                                    onClick={() => setForm((p) => ({ ...p, experience: "있음" }))}
                                >
                                    있음
                                </button>
                                <button
                                    type="button"
                                    className={`exp-btn ${form.experience === "없음" ? "active" : ""}`}
                                    onClick={() => setForm((p) => ({ ...p, experience: "없음" }))}
                                >
                                    없음
                                </button>
                            </div>
                        </div>

                        {/* 결과 메시지 */}
                        {result && (
                            <div className={`form-result ${result.type}`}>
                                {result.msg}
                            </div>
                        )}

                        {/* 제출 */}
                        <button
                            type="submit"
                            className="apply-submit-btn"
                            disabled={sending}
                        >
                            {sending ? "신청 중..." : "신청하기"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

// 메인 컴포넌트
const NJob = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <div id="top" className="njob-page">
            <NJobNav />
            <IncomeSection onApply={openModal} />
            <IntroSection />
            <BenefitSection />
            <HeroSection onApply={openModal} />
            <StepSection />
            <FAQSection />
            <FloatingButtons onApply={openModal} />
            <ApplyModal isOpen={modalOpen} onClose={closeModal} />
        </div>
    );
};

export default NJob;
