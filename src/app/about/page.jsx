import Link from "next/link";
import { DM_Sans, Fraunces } from "next/font/google";
import "./about.css";

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

const DESCRIPTION =
  "Falcoon helps UK fitness coaches, programme creators and counsellors sell online with done-for-you funnels, fixed pricing and no hidden fees.";

export const metadata = {
  title: "About Falcoon | Funnels for UK Fitness Coaches & Counsellors",
  description: DESCRIPTION,
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Falcoon | Funnels for UK Fitness Coaches & Counsellors",
    description: DESCRIPTION,
    locale: "en_GB",
    type: "website",
    siteName: "Falcoon",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      name: "About Falcoon",
      description: DESCRIPTION,
    },
    {
      "@type": "ProfessionalService",
      name: "Falcoon",
      description: DESCRIPTION,
      areaServed: { "@type": "Country", name: "United Kingdom" },
    },
  ],
};

export default function AboutUs() {
  return (
    <main className={`abt-page ${dmSans.variable} ${fraunces.variable}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* HERO */}
      <section className="abt-hero">
        <div className="abt-c abt-hero-in abt-solo">
          <div>
            <div className="abt-eyebrow">
              Built for UK fitness &amp; wellbeing professionals
            </div>
            <h1 className="abt-h1">
              <span className="abt-sr">About Falcoon. </span>
              We build the funnel. You keep <em>coaching.</em>
            </h1>
            <p>
              We help fitness professionals across the UK sell and launch their
              coaching, programmes, products and consultations online, with{" "}
              <span className="abt-ul abt-green">
                fixed pricing and no hidden fees.
              </span>
            </p>
            <div className="abt-btns">
              <a
                href={CALENDLY}
                className="abt-btn"
                target="_blank"
                rel="noopener"
              >
                Book Free Website Audit <span>→</span>
              </a>
              <Link href="/pricing" className="abt-btn abt-g">
                View pricing
              </Link>
            </div>
          </div>
        </div>
        <div className="abt-c abt-pillars">
          <div>
            <b>Fixed pricing</b>
            <span>
              One clear price to build your funnel, with no hidden fees.
            </span>
          </div>
          <div>
            <b>Done for you</b>
            <span>We design, write, build and connect everything.</span>
          </div>
          <div>
            <b>Built for the UK</b>
            <span>UK payments, Direct Debit and UK clients in mind.</span>
          </div>
        </div>
      </section>

      {/* PURPOSE */}
      <section className="abt-sec abt-ivory">
        <div className="abt-c">
          <div className="abt-label">01 — What drives us</div>
          <div className="abt-idea-top">
            <h2>
              Our <em>purpose.</em>
            </h2>
            <p className="abt-lead">
              Three things we come back to every time we build something for a
              coach, programme creator or counsellor.
            </p>
          </div>
          <div className="abt-ledger">
            <div>
              <b>01 Mission</b>
              <span>
                Make it <strong>simple and easy</strong> for every UK fitness
                professional to sell and launch online.
              </span>
              <em>Coaching, programmes, products and consultations.</em>
            </div>
            <div>
              <b>02 Vision</b>
              <span>
                Become the UK&apos;s most trusted platform for coaches to build
                successful online businesses.
              </span>
              <em>Nationwide, for every kind of practice.</em>
            </div>
            <div>
              <b>03 Goal</b>
              <span>
                Empower <strong>1000+</strong> UK fitness professionals by 2027
                to launch and sell online.
              </span>
              <em>One funnel at a time.</em>
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="abt-sec abt-dk">
        <div className="abt-c abt-two">
          <div>
            <div className="abt-label">02 — Where it started</div>
            <h2 style={{ marginTop: "20px" }}>
              Our <em>story.</em>
            </h2>
          </div>
          <div>
            <p className="abt-lead">
              We created Falcoon to help talented fitness and wellbeing
              professionals across the UK turn their expertise into successful
              online businesses. Great coaching gets lost behind{" "}
              <span className="abt-ul abt-red">bad funnels</span>, so we{" "}
              <span className="abt-ul abt-green">build the funnel</span> and you
              keep coaching.
            </p>
            <div
              className="abt-stats"
              style={{ marginTop: "44px", marginBottom: 0 }}
            >
              <div>
                <b>1000+</b>
                <span>UK coaches by 2027</span>
              </div>
              <div>
                <b>£249</b>
                <span>Fixed funnel build</span>
              </div>
              <div>
                <b>3 pages</b>
                <span>Live in every build</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE BUILD */}
      <section className="abt-sec">
        <div className="abt-c">
          <div className="abt-head abt-center">
            <div className="abt-label">03 — What we build</div>
            <h2>
              Three funnels. <em>One simple system.</em>
            </h2>
            <p className="abt-lead">
              Whether you sell coaching, programmes, products or counselling
              sessions, we build the funnel and connect every tool for you.
            </p>
          </div>
          <div className="abt-grid3">
            <article className="abt-svc">
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
              <Link href="/sell-fitness-programmes" className="abt-more">
                Explore programmes →
              </Link>
            </article>
            <article className="abt-svc">
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
              <Link href="/sell-fitness-products" className="abt-more">
                Explore products →
              </Link>
            </article>
            <article className="abt-svc">
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
              <Link href="/sell-consultations" className="abt-more">
                Explore consultations →
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* HOW WE WORK + TOOLS */}
      <section className="abt-sec abt-ivory">
        <div className="abt-c">
          <div className="abt-head" style={{ maxWidth: "820px" }}>
            <div className="abt-label">04 — How we work</div>
            <h2>
              Every tool connected, <em>zero effort</em> from you.
            </h2>
            <p className="abt-lead">
              We wire the whole flow together, from the first click to the
              follow-up, using the tools you already know.
            </p>
          </div>
          <div className="abt-grid3">
            <div className="abt-ic">
              <small>Video calls</small>
              <h3>Zoom, Meet or Teams</h3>
              <div className="abt-chips">
                <span className="abt-chip" style={{ "--d": "#2d8cff" }}>
                  <i></i>Zoom
                </span>
                <span className="abt-chip" style={{ "--d": "#00897b" }}>
                  <i></i>Google Meet
                </span>
                <span className="abt-chip" style={{ "--d": "#5059c9" }}>
                  <i></i>Microsoft Teams
                </span>
              </div>
            </div>
            <div className="abt-ic">
              <small>Payments</small>
              <h3>Paid before the session</h3>
              <div className="abt-chips">
                <span className="abt-chip" style={{ "--d": "#635bff" }}>
                  <i></i>Stripe
                </span>
                <span className="abt-chip" style={{ "--d": "#003087" }}>
                  <i></i>PayPal
                </span>
                <span className="abt-chip" style={{ "--d": "#0f9d58" }}>
                  <i></i>GoCardless<em className="abt-uk">UK</em>
                </span>
              </div>
            </div>
            <div className="abt-ic">
              <small>Messaging &amp; automation</small>
              <h3>Follow-ups on autopilot</h3>
              <div className="abt-chips">
                <span className="abt-chip" style={{ "--d": "#25d366" }}>
                  <i></i>WhatsApp
                </span>
                <span className="abt-chip" style={{ "--d": "#ff4a00" }}>
                  <i></i>Zapier
                </span>
                <span className="abt-chip" style={{ "--d": "#6d00cc" }}>
                  <i></i>Make
                </span>
                <span className="abt-chip" style={{ "--d": "#ea4b71" }}>
                  <i></i>n8n
                </span>
              </div>
            </div>
          </div>
          <div className="abt-ledger" style={{ marginTop: "56px" }}>
            <div>
              <b>Fixed pricing</b>
              <span>One fixed price to build your funnel</span>
              <em>No hidden fees, no surprises</em>
            </div>
            <div>
              <b>Done for you</b>
              <span>We design, write, build and test it</span>
              <em>You focus on your clients</em>
            </div>
            <div>
              <b>UK first</b>
              <span>Built around UK payments and Direct Debit</span>
              <em>Stripe, PayPal and GoCardless</em>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE HELP */}
      <section className="abt-sec">
        <div className="abt-c abt-two">
          <div>
            <div className="abt-label">05 — Who we help</div>
            <h2 style={{ marginTop: "20px" }}>
              Built for UK professionals who sell their{" "}
              <em>time and expertise.</em>
            </h2>
          </div>
          <div>
            <p className="abt-lead">
              If people pay you for your knowledge, your sessions or your
              programmes, Falcoon can build the funnel that gets them booked and
              paid.
            </p>
            <div className="abt-tags abt-light" style={{ marginTop: "28px" }}>
              <i>Personal trainers</i>
              <i>Online coaches</i>
              <i>Programme creators</i>
              <i>Counsellors &amp; therapists</i>
              <i>Studio owners</i>
              <i>Nutrition coaches</i>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="abt-cta">
        <div className="abt-c">
          <div className="abt-label">
            For UK fitness &amp; wellbeing professionals
          </div>
          <h2>
            Ready to grow your business <em>across the UK?</em>
          </h2>
          <p>Let&apos;s help you launch and sell successfully.</p>
          <a
            href={CALENDLY}
            className="abt-btn abt-d"
            target="_blank"
            rel="noopener"
          >
            Book Free Website Audit <span>→</span>
          </a>
          <div className="abt-fine">
            Fixed pricing · No hidden fees · No obligation
          </div>
        </div>
      </section>
    </main>
  );
}
