"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";
import { FaBars, FaGlobe } from "react-icons/fa";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`main-header-two ${isSticky ? "is-sticky" : ""}`}>
      {/* Top Bar - hidden when sticky */}
      {!isSticky && (
        <div className="main-menu-two__top">
          <div className="main-menu-two__top-inner">
            <p className="main-menu-two__top-text">
              IT that just works — anytime, every time
            </p>
            <ul className="list-unstyled main-menu-two__contact-list">
              <li>
                <div className="icon">
                  <i className="icon-pin"></i>
                </div>
                <div className="text">
                  <p>
                    {" "}
                    Oracloud Technologies, First Floor, Swarnam Arcade, <br />
                    Anamala Junction, Chalakudy, Kerala, 680307
                  </p>
                </div>
              </li>
              <li>
                <div className="icon">
                  <i className="icon-search-mail"></i>
                </div>
                <div className="text">
                  <p>
                    <a href="mailto:connect@oracloud.in">connect@oracloud.in</a>
                  </p>
                </div>
              </li>
              <li>
                <div className="icon">
                  <i className="icon-phone-call"></i>
                </div>
                <div className="text">
                  <p>
                    <a href="tel:+917034302111">+91 7034 302 111</a>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Main Nav */}
      <nav className="main-menu main-menu-two">
        <div className="main-menu-two__wrapper">
          <div className="main-menu-two__wrapper-inner">
            {/* Left: Logo */}
            <div className="main-menu-two__left">
              <div className="main-menu-two__logo">
                <Link href="/">
                  <img
                    src="/assets/images/oracloud-logo.avif"
                    alt="Oracloud logo"
                    className="logo-img"
                  />
                </Link>
              </div>
            </div>

            {/* Center: Menu Toggle + Menu */}
            <div className="main-menu-two__main-menu-box">
              <button
                className="mobile-nav__toggler"
                aria-label="Open mobile menu"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <FaBars size={32} />
              </button>
              <Menu
                isMobileMenuOpen={isMobileMenuOpen}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
              />
            </div>

            {/* Right: Contact Button */}
            {/* <div className="main-menu-two__right">
              <div className="main-menu-two__btn-box">
                <Link href="/contact" className="thm-btn">
                  Get in Touch <span className="icon-right-arrow"></span>
                </Link>
              </div>
            </div> */}
          </div>
        </div>
      </nav>

      {/* MobileMenu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  );
};

export default Header;
