import React, { useState } from "react";
import HeroSection from "../COMPONENTS/HeroSection/HeroSection";
import heroimg from "../assets/pileofbooks.jpg"
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import CurriculumDetails from "./WEBPAGESWITHDROPDOWNCONTENT/AcademicpageContents/CurriculumDetails";
import SupportService from "./WEBPAGESWITHDROPDOWNCONTENT/AcademicpageContents/SupportService";
import AssessmentMethod from "./WEBPAGESWITHDROPDOWNCONTENT/AcademicpageContents/AssessmentMethod";
import Overview from "./WEBPAGESWITHDROPDOWNCONTENT/AcademicpageContents/Overview";
import AdvancedPrograms from "./WEBPAGESWITHDROPDOWNCONTENT/AcademicpageContents/AdvancedPrograms";
import AcademicSubnav from "../COMPONENTS/SUBnav/AcademicSubnav";
import Breadcrumbs from "../COMPONENTS/BreadCrumbs/Breadcrumbs";
import Ctabanner from '../CTA-banner/Ctabanner'
const AcademicsPage = () => {
    const[currentindex,setCurrentIndex]=useState(0)
    const[searchParams]=useSearchParams()
    const section=searchParams.get("section")


    useEffect(() => {
      // Set current index based on section query param
      switch (section) {
        case "overview":
          setCurrentIndex(0);
          break;
        case "Curriculum":
          setCurrentIndex(1);
          break;
        case "AdvancedPrograms":
          setCurrentIndex(2);
          break;
        case "SupportServices":
          setCurrentIndex(3);
          break;
        case "AssessmentMethods":
          setCurrentIndex(4);
          break;
        default:
          setCurrentIndex(0);
      }
    }, [section]);
    
  return (
    <div>
      <HeroSection
        herosection="Otherherosection"
        heroContent="otherheroContent"
        heroimg={heroimg}
        heroTitle="Academics"
        heroCTA="removeherobutton"
      /> 
      <Breadcrumbs/>
      <div className="grid-Layout">
      <div className="aside">
      <AcademicSubnav
       currentindex={currentindex}
       setCurrentIndex={setCurrentIndex}
      />
      </div>
      <div className="main">
        {currentindex===0&&<section id='Overview'> <Overview/> </section>}
        {currentindex===1&&<section id='mission'> <CurriculumDetails/> </section>}
        {currentindex===2&&<section id='Advanced'> <AdvancedPrograms/> </section>}
        {currentindex===3&&<section id='Support'> <SupportService/> </section>}
        {currentindex===4&&<section id='Assessment'> <AssessmentMethod/> </section>}
      </div>
     </div>
     <Ctabanner/>
    </div>
  );
};

export default AcademicsPage;