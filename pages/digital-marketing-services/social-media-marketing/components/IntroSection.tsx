// components/IntroSection.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { h2 } from "framer-motion/client";
import LottieAnimation from "@/components/LottieAnimation";
import styles from "./IntroSection.module.css";

interface ContentItem {
  title: string;
  text: string;
  list?: string[];
  image: string;
  alt?: string;
}

const contents: ContentItem[] = [
  {
    title: "Our Strategic Creative Process",
    text: `Every successful campaign begins with detailed planning: analyzing your business goals, target audience preferences, and unique brand voice. Our designers propose creative ideas for posts, banners, and infographics, blending striking visual style with strategic, action-oriented copy to maximize reach. We map out comprehensive content calendars for educational institutions, local businesses, and corporate brands to maintain a consistent digital presence and run seamless event-based campaigns.`,
    image: "/assets/images/resources/creative-process.png",
    alt: "Strategic content calendar planning and creative development process by Oracloud Technologies.",
  },
  {
    title: "Custom Social Media Kits",
    text: `Clients can order comprehensive "social media kits" personalized
    for brand, institution, or campaign—including:`,
    list: [
      "Profile and page graphics",
      "Custom-designed icons and emoji sets",
      "Infographics and story templates",
      "Ad post banners and video snippets",
      "Motion graphics and animations for announcements or celebrations",
    ],
    image: "/assets/images/resources/social-media-kit.png",
    alt: "Custom social media branding kits including icons, story templates, and motion graphics.",
  },
  {
    title: "Business Benefits",
    text: ``,
    list: [
      "Immediate audience engagement and higher digital interaction rates",
      "Consistent, professional brand identity across all social channels",
      "Direct and effective communication with your target audience — whether it's customers, clients, or students and parents",
      "Improved online visibility for events, campaigns, and key achievements",
      "Proactive reputation management and community building online",
    ],
    image: "/assets/images/resources/business-benefits.png",
    alt: "Digital growth analytics and business performance metrics for Oracloud Technologies clients.",
  },
  {
    title: "Affordable Packages & Fast Delivery",
    text: `Oracloud offers flexible social media packages tailored to your needs — 
from monthly subscriptions ideal for schools, colleges, and institutions 
to custom single-project orders for local businesses and brands. Every 
package guarantees fast production, strict quality assurance, and 
dedicated client feedback loops, ensuring each post is polished, 
appealing, and ready to convert.
`,
    image: "/assets/images/resources/affordable.png ",
    alt: "Affordable social media design packages for businesses and educational institutions in Kerala.",
  },
];

const socialServices = [
  {
    name: "Facebook",
    icon: <FaFacebookF size={32} />,
    description:
      "Facebook page management with custom banners, event flyers, regular posting and Facebook ads for local customers.",
  },
  {
    name: "Instagram",
    icon: <FaInstagram size={32} />,
    description:
      "Instagram management with feed design, story templates, reels shooting and editing, regular posting and Instagram ads.",
  },
  {
    name: "X (Twitter)",
    icon: <FaXTwitter size={32} />,
    description:
      "X (Twitter) management with regular updates, header and campaign graphics, and audience engagement.",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedinIn size={32} />,
    description:
      "LinkedIn management with company page setup, business infographics, professional updates and LinkedIn ads.",
  },
  {
    name: "YouTube",
    icon: <FaYoutube size={32} />,
    description:
      "YouTube channel management with channel branding, custom thumbnails, video editing, intros and content planning.",
  },
];

// Animation variants
const textVariant = (fromLeft: boolean) => ({
  hidden: { opacity: 0, x: fromLeft ? -50 : 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
});

const imageVariant = (fromLeft: boolean) => ({
  hidden: { opacity: 0, x: fromLeft ? 50 : -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
});

const listContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 }, // delay each list item
  },
};

const listItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

const IntroSection: React.FC = () => {
  return (
    <section className="why-choose-two">
      {/* Floating Shapes */}
      <div className="why-choose-two__shape-1 float-bob-y">
        <img
          src="/assets/images/shapes/why-choose-two-shape-1.png"
          alt="shape"
        />
      </div>
      <div className="why-choose-two__shape-2"></div>
      <div className="why-choose-two__shape-3"></div>

      <div className="container">
        <div className="row align-items-center">
          {/* Left Column - Image */}
          <div className="col-xl-6">
            <div
              className="why-choose-two__left wow slideInLeft"
              data-wow-delay="100ms"
              data-wow-duration="2500ms"
            >
              <div className="why-choose-two__img">
                <Image
                  src="/assets/images/resources/social-media-marketing.webp"
                  alt="Illustration of a robot holding a clipboard"
                  width={570}
                  height={596}
                  layout="responsive"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="col-xl-6">
            <div className="why-choose-two__right">
              <div className="section-title text-left sec-title-animation animation-style2">
                {/* <div className="section-title__tagline-box">
                  <div className="section-title__tagline-shape-1"></div>
                  <span className="section-title__tagline">Why Choose Us</span>
                  <div className="section-title__tagline-shape-2"></div>
                </div> */}
                {/* <h2 className="section-title__title title-animation">
                  Social Media Design & Content Creation
                </h2> */}
              </div>

              <p className="why-choose-one__text mb-3">
                Oracloud is a social media management and marketing agency based
                in Chalakudy. We work with local businesses, schools, colleges
                and startups across Thrissur and Kerala who want their social
                media to do more than just look good.
              </p>
              <p className="why-choose-one__text mb-3">
                Our team handles everything behind your pages: a monthly content
                plan, designed posts and reels, captions and hashtags,
                scheduling, community replies and paid campaigns. Every month
                you get a clear report showing what worked.
              </p>
              <a
                href="https://wa.me/917034302111"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappBtn}
              >
                <span className={styles.whatsappBtnIcon}>
                  <FaWhatsapp />
                </span>
                Chat on WhatsApp
              </a>
              <h2 className="mb-2">
                Our Social Media Management & Marketing Services{" "}
              </h2>
              <p className="why-choose-one__text">
                Every post that goes out under your name is a small ad for your
                brand. We plan, design, publish and track your social media, so
                your pages bring in enquiries and not just likes. Each month
                starts with a content calendar built around your goals, audience
                and brand voice, followed by custom post designs, banners and
                story templates styled for each platform. We also handle video
                shooting and editing for reels and short videos, with captions,
                music and motion graphics, so your content looks professional
                and keeps people watching.
              </p>
            </div>
          </div>
        </div>
        <div className="row align-items-center justify-content-center">
          <div className="col-xl-8">
            <h3 className="mb-2 mt-4">What You Get Every Month</h3>
            <p className="why-choose-one__text">
              We handle regular posting, captions, hashtags, replies to comments
              and messages, and your online reputation. For faster results we
              run targeted Facebook and Instagram ads that bring in leads, calls
              and store visits. At the end of every month you get a simple
              report on reach, enquiries and results, along with what we will
              improve next.
            </p>
            <Link href="/contact" className="thm-btn mt-3">
              Get a Free Quote <span className="icon-right-arrow"></span>
            </Link>
          </div>
          <div className="col-md-3">
            {/* <img
              src="/assets/images/services/social-media.avif"
              alt="Why Choose Us"
              className="img-fluid"
            /> */}
            <LottieAnimation
              src="/animations/social-media.lottie"
              width={400}
              height={400}
              loop={false}
            />
          </div>
        </div>
        <div className="row intro-row justify-content-center pb-4">
          <h2 className="text-center py-4">
            Platforms We Master for Your Brand Growth
          </h2>
          {socialServices.map((service, index) => (
            <div className="col-md-4 text-center mb-4" key={index}>
              <div className="icon mb-3">{service.icon}</div>
              <div className="content pt-3">
                <h4 className="py-2">{service.name}</h4>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        {contents.map((item, index) => {
          const reverse = index % 2 !== 0; // alternate layout
          return (
            <div
              key={index}
              className={`row align-items-center content-row ${
                reverse ? "flex-md-row-reverse" : ""
              }`}
            >
              {/* Text */}
              <motion.div
                className="col-md-7"
                variants={textVariant(!reverse)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <h2>{item.title}</h2>
                <p>{item.text}</p>

                {item.list && (
                  <motion.ul
                    variants={listContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    {item.list.map((point, i) => (
                      <motion.li key={i} variants={listItem}>
                        {point}
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </motion.div>

              {/* Image */}
              <motion.div
                className="col-md-5"
                variants={imageVariant(!reverse)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <img src={item.image} className="img-fluid" alt={item.alt} />
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default IntroSection;
