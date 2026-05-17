"use client"; // ← Add this at the very top

const LAUNCH_OPTIONS = [
  {
    price: 7999,
    label: "Counseling",
    icon: "🧠",
    desc: "1:1 or group sessions",
    recommended: true,
  },
  {
    price: 14999,
    label: "Fitness Program",
    icon: "🏋️",
    desc: "Sell online training programs",
  },
  {
    price: 14999,
    label: "Product",
    icon: "📦",
    desc: "Sell physical or digital products",
  },
];

export default function StepLaunch({ selected, onChange, onNext }) {
  return (
    <div className="launch">
      <div className="mobile">
        <h2 className="launch__title">What do you want to launch?</h2>
      </div>

      <div className="launch__grid">
        {LAUNCH_OPTIONS.map((opt) => {
          const isActive = selected?.label === opt.label;
          const isRecommended = opt.recommended;

          return (
            <div
              key={opt.label}
              className={`launch__card ${
                isActive ? "launch__card--active" : ""
              } ${isRecommended ? "launch__card--recommended" : ""}`}
              onClick={() => onChange({ label: opt.label, price: opt.price })}
            >
              <div className="launch__icon">{opt.icon}</div>

              <div className="launch__content">
                <strong className="launch__label">
                  {opt.label}
                  {isRecommended && (
                    <span className="launch__badge">Recommended</span>
                  )}
                </strong>
                <p className="launch__desc">{opt.desc}</p>
              </div>

              <div className="launch__price">₹{opt.price}</div>
            </div>
          );
        })}
      </div>

      <div className="launch__actions">
        <button className="launch__btn" onClick={onNext}>
          Continue →
        </button>
      </div>
    </div>
  );
}
