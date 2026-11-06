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
  "Falcoon builds done-for-you funnels for UK fitness coaches, programme creators and counsellors, with fixed pricing and no hidden fees.";

export const metadata = {
  title: "About Falcoon | Funnels for UK Fitness Coaches",
  description: DESCRIPTION,
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Falcoon | Funnels for UK Fitness Coaches",
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

/* Simple line icons (inherit colour, decorative) */
const Ico = ({ children }) => (
  <span className="abt-ico" aria-hidden="true">
    <svg
      viewBox="0 0 24 24"
      width="30"
      height="30"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  </span>
);

const ICONS = {
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.2" />
    </>
  ),
  eye: (
    <>
      <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" />
      <circle cx="12" cy="12" r="3" />
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

const SERVICES = [
  [
    "programme",
    "Sell Fitness Programmes",
    "A client system that brings leads daily, not randomly.",
    "/sell-fitness-programmes",
    "Explore programmes",
  ],
  [
    "box",
    "Sell Fitness Products",
    "A store and checkout that sell supplements, plans and digital products 24/7.",
    "/sell-fitness-products",
    "Explore products",
  ],
  [
    "chat",
    "Sell Consultations",
    "Clients book and pay before they talk to you.",
    "/sell-consultations",
    "Explore consultations",
  ],
];

const WORKS_WITH = [
  ["Stripe", "#635bff"],
  ["PayPal", "#003087"],
  ["GoCardless", "#0f9d58"],
  ["Zoom", "#2d8cff"],
  ["Google Meet", "#00897b"],
  ["Microsoft Teams", "#5059c9"],
  ["WhatsApp", "#25d366"],
  ["Zapier", "#ff4a00"],
  ["Make", "#6d00cc"],
];

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
              We build the funnel that lets UK fitness professionals sell their
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

      {/* STORY + PURPOSE */}
      <section className="abt-sec abt-dk" aria-labelledby="abt-story-h">
        <div className="abt-c abt-two">
          <div>
            <h2 id="abt-story-h">
              Our <em>story.</em>
            </h2>
          </div>
          <div>
            <p className="abt-lead">
              We created Falcoon to help fitness and wellbeing professionals
              across the UK turn their expertise into online businesses. Great
              coaching gets lost behind{" "}
              <span className="abt-ul abt-red">bad funnels</span>, so we{" "}
              <span className="abt-ul abt-green">build the funnel</span> and you
              keep coaching. Falcoon is new, so every early client gets our full
              attention.
            </p>

            <div className="abt-mv">
              <div>
                <Ico>{ICONS.target}</Ico>
                <h3>Mission</h3>
                <p>
                  Make it simple and easy for every UK fitness professional to
                  sell and launch online.
                </p>
              </div>
              <div>
                <Ico>{ICONS.eye}</Ico>
                <h3>Vision</h3>
                <p>
                  Become the UK&apos;s most trusted partner for coaches building
                  online businesses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE BUILD */}
      <section className="abt-sec" aria-labelledby="abt-build-h">
        <div className="abt-c">
          <div className="abt-head abt-center">
            <h2 id="abt-build-h">
              Three funnels. <em>One simple system.</em>
            </h2>
            <p className="abt-lead">
              Whatever you sell, we build the funnel and connect every tool for
              you.
            </p>
          </div>

          <div className="abt-cols">
            {SERVICES.map(([k, t, x, href, label]) => (
              <article key={t}>
                <Ico>{ICONS[k]}</Ico>
                <h3>{t}</h3>
                <p>{x}</p>
                <Link href={href} className="abt-more">
                  {label} →
                </Link>
              </article>
            ))}
          </div>

          <div className="abt-works">
            <div className="abt-sl">Works with the tools you already use</div>
            <div className="abt-chips">
              {WORKS_WITH.map(([n, c]) => (
                <span className="abt-chip" style={{ "--d": c }} key={n}>
                  <i></i>
                  {n}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE HELP */}
      <section className="abt-sec abt-ivory" aria-labelledby="abt-who-h">
        <div className="abt-c abt-two">
          <div>
            <h2 id="abt-who-h">
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
          <h2>
            Ready to launch and sell <em>online?</em>
          </h2>
          <p>
            Book a free audit and we&apos;ll show you the funnel for your offer.
          </p>
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
