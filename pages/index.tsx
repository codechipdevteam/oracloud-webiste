"use client";

import Seo from "@/components/Seo";
import About from "@/components/home/About";
import Banner from "@/components/home/Banner";
import Process from "@/components/home/Process";
import Counter from "@/components/home/Counter";
import SlidingText from "@/components/home/SlidingText";
import LogoSlider from "@/components/LogoSlider";
import ServicesSlider from "@/components/home/ServicesSlider";
import TestimonialSection from "@/components/home/TestimonialSection";

export default function Home() {
  return (
    <>
      <Seo
        title="Oracloud | IT Solutions & Digital Marketing Company"
        description="Oracloud delivers web & mobile app development, cloud solutions, e-commerce and digital marketing to help businesses grow online."
      />
      {/* Visually-hidden H1 for SEO/accessibility (the visible hero is a rotating slider). */}
      <h1
        style={{
          position: "absolute",
          width: "1px",
          height: "1px",
          padding: 0,
          margin: "-1px",
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          border: 0,
        }}
      >
        Oracloud — IT Solutions &amp; Digital Marketing Company
      </h1>
      <Banner />
      <About />
      <Counter />
      <ServicesSlider />
      <LogoSlider />
      <Process />
      <SlidingText />
      <TestimonialSection />
    </>
  );
}
