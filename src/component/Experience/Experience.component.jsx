import React from "react";

import "./Experience.styless.scss";

const Experience = () => {
  const Experiences = [
    {
      date: "2020 - 2021",
      name: "Limbic Labs",
      work: "UI/UX Designer",
      place: "London, England",
    },
    {
      date: "2019 - 2020 ",
      name: "NAFFA",
      work: "UI/UX Designer",
      place: "Amman, Jordan",
    },
    {
      date: "2018 - 2019",
      name: "UPWORK",
      work: "UI/UX Designer",
    },
    {
      date: "2018 - 2019",
      name: "ZAKKI",
      work: "UI/UX Designer",
      as: "volunteer",
      place: "Indonesia",
    },
  ];
  return (
    <div className="work-experience">
      <h3 className="work-experience__heading">Work Experience</h3>

      <div className="work-experience__content">
        {Experiences.map((Experience, i) => {
          return (
            <div className="work-experience__item" key={i}>
              <div className="work-experience__item--date">
                {Experience.date}
              </div>
              <div>
                <div className="work-experience__item--name">
                  {Experience.name}
                </div>
                <div className="work-experience__item--work">
                  {Experience.work}
                </div>
                <div className="work-experience__item--as">{Experience.as}</div>
                <div className="work-experience__item--place">
                  {Experience.place}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Experience;
