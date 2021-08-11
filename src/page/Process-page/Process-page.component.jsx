import React from "react";

import { processItem } from "./process-item";

import ProcessItem from "../../component/Process-item/Process-item.component";

import "./Process-page.styless.scss";

const ProcessPage = () => {
  const addClass = (v) => {
    if (v % 2 === 0) {
      return "left";
    }
    return "";
  };
  return (
    <div className="process-page">
      <div className="process-page__process">
        {processItem.map((item, i) => (
          <div className="process-page__content" key={item.id}>
            {item.id === "04" ? (
              ""
            ) : (
              <img
                className={`process-page__content--line ${addClass(i + 1)} `}
                src={`${
                  addClass(i + 1) === "left"
                    ? "/images/line-2.svg"
                    : "/images/line-1.svg"
                }`}
                alt=""
              />
            )}

            <ProcessItem key={item.id} item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessPage;

//  "homepage": "https://Mohamed0thman.github.io/fahmi",
