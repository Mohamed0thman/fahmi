import React from "react";

import { processItem } from "./process-item";

import ProcessItem from "../../component/Process-item/Process-item.component";

import "./Process-page.styless.scss";

const processPage = () => {
  return (
    <div className="process-page">
      <div className="process-page__process">
        {processItem.map((item) => (
          <div className="process-page__content">
            {item.id === "04" || item.id === "02" ? (
              ""
            ) : (
              <img
                className={`process-page__content--line process-page__content--line-${item.id}`}
                src="/images/line-1.svg"
                alt=""
              />
            )}

            {item.id === "02" ? (
              <img
                className={`process-page__content--line left`}
                src="/images/line-2.svg"
                alt=""
              />
            ) : (
              ""
            )}

            <ProcessItem key={item.id} item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default processPage;
