"use client";

const TIER_OPTIONS = [
  {
    price: 799,
    label: "Starter",
    icon: "🚀",
    desc: "Landing page, 1 funnel, WhatsApp & email automation",
    features: [
      "1 high-converting funnel",
      "WhatsApp + Email automation",
      "Lead follow-up sequences",
      "Basic booking link",
    ],
  },
  {
    price: 1499,
    label: "Growth",
    icon: "📈",
    desc: "Everything in Starter, plus CRM and booking",
    recommended: true,
    features: [
      "Everything in Starter",
      "Lead management CRM",
      "Appointment booking + reminders",
      "Multiple funnel types",
      "Full automation suite",
    ],
  },
  {
    price: 2499,
    label: "Elite",
    icon: "🦅",
    desc: "Everything in Growth, plus coaching portal & AI",
    features: [
      "Everything in Growth",
      "Client coaching portal",
      "Private community",
      "AI chatbot & lead qualification",
      "Full analytics dashboard",
    ],
  },
];

export default function StepPackage({ selected, onChange, onNext }) {
  return (
    <div className="package">
      <div className="mobile">
        <h2 className="package__title">Choose Your Package</h2>
        <p className="package__subtitle">
          Pick the plan that matches where your business is right now
        </p>
      </div>

      <div className="package__grid">
        {TIER_OPTIONS.map((opt) => {
          const isActive = selected?.label === opt.label;
          const isRecommended = opt.recommended;

          return (
            <div
              key={opt.label}
              className={`package__card ${
                isActive ? "package__card--active" : ""
              } ${isRecommended ? "package__card--recommended" : ""}`}
              onClick={() => onChange({ label: opt.label, price: opt.price })}
            >
              <div className="package__icon">{opt.icon}</div>

              <div className="package__content">
                <strong className="package__label">
                  {opt.label}
                  {isRecommended && (
                    <span className="package__badge">Most Popular</span>
                  )}
                </strong>
                <p className="package__desc">{opt.desc}</p>

                <ul className="package__features">
                  {opt.features.map((f) => (
                    <li key={f}>✔ {f}</li>
                  ))}
                </ul>
              </div>

              <div className="package__price">£{opt.price}</div>

              {isActive && <span className="package__check">✔</span>}
            </div>
          );
        })}
      </div>

      <div className="package__actions">
        <button className="package__btn" onClick={onNext}>
          Continue →
        </button>
      </div>
    </div>
  );
}
