/**
 * categories: 각 카테고리별 글 메타 + loader
 *  - slug, title, date, excerpt: 목록/SEO용
 *  - loader: React.lazy에 넣을 동적 import 함수
 */
const categories = {
    startup: [
        {
            slug: "ceo-deposit-must-fix",
            title: "대표이사 가지급금, 왜 반드시 정리해야 할까?",
            date: "2025-10-11",
            excerpt:
                "가지급금은 세금·신용·상속 리스크로 이어집니다. 합법적·전략적으로 정리해야 하는 이유와 3단계 해소법.",
            loader: () => import("./startup/ArticleFinanceTax"),
        },
        {
            slug: "ceo-retirement-maximize",
            title: "명목상 퇴직금·퇴직연금 설계로 대표이사 퇴직금 극대화하기",
            date: "2025-10-17",
            excerpt:
                "정관 설계와 보수 조정으로 법인세 절감과 대표 개인 자산이전을 동시에 달성하는 구조.",
            loader: () => import("./startup/ArticleFinanceRetirement"),
        },
        {
            slug: "deposit-capital-recovery",
            title: "가수금·자본잠식 해소 방법 — 중소법인 재무건전성 회복 전략",
            date: "2025-10-18",
            excerpt: "출자전환/감자·증자/배당·급여상계 등으로 가수금과 자본잠식을 해소해 부채비율·신용등급을 개선하는 구조 설계.",
            component: "ArticleFinanceRecovery",
            loader: () => import("./startup/ArticleFinanceRecovery"),
        },
    ],
    policy: [
        {
            slug: "corp-fund-allocation",
            title: "법인자금 운용 — 안전자산 vs 투자자산의 균형",
            date: "2025-10-11",
            excerpt:
                "운영/비상/투자자금 3분할 원칙과 채권·ETF·보험형 운용으로 유동성과 수익성 동시 달성.",
            loader: () => import("./policy/ArticleFundOps"),
        },
        {
            slug: "policy-funds-growth-accelerator",
            title: "정책자금, 중소기업의 성장 촉진제 — 중진공·신보 활용 전략",
            date: "2025-10-18",
            excerpt: "중진공·신보·기보 정책자금으로 저금리·장기 상환을 확보하고 설비·운전 자금을 유연하게 조달하는 실전 가이드.",
            component: "ArticlePolicyFunds",
            loader: () => import("./policy/ArticlePolicyFunds"),
        }
    ],
    cert: [
        {
            slug: "insurance-for-employees",
            title: "직원이 있다면 보험이 필요합니다",
            date: "2025-10-11",
            excerpt:
                "근재·배상·단체보험 포트폴리오와 4대보험을 함께 설계해 리스크를 막고 복지를 강화.",
            loader: () => import("./cert/ArticleInsuranceRisk"),
        },
        {
            slug: "executive-insurance-tax",
            title: "임원 보장성 보험 세법 처리 — 비용 인정과 절세의 경계선",
            date: "2025-10-18",
            excerpt: "계약자·수익자·상품유형에 따라 손금/상여가 갈립니다. 단체형·법인 수익자 구조로 안전지대를 만드세요.",
            component: "ArticleExecutiveInsuranceTax",
            loader: () => import("./cert/ArticleExecutiveInsuranceTax"),
        }
    ],
    bp: [
        {
            slug: "lower-4majors-legally",
            title: "4대보험 부담 줄이는 합법적 방법",
            date: "2025-10-11",
            excerpt:
                "비과세 구조, 상여 비정기화, 근로형태 설계, 정부지원으로 인건비를 합법적으로 절감.",
            loader: () => import("./bp/ArticleHR"),
        },
    ],
};

export const PER_PAGE = 4;

// 타이틀 매핑도 한곳에 보관하면 편합니다
export const titleMap = {
    startup: { title: "재무 세무", subtitle: "" },
    policy: { title: "자금조달 운용", subtitle: "" },
    cert: { title: "보험 리스크", subtitle: "" },
    bp: { title: "인사", subtitle: "" },
};

export default categories;
