"use client";

import { useEffect, useState } from "react";

export default function Hero({ onOpenModal }) {
  const words = [
    "Sell Fitness Programmes",
    "Sell Fitness Products",
    "Sell Online Consultations",
  ];

  const greetings = [
    "Yoga Teachers",
    "Gym Trainers",
    "Fitness Coaches",
    "Personal Trainers",
    "Online Coaches",
    "Nutritionists",
  ];

  const [greetingIndex, setGreetingIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGreetingIndex((prev) => (prev + 1) % greetings.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const typingSpeed = isDeleting ? 60 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(
          currentWord.substring(0, displayText.length + 1)
        );

        if (displayText === currentWord) {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        setDisplayText(
          currentWord.substring(0, displayText.length - 1)
        );

        if (displayText === "") {
          setIsDeleting(false);
          setCurrentWordIndex(
            (prev) => (prev + 1) % words.length
          );
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWordIndex]);

  return (
    <section className="falcoon-hero">
      <div className="falcoon-hero__container falcoon-container">

        <div className="falcoon-hero__content">

          <p className="falcoon-hero__tag">
            For UK{" "}
            <span className="falcoon-hero__tag-highlight">
              {greetings[greetingIndex]}
            </span>
          </p>

          <h1 className="falcoon-hero__title">
            We Help Fitness Professionals
            <br />

            <span className="falcoon-hero__highlight">
              {displayText}
              <span className="cursor">|</span>
            </span>
          </h1>

          <p className="falcoon-hero__desc">
            We build high-converting websites, funnels and
            automated sales systems that help UK fitness
            professionals attract leads, book clients and
            sell their services online.
          </p>

          <div className="falcoon-hero__actions">
            <a
              href="https://calendly.com/thesatishjassal/falcoon-fitness-business-strategy-call"
              className="falcoon-btn falcoon-btn--primary"
            >
              Get Free Strategy Call
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
              View Our Work
              <span className="falcoon-btn__arrow">
                <img
                  src="/assets/images/art_track_24dp_530A4E_FILL0_wght400_GRAD0_opsz24.svg"
                  className="calendar_icon"
                  alt=""
                />
              </span>
            </a>
          </div>

          <p className="falcoon-hero__trust">
            Built for UK Fitness Professionals
          </p>

        </div>

      </div>
    </section>
  );
}