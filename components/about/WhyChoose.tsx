"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";

interface WhyChooseProps {
  tagline?: string;
  title?: string;
  image?: string;
}

const WhyChoose: React.FC<WhyChooseProps> = ({
  tagline = "Why Choose Us",
  title = "Empowering Your Business with Reliable & Future-Ready IT Solutions",
  image = "/assets/images/stock/photo-1600880292089-90a7e086ee0c-w475-h555.webp",
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      const ctx = gsap.context(() => {
        gsap.from(".why-choose-three__single", {
          opacity: 0,
          y: 50,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        });

        gsap.from(".why-choose-three__img img", {
          opacity: 0,
          scale: 0.9,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        });
      }, sectionRef);

      return () => ctx.revert();
    }
  }, []);

  return (
    <section className="why-choose-three" ref={sectionRef}>
      <div
        className="why-choose-three__bg-shape float-bob-x"
        style={{
          backgroundImage:
            "url(/assets/images/shapes/why-choose-three-bg-shape.png)",
        }}
      ></div>
      <div className="why-choose-three__shape-1"></div>
      <div className="why-choose-three__shape-2"></div>

      <div className="container">
        {/* Title */}
        <div className="section-title text-center">
          <div className="section-title__tagline-box">
            <div className="section-title__tagline-shape-1"></div>
            <span className="section-title__tagline">{tagline}</span>
            <div className="section-title__tagline-shape-2"></div>
          </div>

          <motion.h2
            className="section-title__title"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {title.split(" ").map((word, i) => (
              <span key={i} className={word.includes("&") ? "highlight" : ""}>
                {word}{" "}
              </span>
            ))}
          </motion.h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-3">
            <div className="why-choose-three__single">
              <div className="why-choose-three__icon">
                <span className="icon-quality"></span>
              </div>
              <h3 className="why-choose-three__title">Excellence</h3>
              <div className="why-choose-three__bdr"></div>
              <p className="why-choose-three__text">
                We are committed to delivering nothing short of the best.
              </p>
            </div>
          </div>
        </div>
        {/* Content */}
        <div className="row">
          {/* Left Features */}
          <div className="col-xl-3">
            <div className="why-choose-three__single-left">
              <div className="why-choose-three__single">
                <div className="why-choose-three__icon">
                  <span className="icon-quality"></span>
                </div>
                <h3 className="why-choose-three__title">Integrity</h3>
                <div className="why-choose-three__bdr"></div>
                <p className="why-choose-three__text">
                  Transparency and honesty are at the heart of everything we do.
                </p>
              </div>

              <div className="why-choose-three__single">
                <div className="why-choose-three__icon">
                  <span className="icon-team"></span>
                </div>
                <h3 className="why-choose-three__title">Innovation</h3>
                <div className="why-choose-three__bdr"></div>
                <p className="why-choose-three__text">
                  We embrace change and encourage creativity to deliver
                  forward-thinking solutions.
                </p>
              </div>
            </div>
          </div>

          {/* Center Image */}
          <div className="col-xl-6">
            <div className="why-choose-three__img">
              <Image src={image} alt="Why Choose Us" width={475} height={555} />
            </div>
          </div>

          {/* Right Features */}
          <div className="col-xl-3">
            <div className="why-choose-three__single-left">
              <div className="why-choose-three__single">
                <div className="why-choose-three__icon">
                  <span className="icon-customer-centricity"></span>
                </div>
                <h3 className="why-choose-three__title">Collaboration</h3>
                <div className="why-choose-three__bdr"></div>
                <p className="why-choose-three__text">
                  We work closely with our clients as partners, not just service
                  providers.
                </p>
              </div>

              <div className="why-choose-three__single">
                <div className="why-choose-three__icon">
                  <span className="icon-support"></span>
                </div>
                <h3 className="why-choose-three__title">Customer Success</h3>
                <div className="why-choose-three__bdr"></div>
                <p className="why-choose-three__text">
                  Your success defines our success — we measure our achievements
                  through your growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
