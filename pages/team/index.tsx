import Breadcrumb from "@/components/BreadCrumb";
import PageTitle from "@/components/PageTitle";
import React from "react";
import TeamSection from "@/components/team/TeamSection";
import Seo from "@/components/Seo";

const Team = () => {
  const breadcrumbPaths = [{ href: "/team", label: "Team" }];
  return (
    <>
      <Seo
        title="Team | Oracloud"
        description="Meet the Oracloud team — the directors and specialists behind our IT and digital marketing solutions."
      />
      <PageTitle
        title="Our Team"
        backgroundImage="/assets/images/stock/photo-1522202176988-66273c2fd55f-w2070.webp"
      />
      <TeamSection />
    </>
  );
};

export default Team;
