"use client";

import { useEffect, useMemo, useRef, useState } from "react";

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

const ADDON_GROUPS = [
  { label: "Ads & traffic", items: ADS },
  { label: "Automation", items: AUTOMATIONS },
  { label: "Integrations", items: INTEGRATIONS },
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
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
      </svg>
    ),
  },
];

const STEPS = [
  { id: "audience", label: "Who you sell to" },
  { id: "addons", label: "Add-ons" },
  { id: "support", label: "Support" },
];

const currency = (n) => "£" + n.toLocaleString("en-GB");

function AddonRow({ item, active, recommended, onToggle }) {
  return (
    <div
      className={`addon-row ${active ? "active" : ""}`}
      onClick={onToggle}
      role="switch"
      aria-checked={active}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onToggle();
        }
      }}
    >
      <div className="addon-main">
        <div className="addon-top">
          <span className="addon-name">{item.name}</span>
          {recommended && <span className="addon-tag">Recommended</span>}
        </div>
        <div className="addon-desc">{item.desc}</div>
      </div>
      <div className="addon-right">
        <span className="addon-price">+{currency(item.price)}</span>
        <span className={`switch ${active ? "on" : ""}`} aria-hidden="true" />
      </div>
    </div>
  );
}

export default function PricingPage() {
  const [audience, setAudience] = useState(null);
  const [addons, setAddons] = useState(new Set());
  const [plan, setPlan] = useState("none");
  const [step, setStep] = useState(0);
  const [coreOpen, setCoreOpen] = useState(false);
  const [showMiniBar, setShowMiniBar] = useState(false);
  const [justAdded, setJustAdded] = useState(false);
  const [checkoutState, setCheckoutState] = useState("idle");
  const heroRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    if (!heroRef.current) return;
    const el = heroRef.current;
    const obs = new IntersectionObserver(
      ([entry]) => setShowMiniBar(!entry.isIntersecting),
      { rootMargin: "-1px 0px 0px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (panelRef.current) {
      panelRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [step]);

  const toggleAddon = (id) => {
    setAddons((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const selectAudience = (id) => {
    setAudience(id);
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
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1800);
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

  const goStep = (i) => setStep(Math.max(0, Math.min(STEPS.length - 1, i)));

  const runCheckout = () => {
    setCheckoutState("loading");
    setTimeout(() => setCheckoutState("done"), 900);
  };

  return (
    <>
      {/* STICKY MINI BAR — always know your price */}
      <div className={`mini-bar ${showMiniBar ? "show" : ""}`}>
        <div className="mini-bar-inner">
          <span className="mini-bar-brand">Falcoon</span>
          <div className="mini-bar-right">
            <span className="mini-bar-total">{currency(oneTime)}</span>
            <button className="mini-bar-btn" onClick={runCheckout}>
              Get started
            </button>
          </div>
        </div>
      </div>

      <div className="wrap">
        <div className="hero" ref={heroRef}>
          <div className="hero-eyebrow">Built for UK fitness brands</div>
          <h1>Every funnel starts the same way. What you add on top is up to you.</h1>
          <p>
            The core funnel is included in every build. Pick your audience, add only what you need, and see your
            fixed price update as you go.
          </p>
        </div>

        {/* CORE FUNNEL — collapsed banner, not a full step */}
        <div className="core-banner">
          <div className="core-banner-left">
            <span className="core-check">✓</span>
            <div>
              <div className="core-banner-title">Core Funnel Build — included, always</div>
              <div className="core-banner-sub">Landing page, checkout page, and thank-you page.</div>
            </div>
          </div>
          <div className="core-banner-right">
            <span className="core-banner-price">{currency(CORE_PRICE)}</span>
            <button
              className="core-banner-toggle"
              onClick={() => setCoreOpen((v) => !v)}
              aria-expanded={coreOpen}
            >
              {coreOpen ? "Hide details" : "See details"}
            </button>
          </div>
        </div>
        <div className={`core-details ${coreOpen ? "open" : ""}`}>
          <div className="core-detail-item">
            <span className="core-detail-num">1</span>
            <div>
              <strong>Landing Page</strong>
              <p>Your offer, presented and ready to convert cold or warm traffic.</p>
            </div>
          </div>
          <div className="core-detail-item">
            <span className="core-detail-num">2</span>
            <div>
              <strong>Checkout Page</strong>
              <p>A distraction-free order form with your pricing built in.</p>
            </div>
          </div>
          <div className="core-detail-item">
            <span className="core-detail-num">3</span>
            <div>
              <strong>Thank You Page</strong>
              <p>Confirms the order and tells the buyer exactly what happens next.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="wrap">
        <div className="layout">
          <div>
            {/* STEP NAV */}
            <div className="step-track" role="tablist" aria-label="Configuration steps">
              {STEPS.map((s, i) => {
                const done = i === 0 ? audienceDone : i === 1 ? addonsDone : supportDone;
                return (
                  <button
                    key={s.id}
                    role="tab"
                    aria-selected={step === i}
                    className={`step-pill ${step === i ? "current" : ""} ${done ? "done" : ""}`}
                    onClick={() => goStep(i)}
                  >
                    <span className="num">{done ? "✓" : i + 1}</span>
                    {s.label}
                  </button>
                );
              })}
            </div>

            <div className="panel" ref={panelRef}>
              {/* STEP 1 — AUDIENCE */}
              {step === 0 && (
                <div className="step-body">
                  <h2 className="step-title">What are you selling?</h2>
                  <p className="step-sub">This tells us which add-ons to recommend — it never changes your price.</p>

                  <div className="audience-grid" role="radiogroup" aria-label="Audience">
                    {AUDIENCE_CARDS.map((card) => (
                      <div
                        key={card.id}
                        role="radio"
                        aria-checked={audience === card.id}
                        tabIndex={0}
                        className={`audience-card ${audience === card.id ? "active" : ""}`}
                        onClick={() => selectAudience(card.id)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            selectAudience(card.id);
                          }
                        }}
                      >
                        <div className="tick">{audience === card.id ? "✓" : ""}</div>
                        <div className="audience-icon">{card.icon}</div>
                        <h4>{card.title}</h4>
                        <p>{card.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="step-actions">
                    <span className="step-skip-hint">
                      {audienceDone ? "Nice — recommendations are ready below." : "You can also skip this."}
                    </span>
                    <button className="btn-primary" onClick={() => goStep(1)}>
                      {audienceDone ? "Continue" : "Skip for now"}
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2 — ADDONS */}
              {step === 1 && (
                <div className="step-body">
                  <h2 className="step-title">Ads, automation &amp; integrations</h2>
                  <p className="step-sub">All optional. Toggle on anything your funnel needs.</p>

                  {audience && (
                    <button className={`bundle-btn ${justAdded ? "added" : ""}`} onClick={applyBundle}>
                      {justAdded ? "✓ Added your recommended add-ons" : `Add what's recommended for ${AUDIENCE_LABEL[audience]}`}
                    </button>
                  )}

                  {ADDON_GROUPS.map((group) => (
                    <div className="addon-group" key={group.label}>
                      <div className="addon-group-label">{group.label}</div>
                      <div className="addon-list">
                        {group.items.map((item) => (
                          <AddonRow
                            key={item.id}
                            item={item}
                            active={addons.has(item.id)}
                            recommended={!!audience && item.recommendedFor.includes(audience)}
                            onToggle={() => toggleAddon(item.id)}
                          />
                        ))}
                      </div>
                    </div>
                  ))}

                  <div className="step-actions">
                    <button className="btn-secondary" onClick={() => goStep(0)}>
                      Back
                    </button>
                    <button className="btn-primary" onClick={() => goStep(2)}>
                      Continue
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3 — SUPPORT */}
              {step === 2 && (
                <div className="step-body">
                  <h2 className="step-title">Ongoing support</h2>
                  <p className="step-sub">A monthly plan for hosting, edits, and troubleshooting after launch.</p>

                  <div className="plan-grid" role="radiogroup" aria-label="Support plan">
                    {PLANS.map((p) => (
                      <div
                        key={p.id}
                        role="radio"
                        aria-checked={plan === p.id}
                        tabIndex={0}
                        className={`plan-card ${plan === p.id ? "active" : ""}`}
                        onClick={() => setPlan(p.id)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            setPlan(p.id);
                          }
                        }}
                      >
                        {p.recommended && <span className="plan-recommended">Popular</span>}
                        <div className="plan-name">{p.name}</div>
                        <div className="plan-price">
                          {p.price === 0 ? "Included" : currency(p.price)} {p.period && <span>{p.period}</span>}
                        </div>
                        <div className="plan-desc">{p.desc}</div>
                      </div>
                    ))}
                  </div>

                  <div className="step-actions">
                    <button className="btn-secondary" onClick={() => goStep(1)}>
                      Back
                    </button>
                    <button className="btn-primary" onClick={runCheckout}>
                      {checkoutState === "loading" ? "Preparing checkout…" : `Get started — ${currency(oneTime)}`}
                    </button>
                  </div>

                  {checkoutState === "done" && (
                    <div className="checkout-note">
                      This is a demo — wire this button to your real payment step whenever you're ready.
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* LIVE SUMMARY — desktop sidebar */}
          <div className="summary">
            <h3>Your funnel</h3>
            <div className="summary-tag">{audience ? `For: ${AUDIENCE_LABEL[audience]}` : "No audience selected yet"}</div>

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

            <div className="summary-divider" />

            <div className="summary-total-row">
              <span className="summary-total-label">One-time build</span>
              <span className="summary-total-value">{currency(oneTime)}</span>
            </div>
            <div className="summary-monthly">
              {activePlan && activePlan.price > 0 ? `+ ${currency(activePlan.price)}${activePlan.period} ongoing support` : ""}
            </div>

            <button className="summary-btn" onClick={runCheckout}>
              {checkoutState === "loading" ? "Preparing checkout…" : `Get started — ${currency(oneTime)}`}
            </button>
            <div className="summary-trust">Fixed pricing · No hidden fees · Built for UK fitness brands</div>
          </div>
        </div>
      </div>

      {/* MOBILE STICKY CHECKOUT BAR */}
      <div className="mobile-bar">
        <div className="mobile-bar-total">
          <small>Your total</small>
          {currency(oneTime)}
        </div>
        <button className="mobile-bar-btn" onClick={runCheckout}>
          {checkoutState === "loading" ? "…" : "Get started"}
        </button>
      </div>

      <style jsx global>{`
        :root {
          --ink: #241f1c;
          --ink-soft: #5b5148;
          --ivory: #f7f1e4;
          --ivory-deep: #ece2cc;
          --cream-card: #fffdf7;
          --gold: #c39a56;
          --gold-dark: #96702f;
          --gold-pale: #f1e4c8;
          --line: rgba(36, 31, 28, 0.14);
          --line-soft: rgba(36, 31, 28, 0.08);
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
        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }
          * {
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
          }
        }

        button {
          font-family: var(--sans);
        }
        button:focus-visible,
        [role="radio"]:focus-visible,
        [role="switch"]:focus-visible,
        [role="tab"]:focus-visible {
          outline: 2.5px solid var(--gold-dark);
          outline-offset: 2px;
        }

        .wrap {
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* MINI STICKY BAR */
        .mini-bar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 60;
          background: var(--cream-card);
          border-bottom: 1px solid var(--line);
          transform: translateY(-100%);
          transition: transform 0.25s ease;
        }
        .mini-bar.show {
          transform: translateY(0);
        }
        .mini-bar-inner {
          max-width: 1180px;
          margin: 0 auto;
          padding: 12px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .mini-bar-brand {
          font-family: var(--serif);
          font-weight: 700;
          font-size: 16px;
        }
        .mini-bar-right {
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .mini-bar-total {
          font-family: var(--serif);
          font-weight: 700;
          font-size: 16px;
        }
        .mini-bar-btn {
          border: none;
          background: var(--ink);
          color: var(--ivory);
          font-weight: 700;
          font-size: 13px;
          padding: 9px 16px;
          border-radius: var(--radius-pill);
          cursor: pointer;
        }
        @media (max-width: 700px) {
          .mini-bar-btn {
            display: none;
          }
        }

        .hero {
          padding: 44px 0 8px;
          text-align: center;
        }
        .hero-eyebrow {
          display: inline-flex;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.02em;
          color: var(--gold-dark);
          background: var(--gold-pale);
          padding: 6px 14px;
          border-radius: var(--radius-pill);
          margin-bottom: 16px;
        }
        .hero h1 {
          font-family: var(--serif);
          font-size: clamp(28px, 4.4vw, 46px);
          font-weight: 600;
          letter-spacing: -0.02em;
          margin: 0 0 12px;
          max-width: 720px;
          margin-inline: auto;
          line-height: 1.15;
        }
        .hero p {
          color: var(--ink-soft);
          font-size: 16px;
          max-width: 520px;
          margin: 0 auto;
          line-height: 1.55;
        }

        /* CORE BANNER */
        .core-banner {
          margin-top: 30px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          background: var(--cream-card);
          border: 1px solid var(--line);
          border-radius: var(--radius);
          padding: 16px 18px;
          flex-wrap: wrap;
        }
        .core-banner-left {
          display: flex;
          align-items: center;
          gap: 12px;
          min-width: 0;
        }
        .core-check {
          flex-shrink: 0;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: var(--ink);
          color: var(--ivory);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
        }
        .core-banner-title {
          font-weight: 700;
          font-size: 14.5px;
        }
        .core-banner-sub {
          font-size: 13px;
          color: var(--ink-soft);
          margin-top: 2px;
        }
        .core-banner-right {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
        }
        .core-banner-price {
          font-family: var(--serif);
          font-weight: 700;
          font-size: 16px;
        }
        .core-banner-toggle {
          border: 1px solid var(--line);
          background: transparent;
          color: var(--ink);
          font-size: 12.5px;
          font-weight: 700;
          padding: 8px 14px;
          border-radius: var(--radius-pill);
          cursor: pointer;
          min-height: 36px;
        }
        .core-banner-toggle:hover {
          border-color: var(--gold);
        }

        .core-details {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }
        .core-details.open {
          max-height: 400px;
          margin-top: 12px;
        }
        @media (max-width: 700px) {
          .core-details {
            grid-template-columns: 1fr;
          }
        }
        .core-detail-item {
          display: flex;
          gap: 12px;
          background: var(--ivory-deep);
          border-radius: 12px;
          padding: 14px;
        }
        .core-detail-num {
          flex-shrink: 0;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: var(--ink);
          color: var(--ivory);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 700;
        }
        .core-detail-item strong {
          font-size: 13.5px;
          display: block;
          margin-bottom: 3px;
        }
        .core-detail-item p {
          margin: 0;
          font-size: 12.5px;
          color: var(--ink-soft);
          line-height: 1.5;
        }

        .layout {
          display: grid;
          grid-template-columns: 1fr 360px;
          gap: 32px;
          padding: 32px 0 56px;
          align-items: start;
        }
        @media (max-width: 960px) {
          .layout {
            grid-template-columns: 1fr;
            padding-bottom: 16px;
          }
        }

        /* STEP TRACK */
        .step-track {
          display: flex;
          gap: 8px;
          margin-bottom: 18px;
          flex-wrap: wrap;
        }
        .step-pill {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 700;
          color: var(--ink-soft);
          background: var(--cream-card);
          border: 1px solid var(--line);
          padding: 9px 16px 9px 9px;
          border-radius: var(--radius-pill);
          cursor: pointer;
          min-height: 40px;
        }
        .step-pill .num {
          width: 21px;
          height: 21px;
          border-radius: 50%;
          background: var(--ivory-deep);
          color: var(--ink-soft);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          font-weight: 800;
          flex-shrink: 0;
        }
        .step-pill.done {
          color: var(--ink);
        }
        .step-pill.done .num {
          background: var(--gold);
          color: #fff;
        }
        .step-pill.current {
          border-color: var(--ink);
          background: var(--ink);
          color: var(--ivory);
        }
        .step-pill.current .num {
          background: var(--ivory);
          color: var(--ink);
        }

        .panel {
          background: var(--cream-card);
          border: 1px solid var(--line);
          border-radius: var(--radius);
          padding: 26px;
          scroll-margin-top: 80px;
        }
        @media (max-width: 700px) {
          .panel {
            padding: 20px 16px;
          }
        }

        .step-title {
          font-family: var(--serif);
          font-size: 22px;
          font-weight: 600;
          margin: 0 0 6px;
        }
        .step-sub {
          color: var(--ink-soft);
          font-size: 14px;
          margin: 0 0 22px;
          line-height: 1.5;
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
          border: 1.5px solid var(--line);
          border-radius: var(--radius);
          background: #fff;
          padding: 18px;
          cursor: pointer;
          transition: border-color 0.15s ease, background 0.15s ease;
          min-height: 44px;
        }
        .audience-card:hover {
          border-color: var(--gold);
        }
        .audience-card.active {
          border-color: var(--ink);
          background: linear-gradient(160deg, #fff, var(--gold-pale) 220%);
        }
        .audience-icon {
          width: 36px;
          height: 36px;
          border-radius: 9px;
          background: var(--ivory-deep);
          color: var(--ink);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 12px;
        }
        .audience-card.active .audience-icon {
          background: var(--ink);
          color: var(--ivory);
        }
        .audience-card h4 {
          margin: 0 0 6px;
          font-size: 15.5px;
          font-weight: 700;
        }
        .audience-card p {
          margin: 0;
          font-size: 13px;
          color: var(--ink-soft);
          line-height: 1.5;
        }
        .audience-card .tick {
          position: absolute;
          top: 16px;
          right: 16px;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          border: 1.5px solid var(--line);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          color: #fff;
        }
        .audience-card.active .tick {
          background: var(--ink);
          border-color: var(--ink);
        }

        .step-actions {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          margin-top: 24px;
          flex-wrap: wrap;
        }
        .step-skip-hint {
          font-size: 13px;
          color: var(--ink-soft);
        }
        .btn-primary {
          border: none;
          background: var(--ink);
          color: var(--ivory);
          font-weight: 700;
          font-size: 14px;
          padding: 13px 22px;
          border-radius: var(--radius-pill);
          cursor: pointer;
          min-height: 46px;
        }
        .btn-primary:hover {
          background: var(--gold-dark);
        }
        .btn-secondary {
          border: 1px solid var(--line);
          background: transparent;
          color: var(--ink);
          font-weight: 700;
          font-size: 14px;
          padding: 13px 20px;
          border-radius: var(--radius-pill);
          cursor: pointer;
          min-height: 46px;
        }
        .btn-secondary:hover {
          border-color: var(--gold);
        }

        .bundle-btn {
          display: block;
          width: 100%;
          text-align: left;
          font-size: 13.5px;
          font-weight: 700;
          color: var(--ink);
          background: var(--gold-pale);
          border: 1px solid var(--gold);
          padding: 13px 16px;
          border-radius: 12px;
          cursor: pointer;
          margin-bottom: 22px;
          min-height: 46px;
          transition: background 0.15s ease;
        }
        .bundle-btn:hover {
          background: var(--gold);
          color: #fff;
        }
        .bundle-btn.added {
          background: var(--ink);
          color: var(--ivory);
          border-color: var(--ink);
        }

        .addon-group {
          margin-bottom: 22px;
        }
        .addon-group:last-child {
          margin-bottom: 0;
        }
        .addon-group-label {
          font-size: 12px;
          font-weight: 700;
          color: var(--gold-dark);
          margin-bottom: 8px;
        }
        .addon-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .addon-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          border: 1px solid var(--line);
          border-radius: 12px;
          background: #fff;
          padding: 14px 16px;
          cursor: pointer;
          min-height: 44px;
          transition: border-color 0.15s ease, background 0.15s ease;
        }
        .addon-row:hover {
          border-color: var(--gold);
        }
        .addon-row.active {
          border-color: var(--ink);
          background: var(--gold-pale);
        }
        .addon-main {
          min-width: 0;
        }
        .addon-top {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }
        .addon-name {
          font-size: 14.5px;
          font-weight: 700;
        }
        .addon-tag {
          font-size: 10.5px;
          font-weight: 700;
          background: var(--ink);
          color: var(--ivory);
          padding: 2px 8px;
          border-radius: var(--radius-pill);
        }
        .addon-desc {
          font-size: 12.5px;
          color: var(--ink-soft);
          margin-top: 3px;
          line-height: 1.5;
        }
        .addon-right {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
        }
        .addon-price {
          font-size: 13px;
          font-weight: 700;
          color: var(--gold-dark);
          white-space: nowrap;
        }
        .switch {
          width: 42px;
          height: 25px;
          border-radius: 999px;
          background: var(--ivory-deep);
          position: relative;
          flex-shrink: 0;
          transition: background 0.2s ease;
        }
        .switch::after {
          content: "";
          position: absolute;
          top: 3px;
          left: 3px;
          width: 19px;
          height: 19px;
          border-radius: 50%;
          background: #fff;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
          transition: transform 0.2s ease;
        }
        .switch.on {
          background: var(--ink);
        }
        .switch.on::after {
          transform: translateX(17px);
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
          border: 1.5px solid var(--line);
          border-radius: var(--radius);
          background: #fff;
          padding: 18px;
          cursor: pointer;
          position: relative;
          min-height: 44px;
          transition: border-color 0.15s ease, background 0.15s ease;
        }
        .plan-card:hover {
          border-color: var(--gold);
        }
        .plan-card.active {
          border-color: var(--ink);
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
          background: var(--gold);
          color: #fff;
          padding: 3px 9px;
          border-radius: var(--radius-pill);
        }

        .checkout-note {
          margin-top: 16px;
          font-size: 12.5px;
          color: var(--ink-soft);
          background: var(--ivory-deep);
          padding: 12px 14px;
          border-radius: 10px;
        }

        /* SUMMARY */
        .summary {
          position: sticky;
          top: 24px;
          background: var(--cream-card);
          border: 1px solid var(--line);
          border-radius: var(--radius);
          padding: 26px;
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
          margin-bottom: 18px;
        }
        .summary-list {
          display: flex;
          flex-direction: column;
          gap: 9px;
          margin-bottom: 8px;
          max-height: 300px;
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
          font-size: 28px;
          font-weight: 700;
          letter-spacing: -0.01em;
        }
        .summary-monthly {
          font-size: 12.5px;
          color: var(--gold-dark);
          font-weight: 600;
          margin-bottom: 20px;
          min-height: 16px;
        }
        .summary-btn {
          width: 100%;
          padding: 15px;
          border: none;
          border-radius: var(--radius-pill);
          background: var(--ink);
          color: var(--ivory);
          font-weight: 700;
          font-size: 14.5px;
          cursor: pointer;
          min-height: 48px;
        }
        .summary-btn:hover {
          background: var(--gold-dark);
        }
        .summary-trust {
          text-align: center;
          font-size: 11.5px;
          color: var(--ink-soft);
          margin-top: 14px;
        }
        @media (max-width: 960px) {
          .summary {
            display: none;
          }
        }

        /* MOBILE BOTTOM BAR */
        .mobile-bar {
          display: none;
          position: fixed;
          left: 0;
          right: 0;
          bottom: 0;
          background: var(--cream-card);
          border-top: 1px solid var(--line);
          padding: 12px 18px calc(12px + env(safe-area-inset-bottom));
          box-shadow: 0 -8px 24px rgba(36, 31, 28, 0.12);
          z-index: 55;
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
          padding: 13px 22px;
          border: none;
          border-radius: var(--radius-pill);
          background: var(--ink);
          color: var(--ivory);
          font-weight: 700;
          font-size: 14px;
          cursor: pointer;
          min-height: 46px;
        }
        @media (max-width: 960px) {
          .mobile-bar {
            display: flex;
          }
          .panel {
            margin-bottom: 90px;
          }
        }
      `}</style>
    </>
  );
}