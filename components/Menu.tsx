"use client";

import Link from "next/link";
import { useEffect } from "react";
import { usePathname } from "next/navigation"; // <--- for active menu

type MenuProps = {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
};

const Menu: React.FC<MenuProps> = ({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}) => {
  const pathname = usePathname(); // get current path

  // Close the desktop dropdowns after navigating: the clicked link keeps
  // focus inside the persistent menu DOM, which would otherwise hold the
  // keyboard-focus dropdown rule open on the new page.
  useEffect(() => {
    (document.activeElement as HTMLElement | null)?.blur?.();
  }, [pathname]);

  // Disable scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Helper to check if link is active
  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <>
      {/* Desktop Menu */}
      <ul className="main-menu__list desktop-menu">
        <li className={isActive("/") ? "active" : ""}>
          <Link href="/">Home</Link>
        </li>
        <li className={isActive("/about") ? "active" : ""}>
          <Link href="/about">About Us</Link>
        </li>
        <li
          className={`dropdown ${
            pathname.startsWith("/it-services") ? "active" : ""
          }`}
        >
          <Link href="#">IT Services</Link>
          <ul className="shadow-box">
            <li
              className={
                isActive("/it-services/web-development") ? "active" : ""
              }
            >
              <Link href="/it-services/web-development">Web Development</Link>
            </li>
            <li className={isActive("/it-services/mobile-app") ? "active" : ""}>
              <Link href="/it-services/mobile-app">Mobile App Development</Link>
            </li>
            <li
              className={
                isActive("/it-services/software-development") ? "active" : ""
              }
            >
              <Link href="/it-services/software-development">
                Software Development
              </Link>
            </li>
            <li className={isActive("/it-services/e-commerce") ? "active" : ""}>
              <Link href="/it-services/e-commerce">E-Commerce</Link>
            </li>
            <li
              className={
                isActive("/it-services/cloud-solutions") ? "active" : ""
              }
            >
              <Link href="/it-services/cloud-solutions">Cloud Solutions</Link>
            </li>
            <li
              className={
                isActive("/it-services/maintanance-support") ? "active" : ""
              }
            >
              <Link href="/it-services/maintanance-support">
                Maintenance & Support
              </Link>
            </li>
          </ul>
        </li>
        <li
          className={`dropdown ${
            pathname.startsWith("/digital-marketing-services") ? "active" : ""
          }`}
        >
          <Link href="#">Digital Marketing Services</Link>
          <ul className="shadow-box">
            <li
              className={
                isActive("/digital-marketing-services/social-media-marketing")
                  ? "active"
                  : ""
              }
            >
              <Link href="/digital-marketing-services/social-media-marketing">
                Social Media Marketing (SMM)
              </Link>
            </li>
            <li
              className={
                isActive("/digital-marketing-services/digital-marketing")
                  ? "active"
                  : ""
              }
            >
              <Link href="/digital-marketing-services/digital-marketing">
                Digital Marketing & PR
              </Link>
            </li>
            <li
              className={
                isActive("/digital-marketing-services/logo-creation")
                  ? "active"
                  : ""
              }
            >
              <Link href="/digital-marketing-services/logo-creation">
                Logo Creation & Brand Identity
              </Link>
            </li>
            <li
              className={
                isActive("/digital-marketing-services/school-college-packages")
                  ? "active"
                  : ""
              }
            >
              <Link href="/digital-marketing-services/school-college-packages">
                Exclusive School & College Packages
              </Link>
            </li>
            <li
              className={
                isActive("/digital-marketing-services/ads-production")
                  ? "active"
                  : ""
              }
            >
              <Link href="/digital-marketing-services/ads-production">
                Commercial Advertisement Production
              </Link>
            </li>
          </ul>
        </li>
        <li className={isActive("/portfolio") ? "active" : ""}>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        {/* <li className={isActive("/gallery") ? "active" : ""}>
          <Link href="/gallery">Gallery</Link>
        </li> */}
        <li className={isActive("/team") ? "active" : ""}>
          <Link href="/team">Team</Link>
        </li>
        <li
          className={`dropdown ${
            isActive("/careers") || isActive("/faq") ? "active" : ""
          }`}
        >
          <Link href="#">More</Link>
          <ul className="shadow-box">
            <li className={isActive("/careers") ? "active" : ""}>
              <Link href="/careers">Careers</Link>
            </li>
            <li className={isActive("/faq") ? "active" : ""}>
              <Link href="/faq">FAQ</Link>
            </li>
          </ul>
        </li>
        <li className={isActive("/contact") ? "active" : ""}>
          <Link href="/contact">Contact Us</Link>
        </li>
      </ul>
    </>
  );
};

export default Menu;
