const PAYMENT_OPTIONS = [
  {
    price: 2999,
    label: "Razorpay",
    icon: "fa-credit-card",
    iconPrefix: "fas",
    desc: "UPI, Cards & Net Banking",
  },
  {
    price: 2999,
    label: "PayPal",
    icon: "fa-paypal",
    iconPrefix: "fab",
    desc: "International payments",
  },
];

export default function StepPayment({ selected, onChange, onNext, onBack }) {
  return (
    <div className="step active">
      <h2>Payment Gateway</h2>
      <div className="options-grid">
        {PAYMENT_OPTIONS.map((opt) => (
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
