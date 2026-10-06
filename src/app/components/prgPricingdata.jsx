// Prices mirror falcoon.in/pricing → "Fitness programmes". Edit here only.
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
    id: "positioning",
    name: "Offer positioning session",
    tools: "Who it's for, what they get, why you",
    price: 49,
  },
  {
    id: "whatsapp",
    name: "WhatsApp chat and auto-replies",
    tools: "WhatsApp Business",
    price: 89,
  },
  {
    id: "qualify",
    name: "Lead qualifying questions",
    tools: "WhatsApp Business, Zapier, Make",
    price: 49,
  },
  {
    id: "booking",
    name: "Call booking and reminders",
    tools: "Calendly, Google Calendar, Zoom, Email, SMS",
    price: 59,
  },
  {
    id: "crm",
    name: "Lead tracking and CRM",
    tools: "HubSpot, Google Sheets, Notion",
    price: 69,
  },
  {
    id: "followup",
    name: "Follow-up sequence for quiet leads",
    tools: "Email, WhatsApp, Zapier, Make",
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
