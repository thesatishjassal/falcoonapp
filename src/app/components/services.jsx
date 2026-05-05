"use client";

const niches = [
  {
    emoji: "🏋️",
    bg: "#FFF3E0",
    title: "Personal Trainers",
    hook: "Manage clients & get paid",
    tag: "1:1 coaching",
  },
  {
    emoji: "🧘",
    bg: "#F3E5F5",
    title: "Yoga Coaches",
    hook: "Sell classes & memberships",
    tag: "Classes & workshops",
  },
  {
    emoji: "🥗",
    bg: "#E8F5E9",
    title: "Nutrition Experts",
    hook: "Sell plans & consultations",
    tag: "Diet coaching",
  },
  {
    emoji: "💪",
    bg: "#FCE4EC",
    title: "Online Coaches",
    hook: "Run transformation programs",
    tag: "Online fitness",
  },
  {
    emoji: "📱",
    bg: "#E3F2FD",
    title: "Fitness Creators",
    hook: "Monetise your audience",
    tag: "Content creators",
  },
  {
    emoji: "🏢",
    bg: "#F1F8E9",
    title: "Gym Owners",
    hook: "Automate bookings & payments",
    tag: "Studios & gyms",
  },
];

export default function BuildFor() {
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
            Built for <span>fitness professionals</span>
          </h2>

          <p className="falcoon-services__desc">
            Find yourself below — this is built exactly for you.
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

              {/* SHORT BENEFIT */}
              <p className="falcoon-niche-card__desc">{niche.hook}</p>

              {/* LIGHT TAG */}
              <span className="falcoon-niche-card__tag">{niche.tag}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="falcoon-services__cta-bar">
          <p>
            <strong>This works for your niche.</strong> Let’s build your funnel.
          </p>

          <a
            href="https://calendly.com/thesatishjassal/falcoon-fitness-business-strategy-call"
            className="falcoon-services__cta-btn"
          >
            Get Started →
          </a>
        </div>
      </div>
    </section>
  );
}
