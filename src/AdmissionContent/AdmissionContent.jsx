import React from 'react'
import "./AdmissionsContent.css"

const AdmissionContent = () => {
  return (
      <div className="admission-page">
      <section className="admission-hero">
        <h1>Join the Anglican Modal Family</h1>
        <p>Discover a nurturing environment where academic excellence and character development go hand-in-hand.</p>
      </section>

      <section className="why-choose-us">
        <h2>Why Choose Us?</h2>
        <div className="reasons-grid">
          <div className="reason-card">🌱 Holistic Development</div>
          <div className="reason-card">🏫 Modern Facilities</div>
          <div className="reason-card">🎓 Proven Academic Success</div>
        </div>
      </section>

      <section className="admission-process">
        <h2>Our Admission Process</h2>
        <ol>
          <li>Submit application form online or in-person</li>
          <li>Provide necessary documents</li>
          <li>Attend an interview or assessment (if required)</li>
          <li>Receive admission decision</li>
        </ol>
      </section>

      <section className="admission-requirements">
        <h2>Admission Requirements</h2>
        <ul>
          <li>Birth certificate copy</li>
          <li>Passport-sized photos</li>
          <li>Previous school transcript or report</li>
          <li>Completed application form</li>
        </ul>
        <button><a href="">📄 Download Application Form</a></button>
      </section>

      <section className="tuition-section">
        <h2>Tuition & Scholarships</h2>
        <p>We offer transparent fee structures and scholarship opportunities for outstanding students.</p>
        <ul>
          <li>💰 Tuition is payable per term</li>
          <li>🎓 Academic merit and need-based scholarships available</li>
        </ul>
      </section>

      <section className="contact-admissions">
        <h2>Contact Our Admissions Office</h2>
        <p>📍 Office Hours: Mon–Fri, 8am – 4pm</p>
        <p>📧 Email: admissions@anglicanmoodal.edu.ng</p>
        <p>📞 Phone: +234 123 456 7890</p>
      </section>
    </div>
  )
}

export default AdmissionContent

