"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const portfolioItems = [
  {
    type: "image",
    image: "/assets/images/portfolio/wincoast.jpg",
    tags: ["Web Development", "Branding"],
    title: "Wincoast Group",
    text: "Wincoast Group began its journey in 2007, founded by a group of socially conscious entrepreneurs in Thrissur district.",
    link: "https://wincoastgroup.com/",
    popup: "/assets/images/portfolio/wincoast.jpg",
    year: "2025",
  },
  {
    type: "image",
    image: "/assets/images/portfolio/moneyframe.jpg",
    tags: ["Web Development", "Product Design"],
    title: "Money Frame",
    text: "At Money Frame, we believe in building a strong financial foundation for individuals and businesses alike.",
    link: "https://www.moneyframe.co.in/",
    popup: "/assets/images/portfolio/moneyframe.jpg",
    year: "2025",
  },
  {
    type: "youtube",
    videoId: "p-65rpunYag",
    tags: ["Product Video", "Branding"],
    title: "Jewel Rock – Intro",
    text: "A short brand introduction video for Jewel Rock.",
    year: "2025",
  },
  {
    type: "youtube",
    videoId: "MjnRNdgypWg",
    tags: ["Product Video", "Branding"],
    title: "Decorative Blinds – Intro",
    text: "A short brand introduction video for Decorative Blinds.",
    year: "2025",
  },
];

export default function PortfolioList() {
  const [activeItem, setActiveItem] = useState<any>(null);

  return (
    <>
      <section className="portfolio-page">
        <h2 className="portfolio-one__big-text">portfolio</h2>

        <div className="container">
          {/* Section header (site pattern: tagline pill + title + short intro) */}
          <motion.div
            className="section-title text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-title__tagline-box">
              <div className="section-title__tagline-shape-1"></div>
              <span className="section-title__tagline">Portfolio</span>
              <div className="section-title__tagline-shape-2"></div>
            </div>
            <h2 className="section-title__title">
              Work That <span>Went Live</span>
            </h2>
          </motion.div>
          <motion.p
            className="text-center"
            style={{ maxWidth: "680px", margin: "20px auto 50px" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            A few of the websites and brand films we&rsquo;ve built and shipped
            for clients — click any of them for a closer look.
          </motion.p>
          <div className="row">
            {portfolioItems.map((item, index) => {
              const youtubeThumb =
                item.type === "youtube"
                  ? `https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg`
                  : item.image;

              return (
                <motion.div
                  key={index}
                  className="col-xl-4 col-lg-6 col-md-6"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="portfolio-one__single">
                    <div
                      className="portfolio-one__img-box"
                      onClick={() => setActiveItem(item)}
                      style={{ cursor: "pointer" }}
                    >
                      <div className="portfolio-one__img">
                        <Image
                          src={youtubeThumb}
                          alt={item.title}
                          width={600}
                          height={400}
                        />

                        {item.type === "youtube" && (
                          <span className="portfolio-one__play">▶</span>
                        )}

                        <div className="portfolio-one__tag">
                          {item.tags.map((tag: string, i: number) => (
                            <span key={i}>{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="portfolio-one__content">
                      <h3 className="portfolio-one__title">
                        <a
                          className="portfolio-link"
                          onClick={() => setActiveItem(item)}
                        >
                          {item.title}
                        </a>
                      </h3>

                      <p className="portfolio-one__text">{item.text}</p>

                      {item.link && (
                        <div className="portfolio-one__arrow">
                          <a href={item.link} target="_blank">
                            <span className="icon-right-arrow"></span>
                          </a>
                        </div>
                      )}

                      <div className="portfolio-one__year">
                        <span>{item.year}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            className="portfolio-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveItem(null)}
          >
            <motion.div
              className="portfolio-modal__content"
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="portfolio-modal__close"
                onClick={() => setActiveItem(null)}
              >
                ✕
              </button>

              {activeItem.type === "image" && (
                <Image
                  src={activeItem.popup}
                  alt={activeItem.title}
                  width={900}
                  height={600}
                />
              )}

              {activeItem.type === "youtube" && (
                <div className="portfolio-modal__video">
                  <iframe
                    src={`https://www.youtube.com/embed/${activeItem.videoId}?autoplay=1`}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
