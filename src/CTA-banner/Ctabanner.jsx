import React from "react";
import "./Ctabanner.css"
import bannerimg from "../assets/building.png"
import { Link } from "react-router-dom";

const Ctabanner = () => {
  return (
    <>
      <div className="container">
      <div className="Cta-banner">
        <h1>click here to </h1> <br />
        <button className="Cta-button"> <Link to={"/Admission"}>Apply</Link> </button>
      </div>
      </div>
    </>
  );
};

export default Ctabanner;
