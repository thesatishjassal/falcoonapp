"use client";

const niches = [
  {
    emoji: "🏋️",
    title: "Personal Trainers",
    hook: "Manage clients & get paid",
    tag: "1:1 coaching",
  },
  {
    emoji: "🧘",
    title: "Yoga Coaches",
    hook: "Sell classes & memberships",
    tag: "Classes & workshops",
  },
  {
    emoji: "🥗",
    title: "Nutrition Experts",
    hook: "Sell plans & consultations",
    tag: "Diet coaching",
  },
  {
    emoji: "💪",
    title: "Online Coaches",
    hook: "Run transformation programmes",
    tag: "Online fitness",
  },
  {
    emoji: "📱",
    title: "Fitness Creators",
    hook: "Monetise your audience",
    tag: "Content creators",
  },
  {
    emoji: "🏢",
    title: "Gym Owners",
    hook: "Automate bookings & payments",
    tag: "Studios & gyms",
  },
];

export default function BuildFor() {
  return (
    <section className="classic-buildfor">
      <div className="classic-wrap">
        {/* HEADER */}
        <div className="classic-buildfor-header">
          <span className="classic-buildfor-badge">★ Who it&apos;s for</span>

          <h2 className="classic-buildfor-title">
            Built for <span>UK fitness professionals</span>
          </h2>

          <p className="classic-buildfor-desc">
            Find yourself below — this is built exactly for you.
          </p>
        </div>

        {/* GRID */}
        <div className="classic-buildfor-grid">
          {niches.map((niche, i) => (
            <div key={i} className="classic-niche-card">
              <div className="classic-niche-card-top">
                <div className="classic-niche-card-icon">
                  <span>{niche.emoji}</span>
                </div>

                <h3 className="classic-niche-card-title">{niche.title}</h3>
              </div>

              <p className="classic-niche-card-desc">{niche.hook}</p>

              <span className="classic-niche-card-tag">{niche.tag}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="classic-buildfor-cta-bar">
          <p>
            <strong>This works for your niche.</strong> Let&apos;s build your
            funnel.
          </p>

          <a
            href="https://calendly.com/thesatishjassal/falcoon-fitness-business-strategy-call"
            className="classic-buildfor-cta-btn"
          >
            Get Started →
          </a>
        </div>
      </div>

      <style jsx>{`
        .classic-buildfor {
          background: var(--ivory, #f7f1e4);
          color: var(--ink, #241f1c);
          font-family: var(--sans, "Karla", Arial, sans-serif);
          padding: 72px 0 76px;
          border-top: 1px solid var(--line-soft, rgba(36, 31, 28, 0.07));
        }

        .classic-wrap {
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* ── Header ── */
        .classic-buildfor-header {
          text-align: center;
          max-width: 560px;
          margin: 0 auto 40px;
        }
        .classic-buildfor-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--gold-dark, #96702f);
          background: var(--gold-pale, #f1e4c8);
          padding: 6px 14px;
          border-radius: var(--radius-pill, 999px);
          margin-bottom: 18px;
        }
        .classic-buildfor-title {
          font-family: var(--serif, "Fraunces", Georgia, serif);
          font-size: clamp(28px, 3.6vw, 40px);
          font-weight: 600;
          letter-spacing: -0.02em;
          line-height: 1.18;
          margin: 0 0 12px;
        }
        .classic-buildfor-title span {
          color: var(--gold-dark, #96702f);
        }
        .classic-buildfor-desc {
          color: var(--ink-soft, #665c53);
          font-size: 15px;
          margin: 0;
        }

        /* ── Grid ── */
        .classic-buildfor-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
          margin-bottom: 36px;
        }
        @media (max-width: 900px) {
          .classic-buildfor-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 560px) {
          .classic-buildfor-grid {
            grid-template-columns: 1fr;
          }
        }

        .classic-niche-card {
          border: 1px solid var(--line, rgba(36, 31, 28, 0.13));
          border-radius: var(--radius, 16px);
          background: var(--cream-card, #fffdf7);
          padding: 22px;
          transition: all 0.25s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .classic-niche-card:hover {
          border-color: var(--gold, #c39a56);
          box-shadow: var(
            --shadow,
            0 10px 28px rgba(36, 31, 28, 0.08),
            0 2px 8px rgba(36, 31, 28, 0.04)
          );
          transform: translateY(-3px);
        }

        .classic-niche-card-top {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
        }
        .classic-niche-card-icon {
          flex-shrink: 0;
          width: 42px;
          height: 42px;
          border-radius: 11px;
          background: var(--ivory-deep, #ece2cc);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 19px;
        }
        .classic-niche-card-title {
          font-family: var(--serif, "Fraunces", Georgia, serif);
          font-size: 15.5px;
          font-weight: 600;
          letter-spacing: -0.01em;
          margin: 0;
        }

        .classic-niche-card-desc {
          font-size: 13px;
          line-height: 1.5;
          color: var(--ink-soft, #665c53);
          margin: 0 0 14px;
        }

        .classic-niche-card-tag {
          display: inline-block;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: var(--ink, #241f1c);
          background: var(--ivory-deep, #ece2cc);
          padding: 5px 12px;
          border-radius: var(--radius-pill, 999px);
        }

        /* ── CTA bar ── */
        .classic-buildfor-cta-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          flex-wrap: wrap;
          border: 1px solid var(--line, rgba(36, 31, 28, 0.13));
          border-radius: var(--radius, 16px);
          background: var(--cream-card, #fffdf7);
          padding: 20px 26px;
          box-shadow: var(
            --shadow,
            0 10px 28px rgba(36, 31, 28, 0.08),
            0 2px 8px rgba(36, 31, 28, 0.04)
          );
        }
        .classic-buildfor-cta-bar p {
          margin: 0;
          font-size: 14px;
          color: var(--ink-soft, #665c53);
        }
        .classic-buildfor-cta-bar p strong {
          color: var(--ink, #241f1c);
          font-weight: 700;
        }

        .classic-buildfor-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 14px 24px;
          border-radius: var(--radius-pill, 999px);
          background: var(--ink, #241f1c);
          color: var(--ivory, #f7f1e4);
          font-family: var(--sans, "Karla", Arial, sans-serif);
          font-weight: 700;
          font-size: 14px;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.25s ease;
          white-space: nowrap;
        }
        .classic-buildfor-cta-btn:hover {
          background: var(--gold-dark, #96702f);
          transform: translateY(-2px);
          box-shadow: 0 12px 24px rgba(150, 112, 47, 0.3);
        }
      `}</style>
    </section>
  );
}