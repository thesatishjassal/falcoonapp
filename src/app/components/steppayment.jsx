const PAYMENT_OPTIONS = [
  {
    price: 2999,
    label: "Razorpay",
    icon: "💳",
    desc: "UPI, Cards & Net Banking",
  },
  {
    price: 2999,
    label: "PayPal",
    icon: "🌍",
    desc: "International payments",
  },
];

export default function StepPayment({ selected, onChange, onNext, onBack }) {
  return (
    <div className="payment">
      <h2 className="payment__title">Payment Gateway</h2>
      <p className="payment__subtitle">
        Choose how you want to receive payments
      </p>

      <div className="payment__grid">
        {PAYMENT_OPTIONS.map((opt) => {
          const isActive = selected?.label === opt.label;

          return (
            <div
              key={opt.label}
              className={`payment__card ${
                isActive ? "payment__card--active" : ""
              }`}
              onClick={() => onChange({ label: opt.label, price: opt.price })}
            >
              <div className="payment__icon">{opt.icon}</div>

              <div className="payment__content">
                <strong className="payment__label">{opt.label}</strong>
                <p className="payment__desc">{opt.desc}</p>
              </div>

              <div className="payment__price">₹{opt.price}</div>
            </div>
          );
        })}
      </div>

      <div className="payment__actions">
        <button
          className="payment__btn payment__btn--secondary"
          onClick={onBack}
        >
          ← Back
        </button>
        <button className="payment__btn payment__btn--primary" onClick={onNext}>
          Continue →
        </button>
      </div>
    </div>
  );
}
