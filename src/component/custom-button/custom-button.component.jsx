import React from "react";

import "./custom-button.styless.scss";

const CustomButton = ({ children, active, handleOnClick, ...otherProps }) => {
  return (
    <button
      className={`custom-button ${active ? " active" : ""}`}
      {...otherProps}
      onClick={handleOnClick}
    >
      {children}
    </button>
  );
};
export default CustomButton;
