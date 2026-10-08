"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

interface ContentItem {
  title: string;
  text: string;
  list?: string[];
  image: string;
}

const contents: ContentItem[] = [
  {
    title: "Brand Identity Services",
    text: `Custom logo designs tailored to your business or institution`,
    list: [
      "Brand color palette and typography selection for consistency",
      "Business card, brochure, flyer, and stationery design",
      "Comprehensive brand style guides ensuring cohesive application",
      "Rebranding services for existing companies or institutions seeking a new image",
    ],
    image: "/assets/images/resources/branding.png",
  },
  {
    title: "Why Strong Brand Identity Matters",
    text: `A well-crafted brand identity ensures recognition, builds trust, and creates emotional connections with your audience. For schools and colleges, a unified brand strengthens community pride, attracts admissions, and represents values clearly. For startups and businesses, it differentiates you in a crowded marketplace.`,
    image: "/assets/images/resources/branding-2.png",
  },
  {
    title: "Benefits of Choosing Oracloud",
    text: ``,
    list: [
      "Professional, original logo designs that capture your brand essence",
      "Consistent visual identity across all marketing materials",
      "Expert guidance from concept to delivery and implementation",
      "Quick turnaround times with client-focused revisions",
      "Support for Kerala's educational institutions and local businesses with affordable packages",
    ],
    image: "/assets/images/resources/business-benefits.png",
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

const Process = () => {
  return (
    <section className="process-one pt-5">
      {/* Shapes */}
      {/* <div className="process-one__shape-1">
        <Image
          src="/assets/images/shapes/process-one-shape-1.png"
          alt="shape"
          width={200}
          height={200}
        />
      </div> */}
      <div className="process-one__shape-2"></div>
      <div className="process-one__shape-3"></div>
      <div
        className="process-one__bg-shape"
        style={{
          backgroundImage:
            "url(/assets/images/shapes/process-one-bg-shape.png)",
        }}
      ></div>

      <div className="container">
        <div className="row">
          {/* Left Section */}
          <div className="col-xl-5">
            <div className="process-one__left">
              <div className="section-title text-left sec-title-animation animation-style2">
                <div className="section-title__tagline-box">
                  <div className="section-title__tagline-shape-1"></div>
                  <span className="section-title__tagline">
                    Working Process
                  </span>
                  <div className="section-title__tagline-shape-2"></div>
                </div>
                <img
                  src="/assets/images/resources/logo-design.png"
                  className="logo-img11"
                  alt=""
                />
                <h2 className="section-title__title title-animation">
                  Our Logo Creation <span>Process</span>
                  <br />
                </h2>
              </div>
              <p className="process-one__text">
                Four steps, no guesswork — you see and approve the work at
                every stage.
              </p>
              <div className="process-one__btn-box">
                <Link href="/contact" className="thm-btn">
                  Get in Touch <span className="icon-right-arrow"></span>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-xl-7">
            <div className="process-one__right">
              <ul className="process-one__process-list list-unstyled">
                <li>
                  <div className="process-one__process-count"></div>
                  <div className="process-one__process-content">
                    <h3 className="process-one__process-title">
                      Discovery & Research
                    </h3>
                    <p className="process-one__process-text">
                      We understand your brand’s mission, vision, competitors,
                      and audience before starting the design process.
                    </p>
                  </div>
                </li>

                <li>
                  <div className="process-one__process-content">
                    <h3 className="process-one__process-title">
                      Concept Development
                    </h3>
                    <p className="process-one__process-text">
                      Multiple initial logo concepts
                      <br /> are crafted to explore various
                      <br /> styles and directions.
                    </p>
                  </div>
                  <div className="process-one__process-count"></div>
                </li>

                <li>
                  <div className="process-one__process-count"></div>
                  <div className="process-one__process-content">
                    <h3 className="process-one__process-title">Refinement</h3>
                    <p className="process-one__process-text">
                      We collaborate with you to finalize colors, typography,
                      shapes, and symbols that best represent your brand
                      identity.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="process-one__process-content">
                    <h3 className="process-one__process-title">Delivery</h3>
                    <p className="process-one__process-text">
                      Final logos are provided in <br />
                      multiple formats, suitable for print, web,
                      <br /> and social media use.
                    </p>
                  </div>
                  <div className="process-one__process-count"></div>
                </li>
              </ul>
            </div>
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
          A strong identity pays for itself every day it’s in use — on your
          signage, your site, your uniforms, your posts. Oracloud builds
          identities made to be used.
        </motion.h3>{" "}
      </div>
    </section>
  );
};

export default Process;
