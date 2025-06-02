import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import heroimg from "../assets/pileofbooks.jpg"
import { useSearchParams } from 'react-router-dom'
import HeroSection from '../COMPONENTS/HeroSection/HeroSection'
import UpcomingEvents from './WEBPAGESWITHDROPDOWNCONTENT/EventsPageContent/UpcomingEvents'
import PastEventsArchive from './WEBPAGESWITHDROPDOWNCONTENT/EventsPageContent/PastEventsArchive'
import EventSubnav from '../COMPONENTS/SUBnav/EventSubnav'
import Breadcrumbs from '../COMPONENTS/BreadCrumbs/Breadcrumbs'
import Ctabanner from '../CTA-banner/Ctabanner'

const EventsPage = () => {
    const[currentindex,setCurrentIndex]=useState(0)
    const[searchParams]=useSearchParams()
    const section=searchParams.get("section")

       useEffect(() => {
          // Set current index based on section query param
          switch (section) {
            case "UpcomingEvents":
              setCurrentIndex(0);
              break;
            case "PastEvents":
              setCurrentIndex(1);
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
        heroTitle="Events"
        heroCTA="removeherobutton"
      /> 
      <Breadcrumbs/>
      <div className="grid-Layout">
      <div className="aside">
        <EventSubnav
          currentindex={currentindex}
          setCurrentIndex={setCurrentIndex}
        />
      </div>
      <div className="main">
        {currentindex===0&&<section id='Upcoming'> <UpcomingEvents/> </section>}
        {currentindex===1&&<section id='PastEvents'> <PastEventsArchive/> </section>}
      </div>
     </div>
     <Ctabanner/>
    </div>
  )
}

export default EventsPage
