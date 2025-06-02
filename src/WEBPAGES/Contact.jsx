import React from "react";
import heroimg from "../assets/pileofbooks.jpg"
import HeroSection from "../COMPONENTS/HeroSection/HeroSection";
import Breadcrumbs from "../COMPONENTS/BreadCrumbs/Breadcrumbs";
import ContactForm from "../COMPONENTS/ContactForm/ContactForm";

const Contact = () => {
  return (
    <div>
      <HeroSection
        herosection="Otherherosection"
        heroContent="otherheroContent"
        heroimg={heroimg}
        heroTitle="Contact Us"
        heroCTA="removeherobutton"
      />
      <Breadcrumbs />
      <ContactForm/>
    </div>
  );
};

export default Contact;
