"use client";

const niches = [
  {
    emoji: "🏋️",
    bg: "#FFF3E0",
    title: "Personal Trainers",
    hook: "Manage 1:1 clients, sessions & payments without the chaos.",
    tag: "Gym & home coaches",
  },
  {
    emoji: "🧘",
    bg: "#F3E5F5",
    title: "Yoga & Mindfulness",
    hook: "Sell drop-ins, memberships & retreats from one link.",
    tag: "Classes & workshops",
  },
  {
    emoji: "🥗",
    bg: "#E8F5E9",
    title: "Nutrition & Diet Experts",
    hook: "Offer meal plans, consultations & follow-ups professionally.",
    tag: "Dietitians & coaches",
  },
  {
    emoji: "💪",
    bg: "#FCE4EC",
    title: "Fitness & Transformation",
    hook: "Run body transformation programs with built-in payments.",
    tag: "Online coaches",
  },
  {
    emoji: "📱",
    bg: "#E3F2FD",
    title: "Online Fitness Creators",
    hook: "Monetise your audience with digital products & subscriptions.",
    tag: "Influencers & creators",
  },
  {
    emoji: "🏢",
    bg: "#F1F8E9",
    title: "Gym & Studio Owners",
    hook: "Automate memberships, class bookings & walk-in payments.",
    tag: "Studios & facilities",
  },
];

export default function Services() {
  return (
    <section className="falcoon-services">
      <div className="falcoon-container">
        {/* HEADER */}
        <div className="falcoon-services__header">
          <span className="falcoon-services__badge">
            <span className="falcoon-services__badge-dot" />
            Who it's for
          </span>

          <h2 className="falcoon-services__title">
            Built for <span>every type</span> of fitness professional
          </h2>

          <p className="falcoon-services__desc">
            Whether you train in-person, online, or both — Falcoon works for
            your niche.
          </p>
        </div>

        {/* GRID */}
        <div className="falcoon-services__grid">
          {niches.map((niche, i) => (
            <div key={i} className="falcoon-niche-card">
              <div className="falcoon-niche-card__top">
                <div
                  className="falcoon-niche-card__icon"
                  style={{ background: niche.bg }}
                >
                  <span>{niche.emoji}</span>
                </div>

                <h3 className="falcoon-niche-card__title">{niche.title}</h3>
              </div>

              <div className="falcoon-niche-card__divider" />

              <p className="falcoon-niche-card__desc">{niche.hook}</p>

              <span className="falcoon-niche-card__tag">✓ {niche.tag}</span>
            </div>
          ))}
        </div>

        {/* CTA BAR */}
        <div className="falcoon-services__cta-bar">
          <p>
            <strong>Your niche is covered.</strong> Lets get you set up with a
            free strategy call.
          </p>

          <a
            href="https://calendly.com/thesatishjassal/falcoon-fitness-business-strategy-call"
            className="falcoon-services__cta-btn"
          >
            Start free →
          </a>
        </div>
      </div>
    </section>
  );
}
