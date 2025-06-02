import React from 'react'
import heroimg from "../assets/HerosectionImg.webp";
// import heroimg from "../assets/Herosectionimgg..webp";
import HeroSection from '../COMPONENTS/HeroSection/HeroSection'
import Mission from '../COMPONENTS/HomepageMission/Mission'
import Testimonial from '../TestimonialComponent/Testimonial'
import Carousel from '../COMPONENTS/Carousel/Carousel'
import FeaturedPrograms from '../FeaturedPrograms/FeaturedPrograms'
import Ctabanner from '../CTA-banner/Ctabanner'

const Homepage = () => {
  return (
   <>
   <div>
    <HeroSection
    herosection="herosection"
    heroimg={heroimg}
    heroContent="heroContent"
    heroTitle="Rooted in Faith. Growing in Wisdom"
    heroSub=" At AnglicanModal, we guide students with excellence in academics, character, and spiritual growth from the foundational years to senior school."
    subqoute="📖 “Train up a child in the way he should go...” — Proverbs 22:6"
    heroCTA="heroCTA"
    tourl="/about-us"
    Link="Learn More"
    />
    <Mission/>
     <Carousel/>
     <FeaturedPrograms/>
    {/* <Testimonial/> */}
    <Ctabanner/>
   </div>
   </>
  )
}

export default Homepage
