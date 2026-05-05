"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function QuoteSelector() {
  const [selected, setSelected] = useState(null);
  const router = useRouter();

  const options = [
    {
      id: "programs",
      title: "Sell Fitness Programs",
      desc: "Online coaching, transformation programs, group plans",
    },
    {
      id: "products",
      title: "Sell Products",
      desc: "Digital or physical products with checkout & upsells",
    },
    {
      id: "consultations",
      title: "Sell Consultations",
      desc: "Paid calls, bookings & client sessions",
    },
  ];

  const handleContinue = () => {
    if (!selected) return;
    router.push(`/pricing?type=${selected}`);
  };

  return (
    <section className="falcoon-selector">
      <div className="falcoon-container">
        {/* HEADER */}
        <div className="falcoon-selector__header">
          <h2 className="falcoon-selector__title">
            What do you want to <span>sell?</span>
          </h2>

          <p className="falcoon-selector__desc">
            Choose your goal or book a call — we’ll guide you.
          </p>
        </div>
        {/* OPTIONS */}
        <div className="falcoon-selector__grid">
          {options.map((item) => (
            <div
              key={item.id}
              className={`falcoon-selector__card ${
                selected === item.id ? "active" : ""
              }`}
              onClick={() => setSelected(item.id)}
            >
              {/* RADIO */}
              <div className="falcoon-selector__radio">
                <div
                  className={`falcoon-selector__radio-dot ${
                    selected === item.id ? "checked" : ""
                  }`}
                />
              </div>

              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
        {/* CTA AREA */}
        <div className="falcoon-selector__cta">
          {/* PRIMARY CTA */}
          <button
            onClick={handleContinue}
            disabled={!selected}
            className="falcoon-btn falcoon-btn--primary"
          >
            Continue →
          </button>

          {/* SECONDARY CTA */}
          <a
            href="https://calendly.com/thesatishjassal/falcoon-fitness-business-strategy-call"
            target="_blank"
            rel="noopener noreferrer"
            className="falcoon-btn falcoon-btn--outline"
          >
            Book Free Strategy Call →
          </a>
        </div>
        <p className="falcoon-selector__note">
          ⚡ Takes less than 60 seconds • Or talk to us directly
        </p>
      </div>
    </section>
  );
}
