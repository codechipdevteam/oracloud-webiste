import PageTitle from "@/components/PageTitle";
import Seo from "@/components/Seo";
import React from "react";
import AboutIntro from "@/components/about/AboutIntro";
import WhyChoose from "@/components/about/WhyChoose";

const About = () => {
  return (
    <>
      <Seo
        title="About | Oracloud"
        description="Learn about Oracloud — an IT and digital marketing company helping businesses grow through technology, design and brand-building."
      />
      <PageTitle
        title="About"
        backgroundImage="/assets/images/stock/photo-1522071820081-009f0129c71c-w2070.webp"
      />
      <AboutIntro />
      <WhyChoose />
    </>
  );
};

export default About;
