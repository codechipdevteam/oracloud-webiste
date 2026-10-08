"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaCode,
  FaMobileAlt,
  FaCogs,
  FaShoppingCart,
  FaCloud,
  FaTools,
  FaBullhorn,
  FaHashtag,
  FaVideo,
  FaPenNib,
  FaGraduationCap,
} from "react-icons/fa";

interface ServiceCard {
  icon: React.ReactNode;
  title: string;
  text: string;
  link: string;
}

const itServices: ServiceCard[] = [
  {
    icon: <FaCode size={52} />,
    title: "Web Development",
    text: "High-performing, responsive websites built to represent your brand and convert visitors into customers.",
    link: "/it-services/web-development",
  },
  {
    icon: <FaMobileAlt size={52} />,
    title: "Mobile App Development",
    text: "Native and cross-platform apps for iOS and Android that keep your business in your customers' pockets.",
    link: "/it-services/mobile-app",
  },
  {
    icon: <FaCogs size={52} />,
    title: "Software Development",
    text: "Custom software, CRMs, ERPs, and automation tools designed around the way your business works.",
    link: "/it-services/software-development",
  },
  {
    icon: <FaShoppingCart size={52} />,
    title: "E-Commerce",
    text: "Online stores with secure payments, inventory management, and shopping experiences that sell 24/7.",
    link: "/it-services/e-commerce",
  },
  {
    icon: <FaCloud size={52} />,
    title: "Cloud Solutions",
    text: "Cloud migration, hosting, and infrastructure that scale with your business while keeping costs in check.",
    link: "/it-services/cloud-solutions",
  },
  {
    icon: <FaTools size={52} />,
    title: "Maintenance & Support",
    text: "Ongoing updates, monitoring, and technical support that keep your systems fast, secure, and reliable.",
    link: "/it-services/maintanance-support",
  },
];

const marketingServices: ServiceCard[] = [
  {
    icon: <FaBullhorn size={52} />,
    title: "Digital Marketing & PR",
    text: "SEO, digital advertising, content, and PR campaigns that grow your visibility and bring in leads.",
    link: "/digital-marketing-services/digital-marketing",
  },
  {
    icon: <FaHashtag size={52} />,
    title: "Social Media Marketing",
    text: "Professionally designed posts, stories, and campaigns that keep your brand active on every platform.",
    link: "/digital-marketing-services/social-media-marketing",
  },
  {
    icon: <FaVideo size={52} />,
    title: "Commercial Ad Production",
    text: "Concept-to-screen video ads — scripting, filming, animation, and post-production that make brands memorable.",
    link: "/digital-marketing-services/ads-production",
  },
  {
    icon: <FaPenNib size={52} />,
    title: "Logo Creation & Branding",
    text: "Distinct logos and complete brand identities that make your business instantly recognizable.",
    link: "/digital-marketing-services/logo-creation",
  },
  {
    icon: <FaGraduationCap size={52} />,
    title: "School & College Packages",
    text: "Marketing and branding packages built for educational institutions — from admissions campaigns to event coverage.",
    link: "/digital-marketing-services/school-college-packages",
  },
];

const SectionHeader: React.FC<{ tagline: string; children: React.ReactNode }> = ({
  tagline,
  children,
}) => (
  <div className="section-title text-center">
    <div className="section-title__tagline-box">
      <div className="section-title__tagline-shape-1"></div>
      <span className="section-title__tagline">{tagline}</span>
      <div className="section-title__tagline-shape-2"></div>
    </div>
    <h2 className="section-title__title">{children}</h2>
  </div>
);

const CardGrid: React.FC<{ cards: ServiceCard[] }> = ({ cards }) => (
  <div className="row justify-content-center">
    {cards.map((card, index) => (
      <div className="col-xl-4 col-lg-6 col-md-6 mb-4" key={card.title}>
        <motion.div
          className="services-three__single h-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
        >
          <div className="services-three__icon">
            <span>{card.icon}</span>
          </div>
          <h3 className="services-three__title">
            <Link href={card.link}>{card.title}</Link>
          </h3>
          <p className="services-three__text">{card.text}</p>
          <Link href={card.link} className="services-three__btn">
            Read More <span className="icon-right-arrow-1"></span>
          </Link>
        </motion.div>
      </div>
    ))}
  </div>
);

const ServicesGrid = () => {
  return (
    <section className="services-three services-hub">
      <div className="container">
        <SectionHeader tagline="IT Services">
          Technology That <span>Powers Your Business</span>
        </SectionHeader>
        <CardGrid cards={itServices} />

        <div className="pt-5">
          <SectionHeader tagline="Digital Marketing">
            Marketing That <span>Gets You Noticed</span>
          </SectionHeader>
        </div>
        <CardGrid cards={marketingServices} />
      </div>
    </section>
  );
};

export default ServicesGrid;
