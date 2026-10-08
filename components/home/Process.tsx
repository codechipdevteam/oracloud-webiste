"use client";

import Image from "next/image";
import React from "react";

const ProcessTwo: React.FC = () => {
  return (
    <section className="process-two">
      {/* Background Images */}
      <div
        className="process-two__bg"
        style={{
          backgroundImage: "url(/assets/images/backgrounds/process-bg-2.webp)",
        }}
      />
      <div
        className="process-two__bg-shape float-bob-y"
        style={{
          backgroundImage:
            "url(/assets/images/shapes/process-two-bg-shape.png)",
        }}
      />

      <div className="container">
        {/* Section Title */}
        <div className="section-title text-center sec-title-animation animation-style1">
          <div className="section-title__tagline-box">
            <div className="section-title__tagline-shape-1"></div>
            <span className="section-title__tagline">Working Process</span>
            <div className="section-title__tagline-shape-2"></div>
          </div>
          <h2 className="section-title__title title-animation">
            Our Seamless Process <br />
            <span>From Concept to Creation</span>
          </h2>
        </div>

        {/* Process Steps */}
        <ul className="row list-unstyled">
          {/* Step 1 */}
          <li className="col-xl-4 col-lg-4">
            <div className="process-two__single">
              <div className="process-two__count"></div>
              <h3 className="process-two__title">Research & Discovery</h3>
              <p className="process-two__text">
                We begin by understanding your needs, goals, and vision. Through
                brainstorming sessions and strategic planning, we shape a clear
                roadmap for your project.
              </p>
            </div>
          </li>

          {/* Step 2 */}
          <li className="col-xl-4 col-lg-4">
            <div className="process-two__single">
              <div className="process-two__shape-1 float-bob-x">
                <Image
                  src="/assets/images/shapes/process-two-shape-1.png"
                  alt="Shape 1"
                  width={100}
                  height={100}
                />
              </div>
              <div className="process-two__shape-2 float-bob-x">
                <Image
                  src="/assets/images/shapes/process-two-shape-2.png"
                  alt="Shape 2"
                  width={100}
                  height={100}
                />
              </div>
              <div className="process-two__count"></div>
              <h3 className="process-two__title">Design and Development</h3>
              <p className="process-two__text">
                Once the strategy is in place, we move to designing and
                developing your vision. Our team collaborates closely to bring
                your ideas to life.
              </p>
            </div>
          </li>

          {/* Step 3 */}
          <li className="col-xl-4 col-lg-4">
            <div className="process-two__single">
              <div className="process-two__count"></div>
              <h3 className="process-two__title">Testing and Launch</h3>
              <p className="process-two__text">
                Before going live, we rigorously test to ensure optimal
                functionality. After thorough quality checks, we launch your
                project with confidence.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ProcessTwo;
