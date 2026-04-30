const HOST_OPTIONS = [
  { price: 0, label: "I have my own hosting", icon: "🖥️" },
  { price: 3999, label: "Need hosting + domain", icon: "🌐" },
];

export default function StepHosting({
  selected,
  addonDashboard,
  onChange,
  onAddonChange,
  onNext,
  onBack,
}) {
  return (
    <div className="hosting">
      <div className="mobile_none">
        <h2 className="hosting__title">Hosting & Domain</h2>
        {/* <p className="hosting__subtitle">Choose your hosting setup</p> */}
      </div>

      <div className="hosting__grid">
        {HOST_OPTIONS.map((opt) => {
          const isActive = selected?.label === opt.label;

          return (
            <div
              key={opt.label}
              className={`hosting__card ${
                isActive ? "hosting__card--active" : ""
              }`}
              onClick={() => onChange({ label: opt.label, price: opt.price })}
            >
              <div className="hosting__icon">{opt.icon}</div>

              <div className="hosting__content">
                <strong className="hosting__label">{opt.label}</strong>
              </div>

              <div className="hosting__price">
                {opt.price === 0 ? "N/A" : `₹${opt.price}`}
              </div>

              {isActive && <span className="hosting__check">✔</span>}
            </div>
          );
        })}
      </div>

      {/* ADD-ONS */}
      <div className="hosting__addons">
        <h3 className="hosting__addons-title">Add-ons</h3>

        <div
          className={`hosting__addon-card ${
            addonDashboard ? "hosting__addon-card--active" : ""
          }`}
          onClick={() => onAddonChange(!addonDashboard)}
        >
          <div className="hosting__addon-icon">📊</div>

          <div className="hosting__addon-content">
            <strong>Client Dashboard</strong>
            <p>Manage users, data & analytics</p>
          </div>

          <div className="hosting__addon-price">₹2,999</div>

          {addonDashboard && <span className="hosting__check">✔</span>}
        </div>
      </div>

      <div className="hosting__actions">
        <button
          className="hosting__btn hosting__btn--secondary"
          onClick={onBack}
        >
          ← Back
        </button>
        <button className="hosting__btn hosting__btn--primary" onClick={onNext}>
          Continue →
        </button>
      </div>
    </div>
  );
}
