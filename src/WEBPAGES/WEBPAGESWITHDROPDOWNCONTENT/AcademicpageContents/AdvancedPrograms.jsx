import React from "react";
import { advancedProgramsData} from "../../../assets/dataAssets";
import { Steps } from "../../../assets/dataAssets";
import { achievers } from "../../../assets/dataAssets";

import { Swiper, SwiperSlide } from "swiper/react";
import { CampusCarouseldata } from "../../../assets/dataAssets";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

const AdvancedPrograms = () => {
  return (
    <>
       <div className="AdvancePage">
       <div className="advancePrograms">
       <h1 className="Title">Empowering exceptional learners to go further</h1>
        <h4>
          Anglican Moodal nurtures advanced learners through targeted programs
          that promote leadership, critical thinking, innovation, and artistic
          expression. These tracks support students in discovering their full
          academic and personal potential.
        </h4>
       </div>
       <div>
        <ul className="programs progTitle">
          <li></li>
          <li>Program Title</li>
          <li>Description</li>
        </ul>

        {advancedProgramsData.map((item) => (
          <ul className="programs progItems">
            <li>
              <span>{item.icon}</span>
            </li>
            <li>{item.title}</li>
            <li>{item.description}</li>
          </ul>
        ))}
      </div>
        <div className="AdvancePrograms-slid">
          <h1 className="Title"></h1>
          <div className="AdvancePrograms-container">
          <Swiper
              spaceBetween={10}
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
              {CampusCarouseldata.map((item) => (
                <SwiperSlide>
                  <div className="swiper-class-img">
                    <img src={item.image} alt="" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

      
      <div className="academic-pathway">
      <h2 className="pathway-title Title">Student Academic Pathway</h2>
      <div className="pathway-steps">
          {Steps.map((step, index) => (
            <div className="step-card" key={index}>
              <div className="step-icon">{step.icon}</div>
              <div className="step-content">
                <h3 className="Title">{step.title}</h3>
                <p>{step.description}</p>
              </div>
              {index !== Steps.length - 1 && <div className="arrow">➡️</div>}
            </div>
          ))}
      </div>
    </div>
    <div className="achievers-box">
      <h2 className="Title">🏆 Top Achievers of 2024</h2>
      <p className="intro-text">
        Celebrating excellence at Anglican Moodal. These students have distinguished themselves with outstanding academic and co-curricular achievements.
      </p>
      <div className="achievers-grid">
        {achievers.map((achiever, index) => (
          <div key={index} className="achiever-card">
            <h3>{achiever.name}</h3>
            <p className="program">{achiever.program}</p>
            <p className="award">{achiever.award}</p>
          </div>
        ))}
      </div>
    </div>
       </div>  
    </>
  );
};

export default AdvancedPrograms;
