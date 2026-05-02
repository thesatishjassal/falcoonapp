"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Is there a free trial available?",
    a: "Yes, you can try us for free for 30 days. No credit card required.",
  },
  {
    q: "Can I change my plan later?",
    a: "Absolutely. You can upgrade or downgrade anytime.",
  },
  {
    q: "What is your cancellation policy?",
    a: "You can cancel anytime. No hidden charges.",
  },
  {
    q: "How does billing work?",
    a: "Billing is done monthly or yearly based on your plan.",
  },
  {
    q: "Do you provide support?",
    a: "Yes, we provide full support via chat, email, and calls.",
  },
];

export default function FAQPage() {
  const [active, setActive] = useState(0);

  return (
    <section className="falcoon-faq-new">
      <div className="falcoon-container">
        {/* HERO */}
        <div className="falcoon-faq-new__hero">
          <h1>Frequently asked questions</h1>
          <p>Everything you need to know before getting started</p>
        </div>

        {/* GRID */}
        <div className="falcoon-faq-new__grid">
          {/* LEFT SIDE */}
          <div className="falcoon-faq-new__left">
            {faqs.map((item, i) => (
              <div
                key={i}
                className={`falcoon-faq-new__item ${
                  active === i ? "active" : ""
                }`}
                onClick={() => setActive(active === i ? -1 : i)}
              >
                <div className="falcoon-faq-new__question">
                  <span>{item.q}</span>
                  <span className="icon">{active === i ? "−" : "+"}</span>
                </div>

                {active === i && (
                  <div className="falcoon-faq-new__answer">{item.a}</div>
                )}
              </div>
            ))}
          </div>

          {/* RIGHT SIDE (CTA CARD) */}
          <div className="falcoon-faq-new__card">
            {/* TOP IMAGE (calendar style) */}
            <div className="falcoon-faq-new__card-visual">
              <div className="calendar">
                <div className="calendar-top"></div>
                <div className="calendar-body">
                  <span></span>
                  <span></span>
                  <span className="active"></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>

            <h3>Still have questions?</h3>
            <p>Book a call or reach us anytime.</p>

            <button className="falcoon-btn falcoon-btn--dark">
              Book Free Call →
            </button>

            {/* CONTACT LIST */}
            <div className="falcoon-faq-new__contact">
              <a href="tel:+917888467258" className="item">
                <i className="fas fa-phone"></i>
                <span>+91 7888467258</span>
              </a>

              <a href="mailto:hello@facoo.in" className="item">
                <i className="fas fa-envelope"></i>
                <span>hello@facoo.in</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
