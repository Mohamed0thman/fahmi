import React, { useRef } from "react";
import { useIntersection } from "react-use";
import gsap from "gsap";

import "./my-services.styless.scss";

const MyService = () => {
  const Service = useRef(null);

  const intersection = useIntersection(Service, {
    root: null,
    rootMargin: "0px",
    threshold: 0.7,
  });

  const moveRight = (ele) => {
    gsap.to(ele, 1, {
      opacity: 1,
      x: 0,
      ease: "power4.out",
      stagger: {
        amount: 0.3,
      },
    });
  };

  const moveLeft = (ele) => {
    gsap.to(ele, 1, {
      opacity: 1,
      x: 0,
      ease: "power4.out",
      stagger: {
        amount: 0.3,
      },
    });
  };

  const moveRightOut = (ele) => {
    gsap.to(ele, 1, {
      opacity: 0,
      x: -80,
      ease: "power4.out",
    });
  };

  const moveLeftOut = (ele) => {
    gsap.to(ele, 1, {
      opacity: 0,
      x: 80,
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
  const itemFeadIn = (ele) => {
    gsap.to(ele, 1, {
      opacity: 1,
      y: 0,
      ease: "power4.out",
      stagger: {
        amount: 0.3,
      },
    });
  };
  const itemFeadOut = (ele) => {
    gsap.to(ele, 1, {
      opacity: 0,
      y: -60,
      ease: "power4.out",
    });
  };

  if (intersection && intersection.intersectionRatio > 0.7) {
    moveRight(".my-services__content--heading");
    moveLeft(".my-services__gif");
    headingFeadIn(".my-services__heading");
    itemFeadIn(".my-services__item");
  } else {
    moveRightOut(".my-services__content--heading");
    moveLeftOut(".my-services__gif");
    headingFeadOut(".my-services__heading");
    itemFeadOut(".my-services__item");
  }
  return (
    <div className="my-services" ref={Service}>
      <h3 className="my-services__heading">My Services</h3>
      <div className="my-services__content">
        <div className="my-services__left">
          <h2 className="my-services__content--heading">
            How can I make your <br /> business grow?
          </h2>
          <ul className="my-services__list">
            <li className="my-services__item">Innovative website design</li>
            <li className="my-services__item">
              UI/UX design with global trends
            </li>
            <li className="my-services__item">Web and App service</li>
          </ul>
        </div>

        <div className="my-services__gif">
          <img src="/images/webdesign12.gif" alt="" />
        </div>
      </div>

      <img
        className="my-services__rectangle"
        src="/images/Rectangle.svg"
        alt=""
      />
      <img
        className="my-services__ellipse"
        src="/images/Ellipse-Purple.svg"
        alt=""
      />

      <img
        className="my-services__rectangle-brown"
        src="/images/Rectangle-brown.svg"
        alt=""
      />
    </div>
  );
};

export default MyService;
