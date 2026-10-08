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
    title: "Benefits of Our Commercial Ads",
    text: `Our professional commercial ad production services help businesses achieve their marketing goals effectively. Key benefits include:`,
    list: [
      "Increase brand awareness and customer engagement",
      "Showcase products, services, or events through captivating visuals",
      "Perfect for TV commercials, YouTube ads, Facebook & Instagram video ads",
      "Reach wider audiences with creative and professional content",
      "Affordable packages tailored for Kerala businesses and institutions",
    ],
    image: "/assets/images/resources/benefits.png",
  },
  {
    title: "Why Oracloud Technologies?",
    text: `With deep experience in commercial ad production, Oracloud Technologies combines strong creative vision with technical expertise. We deliver end-to-end ad production services through close client collaboration, ensuring timely delivery and high production standards. Our team has extensive experience working with schools, startups, and established brands in Kerala.`,
    list: [],
    image: "/assets/images/resources/choose.png",
  },
];

const socialServices = [
  {
    name: "Creative Concept & Scriptwriting",
    image: "/assets/images/icon/concept.png",
    description:
      "Collaborate with our creative directors to develop compelling stories and messages tailored to your target audience.",
  },
  {
    name: "Video Production",
    image: "/assets/images/icon/movie.png",
    description:
      "High-quality shooting with professional equipment, lighting, and direction to create visually striking commercial ads.",
  },
  {
    name: "Animation & Motion Graphics",
    image: "/assets/images/icon/animation.png",
    description:
      "Custom animated videos, explainer clips, and dynamic graphics to simplify complex messages and entertain viewers.",
  },
  {
    name: "Voiceover & Sound Design",
    image: "/assets/images/icon/voiceover.png",
    description:
      "Professional narration and sound effects to enhance storytelling and brand recall.",
  },
  {
    name: "Editing & Post-Production",
    image: "/assets/images/icon/editing.png",
    description:
      "Expert editing for pacing, effects, color correction, and overall polish to ensure a professional finish.",
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
                src="/assets/images/resources/ads.webp"
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
                  Commercial Advertisement Production
                </h2>
              </div>

              <p className="why-choose-one__text mb-3">
                A good ad gets watched; a great one gets remembered. Oracloud
                produces commercials for TV, social media, and digital
                platforms that do both — our creative team handles every step,
                from concept development and scripting to filming, animation,
                and post-production.
              </p>
            </div>
          </div>
          <div className="row content-row2 justify-content-center pb-4">
            <h3 className="text-center pb-5">
              Our Advertisement Production Services
            </h3>
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
          From script to screen, Oracloud makes ads that say what your brand
          means — and get it seen by the people who matter.
        </motion.h3>{" "}
      </div>
    </section>
  );
};

export default IntroSection;
