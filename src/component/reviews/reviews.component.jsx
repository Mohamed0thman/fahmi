import React, { useState } from "react";

import Slider from "react-slick";

import { ReactComponent as LeftArrow } from "../../assets/Left-arrow.svg";
import { ReactComponent as RightArrow } from "../../assets/right-arrow.svg";

import "swiper/swiper.scss";
import "./reviews.styless.scss";

const slides = [
  {
    id: "1",
    image: "/images/review-1.png",
  },
  {
    id: "2",
    image: "/images/review-2.png",
  },
  {
    id: "3",
    image: "/images/review-3.png",
  },
  {
    id: "4",
    image: "/images/review-4.png",
  },
];

const NextArrow = ({ onClick }) => {
  return (
    <div className="arrow next" onClick={onClick}>
      <RightArrow />
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div className="arrow prev" onClick={onClick}>
      <LeftArrow />
    </div>
  );
};

const Reviews = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="reviews">
      <h1 className="reviews__heading">Completed projects reviews</h1>
      <p className="reviews__text">
        I don't just build products or connections I also build trust and
        honesty See what clients say about me and their reviews to me
      </p>

      <div className="reviews__content">
        <Slider {...settings}>
          {slides.map((slide, idx) => (
            <div
              key={slide.id}
              className={idx === imageIndex ? "slide activeSlide" : "slide"}
            >
              <img src={slide.image} alt="" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default Reviews;
