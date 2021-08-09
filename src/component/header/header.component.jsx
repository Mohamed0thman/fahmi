import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";

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

  window.addEventListener("scroll", function (e) {
    setYOffset(window.pageYOffset);

    console.log("scroll");
  });
  console.log("yOffset", yOffset);

  return (
    <div className={`header ${yOffset > 0 ? "active" : ""}`} ref={headerRef}>
      <div className="header__container">
        <div className="header__logo">F</div>
        <ul className="header__list">
          <li
            className={`header__item ${
              visibleSection === "Home" ? "selected" : ""
            }`}
            onClick={() => {
              history.push("/fahmi");
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
              history.push("/fahmi");
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
              history.push("/fahmi");
              scrollTo(services.current);
            }}
          >
            Services
          </li>
          <li className="header__item">
            <Link to="my-process"> My UX Process</Link>
          </li>
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
