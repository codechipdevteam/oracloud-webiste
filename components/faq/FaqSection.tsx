"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export interface FaqItem {
  question: string;
  answer1: string;
  answer2: string;
  more?: { href: string; label: string };
}

export interface FaqGroup {
  title: string;
  items: FaqItem[];
}

// Single source of truth — the page's FAQPage JSON-LD is built from this too.
export const faqGroups: FaqGroup[] = [
  {
    title: "Services & Process",
    items: [
      {
        question: "What services does Oracloud offer?",
        answer1:
          "Everything digital under one roof. On the IT side: websites, mobile apps, custom software, e-commerce stores, cloud setups, and ongoing maintenance.",
        answer2:
          "On the marketing side: social media, ad films, logo and branding work, and dedicated packages for schools and colleges.",
        more: { href: "/services", label: "See all services" },
      },
      {
        question: "How does a project usually start?",
        answer1:
          "With a conversation. Send the contact form, call, or email us — tell us what you're trying to build or fix, and we'll talk it through.",
        answer2:
          "After that you get a written proposal with the scope, cost, and timeline. The conversation costs nothing and there's no obligation.",
      },
      {
        question: "Do we need to meet in person?",
        answer1:
          "Only if you want to. Our office is at Anamala Junction, Chalakudy — if you're nearby, drop in during office hours and talk to us over a coffee.",
        answer2:
          "Most projects run over calls, email, and WhatsApp updates. We work with clients across India without a single site visit.",
      },
      {
        question: "Can you take over a website or app someone else built?",
        answer1:
          "Yes — it happens more often than you'd think. We start with a quick audit of what exists: the code, the hosting, and what's actually broken.",
        answer2:
          "Then we give you an honest recommendation. Sometimes it's a repair, sometimes a rebuild is genuinely cheaper — either way, you'll know why.",
      },
    ],
  },
  {
    title: "Pricing & Timelines",
    items: [
      {
        question: "How much does a website cost?",
        answer1:
          "It depends on what the site needs to do — a five-page business site and an online store with payments are very different projects.",
        answer2:
          "That's why we don't have a rate card. Tell us what you need and you'll get a fixed written quote before any work starts — and that price holds unless the scope changes.",
      },
      {
        question: "How long will my project take?",
        answer1:
          "A straightforward business website is usually live within a few weeks. E-commerce and custom software take longer and are planned in milestones.",
        answer2:
          "You'll see the timeline in the proposal before you commit, and you'll always know which stage your project is in.",
      },
      {
        question: "Do you work with small businesses and schools?",
        answer1:
          "All the time. Our clients range from local shops and growing startups to schools, colleges, and established companies.",
        answer2:
          "Schools and colleges even get their own dedicated marketing packages — admissions campaigns, social media, and event coverage.",
        more: {
          href: "/digital-marketing-services/school-college-packages",
          label: "School & college packages",
        },
      },
    ],
  },
  {
    title: "Support & Maintenance",
    items: [
      {
        question: "What happens after my website goes live?",
        answer1:
          "We don't hand over the keys and disappear. Maintenance plans cover updates, backups, security patches, and the small changes every site eventually needs.",
        answer2:
          "Prefer to manage it yourself? That's fine too — we hand everything over properly, with access and documentation in your name.",
        more: {
          href: "/it-services/maintanance-support",
          label: "About maintenance & support",
        },
      },
      {
        question: "Do you handle hosting, domains, and business email?",
        answer1:
          "Yes. We register domains, set up hosting, and configure business email as part of delivery — one point of contact instead of three vendors.",
        answer2:
          "Everything is registered in your name, so the domain and accounts stay yours.",
      },
      {
        question: "How do I reach support when something breaks?",
        answer1:
          "Call +91 7034 302 111 or email connect@oracloud.in. Office hours are Monday to Friday 9–5, and 9–1 on weekends.",
        answer2:
          "Clients on maintenance plans get round-the-clock attention for critical issues — that's what the 24/7 support on our homepage means.",
      },
      {
        question: "Is my data safe with you?",
        answer1:
          "Security is part of the build, not an add-on — SSL everywhere, access controls, and secure coding practices on everything we deliver.",
        answer2:
          "We also set up automated backups and recovery, so one bad day doesn't cost you your data.",
      },
    ],
  },
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  // Global running index so only one item is open across all groups.
  let runningIndex = -1;

  return (
    <section className="faq-two">
      {/* Shapes */}
      <div className="faq-two__shape-1">
        <Image
          src="/assets/images/shapes/faq-two-shape-1.png"
          alt="shape"
          width={200}
          height={200}
        />
      </div>
      <div className="faq-two__shape-2">
        <Image
          src="/assets/images/shapes/faq-two-shape-2.png"
          alt="shape"
          width={200}
          height={200}
        />
      </div>

      <div className="container">
        <div className="row">
          {/* Left Side */}
          <div className="col-xl-5">
            <div className="faq-two__left">
              <div className="section-title text-left sec-title-animation animation-style2">
                <div className="section-title__tagline-box">
                  <div className="section-title__tagline-shape-1"></div>
                  <span className="section-title__tagline">FAQS</span>
                  <div className="section-title__tagline-shape-2"></div>
                </div>
                <h2 className="section-title__title title-animation">
                  Frequently Asked <span>Questions</span>
                </h2>
              </div>
              <p className="faq-two__text">
                Straight answers to the questions we hear <br /> most — services,
                pricing, timelines, and support.
              </p>
              <div className="faq-two__bdr"></div>

              <div className="faq-two__contact">
                <div className="icon">
                  <span className="icon-customer-service-headset"></span>
                </div>
                <div className="content">
                  <span>Get Support</span>
                  <p>
                    <a href="tel:+917034302111">+91 7034 302 111</a>
                  </p>
                </div>
              </div>

              <div className="faq-two__btn-box">
                <Link href="/contact" className="thm-btn">
                  Get in Touch <span className="icon-right-arrow"></span>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="col-xl-7">
            <div className="faq-two__right">
              {faqGroups.map((group, groupIdx) => (
                <div key={group.title}>
                  <h4
                    style={{
                      margin: groupIdx === 0 ? "0 0 16px" : "40px 0 16px",
                      fontSize: "18px",
                    }}
                  >
                    {group.title}
                  </h4>
                  {/* faq-one-accrodion is baked in statically: script.js adds
                      it from data-grp-name only on a full page load, so SPA
                      navigation would otherwise render unstyled accordions. */}
                  <div
                    className="accrodion-grp faq-one-accrodion"
                    data-grp-name="faq-one-accrodion"
                  >
                    {group.items.map((faq) => {
                      runningIndex += 1;
                      const index = runningIndex;
                      return (
                        <div
                          key={faq.question}
                          className={`accrodion ${
                            activeIndex === index ? "active" : ""
                          }`}
                        >
                          <div
                            className="accrodion-title"
                            role="button"
                            tabIndex={0}
                            aria-expanded={activeIndex === index}
                            onClick={() => toggleFAQ(index)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter" || e.key === " ") {
                                e.preventDefault();
                                toggleFAQ(index);
                              }
                            }}
                            style={{ cursor: "pointer" }}
                          >
                            <h4>{faq.question}</h4>
                          </div>
                          {activeIndex === index && (
                            <div className="accrodion-content">
                              <div className="inner">
                                <p className="accrodion-content__text-1">
                                  {faq.answer1}
                                </p>
                                <p className="accrodion-content__text-2">
                                  {faq.answer2}
                                </p>
                                {faq.more && (
                                  <p
                                    className="accrodion-content__text-2"
                                    style={{ marginTop: "10px" }}
                                  >
                                    <Link
                                      href={faq.more.href}
                                      style={{ textDecoration: "underline" }}
                                    >
                                      {faq.more.label} →
                                    </Link>
                                  </p>
                                )}
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
