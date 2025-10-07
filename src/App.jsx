import React, {useEffect, useState} from "react";
import {Route, Switch} from "react-router-dom"; // ★ v5 문법
import {Navigation} from "./components/navigation";
import {CorpConsultForm} from "./components/corpconsult"; // ★ 폼 임포트
import HeaderMainSlide from "./sections/HeaderMainSlide"; // ★ 메인 슬라이드 섹션
import ConsultTopCTA from "./components/ConsultTopCTA"; // ✅ 추가
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

// 기존 랜딩 묶음
const Home = ({ landingPageData }) => (
  <div>
    <Navigation />
    <ConsultTopCTA />
    <HeaderMainSlide />
{/*
    <Header data={landingPageData.Header} />
    <Features data={landingPageData.Features} />
    <About data={landingPageData.About} />
    <Services data={landingPageData.Services} />
    <Gallery data={landingPageData.Gallery} />
    <Testimonials data={landingPageData.Testimonials} />
    <Team data={landingPageData.Team} />
    <Contact data={landingPageData.Contact} />
*/}
  </div>
);

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <Switch>
      <Route exact path="/" render={() => <Home landingPageData={landingPageData} />} />
      <Route path="/consult" component={CorpConsultForm} /> {/* ★ /consult 라우트 */}
      <Route render={() => <Home landingPageData={landingPageData} />} />
    </Switch>
  );
};

export default App;
