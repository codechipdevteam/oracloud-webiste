"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const items = [
  "Front end Development",
  "UI/UX Design",
  "Product Design",
  "Digital Marketing",
  "Website Design",
  "App Development",
];

const SlidingText: React.FC = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    const list = listRef.current;

    if (!marquee || !list) return;

    const totalWidth = list.scrollWidth;

    // Infinite horizontal scroll
    gsap.to(list, {
      x: `-${totalWidth / 2}px`,
      ease: "linear",
      duration: 20,
      repeat: -1,
    });

    // Hover scale effect
    list.querySelectorAll("li").forEach((li) => {
      li.addEventListener("mouseenter", () => {
        gsap.to(li, { scale: 1.2, duration: 0.3 });
      });
      li.addEventListener("mouseleave", () => {
        gsap.to(li, { scale: 1, duration: 0.3 });
      });
    });
  }, []);

  return (
    <section
      ref={marqueeRef}
      style={{
        overflow: "hidden",
        width: "100%",
      }}
      className="slidingMarquee"
    >
      <ul
        ref={listRef}
        style={{
          display: "flex",
          gap: "40px", // spacing including separator
          padding: 0,
          margin: 0,
          whiteSpace: "nowrap",
          listStyle: "none",
          alignItems: "center",
        }}
      >
        {[...items, ...items].map((text, index) => (
          <React.Fragment key={index}>
            <li className="slidingMarquee__item">
              {text}
              <span
                style={{
                  position: "absolute",
                  bottom: "-5px",
                  left: 0,
                  width: "100%",
                  height: "3px",
                  background: "#e63946",
                  transform: "scaleX(0)",
                  transformOrigin: "left",
                  transition: "transform 0.3s",
                }}
              ></span>
            </li>

            {/* Separator */}
            <li className="seperation-circle"></li>
          </React.Fragment>
        ))}
      </ul>
    </section>
  );
};

export default SlidingText;
