// components/PageTitle.tsx
"use client";

import Link from "next/link";
import React from "react";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageTitleProps {
  title: string;
  backgroundImage?: string;
  breadcrumbs?: Breadcrumb[];
}

const PageTitle: React.FC<PageTitleProps> = ({
  title,
  backgroundImage = "/assets/images/backgrounds/page-header-bg.jpg",
  breadcrumbs = [
    { label: "Home", href: "/" },
    { label: title },
  ],
}) => {
  return (
    <section className="page-header">
      {/* Background Image */}
      <div
        className="page-header__bg"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      <div className="container">
        <div className="page-header__inner">
          {/* Dynamic Title */}
          <h1>{title}</h1>

          {/* Breadcrumb */}
          <div className="thm-breadcrumb__box">
            <ul className="thm-breadcrumb list-unstyled">
              {breadcrumbs.map((item, index) => (
                <li key={index}>
                  {item.href ? (
                    <Link href={item.href}>
                      {index === 0 && <i className="fas fa-home"></i>}{" "}
                      {item.label}
                    </Link>
                  ) : (
                    item.label
                  )}
                  {index < breadcrumbs.length - 1 && (
                    <span className="icon-right-arrow-1"></span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageTitle;
