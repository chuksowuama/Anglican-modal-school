import React from "react";
import "./Testimonial.css";
import Testinfo from "./Testinfo";

const Testimonial = (props) => {
  return (
    <>
    <div className="TestimonialContainer">
        {Testinfo && Testinfo.length > 0
          ? Testinfo.map((testi) => (
              
                <div className="testimonialcont">
                  <img src={testi.testImg} alt="" />
                  <div className="testDetails">
                    <p>{testi.testcomment}</p>
                    <h3>{testi.testtile}</h3>
                  </div>
                </div>
            ))
          : null}
      </div>
    </>
  );
};

export default Testimonial;
