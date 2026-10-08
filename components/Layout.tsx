"use client";

import Head from "next/head";
import Script from "next/script";
import Header from "./Header";
import Footer from "./Footer";
import { ReactNode, useEffect, useState } from "react";
import ScrollToTop from "./ScrollToTop";
import LoadingScreen from "./LoadingScreen";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Initialize WOW.js (drives the .wow reveal animations)
      if ((window as any).WOW) {
        new (window as any).WOW().init();
      }

      // Initialize Owl Carousel (if any elements exist)
      if ((window as any).jQuery && (window as any).jQuery.fn.owlCarousel) {
        (window as any).jQuery(".owl-carousel").owlCarousel();
      }
    }
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* CSS Global */}
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/animate.min.css" />
        <link rel="stylesheet" href="/assets/css/custom-animate.css" />
        <link rel="stylesheet" href="/assets/css/swiper.min.css" />
        <link rel="stylesheet" href="/assets/css/font-awesome-all.css" />
        <link rel="stylesheet" href="/assets/css/odometer.min.css" />
        <link rel="stylesheet" href="/assets/css/flaticon.css" />
        <link rel="stylesheet" href="/assets/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="/assets/css/owl.theme.default.min.css" />
        <link rel="stylesheet" href="/assets/css/nice-select.css" />
        <link rel="stylesheet" href="/assets/css/jquery-ui.css" />

        {/* Module-specific CSS */}
        <link rel="stylesheet" href="/assets/css/module-css/banner.css" />
        <link rel="stylesheet" href="/assets/css/module-css/slider.css" />
        <link rel="stylesheet" href="/assets/css/module-css/footer.css" />
        <link rel="stylesheet" href="/assets/css/module-css/services.css" />
        <link rel="stylesheet" href="/assets/css/module-css/sliding-text.css" />
        <link rel="stylesheet" href="/assets/css/module-css/about.css" />
        <link rel="stylesheet" href="/assets/css/module-css/counter.css" />
        <link rel="stylesheet" href="/assets/css/module-css/portfolio.css" />
        <link rel="stylesheet" href="/assets/css/module-css/process.css" />
        <link rel="stylesheet" href="/assets/css/module-css/contact.css" />
        <link rel="stylesheet" href="/assets/css/module-css/testimonial.css" />
        <link rel="stylesheet" href="/assets/css/module-css/brand.css" />
        <link rel="stylesheet" href="/assets/css/module-css/newsletter.css" />
        <link rel="stylesheet" href="/assets/css/module-css/team.css" />
        <link rel="stylesheet" href="/assets/css/module-css/why-choose.css" />
        <link rel="stylesheet" href="/assets/css/module-css/feature.css" />
        <link rel="stylesheet" href="/assets/css/module-css/cta.css" />
        <link rel="stylesheet" href="/assets/css/module-css/faq.css" />
        <link rel="stylesheet" href="/assets/css/module-css/page-header.css" />
        <link rel="stylesheet" href="/assets/css/module-css/google-map.css" />

        {/* Core site CSS */}
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/responsive.css" />
        <link rel="stylesheet" href="/assets/css/a11y.css" />
      </Head>

      {/* JS Scripts — legacy template runtime, trimmed to what the site uses */}
      <Script
        src="/assets/js/jquery-3.6.0.min.js"
        strategy="beforeInteractive"
      />
      <Script src="/assets/js/swiper.min.js" strategy="afterInteractive" />
      <Script
        src="/assets/js/owl.carousel.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="/assets/js/jquery.nice-select.min.js"
        strategy="afterInteractive"
      />
      <Script src="/assets/js/wow.js" strategy="afterInteractive" />
      {/* gsap must be global before script.js (afterInteractive) runs — load it
          beforeInteractive like jQuery to avoid a "gsap is not defined" race. */}
      <Script src="/assets/js/gsap/gsap.js" strategy="beforeInteractive" />
      <Script
        src="/assets/js/gsap/ScrollTrigger.js"
        strategy="beforeInteractive"
      />
      <Script src="/assets/js/gsap/SplitText.js" strategy="beforeInteractive" />
      <Script src="/assets/js/script.js" strategy="afterInteractive" />

      <Header />
      <LoadingScreen autoHideMs={500} onFinish={() => setShow(false)} />
      <main>{children}</main>
      <ScrollToTop />
      <Footer />
    </>
  );
}
