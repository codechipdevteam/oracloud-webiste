"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const logos = [
  "/assets/images/clients/cosy-corner.webp",
  "/assets/images/clients/accenta.webp",
  "/assets/images/clients/jewelrock.webp",
  "/assets/images/clients/nbv.webp",
  "/assets/images/clients/pagebreak.webp",
  "/assets/images/clients/rouba.webp",
  "/assets/images/clients/sherix.webp",
  "/assets/images/clients/st-peter.webp",
  "/assets/images/clients/gymmaster.webp",
  "/assets/images/clients/abel.webp",
  "/assets/images/clients/mets.webp",
];

const LogoSlider: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (!sliderRef.current) return;

    // stagger-in animation on mount
    gsap.fromTo(
      sliderRef.current.querySelectorAll(".logo-item"),
      { opacity: 0, y: 50, scale: 0.8 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "bounce.out",
        stagger: 0.2,
      }
    );

    // alternate scrolling timeline (yoyo effect)
    tlRef.current = gsap.timeline({ repeat: -1, yoyo: true });
    tlRef.current.to(sliderRef.current, {
      xPercent: -50, // move left
      duration: 20,
      ease: "linear",
    });

    return () => {
      tlRef.current?.kill();
    };
  }, []);

  // pause/resume on hover
  const handleMouseEnter = () => {
    tlRef.current?.pause();
  };

  const handleMouseLeave = () => {
    tlRef.current?.resume();
  };

  return (
    <div
      className="slider-wrapper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="slider-track" ref={sliderRef}>
        {[...logos, ...logos].map((logo, index) => (
          <div key={index} className="logo-item">
            <Image
              src={logo}
              alt={`${(logo.split("/").pop() ?? "client")
                .replace(".webp", "")
                .replace(/-/g, " ")
                .replace(/\b\w/g, (c) => c.toUpperCase())} logo`}
              width={160}
              height={80}
              className="logo-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;
