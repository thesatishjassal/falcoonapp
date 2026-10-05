"use client";
import { useEffect } from "react";

const TARGETS = [
  ".scn-head",
  ".scn-idea-top",
  ".scn-ledger > div",
  ".scn-li",
  ".scn-fi",
  ".scn-card",
  ".scn-ic",
  ".scn-win",
  ".scn-auto",
  ".scn-node",
  ".scn-ar",
  ".scn-pillars > div",
  ".scn-ds",
  ".scn-dash",
  ".scn-dr",
  ".scn-qm",
  ".scn-quote h2",
  ".scn-cta .scn-c > *",
  ".scn-ul",
].join(",");

export default function ScnMotion() {
  useEffect(() => {
    const root = document.querySelector(".scn-page");
    if (!root) return;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce || !("IntersectionObserver" in window)) return; // content stays visible

    const els = [...root.querySelectorAll(TARGETS)];
    els.forEach((el) => {
      const i = [...el.parentElement.children].indexOf(el);
      el.style.setProperty("--i", Math.min(i, 6)); // stagger, capped
      el.classList.add("scn-r");
    });
    root.classList.add("scn-js"); // hidden states only apply once JS is running

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("scn-in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.15, rootMargin: "0px 0px -6% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}
