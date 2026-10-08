import PageTitle from "@/components/PageTitle";
import Seo from "@/components/Seo";
import React from "react";
import IntroSection from "@/components/it-services/mobile-app/IntroSection";

const MobileApp = () => {
  return (
    <>
      <Seo
        title="Mobile App Development | Oracloud"
        description="Mobile app development from Oracloud — high-performance native and cross-platform iOS & Android apps for your business."
      />
      <PageTitle
        title="Mobile App Development"
        backgroundImage="/assets/images/stock/photo-1512941937669-90a1b58e7e9c-w2070.webp"
      />
      <IntroSection />
    </>
  );
};

export default MobileApp;
