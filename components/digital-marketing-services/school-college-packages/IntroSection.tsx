// components/IntroSection.tsx
"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

interface ContentItem {
  title: string;
  text: string;
  list?: string[];
  image: string;
}

const contents: ContentItem[] = [
  {
    title: "Benefits for Educational Institutions",
    text: `Our specialized solutions help schools and colleges achieve their marketing and branding goals effectively. Key benefits include:`,
    list: [
      "Boosted admissions through attractive, targeted marketing",
      "Stronger brand recognition within local and online communities",
      "Effective communication with parents, students, and staff",
      "Streamlined content creation and social media management",
      "Cost-effective packages tailored for CBSE, ICSE, and state syllabus schools",
    ],
    image: "/assets/images/resources/benefits.png",
  },
  {
    title: "Why Choose Oracloud for Educational Branding",
    text: `With deep experience in educational marketing, Oracloud understands the importance of culturally relevant, high-quality content that respects school values and traditions. We deliver creative solutions matched to academic calendars and community expectations, all centered on results and engagement.`,
    list: [],
    image: "/assets/images/resources/choose.png",
  },
];

const socialServices = [
  {
    name: "Monthly Poster Designs",
    image: "/assets/images/icon/poster-design.png",
    description:
      "Customized, calendar-based posters featuring events, achievements, festivals, and important notices that reflect your school's identity.",
  },
  {
    name: "Video Content Creation",
    image: "/assets/images/icon/video-content.png",
    description:
      "Engaging videos for school functions, admissions, promotional campaigns, and social media sharing to capture attention and communicate effectively.",
  },
  {
    name: "Social Media Management",
    image: "/assets/images/icon/social-media-2.png",
    description:
      "Regular updates and content scheduling on platforms like Facebook, Instagram, and LinkedIn to keep your institution connected and visible online.",
  },
  {
    name: "Campaign Planning",
    image: "/assets/images/icon/campaign.png",
    description:
      "Digital strategies tailored for admission drives, annual day celebrations, sports meets, and other key school/college activities.",
  },
  {
    name: "Branding Solutions",
    image: "/assets/images/icon/branding2.png",
    description:
      "From logo refreshers to complete brand identity packages, ensuring consistent messaging and visuals across all platforms.",
  },
  {
    name: "Parent and Student Engagement",
    image: "/assets/images/icon/school.png",
    description:
      "Targeted digital marketing campaigns to keep the community informed and involved.",
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

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
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
              {/* <div className="why-choose-two__img"> */}
              <Image
                src="/assets/images/stock/photo-1509062522246-3755977927d7-w570-h596.webp"
                alt="Students in a classroom"
                width={570}
                height={596}
              />
              {/* </div> */}
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
                <h2 className="section-title__title title-animation">
                  Exclusive School & College Packages
                </h2>
              </div>

              <p className="why-choose-one__text mb-3">
                Parents research schools the way they research everything else
                now — online. Oracloud’s School & College Packages keep
                Kerala’s institutions present and polished where it counts:
                admissions campaigns, event coverage, and a steady, proud
                social media presence.
              </p>
            </div>
          </div>
          <div className="row content-row2 justify-content-center pb-4">
            <h3 className="text-center pb-5">
              What Our Exclusive Packages Include
            </h3>
            {socialServices.map((service, index) => (
              <motion.div
                key={index}
                className="col-md-6 text-center mb-4"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                custom={index}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                }}
              >
                <div className="content-card p-3 h-100 d-flex flex-column align-items-center">
                  <motion.div
                    className="icon mb-3"
                    whileHover={{ rotate: 10 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <Image
                      src={service.image}
                      alt={service.name}
                      width={64}
                      height={64}
                    />
                  </motion.div>
                  <div className="content pt-3">
                    <h4 className="py-2">{service.name}</h4>
                    <p>{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
                <img src={item.image} width={512} height={512} className="img-fluid" alt={item.title} />
              </motion.div>
            </div>
          );
        })}
        <motion.h3
          className="pt-3"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          From admission season to annual day, Oracloud keeps your
          institution’s story in front of students, parents, and the
          community.
        </motion.h3>{" "}
      </div>
    </section>
  );
};

export default IntroSection;
