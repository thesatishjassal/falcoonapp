const AUTO_OPTIONS = [
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
  {
    price: 4999,
    label: "Both",
    icon: "🤖",
    desc: "Complete automation",
  },
];

export default function StepAutomation({ selected, onChange, onNext, onBack }) {
  return (
    <div className="automation">
      <div className="mobile_none">      <h2 className="automation__title">Automation</h2>
      <p className="automation__subtitle">
        Automate your communication & save time
      </p></div>

      <div className="automation__grid">
        {AUTO_OPTIONS.map((opt) => {
          const isActive = selected?.label === opt.label;

          return (
            <div
              key={opt.label}
              className={`automation__card ${
                isActive ? "automation__card--active" : ""
              }`}
              onClick={() => onChange({ label: opt.label, price: opt.price })}
            >
              <div className="automation__icon">{opt.icon}</div>

              <div className="automation__content">
                <strong className="automation__label">{opt.label}</strong>
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
