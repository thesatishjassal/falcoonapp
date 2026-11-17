import Link from "next/link";
import "./home-v2.css";
// import { dmSans, fraunces, GOOGLE_FONTS_URL } from "./fonts";
import { SERVICES, CARES, MIN_BUILD, MIN_TERM_MONTHS, ADS, gbp } from "./components/falcoon-pricing";

const CALENDLY = "https://calendly.com/thesatishjassal/free-strategy-call-uk";

// Every Falcoon price comes from components/falcoon-pricing.js.
const CARE = CARES.find((c) => c.id === "care");
const GROWTH = CARES.find((c) => c.id === "growth");
const MAX_BUILD = Math.max(...SERVICES.flatMap((s) => s.builds.map((b) => b.price)));
const fromPrice = (id) => gbp(Math.min(...SERVICES.find((s) => s.id === id).builds.map((b) => b.price)));

/* ------------------------------------------------------------------ */
/* Icons: one small inline set. Decorative; text always sits beside.   */
/* ------------------------------------------------------------------ */
const ICONS = {
  inbox: <path d="M3 13l3-8h12l3 8v6H3zM3 13h5l1 3h6l1-3h5" />,
  bell: <path d="M6 16v-5a6 6 0 0112 0v5l2 2H4zM10 21h4" />,
  target: (<><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.2" /></>),
  card: (<><rect x="3" y="6" width="18" height="13" rx="2" /><path d="M3 11h18M7 15h4" /></>),
  calendar: (<><rect x="3.5" y="5" width="17" height="15" rx="2" /><path d="M3.5 10h17M8 3v4M16 3v4" /></>),
  box: <path d="M12 3l8 4v10l-8 4-8-4V7zM4 7l8 4 8-4M12 11v10" />,
  chat: <path d="M4 5h16v11H9l-5 4z" />,
  layout: (<><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18M9 9v11" /></>),
  zap: <path d="M13 2L4 14h7l-1 8 9-12h-7z" />,
  table: (<><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 10h18M3 15h18M9 4v16" /></>),
  play: (<><circle cx="12" cy="12" r="9" /><path d="M10 8.5l5.5 3.5-5.5 3.5z" /></>),
  form: (<><rect x="5" y="3" width="14" height="18" rx="2" /><path d="M9 8h6M9 12h6M9 16h3" /></>),
  phone: (<><rect x="7" y="2.5" width="10" height="19" rx="2" /><path d="M11 18.5h2" /></>),
  rocket: <path d="M5 15c-1.5 1.5-2 4-2 6 2 0 4.5-.5 6-2M9 15l-3-3 2-4c3-5 7-6 12-6 0 5-1 9-6 12l-4 2zM15 9h.01" />,
  pointer: <path d="M5 3l14 7-6 2-2 6z" />,
  lock: (<><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V8a4 4 0 018 0v3" /></>),
  shield: (<><path d="M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6z" /><path d="M9 12l2 2 4-4" /></>),
  star: <path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z" />,
  scale: <path d="M12 3v18M5 7h14M5 7l-3 7a3 3 0 006 0zM19 7l-3 7a3 3 0 006 0zM8 21h8" />,
  check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  key: (<><circle cx="8" cy="15" r="4" /><path d="M11 12l9-9M17 6l3 3" /></>),
  heart: <path d="M12 20s-7-4.4-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.6-7 10-7 10z" />,
  megaphone: <path d="M3 11v2a1 1 0 001 1h3l7 4V6L7 10H4a1 1 0 00-1 1zM18 9a4 4 0 010 6" />,
};

function Icon({ name, size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      {ICONS[name]}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Content                                                            */
/* ------------------------------------------------------------------ */
const ROTATE = ["programme", "products", "sessions", "counselling", "coaching"];

const TRUST = [
  ["card", "Paid into your own account"],
  ["key", "No tech skills needed"],
  ["lock", "No client notes stored"],
];

// Hero animation: an illustrative example, not real client data.
const SCENES = [
  {
    key: "programmes",
    tab: "Programmes",
    rows: [
      ["megaphone", "#0866ff", "Instagram ad: 12-week programme", "Lands on one clear page"],
      ["chat", "#25d366", "WhatsApp reply in seconds", "Goals and availability asked"],
      ["calendar", "#b89655", "Call booked Thu 10:00", "Added to your calendar"],
    ],
    result: ["New client", "Welcome message and check-in sent"],
  },
  {
    key: "products",
    tab: "Products",
    rows: [
      ["layout", "#0866ff", "12-week strength plan, £49", "From a link in your bio"],
      ["card", "#635bff", "Recipe book added, +£9", "One-tap order bump"],
      ["box", "#ea4335", "Download emailed instantly", "Receipt and review request queued"],
    ],
    result: ["£58 order", "Delivered without you"],
  },
  {
    key: "sessions",
    tab: "Sessions",
    rows: [
      ["target", "#ea4335", "Search: online counsellor", "Lands on your booking page"],
      ["card", "#635bff", "Tue 11:30 chosen, £75 paid", "Slot confirmed only once paid"],
      ["bell", "#2d8cff", "Meet link and reminders sent", "24 hours and 2 hours before"],
    ],
    result: ["£75 paid", "Before the session"],
  },
];

const TOOLS = ["Stripe", "Shopify", "Calendly", "WhatsApp", "Google Meet", "Zoom", "GoCardless", "Make.com", "Meta Ads", "Google Ads"];

const PAIRS = [
  ["inbox", "Leads buried in Instagram and WhatsApp", "Every lead captured and answered"],
  ["bell", "Chasing people by hand to book or pay", "Reminders and follow-ups sent for you"],
  ["target", "Ads sending people to a general website", "One page built to sell one offer"],
  ["card", "Booking and payment handled separately", "Book and pay in one smooth step"],
];

const SERVICE_CARDS = [
  {
    id: "consultations",
    icon: "calendar",
    title: "Coaching & Counselling",
    who: "Counsellors, therapists and coaches",
    blurb: "Paid booking, a meeting link and reminders, so your diary fills without back-and-forth messages.",
    points: ["Pay at booking", "Auto Meet or Zoom links", "No-show handling"],
    href: "/sell-consultations",
    mock: "slot",
  },
  {
    id: "products",
    icon: "box",
    title: "Fitness Products",
    who: "Plans, ebooks and supplements",
    blurb: "A simple checkout with an order bump, and instant delivery for digital products.",
    points: ["Stripe or Shopify", "Instant downloads", "Reorder reminders"],
    href: "/sell-fitness-products",
    mock: "checkout",
  },
  {
    id: "programmes",
    icon: "chat",
    title: "Fitness Programmes",
    who: "Online coaching programmes",
    blurb: "One clear page, WhatsApp replies that qualify leads, and booked calls that turn into clients.",
    points: ["WhatsApp auto-replies", "Qualified calls only", "Monthly payments"],
    href: "/sell-fitness-programmes",
    mock: "chat",
  },
];

const HOW = [
  ["pointer", "Choose your service", "Pick consultations, products or programmes, and see your price straight away."],
  ["form", "Fill in one form", "Your details, offer and prices. About 10 minutes, no meetings."],
  ["zap", "We build and connect it", "Page, payments, booking and automations, tested on every path."],
  ["rocket", "You go live", "Approve a preview, verify payments on your phone, and start selling."],
];

const INCLUDED = [
  ["layout", "Page and copy", "Written and designed around one offer."],
  ["card", "Payments", "Stripe, PayPal, Apple Pay, Google Pay, Direct Debit."],
  ["zap", "Automations", "Reminders, follow-ups and delivery with Make.com."],
  ["table", "Simple tracker", "Every lead, booking and sale in one sheet."],
  ["key", "One login", "A Google Workspace email that opens everything."],
  ["play", "Handover video", "A short walkthrough and a one-page guide."],
];

const SAFEGUARDS = [
  ["lock", "Your money, your accounts", "Payments go straight to you. Stripe, Shopify and your domain stay in your name."],
  ["shield", "Privacy first", "No client notes or clinical details, ever. Discreet reminders for counselling."],
  ["star", "Real reviews only", "We only show genuine customer reviews, as UK rules expect."],
  ["scale", "No promised numbers", "We build the system. Results depend on your offer and traffic, and we say so."],
];

/*
  TESTIMONIALS: publish only quotes from real clients who agreed to be named,
  and only results you can back up with evidence. UK rules treat fake or
  unverifiable reviews strictly. Delete any entry that doesn't meet that bar;
  the section hides itself when this list is empty.
*/
const TESTIMONIALS = [
  {
    initials: "JT",
    name: "James Turner",
    role: "Gym Owner, Manchester",
    quote: "Falcoon helped me automate my gym operations completely. From memberships to payments, everything is smooth now. I saved hours every day.",
    result: "+40% time saved",
  },
  {
    initials: "EC",
    name: "Dr. Emily Carter",
    role: "Consultant Psychologist, Clinical Psychology",
    quote: "My client bookings increased after using Falcoon. The system looks professional and clients trust it more than WhatsApp bookings.",
    result: "+60% bookings",
  },
  {
    initials: "DW",
    name: "Daniel Wright",
    role: "Fitness Studio Owner, Leeds",
    quote: "Before Falcoon, I was managing everything manually. Now I track clients, payments and progress in one place.",
    result: "All-in-one system",
  },
];

const SITE_TITLE = "Falcoon | Funnels and Ads for UK Fitness and Wellbeing Professionals";
const SITE_DESCRIPTION = `Falcoon builds your funnel, sets up your ads and follows up every lead, so enquiries become paying clients. Done-for-you from ${gbp(MIN_BUILD)} one-time for UK coaches, trainers and counsellors.`;

export const metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: [
    "fitness coach funnel UK",
    "done-for-you funnel",
    "counsellor online booking and payments",
    "sell fitness programmes online",
    "sell fitness products online",
    "Meta ads for personal trainers",
    "UK coaching automation",
  ],
  alternates: { canonical: "/" },
  openGraph: { title: SITE_TITLE, description: SITE_DESCRIPTION, locale: "en_GB", type: "website", siteName: "Falcoon" },
  twitter: { card: "summary_large_image", title: SITE_TITLE, description: SITE_DESCRIPTION },
};

const FAQS = [
  {
    q: "What exactly do I get?",
    a: "A complete funnel built around one offer: your page and copy, booking or checkout, and the automations behind it (reminders, follow-ups, delivery), connected to your own payment accounts and tested before launch.",
  },
  {
    q: "How much does it cost?",
    a: `Builds are ${gbp(MIN_BUILD)} or ${gbp(MAX_BUILD)} one-time, depending on the package. Optional Care is ${gbp(CARE.monthly)} a month or ${gbp(GROWTH.monthly)} for Growth Care. Ads setup is ${gbp(ADS.price)}; ongoing ad management is quoted on a free call.`,
  },
  {
    q: "Which service is right for me?",
    a: "Selling sessions or counselling: Coaching & Counselling. Selling plans, ebooks or supplements: Fitness Products. Selling online coaching through calls: Fitness Programmes. The pricing page shows each one side by side.",
  },
  {
    q: "Do I need technical skills?",
    a: "No. You fill in one form and verify your payment account on your phone. We set up a single login, connect every tool, test everything and send you a short video walkthrough.",
  },
  {
    q: "Can counsellors and therapists use Falcoon?",
    a: "Yes. Clients book, pay and get their meeting link automatically. We build the funnel only and never handle session content or client records.",
  },
  {
    q: "Do I have to buy ads too?",
    a: "No. Start with the funnel and add ads when you want more traffic. Ads work best on a page built for your offer, which is why we offer both.",
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
      priceRange: `From ${gbp(MIN_BUILD)}`,
      serviceType: ["Done-for-you sales funnels", "Booking and payment funnels for counsellors", "Meta and Google Ads"],
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ],
};

/* Small illustrated previews on the service cards (decorative) */
function Mock({ kind }) {
  if (kind === "slot")
    return (
      <div className="hv-mock" aria-hidden="true">
        <div className="hv-mock-days"><span>Mon</span><span className="on">Tue</span><span>Wed</span><span>Thu</span></div>
        <div className="hv-mock-slots"><span>09:30</span><span className="on">11:30</span><span>14:00</span></div>
        <div className="hv-mock-pay">£75 · Paid <Icon name="check" size={14} /></div>
      </div>
    );
  if (kind === "checkout")
    return (
      <div className="hv-mock" aria-hidden="true">
        <div className="hv-mock-row"><span>Strength plan</span><b>£49</b></div>
        <div className="hv-mock-bump">+ Recipe book <b>£9</b></div>
        <div className="hv-mock-row hv-mock-total"><span>Total</span><b>£58</b></div>
        <div className="hv-mock-pay">Download sent <Icon name="check" size={14} /></div>
      </div>
    );
  return (
    <div className="hv-mock" aria-hidden="true">
      <p className="hv-bub in">Is it good for beginners?</p>
      <p className="hv-bub out">Yes! How many days can you train?</p>
      <p className="hv-bub in">3 or 4</p>
      <div className="hv-mock-pay">Call booked <Icon name="check" size={14} /></div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div>
      {/* Fonts load in the browser, so the build never has to reach Google */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      {/* <link rel="stylesheet" href={GOOGLE_FONTS_URL} precedence="default" /> */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="hv-hero" aria-labelledby="hv-h1">
        <div className="hv-c hv-hero-in">
          <div className="hv-hero-copy">
            <p className="hv-eyebrow">For UK fitness and wellbeing professionals</p>
            <h1 id="hv-h1">
              <span className="hv-sr">Turn your offer into paying clients, on autopilot.</span>
              <span aria-hidden="true">
                Turn your{" "}
                <span className="hv-rot">
                  <span className="hv-rot-track">
                    {ROTATE.concat(ROTATE[0]).map((w, i) => <b key={i}>{w}</b>)}
                  </span>
                </span>
                <br />
                into <em>paying clients.</em>
              </span>
            </h1>
            <p className="hv-sub">
              We build your page, payments and follow-ups, and set up your ads, so
              enquiries become booked, paid clients while you focus on the work.
            </p>
            <div className="hv-ctas">
              <Link href="/pricing" className="hv-btn hv-btn-gold">
                See pricing <span aria-hidden="true">→</span>
              </Link>
              <a href={CALENDLY} className="hv-btn hv-btn-ghost" target="_blank" rel="noopener">
                Book a free strategy call
              </a>
            </div>
            <p className="hv-price">
              <b>From {gbp(MIN_BUILD)}</b> one-time · Optional Care from {gbp(CARE.monthly)}/month
            </p>
            <ul className="hv-trust" aria-label="Why it's safe">
              {TRUST.map(([i, t]) => (
                <li key={t}><Icon name={i} size={17} />{t}</li>
              ))}
            </ul>
          </div>

          <div className="hv-visual" role="img" aria-label="Illustrative example: an ad brings a visitor to a page, they book or buy, and follow-ups run automatically, shown for programmes, products and sessions.">
            <div className="hv-glow" aria-hidden="true" />
            <div className="hv-device" aria-hidden="true">
              <div className="hv-device-top">
                <b>This week</b>
                <span className="hv-tag">Example</span>
              </div>
              <div className="hv-tabs">
                {SCENES.map((s, i) => <span key={s.key} style={{ "--i": i }}>{s.tab}</span>)}
              </div>
              <div className="hv-stage">
                {SCENES.map((s, i) => (
                  <div className="hv-scene" key={s.key} style={{ "--i": i }}>
                    {s.rows.map(([ic, col, t, sub], r) => (
                      <div className="hv-row" key={t} style={{ "--r": r }}>
                        <span className="hv-row-ico" style={{ "--c": col }}><Icon name={ic} size={16} /></span>
                        <div><strong>{t}</strong><small>{sub}</small></div>
                      </div>
                    ))}
                    <div className="hv-row hv-result" style={{ "--r": 3 }}>
                      <span className="hv-row-ico hv-ok"><Icon name="check" size={16} /></span>
                      <div><strong>{s.result[0]}</strong><small>{s.result[1]}</small></div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="hv-rail"><span /></div>
              <p className="hv-device-foot">From first click to paid client</p>
            </div>
            <span className="hv-float hv-f1" aria-hidden="true"><i style={{ "--c": "#635bff" }} />Stripe</span>
            <span className="hv-float hv-f2" aria-hidden="true"><i style={{ "--c": "#25d366" }} />WhatsApp</span>
            <span className="hv-float hv-f3" aria-hidden="true"><i style={{ "--c": "#0866ff" }} />Meta Ads</span>
          </div>
        </div>

        <div className="hv-c hv-tools">
          <span>Works with</span>
          <ul aria-label="Connected tools">{TOOLS.map((t) => <li key={t}>{t}</li>)}</ul>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className="hv-sec" id="problems" aria-labelledby="hv-prob-h">
        <div className="hv-c">
          <div className="hv-head">
            <p className="hv-label">Why Falcoon</p>
            <h2 id="hv-prob-h">A good offer needs a path to the customer. <em>We build it.</em></h2>
          </div>
          <ul className="hv-pairs">
            {PAIRS.map(([ic, no, yes]) => (
              <li key={no}>
                <span className="hv-ico"><Icon name={ic} /></span>
                <p className="hv-no"><small>Without a system</small>{no}</p>
                <p className="hv-yes"><small>With Falcoon</small>{yes}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SERVICES HUB */}
      <section className="hv-sec hv-ivory" id="services" aria-labelledby="hv-svc-h">
        <div className="hv-c">
          <div className="hv-head hv-center">
            <p className="hv-label">What do you sell?</p>
            <h2 id="hv-svc-h">One offer. One funnel. <em>Built to sell it.</em></h2>
            <p className="hv-lead">Pick your service to see exactly how it works and what it costs.</p>
          </div>
          <div className="hv-services">
            {SERVICE_CARDS.map((s) => (
              <article className="hv-svc" key={s.id} aria-labelledby={`hv-s-${s.id}`}>
                <Mock kind={s.mock} />
                <div className="hv-svc-body">
                  <p className="hv-svc-who"><span className="hv-ico hv-ico-sm"><Icon name={s.icon} size={18} /></span>{s.who}</p>
                  <h3 id={`hv-s-${s.id}`}>{s.title}</h3>
                  <p>{s.blurb}</p>
                  <ul>{s.points.map((p) => <li key={p}><Icon name="check" size={16} />{p}</li>)}</ul>
                  <div className="hv-svc-foot">
                    <span className="hv-from">From <b>{fromPrice(s.id)}</b></span>
                    <Link href={s.href} className="hv-more">
                      Explore <span className="hv-sr">{s.title}</span> <Icon name="arrow" size={16} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="hv-sec hv-dk" id="how" aria-labelledby="hv-how-h">
        <div className="hv-c">
          <div className="hv-head">
            <p className="hv-label">How it works</p>
            <h2 id="hv-how-h">Live in four steps. <em>You do about 20 minutes.</em></h2>
            <p className="hv-lead">No meetings, no screen-sharing, no API keys. We set up one login and connect everything for you.</p>
          </div>
          <ol className="hv-how">
            {HOW.map(([ic, t, x], i) => (
              <li key={t}>
                <span className="hv-ico"><Icon name={ic} /></span>
                <span className="hv-step">Step {i + 1}</span>
                <h3>{t}</h3>
                <p>{x}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* INCLUDED */}
      <section className="hv-sec" id="included" aria-labelledby="hv-inc-h">
        <div className="hv-c">
          <div className="hv-head hv-center">
            <p className="hv-label">In every build</p>
            <h2 id="hv-inc-h">Everything a funnel needs. <em>Nothing to piece together.</em></h2>
          </div>
          <ul className="hv-tiles">
            {INCLUDED.map(([ic, t, x]) => (
              <li key={t}>
                <span className="hv-ico"><Icon name={ic} /></span>
                <strong>{t}</strong>
                <p>{x}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PRICING */}
      <section className="hv-sec hv-ivory" id="pricing" aria-labelledby="hv-price-h">
        <div className="hv-c">
          <div className="hv-head hv-center">
            <p className="hv-label">Pricing</p>
            <h2 id="hv-price-h">Simple, fixed <em>prices.</em></h2>
            <p className="hv-lead">Pay once for the build. Add Care if you&apos;d rather never touch the tech.</p>
          </div>
          <div className="hv-prices">
            <article className="hv-pcard">
              <span className="hv-ico"><Icon name="layout" /></span>
              <h3>Done-for-you build</h3>
              <p className="hv-pbig">{gbp(MIN_BUILD)} or {gbp(MAX_BUILD)}<small> one-time</small></p>
              <p>Depending on the package. Page, payments and automations, tested and handed over.</p>
              <Link href="/pricing#quote" className="hv-btn hv-btn-dark">Build my quote <span aria-hidden="true">→</span></Link>
            </article>
            <article className="hv-pcard hv-pcard-pop">
              <span className="hv-pop">Most popular</span>
              <span className="hv-ico"><Icon name="heart" /></span>
              <h3>Monthly Care</h3>
              <p className="hv-pbig">{gbp(CARE.monthly)} or {gbp(GROWTH.monthly)}<small>/month</small></p>
              <p>Hosting, email, automations, fixes and edits in one bill. {MIN_TERM_MONTHS}-month minimum, then monthly.</p>
              <Link href="/pricing#care" className="hv-btn hv-btn-gold">Compare Care plans <span aria-hidden="true">→</span></Link>
            </article>
            <article className="hv-pcard">
              <span className="hv-ico"><Icon name="megaphone" /></span>
              <h3>Ads</h3>
              <p className="hv-pbig">{gbp(ADS.price)}<small> setup</small></p>
              <p>Meta and Google Ads set up for you. Ongoing management is quoted to your goals on a free call.</p>
              <a href={CALENDLY} className="hv-btn hv-btn-dark" target="_blank" rel="noopener">Talk about ads <span aria-hidden="true">→</span></a>
            </article>
          </div>
        </div>
      </section>

      {/* SAFEGUARDS */}
      <section className="hv-sec hv-dk" id="safeguards" aria-labelledby="hv-safe-h">
        <div className="hv-c">
          <div className="hv-head">
            <p className="hv-label">Honest by design</p>
            <h2 id="hv-safe-h">Built for UK rules <em>and real trust.</em></h2>
          </div>
          <ul className="hv-tiles hv-tiles-dk">
            {SAFEGUARDS.map(([ic, t, x]) => (
              <li key={t}>
                <span className="hv-ico"><Icon name={ic} /></span>
                <strong>{t}</strong>
                <p>{x}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* TESTIMONIALS: only renders when there are real, approved quotes */}
      {TESTIMONIALS.length > 0 && (
        <section className="hv-sec" id="results" aria-labelledby="hv-res-h">
          <div className="hv-c">
            <div className="hv-head">
              <p className="hv-label">Clients</p>
              <h2 id="hv-res-h">What clients <em>say.</em></h2>
            </div>
            <div className="hv-quotes">
              {TESTIMONIALS.map((t) => (
                <figure key={t.name}>
                  <blockquote>{t.quote}</blockquote>
                  <figcaption>
                    <span className="hv-av" aria-hidden="true">{t.initials}</span>
                    <span><b>{t.name}</b><small>{t.role}</small></span>
                    {t.result && <em>{t.result}</em>}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="hv-sec hv-ivory" id="faq" aria-labelledby="hv-faq-h">
        <div className="hv-c hv-faq-grid">
          <div>
            <p className="hv-label">FAQ</p>
            <h2 id="hv-faq-h">Questions, <em>answered.</em></h2>
            <p className="hv-lead">Still unsure? We&apos;ll walk you through everything on a free call.</p>
          </div>
          <div className="hv-faq">
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
      <section className="hv-final" id="start" aria-labelledby="hv-final-h">
        <div className="hv-c hv-center">
          <h2 id="hv-final-h">Ready for a steady flow of <em>clients?</em></h2>
          <p className="hv-lead">Tell us what you sell. We&apos;ll show you the page, payments and follow-ups that fit.</p>
          <div className="hv-ctas hv-ctas-c">
            <a href={CALENDLY} className="hv-btn hv-btn-gold" target="_blank" rel="noopener">
              Book a free strategy call <span aria-hidden="true">→</span>
            </a>
            <Link href="/pricing" className="hv-btn hv-btn-ghost">See pricing</Link>
          </div>
        </div>
      </section>

      {/* Mobile sticky bar */}
      <nav className="hv-mbar" aria-label="Quick actions">
        <Link href="/pricing" className="hv-mbar-price"><b>From {gbp(MIN_BUILD)}</b><span>See pricing</span></Link>
        <a href={CALENDLY} className="hv-btn hv-btn-gold" target="_blank" rel="noopener">Free call <span aria-hidden="true">→</span></a>
      </nav>
    </div>
  );
}
