import React, { useRef } from "react";
import { useIntersection } from "react-use";
import gsap from "gsap";

import "./about-me.styless.scss";

const AboutMe = () => {
  const aboutMe = useRef(null);

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

  const intersection = useIntersection(aboutMe, {
    root: null,
    rootMargin: "0px",
    threshold: 0.7,
  });

  const headingFeadIn = (ele) => {
    gsap.to(ele, 1, {
      opacity: 1,
      y: 0,
      ease: "power4.out",
      stagger: {
        amount: 0.3,
      },
    });
  };

  const headingFeadOut = (ele) => {
    gsap.to(ele, 1, {
      opacity: 0,
      y: -60,
      ease: "power4.out",
    });
  };

  const fadeIn = (ele) => {
    gsap.to(ele, 1, {
      opacity: 1,
      y: -60,
      ease: "power4.out",
      stagger: {
        amount: 0.3,
      },
    });
  };

  const fadeOut = (ele) => {
    gsap.to(ele, 1, {
      opacity: 0,
      y: -20,
      ease: "power4.out",
    });
  };

  if (intersection && intersection.intersectionRatio > 0.7) {
    fadeIn(".about-me");
    headingFeadIn(".about-me__heading");
  } else {
    fadeOut(".about-me");
    headingFeadOut(".about-me__heading");
  }

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
    </div>
  );
};

export default AboutMe;
