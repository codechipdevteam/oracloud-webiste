"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaHeadset } from "react-icons/fa";
import styles from "./FaqSection.module.css";

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  tag?: string;
  heading?: string;
  headingAccent?: string;
  description?: string;
  items: FaqItem[];
  defaultOpen?: number | null;
  showContact?: boolean;
  contactLabel?: string;
  contactPhone?: string;
  contactHref?: string;
}

const FaqSection: React.FC<FaqSectionProps> = ({
  tag = "FAQS",
  heading = "Frequently Asked",
  headingAccent = "Questions",
  description = "Get answers to the most common questions about our products, services, and support.",
  items,
  defaultOpen = 0,
  showContact = true,
  contactLabel = "Get Support",
  contactPhone = "+91 7034 302 111",
  contactHref = "tel:+917034302111",
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(defaultOpen);

  const toggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className={styles.faqSection}>
      <div className={`container ${styles.faqInner}`}>
        <div className="row align-items-start">
          {/* Left Column */}
          <div className="col-lg-5">
            <div className={styles.faqLeft}>
              <motion.span
                className={styles.faqTag}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                {tag}
              </motion.span>

              <motion.h2
                className={styles.faqHeading}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {heading}{" "}
                <span className={styles.faqHeadingAccent}>{headingAccent}</span>
              </motion.h2>

              <motion.p
                className={styles.faqDescription}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {description}
              </motion.p>

              {showContact && (
                <motion.div
                  className={styles.faqContactBox}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className={styles.faqContactIcon}>
                    <FaHeadset />
                  </div>
                  <div>
                    <div className={styles.faqContactLabel}>{contactLabel}</div>
                    <div className={styles.faqContactPhone}>
                      <Link href={contactHref}>{contactPhone}</Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          {/* Right Column - Accordion */}
          <div className="col-lg-7">
            <div className={styles.faqRight}>
              {items.map((faq, index) => {
                const isActive = activeIndex === index;
                return (
                  <motion.div
                    key={index}
                    className={`${styles.faqItem} ${isActive ? styles.faqItemActive : ""}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                  >
                    {/* Question */}
                    <div
                      className={styles.faqQuestion}
                      onClick={() => toggle(index)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          toggle(index);
                        }
                      }}
                      aria-expanded={isActive}
                    >
                      <div className={styles.faqNumber}>
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <span className={styles.faqQuestionText}>
                        {faq.question}
                      </span>
                      <div className={styles.faqToggle}>
                        <span
                          className={`${styles.faqToggleLine} ${styles.faqToggleLineHorizontal}`}
                        ></span>
                        <span
                          className={`${styles.faqToggleLine} ${styles.faqToggleLineVertical}`}
                        ></span>
                      </div>
                    </div>

                    {/* Answer */}
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          className={styles.faqAnswerWrapper}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.35,
                            ease: [0.4, 0, 0.2, 1],
                          }}
                        >
                          <div className={styles.faqAnswer}>
                            <div className={styles.faqAnswerDivider}></div>
                            <p className={styles.faqAnswerText}>{faq.answer}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
