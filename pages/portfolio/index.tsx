import Breadcrumb from "@/components/BreadCrumb";
import PageTitle from "@/components/PageTitle";
import Seo from "@/components/Seo";
import React from "react";
import GalleryShowcase from "@/components/portfolio/PortfolioList";
import PortfolioList from "@/components/portfolio/PortfolioList";

const Portfolio = () => {
  return (
    <>
      <Seo
        title="Portfolio | Oracloud"
        description="See Oracloud's portfolio — web, app and digital marketing projects delivered for clients across industries."
      />
      <PageTitle
        title="Portfolio"
        backgroundImage="/assets/images/stock/photo-1467232004584-a241de8bcf5d-w2070.webp"
      />
      <PortfolioList />
    </>
  );
};

export default Portfolio;
