import React from "react";

import "./Process-item.styless.scss";

const ProcessItem = ({ item }) => {
  return (
    <div className={`process-item ${item.class}`}>
      <div className="process-item__left">
        <div className={`process-item__image  process-item__image--${item.id}`}>
          <img src={item.path} alt={item.title} />
        </div>
        <h3 className="process-item__heading">
          <span>{item.id}</span> {item.title}
        </h3>
        <p className="process-item__text">{item.text}</p>
      </div>
      <div className="process-item__right">{item.id}</div>
    </div>
  );
};
export default ProcessItem;
