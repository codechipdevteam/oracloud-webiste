// components/IntroSection.tsx
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import {
  FaHandshake,
  FaGlobe,
  FaShoppingCart,
  FaBullhorn,
  FaShieldAlt,
} from "react-icons/fa";

import TechSlider, { TechItem } from "@/components/TechSlider";

// Tech list (icons or images for AWS/Azure included)
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiAngular,
  SiVuedotjs,
  SiNodedotjs,
  SiPhp,
  SiPython,
  SiNextdotjs,
  SiLaravel,
  SiWordpress,
  SiShopify,
  SiWoocommerce,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiGraphql,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";

const topRowTech: TechItem[] = [
  { name: "HTML5", icon: <SiHtml5 /> },
  { name: "CSS3", icon: <SiCss3 /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "React", icon: <SiReact /> },
  { name: "Angular", icon: <SiAngular /> },
  { name: "Vue.js", icon: <SiVuedotjs /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "PHP", icon: <SiPhp /> },
  { name: "Python", icon: <SiPython /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
];

const bottomRowTech: TechItem[] = [
  { name: "Laravel", icon: <SiLaravel /> },
  { name: "WordPress", icon: <SiWordpress /> },
  { name: "Shopify", icon: <SiShopify /> },
  { name: "WooCommerce", icon: <SiWoocommerce /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "GraphQL", icon: <SiGraphql /> },
  { name: "AWS", icon: <FaAws /> },
  { name: "Azure", icon: <VscAzure /> },
];

const benefits = [
  {
    text: "Builds credibility and trust with customers",
    icon: <FaHandshake size={32} />,
  },
  {
    text: "Expands your reach and accessibility",
    icon: <FaGlobe size={32} />,
  },
  {
    text: "Enables online sales and customer interaction",
    icon: <FaShoppingCart size={32} />,
  },
  {
    text: "Boosts brand visibility and awareness",
    icon: <FaBullhorn size={32} />,
  },
  {
    text: "Provides a secure and professional digital presence",
    icon: <FaShieldAlt size={32} />,
  },
];

const services = [
  {
    title: "Custom-Built Websites",
    image:
      "/assets/images/stock/photo-1461749280684-dccba630e2f6-w260-h320.webp",
    list: [["Built around your brand and goals, not a template"]],
  },
  {
    title: "Responsive Design",
    image:
      "/assets/images/stock/photo-1526498460520-4c246339dccb-w260-h320.webp",
    list: [["Looks and works right on phones, tablets, and desktops"]],
  },
  {
    title: "SEO-Friendly Architecture",
    image:
      "/assets/images/stock/photo-1557264337-e8a93017fe92-w260-h320.webp",
    list: [["Optimized for visibility on search engines"]],
  },
  {
    title: "Performance-Optimized",
    image:
      "/assets/images/stock/photo-1460925895917-afdab827c52f-w260-h320.webp",
    list: [["Quick to load and stable under traffic"]],
  },
  {
    title: "Secure by Design",
    image:
      "/assets/images/stock/photo-1555949963-ff9fe0c870eb-w260-h320.webp",
    list: [
      ["Data protection, SSL integrations, and strong security practices"],
    ],
  },
  {
    title: "Conversion-Driven",
    image:
      "/assets/images/stock/photo-1551288049-bebda4e38f71-w260-h320.webp",
    list: [["Focused on user experience that drives engagement and sales"]],
  },
];

const IntroSection: React.FC = () => {
  return (
    <section className="services-two">
      <div className="services-two__shape-1" />
      <div className="container">
        <div className="services-two__top">
          <div className="section-title text-left sec-title-animation animation-style2">
            <div className="section-title__tagline-box">
              <div className="section-title__tagline-shape-1" />
              <span className="section-title__tagline">Web Development</span>
              <div className="section-title__tagline-shape-2" />
            </div>
            <h2 className="section-title__title title-animation">
              High-Performing Websites <br />
              <span>Built to Convert</span>
            </h2>
            <p className="py-3">
              Your website is the digital face of your business. It's often the
              first interaction potential customers have with your brand — and
              first impressions matter. At Oracloud, we build fast, polished
              websites that are easy to use — and designed to turn visitors
              into customers.
            </p>
            <p>
              Whether you need a simple business website, a powerful enterprise
              portal, or a fully customized platform, our web development
              services are designed to help you stand out in the digital world.
            </p>
            <h2 className="section-title__title title-animation text-center">
              Why <span>Web Development </span>
              Matters
            </h2>
            <div className="row py-5 text-center justify-content-between">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="col-md-2 d-flex flex-column align-items-center mb-4"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="benefit-icon mb-3 text-primary"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {React.cloneElement(benefit.icon, { size: 40 })}
                  </motion.div>
                  <p>{benefit.text}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="services-two__round-text-box">
            <div className="services-two__round-text-box-inner" />
          </div>
        </div>

        <div className="services-two__bottom">
          <h2 className="section-title__title title-animation text-center ">
            Our Specialty in <span>Web Development</span>
          </h2>
          <p className="text-center pb-5 pt-3">
            Fast, secure, and built to convert — that’s our standard for every
            site we ship.
          </p>
          <div className="services-two__services-list">
            {services.map((service, index) => (
              <div
                key={index}
                className={`services-two__services-list-single services-two__services-list-single-${
                  index + 1
                }`}
              >
                <div className="services-two__count-and-title">
                  <div className="services-two__count" />
                  <h3 className="services-two__title">{service.title}</h3>
                </div>

                <div className="services-two__service-list-box">
                  <ul className="services-two__services-list-inner list-unstyled">
                    {service.list.map((pair, i) => (
                      <li key={i}>
                        {pair.map((item, j) => (
                          <p key={j}>
                            <span className="icon-plus" />
                            {item}
                          </p>
                        ))}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="services-two__hover-img">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={250}
                    height={320}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <h2 className="section-title__title title-animation text-center ">
        <span>Technologies</span> We Use
      </h2>
      <TechSlider
        topRowTech={topRowTech}
        bottomRowTech={bottomRowTech}
        speedTop={35}
        speedBottom={45}
        iconSize={60}
        textClassName="text-xs mt-2"
        itemSpacing="mr-8"
      />
    </section>
  );
};

export default IntroSection;
