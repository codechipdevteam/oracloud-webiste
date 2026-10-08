"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const About: React.FC = () => {
  const [count, setCount] = useState(0);
  const [clientCount, setClientCount] = useState(0);
  const counterRef = useRef(null);
  const clientCounterRef = useRef(null);
  const isInView = useInView(counterRef);
  const isClientInView = useInView(clientCounterRef);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate shapes
    gsap.from(".about-two__shape-2", {
      scrollTrigger: {
        trigger: ".about-two",
        start: "top center",
      },
      x: -100,
      opacity: 0,
      duration: 1,
    });

    gsap.from(".about-two__shape-3", {
      scrollTrigger: {
        trigger: ".about-two",
        start: "top center",
      },
      x: 100,
      opacity: 0,
      duration: 1,
    });

    // Animate images
    gsap.from(".about-two__img", {
      scrollTrigger: {
        trigger: ".about-two__img-box",
        start: "top center",
      },
      y: 100,
      opacity: 0,
      duration: 1,
    });

    gsap.from(".about-two__img-2", {
      scrollTrigger: {
        trigger: ".about-two__img-box",
        start: "top center",
      },
      y: -100,
      opacity: 0,
      duration: 1,
      delay: 0.3,
    });

    // Animate client images
    gsap.from(".about-two__client-img", {
      scrollTrigger: {
        trigger: ".about-two__client-box",
        start: "top center",
      },
      scale: 0,
      opacity: 0,
      duration: 0.5,
      stagger: 0.2,
    });
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isInView) {
      interval = setInterval(() => {
        setCount((prev) => {
          if (prev < 12) return prev + 1;
          clearInterval(interval);
          return prev;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isInView]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isClientInView) {
      interval = setInterval(() => {
        setClientCount((prev) => {
          if (prev < 120) return prev + 2;
          clearInterval(interval);
          return prev;
        });
      }, 20);
    }
    return () => clearInterval(interval);
  }, [isClientInView]);

  return (
    <section className="about-two">
      <div className="about-two__shape-2"></div>
      <div className="about-two__shape-3">
        <Image
          src="/assets/images/shapes/about-two-shape-3.png"
          alt="Shape"
          width={300}
          height={300}
        />
      </div>
      <div className="container">
        <div className="row">
          {/* Left Column */}
          <div className="col-xl-6">
            <div className="about-two__left">
              <div className="about-two__img-box">
                <div className="about-two__img">
                  <Image
                    src="/assets/images/backgrounds/about-1.webp"
                    alt="About Us"
                    width={500}
                    height={500}
                  />
                </div>
                <div className="about-two__img-2">
                  <Image
                    src="/assets/images/backgrounds/process-bg.webp"
                    alt="About Us"
                    width={500}
                    height={400}
                  />
                </div>
                <div className="about-two__shape-1"></div>
              </div>

              {/* Clients */}
              <div className="about-two__client-box d-none">
                <ul className="about-two__client-img-list list-unstyled">
                  <li>
                    <div className="about-two__client-img">
                      <Image
                        src="/assets/images/resources/about-two-client-img-1-1.jpg"
                        alt="Client"
                        width={60}
                        height={60}
                      />
                    </div>
                  </li>
                  <li>
                    <div className="about-two__client-img">
                      <Image
                        src="/assets/images/resources/about-four-client-img-1-2.jpg"
                        alt="Client"
                        width={60}
                        height={60}
                      />
                    </div>
                  </li>
                  <li>
                    <div className="about-two__client-img">
                      <Image
                        src="/assets/images/resources/about-four-client-img-1-3.jpg"
                        alt="Client"
                        width={60}
                        height={60}
                      />
                    </div>
                  </li>
                  <li>
                    <Link href="#">
                      <span className="icon-plus"></span>
                    </Link>
                  </li>
                </ul>
                <motion.p
                  ref={clientCounterRef}
                  className="about-two__client-text"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <span>{clientCount}</span>
                  <span>K</span> Satisfied Client
                </motion.p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-xl-6">
            <div className="about-two__right">
              <motion.div
                className="section-title text-left sec-title-animation animation-style2"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div className="section-title__tagline-box">
                  <div className="section-title__tagline-shape-1"></div>
                  <span className="section-title__tagline">About Us</span>
                  <div className="section-title__tagline-shape-2"></div>
                </div>
                <motion.h2
                  className="section-title__title title-animation"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.7 }}
                >
                  Welcome to Oracloud – <span>Your Partner in Growth</span>
                  <br />
                </motion.h2>
              </motion.div>

              <motion.p
                className="about-two__text"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.7 }}
              >
                Oracloud helps businesses of every size put technology to work
                — from the website that wins a customer to the systems that
                serve them. One team for IT and digital growth, so nothing gets
                lost between vendors.
              </motion.p>

              {/* Points */}
              <motion.div
                className="about-two__points-box"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.7 }}
              >
                <ul className="about-two__points-list list-unstyled">
                  <li>
                    <div className="icon">
                      <span className="icon-tick-inside-circle"></span>
                    </div>
                    <p>Tailored solutions designed for your industry</p>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-tick-inside-circle"></span>
                    </div>
                    <p>A passionate team with years of expertise</p>
                  </li>
                </ul>
                <ul className="about-two__points-list list-unstyled">
                  <li>
                    <div className="icon">
                      <span className="icon-tick-inside-circle"></span>
                    </div>
                    <p>Cutting-edge technologies for modern challenges</p>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-tick-inside-circle"></span>
                    </div>
                    <p>Transparent processes and measurable results</p>
                  </li>
                </ul>
              </motion.div>
              <motion.p
                className="about-three__text"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.7 }}
              >
                Whether it's a new website, an online store, or a move to the
                cloud, we measure our work by the results it brings you.
              </motion.p>

              {/* Experience, Call & Button */}
              <motion.div
                className="about-two__experience-contact-and-btn"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.7 }}
              >
                <div className="about-two__experience-box">
                  <div
                    className="about-two__experience-count-box"
                    ref={counterRef}
                  >
                    <h3>
                      {count}
                      <span>+</span>
                    </h3>
                  </div>
                  <p className="about-two__experience-text">
                    Years of
                    <br /> Experience
                  </p>
                </div>

                <div className="about-two__call-box">
                  <div className="about-two__call-icon">
                    <span className="icon-customer-service-headset"></span>
                  </div>
                  <div className="about-two__call-content">
                    <span>call us for inquiry</span>
                    <p>
                      <a href="tel:+917034302111">+91 7034 302 111</a>
                    </p>
                  </div>
                </div>

                <motion.div
                  className="about-two__btn-box"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link href="/about" className="thm-btn">
                    Learn More<span className="icon-right-arrow"></span>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
