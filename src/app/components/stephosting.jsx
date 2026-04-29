const HOST_OPTIONS = [
  { price: 0, label: "I have my own hosting", icon: "fa-server" },
  { price: 3999, label: "Need hosting + domain", icon: "fa-globe" },
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
    <div className="step active">
      <h2>Hosting &amp; Domain</h2>
      <div className="options-grid">
        {HOST_OPTIONS.map((opt) => (
          <div
            key={opt.label}
            className={`option${selected.label === opt.label ? " active" : ""}`}
            onClick={() => onChange({ label: opt.label, price: opt.price })}
          >
            <div className="icon">
              <i className={`fas ${opt.icon}`} />
            </div>
            <strong>{opt.label}</strong>
          </div>
        ))}
      </div>

      <h2 style={{ margin: "24px 0 12px" }}>Add-ons</h2>
      <label style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "1.02rem", cursor: "pointer" }}>
        <input
          type="checkbox"
          className="addon"
          checked={addonDashboard}
          onChange={(e) => onAddonChange(e.target.checked)}
        />
        Client Dashboard — ₹2,999
      </label>

      <div className="actions">
        <button className="btn btn-secondary" onClick={onBack}>← Back</button>
        <button className="btn btn-primary" onClick={onNext}>Continue →</button>
      </div>
    </div>
  );
}
