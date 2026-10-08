import PageTitle from "@/components/PageTitle";
import Seo from "@/components/Seo";
import Head from "next/head";
import React from "react";
import FaqSection, { faqGroups } from "@/components/faq/FaqSection";

// FAQPage structured data, built from the same list the page renders.
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqGroups
    .flatMap((group) => group.items)
    .map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: `${faq.answer1} ${faq.answer2}`,
      },
    })),
};

const Faq = () => {
  return (
    <>
      <Seo
        title="FAQ | Oracloud"
        description="Straight answers to the questions we hear most about Oracloud — services, pricing, project timelines, hosting, and support."
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </Head>
      <PageTitle
        title="FAQ"
        backgroundImage="/assets/images/stock/photo-1552664730-d307ca884978-w2070.webp"
      />
      <FaqSection />
    </>
  );
};

export default Faq;
