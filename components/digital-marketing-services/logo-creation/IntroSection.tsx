// components/IntroSection.tsx
"use client";

import Image from "next/image";
import React from "react";

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
                src="/assets/images/resources/logo-creation.png"
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
                  Logo Creation and Brand Identity
                </h2>
              </div>

              <p className="why-choose-one__text mb-3">
                A logo is the one piece of design your customers see every
                single time. Oracloud creates logos and brand identities for
                businesses, schools, and colleges that look sharp today — and
                still feel right ten years from now.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
