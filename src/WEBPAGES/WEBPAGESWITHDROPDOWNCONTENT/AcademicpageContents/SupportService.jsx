import React, { useState } from 'react'
import { servicesData } from '../../../assets/dataAssets'

const SupportService = () => {
  const[expandedInfo,setExpandedInfo]=useState(null)
   
  function handleExpand(getIndex){
    setExpandedInfo(prev=>prev===getIndex?null:getIndex)
  }

  return (
    <>
    <div className='support-services-section"'>
    <div className="supportService-header">
        <h2>Support Services for Holistic Growth</h2>
        <p>
          At Anglican Moodal, we understand that every student's success is built on strong emotional,
          academic, and physical support. Here’s how we care for our students outside the classroom.
        </p>
      </div>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div key={index} className="service-card">
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <button onClick={()=>handleExpand(index)} className='seemore-btn'>
              {expandedInfo===index?"Hide-Info":"see-more"}
            </button>
           {expandedInfo===index && ( <div className='seemore'>
            <p><strong>Overview:</strong>{service.details.overview}</p>
            <p><strong>Access:</strong>{service.details.access}</p>
            <p><strong>Hours:</strong>{service.details.hours}</p>
            <p><strong>Staff:</strong>{service.details.staff}</p>
            <p><strong>Testimonial</strong>{service.details.testimonial}</p>
           </div> )}
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default SupportService
