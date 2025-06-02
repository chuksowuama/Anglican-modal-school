import React from 'react'
import "./AcademicpageContents.css"
import overviewImg from "../../../assets/teaching in class.webp"

const Overview = () => {
  return (
    <div className='overview-section'>
      <div className=".overview-header">
        <h2 className='Title'>Academic Overview</h2>
        <p>
          At <strong>Anglican Moodal</strong>, we believe that education should ignite curiosity, foster critical thinking,
          and nurture the potential within every learner. Our academic programs are thoughtfully designed to ensure holistic development
          and lifelong learning.
        </p>
      </div>

      <div className='overview-content'>
      <div className=".overview-text ">
          <p>
            Our school curriculum balances academic rigor with creativity, allowing students to explore, question, and understand the world around them.
            We offer a structured yet flexible academic pathway that is grounded in national standards, enriched by global best practices.
            From foundational years to higher levels, every stage is built to challenge and support our learners.
          </p>
          <p>
            Teachers at Anglican Moodal are facilitators of learning—trained to adapt teaching methods to the needs of each student.
            We integrate classroom knowledge with real-world application, empowering students to think deeply and solve problems confidently.
            Learning is enhanced through technology, collaborative projects, and personalized guidance.
          </p>
        </div>

        <div className="overview-img ">
        <img src={overviewImg} alt="Academic life at Anglican Moodal" />
        </div>
      </div>
       
      <div className="overview-highlights">
        <div className="highlight">
           <h1>icon</h1>
          <h4>Innovative Learning</h4>
          <p>We combine traditional values with modern teaching strategies to engage every learner.</p>
        </div>
        <div className="highlight">
        <h1>icon</h1>
          <h4>Qualified Educators</h4>
          <p>Experienced, passionate teachers guide students with care and dedication.</p>
        </div>
        <div className="highlight">
          <h1>icon</h1>
          <h4>Future-Focused</h4>
          <p>Our programs are built to prepare students for higher education and beyond.</p>
        </div>
      </div>

    </div>
  )
}

export default Overview
