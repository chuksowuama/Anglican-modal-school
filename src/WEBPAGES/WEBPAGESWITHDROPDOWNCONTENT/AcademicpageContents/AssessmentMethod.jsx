import React from 'react'
import { assessmentData } from '../../../assets/dataAssets'

const AssessmentMethod = () => {
  return (
    <>
     <div className="assessment-section">
      <div className="assessment-grid">
        {assessmentData.methods.map((item, idx) => (
          <div key={idx} className="assessment-card">
            <div className="icon">{item.icon}</div>
            <h3 className='Title'>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      <ul className='assessment-tools'>
      <h3 className='Title'>Assessment Tools We Use</h3>
        {assessmentData.tools.map((tool, idx) => (
          <li key={idx}>{tool}</li>
        ))}
      </ul>

      <blockquote className='testimonial-box'>
        “{assessmentData.testimonial.quote}”  
        <br /><span>— {assessmentData.testimonial.author}</span>
      </blockquote>
      </div>
</>
)
}
export default AssessmentMethod