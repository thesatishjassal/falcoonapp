import Link from "next/link";
import { DM_Sans, Fraunces } from "next/font/google";
import "./home.css";
import ToolsSection from "./components/ToolsSection";
import FinalCta from "./components/homeCta";

const CALENDLY = "https://calendly.com/thesatishjassal/free-strategy-call-uk";

// Inline CTA row used across sections (a plain helper, not a component file).
// dark = section has a dark background (uses the base .hm-btn); otherwise .hm-d.
const cta = (dark = false, center = false) => (
  <div className={`hm-cta-row${center ? " hm-cc" : ""}`}>
    <a
      href={CALENDLY}
      className={`hm-btn${dark ? "" : " hm-d"}`}
      target="_blank"
      rel="noopener"
    >
      Book Free Website Audit <span>→</span>
    </a>
    <Link href="/pricing" className="hm-ghost">
      See pricing
    </Link>
  </div>
);

// Minimal, CSS-only motion. Everything is opt-in via prefers-reduced-motion
// and the scroll-reveal is progressive (ignored by browsers without support).
const MOTION_CSS = `
.hm-cta-row{display:flex;flex-wrap:wrap;gap:14px;align-items:center;margin-top:36px}
.hm-cta-row.hm-cc{justify-content:center}
.hm-ghost{display:inline-flex;align-items:center;min-height:48px;padding:0 22px;border:1.5px solid currentColor;border-radius:999px;color:inherit;font-weight:600;text-decoration:none;transition:background .2s}
.hm-ghost:hover{background:color-mix(in srgb,currentColor 10%,transparent)}
.hm-ghost:focus-visible,.hm-btn:focus-visible{outline:2px solid var(--gold,#b8893a);outline-offset:3px}
.hm-micro{margin-top:14px;font-size:.9rem;opacity:.75}
.hm-strip{padding-block:28px}

@media (prefers-reduced-motion:no-preference){
  .hm-btn span{display:inline-block;transition:transform .2s}
  .hm-btn:hover span{transform:translateX(4px)}
  .hm-btn{transition:transform .2s}
  .hm-btn:active{transform:scale(.97)}

  .hm-svc{transition:transform .25s ease,box-shadow .25s ease}
  .hm-svc:hover{transform:translateY(-4px)}
  .hm-tq,.hm-stats>div{transition:transform .25s ease}
  .hm-tq:hover,.hm-stats>div:hover{transform:translateY(-3px)}
  .hm-pf i{display:inline-block;transition:transform .25s ease}
  .hm-pf:hover i{transform:translateX(6px)}
  .hm-faq details[open] p{animation:hm-fade .3s ease}
  .hm-bridge span{display:inline-block;animation:hm-bob 2s ease-in-out infinite}

  @supports (animation-timeline:view()){
    .hm-head,.hm-pf,.hm-svc,.hm-tq,.hm-steps li,.hm-stats>div,.hm-ledger>div{
      animation:hm-rise linear both;
      animation-timeline:view();
      animation-range:entry 0% entry 35%;
    }
  }
}
@keyframes hm-rise{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}
@keyframes hm-fade{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:none}}
@keyframes hm-bob{0%,100%{transform:translateY(0)}50%{transform:translateY(4px)}}
`;

const SCENES = [
  {
    key: "programmes",
    tab: "Programmes",
    rows: [
      {
        ico: "W",
        color: "#25d366",
        title: "New lead from Instagram",
        sub: "“Is the 12-week programme right for me?”",
      },
      {
        ico: "W",
        color: "#25d366",
        title: "Auto-reply qualifies them",
        sub: "Goal and days a week, answered in seconds",
      },
      {
        ico: "C",
        color: "#006bff",
        title: "Call booked",
        sub: "Thu 10:00, added to your calendar",
      },
    ],
    result: {
      value: "5 leads this week",
      label: "Qualified while you were offline",
    },
  },
  {
    key: "products",
    tab: "Products",
    rows: [
      {
        ico: "P",
        color: "#003087",
        title: "Order: 12-week strength plan",
        sub: "£49, paid with PayPal",
      },
      {
        ico: "+",
        color: "#b89655",
        title: "Order bump added",
        sub: "Recipe book +£9 at checkout",
      },
      {
        ico: "E",
        color: "#ea4335",
        title: "Delivered instantly",
        sub: "Download link emailed, receipt sent",
      },
    ],
    result: {
      value: "£312 while you slept",
      label: "Orders delivered automatically",
    },
  },
  {
    key: "consultations",
    tab: "Consultations",
    rows: [
      {
        ico: "C",
        color: "#006bff",
        title: "Slot chosen",
        sub: "Strategy session, Tue 11:30",
      },
      {
        ico: "S",
        color: "#635bff",
        title: "Payment taken",
        sub: "£75 by card, before the call",
      },
      {
        ico: "Z",
        color: "#2d8cff",
        title: "Zoom link sent",
        sub: "Reminder queued, diary updated",
      },
    ],
    result: { value: "£225 paid", label: "Before the first call" },
  },
];

const RAIL = ["Lead", "Book", "Pay", "Link", "Remind", "Follow-up"];

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

const SITE_DESCRIPTION =
  "Done-for-you funnels for UK fitness coaches, programme creators and counsellors: online booking, payments, Zoom, Google Meet and Teams links, and automation, all connected.";

export const metadata = {
  title: "Online Booking & Payment Funnels for UK Coaches | Falcoon",
  description: SITE_DESCRIPTION,
  keywords: [
    "fitness coach website UK",
    "online coaching funnel",
    "personal trainer booking system",
    "sell fitness programmes online",
    "counsellor online booking and payments",
    "Zoom Google Meet Teams booking",
    "GoCardless Stripe PayPal coaches",
    "UK coaching automation",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Online Booking & Payment Funnels for UK Coaches | Falcoon",
    description: SITE_DESCRIPTION,
    locale: "en_GB",
    type: "website",
    siteName: "Falcoon",
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Booking & Payment Funnels for UK Coaches | Falcoon",
    description: SITE_DESCRIPTION,
  },
};

const FAQS = [
  {
    q: "How does Falcoon help fitness coaches?",
    a: "We build high-converting landing pages, funnels and ad systems so you can sell your fitness programmes, coaching and digital products effortlessly.",
  },
  {
    q: "Can counsellors and therapists use Falcoon?",
    a: "Yes. The same booking, payment and meeting-link funnel works for counselling and therapy sessions on Zoom, Google Meet or Microsoft Teams. We build the funnel only and don't handle session content or client records.",
  },
  {
    q: "Which tools do you connect?",
    a: "Zoom, Google Meet and Microsoft Teams for calls, Calendly and Google or Outlook calendars for booking, Stripe, PayPal and GoCardless for payments, WhatsApp, email and SMS for messages, and Zapier, Make or n8n for automation. UK-based tools such as GoCardless and FreeAgent work too.",
  },
  {
    q: "Do you run ads for lead generation?",
    a: "Yes. We set up Meta and Google Ads to bring targeted traffic to your funnel.",
  },
  {
    q: "Can I sell digital products?",
    a: "Yes. We set up a product store with checkout and instant delivery for plans, ebooks and other digital products, plus upsells and bundles.",
  },
  {
    q: "Do I need technical skills?",
    a: "No. Falcoon is done for you. We build the pages, connect payments, booking and WhatsApp, and test everything, so you can focus on your clients.",
  },
  {
    q: "What should I charge?",
    a: "It depends on your location, experience and format. In-person sessions in the UK typically fall between £30 and £60 an hour, and London is often higher. We'll help you position and price your offer on the strategy call.",
  },
  {
    q: "How do I get paid?",
    a: "Through Stripe and PayPal for cards and wallets, and GoCardless for Direct Debit. Each provider sets its own fees, which are shown on this page.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      name: "Falcoon",
      description: SITE_DESCRIPTION,
      areaServed: { "@type": "Country", name: "United Kingdom" },
      serviceType: [
        "Sales funnels for fitness coaches",
        "Online booking and payment systems",
        "Lead automation and WhatsApp automation",
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

export default function HomePage() {
  return (
    <div className={`hm-page ${dmSans.variable} ${fraunces.variable}`}>
      <style dangerouslySetInnerHTML={{ __html: MOTION_CSS }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* HERO */}
      <section className="hm-hero">
        <div className="hm-c hm-hero-in">
          <div>
            <div className="hm-eyebrow">
              For UK fitness &amp; wellbeing professionals
            </div>
            <h1 className="hm-h1">
              <span className="hm-sr">
                Sell your coaching, programmes, counselling and consultations
                online, without the tech
              </span>
              <span aria-hidden="true">
                <span className="hm-line">Sell your</span>
                <span className="hm-flip">
                  <span className="hm-flip-track">
                    <b>coaching</b>
                    <b>programmes</b>
                    <b>counselling</b>
                    <b>consultations</b>
                    <b>products</b>
                    <b>coaching</b>
                  </span>
                </span>
                <span className="hm-line">
                  online, <em>without the tech.</em>
                </span>
              </span>
            </h1>
            <p>
              We build high-converting websites, funnels and automated sales
              systems for UK coaches, programme creators and counsellors. Zoom,
              Google Meet, Microsoft Teams, payments and automation, all
              connected for you.
            </p>
            <div className="hm-btns">
              <a
                href={CALENDLY}
                className="hm-btn"
                target="_blank"
                rel="noopener"
              >
                Book Free Website Audit <span>→</span>
              </a>
              <Link href="/pricing" className="hm-ghost">
                See pricing
              </Link>
            </div>
            <p className="hm-micro">
              Free audit. No payment needed. Funnels from £149 one-time.
            </p>
          </div>

          <div
            className="hm-hv"
            role="img"
            aria-label="Animated example of a Falcoon funnel. A lead arrives, books, pays, gets a meeting link and a reminder, shown for programmes, products and consultations."
          >
            <div className="hm-vis">
              <div className="hm-frame">
                <span className="hm-fchip hm-fc1" style={{ "--d": "#25d366" }}>
                  <i></i>WhatsApp
                </span>
                <span className="hm-fchip hm-fc2" style={{ "--d": "#635bff" }}>
                  <i></i>Stripe
                </span>
                <span className="hm-fchip hm-fc3" style={{ "--d": "#2d8cff" }}>
                  <i></i>Zoom
                </span>
                <span className="hm-fchip hm-fc4" style={{ "--d": "#0f9d58" }}>
                  <i></i>GoCardless
                </span>

                <div className="hm-live">
                  <div className="hm-ph-h">
                    <b>This week</b>
                    <span className="hm-badge hm-pulse">Live example</span>
                  </div>

                  <div className="hm-tabs">
                    {SCENES.map((s) => (
                      <span className="hm-tab" key={s.key}>
                        {s.tab}
                      </span>
                    ))}
                  </div>

                  <div className="hm-stage">
                    {SCENES.map((s) => (
                      <div className="hm-scene" key={s.key}>
                        {s.rows.map((r, i) => (
                          <div className={`hm-lr hm-r${i + 1}`} key={r.title}>
                            <span
                              className="hm-lr-ico"
                              style={{ "--d": r.color }}
                            >
                              {r.ico}
                            </span>
                            <div>
                              <strong>{r.title}</strong>
                              <small>{r.sub}</small>
                            </div>
                          </div>
                        ))}
                        <div className="hm-lr hm-lres hm-r4">
                          <div>
                            <strong>{s.result.value}</strong>
                            <small>{s.result.label}</small>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="hm-rail">
                    <span className="hm-rail-line"></span>
                    <span className="hm-rail-fill"></span>
                    <span className="hm-rail-spark"></span>
                    <div className="hm-rail-steps">
                      {RAIL.map((step) => (
                        <span key={step}>{step}</span>
                      ))}
                    </div>
                  </div>

                  <div className="hm-lock-foot">
                    All of it running without you
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hm-c hm-tags">
          <span>Built for UK professionals</span>
          <i>Personal trainers</i>
          <i>Online coaches</i>
          <i>Programme creators</i>
          <i>Counsellors &amp; therapists</i>
          <i>Studio owners</i>
          <i>Nutrition coaches</i>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="hm-sec" id="problems">
        <div className="hm-c">
          <div className="hm-head" style={{ maxWidth: "820px" }}>
            <div className="hm-label">01 — The pain, and the fix</div>
            <h2>
              Stop doing it by hand. Let the <em>funnel</em> do it.
            </h2>
            <p className="hm-lead">
              Every one of these costs you hours each week. Each has a fix we
              build into your funnel.
            </p>
          </div>
          <div className="hm-pf-head">
            <span>
              <span className="hm-dot hm-red"></span>Without a system
            </span>
            <span></span>
            <span>
              <span className="hm-dot hm-green"></span>With Falcoon
            </span>
          </div>
          <div className="hm-pf-list">
            <div className="hm-pf">
              <p>
                Endless DMs about{" "}
                <span className="hm-ul hm-red">price and availability</span>
              </p>
              <i aria-hidden="true">→</i>
              <p>
                Clients{" "}
                <span className="hm-ul hm-green">pick a time and pay</span> on
                one page
              </p>
            </div>
            <div className="hm-pf">
              <p>
                <span className="hm-ul hm-red">Unpaid calls</span> and no-shows
              </p>
              <i aria-hidden="true">→</i>
              <p>
                Payment{" "}
                <span className="hm-ul hm-green">taken before the call</span>,
                reminders sent for you
              </p>
            </div>
            <div className="hm-pf">
              <p>
                Sending{" "}
                <span className="hm-ul hm-red">Zoom or Meet links by hand</span>
              </p>
              <i aria-hidden="true">→</i>
              <p>
                A Zoom, Meet or Teams link{" "}
                <span className="hm-ul hm-green">
                  created and sent automatically
                </span>
              </p>
            </div>
            <div className="hm-pf">
              <p>
                <span className="hm-ul hm-red">Double-booked</span> diaries
              </p>
              <i aria-hidden="true">→</i>
              <p>
                Calendar sync that{" "}
                <span className="hm-ul hm-green">
                  respects your real availability
                </span>
              </p>
            </div>
            <div className="hm-pf">
              <p>
                Leads{" "}
                <span className="hm-ul hm-red">going cold in your DMs</span>
              </p>
              <i aria-hidden="true">→</i>
              <p>
                WhatsApp replies and follow-ups{" "}
                <span className="hm-ul hm-green">on autopilot</span>
              </p>
            </div>
            <div className="hm-pf">
              <p>
                <span className="hm-ul hm-red">Chasing monthly payments</span>{" "}
                every month
              </p>
              <i aria-hidden="true">→</i>
              <p>
                Direct Debit that{" "}
                <span className="hm-ul hm-green">collects itself</span>
              </p>
            </div>
          </div>
          {cta()}
        </div>
      </section>

      {/* UK MARKET */}
      <section className="hm-sec hm-ivory">
        <div className="hm-c">
          <div className="hm-label">02 — The UK market</div>
          <div className="hm-idea-top">
            <h2>
              UK fitness is a small-business industry. Run yours{" "}
              <em>like one.</em>
            </h2>
            <p className="hm-lead">
              There are 12.2 million UK health and fitness club members, and
              most personal trainers work for themselves. That means you handle
              the coaching, the sales and the admin on your own.
              <br />
              <br />
              <strong>Falcoon takes the sales and admin off your plate.</strong>
            </p>
          </div>
          <div className="hm-stats">
            <div>
              <b>12.2M</b>
              <span>UK health and fitness club members</span>
            </div>
            <div>
              <b>5,842</b>
              <span>clubs competing for their attention</span>
            </div>
            <div>
              <b>Most</b>
              <span>personal trainers are self-employed</span>
            </div>
          </div>
          <div className="hm-ledger">
            <div>
              <b>Hybrid coaching</b>
              <span>In-person sessions plus online programmes</span>
              <em>Programme and consultation funnels</em>
            </div>
            <div>
              <b>Counselling &amp; therapy</b>
              <span>Private 1:1 sessions, booked and paid online</span>
              <em>Paid booking with Zoom, Meet or Teams</em>
            </div>
            <div>
              <b>Niche offers</b>
              <span>Menopause, pre- and post-natal, older adults, Hyrox</span>
              <em>A clear-offer page for each niche</em>
            </div>
            <div>
              <b>Less admin</b>
              <span>No reception team to take bookings</span>
              <em>Booking and reminders on autopilot</em>
            </div>
            <div>
              <b>Paid up front</b>
              <span>No-shows and late payments cost hours</span>
              <em>Payment taken at booking</em>
            </div>
          </div>
          {cta()}
          <p className="hm-note">
            Market figures: ukactive and 4GLOBAL, UK Health and Fitness Market
            Report 2026.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="hm-sec hm-hl" id="services">
        <div className="hm-c">
          <div className="hm-head hm-center">
            <div className="hm-label">03 — What we build</div>
            <h2>
              We build your fitness{" "}
              <em className="hm-mark">revenue funnels.</em>
            </h2>
            <p className="hm-lead">
              Sell programmes, products and consultations without tech
              headaches. You focus on coaching. We handle the funnel.
            </p>
          </div>

          <div className="hm-grid3">
            <article className="hm-svc">
              <span className="hm-tag">High income</span>
              <h3>Sell Fitness Products</h3>
              <p>
                Sell supplements, plans and digital fitness products 24/7, even
                while you sleep.
              </p>
              <ul>
                <li>Product store setup</li>
                <li>Checkout + payment flow</li>
                <li>Upsell &amp; bundle system</li>
              </ul>
              <Link href="/sell-fitness-products" className="hm-more">
                Explore products →
              </Link>
            </article>

            <article className="hm-svc hm-feat">
              <span className="hm-tag">Most popular</span>
              <h3>Sell Fitness Programmes</h3>
              <p>
                Turn your coaching into a system that brings clients daily, not
                randomly.
              </p>
              <ul>
                <li>High-converting landing pages</li>
                <li>Clear offer positioning</li>
                <li>WhatsApp + lead automation</li>
              </ul>
              <Link href="/sell-fitness-programmes" className="hm-more">
                Explore programmes →
              </Link>
            </article>

            <article className="hm-svc">
              <span className="hm-tag">Easy cashflow</span>
              <h3>Sell Consultations</h3>
              <p>
                Clients book and pay before they talk to you, whether it&apos;s
                coaching, a programme review or a counselling session.
              </p>
              <ul>
                <li>Auto booking funnels</li>
                <li>Paid Zoom/Meet integration</li>
                <li>Smart calendar sync</li>
              </ul>
              <Link href="/sell-consultations" className="hm-more">
                Explore consultations →
              </Link>
            </article>
          </div>

          <div className="hm-paybar">
            <span>50+ UK fitness coaches scaling with Falcoon funnels</span>
            <div className="hm-chips">
              <span className="hm-chip" style={{ "--d": "#635bff" }}>
                <i></i>Stripe
              </span>
              <span className="hm-chip" style={{ "--d": "#003087" }}>
                <i></i>PayPal
              </span>
              <span className="hm-chip" style={{ "--d": "#0f9d58" }}>
                <i></i>GoCardless
              </span>
            </div>
            <a
              href={CALENDLY}
              className="hm-btn hm-d"
              target="_blank"
              rel="noopener"
            >
              Build my funnel <span>→</span>
            </a>
          </div>

          <a href="#system" className="hm-bridge">
            Here&apos;s how each funnel gets built <span>↓</span>
          </a>
        </div>
      </section>

      {/* TOOLS & AUTOMATION */}
      <ToolsSection />
      <section className="hm-sec hm-strip">
        <div className="hm-c">{cta(false, true)}</div>
      </section>

      {/* PRICES */}
      <section className="hm-sec hm-dk" id="prices">
        <div className="hm-c">
          <div className="hm-head" style={{ maxWidth: "820px" }}>
            <div className="hm-label">05 — UK prices</div>
            <h2>
              What UK coaches charge, and what it costs to <em>get paid.</em>
            </h2>
            <p className="hm-lead">
              Use typical UK rates as a starting point for your offers, and know
              what each payment costs before you price.
            </p>
          </div>

          <div className="hm-sl">Typical UK coaching prices</div>
          <div className="hm-ledger hm-dark">
            <div>
              <b>In-person session</b>
              <span>£30–£60 per hour</span>
              <em>London often £60–£150</em>
            </div>
            <div>
              <b>Monthly training</b>
              <span>£150–£500+ a month</span>
              <em>Depends on sessions a week and experience</em>
            </div>
            <div>
              <b>Group sessions</b>
              <span>£20–£30 per person</span>
              <em>Lower price, more clients at once</em>
            </div>
            <div>
              <b>Online coaching</b>
              <span>Usually less per session</span>
              <em>Hybrid clients can pay more overall</em>
            </div>
          </div>

          <div className="hm-sl" style={{ marginTop: "56px" }}>
            What taking payment costs in the UK
          </div>
          <div className="hm-grid3">
            <div className="hm-ic">
              <small>Stripe · UK cards</small>
              <h3>1.5% + 20p</h3>
              <p>
                Standard UK cards. EEA cards are 2.5% + 20p and international
                cards 3.25% + 20p.
              </p>
            </div>
            <div className="hm-ic">
              <small>GoCardless · Direct Debit</small>
              <h3>1% + 20p</h3>
              <p>
                Capped at £4 a payment. Built for monthly coaching plans and
                repeat payments.
              </p>
            </div>
            <div className="hm-ic">
              <small>PayPal</small>
              <h3>From 1.2% + 30p</h3>
              <p>
                Rises to 2.9% + 30p for standard card payments. Check your own
                rate.
              </p>
            </div>
          </div>
          <div className="hm-worked">
            <b>Worked example</b>
            <span>
              A £75 consultation paid by UK card through Stripe costs about
              £1.33, so £73.67 reaches you. A £150 monthly plan collected by
              Direct Debit costs £1.70.
            </span>
          </div>
          {cta(true)}
          <p className="hm-note hm-light">
            Prices and fees are typical ranges from public UK sources, checked
            October 2026. They vary by location, provider and account, so
            confirm current rates before you set prices.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="hm-sec hm-dk hm-how" id="system">
        <div className="hm-c">
          <div className="hm-head hm-sys-h">
            <div>
              <div className="hm-label">04 — How we build it</div>
              <h2 style={{ marginTop: "20px" }}>
                How we build your <em>revenue funnel.</em>
              </h2>
            </div>
            <p className="hm-lead">
              A simple, done-for-you process, from idea to paying clients.
            </p>
          </div>

          <ol className="hm-steps">
            <li>
              <span className="hm-sn">01</span>
              <h3>Team discovery call</h3>
              <p>
                We jump on a quick call to understand your business, your goals
                and what you want to sell.
              </p>
            </li>
            <li>
              <span className="hm-sn">02</span>
              <h3>Content &amp; videos</h3>
              <p>
                We write high-converting copy and help you record simple videos
                for your funnel.
              </p>
            </li>
            <li>
              <span className="hm-sn">03</span>
              <h3>Landing page</h3>
              <p>
                We design and develop your landing pages and test everything for
                conversions.
              </p>
            </li>
            <li>
              <span className="hm-sn">04</span>
              <h3>Automation &amp; payments</h3>
              <p>
                We connect email, WhatsApp, Google Calendar, meetings and
                payments through Stripe, PayPal and GoCardless.
              </p>
            </li>
            <li>
              <span className="hm-sn">05</span>
              <h3>Ads</h3>
              <p>
                We set up Meta and Google Ads to bring targeted traffic to your
                funnel.
              </p>
            </li>
            <li>
              <span className="hm-sn">06</span>
              <h3>Clients arrive</h3>
              <p>
                Leads come in, bookings happen and payments are collected
                automatically.
              </p>
            </li>
          </ol>
          {cta(true)}

          <a href="#tools" className="hm-bridge">
            Every step runs on tools you already use <span>↓</span>
          </a>
        </div>
      </section>

      {/* PROPOSAL CTA */}
      <section className="hm-sec hm-ivory hm-prop">
        <div className="hm-c hm-center">
          <h2>
            Ready to build your <em>revenue funnel?</em>
          </h2>
          <p className="hm-lead">
            Get pricing and a custom proposal for your business in minutes.
          </p>
          <div className="hm-cta-row hm-cc">
            <Link href="/pricing" className="hm-btn hm-d">
              View pricing &amp; get proposal <span>→</span>
            </Link>
            <a
              href={CALENDLY}
              className="hm-ghost"
              target="_blank"
              rel="noopener"
            >
              Book Free Website Audit
            </a>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="hm-sec hm-dk" id="results">
        <div className="hm-c">
          <div className="hm-head">
            <div className="hm-label">07 — What our clients say</div>
            <h2>
              Results from <em>real businesses.</em>
            </h2>
          </div>
          <div className="hm-tgrid">
            <figure className="hm-tq">
              <blockquote>
                Falcoon helped me automate my gym operations completely. From
                memberships to payments, everything is smooth now. I saved hours
                every day.
              </blockquote>
              <figcaption>
                <b>James Turner</b>
                <span>Gym Owner, Manchester</span>
                <em>+40% time saved</em>
              </figcaption>
            </figure>
            <figure className="hm-tq">
              <blockquote>
                My client bookings increased after using Falcoon. The system
                looks professional and clients trust it more than WhatsApp
                bookings.
              </blockquote>
              <figcaption>
                <b>Dr. Emily Carter</b>
                <span>Consultant Psychologist, Clinical Psychology</span>
                <em>+60% bookings</em>
              </figcaption>
            </figure>
            <figure className="hm-tq">
              <blockquote>
                Before Falcoon, I was managing everything manually. Now I track
                clients, payments and progress in one place.
              </blockquote>
              <figcaption>
                <b>Daniel Wright</b>
                <span>Fitness Studio Owner, Leeds</span>
                <em>All-in-one system</em>
              </figcaption>
            </figure>
            <figure className="hm-tq">
              <blockquote>
                Very simple to use and clean UI. My clients love the booking
                experience. It feels like a premium service.
              </blockquote>
              <figcaption>
                <b>Charlotte Bennett</b>
                <span>Tarot Card Reader</span>
                <em>Better client experience</em>
              </figcaption>
            </figure>
          </div>
          {cta(true)}
        </div>
      </section>

      {/* FAQ */}
      <section className="hm-sec" id="faq">
        <div className="hm-c hm-two hm-faq-grid">
          <div>
            <div className="hm-label">08 — FAQ</div>
            <h2 style={{ margin: "20px 0 22px" }}>
              Everything you need to know before you <em>start.</em>
            </h2>
            <p className="hm-lead">
              Still unsure? We&apos;ll walk you through everything on a free
              call.
            </p>
            <a
              href={CALENDLY}
              className="hm-btn hm-d"
              style={{ marginTop: "28px" }}
              target="_blank"
              rel="noopener"
            >
              Book Free Website Audit <span>→</span>
            </a>
          </div>
          <div className="hm-faq">
            {FAQS.map((f, i) => (
              <details key={f.q} open={i === 0}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      {/* FINAL CTA */}
      <FinalCta />
    </div>
  );
}
