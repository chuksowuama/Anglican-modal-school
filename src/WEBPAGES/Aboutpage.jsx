import React, { useState } from 'react'
import HeroSection from '../COMPONENTS/HeroSection/HeroSection'
import heroimg from "../assets/pileofbooks.jpg"
import { useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'
import Historyp from './WEBPAGESWITHDROPDOWNCONTENT/AboutPageContent/Historyp'
import LeadershipP from './WEBPAGESWITHDROPDOWNCONTENT/AboutPageContent/LeadershipP'
import MissionP from './WEBPAGESWITHDROPDOWNCONTENT/AboutPageContent/MissionP'
import CampusP from './WEBPAGESWITHDROPDOWNCONTENT/AboutPageContent/CampusP'
import Accreditation from './WEBPAGESWITHDROPDOWNCONTENT/AboutPageContent/Accreditation'
import AboutSubnav from '../COMPONENTS/SUBnav/AboutSubnav'
import Breadcrumbs from '../COMPONENTS/BreadCrumbs/Breadcrumbs'
import Ctabanner from '../CTA-banner/Ctabanner'


const Aboutpage = () => {
const[currentindex,setCurrentIndex]=useState(0)
const [searchParams] = useSearchParams();
let section = searchParams.get("section");


useEffect(() => {
  // Set current index based on section query param
  switch (section) {
    case "history":
      setCurrentIndex(0);
      break;
    case "mission":
      setCurrentIndex(1);
      break;
    case "leadership":
      setCurrentIndex(2);
      break;
    case "accreditation":
      setCurrentIndex(3);
      break;
    case "campus":
      setCurrentIndex(4);
      break;
    default:
      setCurrentIndex(0);
  }
}, [section]);

// console.log("section is",section)
  return (
   <>
    <div>
     <HeroSection
     herosection="Otherherosection"
     heroContent="otherheroContent"
     heroimg={heroimg}
     heroTitle="About us"
     heroCTA="removeherobutton"
     />
     <Breadcrumbs
     />
     <div className="grid-Layout">
      <div className="aside">
       <AboutSubnav
        currentindex={currentindex}
        setCurrentIndex={setCurrentIndex}
       />
      </div>
      <div className="main">
        {currentindex===0&&<section id='history'><Historyp/></section>}
        {currentindex===1&&<section id='mission'> <MissionP/></section>}
        {currentindex===2&&<section id='leadership'><LeadershipP/></section>}
        {currentindex===3&&<section id='accreditation'><Accreditation/></section>}
        {currentindex===4&&<section id='campus'><CampusP/></section>}
      </div>
     </div>
     <Ctabanner/>
    </div>
   </>
  )
}

export default Aboutpage
