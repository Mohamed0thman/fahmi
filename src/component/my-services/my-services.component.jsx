import React from "react";

import Tools from "../tools/tools.component";
import ProjectSection from "../project-section/project-section.component";
import Reviews from "../reviews/reviews.component";

import "./my-services.styless.scss";

const MyService = ({ services }) => {
  return (
    <div className="my-services" ref={services}>
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

      <Tools />
      <ProjectSection />
      <Reviews />
    </div>
  );
};

export default MyService;
