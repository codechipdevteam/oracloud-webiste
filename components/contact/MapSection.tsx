"use client";

import React, { useEffect, useRef, useState } from "react";

const MapSection = () => {
  // On mouse devices a transparent overlay sits on the map until clicked: the
  // page keeps receiving mousemove (so the custom cursor tracks over the map)
  // and wheel-scroll isn't hijacked. Clicking hands control to the map; it
  // re-arms once the pointer is back on the page. Touch devices skip all this.
  const [fine, setFine] = useState(false);
  const [interactive, setInteractive] = useState(false);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    if (window.matchMedia("(pointer: fine)").matches) setFine(true);
  }, []);

  // Re-arm when the pointer leaves the map: while it's inside the iframe the
  // page gets no mousemove at all, so the first move seen OUTSIDE the map box
  // is the reliable "pointer left" signal (mouseleave itself may never fire
  // across the iframe boundary).
  useEffect(() => {
    if (!interactive) return;
    const onDocMove = (e: MouseEvent) => {
      const el = wrapRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      if (
        e.clientX < r.left ||
        e.clientX > r.right ||
        e.clientY < r.top ||
        e.clientY > r.bottom
      ) {
        setInteractive(false);
      }
    };
    document.addEventListener("mousemove", onDocMove);
    return () => document.removeEventListener("mousemove", onDocMove);
  }, [interactive]);

  const enableMap = () => setInteractive(true);
  const overlayArmed = fine && !interactive;

  return (
    // Standard site container (not edge-to-edge) with rounded corners to
    // match the card styling used elsewhere; bottom margin keeps it off the
    // footer since this is the page's last section.
    <div className="maps-area">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              ref={wrapRef}
              className="google-maps"
              style={{
                borderRadius: "24px",
                overflow: "hidden",
                margin: "100px 0",
                position: "relative",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.3897806952327!2d76.33415377569978!3d10.310657867610875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b08034fa3a7f38d%3A0x52f8fded4c3308f5!2sOracloud!5e0!3m2!1sen!2sin!4v1759244685156!5m2!1sen!2sin"
                title="Oracloud Technologies on Google Maps"
                style={{
                  border: 0,
                  width: "100%",
                  height: "450px",
                  display: "block",
                }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              {overlayArmed && (
                <div
                  role="button"
                  tabIndex={0}
                  aria-label="Enable map interaction"
                  onClick={enableMap}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      enableMap();
                    }
                  }}
                  style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 2,
                    cursor: "pointer",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      bottom: "18px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      padding: "8px 18px",
                      borderRadius: "999px",
                      background: "rgba(11, 25, 44, 0.75)",
                      color: "#fff",
                      fontSize: "13px",
                      whiteSpace: "nowrap",
                      pointerEvents: "none",
                    }}
                  >
                    Click to explore the map
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapSection;
