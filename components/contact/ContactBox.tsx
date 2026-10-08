"use client";

import React, { useState } from "react";
import Link from "next/link";
import Script from "next/script";

// Server-side PHP mailer (Apache) that actually sends the email.
const ENDPOINT = "/assets/inc/sendemail.php";

// Cloudflare Turnstile spam check. The widget renders only when this public
// site key is set, and the server enforces it only when TURNSTILE_SECRET_KEY
// exists in the server .env — so the form keeps working until both keys are
// provisioned together.
const TURNSTILE_SITE_KEY = "0x4AAAAAAD6dfrCa5rK6wo7a";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
  contact_ref: "", // honeypot — real users leave this empty (name avoids browser autofill)
};

const ContactBox: React.FC = () => {
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [feedback, setFeedback] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setFeedback("");

    // The Turnstile widget injects a hidden cf-turnstile-response input into
    // the form; read it off the DOM before any await (single-use token).
    const formEl = e.currentTarget;
    const params = new URLSearchParams(formData as Record<string, string>);
    const tsInput = formEl.querySelector<HTMLInputElement>(
      'input[name="cf-turnstile-response"]'
    );
    if (tsInput) params.set("cf-turnstile-response", tsInput.value);

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      });
      const text = await res.text();

      if (res.ok && text.includes("alert-success")) {
        setStatus("success");
        setFeedback(
          "Thanks for reaching out — your message has been sent. We'll get back to you soon."
        );
        setFormData(initialForm);
      } else {
        setStatus("error");
        setFeedback(
          text.includes("captcha-failed")
            ? "The spam check didn't pass. Please try again."
            : "Sorry, your message couldn't be sent. Please email us directly at connect@oracloud.in."
        );
      }
    } catch {
      setStatus("error");
      setFeedback(
        "Something went wrong. Please check your connection, or email connect@oracloud.in."
      );
    }

    // Turnstile tokens are single-use — get a fresh one for any next attempt.
    (window as unknown as { turnstile?: { reset?: () => void } }).turnstile?.reset?.();
  };

  return (
    <section className="contact-one" id="contact-form">
      {TURNSTILE_SITE_KEY && (
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          strategy="afterInteractive"
        />
      )}
      {/* Background Shape */}
      <div
        className="contact-one__bg-shape"
        style={{
          backgroundImage:
            "url(/assets/images/shapes/contact-one-bg-shape.png)",
        }}
      ></div>

      <div className="container">
        <div className="row">
          {/* Left Side - Contact Form — order-2 below lg so the title block leads on mobile */}
          <div className="col-xl-6 col-lg-6 order-2 order-lg-1">
            <div
              className="contact-one__left wow slideInLeft"
              data-wow-delay="100ms"
              data-wow-duration="2500ms"
            >
              <div className="contact-one__left-shape-1"></div>
              <div className="contact-one__left-shape-2"></div>

              <h3 className="contact-one__from-title">How Can We Help You?</h3>

              <form
                className="contact-one__form"
                onSubmit={handleSubmit}
                method="POST"
              >
                {/* Honeypot: hidden from users; bots that fill it are rejected server-side */}
                <input
                  type="text"
                  name="contact_ref"
                  value={formData.contact_ref}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    left: "-9999px",
                    width: "1px",
                    height: "1px",
                    opacity: 0,
                  }}
                />
                <div className="row">
                  <div className="col-xl-6 col-lg-6">
                    <h4 className="contact-one__input-title">Full Name</h4>
                    <div className="contact-one__input-box">
                      <div className="contact-one__input-icon">
                        <span className="icon-user-1"></span>
                      </div>
                      <input
                        type="text"
                        name="name"
                        aria-label="Full Name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6">
                    <h4 className="contact-one__input-title">Email Address</h4>
                    <div className="contact-one__input-box">
                      <div className="contact-one__input-icon">
                        <span className="icon-email"></span>
                      </div>
                      <input
                        type="email"
                        name="email"
                        aria-label="Email Address"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6">
                    <h4 className="contact-one__input-title">Phone Number</h4>
                    <div className="contact-one__input-box">
                      <div className="contact-one__input-icon">
                        <span className="icon-phone-call"></span>
                      </div>
                      <input
                        type="text"
                        name="phone"
                        aria-label="Phone Number"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6">
                    <h4 className="contact-one__input-title">Subject</h4>
                    <div className="contact-one__input-box">
                      <div className="contact-one__input-icon">
                        <span className="icon-edit"></span>
                      </div>
                      <input
                        type="text"
                        name="subject"
                        aria-label="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-xl-12">
                  <h4 className="contact-one__input-title">Inquiry about</h4>
                  <div className="contact-one__input-box text-message-box">
                    <div className="contact-one__input-icon">
                      <span className="icon-edit"></span>
                    </div>
                    <textarea
                      name="message"
                      aria-label="Your message"
                      placeholder="Write your message"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  {TURNSTILE_SITE_KEY && (
                    <div
                      className="cf-turnstile"
                      data-sitekey={TURNSTILE_SITE_KEY}
                      data-action="turnstile-spin-v2"
                      data-theme="dark"
                      style={{ marginTop: "20px" }}
                    ></div>
                  )}

                  <div className="contact-one__btn-box">
                    <button
                      type="submit"
                      className="thm-btn"
                      disabled={status === "sending"}
                    >
                      <span>
                        {status === "sending" ? "Sending…" : "Submit Now"}
                      </span>
                      <i className="icon-right-arrow"></i>
                    </button>
                  </div>

                  {feedback && (
                    <p
                      role="status"
                      aria-live="polite"
                      style={{
                        marginTop: "15px",
                        fontWeight: 500,
                        color: status === "success" ? "#2e7d32" : "#c62828",
                      }}
                    >
                      {feedback}
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>

          {/* Right Side - Contact Info */}
          <div className="col-xl-6 col-lg-6 order-1 order-lg-2">
            <div className="contact-one__right">
              <div className="section-title text-left sec-title-animation animation-style2">
                <div className="section-title__tagline-box">
                  <div className="section-title__tagline-shape-1"></div>
                  <span className="section-title__tagline">Get In Touch</span>
                  <div className="section-title__tagline-shape-2"></div>
                </div>
                <h2 className="section-title__title title-animation">
                  Start the Conversation <span>–</span>
                  <br />
                  <span>Reach Out Anytime</span>
                </h2>
              </div>

              <p className="contact-one__text">
                We're here to listen! Whether you have questions,
                <br />
                feedback, or just want to say hello, feel free to reach out.
                Wondering about pricing or timelines? Our{" "}
                <Link href="/faq" style={{ textDecoration: "underline" }}>
                  FAQ
                </Link>{" "}
                covers the questions we hear most.
              </p>

              <ul className="contact-one__list list-unstyled">
                <li>
                  <div className="icon">
                    <span className="icon-pin"></span>
                  </div>
                  <div className="content">
                    <h4>Location</h4>
                    <p>
                      Oracloud Technologies, First Floor, Swarnam Arcade,
                      Anamala Junction, Chalakudy, Kerala, 680307
                    </p>
                  </div>
                </li>

                <li>
                  <div className="icon">
                    <span className="icon-mail"></span>
                  </div>
                  <div className="content">
                    <h4>Email Us</h4>
                    <p>
                      <Link href="mailto:connect@oracloud.in">
                        connect@oracloud.in
                      </Link>
                    </p>
                    {/* <p>
                      <Link href="mailto:support@domain.com">
                        support@domain.com
                      </Link>
                    </p> */}
                  </div>
                </li>

                <li>
                  <div className="icon">
                    <span className="icon-phone-call"></span>
                  </div>
                  <div className="content">
                    <h4>Contact</h4>
                    <p>
                      Tel:{" "}
                      <Link href="tel:+917034302111">+91 7034 302 111</Link>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBox;
