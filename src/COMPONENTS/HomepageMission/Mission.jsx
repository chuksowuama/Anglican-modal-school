import React from "react";
import studentimg from "../../assets/student images.jpg";
import "./Mission.css";
const Mission = () => {
  return (
    <>
      <div className="Mission container">
        <h1 className="Title">Our Mission</h1>
        <div className="mission">
          <div className="missionImage">
            <img src={studentimg} alt="" />
          </div>
          <div className="mission-writeUp">
            <p>
              At Anglican modal, our mission is to foster a nurturing and
              inclusive environment where every student from kindergarten to
              high school can thrive academically, socially, and emotionally. We
              empower students to become confident, compassionate, and
              responsible global citizens through high-quality education and
              character development.
            </p>
            <ul>
              <li>🎓 Academic Excellence</li>
              <li>❤️ Emotional Wellbeing</li>
              <li>🌍 Global Awareness</li>
              <li>🙌 Community Engagement</li>
            </ul>
          </div>
        </div>
        <div>
            <ul className="progress" data-aos="fade-up">
              <li>
                <span>✅</span> <span>20+ Years of Educational Excellence</span>
              </li>
              <li>
                <span>👩‍🏫</span> <span> 12:1 Student-Teacher Ratio</span>
              </li>
              <li>
                <span>🌱</span>{" "}
                <span> Dual Curriculum: Academic & Character</span>
              </li>
              <li>
                <span>🏆</span> <span> National Science Champions 2024</span>
              </li>
            </ul>
          </div>
      </div>
    </>
  );
};

export default Mission;
