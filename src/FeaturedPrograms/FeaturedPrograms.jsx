import React from "react";
import "./FeaturedPrograms.css"

const FeaturedPrograms = () => {
  return (
    <>
      <div className="featued-program container" data-aos="fade-up">
        <h1 className="Title">FeaturedPrograms</h1>
        <div className="featured-content">
         <div className="featured one" data-aos="fade-right">
             <div className="featured-details"> 
                <h1>STEM Enrichment</h1>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Quos assumenda quod officia quas nam cupiditate dolores quibusdam nesciunt sed, distinctio,
                 laboriosam voluptatibus corporis aperiam, consectetur vitae. Excepturi veniam qui quidem.</p>
             </div>
         </div>
         <div className="featured two">
            <div className="featured-details"> 
                <h1>Arts & Drama</h1>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Quos assumenda quod officia quas nam cupiditate dolores quibusdam nesciunt sed, distinctio,
                 laboriosam voluptatibus corporis aperiam, consectetur vitae. Excepturi veniam qui quidem.</p>
             </div>
         </div>
         <div className="featured three">
            <div className="featured-details"> 
                <h1>Outdoor Learning</h1>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Quos assumenda quod officia quas nam cupiditate dolores quibusdam nesciunt sed, distinctio,
                 laboriosam voluptatibus corporis aperiam, consectetur vitae. Excepturi veniam qui quidem.</p>
             </div>
            </div>
         <div className="featured four"> 
            <div className="featured-details"> 
                <h1>Social-Emotional Learning</h1>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Quos assumenda quod officia quas nam cupiditate dolores quibusdam nesciunt sed, distinctio,
                 laboriosam voluptatibus corporis aperiam, consectetur vitae. Excepturi veniam qui quidem.</p>
             </div>
            </div>
        </div>
      </div>
    </>
  );
};
export default FeaturedPrograms