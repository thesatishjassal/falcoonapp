"use client";

import "./offer.css";

const cards = [
  {
    icon: <i className="fa-solid fa-dumbbell"></i>,
    badge: "💪 MOST POPULAR",
    featured: false,
    title: "Sell Fitness Programmes",
    desc: "Turn your coaching into a system that brings clients daily — not randomly.",
    checks: [
      "High-converting landing pages",
      "Clear offer positioning",
      "WhatsApp + lead automation",
    ],
  },
  {
    icon: <i className="fa-solid fa-box"></i>,
    badge: "🔥 HIGH INCOME",
    featured: true,
    title: "Sell Fitness Products",
    desc: "Sell supplements, plans & digital fitness products 24/7 — even while you sleep.",
    checks: [
      "Product store setup",
      "Checkout + payment flow",
      "Upsell & bundle system",
    ],
  },
  {
    icon: <i className="fa-solid fa-calendar-check"></i>,
    badge: "⚡ EASY CASHFLOW",
    featured: false,
    title: "Sell Consultations",
    desc: "Clients book & pay before they talk to you — no negotiation, no delays.",
    checks: [
      "Auto booking funnels",
      "Paid Zoom/Meet integration",
      "Smart calendar sync",
    ],
  },
];

const avatars = [
  { initials: "AK", bg: "#E6F1FB", color: "#185FA5" },
  { initials: "PR", bg: "#E1F5EE", color: "#0F6E56" },
  { initials: "SM", bg: "#FBEAF0", color: "#993556" },
  { initials: "RJ", bg: "#FAEEDA", color: "#854F0B" },
];

const paymentMethods = ["Stripe", "PayPal", "GoCardless"];

const CheckIcon = () => <i className="fa-solid fa-check"></i>;

export default function Offer() {
  return (
    <section className="classic-offer">
      <div className="classic-wrap">
        {/* Header */}
        <div className="classic-offer-header">
          <div className="classic-offer-pill">
            <span className="classic-offer-pill-dot" />
            Done-for-you funnels
          </div>

          <h2 className="classic-offer-title">
            We build your{" "}
            <span className="classic-offer-title-accent">
              fitness revenue funnels
            </span>
          </h2>

          <p className="classic-offer-desc">
            Sell programmes, products, and consultations — without tech
            headaches. You focus on coaching. We handle the funnel.
          </p>
        </div>

        {/* Cards */}
        <div className="classic-offer-grid">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`classic-card ${
                card.featured ? "classic-card--featured" : ""
              }`}
            >
              {card.badge && (
                <span className="classic-card-badge">{card.badge}</span>
              )}

              {/* Card Head */}
              <div className="classic-card-head">
                <div className="classic-card-icon">{card.icon}</div>
              </div>

              {/* Card Body */}
              <div className="classic-card-body">
                <h3 className="classic-card-title">{card.title}</h3>
                <p className="classic-card-desc">{card.desc}</p>
              </div>

              <div className="classic-card-divider" />

              {/* Checklist */}
              <ul className="classic-card-checks">
                {card.checks.map((item, j) => (
                  <li key={j} className="classic-card-check">
                    <span className="classic-card-check-icon">
                      <CheckIcon />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Trust bar */}
        <div className="classic-offer-bar">
          <div className="classic-offer-bar-left">
            <div className="classic-offer-avatars">
              {avatars.map((a, i) => (
                <div
                  key={i}
                  className="classic-offer-avatar"
                  style={{ background: a.bg, color: a.color }}
                >
                  {a.initials}
                </div>
              ))}
            </div>

            <p className="classic-offer-bar-text">
              <strong>50+ UK fitness coaches</strong> scaling with Falcoon
              funnels
            </p>
          </div>

          <a
            href="https://calendly.com/thesatishjassal/free-strategy-call-uk"
            className="classic-offer-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            Build My Funnel <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>

        {/* Payment methods */}
        <div className="classic-offer-payments">
          <p>Accept payments via</p>
          <div className="classic-offer-payments-list">
            {paymentMethods.map((method) => (
              <span key={method} className="classic-offer-payment-badge">
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}