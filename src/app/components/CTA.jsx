"use client";

export default function CtaBanner({ onOpenModal }) {
  return (
    <section className="falcool_cta">
      <div className="overlay">
        <h2 className="falcool_cta__title">
          Start using a professional fitness funnel system.
        </h2>
        <button className="falcool_cta__button" onClick={onOpenModal}>
          Start My Fitness Funnel{" "}
          <span className="falcool_cta__arrow">→</span>
        </button>
      </div>
    </section>
  );
}