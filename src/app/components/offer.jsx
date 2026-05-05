"use client";

const cards = [
  {
    bgColor: "green",
    iconColor: "falcoon-card__icon--green",
    icon: <i className="fa-solid fa-dumbbell"></i>,
    badge: "💪 MOST POPULAR",
    featured: false,
    title: "Sell Fitness Programs",
    desc: "Turn your coaching into a system that brings clients daily — not randomly.",
    checks: [
      "High-converting landing pages",
      "Clear offer positioning",
      "WhatsApp + lead automation",
    ],
  },
  {
    bgColor: "orange",
    iconColor: "falcoon-card__icon--orange",
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
    bgColor: "blue",
    iconColor: "falcoon-card__icon--blue",
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

const CheckIcon = () => <i className="fa-solid fa-check"></i>;

export default function Offer() {
  return (
    <section className="falcoon-offer">
      <div className="falcoon-offer__container falcoon-container">
        {/* Header */}
        <div className="falcoon-offer__header">
          <div className="falcoon-offer__pill">
            <span className="falcoon-offer__pill-dot" />
            Done-for-you funnels
          </div>

          <h2 className="falcoon-offer__title">
            We build your{" "}
            <span className="falcoon-offer__title-accent">
              fitness revenue funnels
            </span>
          </h2>

          <p className="falcoon-offer__desc">
            Sell programs, products, and consultations — without tech headaches.
            You focus on coaching. We handle the funnel.
          </p>
        </div>

        {/* Cards */}
        <div className="falcoon-offer__grid">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`falcoon-card ${
                card.featured ? "falcoon-card--featured" : ""
              } ${card.bgColor}`}
            >
              {/* Card Head */}
              <div className="falcoon-card__head">
                <div className={`falcoon-card__icon ${card.iconColor}`}>
                  {card.icon}
                </div>
              </div>

              {/* Card Body */}
              <div className="falcoon-card__body">
                <h3 className="falcoon-card__title">{card.title}</h3>
                <p className="falcoon-card__desc">{card.desc}</p>
              </div>

              <div className="falcoon-card__divider" />

              {/* Checklist */}
              <ul className="falcoon-card__checks">
                {card.checks.map((item, j) => (
                  <li key={j} className="falcoon-card__check">
                    <span className="falcoon-card__check-icon">
                      <CheckIcon />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Payment Trust (same structure area reused) */}
        <div className="falcoon-offer__bar">
          <div className="falcoon-offer__bar-left">
            <div className="falcoon-offer__avatars">
              {avatars.map((a, i) => (
                <div
                  key={i}
                  className="falcoon-offer__avatar"
                  style={{ background: a.bg, color: a.color }}
                >
                  {a.initials}
                </div>
              ))}
            </div>

            <p className="falcoon-offer__bar-text">
              <strong>50+ fitness coaches</strong> scaling with Falcoon funnels
            </p>
          </div>

          <a
            href="https://calendly.com/thesatishjassal/falcoon-fitness-business-strategy-call"
            className="falcoon-offer__cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            Build My Funnel <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>

        {/* Payment badges (added below WITHOUT changing structure) */}
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <p style={{ fontSize: "13px", color: "#666" }}>Accept payments via</p>
          <div
            style={{
              display: "flex",
              gap: "10px",
              justifyContent: "center",
              marginTop: "8px",
            }}
          >
            <span>Stripe</span>
            <span>PayPal</span>
            <span>Razorpay</span>
          </div>
        </div>
      </div>
    </section>
  );
}
