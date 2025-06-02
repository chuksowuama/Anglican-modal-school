import React from "react";
import "./HeroSection.css";
import { Link } from "react-router-dom";

const HeroSection = (props) => {
  return (
    <>
      <div className={props.herosection}>
        <img src={props.heroimg} alt="" />
        <div className={props.heroContent}>
          <h1 className="heroTitle">{props.heroTitle}</h1>
          <h2 className="hero-sub">
            {props.heroSub} <br />
            <span>{props.subqoute}</span>
          </h2>
          <button className={props.heroCTA}>
            <Link to={props.tourl} className={props.heroCTA}>
              {props.Link}
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
