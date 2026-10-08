// MobileMenu.tsx
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./MobileMenu.module.css";

interface MenuItem {
  label: string;
  href?: string;
  children?: SubMenuItem[];
}

interface SubMenuItem {
  label: string;
  href: string;
}

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

const menuItems: MenuItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "IT Services",
    children: [
      { label: "Web Development", href: "/it-services/web-development" },
      { label: "Mobile App Development", href: "/it-services/mobile-app" },
      {
        label: "Software Development",
        href: "/it-services/software-development",
      },
      { label: "E-Commerce", href: "/it-services/e-commerce" },
      { label: "Cloud Solutions", href: "/it-services/cloud-solutions" },
      {
        label: "Maintenance & Support",
        href: "/it-services/maintanance-support",
      },
    ],
  },
  {
    label: "Digital Marketing",
    children: [
      {
        label: "Social Media Marketing (SMM)",
        href: "/digital-marketing-services/social-media-marketing",
      },
      {
        label: "Digital Marketing & PR",
        href: "/digital-marketing-services/digital-marketing",
      },
      {
        label: "Logo Creation & Brand Identity",
        href: "/digital-marketing-services/logo-creation",
      },
      {
        label: "Exclusive School & College Packages",
        href: "/digital-marketing-services/school-college-packages",
      },
      {
        label: "Commercial Advertisement Production",
        href: "/digital-marketing-services/ads-production/",
      },
    ],
  },
  { label: "Portfolio", href: "/portfolio" },
  // { label: "Gallery", href: "/gallery" },
  { label: "Team", href: "/team" },
  {
    label: "More",
    children: [
      { label: "Careers", href: "/careers" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  { label: "Contact Us", href: "/contact" },
];

const normalize = (p?: string) => {
  if (!p) return "/";
  if (p === "/") return "/";
  return p.replace(/\/+$/, ""); // remove trailing slash except root
};

const isPathActive = (href: string | undefined, pathname: string) => {
  if (!href) return false;
  const h = normalize(href);
  const p = normalize(pathname);

  if (h === "/") return p === "/";
  if (p === h) return true;
  // mark active for nested paths like /parent/child and /parent/child/grand
  return p.startsWith(h + "/");
};

const MobileMenu = ({
  isOpen,
  onClose,
}: MobileMenuProps): React.ReactElement => {
  const pathname = usePathname() || "/";
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (label: string) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  // Auto-open parent when any of its children is active (and clear when menu closed)
  useEffect(() => {
    if (!isOpen) {
      setOpenDropdown(null);
      return;
    }

    const activeParent = menuItems.find(
      (item) =>
        item.children &&
        item.children.some((c) => isPathActive(c.href, pathname))
    );
    if (activeParent) setOpenDropdown(activeParent.label);
    // if none active, keep current openDropdown (so user toggles are preserved)
  }, [pathname, isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.overlay}
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.nav
            className={styles.menu}
            onClick={(e) => e.stopPropagation()}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.28 }}
          >
            <button
              className={styles.closeBtn}
              onClick={onClose}
              aria-label="Close menu"
            >
              ✕
            </button>

            <ul className={styles.menuList}>
              {menuItems.map((item) => {
                const parentHrefActive = item.href
                  ? isPathActive(item.href, pathname)
                  : false;
                const anyChildActive = item.children
                  ? item.children.some((c) => isPathActive(c.href, pathname))
                  : false;
                const isParentActive = parentHrefActive || anyChildActive;

                return (
                  <li
                    key={item.label}
                    className={`${styles.menuItem} ${
                      isParentActive ? styles.activeParent : ""
                    }`}
                  >
                    {item.children ? (
                      <>
                        <button
                          type="button"
                          className={`${styles.dropdown} ${
                            isParentActive ? styles.parentOpenActive : ""
                          }`}
                          onClick={() => toggleDropdown(item.label)}
                          aria-expanded={openDropdown === item.label}
                        >
                          <span className={styles.parentLabel}>
                            {item.label}
                          </span>
                          <span
                            className={`${styles.arrow} ${
                              openDropdown === item.label
                                ? styles.arrowOpen
                                : ""
                            }`}
                          >
                            <i className="fa fa-chevron-right" aria-hidden />
                          </span>
                        </button>

                        <AnimatePresence initial={false}>
                          {openDropdown === item.label && (
                            <motion.ul
                              className={styles.submenu}
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.22 }}
                            >
                              {item.children.map((child) => {
                                const childActive = isPathActive(
                                  child.href,
                                  pathname
                                );
                                return (
                                  <li
                                    key={child.href}
                                    className={`${styles.submenuItem} ${
                                      childActive ? styles.activeChild : ""
                                    }`}
                                  >
                                    <Link
                                      href={child.href}
                                      onClick={onClose}
                                      className={styles.submenuLink}
                                    >
                                      <span>{child.label}</span>
                                    </Link>
                                  </li>
                                );
                              })}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.href || "#"}
                        onClick={onClose}
                        className={`${styles.link} ${
                          isParentActive ? styles.activeLink : ""
                        }`}
                      >
                        <span>{item.label}</span>
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
