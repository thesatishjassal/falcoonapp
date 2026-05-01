"use client";
import Image from "next/image";

export default function System() {
  return (
    <section className="falcoon-system">
      <div className="falcoon-container">

        {/* HEADER */}
        <div className="falcoon-system__header">
          <span className="falcoon-system__badge">HOW IT WORKS</span>

          <h2 className="falcoon-system__title">
            See how your <span>fitness funnel</span> works — step by step
          </h2>

          <p className="falcoon-system__desc">
            {/* From first click to paid client, every step is designed to convert. */}
            We build the system so you don’t have to guess what works.
          </p>
        </div>

        {/* IMAGE / FLOW */}
        <div className="falcoon-system__visual">
          <img
            src="/assets/images/falcoon_system.svg"
            alt="Falcoon Funnel System"
            className="falcoon-system__image"
            priority
          />
        </div>

        {/* CTA */}
        <div className="falcoon-system__cta">
          {/* <p className="falcoon-system__cta-text">
            Still managing clients through DMs, calls, and random links?
          </p> */}

          {/* <h3 className="falcoon-system__cta-highlight">
            Falcoon gives you a complete system.
          </h3> */}
 <a
            href="https://calendly.com/thesatishjassal/falcoon-fitness-business-strategy-call"
            className="falcoon-header__btn"
          >
            Book Free Strategy Call
            <span className="falcoon-header__calendar">
              <Image
                src="/assets/images/calendar_month.svg"
                alt=""
                width={20}
                height={20}
              />
            </span>
          </a>

          <p className="falcoon-system__cta-trust">
            Free call • No pressure • Actionable plan
          </p>
        </div>

      </div>
    </section>
  );
}