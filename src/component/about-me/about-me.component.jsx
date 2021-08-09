import React from "react";

import Experience from "../Experience/Experience.component";

import "./about-me.styless.scss";

const AboutMe = ({ aboutMe }) => {
  const skills = [
    "UX DESIGN",
    "UI DESIGN",
    "Information Architecture",
    "Interviews",
    "A/B Testing",
    "USER RESEARCH",
    "SKITCHING",
    "SURVEYS",
    "DESIGN SYSTEM",
  ];

  return (
    <div className="about-me" ref={aboutMe}>
      <h3 className="about-me__heading">About Me</h3>

      <div className="about-me__content">
        <p className="about-me__text">
          I'm a UI/UX Designer, Interaction Designer, and Product Designer. My
          focus is understanding and translating business objectives into
          stunning user-friendly designs. My usual workflow for new products
          involves learning business/client needs, conducting competitive
          research, creating user personas, wireframing, usability testing,
          prototyping, hi-fi UI, test again, and iterate to improve the
          experience based on the findings. All of my processes are scalable and
          steps can be removed or added to fit the client's and timelines.
        </p>

        <ul className="about-me__list">
          {skills.map((skill, i) => {
            return (
              <li key={i} className="about-me__item">
                {skill}
              </li>
            );
          })}
        </ul>
      </div>

      <hr className="about-me__line" />

      <Experience />
    </div>
  );
};

export default AboutMe;
