function fmt(price) {
  return `₹${price.toLocaleString("en-IN")}`;
}

export default function OrderSummary({ selections, total, onContinue }) {
  const { launch, payment, automation, hosting, addons } = selections;
  const addonTotal = addons.clientDashboard ? 2999 : 0;

  return (
    <div className="summary-card">
      <h3>Order Summary</h3>

      <div className="summary-row">
        <span>{launch.label}</span>
        <span>{fmt(launch.price)}</span>
      </div>

      <div className="summary-row">
        <span>{payment.label}</span>
        <span>{fmt(payment.price)}</span>
      </div>

      <div className="summary-row">
        <span>Automation</span>
        <span>{automation.price > 0 ? fmt(automation.price) : "—"}</span>
      </div>

      <div className="summary-row">
        <span>Hosting</span>
        <span>{hosting.price > 0 ? fmt(hosting.price) : "—"}</span>
      </div>

      <div className="summary-row">
        <span>Add-ons</span>
        <span>{addonTotal > 0 ? fmt(addonTotal) : "—"}</span>
      </div>

      <hr style={{ margin: "16px 0", borderColor: "#eee" }} />

      <div className="summary-row total">
        <span>Total</span>
        <span>{fmt(total)}</span>
      </div>

      <button className="btn btn-primary" style={{ marginTop: "24px" }} onClick={onContinue}>
        Continue
      </button>

      <a
        href="https://calendly.com/thesatishjassal/falcoon-fitness-business-strategy-call"
        className="cta-link"
      >
        Book Free Strategy Call
      </a>
    </div>
  );
}
