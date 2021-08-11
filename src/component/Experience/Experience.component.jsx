import React, { useRef } from "react";
import { useIntersection } from "react-use";
import gsap from "gsap";

import "./Experience.styless.scss";

const Experience = () => {
  const myExperience = useRef(null);

  const experiences = [
    {
      date: "2020 - 2021",
      name: "Limbic Labs",
      work: "UI/UX Designer",
      place: "London, England",
    },
    {
      date: "2019 - 2020 ",
      name: "NAFFA",
      work: "UI/UX Designer",
      place: "Amman, Jordan",
    },
    {
      date: "2018 - 2019",
      name: "UPWORK",
      work: "UI/UX Designer",
    },
    {
      date: "2018 - 2019",
      name: "ZAKKI",
      work: "UI/UX Designer",
      as: "volunteer",
      place: "Indonesia",
    },
  ];

  const intersection = useIntersection(myExperience, {
    root: null,
    rootMargin: "0px",
    threshold: 0.7,
  });

  const moveRight = (ele) => {
    gsap.to(ele, 1, {
      opacity: 1,
      x: 60,
      ease: "power4.out",
      stagger: {
        amount: 0.3,
      },
    });
  };

  const moveLeft = (ele) => {
    gsap.to(ele, 1, {
      opacity: 1,
      x: -60,
      ease: "power4.out",
      stagger: {
        amount: 0.3,
      },
    });
  };

  const moveRightOut = (ele) => {
    gsap.to(ele, 1, {
      opacity: 0,
      x: -60,
      ease: "power4.out",
    });
  };

  const moveLeftOut = (ele) => {
    gsap.to(ele, 1, {
      opacity: 0,
      x: 60,
      ease: "power4.out",
    });
  };

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

  if (intersection && intersection.intersectionRatio > 0.7) {
    moveRight(".work-experience__item.left");
    moveLeft(".work-experience__item.right");
    headingFeadIn(".work-experience__heading");
  } else {
    moveRightOut(".work-experience__item.left");
    moveLeftOut(".work-experience__item.right");
    headingFeadOut(".work-experience__heading");
  }
  const addClass = (v) => {
    if (v % 2 === 0) {
      return "right";
    }
    return "left";
  };

  console.log(addClass(6));
  return (
    <div className="work-experience" ref={myExperience}>
      <h3 className="work-experience__heading">Work Experience</h3>

      <div className="work-experience__content">
        {experiences.map((Experience, i) => {
          return (
            <div className={`work-experience__item ${addClass(i + 1)}`} key={i}>
              <div className="work-experience__item--date">
                {Experience.date}
              </div>
              <div>
                <div className="work-experience__item--name">
                  {Experience.name}
                </div>
                <div className="work-experience__item--work">
                  {Experience.work}
                </div>
                <div className="work-experience__item--as">{Experience.as}</div>
                <div className="work-experience__item--place">
                  {Experience.place}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Experience;
