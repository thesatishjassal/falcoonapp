"use client"; // ← Must be at the very top

const AUTO_OPTIONS = [
  {
    price: 4999,
    label: "Both",
    icon: "🤖",
    desc: "Complete automation package (WhatsApp + Email)",
    recommended: true, // ← Recommended
  },
  {
    price: 2999,
    label: "WhatsApp",
    icon: "💬",
    desc: "Instant replies & follow-ups",
  },
  {
    price: 2999,
    label: "Email Automation",
    icon: "📧",
    desc: "Smart sequences",
  },
];

export default function StepAutomation({ selected, onChange, onNext, onBack }) {
  return (
    <div className="automation">
      <div className="mobile">
        <h2 className="automation__title">Automation</h2>
      </div>

      <div className="automation__grid">
        {AUTO_OPTIONS.map((opt) => {
          const isActive = selected?.label === opt.label;
          const isRecommended = opt.recommended;

          return (
            <div
              key={opt.label}
              className={`automation__card ${
                isActive ? "automation__card--active" : ""
              } ${isRecommended ? "automation__card--recommended" : ""}`}
              onClick={() => onChange({ label: opt.label, price: opt.price })}
            >
              <div className="automation__icon">{opt.icon}</div>

              <div className="automation__content">
                <strong className="automation__label">
                  {opt.label}
                  {isRecommended && (
                    <span className="automation__badge">Recommended</span>
                  )}
                </strong>
                <p className="automation__desc">{opt.desc}</p>
              </div>

              <div className="automation__price">₹{opt.price}</div>

              {isActive && <span className="automation__check">✔</span>}
            </div>
          );
        })}
      </div>

      <div className="automation__actions">
        <button
          className="automation__btn automation__btn--secondary"
          onClick={onBack}
        >
          ← Back
        </button>
        <button
          className="automation__btn automation__btn--primary"
          onClick={onNext}
        >
          Continue →
        </button>
      </div>
    </div>
  );
}
