// components/AboutIntro.tsx
"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";

const AboutIntro: React.FC = () => {
  // For Framer Motion reveal animations
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  // For GSAP counters
  const expRef = useRef<HTMLHeadingElement>(null);
  const clientsRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (inView) {
      controls.start("visible");

      // Animate numbers using GSAP
      if (expRef.current) {
        gsap.fromTo(
          expRef.current,
          { innerText: 0 },
          {
            innerText: 12,
            duration: 2,
            snap: { innerText: 1 },
          }
        );
      }

      if (clientsRef.current) {
        gsap.fromTo(
          clientsRef.current,
          { innerText: 0 },
          {
            innerText: 120,
            duration: 2.5,
            snap: { innerText: 1 },
          }
        );
      }
    }
  }, [inView, controls]);

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="about-four" ref={ref}>
      {/* Background Shapes */}
      <div
        className="about-four__bg-shape"
        style={{
          backgroundImage: "url(/assets/images/shapes/about-four-bg-shape.png)",
        }}
      ></div>
      <div
        className="about-four__bg-shape-2"
        style={{
          backgroundImage:
            "url(/assets/images/shapes/about-four-bg-shape-2.png)",
        }}
      ></div>

      <div className="container">
        <div className="row">
          {/* Left Section — order-2 below xl so the title block leads on mobile */}
          <div className="col-xl-6 order-2 order-xl-1">
            <motion.div
              className="about-four__left"
              variants={fadeUp}
              initial="hidden"
              animate={controls}
            >
              <div className="about-four__img-box">
                <motion.div
                  className="about-four__img"
                  variants={fadeUp}
                  transition={{ delay: 0.2 }}
                >
                  <Image
                    src="/assets/images/resources/about-four-img-1.jpg"
                    alt="About"
                    width={479}
                    height={544}
                  />
                </motion.div>

                <motion.div
                  className="about-four__img-2"
                  variants={fadeUp}
                  transition={{ delay: 0.4 }}
                >
                  <Image
                    src="/assets/images/resources/about-four-img-2.jpg"
                    alt="About 2"
                    width={308}
                    height={335}
                  />
                </motion.div>

                {/* Experience Counter */}
                <motion.div
                  className="about-four__experience"
                  variants={fadeUp}
                  transition={{ delay: 0.6 }}
                >
                  <div className="about-four__experience-inner">
                    <div className="about-four__experience-count-box">
                      <h3 ref={expRef}>00</h3>
                    </div>
                    <p className="about-four__experience-count-text">
                      Years of <br /> Experience
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Right Section */}
          <div className="col-xl-6 order-1 order-xl-2">
            <motion.div
              className="about-four__right"
              variants={fadeUp}
              initial="hidden"
              animate={controls}
              transition={{ delay: 0.3 }}
            >
              {/* Section Title */}
              <div className="section-title text-left sec-title-animation animation-style2">
                <div className="section-title__tagline-box">
                  <div className="section-title__tagline-shape-1"></div>
                  <span className="section-title__tagline">About Us</span>
                  <div className="section-title__tagline-shape-2"></div>
                </div>
                <h2 className="section-title__title title-animation">
                  {/* Supercharge <span>Your Business</span>
                  <br />
                  <span>Growth with Our</span> Cutting-Edge IT
                  <br /> Solutions */}
                  Who We Are
                </h2>
              </div>

              <p className="about-four__text">
                Oracloud is the technology partner behind growing businesses,
                schools, and colleges. We build websites, apps, and cloud
                systems — and run the marketing that brings them customers —
                all under one roof.
              </p>

              {/* Points */}
              <motion.div
                className="about-four__points-box"
                variants={fadeUp}
                transition={{ delay: 0.5 }}
              >
                <ul className="about-four__points-list list-unstyled">
                  <li>
                    <div className="icon">
                      <span className="icon-tick-inside-circle"></span>
                    </div>
                    <p>Innovation that drives results</p>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-tick-inside-circle"></span>
                    </div>
                    <p>A collaborative approach to every project</p>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-tick-inside-circle"></span>
                    </div>
                    <p>Custom-built for the way you work</p>
                  </li>
                </ul>
              </motion.div>

              {/* Extra Points */}
              <motion.ul
                className="about-four__points-2 list-unstyled"
                variants={fadeUp}
                transition={{ delay: 0.7 }}
              >
                <li>
                  <div className="icon">
                    <span className="icon-technical-support"></span>
                  </div>
                  <div className="content">
                    <h5>Our Mission</h5>
                    <p>
                      To make technology simple for the people who use it and
                      powerful for the businesses that run on it.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <span className="icon-real-estate-agency"></span>
                  </div>
                  <div className="content">
                    <h5>Our Vision</h5>
                    <p>
                      To be the technology partner Kerala’s businesses and
                      institutions trust first — and to take that same standard
                      of work to clients around the world.
                    </p>
                  </div>
                </li>
              </motion.ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
