import React from "react";

import HomeSection from "../../component/home-Section/home-Section.component";
import AboutMe from "../../component/about-me/about-me.component";
import MyService from "../../component/my-services/my-services.component";

import "./home-page.styless.scss";

const HomePage = ({ scrollTo, home, aboutMe, services }) => {
  return (
    <div className="home-page">
      <HomeSection home={home} />
      <AboutMe scrollTo={scrollTo} aboutMe={aboutMe} />
      <MyService scrollTo={scrollTo} services={services} />
    </div>
  );
};
export default HomePage;
