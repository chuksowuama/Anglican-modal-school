import React from 'react'
import "./AboutPageContent.css"
import { historyTimeline } from '../../../assets/dataAssets'
import oldchool from "../../../assets/oldschoolBuilding2.jpg"
import newschool from "../../../assets/Schoolbuilding2.jpg"
import { useMediaQuery } from "react-responsive";

const Historyp = () => {
  const laptop = useMediaQuery({ query: "(min-width: 601px)" });
  return (
    <div>
       {
        historyTimeline.map((timeline,index)=>(
          <div className='history-timeline' data-aos={laptop?"zoom-in-down":""} key={index}>
            <h1 className='Title'> <span>{timeline.year}</span> {timeline.title}</h1>
              <p className='history-info'>{timeline.description}</p>
          </div>
        ))
      } 
      <div className="historyImgs">
        <div><img src={oldchool} alt="" /> <span className='Hist'>Then</span> </div>
        <div><img src={newschool} alt="" /><span className='Hist'>Now</span> </div>
      </div>
    </div>
  )
}

export default Historyp

