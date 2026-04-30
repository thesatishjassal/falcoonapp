"use client";

import { useState } from "react";

export default function FalcoonFaqPage() {
  const [active, setActive] = useState(0);
  const [relatedActive, setRelatedActive] = useState(0);

  /* MAIN FAQ */
  const faqs = [
    {
      q: "How does Falcoon help me get clients?",
      a: "We build your complete funnel — landing page, booking system, payment integration, and marketing.",
    },
    {
      q: "Do I need technical knowledge?",
      a: "No. We handle everything while you focus on your fitness expertise.",
    },
    {
      q: "How long does it take to launch?",
      a: "Usually within 5–10 days depending on scope.",
    },
  ];

  /* RELATED (Google style) */
  const relatedFaqs = [
    {
      q: "How quickly can I start getting clients?",
      a: "Most users start seeing leads within 7–14 days after launch.",
    },
    {
      q: "Can I sell online coaching programs?",
      a: "Yes, you can sell 1:1 coaching, courses, and subscriptions.",
    },
    {
      q: "Do you handle ads and marketing?",
      a: "Yes, we manage ads and optimize your funnel for conversions.",
    },
    {
      q: "Is payment integration included?",
      a: "Yes, Razorpay/Stripe integration is included.",
    },
  ];

  return (
    <main className="falcoon-faq-page">

      {/* ================= HERO ================= */}
      <section className="falcoon-faq-hero">
        <div className="falcoon-container">

          <span className="falcoon-faq-hero__tag">Help Center</span>

          <h1 className="falcoon-faq-hero__title">
            Got Questions? <br />
            <span>We’ve answered them.</span>
          </h1>

          <p className="falcoon-faq-hero__desc">
            Everything you need to know about funnels, payments,
            and growing your fitness business with Falcoon.
          </p>

          <div className="falcoon-faq-hero__trust">
            <span>✔ Used by 100+ fitness professionals</span>
            <span>✔ Funnels launched in 7 days</span>
          </div>

          <div className="falcoon-faq-hero__actions">
            <a
              href="https://calendly.com/thesatishjassal/falcoon-fitness-business-strategy-call"
              className="falcoon-btn falcoon-btn--dark"
            >
              Book Free Strategy →
            </a>

            <a href="/pricing" className="falcoon-btn falcoon-btn--light">
              View Pricing
            </a>
          </div>

        </div>
      </section>

      {/* ================= MAIN FAQ ================= */}
      <section className="falcoon-faq-section">
        <div className="falcoon-container">

          <h2 className="falcoon-faq-section__title">
            Frequently Asked Questions
          </h2>

          <div className="falcoon-faq-list">
            {faqs.map((item, i) => (
              <div
                key={i}
                className={`falcoon-faq-item ${active === i ? "active" : ""}`}
                onClick={() => setActive(active === i ? null : i)}
              >
                <div className="falcoon-faq-question">
                  <h4>{item.q}</h4>
                  <span>{active === i ? "−" : "+"}</span>
                </div>

                {active === i && (
                  <p className="falcoon-faq-answer">{item.a}</p>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= RELATED FAQ ================= */}
      <section className="falcoon-related-faq">
        <div className="falcoon-container">

          <h3 className="falcoon-related-faq__title">
            People also ask
          </h3>

          <div className="falcoon-related-faq__list">
            {relatedFaqs.map((item, i) => (
              <div
                key={i}
                className={`falcoon-related-faq__item ${
                  relatedActive === i ? "active" : ""
                }`}
                onClick={() =>
                  setRelatedActive(relatedActive === i ? null : i)
                }
              >
                <div className="falcoon-related-faq__question">
                  <span>{item.q}</span>
                  <span>{relatedActive === i ? "−" : "+"}</span>
                </div>

                {relatedActive === i && (
                  <p className="falcoon-related-faq__answer">
                    {item.a}
                  </p>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

    </main>
  );
}