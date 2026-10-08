import PageTitle from "@/components/PageTitle";
import Seo from "@/components/Seo";
import React from "react";
import IntroSection from "@/components/it-services/cloud-solutions/IntroSection";

const CloudSolutions = () => {
  return (
    <>
      <Seo
        title="Cloud Solutions | Oracloud"
        description="Cloud solutions from Oracloud — migration, hosting and scalable cloud infrastructure to modernize your business."
      />
      <PageTitle
        title="Cloud Solutions"
        backgroundImage="/assets/images/stock/photo-1558494949-ef010cbdcc31-w1600.webp"
      />
      <IntroSection />
    </>
  );
};

export default CloudSolutions;
