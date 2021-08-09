import React from "react";

import CustomButton from "../custom-button/custom-button.component";
import Connections from "../connections/connections.component";

import "./home-Section.styless.scss";

const HomeSection = ({ home }) => {
  return (
    <div className="home-section" ref={home}>
      <div className="home-section__left">
        <h1 className="home-section__heading-one">
          HI THERE,
          <br /> I’M FAHMI ELZORKANY
        </h1>
        <h2 className="home-section__heading-two">UI / UX DESIGNER</h2>
        <p className="home-section__text">
          I believe in the power of design to change the world!
        </p>
        <hr />

        <Connections />

        <div className="home-section__btns">
          <CustomButton active>Hire Me</CustomButton>
          <CustomButton>Download CV</CustomButton>
        </div>
      </div>
      <div className="home-section__right">
        <img src="/images/fahmi.png" alt="" />
      </div>
      <img
        className="home-section__half__circle"
        src="/images/half-circle.svg"
        alt=""
      />
      <img
        className="home-section__dot-grid"
        src="/images/DotGrid.svg"
        alt=""
      />
      <img
        className="home-section__dot-grid-2"
        src="/images/DotGrid.svg"
        alt=""
      />
      <img
        className="home-section__red-dymmy"
        src="/images/red-dymmy.svg"
        alt=""
      />
      <img
        className="home-section__black-dymmy"
        src="/images/Black-Dummy.svg"
        alt=""
      />
    </div>
  );
};

export default HomeSection;
