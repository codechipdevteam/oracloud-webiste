// components/IntroSection.tsx
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import {
  FaChartLine,
  FaLock,
  FaChartBar,
  FaBolt,
  FaOpencart,
} from "react-icons/fa";

import TechSlider, { TechItem } from "@/components/TechSlider";

import {
  SiShopify,
  SiWoocommerce,
  SiLaravel,
  SiNodedotjs,
  SiDjango,
  SiReact,
  SiAngular,
  SiVuedotjs,
  SiNextdotjs,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiStripe,
  SiPaypal,
  SiRazorpay,
  SiLetsencrypt,
} from "react-icons/si";

import { FaAws } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import { SiGooglecloud } from "react-icons/si";
import { TbHours24 } from "react-icons/tb";

const topRowTech: TechItem[] = [
  { name: "Shopify", icon: <SiShopify /> },
  { name: "WooCommerce", icon: <SiWoocommerce /> },
  { name: "OpenCart", icon: <FaOpencart /> },
  { name: "Laravel", icon: <SiLaravel /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "Django", icon: <SiDjango /> },
  { name: "React", icon: <SiReact /> },
  { name: "Angular", icon: <SiAngular /> },
  { name: "Vue.js", icon: <SiVuedotjs /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
];

const bottomRowTech: TechItem[] = [
  { name: "MySQL", icon: <SiMysql /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "Stripe", icon: <SiStripe /> },
  { name: "PayPal", icon: <SiPaypal /> },
  { name: "Razorpay", icon: <SiRazorpay /> },
  { name: "SSL", icon: <SiLetsencrypt /> },
  { name: "AWS", icon: <FaAws /> },
  { name: "Azure", icon: <VscAzure /> },
  { name: "Google Cloud", icon: <SiGooglecloud /> },
];

const benefits = [
  {
    text: "24/7 Storefront: Your business is always open for customers around the world",
    icon: <TbHours24 size={32} />,
  },
  {
    text: "Scalability: Easily expand your product offerings and markets",
    icon: <FaChartLine size={32} />,
  },
  {
    text: "Secure Transactions: Safe payment gateways to build customer trust",
    icon: <FaLock size={32} />,
  },
  {
    text: "Customer Insights: Track buying behaviors and optimize sales strategies",
    icon: <FaChartBar size={32} />,
  },
  {
    text: "Improved Efficiency: Automate inventory, orders, and delivery systems",
    icon: <FaBolt size={32} />,
  },
];

const services = [
  {
    title: "Custom Online Stores",
    image:
      "/assets/images/stock/photo-1586880244406-556ebe35f282-w260-h320.webp",
    list: [["Tailored storefronts to reflect your brand identity"]],
  },
  {
    title: "Payment Gateway Integration",
    image:
      "/assets/images/stock/photo-1556742049-0cfed4f6a45d-w260-h320.webp",
    list: [["Secure options like Stripe, PayPal, Razorpay, and more"]],
  },
  {
    title: "Inventory & Order Management",
    image:
      "/assets/images/stock/photo-1578575437130-527eed3abbec-w260-h320.webp",
    list: [["Real-time tracking of products and logistics"]],
  },
  {
    title: "Mobile-Friendly Shopping",
    image:
      "/assets/images/stock/photo-1556740738-b6a63e27c4df-w260-h320.webp",
    list: [["Optimized for smartphones and tablets"]],
  },
  {
    title: "Multi-Vendor Platforms",
    image:
      "/assets/images/stock/photo-1607083206869-4c7672e72a8a-w260-h320.webp",
    list: [["Enable multiple sellers to showcase and sell products"]],
  },
  {
    title: "SEO & Marketing Integration",
    image:
      "/assets/images/stock/photo-1460925895917-afdab827c52f-w260-h320.webp",
    list: [["Built-in tools to drive traffic and boost sales"]],
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
              <span className="section-title__tagline">E-Commerce</span>
              <div className="section-title__tagline-shape-2" />
            </div>
            <h2 className="section-title__title title-animation">
              Online Stores That Sell <br />
              <span>Around the Clock</span>
            </h2>
            <p className="py-3">
              A good online store does what a great salesperson does in person:
              welcomes the customer, answers their doubts, and makes buying
              easy. The difference is that a store never closes — it sells to
              anyone, anywhere, around the clock.
            </p>
            <p>
              Whether you’re opening your first online store or scaling an
              established catalogue, Oracloud builds the platform to match —
              and grows it with you.
            </p>
            <h2 className="section-title__title title-animation text-center">
              Why <span>E-Commerce </span>
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
            Our Specialty in <span>E-Commerce </span>
          </h2>
          <p className="text-center pb-5 pt-3">
            Storefront, payments, inventory, delivery — we build the whole
            selling machine.
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
