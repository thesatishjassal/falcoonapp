const AUTO_OPTIONS = [
  {
    price: 2999,
    label: "WhatsApp",
    icon: "fa-whatsapp",
    iconPrefix: "fab",
    desc: "Instant replies & follow-ups",
  },
  {
    price: 2999,
    label: "Email Automation",
    icon: "fa-envelope",
    iconPrefix: "fas",
    desc: "Smart sequences",
  },
  {
    price: 4999,
    label: "Both",
    icon: "fa-robot",
    iconPrefix: "fas",
    desc: "Complete automation",
  },
];

export default function StepAutomation({ selected, onChange, onNext, onBack }) {
  return (
    <div className="step active">
      <h2>Automation</h2>
      <div className="options-grid">
        {AUTO_OPTIONS.map((opt) => (
          <div
            key={opt.label}
            className={`option ${selected.label === opt.label ? "active" : ""}`}
            onClick={() => onChange({ label: opt.label, price: opt.price })}
          >
            <div className="icon">
              <i className={`${opt.iconPrefix} ${opt.icon}`} />
            </div>
            <strong>{opt.label}</strong>
            <p>{opt.desc}</p>
          </div>
        ))}
      </div>
      <div className="actions">
        <button className="btn btn-secondary" onClick={onBack}>← Back</button>
        <button className="btn btn-primary" onClick={onNext}>Continue →</button>
      </div>
    </div>
  );
}
