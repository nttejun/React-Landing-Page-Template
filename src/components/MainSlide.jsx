import React, { useEffect, useRef, useState } from "react";
import "./MainSlide.css";

const MainSlide = ({ slides = [], intervalMs = 3000, pauseOnHover = true }) => {
    const [index, setIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    const total = slides.length;
    const timerRef = useRef(null);

    const go = (dir) => {
        if (animating) return; // 전환 중 중복 방지
        setAnimating(true);
        setTimeout(() => {
            setIndex((prev) => (dir === "next" ? (prev + 1) % total : (prev - 1 + total) % total));
            setAnimating(false);
        }, 600); // transition 시간과 일치
    };

    const start = () => {
        if (timerRef.current || total <= 1) return;
        timerRef.current = setInterval(() => go("next"), intervalMs);
    };
    const stop = () => {
        if (!timerRef.current) return;
        clearInterval(timerRef.current);
        timerRef.current = null;
    };

    useEffect(() => {
        if (total > 1) {
            timerRef.current = setInterval(() => {
                setIndex((prev) => (prev + 1) % total);
            }, intervalMs);
        }
        return () => clearInterval(timerRef.current);
    }, [total, intervalMs]);

    const hoverProps = pauseOnHover ? { onMouseEnter: stop, onMouseLeave: start } : {};

    return (
        <header id="header" {...hoverProps}>
            <div className="intro main-slide slide-mode">
                <div
                    className="slide-track"
                    style={{
                        transform: `translateX(-${index * 100}%)`,
                    }}
                >
                    {slides.map((s, i) => (
                        <div
                            key={i}
                            className="slide-page"
                            style={{ backgroundImage: `url(${s.bg})` }}
                        >
                            <div className="overlay">
                                <div className="intro-center">
                                    <div className="intro-text">
                                        <h1 className="main-title">{s.title}</h1>
                                        {s.items && (
                                            <ul className="main-list">
                                                {s.items.map((t, j) => <li key={j}>{t}</li>)}
                                            </ul>
                                        )}
                                        {s.cta && (
                                            <a href={s.cta.href} className="btn btn-custom btn-lg page-scroll">
                                                {s.cta.label}
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ✅ 컨트롤 */}
                <div className="main-controls">
                    <button className="main-arrow left" onClick={() => go("prev")} aria-label="previous">‹</button>
                    <div className="main-dots">
                        {slides.map((_, i) => (
                            <button
                                key={i}
                                className={`main-dot ${i === index ? "active" : ""}`}
                                onClick={() => setIndex(i)}
                            />
                        ))}
                    </div>
                    <button className="main-arrow right" onClick={() => go("next")} aria-label="next">›</button>
                </div>

                {/* ✅ 페이저 */}
                <div className="main-pager">
                    {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                </div>
            </div>
        </header>
    );
};

export default MainSlide;
