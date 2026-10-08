"use client";

import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), { ssr: false });

const Banner: React.FC = () => {
  // Render server-side so the hero (the LCP element) is in the static HTML;
  // Swiper enhances it on the client after hydration.
  const slides = [
    {
      video: "/assets/videos/oracloud-banner.webm",
      subtitle: "IT & Digital Services, Under One Roof",
      title: "The Tech Team Behind Growing Businesses",
      text: "Websites, mobile apps, custom software, and cloud — designed, built, and supported by one team in Kerala.",
    },
    {
      video: "/assets/videos/oracloud-banner.webm",
      subtitle: "Web, Apps & Cloud",
      title: "From First Website to Full Cloud",
      text: "We build the technology your business runs on — and stay on to keep it fast, secure, and up to date.",
    },
    {
      video: "/assets/videos/oracloud-banner.webm",
      subtitle: "Digital Marketing & Branding",
      title: "Built to Be Found and Remembered",
      text: "SEO, social media, ad films, and branding that put your business in front of the right people — from Chalakudy to the world.",
    },
  ];

  return (
    <section className="main-slider-two">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        slidesPerView={1}
        // rewind (not loop): loop clones slides and, with effect:fade, the
        // visible slide can end up carrying .swiper-slide-duplicate-active
        // instead of .swiper-slide-active — and the hero text CSS only reveals
        // on .swiper-slide-active, so the shown slide's text stayed opacity:0.
        // rewind cycles 1→2→3→1 with no clones, keeping the active class on the
        // visible slide.
        rewind
        effect="fade"
        // crossFade so the outgoing slide fully fades OUT. Without it the old
        // slide's background stays at opacity:1 while its text fades away (it
        // lost .swiper-slide-active), so the hero showed a background with blank
        // text after each autoplay transition.
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: 12000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".main-slider-next",
          prevEl: ".main-slider-prev",
        }}
        // Fade autoplay hero: don't let touch/mouse drag translate the wrapper
        // (dragging moved the whole banner sideways on mobile).
        allowTouchMove={false}
        // NOTE: must NOT be "thm-swiper__slider" — the legacy script.js
        // thmSwiperInit() inits a SECOND (default-options) Swiper on any
        // .thm-swiper__slider, which fought this React Swiper and desynced the
        // .swiper-slide-active class, leaving the visible slide's text opacity:0.
        className="main-slider-two__swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="main-slider-two__bg">
              {/* ✅ Use video if available, otherwise fallback to image */}
              {slide.video ? (
                // The <source> is gated to ≥769px so phones don't download the
                // landscape video; on mobile CSS hides it and shows a gradient.
                <video
                  className="main-slider-two__video"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                >
                  <source
                    src={slide.video}
                    media="(min-width: 769px)"
                    type="video/webm"
                  />
                </video>
              ) : (
                <div
                  className="main-slider-two__bg-image"
                  style={{
                    backgroundImage: `url(${slide.bgImage})`,
                  }}
                ></div>
              )}
            </div>

            {/* Top Links */}
            <ul className="list-unstyled main-slider-two__menu">
              <li>
                <Link href="/contact">Help</Link>
              </li>
              <li>
                <Link href="/contact">Support</Link>
              </li>
              <li>
                <Link href="/faq">Faqs</Link>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="main-slider-two__social-box">
              <h4 className="main-slider-two__social-title">Follow Us:</h4>
              <div className="main-slider-two__social-box-inner">
                <Link
                  href="https://www.facebook.com/people/Oracloud/61560252886547/"
                  target="_blank"
                >
                  <span className="icon-facebook"></span>
                </Link>
                <Link
                  href="https://www.instagram.com/oracloud_official/"
                  target="_blank"
                >
                  <FaInstagram />
                </Link>
                <Link href="https://x.com/oracloudltd" target="_blank">
                  <FaXTwitter />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/oracloud-technologies-95b6a6314/"
                  target="_blank"
                >
                  <FaLinkedin />
                </Link>
              </div>
            </div>

            {/* Floating Shapes */}
            <div className="main-slider-two__shape-1"></div>
            <div className="main-slider-two__shape-2 float-bob-x">
              <Image
                src="/assets/images/shapes/main-slider-two-shape-2.png"
                alt="Shape"
                width={100}
                height={100}
              />
            </div>
            <div className="main-slider-two__shape-3 float-bob-y">
              <Image
                src="/assets/images/shapes/main-slider-two-shape-3.png"
                alt="Shape"
                width={100}
                height={100}
              />
            </div>

            {/* Content */}
            <div className="container">
              <div className="row">
                <div className="col-xl-8">
                  {/* Fade the hero content in/out on scroll (matches the
                      whileInView reveal used by the other home sections) — it
                      fades in on load and re-reveals when you scroll back up. */}
                  <motion.div
                    className="main-slider-two__content"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <p className="main-slider-two__sub-title">
                      {slide.subtitle}
                    </p>
                    <h2 className="main-slider-two__title">
                      {slide.title
                        .split(" ")
                        .map((word, i) =>
                          i === slide.title.split(" ").length - 1 ? (
                            <span key={i}>{word}</span>
                          ) : (
                            word + " "
                          )
                        )}
                    </h2>
                    <p className="main-slider-two__text">{slide.text}</p>

                    <div className="main-slider-two__btns-box">
                      <div className="main-slider-two__btn-box-1">
                        <Link href="/contact" className="thm-btn">
                          Get Started <span className="icon-right-arrow"></span>
                        </Link>
                      </div>
                      <div className="main-slider-two__btn-box-2">
                        <Link href="/about" className="thm-btn">
                          Read More <span className="icon-right-arrow"></span>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Swiper Navigation */}
      <div className="main-slider-two__nav">
        <div className="swiper-button-prev main-slider-prev">
          <i className="icon-right-up"></i>
        </div>
        <div className="swiper-button-next main-slider-next">
          <i className="icon-right-up"></i>
        </div>
      </div>
    </section>
  );
};

export default Banner;
