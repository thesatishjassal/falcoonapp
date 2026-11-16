import Link from "next/link";
import { DM_Sans, Fraunces } from "next/font/google";
import "./home.css";
import { CORE, SUPPORT, MIN_ADDON, gbp } from "./components/pricing-data";

const CALENDLY = "https://calendly.com/thesatishjassal/free-strategy-call-uk";

const CARE = SUPPORT.find((s) => s.id === "care");
const GROWTH = SUPPORT.find((s) => s.id === "growth");

// Inline CTA row used across sections (a plain helper, not a component file).
// dark = section has a dark background (uses the base .hm-btn); otherwise .hm-d.
const cta = (dark = false, center = false) => (
  <div className={`hm-cta-row${center ? " hm-cc" : ""}`}>
    <Link href="/pricing" className={`hm-btn${dark ? "" : " hm-d"}`}>
      See Pricing <span>→</span>
    </Link>
    <a href={CALENDLY} className="hm-ghost" target="_blank" rel="noopener">
      Book a Free Strategy Call
    </a>
  </div>
);

/* Simple line icons (inherit colour, decorative) */
const Ico = ({ children }) => (
  <span className="hm-ico" aria-hidden="true">
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  </span>
);

const ICONS = {
  inbox: <path d="M3 13l3-8h12l3 8v6H3zM3 13h5l1 3h6l1-3h5" />,
  bell: <path d="M6 16v-5a6 6 0 0112 0v5l2 2H4zM10 21h4" />,
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.2" />
    </>
  ),
  card: (
    <>
      <rect x="3" y="6" width="18" height="13" rx="2" />
      <path d="M3 11h18M7 15h4" />
    </>
  ),
  build: (
    <>
      <rect x="4" y="4" width="7" height="7" rx="1" />
      <rect x="13" y="4" width="7" height="7" rx="1" />
      <rect x="4" y="13" width="7" height="7" rx="1" />
      <path d="M16.5 13v7M13 16.5h7" />
    </>
  ),
  grow: <path d="M3 17l6-6 4 4 8-8M15 7h6v6" />,
  convert: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12l3 3 5-6" />
    </>
  ),
  programme: (
    <>
      <rect x="3.5" y="5" width="17" height="15" rx="2" />
      <path d="M3.5 10h17M8 3v4M16 3v4M9 15l2 2 4-4" />
    </>
  ),
  box: <path d="M12 3l8 4v10l-8 4-8-4V7zM4 7l8 4 8-4M12 11v10" />,
  chat: <path d="M4 5h16v11H9l-5 4z" />,
};

const PROBLEMS = [
  [
    "inbox",
    "Leads buried in Instagram and WhatsApp",
    "Every lead captured automatically",
  ],
  [
    "bell",
    "Chasing people by hand to book a call",
    "Follow-up and reminders sent for you",
  ],
  [
    "target",
    "Ads sending people to a general website",
    "Ads sending people to a page built to sell",
  ],
  [
    "card",
    "Booking and payment handled separately",
    "Booking and payment in one smooth step",
  ],
];

const STEPS = [
  [
    "build",
    "Build",
    "We write and build your funnel around one offer, then connect payments, booking and email.",
  ],
  [
    "grow",
    "Grow",
    "We run Meta and Google Ads to bring in people who are ready to book or buy.",
  ],
  [
    "convert",
    "Convert",
    "Follow-up turns enquiries into calls, sales and clients, while you focus on delivering.",
  ],
];

// Minimal, CSS-only motion. Everything is opt-in via prefers-reduced-motion
// and the scroll-reveal is progressive (ignored by browsers without support).
const MOTION_CSS = `
.hm-cta-row{display:flex;flex-wrap:wrap;gap:14px;align-items:center;margin-top:36px}
.hm-cta-row.hm-cc{justify-content:center}
.hm-ghost{display:inline-flex;align-items:center;min-height:48px;padding:0 22px;border:1.5px solid currentColor;border-radius:999px;color:inherit;font-weight:600;text-decoration:none;transition:background .2s}
.hm-ghost:hover{background:color-mix(in srgb,currentColor 10%,transparent)}
.hm-ghost:focus-visible,.hm-btn:focus-visible{outline:2px solid var(--gold,#b8893a);outline-offset:3px}

/* Price line in hero */
.hm-price{margin-top:18px;font-size:1.05rem}
.hm-price b{font-size:1.5rem;margin-right:6px}
.hm-price span{display:block;margin-top:2px;opacity:.75;font-size:.92rem}

/* Plans */
.hm-two-way{display:grid;grid-template-columns:repeat(2,1fr);gap:24px;margin-top:48px}
.hm-plan{padding:36px 32px;border:1.5px solid color-mix(in srgb,currentColor 22%,transparent);border-radius:22px;display:flex;flex-direction:column;gap:14px}
.hm-plan.hm-plan-feat{border-color:var(--gold,#b8893a)}
.hm-plan h3{margin:0;font-size:1.6rem}
.hm-plan ul{margin:0;padding-left:1.1em;display:grid;gap:6px}
.hm-plan .hm-btn,.hm-plan .hm-ghost{align-self:flex-start;margin-top:auto}
.hm-plan-tag{font-weight:600;opacity:.75}
.hm-plan-price{margin:0;font-size:1.9rem;font-weight:600;line-height:1.1}
.hm-plan-price small{font-size:.95rem;font-weight:400;opacity:.7}
.hm-support-note{margin-top:28px;text-align:center;opacity:.85}
@media (max-width:760px){.hm-two-way{grid-template-columns:1fr}}

@media (prefers-reduced-motion:no-preference){
  .hm-btn span{display:inline-block;transition:transform .2s}
  .hm-btn:hover span{transform:translateX(4px)}
  .hm-btn{transition:transform .2s}
  .hm-btn:active{transform:scale(.97)}

  .hm-svc{transition:transform .25s ease,box-shadow .25s ease}
  .hm-svc:hover{transform:translateY(-4px)}
  .hm-tq{transition:transform .25s ease}
  .hm-tq:hover{transform:translateY(-3px)}
  .hm-faq details[open] p{animation:hm-fade .3s ease}

  @supports (animation-timeline:view()){
    .hm-head,.hm-pc,.hm-svc,.hm-tq,.hm-steps li,.hm-plan{
      animation:hm-rise linear both;
      animation-timeline:view();
      animation-range:entry 0% entry 35%;
    }
  }
}
@keyframes hm-rise{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}
@keyframes hm-fade{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:none}}
`;

// Hero live example: ad -> funnel -> lead -> follow-up -> sale -> client
const SCENES = [
  {
    key: "programmes",
    tab: "Programmes",
    rows: [
      {
        ico: "M",
        color: "#0866ff",
        title: "Instagram ad: 12-week programme",
        sub: "Targeted at women 30–50 within 20 miles",
      },
      {
        ico: "F",
        color: "#b89655",
        title: "Lead captured on your funnel",
        sub: "Goal and days a week, answered in seconds",
      },
      {
        ico: "W",
        color: "#25d366",
        title: "WhatsApp follow-up sent",
        sub: "Call booked Thu 10:00, added to your calendar",
      },
    ],
    result: {
      value: "5 leads this week",
      label: "Captured and followed up while you were offline",
    },
  },
  {
    key: "products",
    tab: "Products",
    rows: [
      {
        ico: "M",
        color: "#0866ff",
        title: "Ad click: 12-week strength plan",
        sub: "Retargeting visitors who didn't buy",
      },
      {
        ico: "+",
        color: "#b89655",
        title: "Checkout with order bump",
        sub: "£49 plan, recipe book +£9",
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
    key: "coaching",
    tab: "Coaching",
    rows: [
      {
        ico: "G",
        color: "#ea4335",
        title: "Google search: online counsellor",
        sub: "High-intent visitor lands on your funnel",
      },
      {
        ico: "S",
        color: "#635bff",
        title: "Slot chosen, payment taken",
        sub: "£75 by card, Tue 11:30",
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

const RAIL = ["Ad", "Funnel", "Lead", "Follow-up", "Sale", "Client"];

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

const SITE_TITLE = "Falcoon | Funnels and Ads for UK Fitness Professionals";
const SITE_DESCRIPTION = `Falcoon builds your funnel, runs your Meta and Google Ads and follows up every lead, so enquiries become paying clients. Funnels from ${gbp(CORE.price)} one-time for UK coaches, trainers and counsellors.`;

export const metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: [
    "client acquisition system fitness",
    "fitness coach funnel UK",
    "done-for-you funnel",
    "Meta ads for personal trainers",
    "Google ads for fitness coaches",
    "sell fitness programmes online",
    "counsellor online booking and payments",
    "UK coaching automation",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    locale: "en_GB",
    type: "website",
    siteName: "Falcoon",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

const FAQS = [
  {
    q: "What exactly do I get?",
    a: "A complete funnel built around one offer: landing page, checkout and thank-you page, written for you, mobile ready and connected to your payments, booking and email. Add Meta and Google Ads management when you want more traffic.",
  },
  {
    q: "How much does it cost?",
    a: `The funnel build is ${gbp(CORE.price)} one-time, with hosting and your domain free for the first year. Add-ons such as booking, payments, WhatsApp and Direct Debit start from ${gbp(MIN_ADDON)}. Optional monthly support is ${gbp(CARE.price)} (Care) or ${gbp(GROWTH.price)} (Growth). Ad management is quoted to your goals on a strategy call.`,
  },
  {
    q: "Do I have to buy the ads service too?",
    a: "No. Start with the funnel and add ads when you are ready for traffic. Ads perform best on a funnel built for your offer, which is why we do both.",
  },
  {
    q: "Can counsellors and therapists use Falcoon?",
    a: "Yes. Clients enquire, book, pay and receive a Zoom, Google Meet or Teams link automatically. We build the funnel only and never handle session content or client records.",
  },
  {
    q: "Which tools do you connect?",
    a: "Stripe, PayPal, Apple Pay, Google Pay and GoCardless for payments. Calendly for booking. WhatsApp, SMS and email for messages. Zoom, Meet and Teams for sessions. HubSpot, Google Sheets, Zapier, Make and n8n for tracking and automation. Payments go straight to your own accounts.",
  },
  {
    q: "Do I need technical skills?",
    a: "No. We build, connect and test everything, then hand over a funnel that is ready to take bookings and payments.",
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
      priceRange: `From ${gbp(CORE.price)}`,
      serviceType: [
        "Done-for-you sales funnels for fitness businesses",
        "Meta Ads and Google Ads management",
        "Lead follow-up and conversion systems",
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
                Turn your fitness offer into a client acquisition system
              </span>
              <span aria-hidden="true">
                <span className="hm-line">Turn your</span>
                <span className="hm-flip">
                  <span className="hm-flip-track">
                    <b>programme</b>
                    <b>product</b>
                    <b>coaching</b>
                    <b>counselling</b>
                    <b>consultation</b>
                    <b>programme</b>
                  </span>
                </span>
                <span className="hm-line">
                  into <em>a client acquisition system.</em>
                </span>
              </span>
            </h1>
            <p>
              We build your funnel, run your Meta and Google Ads, and follow up
              every lead, so enquiries become booked, paying clients.
            </p>

            <p className="hm-price">
              <b>From {gbp(CORE.price)}</b> one-time
              <span>Hosting and domain free for the first year</span>
            </p>

            <div className="hm-btns">
              <Link href="/pricing" className="hm-btn">
                See Pricing <span>→</span>
              </Link>
              <a
                href={CALENDLY}
                className="hm-ghost"
                target="_blank"
                rel="noopener"
              >
                Book a Free Strategy Call
              </a>
            </div>
          </div>

          <div
            className="hm-hv"
            role="img"
            aria-label="Animated example of a Falcoon system. An ad brings a visitor to a funnel, the lead is captured and followed up, then becomes a sale and a client, shown for programmes, products and coaching."
          >
            <div className="hm-vis">
              <div className="hm-frame">
                <span className="hm-fchip hm-fc1" style={{ "--d": "#0866ff" }}>
                  <i></i>Meta Ads
                </span>
                <span className="hm-fchip hm-fc2" style={{ "--d": "#ea4335" }}>
                  <i></i>Google Ads
                </span>
                <span className="hm-fchip hm-fc3" style={{ "--d": "#25d366" }}>
                  <i></i>WhatsApp
                </span>
                <span className="hm-fchip hm-fc4" style={{ "--d": "#635bff" }}>
                  <i></i>Stripe
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
                    From ad to client, running without you
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
          <i>Counsellors &amp; therapists</i>
          <i>Studio owners</i>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="hm-sec" id="problems" aria-labelledby="hm-prob-h">
        <div className="hm-c">
          <div className="hm-head" style={{ maxWidth: "820px" }}>
            <h2 id="hm-prob-h">
              A good offer needs a path to the customer. <em>We build it.</em>
            </h2>
          </div>
          <div className="hm-pcs">
            {PROBLEMS.map(([k, no, yes]) => (
              <div className="hm-pc" key={no}>
                <Ico>{ICONS[k]}</Ico>
                <p className="hm-pc-no">
                  <small>Without a system</small>
                  {no}
                </p>
                <p className="hm-pc-yes">
                  <small>With Falcoon</small>
                  {yes}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        className="hm-sec hm-dk hm-how"
        id="system"
        aria-labelledby="hm-how-h"
      >
        <div className="hm-c">
          <div className="hm-head hm-sys-h">
            <div>
              <h2 id="hm-how-h">
                Three steps. <em>We do the work.</em>
              </h2>
            </div>
            <p className="hm-lead">
              You deliver the service. Falcoon builds and runs the system behind
              the sale.
            </p>
          </div>

          <ol className="hm-steps">
            {STEPS.map(([k, t, x], i) => (
              <li key={t}>
                <Ico>{ICONS[k]}</Ico>
                <span className="hm-sn">Step {i + 1}</span>
                <h3>{t}</h3>
                <p>{x}</p>
              </li>
            ))}
          </ol>
          {cta(true)}
        </div>
      </section>

      {/* WHAT CAN YOU SELL */}
      <section
        className="hm-sec hm-hl"
        id="services"
        aria-labelledby="hm-sell-h"
      >
        <div className="hm-c">
          <div className="hm-head hm-center">
            <h2 id="hm-sell-h">
              One offer. One funnel.{" "}
              <em className="hm-mark">Built to sell it.</em>
            </h2>
          </div>

          <div className="hm-grid3">
            <article className="hm-svc hm-feat">
              <Ico>{ICONS.programme}</Ico>
              <span className="hm-tag">Most popular</span>
              <h3>Fitness Programmes</h3>
              <p>
                Sell your online plan with a page that explains the result,
                takes payment and gives instant access.
              </p>
              <Link href="/sell-fitness-programmes" className="hm-more">
                Explore programmes →
              </Link>
            </article>

            <article className="hm-svc">
              <Ico>{ICONS.box}</Ico>
              <span className="hm-tag">High income</span>
              <h3>Fitness Products</h3>
              <p>
                Digital or physical products with a simple checkout, order bump
                and automatic delivery.
              </p>
              <Link href="/sell-fitness-products" className="hm-more">
                Explore products →
              </Link>
            </article>

            <article className="hm-svc">
              <Ico>{ICONS.chat}</Ico>
              <span className="hm-tag">Easy cashflow</span>
              <h3>Coaching &amp; Counselling</h3>
              <p>
                Paid booking, meeting link and reminders, so your diary fills
                without back-and-forth messages.
              </p>
              <Link href="/sell-consultations" className="hm-more">
                Explore consultations →
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section
        className="hm-sec hm-ivory"
        id="work-with-us"
        aria-labelledby="hm-price-h"
      >
        <div className="hm-c">
          <div className="hm-head hm-center">
            <h2 id="hm-price-h">
              Start with the funnel. <em>Add ads when you&apos;re ready.</em>
            </h2>
            <p className="hm-lead">
              Pay once for the build. Add only the extras you need.
            </p>
          </div>

          <div className="hm-two-way">
            <article className="hm-plan">
              <span className="hm-plan-tag">One-time</span>
              <h3>Funnel Build</h3>
              <p className="hm-plan-price">
                {gbp(CORE.price)} <small>one-time</small>
              </p>
              <ul>
                <li>Landing, checkout and thank-you pages</li>
                <li>Professional copywriting</li>
                <li>Mobile-ready design and SEO basics</li>
                <li>Email notifications connected</li>
                <li>Hosting and domain free for year one</li>
                <li>Add-ons from {gbp(MIN_ADDON)}</li>
              </ul>
              <Link href="/pricing" className="hm-btn hm-d">
                Build My Quote <span>→</span>
              </Link>
            </article>

            <article className="hm-plan hm-plan-feat">
              <span className="hm-plan-tag">Monthly</span>
              <h3>Funnel + Ads</h3>
              <p className="hm-plan-price">
                Quoted to your goals <small>on a free call</small>
              </p>
              <ul>
                <li>Meta and Google Ads setup and management</li>
                <li>Audience and keyword research</li>
                <li>Conversion tracking</li>
                <li>Ongoing optimisation</li>
                <li>Monthly funnel performance review</li>
              </ul>
              <a
                href={CALENDLY}
                className="hm-btn hm-d"
                target="_blank"
                rel="noopener"
              >
                Book a Free Strategy Call <span>→</span>
              </a>
            </article>
          </div>

          <p className="hm-support-note">
            Optional monthly support for your funnel: Care {gbp(CARE.price)} or
            Growth {gbp(GROWTH.price)} a month.
          </p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="hm-sec" id="results" aria-labelledby="hm-res-h">
        <div className="hm-c">
          <div className="hm-head">
            <h2 id="hm-res-h">
              Results from <em>real businesses.</em>
            </h2>
          </div>
          <div className="hm-tgrid">
            <figure className="hm-tq">
              <span className="hm-av" aria-hidden="true">
                JT
              </span>
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
              <span className="hm-av" aria-hidden="true">
                EC
              </span>
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
              <span className="hm-av" aria-hidden="true">
                DW
              </span>
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
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="hm-sec hm-ivory" id="faq">
        <div className="hm-c hm-two hm-faq-grid">
          <div>
            <h2 style={{ margin: "0 0 22px" }}>
              Questions, <em>answered.</em>
            </h2>
            <p className="hm-lead">
              Still unsure? We&apos;ll walk you through everything on a free
              call.
            </p>
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
      <section className="hm-sec hm-dk hm-prop" id="start">
        <div className="hm-c hm-center">
          <h2>
            Ready for a steady flow of <em>clients?</em>
          </h2>
          <p className="hm-lead">
            Tell us what you sell. We&apos;ll show you the funnel, ads and
            follow-up that could fill your diary.
          </p>
          {cta(true, true)}
        </div>
      </section>
    </div>
  );
}
