"use client";

import Image from "next/image";

export default function Hero({ onOpenModal }) {
  return (
    <section className="falcoon-hero">
      <div className="falcoon-hero__container falcoon-container">
        <div className="falcoon-hero__content">
          <h1 className="falcoon-hero__title">
            Turn Your Fitness Expertise Into Sales.
          </h1>

          <p className="falcoon-hero__desc">
            We help fitness professionals sell their services online with
            booking, payments, funnels, and marketing that convert.
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
