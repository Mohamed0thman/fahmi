import React from "react";

import CustomButton from "../custom-button/custom-button.component";
import Connections from "../connections/connections.component";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import "./footer.styless.scss";

const Footer = () => {
  return (
    <div
      className="footer"
      style={{
        backgroundImage: "url(/images/footer.png)",
      }}
    >
      <form className="footer__form">
        <h1 className="footer__heading">
          Wanna make business together? Let’s talk
        </h1>
        <div className="footer__form__content">
          <input
            className="footer__input"
            placeholder="Your message......"
            type="text"
          />
          <div className="footer__btn">
            <CustomButton active>
              Send <FontAwesomeIcon icon={faArrowRight} size="1x" />
            </CustomButton>
          </div>
        </div>
      </form>
      <div className="footer__or">Or Via</div>
      <Connections />

      <p className="footer__Copyright">
        &copy;Copyright 2021. All Right Reserved by Fahmi Elzorkany
      </p>
      <div className="footer__up-btn">
        <CustomButton
          active
          handleOnClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          <FontAwesomeIcon icon={faArrowUp} size="1x" />
        </CustomButton>
      </div>
    </div>
  );
};

export default Footer;
