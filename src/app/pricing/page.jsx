import PricingClient from "../components/PricingClient";
import "../pricing-extras.css";

const DESCRIPTION =
  "Funnels for UK fitness coaches, programme creators and counsellors from £149 one-time, with hosting and domain free for the first year. Choose add-ons and optional support, then get a quotation.";

export const metadata = {
  title: "Pricing from £149 | Funnels for UK Coaches & Counsellors | Falcoon",
  description: DESCRIPTION,
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Falcoon Pricing: Funnels from £149 One-Time",
    description: DESCRIPTION,
    locale: "en_GB",
    type: "website",
    siteName: "Falcoon",
  },
};

// Keep these in sync with the prices in PricingClient.jsx
const FAQS = [
  {
    q: "Is the £149 a monthly fee?",
    a: "No. £149 is a one-time payment for your funnel build. Hosting and your domain are free for the first year, and ongoing support is optional from £39 a month.",
  },
  {
    q: "What is included in the core plan?",
    a: "A complete funnel with a landing page, checkout page and thank-you page, professional copywriting for every page, on-page SEO fundamentals, a fully mobile responsive design, and email notifications set up and integrated.",
  },
  {
    q: "Do add-on prices include ad budgets and tool subscriptions?",
    a: "No. Ad budgets are paid directly to Meta or Google, and email, WhatsApp API, CRM or meeting tool subscriptions are billed by those providers.",
  },
  {
    q: "Which tools can you connect?",
    a: "Zoom, Google Meet, Microsoft Teams and Calendly for sessions, Stripe, PayPal and GoCardless for payments, plus email, WhatsApp and your CRM. You use your own accounts for payments.",
  },
  {
    q: "Can counsellors and therapists use this?",
    a: "Yes. The same booking, payment and meeting-link funnel works for counselling and therapy sessions. We build the funnel only and don't handle session content or client records.",
  },
  {
    q: "Do I need my own Stripe, PayPal or GoCardless account?",
    a: "Yes. We connect your own account so payments land straight with you. GoCardless Direct Debit suits monthly coaching plans.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Funnel build for UK fitness coaches, programme creators and counsellors",
      provider: { "@type": "ProfessionalService", name: "Falcoon" },
      areaServed: { "@type": "Country", name: "United Kingdom" },
      offers: [
        {
          "@type": "Offer",
          name: "Core funnel build (one-time)",
          price: "149",
          priceCurrency: "GBP",
        },
        {
          "@type": "Offer",
          name: "Care Plan",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "39",
            priceCurrency: "GBP",
            unitText: "MONTH",
          },
        },
        {
          "@type": "Offer",
          name: "Growth Plan",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "99",
            priceCurrency: "GBP",
            unitText: "MONTH",
          },
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PricingClient />
      <section className="wrap prc-faq" aria-labelledby="prc-faq-title">
        <h2 id="prc-faq-title">Pricing questions</h2>
        {FAQS.map((f, i) => (
          <details key={f.q} open={i === 0}>
            <summary>{f.q}</summary>
            <p>{f.a}</p>
          </details>
        ))}
      </section>
    </>
  );
}
