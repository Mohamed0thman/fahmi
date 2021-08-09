import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faBehanceSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import "./connections.styless.scss";

const Connections = () => {
  return (
    <ul className="connections__icons">
      <li className="connections__icon">
        <FontAwesomeIcon icon={faEnvelope} size="2x" color="#EF5E43" />
      </li>
      <li className="connections__icon">
        <FontAwesomeIcon icon={faBehanceSquare} size="2x" color="#053EFF" />
      </li>
      <li className="connections__icon">
        <FontAwesomeIcon icon={faLinkedin} size="2x" color="#0077B5" />
      </li>
    </ul>
  );
};
export default Connections;
