// components/Footer.tsx
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="site-footer-two">
      <div className="site-footer-two__shape-1"></div>
      <div className="site-footer-two__shape-2"></div>
      <div className="site-footer-two__shape-3"></div>

      {/* Top Section */}
      <div className="site-footer-two__top">
        <div className="container">
          <div className="row">
            {/* About */}
            <div
              className="col-xl-5 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="100ms"
            >
              <div className="site-footer-two__about">
                <div className="site-footer-two__logo">
                  <Link href="/">
                    <img
                      src="/assets/images/oracloud-logo.avif"
                      className="logo-img-footer"
                    />
                  </Link>
                </div>
                <ul className="list-unstyled site-footer-two__contact-list">
                  <li>
                    <div className="site-footer-two__contact-icon">
                      <span className="icon-contact"></span>
                    </div>
                    <div className="site-footer-two__contact-content">
                      <h5 className="site-footer-two__contact-title">
                        Contact Info
                      </h5>
                      <p className="site-footer-two__contact-info">
                        <a
                          href="mailto:connect@oracloud.in"
                          className="site-footer-two__contact-mail"
                        >
                          connect@oracloud.in
                        </a>
                        <br />
                        <a
                          href="tel:+917034302111"
                          className="site-footer-two__contact-phone"
                        >
                          +91 7034 302 111
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="site-footer-two__contact-icon">
                      <span className="icon-pin"></span>
                    </div>
                    <div className="site-footer-two__contact-content">
                      <h5 className="site-footer-two__contact-title">
                        Location
                      </h5>
                      <p className="site-footer-two__contact-info">
                        Oracloud Technologies,
                        <br /> First Floor, Swarnam Arcade, Anamala Junction,
                        <br /> Chalakudy, Kerala, 680307
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="site-footer-two__contact-icon">
                      <span className="icon-clock"></span>
                    </div>
                    <div className="site-footer-two__contact-content">
                      <h5 className="site-footer-two__contact-title">
                        Opening Hours
                      </h5>
                      <p className="site-footer-two__contact-info">
                        Mon - Fri: 9am - 5.30pm
                        <br />
                        ​​Saturday: 9am - 5pm
                        <br />
                        ​Sunday: Closed
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pages */}
            <div
              className="col-xl-3 col-lg-6 col-12 col-md-6 wow fadeInUp"
              data-wow-delay="200ms"
            >
              <div className="footer-widget-two__quick-links">
                <h4 className="footer-widget-two__title">Pages</h4>
                <ul className="footer-widget-two__quick-links-list list-unstyled">
                  <li>
                    <Link href="/">
                      <span className="icon-right-arrow-2"></span>Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/about">
                      <span className="icon-right-arrow-2"></span>About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/portfolio">
                      <span className="icon-right-arrow-2"></span>Portfolio
                    </Link>
                  </li>
                  {/* <li>
                    <Link href="/gallery">
                      <span className="icon-right-arrow-2"></span>Gallery
                    </Link>
                  </li> */}
                  <li>
                    <Link href="/team">
                      <span className="icon-right-arrow-2"></span>Team
                    </Link>
                  </li>
                  <li>
                    <Link href="/careers">
                      <span className="icon-right-arrow-2"></span>Careers
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <span className="icon-right-arrow-2"></span>Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Support */}
            <div
              className="col-xl-4 col-lg-6 col-12 col-md-6 wow fadeInUp"
              data-wow-delay="300ms"
            >
              <div className="footer-widget-two__support">
                <h4 className="footer-widget-two__title">IT Services</h4>
                <ul className="footer-widget-two__quick-links-list list-unstyled">
                  <li>
                    <Link href="/it-services/web-development">
                      <span className="icon-right-arrow-2"></span>Web
                      Development
                    </Link>
                  </li>
                  <li>
                    <Link href="/it-services/mobile-app">
                      <span className="icon-right-arrow-2"></span>Mobile App
                      Development
                    </Link>
                  </li>
                  <li>
                    <Link href="/it-services/software-development">
                      <span className="icon-right-arrow-2"></span>Software
                      Development
                    </Link>
                  </li>
                  <li>
                    <Link href="/it-services/e-commerce">
                      <span className="icon-right-arrow-2"></span>E-Commerce
                    </Link>
                  </li>
                  <li>
                    <Link href="/it-services/cloud-solutions">
                      <span className="icon-right-arrow-2"></span>Cloud
                      Solutions
                    </Link>
                  </li>
                  <li>
                    <Link href="/it-services/maintanance-support">
                      <span className="icon-right-arrow-2"></span> Maintenance &
                      Support
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Services */}
            {/* <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="400ms"
            >
              <div className="footer-widget-two__services">
                <h4 className="footer-widget-two__title">Our Services</h4>
                <ul className="footer-widget-two__quick-links-list list-unstyled">
                  <li>
                    <Link href="/services">
                      <span className="icon-right-arrow-2"></span>UI/UX Design
                    </Link>
                  </li>
                  <li>
                    <Link href="/about">
                      <span className="icon-right-arrow-2"></span>Website Design
                    </Link>
                  </li>
                  <li>
                    <Link href="/pricing">
                      <span className="icon-right-arrow-2"></span>Web
                      Development
                    </Link>
                  </li>
                  <li>
                    <Link href="/about">
                      <span className="icon-right-arrow-2"></span>Product Design
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog">
                      <span className="icon-right-arrow-2"></span>Online
                      Branding
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <span className="icon-right-arrow-2"></span>Personal
                      Branding
                    </Link>
                  </li>
                </ul>
              </div>
            </div> */}
            <h2 className="portfolio-one__big-text-2">Contact Us</h2>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="site-footer-two__bottom">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="site-footer-two__bottom-inner">
                <div className="site-footer-two__copyright">
                  <p className="site-footer-two__copyright-text">
                    ⓒ Copyright{" "}
                    <span suppressHydrationWarning>
                      {new Date().getFullYear()}
                    </span>{" "}
                    <Link href="/">Oracloud</Link>. All rights reserved
                  </p>
                </div>
                <div className="site-footer-two__social-box">
                  <h4 className="site-footer-two__social-title">Follow Us:</h4>
                  <div className="site-footer-two__social-box-inner">
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
                    <Link
                      href="https://www.youtube.com/@Oracloud"
                      target="_blank"
                    >
                      <FaYoutube />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
