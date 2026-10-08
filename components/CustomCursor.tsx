"use client";
import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";

export default function CustomCursor() {
  // Only render on devices with a real mouse (skip touch/mobile).
  const [enabled, setEnabled] = useState(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    if (window.matchMedia("(pointer: fine)").matches) setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Start off-screen and hidden — no stray speck before the first move.
    const target = { x: -100, y: -100 };
    const dotPos = { x: -100, y: -100 };
    const ringPos = { x: -100, y: -100 };
    let scale = 1;
    let hovered = false;
    let visible = false;
    let hiddenByFrame = false;
    let lastMoveT = 0;
    let lastFrameCheckT = 0;
    let raf = 0;

    const show = (v: boolean) => {
      visible = v;
      dot.style.opacity = ring.style.opacity = v ? "1" : "0";
    };
    const onMove = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      lastMoveT = performance.now();
      hiddenByFrame = false; // moves flowing again = pointer is back on the page
      if (!visible) show(true);
    };
    // Cross-origin embeds (Turnstile captcha, map, video players) swallow
    // mousemove, which would freeze the follower at the frame's edge — fade
    // it out instead; the next mousemove on the page brings it back. Entry is
    // caught two ways (mouseover on the frame, mouseout whose relatedTarget
    // is the frame) since browsers differ in which side they deliver.
    const hideIfFrame = (n: Element | null) => {
      if (n && n.closest && n.closest("iframe, .cf-turnstile")) {
        hiddenByFrame = true;
        hovered = false;
        show(false);
        return true;
      }
      return false;
    };
    const onOver = (e: MouseEvent) => {
      const t = e.target as Element | null;
      if (hideIfFrame(t)) return;
      hovered = !!(t && t.closest && t.closest("a, button"));
    };
    const onOut = (e: MouseEvent) => {
      hideIfFrame(e.relatedTarget as Element | null);
    };
    const onLeave = () => show(false);

    // rAF loop lerps toward the target — smooth trailing follow, no React re-renders.
    const loop = () => {
      // Embedded frames (map, captcha, video players) swallow mousemove — in
      // Chrome often with NO boundary event reaching the parent at all. The
      // reliable signal is the starvation itself: if moves stalled while the
      // pointer sat at/inside an embed's box, it's inside the frame. Fade out;
      // the next parent mousemove (via onMove) brings it back.
      const now = performance.now();
      if (
        visible &&
        !hiddenByFrame &&
        lastMoveT &&
        now - lastMoveT > 200 &&
        now - lastFrameCheckT > 150
      ) {
        lastFrameCheckT = now;
        const frames = document.querySelectorAll("iframe, .cf-turnstile");
        for (let i = 0; i < frames.length; i++) {
          const r = frames[i].getBoundingClientRect();
          if (
            target.x < r.left - 24 ||
            target.x > r.right + 24 ||
            target.y < r.top - 24 ||
            target.y > r.bottom + 24
          ) {
            continue;
          }
          // Probe the topmost element just inside the frame's box: when the
          // frame is covered by page content (e.g. the map's click-to-explore
          // overlay) the page still receives mouse events there, so the
          // cursor must stay visible. Only an EXPOSED frame hides it.
          const px = Math.min(Math.max(target.x, r.left + 2), r.right - 2);
          const py = Math.min(Math.max(target.y, r.top + 2), r.bottom - 2);
          const top = document.elementFromPoint(px, py);
          if (top && top.closest && top.closest("iframe, .cf-turnstile")) {
            hiddenByFrame = true;
            hovered = false;
            show(false);
            break;
          }
        }
      }
      dotPos.x += (target.x - dotPos.x) * 0.35;
      dotPos.y += (target.y - dotPos.y) * 0.35;
      ringPos.x += (target.x - ringPos.x) * 0.18;
      ringPos.y += (target.y - ringPos.y) * 0.18;
      scale += ((hovered ? 2 : 1) - scale) * 0.2;
      dot.style.transform = `translate3d(${dotPos.x - 5}px, ${dotPos.y - 5}px, 0)`;
      ring.style.transform = `translate3d(${ringPos.x - 15}px, ${ringPos.y - 15}px, 0) scale(${scale})`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    document.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, [enabled]);

  if (!enabled) return null;

  const base: CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    borderRadius: "50%",
    pointerEvents: "none",
    opacity: 0,
    transition: "opacity 0.25s ease",
    willChange: "transform",
    transformOrigin: "center",
  };

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          ...base,
          width: 10,
          height: 10,
          backgroundColor: "#ff006e",
          zIndex: 9999,
        }}
      />
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{
          ...base,
          width: 30,
          height: 30,
          border: "2px solid #ff006e",
          zIndex: 9998,
        }}
      />
    </>
  );
}
