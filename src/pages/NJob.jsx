import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NJob.css";

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
const HeroSection = () => {
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
                    <Link to="/consult" className="hero-cta-btn">
                        N잡크루 지원하기 <span className="arrow">→</span>
                    </Link>
                </div>
            </div>
            <p className="hero-disclaimer">*수익은 개인의 활동에 따라 달라질 수 있으며, 해당 금액은 예시입니다.</p>
        </section>
    );
};

// 섹션 1.5: 수익 소개 (기존 히어로 콘텐츠)
const IncomeSection = () => (
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
                <Link to="/consult" className="income-cta-btn">
                    N잡크루 지원하기 <span className="arrow">→</span>
                </Link>
            </div>
            <div className="income-visual">
                <div className="phone-mockup">
                    <div className="phone-screen">
                        <div className="phone-header">드림앤조이N잡크루</div>
                        <div className="phone-amount">1,500,000원</div>
                        <div className="phone-history">
                            <div className="history-item">
                                <span className="date">12.20</span>
                                <span className="desc">드림앤조이N잡크루 12월 입금</span>
                                <span className="amount">1,500,000원</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <p className="income-disclaimer">*수익은 개인의 활동에 따라 달라질 수 있으며, 해당 금액은 예시입니다.</p>
    </section>
);

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
const FloatingButtons = () => (
    <div className="floating-buttons">
        <Link to="/consult" className="float-btn apply-btn">
            N잡크루<br />지원하기
        </Link>
        <a href="#top" className="float-btn scroll-btn">
            맨 위로<br />올라가기
        </a>
    </div>
);

// 메인 컴포넌트
const NJob = () => {
    return (
        <div id="top" className="njob-page">
            <NJobNav />
            <IncomeSection />
            <HeroSection />
            <ConcernSection />
            <IntroSection />
            <DifferenceSection />
            <BenefitSection />
            <StepSection />
            <FAQSection />
            <FloatingButtons />
        </div>
    );
};

export default NJob;
