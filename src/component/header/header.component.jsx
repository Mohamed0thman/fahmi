import React, { useState } from "react";
import { withRouter, NavLink, useLocation } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";

import "./header.styless.scss";

const Header = ({
  history,
  scrollTo,
  headerRef,
  home,
  aboutMe,
  services,
  visibleSection,
}) => {
  const [yOffset, setYOffset] = useState(0);
  const location = useLocation().pathname;

  window.addEventListener("scroll", function (e) {
    setYOffset(window.pageYOffset);
  });

  return (
    <div className={`header ${yOffset > 0 ? "active" : ""}`} ref={headerRef}>
      <div className="header__container">
        <div className="header__logo">F</div>
        <ul className="header__list">
          {location === "/" ? (
            <>
              <li
                className={`header__item ${
                  visibleSection === "Home" ? "selected" : ""
                }`}
                onClick={() => {
                  scrollTo(home.current);
                }}
              >
                Home
              </li>
              <li
                className={`header__item ${
                  visibleSection === "About Me" ? "selected" : ""
                }`}
                onClick={() => {
                  scrollTo(aboutMe.current);
                }}
              >
                About Me
              </li>
              <li
                className={`header__item ${
                  visibleSection === "Services" ? "selected" : ""
                }`}
                onClick={() => {
                  scrollTo(services.current);
                }}
              >
                Services
              </li>
              <li className="header__item">
                <NavLink
                  to="my-process"
                  className="header__link"
                  activeClassName="header__link--active"
                >
                  My UX Process
                </NavLink>
              </li>
            </>
          ) : (
            <li
              className="header__item--btn"
              onClick={() => {
                history.push("/");
              }}
            >
              <CustomButton>Back to Home</CustomButton>
            </li>
          )}
        </ul>
        <img
          className="header__orange-dummy"
          src="/images/orange-dummy.svg"
          alt=""
        />
      </div>
    </div>
  );
};
export default withRouter(Header);
