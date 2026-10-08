"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export interface TechItem {
  name: string;
  icon?: React.ReactNode;
  image?: string;
}

interface TechSliderProps {
  topRowTech: TechItem[]; // top row technologies
  bottomRowTech?: TechItem[]; // bottom row technologies (optional)
  speedTop?: number; // duration for top row
  speedBottom?: number; // duration for bottom row
  iconSize?: number; // size of icons
  textClassName?: string; // optional text styling class
  itemSpacing?: string; // spacing between items (e.g., "mr-4")
}

const TechSlider: React.FC<TechSliderProps> = ({
  topRowTech,
  bottomRowTech = [], // default empty array
  speedTop = 40,
  speedBottom = 50,
  iconSize = 50,
  textClassName = "text-sm mt-1",
  itemSpacing = "mr-6",
}) => {
  // Duplicate items for seamless scrolling
  const topItems = [...topRowTech, ...topRowTech];
  const bottomItems = bottomRowTech.length
    ? [...bottomRowTech, ...bottomRowTech]
    : [];

  const renderTechItem = (tech: TechItem, index: number, rowKey: string) => (
    <div className={`tech-item ${itemSpacing}`} key={`${rowKey}-${index}`}>
      {tech.icon ? (
        <span className="tech-icon" style={{ fontSize: iconSize }}>
          {tech.icon}
        </span>
      ) : tech.image ? (
        <Image
          src={tech.image}
          alt={tech.name}
          width={iconSize}
          height={iconSize}
        />
      ) : null}
      <p className={textClassName}>{tech.name}</p>
    </div>
  );

  return (
    <div className="tech-marquee-container">
      {/* Top row scrolling left */}
      <motion.div
        className="tech-marquee-row"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: speedTop, ease: "linear" }}
      >
        {topItems.map((tech, i) => renderTechItem(tech, i, "top"))}
      </motion.div>

      {/* Bottom row scrolling right (render only if provided) */}
      {bottomItems.length > 0 && (
        <motion.div
          className="tech-marquee-row bottom-row"
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            repeat: Infinity,
            duration: speedBottom,
            ease: "linear",
          }}
        >
          {bottomItems.map((tech, i) => renderTechItem(tech, i, "bottom"))}
        </motion.div>
      )}
    </div>
  );
};

export default TechSlider;
