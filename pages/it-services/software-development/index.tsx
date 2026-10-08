import PageTitle from "@/components/PageTitle";
import Seo from "@/components/Seo";
import React from "react";
import IntroSection from "@/components/it-services/software-development/IntroSection";

const SoftwareDevelopment = () => {
  return (
    <>
      <Seo
        title="Software Development | Oracloud"
        description="Custom software development from Oracloud — tailored applications and systems built around your business processes."
      />
      <PageTitle
        title="Software Development"
        backgroundImage="/assets/images/stock/photo-1542831371-29b0f74f9713-w2070.webp"
      />
      <IntroSection />
    </>
  );
};

export default SoftwareDevelopment;
