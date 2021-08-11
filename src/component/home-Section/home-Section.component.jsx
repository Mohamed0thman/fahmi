import React from "react";

import CustomButton from "../custom-button/custom-button.component";
import Connections from "../connections/connections.component";
import TextAnimation from "../text-animation/text-animation.component";

import fahmi from "../../images/fahmi.png";

import "./home-Section.styless.scss";

const HomeSection = ({ home }) => {
  return (
    <div className="home" ref={home}>
      <div className="home__left">
        <h1 className="home__heading-one">
          HI THERE,
          <br /> I’M FAHMI ELZORKANY
        </h1>

        <TextAnimation />
        <p className="home__text">
          I believe in the power of design to change the world!
        </p>
        <hr />
        <div className="home__connections">
          <Connections />
        </div>

        <div className="home__btns">
          <CustomButton active>Hire Me</CustomButton>
          <CustomButton>Download CV</CustomButton>
        </div>
      </div>
      <div className="home__right">
        <img src={fahmi} alt="" />
      </div>
      <img
        className="home__half__circle"
        src="/images/half-circle.svg"
        alt=""
      />
      <img className="home__dot-grid" src="/images/DotGrid.svg" alt="" />
      <img className="home__dot-grid-2" src="/images/DotGrid.svg" alt="" />
      <img className="home__red-dymmy" src="/images/red-dymmy.svg" alt="" />
      <img className="home__black-dymmy" src="/images/Black-Dummy.svg" alt="" />
    </div>
  );
};

export default HomeSection;
