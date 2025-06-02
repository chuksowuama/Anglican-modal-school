import React from 'react'
import { accreditationAndAwards } from '../../../assets/dataAssets'
import "./AboutPageContent.css"

const Accreditation = () => {
  return (
    <div className='Accreditation&award'>
      <h1 className="Title">Recognized & Accredited By</h1>
      <div className="div">
        {
          accreditationAndAwards.accreditations.map((item)=>(
            <div className='accreditation-container'>
              <img src={item.logo} alt="" />
              <div>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              </div>
            </div>
          ))
        }
        <div className="Awards">
        <h1 className='Title'>Our Awards & Recognitions</h1>
        <div className="Award-Container">
        {
          accreditationAndAwards.awards.map((item)=>(
            <div className='awards-cards'>
              <img src={item.image} alt="" />
               <div className="titleandYear">
               <h4>{item.title}</h4>
               <p>{item.year}</p>
               </div>
              <p>{item.organization}</p>
              <p>{item.description}</p>
            </div>
          ))
        }
        </div>
        </div>
      </div>
    </div>
  )
}

export default Accreditation
