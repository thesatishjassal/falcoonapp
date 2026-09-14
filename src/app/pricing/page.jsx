"use client";

import { useMemo, useState } from "react";

const CORE_PRICE = 249;

const ADS = [
  {
    id: "meta",
    name: "Meta Ads Setup",
    price: 129,
    desc: "Campaign structure, pixel, and creative-ready ad account setup on Facebook & Instagram.",
    recommendedFor: ["product", "program"],
  },
  {
    id: "google",
    name: "Google Ads Setup",
    price: 129,
    desc: "Search and YouTube campaigns configured to send traffic straight into your funnel.",
    recommendedFor: ["product"],
  },
  {
    id: "vsl",
    name: "Video Sales Page (VSL) Upgrade",
    price: 99,
    desc: "Upgrades your landing page to a video-led pitch instead of a written one.",
    recommendedFor: ["coaching", "program"],
  },
];

const AUTOMATIONS = [
  {
    id: "email",
    name: "Email Automation",
    price: 149,
    desc: "Welcome sequence, cart-abandon follow-up, and purchase confirmation.",
    recommendedFor: ["product", "program"],
  },
  {
    id: "whatsapp",
    name: "WhatsApp Automation",
    price: 179,
    desc: "Order confirmations and follow-ups sent straight to WhatsApp.",
    recommendedFor: ["coaching", "program"],
  },
  {
    id: "meeting",
    name: "Meeting Tool Integration",
    price: 59,
    desc: "Calendly or Zoom booking connected for coaching calls and consults.",
    recommendedFor: ["coaching"],
  },
];

const INTEGRATIONS = [
  {
    id: "payments",
    name: "Payment Gateway Integration",
    price: 49,
    desc: "Stripe or GoCardless connected so payments land straight in your account.",
    recommendedFor: ["product", "program", "coaching"],
  },
  {
    id: "cms",
    name: "CMS Integration",
    price: 89,
    desc: "Connects your funnel to a CMS so you can edit content without a developer.",
    recommendedFor: ["product"],
  },
  {
    id: "crm",
    name: "CRM Integration",
    price: 99,
    desc: "Every lead and buyer synced automatically into your CRM.",
    recommendedFor: ["coaching"],
  },
];

const ALL_ADDONS = [...ADS, ...AUTOMATIONS, ...INTEGRATIONS];

const PLANS = [
  { id: "none", name: "No support plan", price: 0, period: "", desc: "You're comfortable making your own edits after launch." },
  { id: "care", name: "Care Plan", price: 39, period: "/mo", desc: "Hosting, uptime monitoring, and small text/image edits.", recommended: true },
  { id: "growth", name: "Growth Plan", price: 99, period: "/mo", desc: "Everything in Care, plus a monthly A/B test on your top page." },
];

const AUDIENCE_LABEL = {
  program: "Fitness Program",
  product: "Fitness Product",
  coaching: "Coaching & Counselling",
};

const AUDIENCE_CARDS = [
  {
    id: "program",
    title: "Fitness Program",
    desc: "A structured plan sold as a one-off — e.g. a 12-week transformation programme.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1" />
      </svg>
    ),
  },
  {
    id: "product",
    title: "Fitness Product",
    desc: "A physical or digital product — supplements, guides, apps, meal plans.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 8l-9-5-9 5 9 5 9-5z" />
        <path d="M3 8v8l9 5 9-5V8" />
        <path d="M12 13v8" />
      </svg>
    ),
  },
  {
    id: "coaching",
    title: "Coaching & Counselling",
    desc: "1:1 or small-group coaching sold on a call or via application.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
      </svg>
    ),
  },
];

const currency = (n) => "£" + n.toLocaleString("en-GB");

function FeatureCard({ item, active, recommended, onToggle }) {
  return (
    <div className={`feature-card ${active ? "active" : ""}`} onClick={onToggle}>
      <div className="feature-check">{active ? "✓" : ""}</div>
      <div className="feature-body">
        <div className="feature-row">
          <span className="feature-name">{item.name}</span>
          <span className="feature-price">+{currency(item.price)}</span>
        </div>
        <div className="feature-desc">{item.desc}</div>
        {recommended && <span className="feature-badge">★ Recommended for you</span>}
      </div>
    </div>
  );
}

export default function PricingPage() {
  const [audience, setAudience] = useState(null);
  const [addons, setAddons] = useState(new Set());
  const [plan, setPlan] = useState("none");
  const [showBundleRow, setShowBundleRow] = useState(false);

  const toggleAddon = (id) => {
    setAddons((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const selectAudience = (id) => {
    setAudience(id);
    setShowBundleRow(true);
  };

  const applyBundle = () => {
    if (!audience) return;
    setAddons((prev) => {
      const next = new Set(prev);
      ALL_ADDONS.forEach((item) => {
        if (item.recommendedFor.includes(audience)) next.add(item.id);
      });
      return next;
    });
  };

  const oneTime = useMemo(() => {
    let total = CORE_PRICE;
    ALL_ADDONS.forEach((item) => {
      if (addons.has(item.id)) total += item.price;
    });
    return total;
  }, [addons]);

  const activePlan = PLANS.find((p) => p.id === plan);
  const audienceDone = audience !== null;
  const addonsDone = addons.size > 0;
  const supportDone = plan !== "none";

  return (
    <>


      <div className="wrap">
        {/* <div className="top">
          <div className="brand">
            <span className="brand-mark">F</span>Falcoon
          </div>
          <div className="top-note">Fitness funnel builder · GBP</div>
        </div> */}
        <div className="hero">
          <div className="hero-eyebrow">★ Built for UK fitness brands</div>
          <h1>Every funnel starts the same way. What you add on top is up to you.</h1>
          <p>
            The core funnel is included in every build. Pick your audience, add only what you need, and see your
            fixed price update as you go.
          </p>
        </div>
        <div className="steps-track">
          <div className="step-pill done">
            <span className="num">✓</span>Core funnel
          </div>
          <div className={`step-pill ${audienceDone ? "done" : ""}`}>
            <span className="num">{audienceDone ? "✓" : "1"}</span>Who you sell to
          </div>
          <div className={`step-pill ${addonsDone ? "done" : ""}`}>
            <span className="num">{addonsDone ? "✓" : "2"}</span>Add-ons
          </div>
          <div className={`step-pill ${supportDone ? "done" : ""}`}>
            <span className="num">{supportDone ? "✓" : "3"}</span>Support
          </div>
        </div>
      </div>

      <div className="wrap">
        <div className="layout">
          <div>
            {/* CORE FUNNEL */}
            <div className="block">
              <div className="block-head">
                <div className="block-num">✓</div>
                <div>
                  <div className="block-index">Included in every build</div>
                  <h2 className="block-title">The core funnel</h2>
                  <p className="block-sub">This is the base flow every client gets — nothing to configure, it's built for you.</p>
                </div>
              </div>
              <div className="core-card">
                <div className="core-header">
                  <div className="core-title">Core Funnel Build</div>
                  <div className="core-price">
                    £249 <span>one-time</span>
                  </div>
                </div>
                <div className="core-steps">
                  <div className="core-step">
                    <div className="core-step-num">1</div>
                    <div>
                      <div className="core-step-name">Landing Page</div>
                      <div className="core-step-desc">Your offer, presented and ready to convert cold or warm traffic.</div>
                    </div>
                  </div>
                  <div className="core-step">
                    <div className="core-step-num">2</div>
                    <div>
                      <div className="core-step-name">Checkout Page</div>
                      <div className="core-step-desc">A distraction-free order form with your pricing built in.</div>
                    </div>
                  </div>
                  <div className="core-step">
                    <div className="core-step-num">3</div>
                    <div>
                      <div className="core-step-name">Thank You Page</div>
                      <div className="core-step-desc">Confirms the order and tells the buyer exactly what happens next.</div>
                    </div>
                  </div>
                </div>
                <div className="core-note">🔒 Always included — every add-on below plugs straight into this base flow.</div>
              </div>
            </div>

            {/* AUDIENCE */}
            <div className="block">
              <div className="block-head">
                <div className="block-num">1</div>
                <div>
                  <div className="block-index">Step 1 · Takes 5 seconds</div>
                  <h2 className="block-title">What are you selling?</h2>
                  <p className="block-sub">This tells us which add-ons to recommend below — it never changes your price.</p>
                </div>
              </div>
              <div className="audience-grid">
                {AUDIENCE_CARDS.map((card) => (
                  <div
                    key={card.id}
                    className={`audience-card ${audience === card.id ? "active" : ""}`}
                    onClick={() => selectAudience(card.id)}
                  >
                    <div className="tick">{audience === card.id ? "✓" : ""}</div>
                    <div className="audience-icon">{card.icon}</div>
                    <h4>{card.title}</h4>
                    <p>{card.desc}</p>
                  </div>
                ))}
              </div>
              <div className={`bundle-row ${showBundleRow ? "show" : ""}`}>
                <button className="bundle-btn" onClick={applyBundle}>
                  ✨ Add the recommended add-ons for me
                </button>
                <span className="bundle-hint">You can still adjust anything below.</span>
              </div>
            </div>

            {/* ADD-ONS */}
            <div className="block">
              <div className="block-head">
                <div className="block-num">2</div>
                <div>
                  <div className="block-index">Step 2 · All optional</div>
                  <h2 className="block-title">Ads, automation &amp; integrations</h2>
                  <p className="block-sub">Add only what your funnel actually needs — gold badges show what fits your audience.</p>
                </div>
              </div>

              <div className="group-block">
                <div className="group-label-row">
                  <div className="group-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 11l18-5v12L3 14v-3z" />
                      <path d="M11.6 16.8a3 3 0 11-5.8-1.6" />
                    </svg>
                  </div>
                  <div className="group-label">Ads &amp; traffic</div>
                </div>
                <div className="feature-grid">
                  {ADS.map((item) => (
                    <FeatureCard
                      key={item.id}
                      item={item}
                      active={addons.has(item.id)}
                      recommended={!!audience && item.recommendedFor.includes(audience)}
                      onToggle={() => toggleAddon(item.id)}
                    />
                  ))}
                </div>
              </div>

              <div className="group-block">
                <div className="group-label-row">
                  <div className="group-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                    </svg>
                  </div>
                  <div className="group-label">Automation</div>
                </div>
                <div className="feature-grid">
                  {AUTOMATIONS.map((item) => (
                    <FeatureCard
                      key={item.id}
                      item={item}
                      active={addons.has(item.id)}
                      recommended={!!audience && item.recommendedFor.includes(audience)}
                      onToggle={() => toggleAddon(item.id)}
                    />
                  ))}
                </div>
              </div>

              <div className="group-block">
                <div className="group-label-row">
                  <div className="group-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 9h6V4a1 1 0 00-1-1H5a1 1 0 00-1 1v5z" />
                      <path d="M14 9h6a1 1 0 011 1v4a1 1 0 01-1 1h-6" />
                      <path d="M9 9v6a3 3 0 003 3v3" />
                    </svg>
                  </div>
                  <div className="group-label">Integrations</div>
                </div>
                <div className="feature-grid">
                  {INTEGRATIONS.map((item) => (
                    <FeatureCard
                      key={item.id}
                      item={item}
                      active={addons.has(item.id)}
                      recommended={!!audience && item.recommendedFor.includes(audience)}
                      onToggle={() => toggleAddon(item.id)}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* SUPPORT PLAN */}
            <div className="block">
              <div className="block-head">
                <div className="block-num">3</div>
                <div>
                  <div className="block-index">Step 3 · Optional</div>
                  <h2 className="block-title">Ongoing support</h2>
                  <p className="block-sub">A monthly plan for hosting, edits, and troubleshooting after launch.</p>
                </div>
              </div>
              <div className="plan-grid">
                {PLANS.map((p) => (
                  <div key={p.id} className={`plan-card ${plan === p.id ? "active" : ""}`} onClick={() => setPlan(p.id)}>
                    {p.recommended && <span className="plan-recommended">Popular</span>}
                    <div className="plan-name">{p.name}</div>
                    <div className="plan-price">
                      {p.price === 0 ? "Included" : currency(p.price)} {p.period && <span>{p.period}</span>}
                    </div>
                    <div className="plan-desc">{p.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* LIVE SUMMARY */}
          <div className="summary">
            <h3>Your funnel</h3>
            <div className="summary-tag">{audience ? `Funnel for: ${AUDIENCE_LABEL[audience]}` : "No audience selected yet"}</div>

            <div className="summary-list">
              <div className="summary-row core">
                <span>Core Funnel Build</span>
                <span>{currency(CORE_PRICE)}</span>
              </div>
              {ALL_ADDONS.filter((item) => addons.has(item.id)).map((item) => (
                <div className="summary-row" key={item.id}>
                  <span>{item.name}</span>
                  <span>+{currency(item.price)}</span>
                </div>
              ))}
            </div>

            <div className="summary-divider"></div>

            <div className="summary-total-row">
              <span className="summary-total-label">One-time build</span>
              <span className="summary-total-value">{currency(oneTime)}</span>
            </div>
            <div className="summary-monthly">
              {activePlan && activePlan.price > 0 ? `+ ${currency(activePlan.price)}${activePlan.period} ongoing support` : ""}
            </div>

            <button className="summary-btn" onClick={() => alert("This is a demo checkout flow — wire this button up to your real payment step.")}>
              Get started — {currency(oneTime)}
            </button>
            <div className="summary-trust">🔒 Fixed pricing · No hidden fees · Built for UK fitness brands</div>
          </div>
        </div>
      </div>

      <div className="mobile-bar">
        <div className="mobile-bar-total">
          <small>Your total</small>
          {currency(oneTime)}
        </div>
        <button className="mobile-bar-btn" onClick={() => alert("This is a demo checkout flow — wire this button up to your real payment step.")}>
          Get started
        </button>
      </div>

      <style jsx global>{`
        :root {
          --ink: #241f1c;
          --ink-soft: #665c53;
          --ivory: #f7f1e4;
          --ivory-deep: #ece2cc;
          --cream-card: #fffdf7;
          --gold: #c39a56;
          --gold-dark: #96702f;
          --gold-pale: #f1e4c8;
          --line: rgba(36, 31, 28, 0.13);
          --line-soft: rgba(36, 31, 28, 0.07);
          --shadow: 0 10px 28px rgba(36, 31, 28, 0.08), 0 2px 8px rgba(36, 31, 28, 0.04);
          --shadow-lift: 0 22px 48px rgba(36, 31, 28, 0.16);
          --radius: 16px;
          --radius-pill: 999px;
          --serif: "Fraunces", Georgia, serif;
          --sans: "Karla", Arial, sans-serif;
        }
        * {
          box-sizing: border-box;
        }
        html {
          scroll-behavior: smooth;
        }

        .wrap {
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 24px 0;
          border-bottom: 1px solid var(--line);
        }
        .brand {
          font-family: var(--serif);
          font-weight: 700;
          font-size: 21px;
          letter-spacing: -0.01em;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .brand-mark {
          width: 32px;
          height: 32px;
          border-radius: 9px;
          background: var(--ink);
          color: var(--ivory);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 15px;
          font-family: var(--serif);
          font-weight: 700;
        }
        .top-note {
          font-size: 12.5px;
          color: var(--ink-soft);
          letter-spacing: 0.02em;
        }

        .hero {
          padding: 60px 0 6px;
          text-align: center;
        }
        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--gold-dark);
          background: var(--gold-pale);
          padding: 6px 14px;
          border-radius: var(--radius-pill);
          margin-bottom: 18px;
        }
        .hero h1 {
          font-family: var(--serif);
          font-size: clamp(32px, 4.4vw, 50px);
          font-weight: 600;
          letter-spacing: -0.02em;
          margin: 0 0 14px;
          max-width: 760px;
          margin-inline: auto;
          line-height: 1.12;
        }
        .hero p {
          color: var(--ink-soft);
          font-size: 16.5px;
          max-width: 540px;
          margin: 0 auto;
        }

        .steps-track {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin: 34px auto 0;
          flex-wrap: wrap;
        }
        .step-pill {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12.5px;
          font-weight: 600;
          color: var(--ink-soft);
          background: var(--cream-card);
          border: 1px solid var(--line);
          padding: 7px 14px 7px 8px;
          border-radius: var(--radius-pill);
          transition: all 0.3s ease;
        }
        .step-pill .num {
          width: 19px;
          height: 19px;
          border-radius: 50%;
          background: var(--ivory-deep);
          color: var(--ink-soft);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10.5px;
          font-weight: 800;
          transition: all 0.3s ease;
        }
        .step-pill.done {
          color: var(--ink);
          border-color: var(--gold);
        }
        .step-pill.done .num {
          background: var(--gold);
          color: #fff;
        }

        .layout {
          display: grid;
          grid-template-columns: 1fr 372px;
          gap: 38px;
          padding: 52px 0 60px;
          align-items: start;
        }
        @media (max-width: 960px) {
          .layout {
            grid-template-columns: 1fr;
            padding-bottom: 20px;
          }
        }

        .block {
          margin-bottom: 48px;
        }

        .block-head {
          margin-bottom: 18px;
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }
        .block-num {
          flex-shrink: 0;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          border: 1.5px solid var(--gold);
          color: var(--gold-dark);
          font-family: var(--serif);
          font-weight: 700;
          font-size: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 1px;
        }
        .block-index {
          font-size: 11.5px;
          color: var(--gold-dark);
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-bottom: 5px;
        }
        .block-title {
          font-family: var(--serif);
          font-size: 22px;
          font-weight: 600;
          letter-spacing: -0.01em;
          margin: 0 0 4px;
        }
        .block-sub {
          color: var(--ink-soft);
          font-size: 14px;
          margin: 0;
          max-width: 480px;
        }

        .core-card {
          border: 1.5px solid var(--ink);
          border-radius: var(--radius);
          background: var(--cream-card);
          padding: 24px;
          box-shadow: var(--shadow);
          position: relative;
          overflow: hidden;
        }
        .core-card::before {
          content: "";
          position: absolute;
          top: -40px;
          right: -40px;
          width: 140px;
          height: 140px;
          background: radial-gradient(circle, var(--gold-pale), transparent 70%);
        }
        .core-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 18px;
          position: relative;
        }
        .core-title {
          font-weight: 800;
          font-size: 15.5px;
        }
        .core-price {
          font-family: var(--serif);
          font-weight: 700;
          font-size: 19px;
        }
        .core-price span {
          font-family: var(--sans);
          font-size: 12px;
          font-weight: 500;
          color: var(--ink-soft);
        }
        .core-steps {
          display: flex;
          flex-direction: column;
          gap: 0;
          position: relative;
        }
        .core-step {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 13px 0;
          border-bottom: 1px solid var(--line-soft);
        }
        .core-step:last-child {
          border-bottom: none;
        }
        .core-step-num {
          flex-shrink: 0;
          width: 27px;
          height: 27px;
          border-radius: 50%;
          background: var(--ink);
          color: var(--ivory);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 700;
          margin-top: 1px;
          font-family: var(--serif);
        }
        .core-step-name {
          font-size: 14px;
          font-weight: 700;
          margin-bottom: 2px;
        }
        .core-step-desc {
          font-size: 12.5px;
          color: var(--ink-soft);
        }
        .core-note {
          margin-top: 16px;
          font-size: 12.5px;
          color: var(--ink-soft);
          background: var(--ivory-deep);
          padding: 11px 14px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .audience-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }
        @media (max-width: 700px) {
          .audience-grid {
            grid-template-columns: 1fr;
          }
        }
        .audience-card {
          position: relative;
          border: 1px solid var(--line);
          border-radius: var(--radius);
          background: var(--cream-card);
          padding: 20px;
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .audience-card:hover {
          box-shadow: var(--shadow);
          transform: translateY(-3px);
          border-color: var(--gold);
        }
        .audience-card.active {
          border-color: var(--ink);
          box-shadow: var(--shadow-lift);
          background: linear-gradient(160deg, #fff, var(--gold-pale) 220%);
        }
        .audience-icon {
          width: 34px;
          height: 34px;
          border-radius: 9px;
          background: var(--ivory-deep);
          color: var(--ink);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 12px;
          transition: all 0.25s ease;
        }
        .audience-card.active .audience-icon {
          background: var(--ink);
          color: var(--ivory);
        }
        .audience-card h4 {
          margin: 0 0 6px;
          font-size: 15px;
          font-weight: 700;
        }
        .audience-card p {
          margin: 0;
          font-size: 12.5px;
          color: var(--ink-soft);
        }
        .audience-card .tick {
          position: absolute;
          top: 16px;
          right: 16px;
          width: 19px;
          height: 19px;
          border-radius: 50%;
          border: 1.5px solid var(--line);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          color: #fff;
          transition: all 0.2s ease;
        }
        .audience-card.active .tick {
          background: var(--ink);
          border-color: var(--ink);
        }

        .bundle-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 16px;
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          transition: all 0.35s ease;
        }
        .bundle-row.show {
          max-height: 60px;
          opacity: 1;
          margin-top: 16px;
        }
        .bundle-btn {
          font-family: var(--sans);
          font-size: 13px;
          font-weight: 700;
          color: var(--ink);
          background: var(--gold-pale);
          border: 1px solid var(--gold);
          padding: 10px 16px;
          border-radius: var(--radius-pill);
          cursor: pointer;
          transition: all 0.2s ease;
          white-space: nowrap;
        }
        .bundle-btn:hover {
          background: var(--gold);
          color: #fff;
        }
        .bundle-hint {
          font-size: 12.5px;
          color: var(--ink-soft);
        }

        .group-block {
          margin-bottom: 26px;
        }
        .group-block:last-child {
          margin-bottom: 0;
        }
        .group-label-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
        }
        .group-icon {
          width: 26px;
          height: 26px;
          border-radius: 7px;
          background: var(--ivory-deep);
          color: var(--gold-dark);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .group-label {
          font-size: 12.5px;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: var(--ink-soft);
        }

        .feature-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }
        @media (max-width: 700px) {
          .feature-grid {
            grid-template-columns: 1fr;
          }
        }
        .feature-card {
          position: relative;
          display: flex;
          align-items: flex-start;
          gap: 14px;
          border: 1px solid var(--line);
          border-radius: var(--radius);
          background: var(--cream-card);
          padding: 16px 18px;
          cursor: pointer;
          transition: all 0.22s ease;
        }
        .feature-card:hover {
          box-shadow: var(--shadow);
          border-color: var(--gold);
        }
        .feature-card.active {
          border-color: var(--ink);
          box-shadow: var(--shadow);
          background: linear-gradient(160deg, #fff, var(--gold-pale) 260%);
        }
        .feature-check {
          flex-shrink: 0;
          width: 21px;
          height: 21px;
          border-radius: 7px;
          border: 1.5px solid var(--line);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 2px;
          transition: all 0.2s ease;
        }
        .feature-card.active .feature-check {
          background: var(--ink);
          border-color: var(--ink);
          color: #fff;
        }
        .feature-body {
          flex: 1;
        }
        .feature-row {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          gap: 10px;
        }
        .feature-name {
          font-size: 14.5px;
          font-weight: 700;
        }
        .feature-price {
          font-size: 13px;
          font-weight: 700;
          color: var(--gold-dark);
          white-space: nowrap;
        }
        .feature-desc {
          font-size: 12.5px;
          color: var(--ink-soft);
          margin-top: 4px;
          line-height: 1.5;
        }
        .feature-badge {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          background: var(--ink);
          color: var(--ivory);
          padding: 3px 9px;
          border-radius: var(--radius-pill);
          margin-top: 7px;
        }

        .plan-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }
        @media (max-width: 700px) {
          .plan-grid {
            grid-template-columns: 1fr;
          }
        }
        .plan-card {
          border: 1px solid var(--line);
          border-radius: var(--radius);
          background: var(--cream-card);
          padding: 18px;
          cursor: pointer;
          transition: all 0.22s ease;
          position: relative;
        }
        .plan-card:hover {
          box-shadow: var(--shadow);
          border-color: var(--gold);
        }
        .plan-card.active {
          border-color: var(--ink);
          box-shadow: var(--shadow);
          background: linear-gradient(160deg, #fff, var(--gold-pale) 260%);
        }
        .plan-name {
          font-weight: 700;
          font-size: 14.5px;
          margin-bottom: 5px;
        }
        .plan-price {
          font-family: var(--serif);
          font-weight: 700;
          font-size: 18px;
          margin-bottom: 7px;
        }
        .plan-price span {
          font-family: var(--sans);
          font-size: 12px;
          font-weight: 500;
          color: var(--ink-soft);
        }
        .plan-desc {
          font-size: 12.5px;
          color: var(--ink-soft);
          line-height: 1.5;
        }
        .plan-recommended {
          position: absolute;
          top: -10px;
          right: 14px;
          font-size: 9.5px;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          background: var(--gold);
          color: #fff;
          padding: 3px 9px;
          border-radius: var(--radius-pill);
        }

        .summary {
          position: sticky;
          top: 24px;
          background: var(--cream-card);
          border: 1px solid var(--line);
          border-radius: var(--radius);
          padding: 28px;
          box-shadow: var(--shadow-lift);
        }
        .summary h3 {
          margin: 0 0 4px;
          font-family: var(--serif);
          font-size: 19px;
          font-weight: 600;
        }
        .summary .summary-tag {
          font-size: 12.5px;
          color: var(--ink-soft);
          margin-bottom: 20px;
        }
        .summary-list {
          display: flex;
          flex-direction: column;
          gap: 0px;
          margin-bottom: 8px;
          max-height: 340px;
          overflow-y: auto;
        }
        .summary-row {
          display: flex;
          justify-content: space-between;
          font-size: 13.5px;
          gap: 10px;
        }
        .summary-row span:first-child {
          color: var(--ink-soft);
        }
        .summary-row.core span:first-child {
          color: var(--ink);
          font-weight: 700;
        }
        .summary-divider {
          height: 1px;
          background: var(--line);
          margin: 16px 0;
        }
        .summary-total-row {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 4px;
        }
        .summary-total-label {
          font-size: 13px;
          color: var(--ink-soft);
        }
        .summary-total-value {
          font-family: var(--serif);
          font-size: 30px;
          font-weight: 700;
          letter-spacing: -0.01em;
        }
        .summary-monthly {
          font-size: 12.5px;
          color: var(--gold-dark);
          font-weight: 600;
          margin-bottom: 22px;
          min-height: 16px;
        }
        .summary-btn {
          width: 100%;
          padding: 16px;
          border: none;
          border-radius: var(--radius-pill);
          background: var(--ink);
          color: var(--ivory);
          font-weight: 700;
          font-size: 14.5px;
          cursor: pointer;
          transition: all 0.25s ease;
          font-family: var(--sans);
        }
        .summary-btn:hover {
          background: var(--gold-dark);
          transform: translateY(-2px);
          box-shadow: 0 12px 24px rgba(150, 112, 47, 0.3);
        }
        .summary-trust {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          text-align: center;
          font-size: 11.5px;
          color: var(--ink-soft);
          margin-top: 14px;
        }
        @media (max-width: 960px) {
          .summary {
            position: static;
            margin-bottom: 90px;
          }
        }

        .mobile-bar {
          display: none;
          position: fixed;
          left: 0;
          right: 0;
          bottom: 0;
          background: var(--cream-card);
          border-top: 1px solid var(--line);
          padding: 14px 20px;
          box-shadow: 0 -8px 24px rgba(36, 31, 28, 0.12);
          z-index: 50;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
        }
        .mobile-bar-total {
          font-family: var(--serif);
          font-size: 19px;
          font-weight: 700;
        }
        .mobile-bar-total small {
          font-family: var(--sans);
          font-size: 11px;
          color: var(--ink-soft);
          font-weight: 500;
          display: block;
        }
        .mobile-bar-btn {
          padding: 12px 20px;
          border: none;
          border-radius: var(--radius-pill);
          background: var(--ink);
          color: var(--ivory);
          font-weight: 700;
          font-size: 13.5px;
          cursor: pointer;
          font-family: var(--sans);
        }
        @media (max-width: 960px) {
          .mobile-bar {
            display: flex;
          }
        }
      `}</style>
    </>
  );
}
