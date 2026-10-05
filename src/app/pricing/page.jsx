import PricingClient from "../components/PricingClient";
import { DM_Sans, Fraunces } from "next/font/google";
import "../pricing-extras.css";
import "../pricing-uk.css";
import {
  CHECKED,
  CORE,
  SUPPORT,
  AUDIENCES,
  ADS,
  MIN_ADDON,
  INTEGRATIONS,
  PAYMENT_FEES,
  TOOL_COSTS,
  EXAMPLES,
  fee,
  gbp,
} from "../components/pricing-data";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const CARE = SUPPORT.find((s) => s.id === "care");
const GROWTH = SUPPORT.find((s) => s.id === "growth");

const DESCRIPTION = `Funnels for UK fitness coaches, programme creators and counsellors from £${CORE.price} one-time, with hosting and domain free for the first year. Add-ons from £${MIN_ADDON} for booking, payments, WhatsApp and automation. Support from £${CARE.price} a month.`;

export const metadata = {
  title: `Pricing from £${CORE.price} | Funnels for UK Coaches & Counsellors | Falcoon`,
  description: DESCRIPTION,
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: `Falcoon Pricing: Funnels from £${CORE.price} One-Time`,
    description: DESCRIPTION,
    url: "/pricing",
    locale: "en_GB",
    type: "website",
    siteName: "Falcoon",
  },
};

const stripe = PAYMENT_FEES.find((p) => p.id === "stripe");
const gocardless = PAYMENT_FEES.find((p) => p.id === "gocardless");
const paypal = PAYMENT_FEES.find((p) => p.id === "paypal");

const FAQS = [
  {
    q: `Is the £${CORE.price} a monthly fee?`,
    a: `No. £${CORE.price} is a one-time payment for your funnel build. Hosting and your domain are free for the first year, and ongoing support is optional from £${CARE.price} a month.`,
  },
  {
    q: "What is included in the core plan?",
    a: "A complete funnel with a landing page, checkout page and thank-you page, professional copywriting for every page, on-page SEO fundamentals, a fully mobile responsive design, and email notifications set up and integrated.",
  },
  {
    q: "How much do add-ons cost?",
    a: `Add-ons are one-time prices in pounds, from £${MIN_ADDON}. They cover things like booking, meeting links, WhatsApp, Direct Debit, CRM and follow-up automation, and they are listed by funnel type on this page. Meta and Google Ads setup is £${ADS.price}, and your ad budget is paid directly to Meta or Google.`,
  },
  {
    q: "Do add-on prices include ad budgets and tool subscriptions?",
    a: "No. Ad budgets are paid directly to Meta or Google, and email, WhatsApp API, CRM or meeting tool subscriptions are billed by those providers.",
  },
  {
    q: "Which tools can you connect?",
    a: "Zoom, Google Meet, Microsoft Teams and Calendly for sessions, Stripe, PayPal, Apple Pay, Google Pay and GoCardless for payments, WhatsApp, SMS and email for messages, Shopify, WooCommerce and Stan Store for product stores, and HubSpot, Google Sheets, Notion, Zapier, Make or n8n for tracking and automation. You use your own accounts for payments.",
  },
  {
    q: "What do Stripe, GoCardless and PayPal charge in the UK?",
    a: `Stripe charges ${stripe.rate} on standard UK cards, GoCardless charges ${gocardless.rate} per Direct Debit payment capped at £${gocardless.cap} (excluding VAT), and PayPal charges ${paypal.rate} on standard UK payments. These providers bill you directly. Rates were checked in ${CHECKED}, so confirm them with each provider before you set your prices.`,
  },
  {
    q: "Do I need a paid Calendly plan?",
    a: "To take Stripe or PayPal payments at booking through Calendly, you need a paid plan. The Standard plan starts at about $10 per user a month on annual billing. Calendly bills you directly.",
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
          price: String(CORE.price),
          priceCurrency: "GBP",
        },
        ...SUPPORT.map((s) => ({
          "@type": "Offer",
          name: s.name,
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: String(s.price),
            priceCurrency: "GBP",
            unitText: "MONTH",
          },
        })),
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Funnel add-ons (one-time, GBP)",
        itemListElement: [
          ...AUDIENCES.flatMap((a) =>
            a.addons.map((x) => ({
              "@type": "Offer",
              name: `${x.name} (${a.name})`,
              price: String(x.price),
              priceCurrency: "GBP",
            })),
          ),
          {
            "@type": "Offer",
            name: ADS.name,
            price: String(ADS.price),
            priceCurrency: "GBP",
          },
        ],
      },
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

const Tick = ({ on }) =>
  on ? (
    <span className="prx-yes" aria-label="Available">
      ✓
    </span>
  ) : (
    <span className="prx-no" aria-label="Not offered">
      –
    </span>
  );

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PricingClient />

      <div className={`prx ${dmSans.variable} ${fraunces.variable}`}>
        {/* ADD-ONS BY FUNNEL TYPE */}
        <section className="prx-sec" id="addons" aria-labelledby="prx-addons-h">
          <div className="prx-c">
            <div className="prx-head">
              <div className="prx-label">Add-ons</div>
              <h2 id="prx-addons-h">
                Add only what your funnel needs. <em>Priced in pounds.</em>
              </h2>
              <p className="prx-lead">
                One-time prices on top of the £{CORE.price} core build. Pick
                them in step 2 of the quotation builder above.
              </p>
            </div>

            <div className="prx-cols">
              {AUDIENCES.map((a) => (
                <article className="prx-card" key={a.id}>
                  <h3>{a.name}</h3>
                  <p className="prx-sub">{a.blurb}</p>
                  <ul className="prx-ledger">
                    {a.addons.map((x) => (
                      <li key={x.name}>
                        <div>
                          <strong>{x.name}</strong>
                          {x.tools.length > 0 && (
                            <span>{x.tools.join(", ")}</span>
                          )}
                        </div>
                        <b>£{x.price}</b>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="prx-all">
              <div>
                <strong>{ADS.name}</strong>
                <span>
                  {ADS.tools.join(", ")}. {ADS.note}
                </span>
              </div>
              <b>£{ADS.price}</b>
            </div>
          </div>
        </section>

        {/* INTEGRATIONS */}
        <section
          className="prx-sec prx-ivory"
          id="integrations"
          aria-labelledby="prx-int-h"
        >
          <div className="prx-c">
            <div className="prx-head">
              <div className="prx-label">Integrations</div>
              <h2 id="prx-int-h">
                Plugs into the tools you <em>already use.</em>
              </h2>
              <p className="prx-lead">
                Payments, calls, calendars, messaging and automation, connected
                into one funnel. Using something else? If it connects through
                Zapier or Make, we can wire it in.
              </p>
            </div>

            <div className="prx-scroll">
              <table className="prx-table">
                <caption className="prx-sr">
                  Integrations available for each funnel type
                </caption>
                <thead>
                  <tr>
                    <th scope="col">Integration</th>
                    {AUDIENCES.map((a) => (
                      <th scope="col" key={a.id}>
                        {a.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {INTEGRATIONS.map((r) => (
                    <tr key={r.group}>
                      <th scope="row">
                        <strong>{r.group}</strong>
                        <span>{r.tools.join(", ")}</span>
                      </th>
                      {AUDIENCES.map((a) => (
                        <td key={a.id}>
                          <Tick on={r.for.includes(a.id)} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* UK COSTS OUTSIDE OUR PRICE */}
        <section
          className="prx-sec prx-dk"
          id="uk-costs"
          aria-labelledby="prx-uk-h"
        >
          <div className="prx-c">
            <div className="prx-head">
              <div className="prx-label">UK costs outside our price</div>
              <h2 id="prx-uk-h">
                What it costs to <em>get paid.</em>
              </h2>
              <p className="prx-lead">
                Payment providers and tools bill you directly, never through
                Falcoon. These are current UK rates, checked {CHECKED}.
              </p>
            </div>

            <div className="prx-sl">Payment fees</div>
            <dl className="prx-ledger prx-dark">
              {PAYMENT_FEES.map((p) => (
                <div key={p.id}>
                  <dt>{p.name}</dt>
                  <dd className="prx-rate">{p.rate}</dd>
                  <dd className="prx-detail">{p.detail}</dd>
                </div>
              ))}
            </dl>

            <div className="prx-sl prx-gap">What that means in pounds</div>
            <div className="prx-ex">
              {EXAMPLES.map((e) => {
                const f = fee(e);
                return (
                  <div className="prx-ex-card" key={e.label}>
                    <small>{e.method}</small>
                    <h3>{e.label}</h3>
                    <p>
                      Fee about <b>{gbp(f)}</b>, so <b>{gbp(e.amount - f)}</b>{" "}
                      reaches you.
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="prx-sl prx-gap">Tools and other costs</div>
            <dl className="prx-ledger prx-dark">
              {TOOL_COSTS.map((t) => (
                <div key={t.name}>
                  <dt>{t.name}</dt>
                  <dd className="prx-detail prx-wide">{t.cost}</dd>
                </div>
              ))}
            </dl>

            <p className="prx-note">
              Rates change, so confirm them with each provider before you set
              your prices. Third-party fees are not part of Falcoon&apos;s
              pricing.
            </p>
          </div>
        </section>
      </div>

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
