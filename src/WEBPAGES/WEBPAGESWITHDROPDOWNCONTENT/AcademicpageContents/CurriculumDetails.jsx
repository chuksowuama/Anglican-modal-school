import React from "react";
import { curriculumData } from "../../../assets/dataAssets";
import Accordion from "../../../COMPONENTS/Accordion/Accordion";

const CurriculumDetails = () => {
  return (
    <>
      <div className="curriculum-intro">
      At Anglican Moodal, our curriculum offers a dynamic and comprehensive
        educational experience that empowers students to excel academically and
        develop critical life skills. We focus on holistic development,
        integrating core academic subjects with enriching extracurricular
        activities, preparing students for success in the 21st century.
      </div>
      <div className="CurriculumData">
        <ul>
          <h3 className="Title">Core Subjects</h3>
          {curriculumData.coreSubjects.map((item) => (
            <li>
              <h4>{item.title}:</h4> <span>{item.description}</span>
            </li>
          ))}
        </ul>
        <ul>
          <h3 className="Title">Enrichment Programs</h3>
          {curriculumData.enrichmentPrograms.map((item) => (
            <li>
              <h4>{item.title}:</h4> <span>{item.description}</span>
            </li>
          ))}
        </ul>
        <ul>
          <h3 className="Title">Assessment Approach</h3>
          {curriculumData.assessmentApproach.map((item) => (
            <li>
              <h4>{item.title}:</h4> <span>{item.description}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="stages">
        <h3 className="Title">Stages</h3>
      <div className="CurriculumAccord">
        <Accordion/>
      </div>
      </div>
    </>
  );
};

export default CurriculumDetails;
