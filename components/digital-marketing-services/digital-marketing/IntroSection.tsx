// components/IntroSection.tsx
"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

interface ContentItem {
  title: string;
  text: string;
  list?: string[];
  image: string;
}

const contents: ContentItem[] = [
  {
    title: "Public Relations (PR) Services",
    text: `Our PR team helps shape positive public perception and actively manages client reputations. Services include:`,
    list: [
      "Strategic media relations and press release distribution",
      "Brand messaging and story development",
      "Event publicity and coverage for schools, colleges, and businesses",
      "Reputation management and crisis communications",
      "Influencer outreach and community building",
    ],
    image: "/assets/images/resources/public-relations.png",
  },
  {
    title: "Benefits of Oracloud's Digital Marketing & PR",
    text: ``,
    list: [
      "Targeted, data-driven campaigns for every channel",
      "Measurable growth in website visitors, lead generation, and engagement",
      "Proactive brand reputation management and consistent messaging",
      "Turnkey solutions for busy schools, colleges, and growing businesses",
    ],
    image: "/assets/images/resources/benefits.png",
  },
];

const socialServices = [
  {
    name: "Search Engine Optimization (SEO)",
    image: "/assets/images/icon/seo.png",
    description:
      "Improve your website's ranking on Google and other search engines with in-depth on-page and off-page SEO. Services include keyword research, internal link building, mobile optimization, schema markup, image optimization, and rich snippet integration.",
  },
  {
    name: "Social Media Marketing",
    image: "/assets/images/icon/social-media.png",
    description:
      "Grow your social media presence on Facebook, Instagram, LinkedIn, and YouTube through targeted ad campaigns, post planning, engagement strategies, influencer collaborations, and custom content calendars.",
  },
  {
    name: "Digital Advertising",
    image: "/assets/images/icon/digital-marketing.png",
    description:
      "Launch and manage Google Ads, Facebook Ads, and pay-per-click campaigns with compelling visuals, audience targeting, and ROI tracking. Our campaigns are structured for conversions.",
  },
  {
    name: "Content Marketing & Copywriting",
    image: "/assets/images/icon/content-marketing.png",
    description:
      "Develop informative, SEO-optimized blog posts, web content, and press releases. Fresh and relevant content positions your brand as an expert and helps improve organic traffic.",
  },
  {
    name: "Email Marketing",
    image: "/assets/images/icon/email-marketing.png",
    description:
      "Establish direct relationships with subscribers, parents, or customers using branded email campaigns for updates, offers, event invitations, and follow-ups.",
  },
  {
    name: "Website Design & Technical Optimizations",
    image: "/assets/images/icon/web-design.png",
    description:
      "Create or revamp custom websites optimized for user experience, speed, and mobile access. We ensure every site is secure, attractive, and easy to manage as your main digital storefront.",
  },
  {
    name: "Visual Content Creation",
    image: "/assets/images/icon/visual-content.png",
    description:
      "Produce graphics, infographics, explainer videos, ad banners, product promo visuals, and branded animation for all marketing channels.",
  },
  {
    name: "E-Commerce Marketing",
    image: "/assets/images/icon/ecommerce.png",
    description:
      "Tailored digital solutions for e-commerce, including product page SEO, image retouching, sales funnel setup, and conversion rate optimization.",
  },
];

// Animation variants
const textVariant = (fromLeft: boolean) => ({
  hidden: { opacity: 0, x: fromLeft ? -50 : 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
});

const imageVariant = (fromLeft: boolean) => ({
  hidden: { opacity: 0, x: fromLeft ? 50 : -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
});

const listContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 }, // delay each list item
  },
};

const listItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};
const IntroSection: React.FC = () => {
  return (
    <section className="why-choose-two">
      {/* Floating Shapes */}
      <div className="why-choose-two__shape-1 float-bob-y">
        <img
          src="/assets/images/shapes/why-choose-two-shape-1.png"
          alt="shape"
        />
      </div>
      <div className="why-choose-two__shape-2"></div>
      <div className="why-choose-two__shape-3"></div>
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column - Image */}
          <div className="col-xl-6">
            <div
              className="why-choose-two__left wow slideInLeft"
              data-wow-delay="100ms"
              data-wow-duration="2500ms"
            >
              {/* <div className="why-choose-two__img"> */}
              <Image
                src="/assets/images/resources/digital-marketing.webp"
                alt="Why Choose Us"
                width={570}
                height={596}
              />
              {/* </div> */}
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="col-xl-6">
            <div className="why-choose-two__right">
              <div className="section-title text-left sec-title-animation animation-style2">
                {/* <div className="section-title__tagline-box">
                  <div className="section-title__tagline-shape-1"></div>
                  <span className="section-title__tagline">Why Choose Us</span>
                  <div className="section-title__tagline-shape-2"></div>
                </div> */}
                <h2 className="section-title__title title-animation">
                  Digital Marketing & PR
                </h2>
              </div>

              <p className="why-choose-one__text mb-3">
                Getting noticed online takes more than posting and hoping.
                Oracloud runs the whole engine — SEO, ads, content, and PR — as
                one coordinated effort, so schools, colleges, and businesses
                across Kerala get found, get talked about, and get enquiries
                they can count.
              </p>
            </div>
          </div>
          <div className="row content-row2 justify-content-center pb-4">
            {socialServices.map((service, index) => (
              <motion.div
                key={index}
                className="col-md-6 text-center mb-4"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                custom={index}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                }}
              >
                <div className="content-card p-3 h-100 d-flex flex-column align-items-center">
                  <motion.div
                    className="icon mb-3"
                    whileHover={{ rotate: 10 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <Image
                      src={service.image}
                      alt={service.name}
                      width={64}
                      height={64}
                    />
                  </motion.div>
                  <div className="content pt-3">
                    <h4 className="py-2">{service.name}</h4>
                    <p>{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        {contents.map((item, index) => {
          const reverse = index % 2 !== 0; // alternate layout
          return (
            <div
              key={index}
              className={`row align-items-center content-row ${
                reverse ? "flex-md-row-reverse" : ""
              }`}
            >
              {/* Text */}
              <motion.div
                className="col-md-7"
                variants={textVariant(!reverse)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <h2>{item.title}</h2>
                <p>{item.text}</p>

                {item.list && (
                  <motion.ul
                    variants={listContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    {item.list.map((point, i) => (
                      <motion.li key={i} variants={listItem}>
                        {point}
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </motion.div>

              {/* Image */}
              <motion.div
                className="col-md-5"
                variants={imageVariant(!reverse)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <img src={item.image} width={512} height={512} className="img-fluid" alt={item.title} />
              </motion.div>
            </div>
          );
        })}
        <motion.h3
          className="pt-3"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          Every part of your digital growth, handled by one team — that’s why
          schools, colleges, and businesses across Kerala stay with Oracloud
          year after year.
        </motion.h3>{" "}
      </div>
    </section>
  );
};

export default IntroSection;
