"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero({ onOpenModal }) {
  const words = [
    "Sales",
    "Leads",
    "Payments",
    "Automation",
    "Coaching",
    "Products",
  ];

  const colors = ["#FF9933", "#138808", "#000000"]; // orange, green, black

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    let typingSpeed = isDeleting ? 60 : 110;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentWord.substring(0, displayText.length + 1));

        if (displayText === currentWord) {
          setTimeout(() => {
            setIsDeleting(true);
          }, 1200);
        }
      } else {
        setDisplayText(currentWord.substring(0, displayText.length - 1));

        if (displayText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);

          // change color when word changes
          setColorIndex((prev) => (prev + 1) % colors.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWordIndex]);

  return (
    <section className="falcoon-hero">
      <div className="falcoon-hero__container falcoon-container">
        
        {/* LEFT */}
        <div className="falcoon-hero__content">
          <h1 className="falcoon-hero__title">
            Turn Your Fitness Expertise Into{" "}
            <span
              className="falcoon-hero__highlight"
              style={{ color: colors[colorIndex] }}
            >
              {displayText}
              <span className="cursor">|</span>
            </span>
          </h1>

          <p className="falcoon-hero__desc">
            We help fitness professionals sell services with funnels, booking,
            payments, and automation that actually convert.
          </p>

          <div className="falcoon-hero__actions">
            <button
              className="falcoon-btn falcoon-btn--dark"
              onClick={onOpenModal}
            >
              Start My Fitness Funnel →
            </button>

            <a
              href="https://calendly.com/thesatishjassal/falcoon-fitness-business-strategy-call"
              className="falcoon-btn falcoon-btn--outline"
            >
              Book Free Strategy
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="falcoon-hero__visual">
          <Image
            src="/assets/images/falcoon_hero-image.png"
            alt="Falcoon Funnel Visual"
            width={600}
            height={500}
          />
        </div>
      </div>
    </section>
  );
}