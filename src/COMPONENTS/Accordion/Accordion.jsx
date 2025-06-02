import React, { useState } from 'react'
import "./Accordion.css"
import { curriculumData } from '../../assets/dataAssets'

const Accordion = () => {
    const[display,setdisplay]=useState(null)
   
    function handleAccordion(getId){
     setdisplay(getId===display?null:getId)
    }


  return (
    <div className='Accrodion'>
      {
        curriculumData.stages.map((item,index)=>(
           <div onClick={()=>handleAccordion(item.id)}>
             <h4>{item.title} <i class="fa-solid fa-arrow-down"></i></h4>
            {display===index? <div className='info'><p>{item.description}</p></div>:null }
           </div>
        ))
      }
    </div>
  )
}

export default Accordion
