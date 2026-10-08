"use client";

import React from "react";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  delay: string;
}

// Company social profiles (shared across the team — no individual profiles exist).
const social = {
  facebook: "https://www.facebook.com/people/Oracloud/61560252886547/",
  instagram: "https://www.instagram.com/oracloud_official/",
  linkedin: "https://www.linkedin.com/in/oracloud-technologies-95b6a6314/",
};

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Linto John",
    role: "Director - Operations & Development",
    image: "/assets/images/team/linto.webp",
    bio: "Over a decade in business, running multiple ventures before Oracloud. Linto heads operations and development — keeping projects on schedule, clients in the loop, and every build on track.",
    delay: "100ms",
  },
  {
    id: 2,
    name: "Jojo Johny",
    role: "Director - Marketing & Production",
    image: "/assets/images/team/jojo.webp",
    bio: "More than ten years across brand campaigns, ad film shoots, music production, and social media. Jojo leads marketing and production — turning ideas into content people stop and watch.",
    delay: "200ms",
  },
];

const TeamSection: React.FC = () => {
  return (
    <section className="team-page">
      {/* Background Shape */}
      <div className="team-page__shape-1">
        <Image
          src="/assets/images/shapes/team-page-shape-1.png"
          alt=""
          width={250}
          height={250}
        />
      </div>

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
            <span className="section-title__tagline">Leadership</span>
            <div className="section-title__tagline-shape-2"></div>
          </div>
          <h2 className="section-title__title">
            Meet the <span>Core Team</span>
          </h2>
        </motion.div>
        <motion.p
          className="text-center"
          style={{ maxWidth: "660px", margin: "20px auto 50px" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Oracloud is led by two directors — covering operations, development,
          marketing, and production — backed by a 30+ strong team of
          developers, designers, and marketers who bring every project to
          life.
        </motion.p>
        <div className="row justify-content-center">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className={`col-xl-4 col-lg-4 col-md-6 wow ${
                index % 2 === 0 ? "fadeInLeft" : "fadeInRight"
              }`}
              data-wow-delay={member.delay}
            >
              <div className="team-one__single">
                <div className="team-one__img-box">
                  <div className="team-one__img">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={300}
                      height={300}
                      className="img-fluid"
                    />
                  </div>

                  <div className="team-one__social-box-inner">
                    <div className="team-one__social-box">
                      <div className="team-one__social">
                        <a
                          href={social.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Oracloud on Facebook"
                        >
                          <span className="icon-facebook"></span>
                        </a>
                        <a
                          href={social.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Oracloud on Instagram"
                        >
                          <FaInstagram />
                        </a>
                      </div>
                      <div className="team-one__social">
                        <a
                          href={social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Oracloud on LinkedIn"
                        >
                          <span className="icon-linkedin"></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="team-one__content">
                  <div className="team-one__title-box">
                    <p className="team-one__sub-title">
                      <span></span> {member.role}
                    </p>
                    <h3 className="team-one__title">{member.name}</h3>
                  </div>
                </div>
              </div>
              {/* Bio sits OUTSIDE .team-one__single: the template pops the
                  photo's social overlay on hover of that whole wrapper, and
                  the bio shouldn't trigger it. The -10px top margin collapses
                  against the wrapper's 22px bottom margin (net 12px gap). */}
              <p
                style={{
                  margin: "-10px 0 22px",
                  paddingLeft: "12px",
                  fontSize: "15px",
                  lineHeight: 1.7,
                  opacity: 0.85,
                }}
              >
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
