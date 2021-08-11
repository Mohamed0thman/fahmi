import React from "react";
import { useHistory } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import "./tools.styless.scss";

const Tools = () => {
  const history = useHistory();

  console.log("history");
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
          <CustomButton
            active
            handleOnClick={() => history.push("/my-process")}
          >
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
        <div className="tools-section__right__content">
          <img className="bg" src="/images/Group 409.png" alt="" />
        </div>
        <div className="main">
          <img className="figma" src="/images/icons8-figma.svg" alt="" />
          <div
            className="item"
            style={{
              animationDelay: "-1s",
            }}
          >
            <img
              src="/images/icons8-adobe-photoshop 1.svg"
              alt=""
              style={{
                animationDelay: "-1s",
              }}
            />
          </div>
          <div
            className="item"
            style={{
              animationDelay: "-2s",
            }}
          >
            <img
              src="/images/icons8-adobe-illustrator.svg"
              alt=""
              style={{
                animationDelay: "-2s",
              }}
            />
          </div>
          <div
            className="item"
            style={{
              animationDelay: "-3s",
            }}
          >
            <img
              src="/images/icons8-adobe-xd.svg"
              alt=""
              style={{
                animationDelay: "-3s",
              }}
            />
          </div>
          <div
            className="item"
            style={{
              animationDelay: "-4s",
            }}
          >
            <img
              src="/images/miro-2.svg"
              alt=""
              style={{
                animationDelay: "-4s",
              }}
            />
          </div>
          <div
            className="item"
            style={{
              animationDelay: "-5s",
            }}
          >
            <img
              src="/images/icons8-invision.svg"
              alt=""
              style={{
                animationDelay: "-5s",
              }}
            />
          </div>
          <div
            className="item"
            style={{
              animationDelay: "-6s",
            }}
          >
            <img
              src="/images/icons8-adobe-after-effects 1.svg"
              alt=""
              style={{
                animationDelay: "-6s",
              }}
            />
          </div>
          <div
            className="item"
            style={{
              animationDelay: "-7s",
            }}
          >
            <img
              src="/images/Group 30.svg"
              alt=""
              style={{
                animationDelay: "-7s",
              }}
            />
          </div>
        </div>
      </div>

      <h1 className="tools-section__heading">My Services</h1>
    </div>
  );
};

export default Tools;
