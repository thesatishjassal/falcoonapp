import Link from "next/link";
import { DM_Sans, Fraunces } from "next/font/google";
import "./home.css";

const CALENDLY = "https://calendly.com/thesatishjassal/free-strategy-call-uk";

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
              {/* <Link href="/work" className="hm-btn hm-g">
                View our work
              </Link> */}
            </div>
          </div>
          <div className="hm-hv" aria-hidden="true">
            <div className="hm-phone hm-dashphone">
              <div className="hm-ph-h">
                <b>This week</b>
                <span className="hm-badge">Example</span>
              </div>
              <div className="hm-ds">
                <div>
                  <strong>Programmes</strong>
                  <small>WhatsApp leads qualified</small>
                </div>
                <em>5 leads</em>
              </div>
              <div className="hm-ds">
                <div>
                  <strong>Products</strong>
                  <small>Orders delivered automatically</small>
                </div>
                <em>£312</em>
              </div>
              <div className="hm-ds">
                <div>
                  <strong>Counselling &amp; consultations</strong>
                  <small>Zoom, Meet or Teams, paid first</small>
                </div>
                <em>£225</em>
              </div>
              <div className="hm-lock-foot">All of it running without you</div>
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
      <section className="hm-sec hm-ivory" id="tools">
        <div className="hm-c">
          <div className="hm-head hm-center">
            <div className="hm-label">05 — Tools &amp; automation</div>
            <h2>
              Every tool, one funnel. <em>Zero effort</em> from you.
            </h2>
            <p className="hm-lead">
              We wire in the tools you already use. You don&apos;t set up a
              thing.
            </p>
          </div>

          <div className="hm-tools-grid">
            <div className="hm-tile">
              <h3>Video calls</h3>
              <div className="hm-chips">
                <span className="hm-chip" style={{ "--d": "#2d8cff" }}>
                  <i></i>Zoom
                </span>
                <span className="hm-chip" style={{ "--d": "#00897b" }}>
                  <i></i>Google Meet
                </span>
                <span className="hm-chip" style={{ "--d": "#5059c9" }}>
                  <i></i>Microsoft Teams
                </span>
              </div>
            </div>
            <div className="hm-tile">
              <h3>Booking</h3>
              <div className="hm-chips">
                <span className="hm-chip" style={{ "--d": "#006bff" }}>
                  <i></i>Calendly
                </span>
                <span className="hm-chip" style={{ "--d": "#4285f4" }}>
                  <i></i>Google Calendar
                </span>
                <span className="hm-chip" style={{ "--d": "#0078d4" }}>
                  <i></i>Outlook
                </span>
              </div>
            </div>
            <div className="hm-tile">
              <h3>Payments</h3>
              <div className="hm-chips">
                <span className="hm-chip" style={{ "--d": "#635bff" }}>
                  <i></i>Stripe
                </span>
                <span className="hm-chip" style={{ "--d": "#003087" }}>
                  <i></i>PayPal
                </span>
                <span className="hm-chip" style={{ "--d": "#0f9d58" }}>
                  <i></i>GoCardless<em className="hm-uk">UK</em>
                </span>
              </div>
            </div>
            <div className="hm-tile">
              <h3>Messaging</h3>
              <div className="hm-chips">
                <span className="hm-chip" style={{ "--d": "#25d366" }}>
                  <i></i>WhatsApp Business
                </span>
                <span className="hm-chip" style={{ "--d": "#ea4335" }}>
                  <i></i>Email
                </span>
                <span className="hm-chip" style={{ "--d": "#6b6b6b" }}>
                  <i></i>SMS
                </span>
                <span className="hm-chip" style={{ "--d": "#ffb800" }}>
                  <i></i>Mailchimp
                </span>
              </div>
            </div>
            <div className="hm-tile">
              <h3>Automation</h3>
              <div className="hm-chips">
                <span className="hm-chip" style={{ "--d": "#ff4a00" }}>
                  <i></i>Zapier
                </span>
                <span className="hm-chip" style={{ "--d": "#6d00cc" }}>
                  <i></i>Make
                </span>
                <span className="hm-chip" style={{ "--d": "#ea4b71" }}>
                  <i></i>n8n
                </span>
                <span className="hm-chip" style={{ "--d": "#ff7a59" }}>
                  <i></i>HubSpot
                </span>
              </div>
            </div>
            <div className="hm-tile hm-tile-note">
              <h3>UK tools too</h3>
              <div className="hm-chips">
                <span className="hm-chip" style={{ "--d": "#1f4e8c" }}>
                  <i></i>FreeAgent<em className="hm-uk">UK</em>
                </span>
                <span className="hm-chip" style={{ "--d": "#222" }}>
                  <i></i>PT Distinction<em className="hm-uk">UK</em>
                </span>
              </div>
              <p>
                Using something else? If it connects through Zapier or Make, we
                can wire it in.
              </p>
            </div>
          </div>

          <div className="hm-chain-wrap">
            <p className="hm-chain-cap">
              Once live, every booking runs <em>like this.</em>
            </p>
            <ol className="hm-chain">
              <li>
                <strong>Lead arrives</strong>
                <small>Page, ad or WhatsApp</small>
              </li>
              <li>
                <strong>Time chosen</strong>
                <small>Calendly or your calendar</small>
              </li>
              <li>
                <strong>Payment taken</strong>
                <small>Stripe, PayPal or GoCardless</small>
              </li>
              <li>
                <strong>Link sent</strong>
                <small>Zoom, Meet or Teams</small>
              </li>
              <li>
                <strong>Reminders</strong>
                <small>Email, WhatsApp or SMS</small>
              </li>
              <li>
                <strong>Follow-up</strong>
                <small>Zapier, Make or n8n</small>
              </li>
            </ol>
          </div>

          <a href="#prices" className="hm-bridge">
            Now the numbers: what UK coaches charge <span>↓</span>
          </a>
        </div>
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
          <Link href="/pricing" className="hm-btn hm-d">
            View pricing &amp; get proposal →
          </Link>
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
              Book Free Website Audit →
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
      <section className="hm-cta">
        <div className="hm-c">
          <div className="hm-label">Limited spots available this month</div>
          <h2>
            Get your first paying fitness client in days, <em>not months.</em>
          </h2>
          <p>
            We build your complete funnel, content and automation so you can
            focus on coaching.
          </p>
          <a
            href={CALENDLY}
            className="hm-btn hm-d"
            target="_blank"
            rel="noopener"
          >
            Book Free Website Audit <span>→</span>
          </a>
          <div className="hm-fine">
            No commitment · Done-for-you system · Results-focused
          </div>
        </div>
      </section>
    </div>
  );
}
