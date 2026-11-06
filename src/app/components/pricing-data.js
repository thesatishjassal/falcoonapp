// components/pricing-data.js
// Single source of truth for every price on the pricing page.
// Change a number here and the page, schema markup, FAQs and bundles all update.

export const CHECKED = "November 2026"; // re-verify provider rates before publishing

/* ------------------------------------------------------------------ */
/* CORE + MONTHLY SUPPORT                                              */
/* ------------------------------------------------------------------ */

export const CORE = {
  price: 499, // was 499
  includes: [
    "Landing page, checkout page and thank-you page",
    "Professional copywriting for every page",
    "On-page SEO fundamentals",
    "Fully mobile responsive design",
    "Email notifications set up and connected",
    "Hosting and domain free for the first year",
  ],
};

export const SUPPORT = [
  {
    id: "care",
    name: "Care",
    price: 499,
    blurb: "Keeps your funnel safe, fast and up to date.",
    features: [
      "Hosting, uptime and security monitoring",
      "Software and plugin updates",
      "Up to 2 small content edits a month",
      "Email support, replies within 2 working days",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    price: 199,
    blurb: "Everything in Care, plus help getting more bookings.",
    features: [
      "Everything in Care",
      "Up to 4 content or offer edits a month",
      "Monthly conversion check and improvement ideas",
      "Priority support, replies within 1 working day",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* EFFORT-BASED ADD-ON PRICING                                         */
/* ------------------------------------------------------------------ */
/*
  Each add-on is scored on three things instead of picking a number by feel:
    hours : realistic build + test time
    apis  : how many third-party accounts / APIs we connect
    logic : 0 = simple link, 1 = rules or webhooks, 2 = multi-step automation

  price = hours x HOURLY + apis x PER_CONNECTION + logic x PER_LOGIC_LEVEL
  then rounded up to the next £x9 so prices look clean (e.g. £129, £189).
*/

const HOURLY = 45;
const PER_CONNECTION = 15;
const PER_LOGIC_LEVEL = 20;

const roundUpTo9 = (n) => Math.ceil((n + 1) / 10) * 10 - 1;

export const priceFromEffort = ({ hours, apis, logic }) =>
  roundUpTo9(hours * HOURLY + apis * PER_CONNECTION + logic * PER_LOGIC_LEVEL);

export const effortLevel = (price) =>
  price < 120 ? "Light" : price < 200 ? "Standard" : "Advanced";

const addon = (id, name, tools, effort, why) => ({
  id,
  name,
  tools,
  effort,
  why,
  price: priceFromEffort(effort),
  level: effortLevel(priceFromEffort(effort)),
});

const A = {
  meet: addon(
    "meet",
    "Meeting links",
    ["Zoom", "Google Meet", "Microsoft Teams"],
    { hours: 1.5, apis: 1, logic: 0 },
    "Unique link sent automatically after booking.",
  ),
  book: addon(
    "book",
    "Booking calendar",
    ["Calendly"],
    { hours: 2, apis: 1, logic: 1 },
    "Embedded calendar, time zones and confirmation emails.",
  ),
  remind: addon(
    "remind",
    "Reminders and follow-ups",
    ["Email", "SMS"],
    { hours: 2, apis: 1, logic: 1 },
    "Cuts no-shows with timed messages before each session.",
  ),
  wa: addon(
    "wa",
    "WhatsApp messaging",
    ["WhatsApp"],
    { hours: 3, apis: 1, logic: 1 },
    "Click-to-chat plus automatic booking confirmations.",
  ),
  pay: addon(
    "pay",
    "Payments at checkout",
    ["Stripe", "PayPal", "Apple Pay", "Google Pay"],
    { hours: 3, apis: 2, logic: 1 },
    "Your own accounts, tested end to end with real payments.",
  ),
  store: addon(
    "store",
    "Product store link-up",
    ["Shopify", "WooCommerce", "Stan Store"],
    { hours: 4, apis: 2, logic: 1 },
    "Products, delivery and receipts joined to your funnel.",
  ),
  dd: addon(
    "dd",
    "Monthly Direct Debit",
    ["GoCardless"],
    { hours: 4, apis: 2, logic: 2 },
    "Mandates, failed-payment handling and recurring plans.",
  ),
  crm: addon(
    "crm",
    "CRM and automation",
    ["HubSpot", "Google Sheets", "Notion", "Zapier", "Make", "n8n"],
    { hours: 5, apis: 3, logic: 2 },
    "Every lead tracked and followed up without manual work.",
  ),
};

export const ADS = {
  id: "ads",
  name: "Meta and Google Ads setup",
  tools: ["Meta Ads", "Google Ads"],
  note: "Your ad budget is paid directly to Meta or Google.",
  price: priceFromEffort({ hours: 6, apis: 2, logic: 1 }),
};

/* ------------------------------------------------------------------ */
/* AUDIENCES                                                           */
/* ------------------------------------------------------------------ */

export const AUDIENCES = [
  {
    id: "coach",
    name: "Fitness coaches",
    blurb: "Book calls, take payment and keep clients on monthly plans.",
    addons: [A.book, A.pay, A.dd, A.wa, A.remind, A.crm],
  },
  {
    id: "programme",
    name: "Programme creators",
    blurb: "Sell courses and plans with instant delivery.",
    addons: [A.pay, A.store, A.remind, A.wa, A.crm],
  },
  {
    id: "counsellor",
    name: "Counsellors and therapists",
    blurb: "Session booking, meeting links and secure payment.",
    addons: [A.meet, A.book, A.pay, A.dd, A.remind],
  },
];

export const MIN_ADDON = Math.min(
  ...AUDIENCES.flatMap((a) => a.addons.map((x) => x.price)),
);

/* ------------------------------------------------------------------ */
/* READY-MADE BUNDLES (computed, never typed by hand)                  */
/* ------------------------------------------------------------------ */

const BUNDLE_DEFS = [
  {
    id: "booking-coach",
    name: "Booking-ready coach",
    audience: "coach",
    blurb: "Clients book, pay and get reminders.",
    ids: ["book", "pay", "remind"],
  },
  {
    id: "monthly-coach",
    name: "Monthly coaching",
    audience: "coach",
    blurb: "Direct Debit plans with WhatsApp and lead tracking.",
    ids: ["book", "pay", "dd", "wa", "crm"],
  },
  {
    id: "programme-launch",
    name: "Programme launch",
    audience: "programme",
    blurb: "Sell and deliver your programme automatically.",
    ids: ["pay", "store", "remind"],
  },
  {
    id: "counselling",
    name: "Counselling practice",
    audience: "counsellor",
    blurb: "Booked sessions with meeting links and reminders.",
    ids: ["meet", "book", "pay", "remind"],
  },
];

export const BUNDLES = BUNDLE_DEFS.map((b) => {
  const items = b.ids.map((id) => A[id]);
  const addonsTotal = items.reduce((s, x) => s + x.price, 0);
  return { ...b, items, addonsTotal, total: CORE.price + addonsTotal };
});

/* ------------------------------------------------------------------ */
/* INTEGRATIONS TABLE                                                  */
/* ------------------------------------------------------------------ */

export const INTEGRATIONS = [
  {
    group: "Meetings",
    tools: ["Zoom", "Google Meet", "Microsoft Teams"],
    for: ["counsellor"],
  },
  { group: "Calendars", tools: ["Calendly"], for: ["coach", "counsellor"] },
  {
    group: "Card and wallet payments",
    tools: ["Stripe", "PayPal", "Apple Pay", "Google Pay"],
    for: ["coach", "programme", "counsellor"],
  },
  {
    group: "Direct Debit",
    tools: ["GoCardless"],
    for: ["coach", "counsellor"],
  },
  {
    group: "Messaging",
    tools: ["WhatsApp", "SMS", "Email"],
    for: ["coach", "programme", "counsellor"],
  },
  {
    group: "Product stores",
    tools: ["Shopify", "WooCommerce", "Stan Store"],
    for: ["programme"],
  },
  {
    group: "Tracking and automation",
    tools: ["HubSpot", "Google Sheets", "Notion", "Zapier", "Make", "n8n"],
    for: ["coach", "programme"],
  },
];

/* ------------------------------------------------------------------ */
/* UK COSTS OUTSIDE OUR PRICE                                          */
/* ------------------------------------------------------------------ */

export const PAYMENT_FEES = [
  {
    id: "stripe",
    name: "Stripe",
    rate: "1.5% + 20p",
    pct: 0.015,
    fixed: 0.2,
    detail: "Standard UK cards. Higher for international or premium cards.",
  },
  {
    id: "gocardless",
    name: "GoCardless",
    rate: "1% + 20p",
    pct: 0.01,
    fixed: 0.2,
    cap: 4,
    detail: "Per Direct Debit payment, capped at £4 (excluding VAT).",
  },
  {
    id: "paypal",
    name: "PayPal",
    rate: "2.9% + 30p",
    pct: 0.029,
    fixed: 0.3,
    detail: "Standard UK payments.",
  },
];

export const TOOL_COSTS = [
  {
    name: "Calendly",
    cost: "Paid plan needed to take payments at booking. Standard starts at about $10 per user a month on annual billing.",
  },
  {
    name: "Zoom, Meet and Teams",
    cost: "Free plans work for most one-to-one sessions. Check each provider's limits.",
  },
  {
    name: "WhatsApp Business API",
    cost: "Billed by your messaging provider, usually per conversation.",
  },
  {
    name: "Ad budgets",
    cost: "Paid directly to Meta or Google. You choose the amount.",
  },
];

export const EXAMPLES = [
  {
    label: "£60 coaching session",
    method: "Stripe",
    amount: 60,
    provider: "stripe",
  },
  {
    label: "£499 monthly plan",
    method: "GoCardless",
    amount: 499,
    provider: "gocardless",
  },
  {
    label: "£250 programme",
    method: "PayPal",
    amount: 250,
    provider: "paypal",
  },
];

export const fee = (e) => {
  const p = PAYMENT_FEES.find((x) => x.id === e.provider);
  const raw = e.amount * p.pct + p.fixed;
  return p.cap ? Math.min(raw, p.cap) : raw;
};

export const gbp = (n) =>
  new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: Number.isInteger(n) ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(n);

export const VAT_NOTE =
  "Prices are shown in pounds. VAT is added only if it applies to your business, and we confirm this on your quote.";
