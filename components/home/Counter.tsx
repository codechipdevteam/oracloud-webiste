"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

interface CounterItem {
  icon: string;
  count: number;
  suffix: string;
  text: string;
}

const counters: CounterItem[] = [
  { icon: "icon-trophy", count: 1000, suffix: "+", text: "Projects Completed" },
  { icon: "icon-user", count: 30, suffix: "+", text: "Team Members" },
  { icon: "icon-chat", count: 99, suffix: "%", text: "Client Satisfaction" },
  {
    icon: "icon-customer-service-headset",
    count: 24,
    suffix: "/7",
    text: "Support Available",
  },
];

const Counter: React.FC = () => {
  const counterRefs = useRef<HTMLHeadingElement[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    counterRefs.current.forEach((el, idx) => {
      const target = { val: 0 };
      gsap.to(target, {
        val: counters[idx].count,
        duration: 2,
        ease: "power1.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%", // trigger when element comes into view
          toggleActions: "play none none none",
        },
        onUpdate: () => {
          el.textContent = Math.floor(target.val).toLocaleString();
        },
      });
    });
  }, []);

  return (
    <section className="counter-two" ref={containerRef}>
      <div
        className="counter-two__bg-shape"
        style={{
          backgroundImage:
            "url(/assets/images/shapes/counter-two-bg-shape.png)",
        }}
      />
      <div className="container">
        <div className="row">
          {counters.map((item, idx) => (
            <div className="col-xl-3 col-lg-6 col-md-6" key={idx}>
              <motion.div
                className="counter-two__single"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
              >
                <div className="counter-two__icon-inner">
                  <div className="counter-two__icon">
                    <span className={item.icon}></span>
                  </div>
                </div>
                <div className="counter-two__content">
                  <div className="counter-two__count-box">
                    <h3
                      ref={(el) => {
                        if (el) counterRefs.current[idx] = el;
                      }}
                    >
                      0
                    </h3>
                    <span>{item.suffix}</span>
                  </div>
                  <p className="counter-two__text">{item.text}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counter;
