import PageTitle from "@/components/PageTitle";
import Seo from "@/components/Seo";
import React from "react";
import ServicesGrid from "@/components/services/ServicesGrid";

const Services = () => {
  return (
    <>
      <Seo
        title="Our Services | Oracloud"
        description="Explore Oracloud's services — web & mobile development, cloud solutions, e-commerce and digital marketing tailored to your business goals."
      />
      <PageTitle
        title="Our Services"
        backgroundImage="/assets/images/stock/photo-1454165804606-c3d57bc86b40-w2070.webp"
      />
      <ServicesGrid />
    </>
  );
};

export default Services;
