import React from "react";
import OverViewImg from "../../../assets/OverviewImg.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { CampusCarouseldata } from "../../../assets/dataAssets";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { Pagination, Navigation, Autoplay } from "swiper/modules";
const CampusP = () => {
  return (
    <div>
      <h1 className="Title">
        Welcome to Our Campus: A Space for Growth & Discovery
      </h1>
      <div className="CampusOverview">
        <div className="overViewImg">
          <img src={OverViewImg} alt="" />
        </div>
        <div className="OverviewText">
          <p>
            At Anglican Modal, our campus is more than just a place of learning
            it's a dynamic, welcoming community where students feel valued,
            inspired, and supported every step of the way. The culture here is
            built on strong values of respect, integrity, and inclusion,
            creating an environment where every student is encouraged to thrive.
            From engaging classroom experiences to vibrant extracurricular
            activities, our students are actively involved in shaping a school
            spirit that is both uplifting and united. Set within a safe and
            peaceful environment, the Anglican Modal campus blends natural
            beauty with thoughtfully designed learning spaces. Lush green
            surroundings and well-maintained facilities provide the perfect
            setting for both academic focus and personal growth. Student safety
            is a cornerstone of our campus experience. We maintain a secure
            environment through 24/7 surveillance, trained security staff, and
            well-established emergency protocols. Our commitment to safety
            extends beyond the physical, offering mental health support,
            counseling services, and wellness programs to ensure every student
            feels secure and cared for. At Anglican Moodal, we foster a culture
            where safety, growth, and belonging come together—creating a space
            where students can confidently explore, learn, and lead.
          </p>
        </div>
      </div>
      <div className="facilities">
        <h1 className="Title">Facilities</h1>
        <div className="facilities-card-container">
          <div className="facilitiesCard">
            <span> 📚</span>
            <h3>Library</h3>
            <p>
              A quiet, resource-rich space that encourages curiosity and
              independent learning. Stocked with books, journals, and digital
              media for all age groups.
            </p>
          </div>
          <div className="facilitiesCard">
            <span>🧪</span>
            <h3>Science Labs</h3>
            <p>
              Fully equipped labs for Physics, Chemistry, and Biology that offer
              hands-on experience, fostering scientific thinking and
              experimentation.
            </p>
          </div>
          <div className="facilitiesCard">
            <span>🏫</span>
            <h3> Classrooms</h3>
            <p>
              Spacious, well-lit, and tech-enabled classrooms designed to
              support interactive and collaborative learning in a focused
              environment.
            </p>
          </div>
          <div className="facilitiesCard">
            <span> ⚽</span>
            <h3>Sports Field</h3>
            <p>
              A large multi-sport field for football, athletics, and outdoor
              games. It promotes physical fitness, teamwork, and school spirit.
            </p>
          </div>
          <div className="facilitiesCard">
            <span>🛏️</span>
            <h3>Dormitories </h3>
            <p>
              Comfortable, well-supervised residential facilities that provide a
              safe, homely environment for our boarding students.
            </p>
          </div>
          <div className="facilitiesCard">
            <span> 🖥️ </span>
            <h3>ICT Labs</h3>
            <p>
              Modern computer labs with up-to-date technology and high-speed
              internet access to enhance digital literacy and coding skills.
            </p>
          </div>
        </div>
      </div>

      <div className="campus-slid">
        <h1 className="Title"></h1>
        <div className="campus-slid-container">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{
              delay: 5500,
            }}
            loop={true}
            pagination={{
              clickable: true,
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
    </div>
  );
};

export default CampusP;
