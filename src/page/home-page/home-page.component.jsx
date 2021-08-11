import React from "react";

import HomeSection from "../../component/home-Section/home-Section.component";
import AboutMe from "../../component/about-me/about-me.component";
import Experience from "../../component/Experience/Experience.component";
import MyService from "../../component/my-services/my-services.component";
import Tools from "../../component/tools/tools.component";
import ProjectSection from "../../component/project-section/project-section.component";
import Reviews from "../../component/reviews/reviews.component";

import "./home-page.styless.scss";

const HomePage = ({ home, aboutMe, services }) => {
  return (
    <div className="home-page">
      <section className="home-section" home={home}>
        <HomeSection home={home} />
      </section>

      <section
        className="about-section"
        ref={aboutMe}
        style={{ height: "100%" }}
      >
        <AboutMe />
        <Experience />
      </section>
      <section className="myservice-section" ref={services}>
        <MyService />
        <Tools />
        <ProjectSection />
        <Reviews />
      </section>
    </div>
  );
};
export default HomePage;
