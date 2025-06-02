import React from 'react'
import "./Gallerycontent.css"
import { galleryImages } from '../assets/dataAssets'

const Gallerycontent = () => {
  return (
    <div className="gallery-page">
      <header className="gallery-header">
        <h1>Anglican Modal Gallery</h1>
        <p>Moments captured from vibrant school life, exciting events, and academic milestones.</p>
      </header>

      <div className="gallery-grid">
        {galleryImages.map((item, index) => (
          <div key={index} className="gallery-item">
            <img src={item.src} alt={item.alt} />
            <p className="caption">{item.caption}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallerycontent
