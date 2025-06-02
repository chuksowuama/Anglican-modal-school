import React from "react";
import heroimg from "../assets/pileofbooks.jpg"
import HeroSection from "../COMPONENTS/HeroSection/HeroSection";
import Breadcrumbs from "../COMPONENTS/BreadCrumbs/Breadcrumbs";
import Ctabanner from "../CTA-banner/Ctabanner";
import Gallerycontent from "../GalleryContent/Gallerycontent";

const Gallery = () => {
  return (
    <div>
      <HeroSection
        herosection="Otherherosection"
        heroContent="otherheroContent"
        heroimg={heroimg}
        heroTitle="Gallery"
        heroCTA="removeherobutton"
      />
      <Breadcrumbs />
      <Gallerycontent/>
      <Ctabanner/>
    </div>
  );
};

export default Gallery;
