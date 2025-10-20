// 섹션 A: 카드형 컨설팅 묶음
export const consultingServices = [
    {
        icon: "fa fa-lightbulb-o",
        title: "재무지원 전략",
        desc: "법인과 대표이사 재무·세무 리스크 최소화, 합법적인 절세 자산 이전 서비스 제공",
    },
    {
        icon: "fa fa-krw",
        title: "자금운용 컨설팅",
        desc: "정책자금 활용부터 법인 자금 운용까지 컨설팅 서비스 제공",
    },
    {
        icon: "fa fa-shield",
        title: "보험 리스크 컨설팅",
        desc: "퇴직연금, 임원·대표이사 보험 등 법인 활용 보험의 세무·회계 처리와 리스크 대비",
    },
    {
        icon: "fa fa-line-chart",
        title: "인사 컨설팅",
        desc: "4대보험 절감, 복리후생비 처리, 스톡옵션 등 인사·노무 절세 전략 제공",
    },
];

// 섹션 B: 가로 타일(배경 + CTA)
export const solutionBands = [
    {
        key: "startup",
        title: "재무 세무",
        subtitle: "세무 리스크와 절세 전략",
        bg: "img/tiles/tile-startup.jpg",   // 없으면 공통 배경 사용
        cta: { href: "/consult?topic=startup", label: "자세히보기" },
    },
    {
        key: "policy",
        title: "자금운용",
        subtitle: "정책자금·대출·운용 전략",
        bg: "img/tiles/tile-policy.jpg",
        cta: { href: "/consult?topic=policy", label: "자세히보기" },
    },
    {
        key: "cert",
        title: "보험 리스크",
        subtitle: "퇴직연금·임원 보험 세무 처리",
        bg: "img/tiles/tile-cert.jpg",
        cta: { href: "/consult?topic=cert", label: "자세히보기" },
    },
    {
        key: "bp",
        title: "인사",
        subtitle: "4대보험 절감·스톡옵션 설계",
        bg: "img/tiles/tile-bp.jpg",
        cta: { href: "/consult?topic=bp", label: "자세히보기" },
    },
];

// 공통 배경 폴백(이미지 준비 전)
export const fallbackTileBg = "img/intro-bg.jpg";
