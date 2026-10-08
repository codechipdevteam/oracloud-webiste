"use client";

import PageTitle from "@/components/PageTitle";
import Seo from "@/components/Seo";
import React from "react";
import IntroSection from "@/components/digital-marketing-services/digital-marketing/IntroSection";

const DigitalMarketing = () => {
  return (
    <>
      <Seo
        title="Digital Marketing & PR | Oracloud"
        description="Digital marketing from Oracloud — SEO, social media and performance campaigns that grow your brand online."
      />
      <PageTitle
        title="Digital Marketing & PR"
        backgroundImage="/assets/images/stock/photo-1460925895917-afdab827c52f-w2070.webp"
      />
      <IntroSection />
    </>
  );
};

export default DigitalMarketing;
