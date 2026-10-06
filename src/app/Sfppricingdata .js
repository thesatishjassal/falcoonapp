// Prices mirror falcoon.in/pricing → "Fitness products". Edit here only.
export const CALENDLY =
  "https://calendly.com/thesatishjassal/free-strategy-call-uk";
export const CORE_PRICE = 149;
export const SUPPORT_FROM = 39;

export const CORE_INCLUDES = [
  "Landing page, checkout page and thank-you page",
  "Hosting and domain free for your first year",
  "Professional copywriting for every page",
  "On-page SEO fundamentals",
  "Fully mobile responsive design",
  "Email notifications set up and integrated",
];

export const ADDONS = [
  {
    id: "store",
    name: "Product store setup",
    tools: "Up to 10 products · Shopify, WooCommerce, Stan Store",
    price: 129,
  },
  {
    id: "bumps",
    name: "Order bumps and bundles",
    tools: "Raise every basket",
    price: 49,
  },
  {
    id: "delivery",
    name: "Instant digital delivery",
    tools: "Google Drive, Dropbox, Email",
    price: 39,
  },
  {
    id: "wallets",
    name: "Apple Pay and Google Pay",
    tools: "Stripe",
    price: 29,
  },
  {
    id: "fulfil",
    name: "Fulfilment partner connection",
    tools: "Orders passed to your partner",
    price: 69,
  },
  {
    id: "reorder",
    name: "Receipts and reorder reminders",
    tools: "Mailchimp, Klaviyo",
    price: 79,
  },
];

export const ADS = {
  id: "ads",
  name: "Meta and Google Ads setup",
  tools: "Setup only · ad budget is paid to Meta or Google",
  price: 149,
};

export const gbp = (n) => `£${n}`;

export const totalFor = (ids) =>
  CORE_PRICE +
  ids.reduce(
    (sum, id) => sum + [...ADDONS, ADS].find((a) => a.id === id).price,
    0,
  );
