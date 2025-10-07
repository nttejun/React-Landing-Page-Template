import React from "react";
import MainSlide from "../components/MainSlide";
import mainSlides from "../content/mainSlides";

const HeaderMainSlide = () => {
    return <MainSlide slides={mainSlides} intervalMs={3000} pauseOnHover />;
};

export default HeaderMainSlide;
