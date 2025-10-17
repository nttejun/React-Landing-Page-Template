// src/pages/SolutionDetail.jsx
import React, { useEffect, Suspense, lazy } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import categories, { PER_PAGE, titleMap } from "../content/registry";
import "./SolutionDetail.css";

/* URLSearchParams 훅 */
const useQuery = () => new URLSearchParams(useLocation().search);

/* Hero */
const Hero = ({ title, subtitle }) => (
    <section className="sol-hero">
        <div className="container">
            {subtitle ? <p className="sol-eyebrow">{subtitle}</p> : <div style={{ height: 8 }} />}
            <h1 className="sol-title">{title}</h1>
            <div className="sol-breadcrumb">
                <Link to="/">홈</Link> <span>›</span>{" "}
                <a href="/#solution-bands">솔루션</a> <span>›</span>{" "}
                <strong>{title}</strong>
            </div>
        </div>
    </section>
);

/* 목록 (4개/페이지) */
const ListView = ({ categoryKey }) => {
    const query = useQuery();
    const page = Math.max(1, parseInt(query.get("page") || "1", 10));
    const list = categories[categoryKey] || [];
    const total = list.length;
    const pages = Math.max(1, Math.ceil(total / PER_PAGE));
    const start = (page - 1) * PER_PAGE;
    const pageItems = list.slice(start, start + PER_PAGE);

    return (
        <section className="sol-list container sol-container" aria-label="카테고리 글 목록">
            <div className="sol-list-header">
                <h2 className="sol-list-title">카테고리 글 목록</h2>
                <p className="sol-list-count">총 {total}건</p>
            </div>

            <div className="sol-list-grid">
                {pageItems.map((item) => (
                    <article key={item.slug} className="sol-card" itemScope itemType="https://schema.org/Article">
                        <header className="sol-card-header">
                            <h3 className="sol-card-title" itemProp="headline">
                                <Link to={`/solutions/${categoryKey}/${item.slug}`}>{item.title}</Link>
                            </h3>
                            <time className="sol-card-date" itemProp="datePublished" dateTime={item.date}>
                                {item.date}
                            </time>
                        </header>
                        <p className="sol-card-excerpt" itemProp="description">{item.excerpt}</p>
                        <div className="sol-card-cta">
                            <Link className="btn btn-custom" to={`/solutions/${categoryKey}/${item.slug}`}>자세히 보기</Link>
                        </div>
                    </article>
                ))}
            </div>

            {pages > 1 && (
                <nav className="sol-pager" aria-label="목록 페이지네이션">
                    <ul>
                        <li>
                            <Link
                                to={`/solutions/${categoryKey}?view=list&page=${Math.max(1, page - 1)}`}
                                aria-disabled={page === 1}
                                className={page === 1 ? "disabled" : ""}
                            >
                                ‹ 이전
                            </Link>
                        </li>
                        {Array.from({ length: pages }).map((_, i) => {
                            const p = i + 1;
                            return (
                                <li key={p}>
                                    <Link
                                        to={`/solutions/${categoryKey}?view=list&page=${p}`}
                                        className={p === page ? "active" : ""}
                                        aria-current={p === page ? "page" : undefined}
                                    >
                                        {p}
                                    </Link>
                                </li>
                            );
                        })}
                        <li>
                            <Link
                                to={`/solutions/${categoryKey}?view=list&page=${Math.min(pages, page + 1)}`}
                                aria-disabled={page === pages}
                                className={page === pages ? "disabled" : ""}
                            >
                                다음 ›
                            </Link>
                        </li>
                    </ul>
                </nav>
            )}
        </section>
    );
};

/* 상세 (slug) — lazy load */
const DetailView = ({ categoryKey, slug }) => {
    const list = categories[categoryKey] || [];
    const item = list.find((a) => a.slug === slug) || list[0];

    if (!item) {
        return (
            <section className="container sol-container">
                <div className="article-card">
                    <div className="article-header">
                        <h2 className="article-title">준비중입니다</h2>
                    </div>
                    <div className="article-body">
                        <p>해당 카테고리의 상세 콘텐츠가 곧 업데이트 됩니다.</p>
                        <Link to={`/solutions/${categoryKey}?view=list`} className="btn btn-custom">목록 보기</Link>
                    </div>
                </div>
            </section>
        );
    }

    // 동적 import -> lazy 컴포넌트 생성
    const Comp = lazy(item.loader);

    return (
        <section className="container sol-container">
            <div className="sol-detail-toolbar">
                <Link to={`/solutions/${categoryKey}?view=list`} className="sol-list-link">← 목록보기</Link>
            </div>
            <Suspense
                fallback={
                    <section className="article-card">
                        <div className="article-header"><h2 className="article-title">로딩중…</h2></div>
                        <div className="article-body"><p>콘텐츠를 불러오는 중입니다.</p></div>
                    </section>
                }
            >
                <Comp />
            </Suspense>
        </section>
    );
};

/* 컨테이너 */
const SolutionDetail = () => {
    const { key, slug } = useParams(); // /solutions/:key/:slug?
    const query = useQuery();
    const view = query.get("view"); // "list"면 목록

    useEffect(() => { window.scrollTo(0, 0); }, [key, view, slug]);

    const hero = titleMap[key] || { title: "솔루션", subtitle: "" };

    return (
        <main>
            <Hero title={hero.title} subtitle={hero.subtitle} />

            {/* 상단 토글 */}
            <div className="container sol-container sol-toggle">
                <Link to={`/solutions/${key}`} className={!view ? "toggle-item active" : "toggle-item"}>
                    상세보기
                </Link>
                <Link to={`/solutions/${key}?view=list`} className={view === "list" ? "toggle-item active" : "toggle-item"}>
                    목록보기
                </Link>
            </div>

            {/* 뷰 전환 */}
            {view === "list"
                ? <ListView categoryKey={key} />
                : <DetailView categoryKey={key} slug={slug} />}
        </main>
    );
};

export default SolutionDetail;
