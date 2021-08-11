import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

import { ReactComponent as LeftArrow } from "../../assets/Left-arrow.svg";
import { ReactComponent as RightArrow } from "../../assets/right-arrow.svg";

import "./project-section.styless.scss";

const projects = [
  { id: "1", type: "Web Design", image: "/images/5db462122667187 1.png" },
  { id: "2", type: "App Design", image: "/images/6ad516108832785 1.png" },
  { id: "3", type: "Web Design", image: "/images/7104a5103578535 1.png" },
  { id: "4", type: "App Design", image: "/images/900d8c100184727 1.png" },
  { id: "5", type: "App Design", image: "/images/70036899559681 1.png" },
];

const ProjectSection = () => {
  const [data, setDate] = useState(projects);
  const [current, setCurrent] = useState(0);
  const [page, setPage] = useState(1);
  const [activeIndex, setActiveIndex] = useState(0);

  const nav = ["All", "App Design", "Web Design"];

  console.log(page);

  const length = data.length;

  const pages = [];
  for (let i = 1; i <= Math.ceil(data.length / 2); i++) {
    pages.push(i);
  }

  const start = (page - 1) * 2;
  const end = page * 2;

  const items = data.slice(start, end);

  const nextSlide = () => {
    if (page === pages[pages.length - 1]) {
      return setPage(1);
    }
    setPage(page + 1);
  };
  console.log(page, pages[0]);

  console.log("page", page);

  const prevSlide = () => {
    if (page === pages[0]) {
      console.log("pages", pages.length - 1);
      return setPage(pages.length);
    }
    setPage(page - 1);
  };

  if (!Array.isArray(projects) || projects.length <= 0) {
    return null;
  }

  const toPage = (i) => {
    setPage(i);
  };

  const filterDataByType = (type) => {
    const filter = projects.filter((item) => {
      return item.type === type;
    });
    setPage(1);
    setDate(filter);
  };

  const allData = () => {
    setPage(1);
    setDate(projects);
  };

  const handleOnClick = (item, i) => {
    if (i === 0) {
      allData();
    } else {
      filterDataByType(item);
    }

    setActiveIndex(i);
  };

  return (
    <div className="projects-section">
      <h2 className="projects-section__heading">Recent Projects</h2>
      <div className="projects-section__header">
        <ul className="projects-section__header__list">
          {nav.map((item, i) => (
            <li
              key={i}
              className={`projects-section__header__item ${
                i === activeIndex ? "active" : ""
              }`}
              onClick={() => handleOnClick(item, i)}
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="projects-section__header__icons">
          <div className="projects-section__icon" onClick={prevSlide}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </div>

          <div className="projects-section__icon" onClick={nextSlide}>
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
        </div>
      </div>
      <div className="projects-section__projects">
        {items.map((item, i) => {
          return (
            <div key={item.id} className={`projects-section__item`}>
              <img src={item.image} alt="" />
            </div>
          );
        })}
      </div>
      <div className="projects-section__dots">
        {pages.map((_, index) => (
          <div
            key={index}
            id={`${index}`}
            className={`projects-section__dot ${
              index + 1 === page ? "active" : ""
            }`}
            onClick={() => toPage(index + 1)}
          />
        ))}
      </div>

      <img
        className="projects-section__bg"
        src="/images/my project bg.svg"
        alt=""
      />
      <img
        className="projects-section__dot-circle"
        src="/images/dot circle.svg"
        alt=""
      />
      <img
        className="projects-section__dot-grid-orange"
        src="/images/Dot Grid orange.svg"
        alt=""
      />
      <img
        className="projects-section__dot-grid-Purple"
        src="/images/Dot Grid Purple.svg"
        alt=""
      />
    </div>
  );
};

export default ProjectSection;
