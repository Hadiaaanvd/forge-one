import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./home-slider.styles.scss";

const HomeSlider = ({ imagesContent }) => {
  return (
    <div className="home-slider-component">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {imagesContent.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="individual-image"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="image-content container">
                <div className="heading">{item.heading}</div>
                <div className="subtext">{item.description}</div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeSlider;
