// App.jsx
import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom"; // v5
import { Navigation } from "./components/navigation";
import { CorpConsultForm } from "./components/corpconsult";
import HeaderMainSlide from "./sections/HeaderMainSlide";
import ConsultTopCTA from "./components/ConsultTopCTA";
import BusinessConsulting from "./sections/BusinessConsulting";
import SolutionDetail from "./pages/SolutionDetail";
import NJob from "./pages/NJob";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import Footer from "./components/Footer";
import ServicesCards from "./sections/ServicesCards";
import ConsultingFixedButton from "./components/ConsultingFixedButton";

export const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true,
});

const Home = ({ landingPageData }) => (
    <div>
        <BusinessConsulting />
        <Navigation />
        <HeaderMainSlide />
        <ServicesCards />
        <ConsultTopCTA />
        <Footer />
        <ConsultingFixedButton />
    </div>
);

const App = () => {
    const [landingPageData, setLandingPageData] = useState({});
    useEffect(() => {
        setLandingPageData(JsonData);
    }, []);

    return (
        <Switch>
            {/* 홈 */}
            <Route exact path="/" render={() => <Home landingPageData={landingPageData} />} />

            {/* 솔루션 상세(더 구체적인 경로를 먼저) */}
            <Route exact path="/solutions/:key/:slug" component={SolutionDetail} />
            <Route exact path="/solutions/:key" component={SolutionDetail} />

            {/* N잡 랜딩페이지 */}
            <Route exact path="/n-job" component={NJob} />

            {/* 상담 폼 */}
            <Route path="/consult" component={CorpConsultForm} />

            {/* 마지막: 기타 경로는 홈으로 */}
            <Route render={() => <Home landingPageData={landingPageData} />} />
        </Switch>
    );
};

export default App;
