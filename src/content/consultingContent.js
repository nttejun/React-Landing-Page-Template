// 섹션 A: 카드형 컨설팅 묶음
export const consultingServices = [
    {
        icon: "fa fa-lightbulb-o",
        title: "창업지원 컨설팅",
        desc: "안정적인 창업과 성장을 위한 차별화되고 전문화된 자문 서비스 제공",
    },
    {
        icon: "fa fa-krw",
        title: "자금지원 컨설팅",
        desc: "기술경쟁력과 사업 운영 및 확장을 위한 맞춤형 자금지원 컨설팅 서비스 제공",
    },
    {
        icon: "fa fa-shield",
        title: "인증 컨설팅",
        desc: "벤처기업 인증, ISO 인증, 메인비즈/이노비즈 인증, 기업부설연구소 설립 등",
    },
    {
        icon: "fa fa-line-chart",
        title: "사업계획서 작성",
        desc: "자금심사용, 투자유치용, 회사홍보 등 용도에 맞춰 최적화된 사업계획서를 작성",
    },
];

// 섹션 B: 가로 타일(배경 + CTA)
export const solutionBands = [
    {
        key: "startup",
        title: "창업자금",
        subtitle: "Start-up fund",
        bg: "img/tiles/tile-startup.jpg",   // 없으면 공통 배경 사용
        cta: { href: "/consult?topic=startup", label: "자세히보기" },
    },
    {
        key: "policy",
        title: "정책자금",
        subtitle: "Policy fund",
        bg: "img/tiles/tile-policy.jpg",
        cta: { href: "/consult?topic=policy", label: "자세히보기" },
    },
    {
        key: "cert",
        title: "기업인증",
        subtitle: "Business certification",
        bg: "img/tiles/tile-cert.jpg",
        cta: { href: "/consult?topic=cert", label: "자세히보기" },
    },
    {
        key: "bp",
        title: "사업계획서",
        subtitle: "Business plan",
        bg: "img/tiles/tile-bp.jpg",
        cta: { href: "/consult?topic=bp", label: "자세히보기" },
    },
];

// 공통 배경 폴백(이미지 준비 전)
export const fallbackTileBg = "img/intro-bg.jpg";
