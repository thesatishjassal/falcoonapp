const cards = [
  {
    bgColor: "green",
    iconColor: "falcoon-card__icon--green",
    icon: (
      <svg viewBox="0 0 16 16" fill="none">
        <path
          d="M8 2.5l1.5 4h4l-3.2 2.3 1.2 3.9L8 10.2l-3.5 2.5 1.2-3.9L2.5 6.5h4L8 2.5z"
          stroke="#1D9E75"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
      </svg>
    ),
    badge: null,
    featured: false,
    title: "Turn Followers Into\nPaying Clients",
    desc: "A clean sales page that converts — no tech skills needed.",
    checks: ["Custom landing page", "Lead capture forms", "WhatsApp follow-up"],
  },
  {
    bgColor: "orange",
    iconColor: "falcoon-card__icon--orange",
    icon: (
      <svg viewBox="0 0 16 16" fill="none">
        <rect
          x="2"
          y="4"
          width="12"
          height="9"
          rx="1.5"
          stroke="#D85A30"
          strokeWidth="1.2"
        />
        <path
          d="M5 4V3a3 3 0 0 1 6 0v1"
          stroke="#D85A30"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <circle cx="8" cy="8.5" r="1" fill="#D85A30" />
      </svg>
    ),
    badge: "Most popular",
    featured: true,
    title: "Sell Packages\n& Products",
    desc: "Set prices and collect payments in minutes.",
    checks: [
      "1:1, group & digital products",
      "UPI, card & EMI support",
      "Auto invoices & receipts",
    ],
  },
  {
    bgColor: "blue",
    iconColor: "falcoon-card__icon--blue",
    icon: (
      <svg viewBox="0 0 16 16" fill="none">
        <rect
          x="2"
          y="3"
          width="12"
          height="11"
          rx="1.5"
          stroke="#185FA5"
          strokeWidth="1.2"
        />
        <path
          d="M2 7h12M5 2v2M11 2v2"
          stroke="#185FA5"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <rect x="5" y="9" width="2" height="2" rx="0.5" fill="#185FA5" />
        <rect x="9" y="9" width="2" height="2" rx="0.5" fill="#185FA5" />
      </svg>
    ),
    badge: null,
    featured: false,
    title: "Automate Bookings\n& Payments",
    desc: "Clients book themselves. You wake up to confirmed sessions.",
    checks: [
      "Real-time availability",
      "Auto reminders sent",
      "Zero back-and-forth",
    ],
  },
];

const avatars = [
  { initials: "AK", bg: "#E6F1FB", color: "#185FA5" },
  { initials: "PR", bg: "#E1F5EE", color: "#0F6E56" },
  { initials: "SM", bg: "#FBEAF0", color: "#993556" },
  { initials: "RJ", bg: "#FAEEDA", color: "#854F0B" },
];

const CheckIcon = () => (
  <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
    <path
      d="M1.5 4L3 5.5L6.5 2"
      stroke="#1D9E75"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Offer() {
  return (
    <section className="falcoon-offer">
      <div className="falcoon-offer__container falcoon-container">
        {/* Header */}
        <div className="falcoon-offer__header">
          <div className="falcoon-offer__pill">
            <span className="falcoon-offer__pill-dot" />
            The solution
          </div>
          <h2 className="falcoon-offer__title">
            One system to run your{" "}
            <span className="falcoon-offer__title-accent">
              entire coaching business
            </span>
          </h2>
          <p className="falcoon-offer__desc">
            No more juggling apps. Falcoon handles your clients, bookings, and
            payments — all in one place.
          </p>
        </div>

        {/* Cards */}
        <div className="falcoon-offer__grid">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`falcoon-card ${card.featured ? "falcoon-card--featured" : ""} ${card.bgColor}`}
            >
              {/* Card Head */}
              <div className="falcoon-card__head">
                <div className={`falcoon-card__icon ${card.iconColor}`}>
                  {card.icon}
                </div>
                {/* {card.badge && (
                  <span className="falcoon-card__badge">{card.badge}</span>
                )} */}
              </div>

              {/* Card Body */}
              <div className="falcoon-card__body">
                <h3 className="falcoon-card__title">
                  {card.title.split("\n").map((line, j) => (
                    <span key={j}>
                      {line}
                      {j < card.title.split("\n").length - 1 && <br />}
                    </span>
                  ))}
                </h3>
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

        {/* Bottom Bar */}
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
              <strong>340+ coaches</strong> already on Falcoon
            </p>
          </div>
          <a tel="+91 7888467258" className="falcoon-offer__cta">
            call Now
          </a>
        </div>
      </div>
    </section>
  );
}
