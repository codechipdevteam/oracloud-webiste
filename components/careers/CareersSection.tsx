"use client";

import React from "react";
import { motion } from "framer-motion";

const APPLY_EMAIL = "connect@oracloud.in";

const perks = [
  {
    icon: "icon-trophy",
    title: "Real Projects",
    text: "Client work that goes live — websites, apps, campaigns — not endless internal demos.",
  },
  {
    icon: "icon-team",
    title: "Small Team, Big Ownership",
    text: "You won't be a cog. You'll own your work end to end and watch it ship.",
  },
  {
    icon: "icon-idea",
    title: "Learn Across the Stack",
    text: "Development, cloud, design, and marketing under one roof — grow beyond your job title.",
  },
];

const CareersSection: React.FC = () => {
  return (
    <section className="careers-page" style={{ position: "relative", zIndex: 1 }}>
      <div className="container">
        {/* Section Title (site pattern) */}
        <motion.div
          className="section-title text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-title__tagline-box">
            <div className="section-title__tagline-shape-1"></div>
            <span className="section-title__tagline">Careers</span>
            <div className="section-title__tagline-shape-2"></div>
          </div>
          <h2 className="section-title__title">
            Do Your Best Work <span>With Us</span>
          </h2>
        </motion.div>

        <motion.p
          className="text-center"
          style={{ maxWidth: "720px", margin: "20px auto 0" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Oracloud is a small team in Chalakudy building websites, apps, cloud
          systems, and marketing campaigns for clients across Kerala and
          beyond. We hire people who love shipping real things.
        </motion.p>

        {/* Perks (reuses the site's value-card styling) */}
        <div className="row justify-content-center" style={{ marginTop: "50px" }}>
          {perks.map((perk, i) => (
            <div className="col-xl-4 col-lg-4 col-md-6" key={perk.title}>
              <motion.div
                className="why-choose-three__single"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="why-choose-three__icon">
                  <span className={perk.icon}></span>
                </div>
                <h3 className="why-choose-three__title">{perk.title}</h3>
                <div className="why-choose-three__bdr"></div>
                <p className="why-choose-three__text">{perk.text}</p>
              </motion.div>
            </div>
          ))}
        </div>

        {/* How to apply */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            maxWidth: "760px",
            margin: "70px auto 0",
            textAlign: "center",
            padding: "45px 35px",
            borderRadius: "20px",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)",
          }}
        >
          <h3
            className="section-title__title"
            style={{ fontSize: "30px", marginBottom: "18px" }}
          >
            How to <span>Apply</span>
          </h3>
          <p style={{ marginBottom: "28px" }}>
            No portals, no forms. Email us — tell us the role you're after in
            the subject line, attach your resume, and link anything you've
            built, designed, or written.
          </p>
          <a
            href={`mailto:${APPLY_EMAIL}?subject=Job%20Application`}
            className="thm-btn"
            style={{ textTransform: "lowercase" }}
          >
            {APPLY_EMAIL} <span className="icon-right-arrow"></span>
          </a>
          <p style={{ marginTop: "22px", fontSize: "15px", opacity: 0.75 }}>
            We read every application.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CareersSection;
