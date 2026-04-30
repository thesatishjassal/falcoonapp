"use client";

export default function HelpCenterPage() {
  return (
    <section className="falcoon-help">

      {/* HERO */}
      <div className="falcoon-help__hero">
        <h1>Help Center</h1>
        <p>Find answers and learn how to use Falcoon effectively.</p>
      </div>

      <div className="falcoon-container">

        {/* SECTION 1 */}
        <div className="falcoon-help__section">
          <h2>Getting Started</h2>

          <div className="falcoon-help__item">
            <h4>How does Falcoon work?</h4>
            <p>
              Falcoon helps fitness professionals create a complete system to
              get leads, accept payments, and deliver services automatically.
            </p>
          </div>

          <div className="falcoon-help__item">
            <h4>What do I need to begin?</h4>
            <p>
              You only need your service or program. We handle the rest —
              funnels, pages, payments, and automation.
            </p>
          </div>
        </div>

        {/* SECTION 2 */}
        <div className="falcoon-help__section">
          <h2>Payments & Billing</h2>

          <div className="falcoon-help__item">
            <h4>Which payment gateways are supported?</h4>
            <p>
              We support Razorpay, Stripe, and PayPal for secure and smooth
              transactions.
            </p>
          </div>

          <div className="falcoon-help__item">
            <h4>When do I receive payments?</h4>
            <p>
              Payments are directly transferred to your account based on your
              payment gateway’s settlement cycle.
            </p>
          </div>
        </div>

        {/* SECTION 3 */}
        <div className="falcoon-help__section">
          <h2>Funnels & Leads</h2>

          <div className="falcoon-help__item">
            <h4>How do I get clients?</h4>
            <p>
              We build a system using ads, landing pages, and automation that
              brings leads and converts them into paying clients.
            </p>
          </div>

          <div className="falcoon-help__item">
            <h4>Do I need technical knowledge?</h4>
            <p>
              No. Everything is designed to be simple and managed for you.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="falcoon-help__cta">
          <h3>Still need help?</h3>
          <p>Contact our team and we’ll assist you quickly.</p>
          <button className="falcoon-btn falcoon-btn--dark">
            Contact Support →
          </button>
        </div>

      </div>
    </section>
  );
}