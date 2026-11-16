import PricingClient from "../components/PricingClient";
import { DM_Sans, Fraunces } from "next/font/google";
import "../pricing-extras.css";
import "../pricing-uk.css";
import "../pricing-ux.css";

import {
  CHECKED,
  CORE,
  SUPPORT,
  AUDIENCES,
  ADS,
  MIN_ADDON,
  BUNDLES,
  PAYMENT_FEES,
  TOOL_COSTS,
  VAT_NOTE,
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
  title: `Pricing from £${CORE.price} | Falcoon`,
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

const FAQS = [
  {
    q: `Is the £${CORE.price} a monthly fee?`,
    a: `No. £${CORE.price} is a one-time payment for your funnel build. Hosting and your domain are free for the first year, and ongoing support is optional from £${CARE.price} a month.`,
  },
  {
    q: "How are add-ons priced?",
    a: `Each add-on is a one-time price in pounds, from £${MIN_ADDON}, based on the build time, the accounts we connect and the automation involved. Meta and Google Ads setup is £${ADS.price}. Ad budgets and tool subscriptions (email, WhatsApp API, CRM, meeting tools) are paid directly to those providers.`,
  },
  {
    q: `What do the £${CARE.price} and £${GROWTH.price} monthly plans include?`,
    a: `Care at £${CARE.price} a month covers monitoring, security updates, up to 2 small edits and email support. Growth at £${GROWTH.price} a month adds more edits, a monthly conversion check and priority support. Both are optional and you can cancel at any time.`,
  },
  {
    q: "Do prices include VAT?",
    a: VAT_NOTE,
  },
  {
    q: "Do I need my own Stripe, PayPal or GoCardless account?",
    a: "Yes. We connect your own account so payments land straight with you. GoCardless Direct Debit suits monthly coaching plans.",
  },
  {
    q: "Can counsellors and therapists use this?",
    a: "Yes. The same booking, payment and meeting-link funnel works for counselling and therapy sessions. We build the funnel only and don't handle session content or client records.",
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
          name: `${s.name} support`,
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

const Tick = () => (
  <span className="prx-yes" aria-hidden="true">
    ✓
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
        {/* AT A GLANCE */}
        <section
          className="prx-sec"
          id="overview"
          aria-labelledby="pux-glance-h"
        >
          <div className="prx-c">
            <div className="prx-head">
              <h2 id="pux-glance-h">
                Know your cost <em>before you ask.</em>
              </h2>
              <p className="prx-lead">
                Pay once for the build, add only the extras you need, and take
                monthly support if you want it. {VAT_NOTE}
              </p>
            </div>

            <ol className="pux-steps">
              <li>
                <span className="pux-step-n" aria-hidden="true">
                  1
                </span>
                <div>
                  <h3>Core build</h3>
                  <p className="pux-big">{gbp(CORE.price)}</p>
                  <p>One-time. Hosting and domain free for year one.</p>
                </div>
              </li>
              <li>
                <span className="pux-step-n" aria-hidden="true">
                  2
                </span>
                <div>
                  <h3>Add-ons</h3>
                  <p className="pux-big">from {gbp(MIN_ADDON)}</p>
                  <p>One-time. Priced on the work each one takes.</p>
                </div>
              </li>
              <li>
                <span className="pux-step-n" aria-hidden="true">
                  3
                </span>
                <div>
                  <h3>Monthly support</h3>
                  <p className="pux-big">
                    {gbp(CARE.price)} or {gbp(GROWTH.price)}
                  </p>
                  <p>Optional. Cancel at any time.</p>
                </div>
              </li>
            </ol>

            <details className="pux-incl">
              <summary>What is in the {gbp(CORE.price)} core build?</summary>
              <ul>
                {CORE.includes.map((i) => (
                  <li key={i}>
                    <Tick /> {i}
                  </li>
                ))}
              </ul>
            </details>
          </div>
        </section>

        {/* BUNDLES */}
        <section
          className="prx-sec prx-ivory"
          id="bundles"
          aria-labelledby="pux-bundles-h"
        >
          <div className="prx-c">
            <div className="prx-head">
              <h2 id="pux-bundles-h">
                Not sure what you need? <em>Start here.</em>
              </h2>
              <p className="prx-lead">
                Common set-ups with the full one-time cost added up. Adjust any
                of them in the quotation builder above.
              </p>
            </div>

            <div className="pux-bundles">
              {BUNDLES.map((b) => {
                const aud = AUDIENCES.find((a) => a.id === b.audience);
                return (
                  <article className="pux-bundle" key={b.id}>
                    <p className="pux-for">{aud.name}</p>
                    <h3>{b.name}</h3>
                    <p className="pux-blurb">{b.blurb}</p>
                    <p className="pux-total">
                      <b>{gbp(b.total)}</b> one-time
                    </p>
                    <ul>
                      <li>
                        <span>Core build</span>
                        <span>{gbp(CORE.price)}</span>
                      </li>
                      {b.items.map((x) => (
                        <li key={x.id}>
                          <span>{x.name}</span>
                          <span>{gbp(x.price)}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ADD-ONS: one tidy accordion per funnel type */}
        <section className="prx-sec" id="addons" aria-labelledby="prx-addons-h">
          <div className="prx-c">
            <div className="prx-head">
              <h2 id="prx-addons-h">
                Add only what your funnel needs. <em>Priced in pounds.</em>
              </h2>
              <p className="prx-lead">
                One-time prices on top of the {gbp(CORE.price)} core build.
                Choose your funnel type to see its add-ons.
              </p>
            </div>

            <div className="pux-accs">
              {AUDIENCES.map((a, i) => (
                <details className="pux-acc" key={a.id} open={i === 0}>
                  <summary>
                    <span className="pux-acc-t">{a.name}</span>
                    <span className="pux-acc-s">
                      {a.addons.length} add-ons from{" "}
                      {gbp(Math.min(...a.addons.map((x) => x.price)))}
                    </span>
                  </summary>
                  <p className="prx-sub">{a.blurb}</p>
                  <ul className="prx-ledger">
                    {a.addons.map((x) => (
                      <li key={x.id}>
                        <div>
                          <strong>{x.name}</strong>
                          <span>{x.tools.join(", ")}</span>
                        </div>
                        <b>{gbp(x.price)}</b>
                      </li>
                    ))}
                  </ul>
                </details>
              ))}
            </div>

            <div className="prx-all">
              <div>
                <strong>{ADS.name}</strong>
                <span>
                  {ADS.tools.join(", ")}. {ADS.note}
                </span>
              </div>
              <b>{gbp(ADS.price)}</b>
            </div>
          </div>
        </section>

        {/* MONTHLY SUPPORT */}
        <section
          className="prx-sec prx-ivory"
          id="support"
          aria-labelledby="pux-support-h"
        >
          <div className="prx-c">
            <div className="prx-head">
              <h2 id="pux-support-h">
                Monthly support, <em>only if you want it.</em>
              </h2>
              <p className="prx-lead">
                Your first year of hosting and domain is free. After that, pick
                a plan or manage it yourself.
              </p>
            </div>

            <div className="pux-support">
              {SUPPORT.map((s) => (
                <article
                  className={`pux-plan${s.id === "growth" ? " pux-plan-pick" : ""}`}
                  key={s.id}
                >
                  <h3>{s.name}</h3>
                  <p className="pux-price">
                    {gbp(s.price)}
                    <small> a month</small>
                  </p>
                  <p>{s.blurb}</p>
                  <ul>
                    {s.features.map((f) => (
                      <li key={f}>
                        <Tick /> {f}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
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
              <h2 id="prx-uk-h">
                What it costs to <em>get paid.</em>
              </h2>
              <p className="prx-lead">
                Payment providers and tools bill you directly, never through
                Falcoon. UK rates, checked {CHECKED}.
              </p>
            </div>

            <div className="pux-accs">
              <details className="pux-acc" open>
                <summary>
                  <span className="pux-acc-t">Payment fees</span>
                  <span className="pux-acc-s">Stripe, GoCardless, PayPal</span>
                </summary>
                <dl className="prx-ledger prx-dark">
                  {PAYMENT_FEES.map((p) => (
                    <div key={p.id}>
                      <dt>{p.name}</dt>
                      <dd className="prx-rate">{p.rate}</dd>
                      <dd className="prx-detail">{p.detail}</dd>
                    </div>
                  ))}
                </dl>
              </details>

              <details className="pux-acc">
                <summary>
                  <span className="pux-acc-t">Tools and other costs</span>
                  <span className="pux-acc-s">Calendly, email, CRM</span>
                </summary>
                <dl className="prx-ledger prx-dark">
                  {TOOL_COSTS.map((t) => (
                    <div key={t.name}>
                      <dt>{t.name}</dt>
                      <dd className="prx-detail prx-wide">{t.cost}</dd>
                    </div>
                  ))}
                </dl>
              </details>
            </div>

            <p className="prx-note">
              Rates change, so confirm them with each provider before you set
              your prices.
            </p>
          </div>
        </section>
      </div>

      <section
        className="wrap prc-faq"
        id="faq"
        aria-labelledby="prc-faq-title"
      >
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
