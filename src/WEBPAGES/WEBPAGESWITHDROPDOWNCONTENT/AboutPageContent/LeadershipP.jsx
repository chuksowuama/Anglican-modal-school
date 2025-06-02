import React from "react";
import "./AboutPageContent.css";
import { leadershipTeam, studentLeadership } from "../../../assets/dataAssets";

const LeadershipP = () => {
  return (
    <div className="Leadership">
      <h3 className="Title">
        At Anglican Modal, our leadership team is devoted to excellence in
        education and the success of every
      </h3>
      <div className="Leadership-card-container">
          {
            leadershipTeam.map((item)=>(
            <div className="leadership-cards">
                <img src={item.photo} alt="" />
                <h3>{item.title}</h3>
                <p>{item.name}</p>
            </div>
            ))
          }
      </div>
      <h1 className="studentLeader">Student leaders</h1>
      <div className="Leadership-card-container">
          {
            studentLeadership.map((item)=>(
              <div className="leadership-cards">
                <img src={item.photo} alt="" />
                <h3>{item.title}</h3>
                <p>{item.name}</p>
            </div>
            ))
          }
      </div>
    </div>
  );
};

export default LeadershipP;
