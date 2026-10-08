import PageTitle from "@/components/PageTitle";
import Seo from "@/components/Seo";
import React from "react";
import IntroSection from "@/components/it-services/e-commerce/IntroSection";

const ECommerce = () => {
  return (
    <>
      <Seo
        title="E-Commerce | Oracloud"
        description="E-commerce development from Oracloud — secure, scalable online stores optimized to convert and grow your sales."
      />
      <PageTitle
        title="E-Commerce"
        backgroundImage="/assets/images/stock/photo-1563013544-824ae1b704d3-w2070.webp"
      />
      <IntroSection />
    </>
  );
};

export default ECommerce;
