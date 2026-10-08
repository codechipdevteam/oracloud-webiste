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
  FaExpandAlt,
  FaMoneyBillWave,
  FaShieldAlt,
  FaBolt,
  FaUsers,
  FaAws,
} from "react-icons/fa";

import TechSlider, { TechItem } from "@/components/TechSlider";

import {
  SiGooglecloud,
  SiDocker,
  SiJenkins,
  SiGitlab,
  SiFirebase,
  SiMongodb,
  SiAmazonrds,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { DiMsqlServer } from "react-icons/di";

const topRowTech: TechItem[] = [
  { name: "AWS", icon: <FaAws /> },
  { name: "Microsoft Azure", icon: <VscAzure /> },
  { name: "Google Cloud", icon: <SiGooglecloud /> },
  { name: "Docker", icon: <SiDocker /> },
  { name: "Jenkins", icon: <SiJenkins /> },
  { name: "GitLab CI/CD", icon: <SiGitlab /> },
  { name: "Amazon RDS", icon: <SiAmazonrds /> },
  { name: "Firestore", icon: <SiFirebase /> },
  { name: "MongoDB Atlas", icon: <SiMongodb /> },
  { name: "Azure SQL", icon: <DiMsqlServer /> },
];

const benefits = [
  {
    title: "Scalability",
    text: "Quickly expand or reduce resources as per business demand",
    icon: <FaExpandAlt size={32} />,
  },
  {
    title: "Cost-Effective",
    text: "Pay only for what you use — no heavy upfront investment",
    icon: <FaMoneyBillWave size={32} />,
  },
  {
    title: "Security",
    text: "Advanced encryption, backups, and compliance standards",
    icon: <FaShieldAlt size={32} />,
  },
  {
    title: "Accessibility",
    text: "Access data and apps from anywhere, anytime",
    icon: <FaGlobeAmericas size={32} />,
  },
  {
    title: "Performance",
    text: "Faster load times and seamless user experiences",
    icon: <FaBolt size={32} />,
  },
  {
    title: "Collaboration",
    text: "Enable teams to work together in real-time, globally",
    icon: <FaUsers size={32} />,
  },
];

const services = [
  {
    title: "Cloud Migration Services",
    image:
      "/assets/images/stock/photo-1451187580459-43490279c0fa-w260-h320.webp",
    list: [["A planned, low-risk move from on-premise to cloud"]],
  },
  {
    title: "Cloud Infrastructure Setup",
    image:
      "/assets/images/stock/photo-1544197150-b99a580bb7a8-w260-h320.webp",
    list: [["Custom architecture for storage, networking, and databases"]],
  },
  {
    title: "DevOps & Automation",
    image:
      "/assets/images/stock/photo-1542831371-29b0f74f9713-w260-h320.webp",
    list: [["Faster deployment and monitoring with CI/CD pipelines"]],
  },
  {
    title: "Cloud Security & Compliance",
    image:
      "/assets/images/stock/photo-1555949963-ff9fe0c870eb-w260-h320.webp",
    list: [["Ensuring safety, GDPR, HIPAA, and ISO compliance"]],
  },
  {
    title: "Hybrid & Multi-Cloud Solutions",
    image:
      "/assets/images/stock/photo-1520869562399-e772f042f422-w260-h320.webp",
    list: [["Flexibility to use AWS, Azure or private clouds"]],
  },
  {
    title: "Cloud Backup & Disaster Recovery",
    image:
      "/assets/images/stock/photo-1484557052118-f32bd25b45b5-w260-h320.webp",
    list: [["Secure backup systems to prevent data loss"]],
  },
  {
    title: "SaaS, PaaS & IaaS Solutions",
    image:
      "/assets/images/stock/photo-1526498460520-4c246339dccb-w260-h320.webp",
    list: [["Tailored services to fit your business model"]],
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
              <span className="section-title__tagline">Cloud Solutions</span>
              <div className="section-title__tagline-shape-2" />
            </div>
            <h2 className="section-title__title title-animation">
              Secure, Scalable <br />
              <span>Cloud Solutions for Growth</span>
            </h2>
            <p className="py-3">
              Servers in your office age, break, and cap your growth. The cloud
              replaces them with computing power you rent as you need it —
              storage, databases, networking, and software that scale up on
              demand and never need a hardware refresh.
            </p>
            <p>
              At Oracloud, we handle the move end to end — and set you up with
              infrastructure that’s secure, sized to your needs, and priced to
              match.
            </p>
            <h2 className="section-title__title title-animation text-center">
              Why <span>Cloud Solutions</span> Matter
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
            Our Specialties in <span>Cloud Solutions</span>
          </h2>
          <p className="text-center pb-5 pt-3">
            We plan your migration, run your infrastructure, and keep your
            costs predictable.
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
