/*
  falcoon-pricing.js — the ONE place every Falcoon price lives.
  Used by: /pricing, /sell-consultations, /sell-fitness-products,
  /sell-fitness-programmes (pickers, cards, forms and FAQs).
  Change a price here and every page updates. Never type a price
  into a page file.
*/

export const CHECKED = "November 2026";

// TODO: replace with your real VAT position (for example "Prices exclude VAT"
// or "We're not VAT registered, so no VAT is added"). Don't publish a guess.
export const VAT_NOTE = "All prices are in pounds sterling.";

export const gbp = (n) =>
  `£${Number(n).toLocaleString("en-GB", {
    minimumFractionDigits: Number.isInteger(n) ? 0 : 2,
    maximumFractionDigits: 2,
  })}`;

/* ---------- Monthly care (same on every service) ---------- */
export const CARES = [
  {
    id: "none",
    name: "No Care",
    monthly: 0,
    note: "You run the tools yourself and pay hosting, domain, email and Make.com directly.",
    features: [],
  },
  {
    id: "care",
    name: "Care",
    monthly: 49,
    popular: true,
    note: "Hosting, automations, fixes, 30 min edits, monthly report",
    features: [
      "Google Workspace email and login (2 seats)",
      "Hosting and domain renewal",
      "Make.com automations",
      "Monitoring and fixes",
      "30 minutes of edits a month",
      "Monthly report",
    ],
  },
  {
    id: "growth",
    name: "Growth Care",
    monthly: 89,
    note: "Care + 2 hrs edits, new pages or products, regular funnel review",
    features: [
      "Everything in Care",
      "2 hours of edits a month",
      "New pages, products or session types as you grow",
      "Regular funnel review with suggestions",
    ],
  },
];

/** Care without Google Workspace, for clients who already pay for it. */
export const CARE_WITHOUT_WORKSPACE = 39;

export const ANNUAL = {
  saving: 100, // off the build when a year of Care is paid upfront
  monthsPaid: 10, // 12 months of Care for the price of 10
};
export const MIN_TERM_MONTHS = 3;

export const ADS = {
  name: "Meta and Google Ads setup",
  price: 149,
  note: "One-time. Your ad budget is paid to Meta or Google directly.",
};

/* ---------- Services and their builds ---------- */
export const SERVICES = [
  {
    id: "consultations",
    name: "Sell Consultations",
    for: "Counsellors, therapists and coaches",
    href: "/sell-consultations",
    builds: [
      {
        id: "launch",
        name: "Launch",
        price: 499,
        tag: "Paid sessions booked on autopilot",
        points: [
          "Branded consultation page and copy",
          "Booking with your real availability",
          "Payment at booking into your Stripe",
          "Automatic Meet or Zoom links",
          "Email and WhatsApp reminders",
          "Cancellation, no-show and rebooking automations",
        ],
        direct: [
          "Calendly Standard, about $12/month (needed to take payment at booking)",
          "WhatsApp messages: a few pence each, paid to Meta",
        ],
      },
    ],
  },
  {
    id: "products",
    name: "Sell Fitness Products",
    for: "Coaches selling plans, ebooks or supplements",
    href: "/sell-fitness-products",
    builds: [
      {
        id: "digital",
        name: "Digital Launch",
        price: 499,
        tag: "Plans, ebooks and programmes",
        points: [
          "Sales page and Stripe checkout",
          "Up to 5 digital products",
          "Instant download delivery",
          "One order bump or bundle",
          "Receipts and order alerts",
        ],
        direct: [],
      },
      {
        id: "store",
        name: "Store Launch",
        price: 699,
        tag: "Supplements, merch, or digital and physical",
        points: [
          "Shopify store, up to 10 products",
          "Order bumps and bundles",
          "Fulfilment partner connection",
          "Instant digital delivery",
          "Receipts and reorder reminders",
        ],
        direct: ["Shopify Basic: £19/month billed yearly, or £25 monthly"],
      },
    ],
  },
  {
    id: "programmes",
    name: "Sell Fitness Programmes",
    for: "Coaches selling online coaching programmes",
    href: "/sell-fitness-programmes",
    builds: [
      {
        id: "programme",
        name: "Programme Launch",
        price: 499,
        tag: "Sell through discovery calls",
        points: [
          "Landing page for one programme",
          "Offer positioning and copy",
          "Qualifying questions",
          "Call booking and reminders",
          "Lead tracker",
        ],
        direct: ["Calendly Standard, about $12/month, only if you charge for calls"],
      },
      {
        id: "system",
        name: "Client System Launch",
        price: 699,
        tag: "The whole lead-to-paid-client flow",
        points: [
          "Everything in Programme Launch",
          "WhatsApp auto-replies and qualifying",
          "Follow-ups for quiet leads",
          "Programme checkout, one-off or monthly",
          "Welcome onboarding for new clients",
        ],
        direct: [
          "WhatsApp messages: a few pence each, paid to Meta",
          "Calendly Standard, about $12/month, only if you charge for calls",
        ],
      },
    ],
  },
];

export const service = (id) => SERVICES.find((s) => s.id === id);
export const care = (id) => CARES.find((c) => c.id === id);
export const MIN_BUILD = Math.min(...SERVICES.flatMap((s) => s.builds.map((b) => b.price)));

/** Totals for any combination. Used by every picker so the maths is identical. */
export function quote({ build, careId = "none", annual = false, ads = false }) {
  const c = care(careId);
  const yearly = annual && c.monthly > 0;
  const setup = build.price - (yearly ? ANNUAL.saving : 0);
  const careUpfront = yearly ? c.monthly * ANNUAL.monthsPaid : 0;
  return {
    setup,
    ads: ads ? ADS.price : 0,
    careUpfront,
    today: setup + (ads ? ADS.price : 0) + careUpfront,
    monthly: yearly ? 0 : c.monthly,
    yearly,
    care: c,
  };
}

/* ---------- Costs paid to other companies (UK, checked above) ---------- */
export const PAYMENT_FEES = [
  { id: "stripe", name: "Stripe, standard UK cards", rate: "1.5% + 20p", detail: "Per payment. About £1.33 on a £75 session." },
  { id: "stripe-premium", name: "Stripe, premium UK cards", rate: "1.9% + 20p", detail: "Business and premium cards." },
  { id: "gocardless", name: "GoCardless Direct Debit", rate: "1.25% + 20p", detail: "Standard plan, capped at £5 per payment. Suits monthly programmes." },
  { id: "paypal", name: "PayPal", rate: "2.9% + fixed fee", detail: "Standard UK rate for sales." },
];

export const TOOL_COSTS = [
  { name: "Calendly Standard", cost: "About $12/month ($10 billed yearly). Needed to take payment at booking." },
  { name: "Shopify Basic", cost: "£19/month billed yearly, or £25 monthly. Store Launch only." },
  { name: "WhatsApp messages (Meta)", cost: "About $0.022 per reminder-type message to UK numbers. Marketing follow-ups cost more." },
  { name: "Google Meet", cost: "Free for one-to-one calls." },
  { name: "Zoom Pro", cost: "About £12–£13/month. Only if you prefer Zoom; free Zoom ends meetings at 40 minutes." },
  { name: "Google Workspace", cost: "£5.90 per user a month billed yearly. Included in Care." },
  { name: "Make.com Core", cost: "About $9–$11/month. Included in Care." },
];