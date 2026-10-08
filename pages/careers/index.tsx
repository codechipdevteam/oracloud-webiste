import PageTitle from "@/components/PageTitle";
import Seo from "@/components/Seo";
import React from "react";
import CareersSection from "@/components/careers/CareersSection";

const Careers = () => {
  return (
    <>
      <Seo
        title="Careers | Oracloud"
        description="Join the Oracloud team in Chalakudy — we build websites, apps, cloud systems and marketing campaigns. Email connect@oracloud.in to apply."
      />
      <PageTitle
        title="Careers"
        backgroundImage="/assets/images/stock/photo-1531482615713-2afd69097998-w2070.webp"
      />
      <CareersSection />
    </>
  );
};

export default Careers;
