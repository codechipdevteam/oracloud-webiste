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
    title: "The Creative Process",
    text: `Every social media campaign begins with detailed planning: analysis of business goals,
    audience preferences, and unique brand characteristics. Designers propose creative ideas for posts,
    banners, and infographics, blending visual style with strategic text to maximize reach.
    Content calendars are mapped out for schools, colleges, and businesses to maintain
    consistent digital presence and event-based campaigns.`,
    image: "/assets/images/resources/creative-process.png",
  },
  {
    title: "Custom Social Media Kits",
    text: `Clients can order comprehensive "social media kits" personalized
    for brand, institution, or campaign—including:`,
    list: [
      "Profile and page graphics",
      "Custom-designed icons and emoji sets",
      "Infographics and story templates",
      "Ad post banners and video snippets",
      "Motion graphics and animations for announcements or celebrations",
    ],
    image: "/assets/images/resources/social-media-kit.png",
  },
  {
    title: "Business Benefits",
    text: ``,
    list: [
      "Immediate audience engagement and higher interaction rates",
      "Consistent brand identity across social channels",
      "Direct communication with students, parents, and business clients",
      "Improved visibility for events, campaigns, and achievements",
      "Efficient reputation management and community building online",
    ],
    image: "/assets/images/resources/business-benefits.png",
  },
  {
    title: "Affordable Packages & Fast Delivery",
    text: `Oracloud’s packages range from monthly graphics subscriptions for schools and colleges to
custom single-project orders for businesses. Every package includes fast production, quality
assurance, and options for client feedback—ensuring each post is polished and appealing.`,
    image: "/assets/images/resources/affordable.png",
  },
];

const socialServices = [
  {
    name: "Facebook",
    icon: <FaFacebookF size={32} />,
    description:
      "Profile optimization, cover/header design, custom post banners, event flyers, and motion graphics.",
  },
  {
    name: "Instagram",
    icon: <FaInstagram size={32} />,
    description:
      "Striking photos, branded story templates, reels covers, and interactive highlights.",
  },
  {
    name: "X (Twitter)",
    icon: <FaTwitter size={32} />,
    description:
      "Header graphics, tweet visuals, and campaign icons for more visibility and retweets.",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedinIn size={32} />,
    description:
      "Company page enhancement, business infographics, and professional updates.",
  },
  {
    name: "YouTube",
    icon: <FaYoutube size={32} />,
    description:
      "Channel cover creation, custom thumbnails, video intros, and educational visuals.",
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
              <div className="why-choose-two__img">
                <Image
                  src="/assets/images/resources/why-choose-two-img-1.png"
                  alt="Why Choose Us"
                  width={570}
                  height={596}
                />
              </div>
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
                  Social Media Design & Content Creation
                </h2>
              </div>

              <p className="why-choose-one__text mb-3">
                Every post that goes out under your name is a small ad for your
                brand. Oracloud designs them like it — professional visuals and
                layouts, sized and styled for each platform, so your feed looks
                as good as your business is.
              </p>
              <h4 className="mb-2">Why Social Media Design Matters</h4>
              <p className="why-choose-one__text">
                People scroll past hundreds of posts a day — polished, on-brand
                visuals are what make them stop at yours. Consistent design
                builds recognition and trust over time, turning casual scrollers
                into followers, and followers into customers.
              </p>
            </div>
          </div>
          <div className="row intro-row justify-content-center pb-4">
            {socialServices.map((service, index) => (
              <div className="col-md-4 text-center mb-4" key={index}>
                <div className="icon mb-3">{service.icon}</div>
                <div className="content pt-3">
                  <h4 className="py-2">{service.name}</h4>
                  <p>{service.description}</p>
                </div>
              </div>
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
      </div>
    </section>
  );
};

export default IntroSection;
