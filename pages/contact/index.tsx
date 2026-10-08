import PageTitle from "@/components/PageTitle";
import Seo from "@/components/Seo";
import React from "react";
import ContactBox from "@/components/contact/ContactBox";
import MapSection from "@/components/contact/MapSection";

const Contact = () => {
  const breadcrumbPaths = [{ href: "/contact", label: "Contact" }];
  return (
    <>
      <Seo
        title="Contact Us | Oracloud"
        description="Get in touch with our team for support, inquiries, or more information about our business offerings."
      />
      <PageTitle
        title="Contact Us"
        backgroundImage="/assets/images/stock/photo-1587560699334-cc4ff634909a-w2070.webp"
      />
      <ContactBox />
      <MapSection />
    </>
  );
};

export default Contact;
