import React, { useState, useEffect, useCallback } from "react";
import "./NJob.css";

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
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="nav-icon">
                    <i className="fa fa-instagram"></i>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="nav-icon">
                    <i className="fa fa-youtube-play"></i>
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
const ConcernSection = () => {
    const concerns = [
        {
            title: "퇴근 후에도 부담 없는",
            highlight: "내 체력과 스케줄에 맞춰\n할 수 있는 N잡이 필요해요",
            suffix: "일정, 체력 걱정 No!",
            emoji: "📅"
        },
        {
            title: "하루 종일 육아로 바쁜데...",
            highlight: "내 집에서도 할 수 있는\n편안한 N잡, 어디 없을까요?",
            suffix: "언제, 어디서든 가능해요!",
            emoji: "💻"
        },
        {
            title: "스펙도, 지갑도 채우고 싶어!",
            highlight: "학업과 병행하면서 경험도\n쌓을 수 있는 N잡이 필요해요",
            suffix: "시간 제약도 없어요!",
            emoji: "🎓"
        },
        {
            title: "사회 초년생의 적은 월급",
            highlight: "수익에 보탬이 되는\n쉬운 N잡을 찾고 있어요",
            suffix: "높은 수익도 가능!",
            emoji: "💵"
        }
    ];

    return (
        <section className="njob-concern-section">
            <div className="section-container">
                <h2 className="section-title">혹시 이런 고민, 갖고 계세요? 🤔</h2>
                <div className="concern-cards">
                    {concerns.map((item, idx) => (
                        <div className="concern-card" key={idx}>
                            <div className="concern-text">
                                <p className="concern-title">{item.title}</p>
                                <p className="concern-highlight">{item.highlight}</p>
                                <p className="concern-suffix">{item.suffix}</p>
                            </div>
                            <div className="concern-emoji">{item.emoji}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// 섹션 3: 소개
const IntroSection = () => (
    <section className="njob-intro-section">
        <div className="section-container">
            <p className="intro-pretitle">고민을 기회로 바꾸는 해답!</p>
            <h2 className="intro-title">시간과 장소의 제약 없는, 쉽고 편안한 N잡을 소개합니다 🙋</h2>

            <div className="intro-logo">
                <span className="logo-samsung-big">드림앤조이</span>
                <span className="logo-njob-big">N잡크루</span>
            </div>

            <p className="intro-desc">
                드림앤조이 N잡크루는 시간과 장소에 구애받지 않고,<br />
                자유롭게 활동하며 수익을 창출하는 <span className="highlight">'N잡러 보험 설계사'</span> 입니다.
            </p>

            <div className="intro-visual">
                <div className="visual-icon icon-train">🚄</div>
                <div className="visual-icon icon-money">💸</div>
                <div className="visual-character">👨‍💼</div>
                <div className="visual-icon icon-clock">⏳</div>
                <div className="visual-icon icon-house">🏠</div>
            </div>
        </div>
    </section>
);

// 섹션 4: 차별점
const DifferenceSection = () => {
    const differences = [
        {
            emoji: "🏠",
            lines: ["출퇴근 없이,", "내가 가능한 시간에", "원하는 만큼 자유롭게 일해요!"]
        },
        {
            emoji: "😫",
            lines: ["최소 실적 조건이 없어요!", "실적 압박 없이", "마음 편하게 활동해요"]
        },
        {
            emoji: "🐷",
            lines: ["본업이 있어도", "도전할 수 있어요!", "일하는 만큼 부수입을 만들어요"]
        }
    ];

    return (
        <section className="njob-difference-section">
            <div className="section-container">
                <p className="difference-pretitle">잠깐! 보험 설계사?</p>
                <h2 className="difference-title">우리가 알고있는 설계사와는 이런 것들이 달라요 😮</h2>

                <div className="difference-cards">
                    {differences.map((item, idx) => (
                        <div className="difference-card" key={idx}>
                            <div className="card-emoji">{item.emoji}</div>
                            <div className="card-text">
                                {item.lines.map((line, i) => (
                                    <p key={i}>{line}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// 섹션 5: 지원 혜택
const BenefitSection = () => (
    <section className="njob-benefit-section">
        <div className="section-container">
            <h2 className="benefit-title">여러분은 소중한 N잡크루원! 💙💙</h2>
            <p className="benefit-subtitle">
                부담 없이 시작하고 성공적으로 정착할 수 있도록<br />
                드림앤조이에서 아낌없이 도와드릴게요!
            </p>

            <div className="benefit-items">
                <div className="benefit-item">
                    <div className="benefit-text">
                        <h3>보험 지식이<br />전혀 없어도 괜찮아요</h3>
                        <p>1:1 담당 멘토 배정!</p>
                        <p>교육, 시험, 등록, 활동까지 전 과정을 밀착 지원합니다.</p>
                    </div>
                    <div className="benefit-visual">
                        <span className="benefit-emoji">💬❓</span>
                    </div>
                </div>

                <div className="benefit-item reverse">
                    <div className="benefit-visual">
                        <span className="benefit-emoji">🆓</span>
                    </div>
                    <div className="benefit-text">
                        <h3>초기 비용 0원<br />교육부터 자격시험 응시까지 모두 무료!</h3>
                        <p>교육 수강료, 설계사 자격시험 응시료 전액 지원!</p>
                        <p>초기 비용에 대한 부담없이, 가볍게 시작해보세요.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

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
        <a href="#top" className="float-btn scroll-btn">
            맨 위로<br />올라가기
        </a>
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
            const res = await fetch(process.env.REAL_HOST_URL+`/.netlify/functions/triggerNjobApplyEmail`, {
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
                    <h3 className="apply-modal-title">
                        1분이면 OK!<br />
                        빠른 지원을 위한 필수정보만 받을게요
                    </h3>

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
                                <select
                                    name="sido"
                                    className="form-select"
                                    value={form.sido}
                                    onChange={handleChange}
                                >
                                    <option value="">시/도</option>
                                    {Object.keys(regionData).map((s) => (
                                        <option key={s} value={s}>{s}</option>
                                    ))}
                                </select>
                                <select
                                    name="sigungu"
                                    className="form-select"
                                    value={form.sigungu}
                                    onChange={handleChange}
                                    disabled={!form.sido}
                                >
                                    <option value="">시/군/구</option>
                                    {sigunguList.map((g) => (
                                        <option key={g} value={g}>{g}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* 직업 */}
                        <div className="form-group">
                            <label className="form-label">직업</label>
                            <select
                                name="job"
                                className="form-select"
                                value={form.job}
                                onChange={handleChange}
                            >
                                <option value="">직업을 선택해 주세요.</option>
                                {jobOptions.map((j) => (
                                    <option key={j} value={j}>{j}</option>
                                ))}
                            </select>
                        </div>

                        {/* 추천인코드 */}
                        <div className="form-group">
                            <label className="form-label">추천인코드</label>
                            <input
                                type="text"
                                name="referralCode"
                                className="form-input"
                                placeholder="추천인코드"
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
            <HeroSection onApply={openModal} />
            <ConcernSection />
            <IntroSection />
            <DifferenceSection />
            <BenefitSection />
            <StepSection />
            <FAQSection />
            <FloatingButtons onApply={openModal} />
            <ApplyModal isOpen={modalOpen} onClose={closeModal} />
        </div>
    );
};

export default NJob;
