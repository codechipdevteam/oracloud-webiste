"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import LottieAnimation from "./LottieAnimation";
import styles from "./CtaBox.module.css";
import { FaArrowRight } from "react-icons/fa";

interface CtaBoxProps {
  tag?: string;
  heading: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  lottieSrc?: string;
  lottieWidth?: number;
  lottieHeight?: number;
  lottieLoop?: boolean;
  variant?: "default" | "gradient" | "minimal";
}

const CtaBox: React.FC<CtaBoxProps> = ({
  tag = "Get Started",
  heading,
  description,
  ctaText = "Contact Us",
  ctaHref = "/contact",
  lottieSrc = "/animations/social-media.lottie",
  lottieWidth = 320,
  lottieHeight = 320,
  lottieLoop = true,
  variant = "default",
}) => {
  const boxVariant =
    variant === "gradient"
      ? {
          background: "linear-gradient(135deg, #ffd25d 0%, #3d72fc 100%)",
        }
      : variant === "minimal"
        ? {
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
          }
        : {};

  return (
    <motion.section
      className={`${styles.ctaBox} cta-box`}
      style={boxVariant}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Decorative dots */}
      <div className={styles.dotsPattern}>
        {Array.from({ length: 15 }).map((_, i) => (
          <span key={i}></span>
        ))}
      </div>

      <div className={styles.ctaBoxInner}>
        {/* Left: Content */}
        <div className={styles.ctaBoxContent}>
          <motion.span
            className={styles.ctaBoxTag}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            {tag}
          </motion.span>

          <motion.h2
            className={styles.ctaBoxHeading}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {heading}
          </motion.h2>

          {description && (
            <motion.p
              className={styles.ctaBoxDescription}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {description}
            </motion.p>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Link href={ctaHref} className={styles.ctaBoxLink}>
              <span>{ctaText}</span>
              <span className={styles.ctaBoxLinkArrow}>
                <FaArrowRight size={14} />
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Right: Lottie Animation */}
        <motion.div
          className={styles.ctaBoxLottie}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <LottieAnimation
            src={lottieSrc}
            width={lottieWidth}
            height={lottieHeight}
            loop={lottieLoop}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CtaBox;
