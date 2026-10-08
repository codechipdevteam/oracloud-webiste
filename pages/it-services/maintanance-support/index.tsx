import PageTitle from "@/components/PageTitle";
import Seo from "@/components/Seo";
import React from "react";
import IntroSection from "@/components/it-services/maintanance-support/IntroSection";

const MaintananceSupport = () => {
  return (
    <>
      <Seo
        title="Maintenance & Support | Oracloud"
        description="IT maintenance & support from Oracloud — reliable updates, monitoring and technical support to keep your systems running."
      />
      <PageTitle
        title="Maintenance & Support"
        backgroundImage="/assets/images/stock/photo-1517430816045-df4b7de11d1d-w2070.webp"
      />
      <IntroSection />
    </>
  );
};

export default MaintananceSupport;
