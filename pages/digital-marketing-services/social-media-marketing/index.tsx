"use client";

import PageTitle from "@/components/PageTitle";
import Seo from "@/components/Seo";
import React from "react";
import IntroSection from "./components/IntroSection";
import CtaBox from "@/components/CtaBox";
import FaqSection from "@/components/FaqSection";
import { FaqItem } from "@/components/FaqSection";

const socialMediaFaqs: FaqItem[] = [
  {
    question: "What does a social media marketing agency in Chalakudy do?",
    answer:
      "We take care of everything behind your social media pages: a monthly content plan, post and reel design, captions, scheduling, replies to comments and messages, and paid ads. Being based in Chalakudy, we can meet you in person, understand your local customers and respond quickly.",
  },
  {
    question: "How much do social media services cost in Kerala?",
    answer:
      "There is no single price, because every business needs something different. The cost depends on how many platforms you want managed, how many posts and reels you need each month, whether you want video shooting, and whether you run paid ads. Tell us about your business on WhatsApp or call us, and we will send a clear quote that fits your needs and budget, with no hidden charges.",
  },
  {
    question: "Do you work with businesses in Thrissur and nearby towns?",
    answer:
      "Yes. Our office is in Chalakudy, and we work with clients in Thrissur, Irinjalakuda, Kodakara, Angamaly and Kochi. We handle meetings through calls, video chats or visits, and you get a monthly report wherever you are.",
  },
  {
    question: "Which platforms do you manage, and do you run ads?",
    answer:
      "We manage Facebook, Instagram, YouTube, LinkedIn and X (Twitter). We also run targeted Facebook and Instagram ads for leads, calls and store visits. The ad budget you pay to Meta is separate from our service fee.",
  },
  {
    question: "How soon can I see results?",
    answer:
      "Most businesses see better-looking pages and steadier engagement in the first month. Growth in followers and enquiries usually takes 2 to 3 months of consistent posting and ads. We share a monthly report so you can see exactly what is working.",
  },
];

const SocialMediaMarketing = () => {
  return (
    <>
      <Seo
        title="Social Media Marketing Agency  in Chalakudy | Oracloud"
        description="Social media marketing agency in Chalakudy, serving Thrissur and Kerala. Social media management, content, design and ads. Call or WhatsApp for a free quote."
        canonical="https://www.oracloud.in/digital-marketing-services/social-media-marketing/"
      />
      <PageTitle
        breadcrumbsText="Social Media Marketing"
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
            ctaText="Call Now"
            ctaHref="/contact"
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
