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
  FaBolt,
  FaTools,
  FaChartLine,
  FaClock,
  FaLightbulb,
} from "react-icons/fa";

const benefits = [
  {
    title: "Security",
    text: "Regular updates and patches to protect against vulnerabilities",
    icon: <FaLock size={32} />,
  },
  {
    title: "Performance",
    text: "Optimized speed, uptime, and responsiveness",
    icon: <FaBolt size={32} />,
  },
  {
    title: "Bug Fixes",
    text: "Quick resolution of issues before they impact users",
    icon: <FaTools size={32} />,
  },
  {
    title: "Scalability",
    text: "Upgrades to meet growing demands",
    icon: <FaChartLine size={32} />,
  },
  {
    title: "24/7 Monitoring",
    text: "Proactive detection and prevention of downtime",
    icon: <FaClock size={32} />,
  },
  {
    title: "Future-Ready",
    text: "Ensuring compatibility with new technologies and trends",
    icon: <FaLightbulb size={32} />,
  },
];

const services = [
  {
    title: "Application Maintenance",
    image:
      "/assets/images/stock/photo-1581092918056-0c4c3acd3789-w260-h320.webp",
    list: [["Regular updates, version upgrades, and bug fixes"]],
  },
  {
    title: "Server & Hosting Management",
    image:
      "/assets/images/stock/photo-1508780709619-79562169bc64-w260-h320.webp",
    list: [["Ensuring uptime, security patches, and backups"]],
  },
  {
    title: "Performance Optimization",
    image:
      "/assets/images/stock/photo-1581092160562-40aa08e78837-w260-h320.webp",
    list: [["Speed improvements, database tuning, and load balancing"]],
  },
  {
    title: "Security Monitoring",
    image:
      "/assets/images/stock/photo-1504384308090-c894fdcc538d-w260-h320.webp",
    list: [["Threat detection, firewall setup, and vulnerability scans"]],
  },
  {
    title: "Backup & Disaster Recovery",
    image:
      "/assets/images/stock/photo-1593642632823-8f785ba67e45-w260-h320.webp",
    list: [["Automated data backups with quick recovery options"]],
  },
  {
    title: "24/7 Technical Support",
    image:
      "/assets/images/stock/photo-1600880292203-757bb62b4baf-w260-h320.webp",
    list: [["Dedicated helpdesk and live monitoring"]],
  },
  {
    title: "Feature Enhancements",
    image:
      "/assets/images/stock/photo-1519389950473-47ba0277781c-w260-h320.webp",
    list: [["Adding new functionalities as your business grows"]],
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
                Maintenance & Support
              </span>
              <div className="section-title__tagline-shape-2" />
            </div>
            <h2 className="section-title__title title-animation">
              Keep Your Systems <br />
              <span>Fast, Secure & Reliable</span>
            </h2>
            <p className="py-3">
              Building a website, application, or IT system is just the
              beginning — keeping it secure, updated, and high-performing is
              equally critical. Maintenance & Support ensures your digital
              platforms continue to run smoothly, stay protected from cyber
              threats, and adapt to evolving business needs.
            </p>
            <p>
              At Oracloud, we provide comprehensive maintenance and support
              services so your business can focus on growth while we handle the
              technical side.
            </p>
            <h2 className="section-title__title title-animation text-center">
              Why <span>Maintenance & Support </span>
              Matter
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
            Our Specialties in <span>Maintenance & Support </span>
          </h2>
          <p className="text-center pb-5 pt-3">
            Oracloud delivers end-to-end post-deployment care to keep your
            systems reliable and efficient.
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
    </section>
  );
};

export default IntroSection;
