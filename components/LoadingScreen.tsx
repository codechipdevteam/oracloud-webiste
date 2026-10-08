// File: components/LoadingScreen.jsx

"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";

/**
 * Dark themed loading screen for Next.js using GSAP + Framer Motion
 *
 * Props:
 *  - isLoaded (boolean) : when true, the loader plays exit animation and calls onFinish
 *  - onFinish (fn) : called after exit animation completes
 *  - autoHideMs (number) : demo convenience — loader auto-hides after this many ms if provided
 *
 * Usage:
 * import LoadingScreen from "./components/LoadingScreen";
 * <LoadingScreen autoHideMs={2200} onFinish={() => setShow(false)} />
 */

export default function LoadingScreen({
  isLoaded = false,
  onFinish,
  autoHideMs = 0,
}) {
  const rootRef = useRef(null);
  const logoRef = useRef(null);
  const dotsRef = useRef([]);
  const tlRef = useRef(null);
  const [internalLoaded, setInternalLoaded] = useState(isLoaded);
  const [visible, setVisible] = useState(true);

  // allow dotsRef to be collected
  function setDotRef(el, idx) {
    dotsRef.current[idx] = el;
  }

  useEffect(() => {
    // construct GSAP timeline for the looped micro animations
    const tl = gsap.timeline({ repeat: -1 });

    // breathe the logo (scale + shadow)
    tl.to(logoRef.current, {
      scale: 1.03,
      duration: 0.9,
      ease: "sine.inOut",
    });
    tl.to(logoRef.current, {
      scale: 1,
      duration: 0.9,
      ease: "sine.inOut",
    });

    // dot wave
    tl.to(
      dotsRef.current,
      {
        y: -8,
        stagger: { each: 0.12, yoyo: true, repeat: 1 },
        duration: 0.35,
        ease: "sine.out",
      },
      "<"
    );

    // a subtle shimmer across the entire center mark
    tl.to(
      logoRef.current,
      {
        boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
        duration: 0.6,
        ease: "sine.inOut",
      },
      "<"
    );

    tlRef.current = tl;

    return () => {
      tl.kill();
      tlRef.current = null;
    };
  }, []);

  // demo auto-hide
  useEffect(() => {
    if (autoHideMs > 0) {
      const t = setTimeout(() => setInternalLoaded(true), autoHideMs);
      return () => clearTimeout(t);
    }
  }, [autoHideMs]);

  // react to prop isLoaded or internalLoaded
  useEffect(() => {
    if (isLoaded || internalLoaded) {
      // stop the loop gracefully and play exit animation
      const exitTimeline = gsap.timeline({
        onComplete: () => {
          // mark invisible so framer can unmount
          setVisible(false);
          if (onFinish) onFinish();
        },
      });

      // quick pulse and fade out
      exitTimeline.to(rootRef.current, {
        scale: 1.02,
        duration: 0.25,
        ease: "power1.out",
      });
      exitTimeline.to(rootRef.current, {
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
      });
      exitTimeline.to(rootRef.current, { display: "none" });

      // stop infinite tl
      if (tlRef.current) tlRef.current.pause();
    }
  }, [isLoaded, internalLoaded, onFinish]);

  // Respect prefers-reduced-motion
  // We don't need to check with JS here; CSS handles it with media query, and framer/gsap animations will be mild.

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="loader-root"
          ref={rootRef}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6 } }}
          aria-hidden={!visible}
        >
          <div className="loader-center">
            <div className="logo-wrap" ref={logoRef}>
              {/* Stylized SVG logo / mark */}
              <div className="logo-text">
                <img
                  src="/assets/images/oracloud-logo.avif"
                  alt="Oracloud logo"
                  className="logo-img"
                />
              </div>
            </div>

            <div className="loader-sub">
              Loading
              <span>
                {" "}
                <div className="dots" aria-hidden>
                  <span className="dot" ref={(el) => setDotRef(el, 0)}></span>
                  <span className="dot" ref={(el) => setDotRef(el, 1)}></span>
                  <span className="dot" ref={(el) => setDotRef(el, 2)}></span>
                </div>
              </span>
            </div>
          </div>

          <div className="loader-bottom-left" />
          <div className="loader-top-right" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
