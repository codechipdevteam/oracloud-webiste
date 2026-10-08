"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// All cards point to the single shared /services page (the old per-service
// .php URLs were dead — this site is a Next.js static export).
const SERVICES_LINK = "/services";

const services = [
  {
    icon: "icon-technical-support",
    title: "All Kind Of IT Services",
    link: SERVICES_LINK,
    text: "End-to-end IT solutions — from consulting and setup to the support that keeps your business running.",
    list: ["IT Consulting", "System Setup", "Ongoing Support"],
  },
  {
    icon: "icon-idea",
    title: "Cybersecurity Solutions",
    link: SERVICES_LINK,
    text: "Proactive protection for your data, networks, and systems against today's evolving cyber threats.",
    list: ["Threat Detection", "Data Protection", "Network Security"],
  },
  {
    icon: "icon-strategy",
    title: "Software Development & Integration",
    link: SERVICES_LINK,
    text: "Custom software built to fit your workflow, integrated cleanly with the tools you already use.",
    list: ["Custom Software", "API Integration", "Process Automation"],
  },
  {
    icon: "icon-earning",
    title: "Cloud Solutions Provider",
    link: SERVICES_LINK,
    text: "Migrate, host, and scale on the cloud with secure, reliable, and cost-effective infrastructure.",
    list: ["Cloud Migration", "Cloud Hosting", "Managed Services"],
  },
  {
    icon: "icon-transparency",
    title: "Data Analytics Consulting",
    link: SERVICES_LINK,
    text: "Turn raw data into clear, actionable insights that drive smarter business decisions.",
    list: ["Business Intelligence", "Data Visualization", "Reporting"],
  },
];

// Simplified motion variants with smoother transitions
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.03,
    transition: {
      duration: 0.2,
    },
  },
};

const ServicesSlider = () => {
  return (
    <motion.section
      className="services-three"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="services-three__shape-1"></div>
      <div className="services-three__shape-2"></div>
      <div className="container">
        <motion.div
          className="section-title text-center"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <div className="section-title__tagline-box">
            <div className="section-title__tagline-shape-1"></div>
            <span className="section-title__tagline">Our Services</span>
            <div className="section-title__tagline-shape-2"></div>
          </div>
          <h2 className="section-title__title">
            Reliable Services <span>Crafted</span> <br /> <span>to Exceed</span>{" "}
            Your Expectations
          </h2>
        </motion.div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          navigation={{
            prevEl: ".services-three__nav-prev",
            nextEl: ".services-three__nav-next",
          }}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={800}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="services-slide-wrapper">
                <motion.div
                  className="services-three__single"
                  variants={scaleIn}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="services-three__icon"
                    variants={fadeIn}
                  >
                    <span className={service.icon}></span>
                  </motion.div>

                  <motion.h3
                    className="services-three__title"
                    variants={fadeIn}
                  >
                    <a href={service.link}>{service.title}</a>
                  </motion.h3>

                  <motion.p className="services-three__text" variants={fadeIn}>
                    {service.text}
                  </motion.p>

                  <motion.ul
                    className="list-unstyled services-three__list"
                    variants={fadeIn}
                  >
                    {service.list.map((item, i) => (
                      <motion.li key={i}>
                        <div className="icon">
                          <span className="icon-tick-inside-circle"></span>
                        </div>
                        <div className="text">
                          <p>{item}</p>
                        </div>
                      </motion.li>
                    ))}
                  </motion.ul>

                  <motion.a
                    href={service.link}
                    className="services-three__btn"
                    variants={fadeIn}
                  >
                    Read More <span className="icon-right-arrow-1"></span>
                  </motion.a>
                </motion.div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Nav arrows below the cards (centered) so they never overlap card text */}
        <div className="services-three__nav">
          <button
            type="button"
            className="services-three__nav-prev"
            aria-label="Previous services"
          >
            <span className="icon-right-arrow-1"></span>
          </button>
          <button
            type="button"
            className="services-three__nav-next"
            aria-label="Next services"
          >
            <span className="icon-right-arrow-1"></span>
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default ServicesSlider;
