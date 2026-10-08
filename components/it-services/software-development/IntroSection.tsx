// components/IntroSection.tsx
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import {
  FaBolt,
  FaChartBar,
  FaTools,
  FaExpand,
  FaShieldAlt,
} from "react-icons/fa";

import TechSlider, { TechItem } from "@/components/TechSlider";

import {
  SiPython,
  SiPhp,
  SiJavascript,
  SiTypescript,
  SiLaravel,
  SiNodedotjs,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiReact,
  SiVuedotjs,
  SiNextdotjs,
  SiGooglecloud,
  SiGraphql,
  SiDocker,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { MdArchitecture } from "react-icons/md";
import { FaAws } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import { DiMsqlServer } from "react-icons/di";

const topRowTech: TechItem[] = [
  { name: "Python", icon: <SiPython /> },
  { name: "PHP", icon: <SiPhp /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Laravel", icon: <SiLaravel /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "ReactJS", icon: <SiReact /> },
];

const bottomRowTech: TechItem[] = [
  { name: "VueJS", icon: <SiVuedotjs /> },
  { name: "NextJS", icon: <SiNextdotjs /> },
  { name: "SQL Server", icon: <DiMsqlServer /> },
  { name: "AWS", icon: <FaAws /> },
  { name: "Microsoft Azure", icon: <VscAzure /> },
  { name: "Google Cloud", icon: <SiGooglecloud /> },
  { name: "REST APIs", icon: <TbApi /> },
  { name: "GraphQL", icon: <SiGraphql /> },
  { name: "Docker", icon: <SiDocker /> },
  { name: "Microservices", icon: <MdArchitecture /> },
];

const benefits = [
  {
    title: "Efficiency & Automation",
    text: "Streamline operations and reduce manual work",
    icon: <FaBolt size={32} />,
  },
  {
    title: "Data Management",
    text: "Handle complex data securely and effectively",
    icon: <FaChartBar size={32} />,
  },
  {
    title: "Customization",
    text: "Build solutions aligned with your business goals",
    icon: <FaTools size={32} />,
  },
  {
    title: "Scalability",
    text: "Grow your systems as your business expands",
    icon: <FaExpand size={32} />,
  },
  {
    title: "Security",
    text: "Protect sensitive business and customer information",
    icon: <FaShieldAlt size={32} />,
  },
];

const services = [
  {
    title: "Custom Software Solutions",
    image:
      "/assets/images/stock/photo-1517694712202-14dd9538aa97-w260-h320.webp",
    list: [["Tailored applications to address specific needs"]],
  },
  {
    title: "Enterprise Software",
    image:
      "/assets/images/stock/photo-1498050108023-c5249f4df085-w260-h320.webp",
    list: [["ERP, CRM, and HR management systems for organizations"]],
  },
  {
    title: "SaaS (Software as a Service)",
    image:
      "/assets/images/stock/photo-1461749280684-dccba630e2f6-w260-h320.webp",
    list: [["Scalable cloud-based platforms with subscription models"]],
  },
  {
    title: "Workflow Automation Tools",
    image:
      "/assets/images/stock/photo-1537432376769-00f5c2f4c8d2-w260-h320.webp",
    list: [["Automate repetitive processes for better productivity"]],
  },
  {
    title: "Data-Driven Applications",
    image:
      "/assets/images/stock/photo-1555066931-4365d14bab8c-w260-h320.webp",
    list: [["Tools designed to gather, analyze, and visualize data"]],
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
                Software Development
              </span>
              <div className="section-title__tagline-shape-2" />
            </div>
            <h2 className="section-title__title title-animation">
              Custom Software <br />
              <span>Built Around Your Business</span>
            </h2>
            <p className="py-3">
              Off-the-shelf software makes your team work its way. Custom
              software works yours — automating the busywork, connecting your
              data, and fitting your processes instead of forcing new ones.
            </p>
            <p>
              From CRMs and ERPs to one-of-a-kind internal tools, Oracloud
              designs, builds, and maintains software that saves your team
              hours every week and scales as you do.
            </p>
            <h2 className="section-title__title title-animation text-center">
              Why <span>Software Development </span>
              Matters for Your Business
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
            Our Specialty in <span> Software Development </span>
          </h2>
          <p className="text-center pb-5 pt-3">
            At Oracloud, we develop intelligent and reliable software solutions
            that adapt to your business.
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
