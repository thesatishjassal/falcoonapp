import PricingPicker from "../components/PricingPicker";
import {
  CHECKED,
  VAT_NOTE,
  SERVICES,
  CARES,
  CARE_WITHOUT_WORKSPACE,
  ANNUAL,
  MIN_TERM_MONTHS,
  ADS,
  MIN_BUILD,
  PAYMENT_FEES,
  TOOL_COSTS,
  gbp,
} from "../components/falcoon-pricing";
import "./pricing-v2.css";
import { dmSans, fraunces } from "./fonts";

const CARE = CARES.find((c) => c.id === "care");
const GROWTH = CARES.find((c) => c.id === "growth");
const MAX_BUILD = Math.max(...SERVICES.flatMap((s) => s.builds.map((b) => b.price)));

const DESCRIPTION = `Done-for-you funnels for UK counsellors, fitness coaches and programme creators. Builds from ${gbp(MIN_BUILD)} one-time, optional Care from ${gbp(CARE.monthly)} a month, and every other cost shown up front.`;

export const metadata = {
  title: `Pricing from ${gbp(MIN_BUILD)} | Falcoon`,
  description: DESCRIPTION,
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: `Falcoon Pricing: Funnels from ${gbp(MIN_BUILD)} One-Time`,
    description: DESCRIPTION,
    url: "/pricing",
    locale: "en_GB",
    type: "website",
    siteName: "Falcoon",
  },
};

const FAQS = [
  {
    q: `Is ${gbp(MIN_BUILD)} a monthly fee?`,
    a: `No. Every build is a one-time payment: ${gbp(MIN_BUILD)} or ${gbp(MAX_BUILD)} depending on the package. Care plans are optional and cover running everything each month.`,
  },
  {
    q: "Which package do I need?",
    a: "Counsellors and coaches selling sessions need Sell Consultations. Choose Sell Fitness Products for plans, ebooks or supplements, and Sell Fitness Programmes if you sell coaching through discovery calls. The quote builder above shows the price for each.",
  },
  {
    q: `What do Care (${gbp(CARE.monthly)}) and Growth Care (${gbp(GROWTH.monthly)}) include?`,
    a: `Care covers Google Workspace email, hosting, domain renewal, Make.com automations, monitoring, fixes, 30 minutes of edits a month and a monthly report. Growth Care adds 2 hours of edits, new pages or products as you grow, and a regular funnel review. Both have a ${MIN_TERM_MONTHS}-month minimum, then run month to month.`,
  },
  {
    q: "What if I don't take Care?",
    a: "You get the full build and a handover video, then you run the tools yourself and pay hosting, domain, email and Make.com directly to those companies.",
  },
  {
    q: "Is there a discount for paying yearly?",
    a: `Yes. Pay a year of Care upfront and get ${gbp(ANNUAL.saving)} off the build, plus 12 months of Care for the price of ${ANNUAL.monthsPaid}.`,
  },
  { q: "Do prices include VAT?", a: VAT_NOTE },
  {
    q: "Do I need my own Stripe, PayPal or GoCardless account?",
    a: "Yes. Payments go straight to your own account, never through Falcoon. We send you the link to set it up, and it takes about 10 minutes on your phone.",
  },
  {
    q: "Can counsellors and therapists use this?",
    a: "Yes. We build booking, payment and reminders only, and never store session notes or client records.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Done-for-you funnels for UK counsellors and fitness coaches",
      provider: { "@type": "ProfessionalService", name: "Falcoon" },
      areaServed: { "@type": "Country", name: "United Kingdom" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Falcoon packages (GBP)",
        itemListElement: [
          ...SERVICES.flatMap((s) =>
            s.builds.map((b) => ({
              "@type": "Offer",
              name: `${b.name} (${s.name})`,
              price: String(b.price),
              priceCurrency: "GBP",
            })),
          ),
          ...CARES.filter((c) => c.monthly > 0).map((c) => ({
            "@type": "Offer",
            name: c.name,
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: String(c.monthly),
              priceCurrency: "GBP",
              unitText: "MONTH",
            },
          })),
          { "@type": "Offer", name: ADS.name, price: String(ADS.price), priceCurrency: "GBP" },
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
  <svg className="pv-tick" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </svg>
);

export default function PricingPage() {
  return (
    // The "pv" class is required: every style and colour in pricing-v2.css hangs off it.
    <div className={`pv ${dmSans.variable} ${fraunces.variable}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO + AT A GLANCE */}
      <section className="pv-hero" aria-labelledby="pv-hero-h">
        <div className="pv-c">
          <p className="pv-label">Pricing</p>
          <h1 id="pv-hero-h">
            Know your cost <em>before you ask.</em>
          </h1>
          <p className="pv-lead">
            One fixed build price, optional monthly Care, and every other cost shown up front. {VAT_NOTE}
          </p>
          <ol className="pv-glance">
            <li>
              <span className="pv-pnum" aria-hidden="true">1</span>
              <div>
                <h2>Build</h2>
                <p className="pv-big">{gbp(MIN_BUILD)} or {gbp(MAX_BUILD)}</p>
                <p>One-time, depending on the package.</p>
              </div>
            </li>
            <li>
              <span className="pv-pnum" aria-hidden="true">2</span>
              <div>
                <h2>Monthly Care</h2>
                <p className="pv-big">{gbp(CARE.monthly)} or {gbp(GROWTH.monthly)}</p>
                <p>Optional. We run and look after everything.</p>
              </div>
            </li>
            <li>
              <span className="pv-pnum" aria-hidden="true">3</span>
              <div>
                <h2>Extras</h2>
                <p className="pv-big">{gbp(ADS.price)}</p>
                <p>Ads setup, if you want it. Pay a year of Care upfront and save {gbp(ANNUAL.saving)}.</p>
              </div>
            </li>
          </ol>
          <div className="pv-hero-ctas">
            <a className="pv-btn pv-btn-gold" href="#quote">Build my quote <span aria-hidden="true">→</span></a>
            <a className="pv-btn pv-btn-ghost" href="#packages">Compare packages</a>
          </div>
        </div>
      </section>

      {/* QUOTE BUILDER */}
      <section className="pv-sec pv-ivory" id="quote" aria-labelledby="pv-quote-h">
        <div className="pv-c">
          <div className="pv-head pv-center">
            <p className="pv-label">Quote builder</p>
            <h2 id="pv-quote-h">Your price in <em>4 taps.</em></h2>
            <p className="pv-lead">Pick what you sell and how much help you want. The total updates as you go.</p>
          </div>
          <PricingPicker />
        </div>
      </section>

      {/* PACKAGES BY SERVICE */}
      <section className="pv-sec" id="packages" aria-labelledby="pv-pk-h">
        <div className="pv-c">
          <div className="pv-head">
            <p className="pv-label">Packages</p>
            <h2 id="pv-pk-h">One price per package. <em>No add-on maths.</em></h2>
            <p className="pv-lead">Everything a funnel needs is already inside each build.</p>
          </div>
          <p className="pv-swipe" aria-hidden="true">Swipe to compare <span>→</span></p>
          <div className="pv-services pv-rail" tabIndex={0} role="group" aria-label="Packages by service, scroll sideways on small screens">
            {SERVICES.map((s) => (
              <article className="pv-service" key={s.id} aria-labelledby={`pv-s-${s.id}`}>
                <p className="pv-for">{s.for}</p>
                <h3 id={`pv-s-${s.id}`}>{s.name}</h3>
                {s.builds.map((b) => (
                  <div className="pv-build" key={b.id}>
                    <p className="pv-build-top">
                      <b>{b.name}</b>
                      <span>{gbp(b.price)} <small>one-time</small></span>
                    </p>
                    <ul>{b.points.map((p) => <li key={p}><Tick />{p}</li>)}</ul>
                  </div>
                ))}
                <a className="pv-link" href={s.href}>See how it works <span aria-hidden="true">→</span></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CARE */}
      <section className="pv-sec pv-ivory" id="care" aria-labelledby="pv-care-h">
        <div className="pv-c">
          <div className="pv-head pv-center">
            <p className="pv-label">Monthly Care</p>
            <h2 id="pv-care-h">One bill. <em>Zero tech.</em></h2>
            <p className="pv-lead">Optional, the same on every package. {MIN_TERM_MONTHS}-month minimum, then month to month.</p>
          </div>
          <div className="pv-cares">
            {CARES.map((c) => (
              <article key={c.id} className={`pv-care${c.popular ? " pv-care-pop" : ""}`} aria-labelledby={`pv-c-${c.id}`}>
                {c.popular && <span className="pv-pop">Most popular</span>}
                <h3 id={`pv-c-${c.id}`}>{c.name}</h3>
                <p className="pv-care-price">{c.monthly ? <>{gbp(c.monthly)}<small>/month</small></> : "£0"}</p>
                {c.features.length ? (
                  <ul>{c.features.map((f) => <li key={f}><Tick />{f}</li>)}</ul>
                ) : (
                  <p className="pv-care-note">{c.note}</p>
                )}
              </article>
            ))}
          </div>
          <ul className="pv-terms">
            <li>Pay a year upfront: {gbp(ANNUAL.saving)} off the build and 12 months of Care for the price of {ANNUAL.monthsPaid}.</li>
            <li>Already pay for Google Workspace? Care is {gbp(CARE_WITHOUT_WORKSPACE)}/month.</li>
          </ul>
        </div>
      </section>

      {/* COSTS OUTSIDE OUR PRICE */}
      <section className="pv-sec pv-dk" id="uk-costs" aria-labelledby="pv-uk-h">
        <div className="pv-c">
          <div className="pv-head">
            <p className="pv-label">No surprises</p>
            <h2 id="pv-uk-h">What it costs to <em>get paid.</em></h2>
            <p className="pv-lead">These companies bill you directly, never through Falcoon. UK rates, checked {CHECKED}.</p>
          </div>
          <div className="pv-costs">
            <div>
              <h3>Payment fees</h3>
              <dl className="pv-ledger">
                {PAYMENT_FEES.map((p) => (
                  <div key={p.id}>
                    <dt>{p.name}<small>{p.detail}</small></dt>
                    <dd>{p.rate}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div>
              <h3>Tools</h3>
              <dl className="pv-ledger">
                {TOOL_COSTS.map((t) => (
                  <div key={t.name}>
                    <dt>{t.name}<small>{t.cost}</small></dt>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <p className="pv-note">Rates change, so confirm them with each provider before you set your own prices.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="pv-sec" id="faq" aria-labelledby="pv-faq-h">
        <div className="pv-c pv-narrow">
          <h2 id="pv-faq-h" className="pv-center">Pricing <em>questions.</em></h2>
          <div className="pv-faq">
            {FAQS.map((f, i) => (
              <details key={f.q} open={i === 0}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile sticky bar */}
      <nav className="pv-mbar" aria-label="Quick actions">
        <a href="#packages" className="pv-mbar-price"><b>From {gbp(MIN_BUILD)}</b><span>Compare packages</span></a>
        <a className="pv-btn pv-btn-gold" href="#quote">Build my quote <span aria-hidden="true">→</span></a>
      </nav>
    </div>
  );
}