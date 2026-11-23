"use client";

const HOST_OPTIONS = [
  { price: 0, label: "I have my own hosting", icon: "🖥️" },
  { price: 399, label: "Need hosting + domain", icon: "🌐" },
];

export default function StepAddons({
  hosting,
  addonDashboard,
  onHostingChange,
  onAddonChange,
  onNext,
  onBack,
}) {
  return (
    <div className="hosting">
      <div className="mobile">
        <h2 className="hosting__title">Hosting & Add-ons</h2>
        <p className="hosting__subtitle">
          Optional extras on top of your package
        </p>
      </div>

      <div className="hosting__grid">
        {HOST_OPTIONS.map((opt) => {
          const isActive = hosting?.label === opt.label;

          return (
            <div
              key={opt.label}
              className={`hosting__card ${
                isActive ? "hosting__card--active" : ""
              }`}
              onClick={() =>
                onHostingChange({ label: opt.label, price: opt.price })
              }
            >
              <div className="hosting__icon">{opt.icon}</div>

              <div className="hosting__content">
                <strong className="hosting__label">{opt.label}</strong>
              </div>

              <div className="hosting__price">
                {opt.price === 0 ? "N/A" : `£${opt.price}`}
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

          <div className="hosting__addon-price">£299</div>

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
