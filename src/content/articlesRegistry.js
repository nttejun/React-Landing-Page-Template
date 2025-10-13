// src/content/articlesRegistry.js
import React from "react";

// === 기사 컴포넌트들 임포트 ===
// 이미 만들었던 컴포넌트 이름들은 PascalCase로 사용해주세요!
import ArticleFinanceTax from "../pages/articles/ArticleFinanceTax";           // startup-가지급금
import ArticleFundOps from "../pages/articles/ArticleFundOps";                 // policy-자금운용
import ArticleInsuranceRisk from "../pages/articles/ArticleInsuranceRisk";     // cert-보험리스크
import ArticleHR from "../pages/articles/ArticleHR";                           // bp-4대보험

// ───────────────────────────────────────────
// 카테고리 키: startup | policy | cert | bp
// ───────────────────────────────────────────

// 카테고리별 게시글 메타데이터 (목록/페이징용)
export const articlesByCategory = {
    startup: [
        {
            slug: "ceo-deposit-must-fix",
            title: "대표이사 가지급금, 왜 반드시 정리해야 할까?",
            date: "2025-10-11",
            excerpt: "가지급금은 세금·신용·상속 리스크로 이어집니다. 합법적·전략적으로 정리해야 하는 이유와 3단계 해소법.",
            component: "ArticleFinanceTax",
        },
        // (예시) 같은 카테고리 다른 글을 추가하고 싶다면 아래처럼 추가
        // { slug: "startup-tax-checklist", title: "...", date: "2025-09-10", excerpt: "...", component: "ArticleFinanceTax2" }
    ],
    policy: [
        {
            slug: "corp-fund-allocation",
            title: "법인자금 운용, 예금만으론 부족하다 — 안전자산 vs 투자자산",
            date: "2025-10-12",
            excerpt: "운영/비상/투자자금 3분할 원칙으로 유동성과 수익성을 동시에. 채권·ETF·보험형 운용의 구조 설계.",
            component: "ArticleFundOps",
        },
    ],
    cert: [
        {
            slug: "insurance-for-employees",
            title: "직원이 있다면 보험이 필요합니다 — 리스크 관리의 첫걸음",
            date: "2025-10-11",
            excerpt: "산재·민사책임·분쟁 리스크에 대비하는 근재·배상·단체보험 포트폴리오, 4대보험과 함께 설계하기.",
            component: "ArticleInsuranceRisk",
        },
    ],
    bp: [
        {
            slug: "lower-4majors-legally",
            title: "4대보험 부담 줄이는 합법적 방법 — 인건비 절세 전략",
            date: "2025-10-11",
            excerpt: "비과세 구조, 상여 비정기화, 단시간 근로·정부지원 활용으로 합법 절감. 탈법이 아닌 구조 설계가 핵심.",
            component: "ArticleHR",
        },
    ],
};

// 슬러그 → 실제 컴포넌트 매핑 레지스트리
export const articleComponentRegistry = {
    ArticleFinanceTax,        // startup
    ArticleFundOps,           // policy
    ArticleInsuranceRisk,     // cert
    ArticleHR,                // bp
};

// 카테고리 타이틀
export const titleMap = {
    startup: { title: "재무 / 세무", subtitle: "" },
    policy:  { title: "자금조달 / 운용", subtitle: "" },
    cert:    { title: "보험 / 리스크", subtitle: "" },
    bp:      { title: "인사", subtitle: "" },
};
