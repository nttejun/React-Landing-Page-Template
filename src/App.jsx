import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom"; // ★ v5 문법
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import { BizContact } from "./components/bizcontact";
import { CorpConsultForm } from "./components/corpconsult"; // ★ 폼 임포트
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
    <Header data={landingPageData.Header} />
    <Features data={landingPageData.Features} />
    <About data={landingPageData.About} />
    <Services data={landingPageData.Services} />
    <Gallery data={landingPageData.Gallery} />
    <Testimonials data={landingPageData.Testimonials} />
    <Team data={landingPageData.Team} />
    <Contact data={landingPageData.Contact} />
    <BizContact data={landingPageData.BizContact} />
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
