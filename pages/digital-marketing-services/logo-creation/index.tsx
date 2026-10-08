"use client";

import PageTitle from "@/components/PageTitle";
import Seo from "@/components/Seo";
import React from "react";
import IntroSection from "@/components/digital-marketing-services/logo-creation/IntroSection";
import Process from "@/components/digital-marketing-services/logo-creation/Process";

const LogoCreation = () => {
  return (
    <>
      <Seo
        title="Logo Creation and Brand Identity | Oracloud"
        description="Logo & brand identity design from Oracloud — memorable logos and visual identities that make your business stand out."
      />
      <PageTitle
        title="Logo Creation and Brand Identity"
        backgroundImage="/assets/images/stock/photo-1561070791-2526d30994b5-w2070.webp"
      />
      <IntroSection />
      <Process />
    </>
  );
};

export default LogoCreation;
