"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const CORE_ONE_TIME = 149;

const CALENDLY_URL =
  "https://calendly.com/thesatishjassal/free-strategy-call-uk";

/* ─────────────────────────────────────────────
   UK CITIES
───────────────────────────────────────────── */

const UK_CITIES = [
  "London",
  "Manchester",
  "Birmingham",
  "Liverpool",
  "Leeds",
  "Bristol",
  "Sheffield",
  "Edinburgh",
  "Glasgow",
  "Cardiff",
  "Belfast",
  "Nottingham",
  "Newcastle upon Tyne",
  "Leicester",
  "Coventry",
  "Bradford",
  "Southampton",
  "Reading",
  "Brighton",
  "Cambridge",
  "Oxford",
  "Bath",
  "York",
  "Exeter",
  "Norwich",
  "Milton Keynes",
  "Aberdeen",
  "Dundee",
  "Swansea",
  "Portsmouth",
  "Plymouth",
  "Derby",
  "Wolverhampton",
  "Sunderland",
  "Northampton",
  "Luton",
  "Swindon",
  "Preston",
  "Bournemouth",
  "Middlesbrough",
  "Huddersfield",
  "Stoke-on-Trent",
  "Watford",
  "Peterborough",
];

/* ─────────────────────────────────────────────
   ADD-ONS
───────────────────────────────────────────── */

const ADS = [
  {
    id: "meta",
    name: "Meta Ads Setup",
    price: 69,
    desc: "Campaign structure, pixel, and device/audience targeting on Facebook & Instagram — plus a reel or post if you supply the footage.",
    note: "+ your ad budget, paid directly to Meta",
    recommendedFor: ["product", "program"],
  },
  {
    id: "google",
    name: "Google Ads Setup",
    price: 79,
    desc: "Keyword, location and audience targeting configured to send the right traffic into your funnel.",
    note: "+ your ad budget, paid directly to Google",
    recommendedFor: ["product"],
  },
  {
    id: "vsl",
    name: "Video Sales Page (VSL) Upgrade",
    price: 69,
    desc: "Upgrades your landing page to a video-led pitch instead of a written one — send us the video and we handle the rest.",
    recommendedFor: ["coaching", "program"],
  },
];

const AUTOMATIONS = [
  {
    id: "email",
    name: "Email Automation",
    price: 99,
    desc: "Custom backend API integration connecting your funnel to your email platform — welcome sequence, cart-abandon follow-up, and purchase confirmation.",
    note: "+ your email platform's own subscription",
    recommendedFor: ["product", "program"],
  },
  {
    id: "whatsapp",
    name: "WhatsApp Automation",
    price: 99,
    desc: "Custom API integration that sends order confirmations and follow-ups straight to WhatsApp.",
    note: "+ WhatsApp API usage, billed directly by Meta",
    recommendedFor: ["coaching", "program"],
  },
  {
    id: "meeting",
    name: "Meeting Tool Integration",
    price: 39,
    desc: "Custom API integration connecting Calendly or Zoom booking to your coaching calls and consultations.",
    note: "+ the tool's own subscription, if any",
    recommendedFor: ["coaching"],
  },
];

const INTEGRATIONS = [
  {
    id: "payments",
    name: "Payment Gateway Integration",
    price: 49,
    desc: "Stripe, PayPal or GoCardless connected using your own account keys, so payments land straight in your account.",
    note: "You'll need your own Stripe/PayPal/GoCardless account",
    recommendedFor: ["product", "program", "coaching"],
  },
  {
    id: "cms",
    name: "CMS Integration",
    price: 99,
    desc: "A custom frontend & backend dashboard, built as a responsive web app around exactly what you want your customers to see.",
    recommendedFor: ["product"],
  },
  {
    id: "crm",
    name: "CRM Integration",
    price: 69,
    desc: "Connects your existing CRM so every lead and buyer syncs automatically.",
    note: "+ your CRM's own subscription, if it has one",
    recommendedFor: ["coaching"],
  },
];

const ADDON_GROUPS = [
  {
    label: "Ads & traffic",
    items: ADS,
  },
  {
    label: "Automation",
    items: AUTOMATIONS,
  },
  {
    label: "Integrations",
    items: INTEGRATIONS,
  },
];

const ALL_ADDONS = [...ADS, ...AUTOMATIONS, ...INTEGRATIONS];

/* ─────────────────────────────────────────────
   SUPPORT PLANS
───────────────────────────────────────────── */

const PLANS = [
  {
    id: "care",
    name: "Care Plan",
    price: 39,
    period: "/mo",
    desc: "Uptime monitoring, plus small text/image edits whenever you need them.",
    recommended: true,
  },
  {
    id: "growth",
    name: "Growth Plan",
    price: 99,
    period: "/mo",
    desc: "Everything in Care, plus a monthly A/B test on your top page.",
  },
];

/* ─────────────────────────────────────────────
   LABELS
───────────────────────────────────────────── */

const AUDIENCE_LABEL = {
  program: "Fitness Programme",
  product: "Fitness Product",
  coaching: "Coaching & Counselling",
};

/* ─────────────────────────────────────────────
   CORE PLAN INCLUDED ITEMS
───────────────────────────────────────────── */

const CORE_INCLUDED = [
  "Complete funnel: landing page, checkout page & thank-you page",
  "Hosting & domain included free for your first year",
  "Professional copywriting for every page",
  "On-page SEO fundamentals",
  "Fully mobile responsive design",
  "Email notifications set up and integrated",
];

/* ─────────────────────────────────────────────
   AUDIENCE CARDS
───────────────────────────────────────────── */

const AUDIENCE_CARDS = [
  {
    id: "program",
    title: "Fitness Programme",
    desc: "A structured plan sold as a one-off — e.g. a 12-week transformation programme.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
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
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
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
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
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

/* ─────────────────────────────────────────────
   HELPERS
───────────────────────────────────────────── */

const currency = (n) => "£" + Number(n || 0).toLocaleString("en-GB");

/* ─────────────────────────────────────────────
   ICONS
───────────────────────────────────────────── */

const SendIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

const CalendarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const UserIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="8" r="3.2" />
    <path d="M5.5 19c.8-3.3 3-5 6.5-5s5.7 1.7 6.5 5" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="4" y="5" width="16" height="14" rx="2" />
    <path d="m4 7 8 6 8-6" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7.5 4.5 5 6c-.7.4-1 1.2-.8 2A15.4 15.4 0 0 0 16 19.8c.8.2 1.6-.1 2-.8l1.5-2.5-4-2-1.4 1.5a11.4 11.4 0 0 1-6.1-6.1L9.5 8.5l-2-4Z" />
  </svg>
);

const MapPinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m5 12 4.5 4.5L19 7" />
  </svg>
);

const AlertIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 3 21 20H3L12 3Z" />
    <path d="M12 9v4" />
    <circle cx="12" cy="16.5" r="1" fill="currentColor" />
  </svg>
);

const MegaphoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 11v2a2 2 0 0 0 2 2h1l3 6h2l-1-6h2l7 4V5l-7 4H8l-3 0a2 2 0 0 0-2 2z" />
    <path d="M17 9v6" />
  </svg>
);

const BoltIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
  </svg>
);

const PlugIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9 2v4M15 2v4" />
    <path d="M7 6h10v4a5 5 0 0 1-5 5 5 5 0 0 1-5-5V6Z" />
    <path d="M12 15v3" />
    <path d="M8.5 22h7" />
    <path d="M12 18v4" />
  </svg>
);

const GROUP_META = {
  "Ads & traffic": {
    icon: <MegaphoneIcon />,
    blurb: "Drive qualified traffic straight into your funnel.",
  },
  Automation: {
    icon: <BoltIcon />,
    blurb: "Follow up automatically so no lead goes cold.",
  },
  Integrations: {
    icon: <PlugIcon />,
    blurb: "Connect the tools you already run your business on.",
  },
};

/* ─────────────────────────────────────────────
   ADDON GROUP CARD
───────────────────────────────────────────── */

function AddonGroupCard({ group, meta, audience, addons, toggleAddon }) {
  const items = group.items;
  const selectedCount = items.filter((item) => addons.has(item.id)).length;
  const addedTotal = items.reduce(
    (sum, item) => (addons.has(item.id) ? sum + item.price : sum),
    0
  );
  const total = items.length;
  const pct = total ? selectedCount / total : 0;
  const radius = 15;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference - circumference * pct;

  return (
    <div className={`addon-card-group ${selectedCount > 0 ? "has-selection" : ""}`}>
      <div className="addon-card-head">
        <span className="addon-card-icon" aria-hidden="true">
          {meta.icon}
        </span>

        <div
          className="addon-card-progress"
          role="img"
          aria-label={`${selectedCount} of ${total} selected in ${group.label}`}
        >
          <svg width="34" height="34" viewBox="0 0 38 38">
            <circle cx="19" cy="19" r={radius} className="progress-track" />
            <circle
              cx="19"
              cy="19"
              r={radius}
              className="progress-fill"
              style={{ strokeDasharray: circumference, strokeDashoffset: dashOffset }}
            />
          </svg>
          <span className="addon-card-progress-label">
            {selectedCount}/{total}
          </span>
        </div>
      </div>

      <div className="addon-card-copy">
        <div className="addon-card-title">{group.label}</div>
        <div className="addon-card-blurb">{meta.blurb}</div>
      </div>

      <div className="addon-card-added-slot">
        {addedTotal > 0 && (
          <span className="addon-card-added">+{currency(addedTotal)} added</span>
        )}
      </div>

      <div className="addon-card-items">
        {items.map((item) => {
          const active = addons.has(item.id);
          const recommended = !!audience && item.recommendedFor.includes(audience);

          return (
            <button
              key={item.id}
              type="button"
              className={`addon-chip ${active ? "active" : ""}`}
              onClick={() => toggleAddon(item.id)}
              aria-pressed={active}
            >
              <span className="addon-chip-check" aria-hidden="true">
                <CheckIcon />
              </span>

              <span className="addon-chip-body">
                <span className="addon-chip-top">
                  <span className="addon-chip-name">{item.name}</span>
                  {recommended && <span className="addon-chip-tag">Recommended</span>}
                </span>
                <span className="addon-chip-desc">{item.desc}</span>
                {item.note && <span className="addon-chip-note">{item.note}</span>}
              </span>

              <span className="addon-chip-price">+{currency(item.price)}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   QUOTE CTAs
───────────────────────────────────────────── */

function QuoteCTAs({ onSendQuote, onBookCall }) {
  return (
    <div className="quote-ctas">
      <button className="btn-primary btn-icon" onClick={onSendQuote} type="button">
        <SendIcon />
        Send me this quotation
      </button>

      <button className="btn-outline btn-icon" onClick={onBookCall} type="button">
        <CalendarIcon />
        Book a free call with Satish
      </button>
    </div>
  );
}

/* ─────────────────────────────────────────────
   PRICING PAGE
───────────────────────────────────────────── */

export default function PricingPage() {
  const [audience, setAudience] = useState(null);
  const [addons, setAddons] = useState(new Set());
  const [plan, setPlan] = useState("none");
  const [step, setStep] = useState(0);
  const [showMiniBar, setShowMiniBar] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  const [quoteOpen, setQuoteOpen] = useState(false);
  const [quoteForm, setQuoteForm] = useState({ name: "", email: "", city: "", phone: "" });
  const [quoteErrors, setQuoteErrors] = useState({});
  const [quoteStatus, setQuoteStatus] = useState("idle");
  const [quoteErrorMsg, setQuoteErrorMsg] = useState("");
  const [cityFocused, setCityFocused] = useState(false);

  const heroRef = useRef(null);
  const panelRef = useRef(null);
  const cityRef = useRef(null);

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

const isFirstStepRender = useRef(true);

useEffect(() => {
  if (isFirstStepRender.current) {
    isFirstStepRender.current = false;
    return;
  }

  if (panelRef.current) {
    panelRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}, [step]);

  useEffect(() => {
    if (!quoteOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") closeQuoteModal();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [quoteOpen]);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (cityRef.current && !cityRef.current.contains(e.target)) {
        setCityFocused(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const toggleAddon = (id) => {
    setAddons((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const selectAudience = (id) => setAudience(id);

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

  const addonsTotal = useMemo(() => {
    let total = 0;
    ALL_ADDONS.forEach((item) => {
      if (addons.has(item.id)) total += item.price;
    });
    return total;
  }, [addons]);

  const activePlan = PLANS.find((p) => p.id === plan);

  const oneTimeTotal = useMemo(() => CORE_ONE_TIME + addonsTotal, [addonsTotal]);

  const monthlyTotal = useMemo(
    () => (activePlan && activePlan.price > 0 ? activePlan.price : 0),
    [activePlan]
  );

  const audienceDone = audience !== null;
  const addonsDone = addons.size > 0;
  const supportDone = plan !== "none";

  const goStep = (i) => setStep(Math.max(0, Math.min(STEPS.length - 1, i)));

  const openQuoteModal = () => {
    setQuoteStatus("idle");
    setQuoteErrors({});
    setQuoteErrorMsg("");
    setQuoteOpen(true);
  };

  const closeQuoteModal = () => {
    if (quoteStatus === "loading") return;
    setQuoteOpen(false);
    setCityFocused(false);
  };

  const openCalendly = () => {
    window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
  };

  const filteredCities = useMemo(() => {
    const query = quoteForm.city.trim().toLowerCase();
    if (!query) return UK_CITIES.slice(0);
    return UK_CITIES.filter((city) => city.toLowerCase().includes(query)).slice(0, 8);
  }, [quoteForm.city]);

  const updateQuoteField = (field, value) => {
    setQuoteForm((prev) => ({ ...prev, [field]: value }));
    setQuoteErrors((prev) => ({ ...prev, [field]: "" }));
    if (quoteStatus !== "idle") {
      setQuoteStatus("idle");
      setQuoteErrorMsg("");
    }
  };

  const cleanUKPhone = (value) => {
    let digits = value.replace(/\D/g, "");
    if (digits.startsWith("44")) digits = digits.substring(2);
    if (digits.startsWith("0")) digits = digits.substring(1);
    return digits.slice(0, 10);
  };

  const formatUKPhonePreview = () => {
    const digits = quoteForm.phone;
    if (!digits) return "";
    if (digits.length <= 4) return digits;
    if (digits.length <= 7) return `${digits.slice(0, 4)} ${digits.slice(4)}`;
    return `${digits.slice(0, 4)} ${digits.slice(4, 7)} ${digits.slice(7)}`;
  };

  const validateQuoteForm = () => {
    const errors = {};
    const name = quoteForm.name.trim();
    const email = quoteForm.email.trim();
    const city = quoteForm.city.trim();
    const phone = quoteForm.phone.trim();

    if (!name) errors.name = "Please enter your full name.";
    else if (name.length < 2) errors.name = "Please enter a valid full name.";

    if (!email) errors.email = "Please enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(email))
      errors.email = "Please enter a valid email address.";

    if (!city) errors.city = "Please choose your UK city.";

    if (!phone) errors.phone = "Please enter your UK phone number.";
    else if (phone.length !== 10) errors.phone = "Please enter a valid UK phone number.";
    else if (!/^7\d{9}$/.test(phone)) errors.phone = "Please enter a valid UK mobile number.";

    setQuoteErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const selections = useMemo(
    () => ({
      contact: {
        name: quoteForm.name.trim(),
        email: quoteForm.email.trim(),
        country: "United Kingdom",
        countryCode: "GB",
        city: quoteForm.city.trim(),
        phone: quoteForm.phone ? `+44${quoteForm.phone.replace(/^0/, "")}` : "",
      },
      audience: audience ? { id: audience, label: AUDIENCE_LABEL[audience] } : null,
      core: {
        label: "Core Plan",
        price: CORE_ONE_TIME,
        period: "one-time",
        recurring: false,
        included: CORE_INCLUDED,
      },
      addons: ALL_ADDONS.filter((a) => addons.has(a.id)).map((a) => ({
        id: a.id,
        name: a.name,
        price: a.price,
      })),
      support:
        activePlan && activePlan.price > 0
          ? {
              id: activePlan.id,
              name: activePlan.name,
              price: activePlan.price,
              period: activePlan.period,
            }
          : null,
    }),
    [quoteForm, audience, addons, activePlan]
  );

  const submitQuote = async (e) => {
    e.preventDefault();
    const isValid = validateQuoteForm();
    if (!isValid) return;

    setQuoteStatus("loading");
    setQuoteErrorMsg("");

    try {
      const res = await fetch("/api/proposal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ selections, oneTimeTotal, monthlyTotal, addonsTotal }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Something went wrong — please try again.");
      }

      setQuoteStatus("success");
    } catch (err) {
      console.error(err);
      setQuoteStatus("error");
      setQuoteErrorMsg(err?.message || "Something went wrong — please try again.");
    }
  };

  return (
    <>
      {/* STICKY MINI BAR */}
      <div className={`mini-bar ${showMiniBar ? "show" : ""}`}>
        <div className="mini-bar-inner">
          <span className="mini-bar-brand">Falcoon</span>
          <div className="mini-bar-right">
            <span className="mini-bar-total">
              {currency(oneTimeTotal)}
              <small>one-time</small>
              {monthlyTotal > 0 && <em> + {currency(monthlyTotal)}/mo support</em>}
            </span>
            <button className="mini-bar-btn" onClick={openQuoteModal}>
              Get quotation
            </button>
          </div>
        </div>
      </div>

      {/* HERO */}
      <div className="wrap">
        <div className="hero" ref={heroRef}>
          <div className="hero-eyebrow">Built for UK fitness brands</div>
          <h1>
            Every funnel starts from £149, paid once. What you add on top is up to you.
          </h1>
          <p>
            Hosting, your domain, and your funnel build come together for one simple
            one-time payment — no recurring core fee. Add ongoing support only if you'd
            like a hand after launch, and only pay for the add-ons you actually pick.
          </p>
        </div>
      </div>

      {/* MAIN LAYOUT */}
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
                    type="button"
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

            {/* PANEL */}
            <div className="panel" ref={panelRef}>
              {/* STEP 1 */}
              {step === 0 && (
                <div className="step-body">
                  <h2 className="step-title">What are you selling?</h2>
                  <p className="step-sub">
                    This tells us which add-ons to recommend — it never changes your £149
                    core plan.
                  </p>

                  <div className="audience-grid" role="radiogroup" aria-label="What you are selling">
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
                    <span className="step-progress-hint">Step 1 of 3</span>
                    <button
                      className="btn-primary"
                      type="button"
                      disabled={!audienceDone}
                      onClick={() => goStep(1)}
                    >
                      Continue
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2 */}
              {step === 1 && (
                <div className="step-body">
                  <h2 className="step-title">Ads, automation & integrations</h2>
                  <p className="step-sub">
                    All optional — turn on anything your funnel needs. You can change your
                    mind any time before you get your quotation.
                  </p>

                  {audience && (
                    <button
                      type="button"
                      className={`bundle-btn ${justAdded ? "added" : ""}`}
                      onClick={applyBundle}
                    >
                      <span className="bundle-btn-icon" aria-hidden="true">
                        {justAdded ? <CheckIcon /> : <BoltIcon />}
                      </span>
                      <span className="bundle-btn-copy">
                        <strong>
                          {justAdded
                            ? "Added your recommended add-ons"
                            : "Use the recommended bundle"}
                        </strong>
                        <small>
                          {justAdded
                            ? "You can still fine-tune anything below."
                            : `Best picks for ${AUDIENCE_LABEL[audience]}, one tap.`}
                        </small>
                      </span>
                    </button>
                  )}

                  <div className="addon-cards-grid">
                    {ADDON_GROUPS.map((group) => (
                      <AddonGroupCard
                        key={group.label}
                        group={group}
                        meta={GROUP_META[group.label]}
                        audience={audience}
                        addons={addons}
                        toggleAddon={toggleAddon}
                      />
                    ))}
                  </div>

                  <div className="step-actions">
                    <button className="btn-secondary" type="button" onClick={() => goStep(0)}>
                      Back
                    </button>
                    <button className="btn-primary" type="button" onClick={() => goStep(2)}>
                      Continue
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3 */}
              {step === 2 && (
                <div className="step-body">
                  <h2 className="step-title">Ongoing support</h2>
                  <p className="step-sub">
                    Your core plan already covers hosting. Add ongoing edits, monitoring,
                    or testing on top if you'd like a hand after launch.
                  </p>

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
                          {p.price === 0 ? "Included" : currency(p.price)}
                          {p.period && <span>{p.period}</span>}
                        </div>
                        <div className="plan-desc">{p.desc}</div>
                      </div>
                    ))}
                  </div>

                  <div className="step-actions step-actions-column">
                    <button className="btn-secondary" type="button" onClick={() => goStep(1)}>
                      Back
                    </button>
                    <QuoteCTAs onSendQuote={openQuoteModal} onBookCall={openCalendly} />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* DESKTOP SUMMARY */}
          <div className="summary">
            <h3>Your funnel</h3>
            <div className="summary-tag">
              {audience ? `For: ${AUDIENCE_LABEL[audience]}` : "No audience selected yet"}
            </div>

            <div className="summary-list">
              <div className="summary-core-block">
                <div className="summary-row core">
                  <span>Core Plan</span>
                  <span>{currency(CORE_ONE_TIME)} one-time</span>
                </div>
                <ul className="summary-core-sublist">
                  {CORE_INCLUDED.map((label) => (
                    <li key={label}>
                      <span className="summary-core-tick">
                        <CheckIcon />
                      </span>
                      {label}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {addonsTotal > 0 && (
              <>
                <div className="summary-divider" />
                <div className="summary-list">
                  {ALL_ADDONS.filter((item) => addons.has(item.id)).map((item) => (
                    <div className="summary-row" key={item.id}>
                      <span>{item.name}</span>
                      <span>+{currency(item.price)}</span>
                    </div>
                  ))}
                </div>
              </>
            )}

            <div className="summary-divider" />

            <div className="summary-total-row">
              <span className="summary-total-label">One-time total</span>
              <span className="summary-total-value">{currency(oneTimeTotal)}</span>
            </div>

            {activePlan && activePlan.price > 0 && (
              <>
                <div className="summary-divider" />
                <div className="summary-list">
                  <div className="summary-row">
                    <span>{activePlan.name}</span>
                    <span>
                      {currency(activePlan.price)}
                      {activePlan.period}
                    </span>
                  </div>
                </div>
                <div className="summary-total-row summary-total-row-small">
                  <span className="summary-total-label">Monthly support</span>
                  <span className="summary-total-value-small">
                    {currency(monthlyTotal)}
                    <small>/mo</small>
                  </span>
                </div>
              </>
            )}

            <div className="summary-trust">
              From £149 one-time · Support from £39/mo · Built for UK fitness brands
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE BOTTOM BAR */}
      <div className="mobile-bar">
        {/* <div className="mobile-bar-top">
          <div className="mobile-bar-total">
            <small>Your plan</small>
            {currency(oneTimeTotal)}
            <span className="mobile-bar-permo">one-time</span>
            {monthlyTotal > 0 && (
              <span className="mobile-bar-addons">+ {currency(monthlyTotal)}/mo support</span>
            )}
          </div>
        </div> */}

        {/* <div className="mobile-bar-actions">
          {/* <button className="btn-primary btn-icon" onClick={openQuoteModal} type="button">
            <SendIcon />
            Quotation
          </button> */}
          <button
  type="button"
  className="mobile-continue-btn"
  onClick={() => {
    if (step < 2) {
      goStep(step + 1);
    } else {
      setQuoteOpen(true);
    }
  }}
>
  <span>
    {step < 2 ? "Continue" : "Get Quote"}
  </span>
  <span className="mobile-continue-arrow" aria-hidden="true">
    →
  </span>
</button>
          <button className="btn-outline btn-icon" onClick={openCalendly} type="button">
            <CalendarIcon />
            Book call
          </button>
        </div>
      {/* </div> */}

      {/* QUOTE MODAL */}
      {quoteOpen && (
        <div
          className="modal-overlay"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) closeQuoteModal();
          }}
        >
          <div
            className="modal-card quote-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="quote-modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="modal-close"
              onClick={closeQuoteModal}
              aria-label="Close quotation form"
              disabled={quoteStatus === "loading"}
            >
              ×
            </button>

            {quoteStatus === "success" ? (
              <div className="modal-success">
                <div className="modal-success-icon">
                  <CheckIcon />
                </div>
                <h3 id="quote-modal-title" className="modal-title">
                  Quotation sent
                </h3>
                <p className="modal-sub">
                  Your quotation for a one-time <strong>{currency(oneTimeTotal)}</strong>
                  {monthlyTotal > 0 && (
                    <>
                      {" "}
                      plus <strong>{currency(monthlyTotal)}/mo</strong> for ongoing support
                    </>
                  )}{" "}
                  has been sent to <strong>{quoteForm.email}</strong>.
                </p>

                <div className="success-location">
                  <span>🇬🇧</span>
                  <div>
                    <strong>{quoteForm.city}</strong>
                    <small>United Kingdom</small>
                  </div>
                </div>

                <button
                  type="button"
                  className="btn-outline btn-icon"
                  style={{ width: "100%" }}
                  onClick={openCalendly}
                >
                  <CalendarIcon />
                  Or book a free call now
                </button>

                <button type="button" className="success-close" onClick={closeQuoteModal}>
                  Close
                </button>
              </div>
            ) : (
              <>
                <div className="modal-form-header">
                  <span className="modal-form-eyebrow">UK quotation</span>
                  <h3 id="quote-modal-title" className="modal-title">
                    Get your quotation
                  </h3>
                  <p className="modal-sub">
                    Tell us where to send your quotation and we'll prepare your full
                    breakdown.
                  </p>
                </div>

                {quoteStatus === "error" && (
                  <div className="modal-error-banner" role="alert">
                    <AlertIcon />
                    <div>
                      <strong>We couldn't send your quotation.</strong>
                      <span>{quoteErrorMsg || "Please check your details and try again."}</span>
                    </div>
                  </div>
                )}

                <form onSubmit={submitQuote} noValidate>
                  <div className="quote-name-email-row">
                    <div className="form-field">
                      <label htmlFor="qf-name">Full name</label>
                      <div className={`form-input-wrap ${quoteErrors.name ? "has-error" : ""}`}>
                        <span className="form-input-icon">
                          <UserIcon />
                        </span>
                        <input
                          id="qf-name"
                          type="text"
                          value={quoteForm.name}
                          onChange={(e) => updateQuoteField("name", e.target.value)}
                          autoComplete="name"
                          placeholder="Your full name"
                          maxLength={80}
                          aria-invalid={!!quoteErrors.name}
                        />
                        {!quoteErrors.name && quoteForm.name.trim().length >= 2 && (
                          <span className="form-valid-icon">
                            <CheckIcon />
                          </span>
                        )}
                      </div>
                      {quoteErrors.name && (
                        <div className="form-error">
                          <AlertIcon /> {quoteErrors.name}
                        </div>
                      )}
                    </div>

                    <div className="form-field">
                      <label htmlFor="qf-email">Email address</label>
                      <div className={`form-input-wrap ${quoteErrors.email ? "has-error" : ""}`}>
                        <span className="form-input-icon">
                          <MailIcon />
                        </span>
                        <input
                          id="qf-email"
                          type="email"
                          value={quoteForm.email}
                          onChange={(e) => updateQuoteField("email", e.target.value)}
                          autoComplete="email"
                          placeholder="you@example.co.uk"
                          maxLength={120}
                          inputMode="email"
                          aria-invalid={!!quoteErrors.email}
                        />
                        {!quoteErrors.email &&
                          /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(quoteForm.email) && (
                            <span className="form-valid-icon">
                              <CheckIcon />
                            </span>
                          )}
                      </div>
                      {quoteErrors.email && (
                        <div className="form-error">
                          <AlertIcon /> {quoteErrors.email}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="form-field">
                    <label>Country</label>
                    <div className="uk-country-fixed">
                      <span className="uk-country-flag">🇬🇧</span>
                      <div className="uk-country-copy">
                        <strong>United Kingdom</strong>
                        <small>UK only</small>
                      </div>
                      <span className="uk-country-check">
                        <CheckIcon />
                      </span>
                    </div>
                  </div>

                  <div className="form-field" ref={cityRef}>
                    <label htmlFor="qf-city">City</label>
                    <div className={`form-input-wrap ${quoteErrors.city ? "has-error" : ""}`}>
                      <span className="form-input-icon">
                        <MapPinIcon />
                      </span>
                      <input
                        id="qf-city"
                        type="text"
                        value={quoteForm.city}
                        onFocus={() => setCityFocused(true)}
                        onChange={(e) => updateQuoteField("city", e.target.value)}
                        autoComplete="address-level2"
                        placeholder="Search your city"
                        maxLength={60}
                        aria-invalid={!!quoteErrors.city}
                      />
                      {!quoteErrors.city && UK_CITIES.includes(quoteForm.city) && (
                        <span className="form-valid-icon">
                          <CheckIcon />
                        </span>
                      )}
                    </div>

                    {cityFocused && filteredCities.length > 0 && (
                      <div className="city-suggestions">
                        <div className="city-suggestions-title">UK cities</div>
                        {filteredCities.map((city) => (
                          <button
                            key={city}
                            type="button"
                            className="city-suggestion"
                            onMouseDown={() => {
                              updateQuoteField("city", city);
                              setCityFocused(false);
                            }}
                          >
                            <span className="city-suggestion-icon">
                              <MapPinIcon />
                            </span>
                            <span>{city}</span>
                            <span className="city-suggestion-arrow">→</span>
                          </button>
                        ))}
                      </div>
                    )}

                    {quoteErrors.city && (
                      <div className="form-error">
                        <AlertIcon />
                        {quoteErrors.city}
                      </div>
                    )}
                  </div>

                  <div className="form-field">
                    <label htmlFor="qf-phone">UK phone number</label>
                    <div className={`phone-input-group ${quoteErrors.phone ? "has-error" : ""}`}>
                      <div className="uk-phone-prefix">
                        <span>🇬🇧</span>
                        <strong>+44</strong>
                      </div>
                      <div className="phone-number-wrap">
                        <span className="form-input-icon">
                          <PhoneIcon />
                        </span>
                        <input
                          id="qf-phone"
                          type="tel"
                          value={formatUKPhonePreview()}
                          onChange={(e) => updateQuoteField("phone", cleanUKPhone(e.target.value))}
                          autoComplete="tel"
                          inputMode="numeric"
                          placeholder="7700 900000"
                          maxLength={12}
                          aria-invalid={!!quoteErrors.phone}
                        />
                        {!quoteErrors.phone && quoteForm.phone.length === 10 && (
                          <span className="form-valid-icon">
                            <CheckIcon />
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="form-hint">Enter your UK number without the +44 prefix.</div>
                    {quoteErrors.phone && (
                      <div className="form-error">
                        <AlertIcon />
                        {quoteErrors.phone}
                      </div>
                    )}
                  </div>

                  <div className="quote-mini-summary">
                    <div>
                      <span>Core plan</span>
                      <strong>{currency(CORE_ONE_TIME)} one-time</strong>
                    </div>

                    {addonsTotal > 0 && (
                      <div>
                        <span>Add-ons (one-time)</span>
                        <strong>+{currency(addonsTotal)}</strong>
                      </div>
                    )}

                    <div className="quote-mini-summary-total">
                      <span>One-time total</span>
                      <strong>{currency(oneTimeTotal)}</strong>
                    </div>

                    {activePlan && activePlan.price > 0 && (
                      <div className="quote-mini-summary-support">
                        <span>{activePlan.name}</span>
                        <strong>
                          {currency(activePlan.price)}
                          {activePlan.period}
                        </strong>
                      </div>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="btn-primary btn-icon modal-submit"
                    disabled={quoteStatus === "loading"}
                  >
                    {quoteStatus === "loading" ? (
                      <>
                        <span className="form-spinner" />
                        Sending quotation…
                      </>
                    ) : (
                      <>
                        <SendIcon />
                        Send my quotation
                      </>
                    )}
                  </button>

                  <div className="form-security">
                    <span>🔒</span>
                    <span>
                      No spam. No obligation. Your details are used only for your quotation.
                    </span>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      {/* GLOBAL STYLES */}
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
c 
        button:focus-visible,
        input:focus-visible,
        [role="radio"]:focus-visible,
        [role="switch"]:focus-visible,
        [role="tab"]:focus-visible {
          outline: 2.5px solid var(--gold-dark);
          outline-offset: 2px;
        }
.mobile-continue-btn {
  height: 46px;
  padding: 0 18px;
  border: 0;
  border-radius: 12px;
  background: #530a4e;
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: -0.01em;
  cursor: pointer;
  transition:
    transform 0.2s ease,
    background 0.2s ease,
    box-shadow 0.2s ease;
}

.mobile-continue-btn:hover {
  background: #43083f;
  transform: translateY(-1px);
}

.mobile-continue-btn:active {
  transform: translateY(0);
}

.mobile-continue-arrow {
  font-size: 17px;
  line-height: 1;
  transition: transform 0.2s ease;
}

.mobile-continue-btn:hover .mobile-continue-arrow {
  transform: translateX(3px);
}
        .wrap {
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* MINI BAR */
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
        .mini-bar-total small {
          font-family: var(--sans);
          font-size: 11px;
          font-weight: 600;
          color: var(--ink-soft);
        }
        .mini-bar-total em {
          font-family: var(--sans);
          font-style: normal;
          font-size: 12px;
          font-weight: 600;
          color: var(--gold-dark);
          margin-left: 4px;
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
        .mini-bar-btn:hover {
          background: var(--gold-dark);
        }

        /* HERO */
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
          max-width: 800px;
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

        /* LAYOUT */
        .layout {
          display: grid;
          grid-template-columns: 1fr 360px;
          gap: 32px;
          padding: 32px 0 56px;
          align-items: start;
        }

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

        /* AUDIENCE */
        .audience-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }
        .audience-card {
          position: relative;
          border: 1.5px solid var(--line);
          border-radius: var(--radius);
          background: #fff;
          padding: 18px;
          cursor: pointer;
          transition: border-color 0.15s ease, background 0.15s ease, transform 0.15s ease;
          min-height: 160px;
        }
        .audience-card:hover {
          border-color: var(--gold);
          transform: translateY(-1px);
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

        /* ACTIONS */
        .step-actions {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          margin-top: 24px;
          flex-wrap: wrap;
        }
        .step-actions-column {
          flex-direction: column;
          align-items: stretch;
        }
        .step-actions-column .btn-secondary {
          align-self: flex-start;
        }
        .step-progress-hint {
          font-size: 12.5px;
          font-weight: 600;
          letter-spacing: 0.02em;
          text-transform: uppercase;
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
          transition: background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
        }
        .btn-primary:hover {
          background: var(--gold-dark);
          transform: translateY(-1px);
        }
        .btn-primary:disabled {
          opacity: 0.45;
          cursor: not-allowed;
          transform: none;
          background: var(--ink);
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

        .btn-outline {
          border: 1.5px solid var(--gold-dark);
          background: transparent;
          color: var(--ink);
          font-weight: 700;
          font-size: 14px;
          padding: 13px 20px;
          border-radius: var(--radius-pill);
          cursor: pointer;
          min-height: 46px;
        }
        .btn-outline:hover {
          background: var(--gold-pale);
        }

        .btn-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
        }
        .btn-icon svg {
          flex-shrink: 0;
        }

        .quote-ctas {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 22px;
        }

        .bundle-btn {
          display: flex;
          align-items: center;
          gap: 12px;
          width: 100%;
          text-align: left;
          color: var(--ink);
          background: linear-gradient(135deg, var(--gold-pale), #fff 120%);
          border: 1px solid var(--gold);
          padding: 12px 16px;
          border-radius: 14px;
          cursor: pointer;
          margin-bottom: 24px;
          min-height: 58px;
          transition: background 0.2s ease, border-color 0.2s ease, transform 0.2s ease,
            box-shadow 0.2s ease;
        }
        .bundle-btn:hover {
          border-color: var(--gold-dark);
          transform: translateY(-1px);
          box-shadow: 0 8px 20px rgba(150, 112, 47, 0.16);
        }
        .bundle-btn-icon {
          flex: 0 0 36px;
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: var(--ink);
          color: var(--gold-pale);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .bundle-btn-icon svg {
          width: 18px;
          height: 18px;
        }
        .bundle-btn-copy {
          display: flex;
          flex-direction: column;
          gap: 2px;
          min-width: 0;
        }
        .bundle-btn-copy strong {
          font-size: 13.5px;
          font-weight: 800;
        }
        .bundle-btn-copy small {
          font-size: 12px;
          color: var(--ink-soft);
        }
        .bundle-btn.added {
          background: var(--ink);
          border-color: var(--ink);
        }
        .bundle-btn.added .bundle-btn-copy strong {
          color: var(--ivory);
        }
        .bundle-btn.added .bundle-btn-copy small {
          color: rgba(247, 241, 228, 0.72);
        }
        .bundle-btn.added .bundle-btn-icon {
          background: var(--gold);
          color: var(--ink);
        }

        /* ADDON CARDS */
        .addon-cards-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 16px;
          align-items: start;
        }
        .addon-card-group {
          display: flex;
          flex-direction: column;
          border: 1.5px solid var(--line);
          border-radius: 18px;
          background: #fff;
          padding: 18px;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .addon-card-group.has-selection {
          border-color: var(--gold);
          box-shadow: 0 10px 26px rgba(150, 112, 47, 0.12);
        }
        .addon-card-head {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 12px;
        }
        .addon-card-icon {
          flex: 0 0 38px;
          width: 38px;
          height: 38px;
          border-radius: 11px;
          background: var(--ink);
          color: var(--gold-pale);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .addon-card-icon svg {
          width: 18px;
          height: 18px;
        }
        .addon-card-progress {
          position: relative;
          width: 34px;
          height: 34px;
          flex-shrink: 0;
        }
        .addon-card-progress svg {
          transform: rotate(-90deg);
        }
        .progress-track {
          fill: none;
          stroke: var(--ivory-deep);
          stroke-width: 3;
        }
        .progress-fill {
          fill: none;
          stroke: var(--gold);
          stroke-width: 3;
          stroke-linecap: round;
          transition: stroke-dashoffset 0.3s ease;
        }
        .addon-card-progress-label {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 9.5px;
          font-weight: 800;
          color: var(--ink);
        }
        .addon-card-copy {
          margin-bottom: 8px;
        }
        .addon-card-title {
          font-size: 15px;
          font-weight: 800;
          color: var(--ink);
        }
        .addon-card-blurb {
          font-size: 12px;
          color: var(--ink-soft);
          margin-top: 3px;
          line-height: 1.45;
        }
        .addon-card-added-slot {
          min-height: 27px;
          margin-bottom: 4px;
        }
        .addon-card-added {
          display: inline-flex;
          font-size: 11px;
          font-weight: 800;
          color: var(--gold-dark);
          background: var(--gold-pale);
          padding: 4px 10px;
          border-radius: var(--radius-pill);
        }
        .addon-card-items {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .addon-chip {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          width: 100%;
          text-align: left;
          border: 1.5px solid var(--line);
          border-radius: 13px;
          background: #fff;
          padding: 11px 12px;
          cursor: pointer;
          transition: border-color 0.15s ease, background 0.15s ease, transform 0.15s ease,
            box-shadow 0.15s ease;
        }
        .addon-chip:hover {
          border-color: var(--gold);
          box-shadow: 0 6px 16px rgba(36, 31, 28, 0.06);
          transform: translateY(-1px);
        }
        .addon-chip.active {
          border-color: var(--ink);
          background: linear-gradient(135deg, var(--gold-pale), #fff 150%);
          box-shadow: 0 8px 18px rgba(150, 112, 47, 0.12);
        }
        .addon-chip-check {
          flex: 0 0 19px;
          width: 19px;
          height: 19px;
          margin-top: 1px;
          border-radius: 50%;
          border: 1.5px solid var(--line);
          background: #fff;
          color: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.15s ease, border-color 0.15s ease, color 0.15s ease;
        }
        .addon-chip-check svg {
          width: 10px;
          height: 10px;
        }
        .addon-chip.active .addon-chip-check {
          background: var(--ink);
          border-color: var(--ink);
          color: var(--gold-pale);
        }
        .addon-chip-body {
          min-width: 0;
          flex: 1;
        }
        .addon-chip-top {
          display: flex;
          align-items: center;
          gap: 6px;
          flex-wrap: wrap;
        }
        .addon-chip-name {
          font-size: 13px;
          font-weight: 700;
          color: var(--ink);
        }
        .addon-chip-tag {
          font-size: 9px;
          font-weight: 800;
          background: var(--ink);
          color: var(--ivory);
          padding: 2px 7px;
          border-radius: var(--radius-pill);
          white-space: nowrap;
        }
        .addon-chip-desc {
          display: block;
          font-size: 11px;
          color: var(--ink-soft);
          margin-top: 2px;
          line-height: 1.45;
        }
        .addon-chip-note {
          display: block;
          font-size: 10px;
          font-style: italic;
          color: var(--gold-dark);
          margin-top: 3px;
          line-height: 1.4;
        }
        .addon-chip-price {
          flex-shrink: 0;
          font-size: 12px;
          font-weight: 800;
          color: var(--gold-dark);
          white-space: nowrap;
          margin-top: 1px;
        }

        /* PLANS */
        .plan-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }
        .plan-card {
          border: 1.5px solid var(--line);
          border-radius: var(--radius);
          background: #fff;
          padding: 18px;
          cursor: pointer;
          position: relative;
          min-height: 150px;
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

        /* SUMMARY */
        .summary {
          position: sticky;
          top: 24px;
          background: var(--cream-card);
          border: 1px solid var(--line);
          border-radius: var(--radius);
          padding: 26px;
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
        .summary-core-block {
          border: 1px solid var(--line-soft);
          border-radius: 12px;
          background: rgba(236, 226, 204, 0.28);
          padding: 11px 12px;
        }
        .summary-core-block .summary-row {
          margin-bottom: 0;
        }
        .summary-core-sublist {
          list-style: none;
          margin: 9px 0 0;
          padding-top: 9px;
          border-top: 1px dashed var(--line);
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .summary-core-sublist li {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 12px;
          color: var(--ink-soft);
        }
        .summary-core-tick {
          flex: 0 0 15px;
          width: 15px;
          height: 15px;
          border-radius: 50%;
          background: var(--ink);
          color: var(--gold-pale);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .summary-core-tick svg {
          width: 8px;
          height: 8px;
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
          gap: 12px;
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
        .summary-total-value small {
          font-family: var(--sans);
          font-size: 13px;
          font-weight: 600;
          color: var(--ink-soft);
          margin-left: 2px;
        }
        .summary-total-row-small {
          margin-bottom: 14px;
        }
        .summary-total-value-small {
          font-family: var(--serif);
          font-size: 18px;
          font-weight: 700;
        }
        .summary-trust {
          text-align: center;
          font-size: 11.5px;
          color: var(--ink-soft);
          margin-top: 14px;
          line-height: 1.45;
        }

        /* MOBILE BAR */
        .mobile-bar {
          display: none;
          flex-direction: column;
          gap: 10px;
          position: fixed;
          left: 0;
          right: 0;
          bottom: 0;
          background: var(--cream-card);
          border-top: 1px solid var(--line);
          padding: 12px 16px calc(12px + env(safe-area-inset-bottom));
          box-shadow: 0 -8px 24px rgba(36, 31, 28, 0.12);
          z-index: 55;
        }
        .mobile-bar-top {
          display: flex;
          justify-content: center;
        }
        .mobile-bar-total {
          font-family: var(--serif);
          font-size: 19px;
          font-weight: 700;
          text-align: center;
        }
        .mobile-bar-total small {
          font-family: var(--sans);
          font-size: 11px;
          color: var(--ink-soft);
          font-weight: 500;
          display: block;
        }
        .mobile-bar-permo {
          font-family: var(--sans);
          font-size: 13px;
          font-weight: 600;
          color: var(--ink-soft);
          margin-left: 2px;
        }
        .mobile-bar-addons {
          display: block;
          font-family: var(--sans);
          font-size: 11px;
          font-weight: 600;
          color: var(--gold-dark);
          margin-top: 2px;
        }
        .mobile-bar-actions {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }
        .mobile-bar-actions .btn-primary,
        .mobile-bar-actions .btn-outline {
          padding: 12px 10px;
          font-size: 13px;
        }

        /* MODAL */
        .modal-overlay {
          position: fixed;
          inset: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          background: rgba(20, 18, 16, 0.64);
          backdrop-filter: blur(7px);
          -webkit-backdrop-filter: blur(7px);
          overflow-y: auto;
        }
        .modal-card {
          width: 100%;
          max-width: 440px;
          max-height: calc(100vh - 40px);
          overflow-y: auto;
          background: var(--cream-card);
          border-radius: 20px;
          padding: 28px;
          position: relative;
          box-shadow: 0 28px 70px rgba(0, 0, 0, 0.28);
          animation: modal-in 0.2s ease both;
        }
        @keyframes modal-in {
          from {
            opacity: 0;
            transform: translateY(10px) scale(0.985);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .modal-close {
          position: absolute;
          top: 13px;
          right: 13px;
          width: 34px;
          height: 34px;
          border: 0;
          border-radius: 50%;
          background: transparent;
          color: var(--ink-soft);
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .modal-close:hover {
          background: var(--ivory-deep);
          color: var(--ink);
        }
        .modal-close:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }
        .modal-form-header {
          padding-right: 32px;
          margin-bottom: 20px;
        }
        .modal-form-eyebrow {
          display: inline-flex;
          align-items: center;
          background: var(--gold-pale);
          color: var(--gold-dark);
          border-radius: var(--radius-pill);
          padding: 5px 10px;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          margin-bottom: 9px;
        }
        .modal-title {
          font-family: var(--serif);
          font-size: 23px;
          font-weight: 600;
          line-height: 1.15;
          margin: 0 0 6px;
        }
        .modal-sub {
          font-size: 13px;
          color: var(--ink-soft);
          margin: 0;
          line-height: 1.55;
        }
        .modal-error-banner {
          display: flex;
          align-items: flex-start;
          gap: 9px;
          background: #fff1f1;
          border: 1px solid #efcaca;
          color: #a33b3b;
          padding: 11px 12px;
          border-radius: 11px;
          margin-bottom: 15px;
        }
        .modal-error-banner > svg {
          width: 17px;
          height: 17px;
          flex: 0 0 17px;
          margin-top: 1px;
        }
        .modal-error-banner strong {
          display: block;
          font-size: 12px;
          margin-bottom: 2px;
        }
        .modal-error-banner span {
          display: block;
          font-size: 11.5px;
          line-height: 1.45;
        }

        /* FORM */
        .form-field {
          margin-bottom: 15px;
          position: relative;
        }
        .form-field label {
          display: block;
          font-size: 12px;
          font-weight: 700;
          color: var(--ink);
          margin-bottom: 6px;
        }
        .form-input-wrap {
          position: relative;
          min-height: 50px;
          display: flex;
          align-items: center;
          background: #fff;
          border: 1.5px solid #ded9d2;
          border-radius: 11px;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .form-input-wrap:focus-within {
          border-color: var(--ink);
          box-shadow: 0 0 0 3px rgba(36, 31, 28, 0.06);
        }
        .form-input-wrap.has-error {
          border-color: #c84c4c;
        }
        .form-input-icon {
          width: 18px;
          height: 18px;
          flex: 0 0 18px;
          margin-left: 13px;
          color: #8b847c;
        }
        .form-input-icon svg {
          width: 100%;
          height: 100%;
        }
        .form-input-wrap input {
          width: 100%;
          min-width: 0;
          height: 48px;
          border: 0;
          outline: 0;
          background: transparent;
          color: var(--ink);
          font-family: var(--sans);
          font-size: 14px;
          padding: 0 41px 0 10px;
        }
        .form-input-wrap input::placeholder,
        .phone-number-wrap input::placeholder {
          color: #aaa39a;
        }
        .form-valid-icon {
          position: absolute;
          right: 13px;
          width: 17px;
          height: 17px;
          color: #637a4b;
          pointer-events: none;
        }
        .form-valid-icon svg {
          width: 100%;
          height: 100%;
        }
        .form-error {
          display: flex;
          align-items: center;
          gap: 5px;
          margin-top: 5px;
          color: #b33d3d;
          font-size: 11px;
          line-height: 1.4;
        }
        .form-error svg {
          width: 13px;
          height: 13px;
          flex: 0 0 13px;
        }

        /* COUNTRY */
        .uk-country-fixed {
          min-height: 50px;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 13px;
          background: #faf8f4;
          border: 1px solid #ded9d2;
          border-radius: 11px;
        }
        .uk-country-flag {
          font-size: 21px;
        }
        .uk-country-copy {
          flex: 1;
        }
        .uk-country-copy strong {
          display: block;
          font-size: 13px;
          line-height: 1.2;
        }
        .uk-country-copy small {
          display: block;
          margin-top: 3px;
          font-size: 10.5px;
          color: #99928a;
        }
        .uk-country-check {
          width: 19px;
          height: 19px;
          color: var(--gold-dark);
        }
        .uk-country-check svg {
          width: 100%;
          height: 100%;
        }

        /* CITY */
        .city-suggestions {
          position: absolute;
          z-index: 10;
          left: 0;
          right: 0;
          top: calc(100% + 5px);
          max-height: 240px;
          overflow-y: auto;
          background: #fff;
          border: 1px solid #ded9d2;
          border-radius: 12px;
          box-shadow: 0 14px 30px rgba(36, 31, 28, 0.12);
          padding: 5px;
        }
        .city-suggestions-title {
          padding: 7px 9px 5px;
          color: #99928a;
          font-size: 9.5px;
          font-weight: 800;
          letter-spacing: 0.07em;
          text-transform: uppercase;
        }
        .city-suggestion {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 9px;
          border: 0;
          border-radius: 8px;
          background: transparent;
          color: var(--ink);
          text-align: left;
          font-family: var(--sans);
          font-size: 12.5px;
          cursor: pointer;
        }
        .city-suggestion:hover {
          background: #f7f4ee;
        }
        .city-suggestion-icon {
          width: 16px;
          height: 16px;
          color: var(--gold-dark);
          flex: 0 0 16px;
        }
        .city-suggestion-icon svg {
          width: 100%;
          height: 100%;
        }
        .city-suggestion-arrow {
          margin-left: auto;
          color: #b2aaa1;
          font-size: 14px;
        }

        /* PHONE */
        .phone-input-group {
          display: grid;
          grid-template-columns: 95px minmax(0, 1fr);
          min-height: 50px;
          border: 1.5px solid #ded9d2;
          border-radius: 11px;
          overflow: hidden;
          background: #fff;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .phone-input-group:focus-within {
          border-color: var(--ink);
          box-shadow: 0 0 0 3px rgba(36, 31, 28, 0.06);
        }
        .phone-input-group.has-error {
          border-color: #c84c4c;
        }
        .uk-phone-prefix {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          border-right: 1px solid #e7e3de;
          font-size: 13px;
        }
        .uk-phone-prefix span {
          font-size: 17px;
        }
        .uk-phone-prefix strong {
          font-size: 12.5px;
        }
        .phone-number-wrap {
          display: flex;
          align-items: center;
          min-width: 0;
          position: relative;
        }
        .phone-number-wrap .form-input-icon {
          margin-left: 11px;
        }
        .phone-number-wrap input {
          width: 100%;
          min-width: 0;
          height: 48px;
          border: 0;
          outline: 0;
          padding: 0 38px 0 8px;
          background: transparent;
          color: var(--ink);
          font-family: var(--sans);
          font-size: 14px;
        }
        .form-hint {
          margin-top: 5px;
          font-size: 10.5px;
          color: #99928a;
          line-height: 1.4;
        }

        /* MINI QUOTE SUMMARY */
        .quote-mini-summary {
          margin-top: 18px;
          margin-bottom: 14px;
          padding: 12px 13px;
          border: 1px solid var(--line);
          border-radius: 11px;
          background: #faf8f4;
        }
        .quote-mini-summary > div {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          gap: 12px;
        }
        .quote-mini-summary span {
          color: var(--ink-soft);
          font-size: 11.5px;
        }
        .quote-mini-summary strong {
          font-family: var(--serif);
          color: var(--ink);
          font-size: 18px;
        }
        .quote-mini-summary small {
          display: block;
          margin-top: 4px;
          color: var(--gold-dark);
          font-size: 10.5px;
          font-weight: 700;
        }
        .quote-mini-summary > div + div {
          margin-top: 6px;
        }
        .quote-mini-summary-total {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-top: 10px;
          padding-top: 10px;
          border-top: 1px dashed var(--line);
        }
        .quote-mini-summary-total span {
          font-weight: 700;
          color: var(--ink);
          font-size: 12.5px;
        }
        .quote-mini-summary-total strong {
          font-size: 20px;
        }
        .quote-mini-summary-support {
          margin-top: 10px;
          padding-top: 10px;
          border-top: 1px dashed var(--line);
        }

        /* SUBMIT */
        .modal-submit {
          min-height: 52px;
        }
        .form-spinner {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          border: 2px solid rgba(255, 255, 255, 0.35);
          border-top-color: #fff;
          animation: quote-spin 0.7s linear infinite;
        }
        @keyframes quote-spin {
          to {
            transform: rotate(360deg);
          }
        }
        .form-security {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          gap: 6px;
          margin-top: 10px;
          color: #9d968d;
          font-size: 10px;
          text-align: center;
          line-height: 1.45;
        }

        /* SUCCESS */
        .modal-success {
          text-align: center;
          padding: 5px 0 0;
        }
        .modal-success-icon {
          width: 58px;
          height: 58px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 15px;
          border-radius: 50%;
          background: var(--ink);
          color: var(--gold);
        }
        .modal-success-icon svg {
          width: 28px;
          height: 28px;
        }
        .modal-success .modal-sub {
          max-width: 330px;
          margin-left: auto;
          margin-right: auto;
        }
        .success-location {
          max-width: 260px;
          margin: 17px auto;
          padding: 10px 12px;
          display: flex;
          align-items: center;
          gap: 9px;
          text-align: left;
          background: #faf8f4;
          border: 1px solid var(--line);
          border-radius: 11px;
        }
        .success-location > span {
          font-size: 20px;
        }
        .success-location strong {
          display: block;
          font-size: 12.5px;
        }
        .success-location small {
          display: block;
          margin-top: 2px;
          color: var(--ink-soft);
          font-size: 10px;
        }
        .success-close {
          margin-top: 11px;
          border: 0;
          background: transparent;
          color: var(--ink-soft);
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
        }
        .success-close:hover {
          color: var(--ink);
        }

        /* RESPONSIVE — DESKTOP/TABLET BASELINE */
        @media (max-width: 960px) {
          .layout {
            grid-template-columns: 1fr;
            padding-bottom: 16px;
          }
          .addon-cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .summary {
            display: none;
          }
          .mobile-bar {
            display: flex;
          }
          .panel {
            margin-bottom: 130px;
          }
        }

        .quote-name-email-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }
        .quote-name-email-row .form-field {
          min-width: 0;
        }
        .quote-modal {
          max-width: 600px;
          width: 100%;
        }
        @media (max-width: 600px) {
          .quote-name-email-row {
            grid-template-columns: 1fr;
            gap: 0;
          }
        }

        /* ═══════════════════════════════════════════════
           MOBILE — CLEAN, FEED-STYLE, NO CLUTTER
           Flattens borders/shadows, widens tap targets,
           collapses the page into a single calm column
           the way a well-made mobile app feed reads.
        ═══════════════════════════════════════════════ */
        @media (max-width: 700px) {
          .wrap {
            padding: 0 16px;
          }

          /* Hero: tighter, no eyebrow pill shadow, shorter copy block */
          .hero {
            padding: 20px 0 4px;
            text-align: left;
          }
          .hero-eyebrow {
            font-size: 11px;
            padding: 5px 11px;
            margin-bottom: 12px;
          }
          .hero h1 {
            font-size: 24px;
            line-height: 1.2;
            margin: 0 0 8px;
            text-align: left;
          }
          .hero p {
            font-size: 13.5px;
            text-align: left;
            margin: 0;
          }

          /* Step nav becomes a slim horizontal tracker, not chunky pills */
          .step-track {
            gap: 6px;
            margin-bottom: 14px;
            overflow-x: auto;
            flex-wrap: nowrap;
            scrollbar-width: none;
            -webkit-overflow-scrolling: touch;
          }
          .step-track::-webkit-scrollbar {
            display: none;
          }
          .step-pill {
            white-space: nowrap;
            flex: 0 0 auto;
            font-size: 12px;
            padding: 7px 13px 7px 7px;
            min-height: 34px;
            border-color: transparent;
            background: var(--ivory-deep);
          }
          .step-pill.current {
            background: var(--ink);
          }

          /* Panel: remove the boxed card feel, let content breathe like a feed */
          .panel {
            padding: 18px 0;
            border: none;
            background: transparent;
            border-radius: 0;
          }
          .step-title {
            font-size: 19px;
          }
          .step-sub {
            font-size: 13px;
            margin-bottom: 18px;
          }

          /* Audience cards: flat rows instead of boxed tiles, full-width tap targets */
          .audience-grid {
            grid-template-columns: 1fr;
            gap: 10px;
          }
          .audience-card {
            display: block;
            align-items: center;
            gap: 14px;
            min-height: auto;
            padding: 14px 16px;
            border-radius: 14px;
            border-width: 1px;
            box-shadow: none;
          }
          .audience-icon {
            margin-bottom: 0;
            flex-shrink: 0;
          }
          .audience-card h4 {
            font-size: 14.5px;
            margin-bottom: 2px;
          }
          .audience-card p {
            font-size: 12px;
            line-height: 1.4;
          }
          .audience-card .tick {
            position: static;
            margin-left: auto;
            width: 20px;
            height: 20px;
            flex-shrink: 0;
          }

          /* Bundle button: flatter, less "card-on-card" */
          .bundle-btn {
            border-radius: 12px;
            padding: 11px 13px;
            margin-bottom: 16px;
            box-shadow: none;
          }

          /* Addon groups: strip the boxed-within-boxed look, use a single soft divider list */
          .addon-cards-grid {
            grid-template-columns: 1fr;
            gap: 22px;
          }
          .addon-card-group {
            padding: 0;
            border: none;
            border-radius: 0;
            box-shadow: none !important;
            border-bottom: 1px solid var(--line-soft);
            padding-bottom: 18px;
          }
          .addon-card-group:last-child {
            border-bottom: none;
            padding-bottom: 0;
          }
          .addon-card-head {
            margin-bottom: 10px;
          }
          .addon-card-icon {
            width: 32px;
            height: 32px;
            border-radius: 9px;
          }
          .addon-card-icon svg {
            width: 15px;
            height: 15px;
          }
          .addon-card-progress {
            width: 30px;
            height: 30px;
          }

          /* Addon chips: flat list rows, no nested borders/shadows, single divider */
          .addon-card-items {
            gap: 0;
          }
          .addon-chip {
            border: none;
            border-radius: 0;
            border-bottom: 1px solid var(--line-soft);
            padding: 13px 0;
            box-shadow: none !important;
            transform: none !important;
            background: transparent;
          }
          .addon-chip:last-child {
            border-bottom: none;
          }
          .addon-chip.active {
            background: transparent;
            border-bottom-color: var(--line-soft);
          }
          .addon-chip.active .addon-chip-name {
            color: var(--gold-dark);
          }
          .addon-chip-check {
            margin-top: 2px;
          }
          .addon-chip-name {
            font-size: 13.5px;
          }
          .addon-chip-desc {
            font-size: 11.5px;
          }

          /* Plan cards: flat rows, one per line */
          .plan-grid {
            grid-template-columns: 1fr;
            gap: 10px;
          }
          .plan-card {
            min-height: auto;
            padding: 14px 16px;
            border-radius: 14px;
            box-shadow: none;
          }
          .plan-recommended {
            top: 12px;
            right: 12px;
          }

          /* Step actions: full-width stacked buttons, clear hierarchy */
          .step-actions {
            margin-top: 20px;
          }
          .step-actions:not(.step-actions-column) {
            flex-direction: column-reverse;
            align-items: stretch;
            gap: 10px;
          }
          .step-actions:not(.step-actions-column) .step-progress-hint {
            text-align: center;
          }
          .btn-primary,
          .btn-secondary,
          .btn-outline {
            width: 100%;
          }

          /* Mobile bottom bar: simpler, single accent, less visual noise */
          .mobile-bar {
            padding: 10px 16px calc(10px + env(safe-area-inset-bottom));
            box-shadow: 0 -4px 18px rgba(36, 31, 28, 0.08);
          }
          .mobile-bar-total {
            font-size: 17px;
          }

          /* Modal: clean sheet, lighter chrome */
          .modal-overlay {
            align-items: flex-end;
            padding: 0;
          }
          .modal-card {
            max-width: none;
            max-height: calc(100vh - 14px);
            border-radius: 20px 20px 0 0;
            padding: 22px 16px calc(18px + env(safe-area-inset-bottom));
            box-shadow: none;
          }
          .modal-form-header {
            padding-right: 30px;
          }
          .modal-title {
            font-size: 20px;
          }
          .form-input-wrap,
          .phone-input-group,
          .uk-country-fixed {
            border-radius: 12px;
          }
        }

        @media (max-width: 420px) {
          .mobile-bar-actions {
            gap: 7px;
          }
          .mobile-bar-actions .btn-primary,
          .mobile-bar-actions .btn-outline {
            font-size: 12px;
            padding-left: 7px;
            padding-right: 7px;
          }
          .phone-input-group {
            grid-template-columns: 88px minmax(0, 1fr);
          }
          .uk-phone-prefix {
            font-size: 12px;
          }
        }
      `}</style>
    </>
  );
}