"use client";

export default function CtaBanner({ onOpenModal }) {
  return (
    <section className="falcoon-cta">

      <div className="falcoon-cta__overlay">

        {/* TRUST BADGE */}
        <span className="falcoon-cta__badge">
          ⚡ Limited spots available this month
        </span>

        {/* HEADLINE */}
        <h2 className="falcoon-cta__title">
          Get your <span>first paying fitness client</span> in days — not months
        </h2>

        {/* SUBTEXT */}
        <p className="falcoon-cta__subtitle">
          We build your complete funnel, content & automation so you can focus on coaching.
        </p>

        {/* CTA */}
        <button className="falcoon-cta__button" onClick={onOpenModal}>
          Book Free Strategy Call
          <span>→</span>
        </button>

        {/* TRUST LINE */}
        <p className="falcoon-cta__trust">
          No commitment • Done-for-you system • Results-focused
        </p>

      </div>
    </section>
  );
}