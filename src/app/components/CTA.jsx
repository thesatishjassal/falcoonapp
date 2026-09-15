"use client";

export default function CtaBanner() {
  const onOpenModal = () => {
    window.open(
      "https://calendly.com/thesatishjassal/falcoon-fitness-business-strategy-call",
      "_blank"
    );
  };

  return (
    <section className="classic-cta-banner">
      <div className="classic-wrap">
        <div className="classic-cta-banner-inner">
          {/* TRUST BADGE */}
          <span className="classic-cta-banner-badge">
            ⚡ Limited spots available this month
          </span>

          {/* HEADLINE */}
          <h2 className="classic-cta-banner-title">
            Get your <span>first paying fitness client</span> in days — not
            months
          </h2>

          {/* SUBTEXT */}
          <p className="classic-cta-banner-subtitle">
            We build your complete funnel, content &amp; automation so you can
            focus on coaching.
          </p>

          {/* CTA */}
          <button className="classic-cta-banner-button" onClick={onOpenModal}>
            Book Free Strategy Call
            <span>→</span>
          </button>

          {/* TRUST LINE */}
          <p className="classic-cta-banner-trust">
            No commitment • Done-for-you system • Results-focused
          </p>
        </div>
      </div>

      <style jsx>{`
        .classic-cta-banner {
          background: var(--ink, #241f1c);
          color: var(--ivory, #f7f1e4);
          font-family: var(--sans, "Karla", Arial, sans-serif);
          padding: 76px 0;
          position: relative;
          overflow: hidden;
        }
        .classic-cta-banner::before {
          content: "";
          position: absolute;
          top: -140px;
          left: 50%;
          transform: translateX(-50%);
          width: 620px;
          height: 320px;
          background: radial-gradient(
            circle,
            rgba(195, 154, 86, 0.35),
            transparent 70%
          );
          pointer-events: none;
        }

        .classic-wrap {
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
        }

        .classic-cta-banner-inner {
          text-align: center;
          max-width: 680px;
          margin: 0 auto;
        }

        .classic-cta-banner-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--gold-pale, #f1e4c8);
          background: rgba(247, 241, 228, 0.1);
          border: 1px solid rgba(247, 241, 228, 0.2);
          padding: 7px 16px;
          border-radius: var(--radius-pill, 999px);
          margin-bottom: 24px;
        }

        .classic-cta-banner-title {
          font-family: var(--serif, "Fraunces", Georgia, serif);
          font-size: clamp(30px, 4.4vw, 48px);
          font-weight: 600;
          letter-spacing: -0.02em;
          line-height: 1.18;
          margin: 0 0 16px;
        }
        .classic-cta-banner-title span {
          color: var(--gold, #c39a56);
        }

        .classic-cta-banner-subtitle {
          font-size: 16px;
          line-height: 1.6;
          color: rgba(247, 241, 228, 0.72);
          margin: 0 0 32px;
        }

        .classic-cta-banner-button {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 30px;
          border: none;
          border-radius: var(--radius-pill, 999px);
          background: var(--gold, #c39a56);
          color: var(--ink, #241f1c);
          font-family: var(--sans, "Karla", Arial, sans-serif);
          font-weight: 700;
          font-size: 15px;
          cursor: pointer;
          transition: all 0.25s ease;
        }
        .classic-cta-banner-button:hover {
          background: var(--gold-pale, #f1e4c8);
          transform: translateY(-2px);
          box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25);
        }
        .classic-cta-banner-button span {
          transition: transform 0.2s ease;
        }
        .classic-cta-banner-button:hover span {
          transform: translateX(3px);
        }

        .classic-cta-banner-trust {
          margin: 22px 0 0;
          font-size: 12.5px;
          color: rgba(247, 241, 228, 0.55);
        }
      `}</style>
    </section>
  );
}