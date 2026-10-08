"use client";

import PageTitle from "@/components/PageTitle";
import Seo from "@/components/Seo";
import React from "react";
import IntroSection from "@/components/digital-marketing-services/ads-production/IntroSection";

const AdsProduction = () => {
  return (
    <>
      <Seo
        title="Commercial Advertisement Production | Oracloud"
        description="Ad production from Oracloud — creative video, audio and visual ad content that captures attention and drives results."
      />
      <PageTitle
        title="Commercial Advertisement Production"
        backgroundImage="/assets/images/stock/photo-1478720568477-152d9b164e26-w2070.webp"
      />
      <IntroSection />
    </>
  );
};

export default AdsProduction;
