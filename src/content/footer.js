// 회사/사업자 정보 한 곳에서 관리
const companyInfo = {
    nameKo: "라이징브로커즈 주식회사",
    nameEn: "라이징브로커즈 주식회사",
    ceo: "김준수",
    businessNo: "352-81-03886",               // 사업자등록번호
    tel: "02-1234-5678",
    fax: "02-9876-5432",
    //email: "info@dreamandjoy.co.kr",
    address: "서울특별시 금천구 디지털로10길 37, 2014",
    openHours: "평일 09:00 ~ 18:00 (주말/공휴일 휴무)",
    privacyOfficer: "김보호 (privacy@dreamandjoy.co.kr)",

    // 선택: 통장/계좌, 카카오채널 등
    bank: { bankName: "우리은행", account: "1002-123-456789", holder: "드림앤조이" },

    // 퀵 링크(선택)
    links: [
        { label: "회사소개", href: "#about" },
        { label: "서비스", href: "#services" },
        { label: "포트폴리오", href: "#portfolio" },
        { label: "문의하기", href: "#contact" },
        { label: "법인 상담", href: "/consult" },
    ],

    // 소셜(아이콘은 Font Awesome)
    socials: [
        { icon: "fa fa-facebook", href: "https://facebook.com" },
        { icon: "fa fa-instagram", href: "https://instagram.com" },
        { icon: "fa fa-youtube-play", href: "https://youtube.com" },
        { icon: "fa fa-commenting", href: "https://pf.kakao.com" }, // 카카오 채널 등
    ],

    // 저작권 표기
    copyright:
        "© " + new Date().getFullYear() + " 라이징브로커즈 주식회사. All rights reserved.",
};

export default companyInfo;
