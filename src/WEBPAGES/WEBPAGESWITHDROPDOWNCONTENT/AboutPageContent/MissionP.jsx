import React from "react";
import "./AboutPageContent.css";
import Excellence from "../../../assets/ExcellenceIcon.png";
import GrowthIcon from "../../../assets/GrowthIcon.png";
import Integrity from "../../../assets/IntegrityIcon.png";
import Mission from "../../../assets/missionPicture.png";
import Respect from "../../../assets/Respect.png";
const MissionP = () => {
  return (
    <div className="mission-vision">
      <div className="MissionContainer">
      <div className="gridItem Missionimg">
        <img src={Mission} alt="" />
      </div>
      <div className="gridItem MissionText">
        <p>
              Our mission is to cultivate academically excellent, morally sound, and
          socially responsible individuals equipped to lead and serve in a
          dynamic world. We are rooted in Christian values, promoting integrity,
          discipline, and empathy.<br/>
           Our vision is to be a beacon of
          transformational education in Africa, raising global citizens with
          strong spiritual grounding and intellectual curiosity. We aim to
          nurture students who will innovate, inspire, and impact their
          communities. The dual focus on mission and vision guides every
          decision—from curriculum design to community engagement. We believe in
          education that balances the mind, heart, and soul.
        </p>
      </div>
      </div>


      <div className="gridItem Values">
        <h2 className="Title">Values</h2>
        <div className="valueCardsContainer">
          <div className="valuecards">
            <img src={Integrity} alt="" /> <h3>Integrity</h3>{" "}
          </div>
          <div className="valuecards">
            <img src={Respect} alt="" /> <h3>Respect</h3>{" "}
          </div>
          <div className="valuecards">
            <img src={GrowthIcon} alt="" /> <h3>Growth</h3>{" "}
          </div>
          <div className="valuecards">
            <img src={Excellence} alt="" /> <h3>Excellence</h3>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionP;
