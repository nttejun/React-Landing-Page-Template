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
    startup: { title: "재무 / 세무", subtitle: "" },
    policy: { title: "자금조달 / 운용", subtitle: "" },
    cert: { title: "보험 / 리스크", subtitle: "" },
    bp: { title: "인사", subtitle: "" },
};

export default categories;
