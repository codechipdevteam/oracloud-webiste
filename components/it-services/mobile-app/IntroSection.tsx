// components/IntroSection.tsx
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import {
  FaMobileAlt,
  FaShoppingBag,
  FaBell,
  FaGlobeAmericas,
  FaLock,
} from "react-icons/fa";

import TechSlider, { TechItem } from "@/components/TechSlider";

import {
  SiFlutter,
  SiNodedotjs,
  SiPhp,
  SiPython,
  SiGraphql,
  SiMysql,
  SiMongodb,
  SiGooglemaps,
  SiStripe,
  SiRazorpay,
  SiFirebase,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const topRowTech: TechItem[] = [
  { name: "React Native", icon: <TbBrandReactNative /> },
  { name: "Flutter", icon: <SiFlutter /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "PHP", icon: <SiPhp /> },
  { name: "Python", icon: <SiPython /> },
  { name: "GraphQL", icon: <SiGraphql /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Google Maps", icon: <SiGooglemaps /> },
  { name: "Stripe", icon: <SiStripe /> },
  { name: "Razorpay", icon: <SiRazorpay /> },
  { name: "Push Notifications", icon: <SiFirebase /> },
];

const benefits = [
  {
    title: "Stay Connected",
    text: "Build stronger customer relationships through instant accessibility on mobile devices",
    icon: <FaMobileAlt size={32} />,
  },
  {
    title: "Boost Sales",
    text: "Enable easy browsing, shopping, and payments from mobile devices",
    icon: <FaShoppingBag size={32} />,
  },
  {
    title: "Enhanced Engagement",
    text: "Send push notifications, personalized offers, and real-time updates to customers",
    icon: <FaBell size={32} />,
  },
  {
    title: "Expand Reach",
    text: "Reach a global audience with user-friendly mobile experiences",
    icon: <FaGlobeAmericas size={32} />,
  },
  {
    title: "Secure Transactions",
    text: "Provide safe and reliable platforms that customers can trust",
    icon: <FaLock size={32} />,
  },
];

const services = [
  {
    title: "Native Mobile Apps",
    image:
      "/assets/images/stock/photo-1607252650355-f7fd0460ccdb-w260-h320.webp",
    list: [["High-performance apps built specifically for iOS and Android"]],
  },
  {
    title: "Cross-Platform Apps",
    image:
      "/assets/images/stock/photo-1551650975-87deedd944c3-w260-h320.webp",
    list: [["One build, multiple platforms using React Native & Flutter"]],
  },
  {
    title: "Enterprise Apps",
    image:
      "/assets/images/stock/photo-1559526324-593bc073d938-w260-h320.webp",
    list: [
      [
        "Tailored apps for business operations, employee management, and workflow automation",
      ],
    ],
  },
  {
    title: "E-Commerce Apps",
    image:
      "/assets/images/stock/photo-1522125670776-3c7abb882bc2-w260-h320.webp",
    list: [
      ["Mobile stores with secure payments and seamless product browsing"],
    ],
  },
  {
    title: "UI/UX Excellence",
    image:
      "/assets/images/stock/photo-1601784551446-20c9e07cdbdb-w260-h320.webp",
    list: [["Intuitive designs focused on customer engagement and usability"]],
  },
  {
    title: "Scalable & Secure",
    image:
      "/assets/images/stock/photo-1587620962725-abab7fe55159-w260-h320.webp",
    list: [
      [
        "Apps built to grow with your business while ensuring maximum data protection",
      ],
    ],
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
              <span className="section-title__tagline">
                Mobile App Development
              </span>
              <div className="section-title__tagline-shape-2" />
            </div>
            <h2 className="section-title__title title-animation">
              Mobile Apps Your Customers <br />
              <span>Love to Use</span>
            </h2>
            <p className="py-3">
              Your customers spend hours a day on their phones — shopping,
              learning, booking, paying. A mobile app puts your business inside
              that daily routine: open around the clock and one tap away.
            </p>
            <p>
              At Oracloud, we build apps for iOS and Android that feel
              effortless to use, hold up as your user base grows, and keep
              customer data safe.
            </p>
            <h2 className="section-title__title title-animation text-center">
              Why <span>Mobile Apps </span>
              Matter for Your Business
            </h2>
            <div className="row py-5 text-center justify-content-center">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="col-md-4 d-flex flex-column align-items-center mb-4 text-center"
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
                  <h5 className="mb-2">{benefit.title}</h5>
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
            Our Specialty in <span>Mobile Apps</span>
          </h2>
          <p className="text-center pb-5 pt-3">
            From first wireframe to app-store launch, we sweat the details your
            users notice.
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
        speedTop={35}
        iconSize={60}
        textClassName="text-xs mt-2"
        itemSpacing="mr-8"
      />
    </section>
  );
};

export default IntroSection;
