// File: components/ScrollToTop.jsx
"use client";

import React, { useEffect, useState, useRef } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    const doc = () => document.documentElement || document.body;

    function update() {
      const scrollTop =
        (document.documentElement && document.documentElement.scrollTop) ||
        window.pageYOffset ||
        document.body.scrollTop ||
        0;
      const scrollHeight =
        document.documentElement.scrollHeight ||
        document.body.scrollHeight ||
        0;
      const clientHeight =
        document.documentElement.clientHeight || window.innerHeight || 0;
      const max = Math.max(scrollHeight - clientHeight, 0);
      const pct = max > 0 ? Math.min(1, scrollTop / max) : 0;
      setProgress(pct);
      setVisible(scrollTop > 160);
    }

    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const circumference = 2 * Math.PI * 16; // r = 16
  const dashOffset = circumference - progress * circumference;

  function handleClick() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      window.scrollTo(0, 0);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <button
      className={`scroll-to-top ${visible ? "visible" : "hidden"}`}
      onClick={handleClick}
      aria-label="Scroll to top"
      title="Scroll to top"
    >
      <span className="progress-ring" aria-hidden>
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            className="ring-bg"
            cx="24"
            cy="24"
            r="16"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
            stroke="currentColor"
            style={{ opacity: 0.08 }}
          />
          <circle
            className="ring-progress"
            cx="24"
            cy="24"
            r="16"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
            stroke="currentColor"
            strokeDasharray={circumference}
            strokeDashoffset={dashOffset}
            style={{ transform: "rotate(-90deg)", transformOrigin: "50% 50%" }}
          />
        </svg>
      </span>

      <span className="arrow" aria-hidden>
        {/* simple arrow using svg */}
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          focusable="false"
          aria-hidden
        >
          <path
            d="M12 5v14M5 12l7-7 7 7"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </span>
    </button>
  );
}
