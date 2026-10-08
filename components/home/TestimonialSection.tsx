"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function TestimonialSection() {
  return (
    <section className="testimonial-one relative">
      {/* Background */}
      <div
        className="testimonial-one__bg absolute inset-0"
        style={{
          backgroundImage:
            "url(/assets/images/backgrounds/testimonial-one-bg-1.jpg)",
        }}
      ></div>

      {/* Floating Shape */}
      <div className="testimonial-one__shape-2 float-bob-y">
        <img
          src="/assets/images/shapes/testimonial-one-shape-2.png"
          alt=""
          width={291}
          height={754}
        />
      </div>

      <div className="container relative z-10">
        <div className="row">
          <div className="col-xl-3"></div>
          <div className="col-xl-9">
            <div className="testimonial-one__content-box">
              {/* Section Title */}
              <div className="section-title text-left">
                <div className="section-title__tagline-box">
                  <span className="section-title__tagline">
                    Client Testimonial
                  </span>
                </div>
                <h2 className="section-title__title">
                  What Our Clients{" "}
                  <span>
                    – Say
                    <br />
                  </span>
                  <span> About Us</span>
                </h2>
              </div>

              {/* Testimonial Carousel */}
              <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 4000 }}
                pagination={{ clickable: true }}
                spaceBetween={30}
                slidesPerView={1}
              >
                {[
                  {
                    img: "/assets/images/testimonial/sivan.webp",
                    title: "Digital Transformation Excellence",
                    text: "Oracloud Technologies has transformed Jewelrock's digital presence. Their strategies are smart, effective, and tailor-made for us. The team is highly supportive and always delivers on time. A truly reliable partner in our digital growth.",
                    role: "Managing Director, Jewelrock",
                    name: "Mr. Sivan",
                  },
                  {
                    img: "/assets/images/testimonial/george.webp",
                    title: "Exceptional Service & Results",
                    text: "Working with Oracloud Technologies has been a seamless experience. Their commitment, expertise, and timely delivery make a real difference. METS has seen measurable improvements across platforms. I highly appreciate their partnership and professionalism.",
                    role: "CEO, METS Group of Institutions",
                    name: "George Kolanchery",
                  },
                ].map((t, i) => (
                  <SwiperSlide key={i}>
                    <div className="testimonial-one__single flex gap-6">
                      <div className="testimonial-one__img-box">
                        <Image
                          src={t.img}
                          alt={t.name}
                          width={260}
                          height={292}
                          className="rounded-full"
                        />
                      </div>
                      <div className="testimonial-one__content">
                        <h4 className="testimonial-one__title">{t.title}</h4>
                        <p className="testimonial-one__text">“{t.text}”</p>
                        <div className="testimonial-one__bottom flex justify-between items-center mt-4">
                          <div>
                            <p className="testimonial-one__client-sub-title">
                              {t.role}
                            </p>
                            <h3 className="testimonial-one__client-name">
                              {t.name}
                            </h3>
                          </div>
                          {/* <div className="testimonial-one__trustpilot-box flex items-center gap-2">
                            <Image
                              src="/assets/images/resources/trustpilot-logo.png"
                              alt="Trustpilot"
                              width={80}
                              height={20}
                            />
                            <p className="testimonial-one__trustpilot-text">
                              5.0 Excellent
                            </p>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
