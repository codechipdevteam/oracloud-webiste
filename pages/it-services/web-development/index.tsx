import PageTitle from "@/components/PageTitle";
import Seo from "@/components/Seo";
import React from "react";
import IntroSection from "@/components/it-services/web-development/IntroSection";

const WebDevelopment = () => {
  return (
    <>
      <Seo
        title="Web Development | Oracloud"
        description="Custom web development from Oracloud — fast, responsive, SEO-friendly websites and web apps built to grow your business."
      />
      <PageTitle
        title="Web Development"
        backgroundImage="/assets/images/backgrounds/web-dev.webp"
      />
      <IntroSection />
    </>
  );
};

export default WebDevelopment;
