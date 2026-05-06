"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero({ onOpenModal }) {
  const words = [
    "Sell Fitness Programs",
    "Sell Fitness Products",
    "Sell Online Consultations",
  ];
  const greetings = [
    "Yoga Teacher",
    "Gym Trainer",
    "Fitness Coach",
    "Personal Trainer",
    "Online Coach",
    "Nutritionist",
  ];

  const [greetingIndex, setGreetingIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGreetingIndex((prev) => (prev + 1) % greetings.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const greetingText = greetings[greetingIndex];
  const colors = ["#FF9933", "#138808", "#000000"];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    let typingSpeed = isDeleting ? 60 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentWord.substring(0, displayText.length + 1));

        if (displayText === currentWord) {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        setDisplayText(currentWord.substring(0, displayText.length - 1));

        if (displayText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
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
          {/* 🔥 TAG */}
          <p className="falcoon-hero__tag">
            🙏 Namaste{" "}
            <span className="falcoon-hero__tag-highlight">{greetingText}</span>
          </p>

          {/* 🔥 UPDATED HEADLINE */}
          <h1 className="falcoon-hero__title">
            We Help Fitness Professionals To <br />
            <span
              className="falcoon-hero__highlight"
              style={{ color: colors[colorIndex] }}
            >
              {displayText}
              <span className="cursor">|</span>
            </span>
          </h1>

          {/* 🔥 SUBTEXT (unchanged) */}
          <p className="falcoon-hero__desc">
            We build high-converting websites with automation, booking & payment
            systems — so you get clients on autopilot.
          </p>

          {/* 🔥 CTA */}
          <div className="falcoon-hero__actions">
            <a
              href="https://calendly.com/thesatishjassal/falcoon-fitness-business-strategy-call"
              className="falcoon-btn falcoon-btn--primary"
            >
              Get Free Strategy Call{" "}
              <span className="falcoon-btn__arrow">
                <img
                  src="/assets/images/calendar_month_white.svg"
                  className="calendar_icon"
                  alt=""
                />
              </span>
            </a>

            <a
              href="#our_Work"
              className="falcoon-btn falcoon-btn--outline mobile_none"
            >
              View Projects{" "}
              <span className="falcoon-btn__arrow">
                <img
                  src="/assets/images/art_track_24dp_530A4E_FILL0_wght400_GRAD0_opsz24.svg"
                  className="calendar_icon"
                  alt=""
                />
              </span>
            </a>
          </div>

          {/* 🔥 TRUST */}
          <p className="falcoon-hero__trust">
            ⭐ 5.0 Rating • 50+ Projects Delivered • Real Results
          </p>
        </div>

        {/* RIGHT */}
        <div className="falcoon-hero__visual">
          {/* 🔥 FLOATING CARD */}
          <div className="falcoon-hero__floating">
            <span>🔥 Rahul booked a call</span>
          </div>

          <img
            src="/assets/images/falcoon_hero-image.png"
            alt="Falcoon Funnel Visual"
          />
        </div>
      </div>
    </section>
  );
}
