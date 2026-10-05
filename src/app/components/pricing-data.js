/* Single source of truth for the pricing page.
   Put this next to PricingClient.jsx (app/components/pricing-data.js) and have
   PricingClient import from it, so the wizard, the static tables, the FAQ and
   the JSON-LD can never drift apart.

   CONFIRMED  = taken from your live site (core £149, Care £39/mo, Growth £99/mo).
   PROPOSED   = my UK-sized suggestion. I could not see the add-on prices inside
                PricingClient, so check every PROPOSED number before publishing.
   VERIFIED   = third-party fee, checked against public UK sources in October 2026. */

export const CHECKED = "October 2026";

/* CONFIRMED */
export const CORE = {
  price: 149,
  includes: [
    "Complete funnel: landing page, checkout page and thank-you page",
    "Hosting and domain free for your first year",
    "Professional copywriting for every page",
    "On-page SEO fundamentals",
    "Fully mobile responsive design",
    "Email notifications set up and integrated",
  ],
};

/* CONFIRMED prices. Plan contents are not shown here because I could not see step 3 of the wizard. */
export const SUPPORT = [
  { id: "care", name: "Care Plan", price: 39 },
  { id: "growth", name: "Growth Plan", price: 99 },
];

/* PROPOSED one-time add-on prices in GBP */
export const AUDIENCES = [
  {
    id: "programme",
    name: "Fitness programmes",
    blurb:
      "A client system: one page per programme, WhatsApp replies and booked calls.",
    addons: [
      { name: "Offer positioning session", price: 49, tools: [] },
      {
        name: "WhatsApp chat and auto-replies",
        price: 89,
        tools: ["WhatsApp Business"],
      },
      {
        name: "Lead qualifying questions",
        price: 49,
        tools: ["WhatsApp Business", "Zapier", "Make"],
      },
      {
        name: "Call booking and reminders",
        price: 59,
        tools: ["Calendly", "Google Calendar", "Zoom", "Email", "SMS"],
      },
      {
        name: "Lead tracking and CRM",
        price: 69,
        tools: ["HubSpot", "Google Sheets", "Notion"],
      },
      {
        name: "Follow-up sequence for quiet leads",
        price: 79,
        tools: ["Email", "WhatsApp", "Zapier", "Make"],
      },
    ],
  },
  {
    id: "product",
    name: "Fitness products",
    blurb: "A store that sells supplements, plans and ebooks while you sleep.",
    addons: [
      {
        name: "Product store setup (up to 10 products)",
        price: 129,
        tools: ["Shopify", "WooCommerce", "Stan Store"],
      },
      { name: "Order bumps and bundles", price: 49, tools: [] },
      {
        name: "Instant digital delivery",
        price: 39,
        tools: ["Google Drive", "Dropbox", "Email"],
      },
      { name: "Apple Pay and Google Pay", price: 29, tools: ["Stripe"] },
      {
        name: "Fulfilment partner connection",
        price: 69,
        tools: ["Fulfilment partner"],
      },
      {
        name: "Receipts and reorder reminders",
        price: 79,
        tools: ["Mailchimp", "Klaviyo"],
      },
    ],
  },
  {
    id: "coaching",
    name: "Coaching and counselling",
    blurb:
      "Clients book and pay before the call. We build the funnel only, never session content or client records.",
    addons: [
      {
        name: "Paid booking page",
        price: 59,
        tools: ["Calendly", "Stripe", "PayPal"],
      },
      {
        name: "Zoom, Meet or Teams links",
        price: 39,
        tools: ["Zoom", "Google Meet", "Microsoft Teams"],
      },
      {
        name: "Calendar sync",
        price: 29,
        tools: ["Google Calendar", "Outlook", "Apple Calendar"],
      },
      {
        name: "Direct Debit for monthly plans",
        price: 69,
        tools: ["GoCardless"],
      },
      {
        name: "Reminders to cut no-shows",
        price: 49,
        tools: ["Email", "WhatsApp", "SMS"],
      },
      {
        name: "Follow-up after the call",
        price: 69,
        tools: ["Zapier", "Make", "HubSpot"],
      },
    ],
  },
];

/* PROPOSED. Available on every funnel type. */
export const ADS = {
  name: "Meta and Google Ads setup",
  price: 149,
  tools: ["Meta Ads", "Google Ads"],
  note: "Setup only. Your ad budget is paid directly to Meta or Google.",
};

export const MIN_ADDON = Math.min(
  ...AUDIENCES.flatMap((a) => a.addons.map((x) => x.price)),
);

/* Everything the three service pages mention, plus GoCardless (the service pages leave it out). */
export const INTEGRATIONS = [
  {
    group: "Card and wallet payments",
    tools: ["Stripe", "PayPal", "Apple Pay", "Google Pay"],
    for: ["programme", "product", "coaching"],
  },
  {
    group: "UK Direct Debit",
    tools: ["GoCardless"],
    for: ["programme", "product", "coaching"],
  },
  {
    group: "Video calls",
    tools: ["Zoom", "Google Meet", "Microsoft Teams"],
    for: ["programme", "coaching"],
  },
  {
    group: "Booking and calendars",
    tools: ["Calendly", "Google Calendar", "Outlook", "Apple Calendar"],
    for: ["programme", "coaching"],
  },
  {
    group: "Messaging",
    tools: ["WhatsApp Business", "SMS", "Email"],
    for: ["programme", "product", "coaching"],
  },
  {
    group: "Email marketing",
    tools: ["Mailchimp", "Klaviyo"],
    for: ["product", "coaching"],
  },
  {
    group: "CRM and tracking",
    tools: ["HubSpot", "Google Sheets", "Notion"],
    for: ["programme", "product", "coaching"],
  },
  {
    group: "Automation",
    tools: ["Zapier", "Make", "n8n"],
    for: ["programme", "product", "coaching"],
  },
  {
    group: "Online store",
    tools: ["Shopify", "WooCommerce", "Stan Store"],
    for: ["product"],
  },
  {
    group: "Delivery and fulfilment",
    tools: ["Google Drive", "Dropbox", "Fulfilment partner"],
    for: ["product"],
  },
  {
    group: "Traffic",
    tools: ["Instagram", "TikTok", "Meta Ads", "Google Ads"],
    for: ["programme", "product", "coaching"],
  },
];

/* VERIFIED UK payment fees, October 2026 */
export const PAYMENT_FEES = [
  {
    id: "stripe",
    name: "Stripe",
    rate: "1.5% + 20p",
    pct: 1.5,
    fixed: 0.2,
    detail:
      "Standard UK cards. Premium UK cards 1.9% + 20p, EEA cards 2.5% + 20p, international cards 3.25% + 20p.",
  },
  {
    id: "gocardless",
    name: "GoCardless",
    rate: "1% + 20p",
    pct: 1,
    fixed: 0.2,
    cap: 4,
    detail:
      "Direct Debit on the Standard plan, capped at £4 a payment. Excludes VAT. Suits monthly coaching plans.",
  },
  {
    id: "paypal",
    name: "PayPal",
    rate: "2.9% + 30p",
    pct: 2.9,
    fixed: 0.3,
    detail:
      "Standard UK commercial payments. Other payment types can cost less.",
  },
];

/* VERIFIED where a figure is given; otherwise billed by the provider */
export const TOOL_COSTS = [
  {
    name: "Calendly",
    cost: "Free plan available. Taking Stripe or PayPal payments at booking needs the Standard plan, from about $10 per user a month on annual billing ($12 monthly).",
  },
  {
    name: "Shopify",
    cost: "Basic from about £19 a month on annual billing (around £25 monthly), plus card fees. Only needed if you choose a Shopify store.",
  },
  {
    name: "Domain after year one",
    cost: "Registrars typically charge about £10 to £15 a year for a .co.uk domain. Your first year is free with the core plan.",
  },
  {
    name: "Ad budgets",
    cost: "Paid directly to Meta or Google. You set the budget.",
  },
  {
    name: "WhatsApp, email, CRM and automation tools",
    cost: "Billed by each provider. Many have free tiers, so check current rates before you subscribe.",
  },
];

export const EXAMPLES = [
  {
    label: "£75 consultation",
    method: "Stripe, UK card",
    amount: 75,
    pct: 1.5,
    fixed: 0.2,
  },
  {
    label: "£150 monthly coaching plan",
    method: "GoCardless Direct Debit",
    amount: 150,
    pct: 1,
    fixed: 0.2,
    cap: 4,
  },
  {
    label: "£49 training plan",
    method: "PayPal",
    amount: 49,
    pct: 2.9,
    fixed: 0.3,
  },
];

export const fee = ({ amount, pct, fixed, cap }) => {
  const raw = (amount * pct) / 100 + fixed;
  const capped = cap ? Math.min(raw, cap) : raw;
  return Math.round((capped + 1e-9) * 100) / 100;
};

export const gbp = (n) => `£${n.toFixed(2)}`;
