import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Carouseldata } from "../../assets/dataAssets";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import "./Carousel.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const Carousel = () => {
  return (
    <div className="carousel container">
      <h1 className="Title">News & Announcements</h1>
      <Swiper
        spaceBetween={20}
        autoplay={{
          delay: 5500,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          600: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          // Large screen (laptop/desktop)
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {Carouseldata.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="carousel-item">
              <img src={item.image} alt="" />
              <div class="news-info">
                <h3 class="news-title">
                  <a href="">Anglican Modal News And Event</a>
                </h3>
                <i class="fa-solid fa-calendar-days">
                  <p>october 28,2024</p>
                </i>
                <i class="fa-regular fa-comment">
                  <p>0 comments</p>
                </i>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
