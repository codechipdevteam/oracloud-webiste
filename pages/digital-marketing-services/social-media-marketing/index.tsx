"use client";

import Head from "next/head";
import PageTitle from "@/components/PageTitle";
import Seo from "@/components/Seo";
import React from "react";
import IntroSection from "./components/IntroSection";
import CtaBox from "@/components/CtaBox";
import FaqSection from "@/components/FaqSection";
import { socialMediaFaqs } from "@/lib/data/socialMediaFaqs";
import {
  serializeJsonLd,
  socialMediaMarketingSchema,
} from "@/lib/seo/schema";

const SocialMediaMarketing = () => {
  return (
    <>
      <Head>
        {/* Structured data for this route only: Organization, ProfessionalService,
            WebSite, WebPage, BreadcrumbList, Service and FAQPage. The Organization
            and ProfessionalService nodes reuse the site-wide `@id`s so they merge
            with the markup in _document.tsx instead of duplicating the business. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: serializeJsonLd(socialMediaMarketingSchema),
          }}
        />
      </Head>
      <Seo
        title="Social Media Marketing Agency in Chalakudy | Oracloud"
        description="Social media marketing agency in Chalakudy, serving Thrissur and Kerala. Social media management, content, design and ads. Call or WhatsApp for a free quote."
        canonical="https://www.oracloud.in/digital-marketing-services/social-media-marketing/"
      />
      <PageTitle
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Social Media Marketing" },
        ]}
        title="Social Media Marketing & Management Services in Chalakudy "
        backgroundImage="/assets/images/stock/photo-1611926653458-09294b3142bf-w2070.webp"
      />
      <IntroSection />

      <section style={{ padding: "0 0 80px" }}>
        <div className="container">
          <CtaBox
            tag="Ready to Grow?"
            heading="Our Social Media Agency in Chalakudy, Serving Thrissur and Kerala"
            description="Our office is at Swarnam Arcade, Anamala Junction, Chalakudy, and we work with local shops, clinics, restaurants, schools and colleges around us. We also manage social media for clients in Thrissur, Irinjalakuda, Kodakara, Angamaly and Kochi, and across Kerala through calls, video meetings and regular reports."
            ctaText="WhatsApp Us"
            ctaHref="https://wa.me/917034302111"
            ctaVariant="whatsapp"
            lottieSrc="/animations/cta2.lottie"
            lottieWidth={320}
            lottieHeight={320}
            lottieLoop={true}
          />
        </div>
      </section>
      <FaqSection
        tag="FAQS"
        heading="Frequently Asked"
        headingAccent="Questions"
        description="Everything you need to know about our social media marketing services, packages, and how we help brands grow online."
        items={socialMediaFaqs}
        defaultOpen={0}
        showContact={true}
        contactLabel="Need Help?"
        contactPhone="+91 7034 302 111"
        contactHref="tel:+917034302111"
      />
    </>
  );
};

export default SocialMediaMarketing;
