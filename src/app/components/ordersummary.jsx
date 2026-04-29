function fmt(price) {
  return `₹${price.toLocaleString("en-IN")}`;
}

export default function OrderSummary({ selections, total, onContinue }) {
  const { launch, payment, automation, hosting, addons } = selections;
  const addonTotal = addons.clientDashboard ? 2999 : 0;

  return (
    <div className="summary">
      <h3 className="summary__title">Order Summary</h3>

      <div className="summary__list">
        <div className="summary__row">
          <span>{launch.label}</span>
          <span>{fmt(launch.price)}</span>
        </div>

        <div className="summary__row">
          <span>{payment.label}</span>
          <span>{fmt(payment.price)}</span>
        </div>

        <div className="summary__row">
          <span>Automation</span>
          <span>{automation.price > 0 ? fmt(automation.price) : "—"}</span>
        </div>

        <div className="summary__row">
          <span>Hosting</span>
          <span>{hosting.price > 0 ? fmt(hosting.price) : "—"}</span>
        </div>

        <div className="summary__row">
          <span>Add-ons</span>
          <span>{addonTotal > 0 ? fmt(addonTotal) : "—"}</span>
        </div>
      </div>

      <div className="summary__divider" />

      <div className="summary__total">
        <span>Total</span>
        <span>{fmt(total)}</span>
      </div>

      <button className="summary__btn" onClick={onContinue}>
        Continue →
      </button>

      <a
        href="https://calendly.com/thesatishjassal/falcoon-fitness-business-strategy-call"
        className="summary__cta"
      >
        📞 Book Free Strategy Call
      </a>

      <p className="summary__trust">🔒 Secure checkout • No hidden charges</p>
    </div>
  );
}
