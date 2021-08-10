import React from "react";

import CustomButton from "../custom-button/custom-button.component";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import "./tools.styless.scss";

const Tools = () => {
  return (
    <div className="tools-section">
      <div>
        <div className="tools-section__left">
          <div>
            <div className="tools-section__left__item">
              <div>
                <img src="/images/ux-interface.svg" alt="" />
                <h4>UX Design</h4>
                <p>Mobile App, Website</p>
              </div>
              <h1>01</h1>
            </div>

            <div className="tools-section__left__item">
              <div>
                <img src="/images/web-design.svg" alt="" />
                <h4>UX Design</h4>
                <p>Mobile App, Website</p>
              </div>
              <h1>03</h1>
            </div>
          </div>

          <div className="tools-section__left__item">
            <div>
              <img src="/images/design.svg" alt="" />

              <h4>UX Design</h4>
              <p>Mobile App, Website</p>
            </div>
            <h1>02</h1>
          </div>
        </div>
        <div className="tools-section__left__btn">
          <CustomButton active>
            My UX Process
            <FontAwesomeIcon
              className="tools-section__left__btn-icon"
              icon={faArrowRight}
            />
          </CustomButton>
        </div>
      </div>

      <div className="tools-section__right">
        <h4>Tools</h4>
        <img src="/images/Group 49.png" alt="" />
      </div>

      <h1 className="tools-section__heading">My Services</h1>
    </div>
  );
};

export default Tools;
