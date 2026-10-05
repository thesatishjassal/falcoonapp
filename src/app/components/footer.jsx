import Link from "next/link";
import { DM_Sans, Fraunces } from "next/font/google";
import "./footer.css";

const SITE = "https://falcoon.in";
const EMAIL = "hello@falcoon.in";
const CALENDLY = "https://calendly.com/thesatishjassal/free-strategy-call-uk";
const X_URL = "https://x.com/falcoon_in";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const SERVICES = [
  { href: "/sell-fitness-programmes", label: "Sell Fitness Programmes" },
  { href: "/sell-fitness-products", label: "Sell Fitness Products" },
  { href: "/sell-consultations", label: "Sell Consultations" },
  { href: "/pricing", label: "Pricing" },
];

const COMPANY = [
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

const SUPPORT = [
  { href: "/help", label: "Support" },
  { href: "/faq", label: "FAQs" },
  { href: "/terms", label: "Terms" },
  { href: "/privacy", label: "Privacy" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE}/#organization`,
  name: "Falcoon",
  url: SITE,
  email: EMAIL,
  description:
    "Websites, funnels and automation systems built for UK fitness professionals.",
  areaServed: { "@type": "Country", name: "United Kingdom" },
  sameAs: [X_URL],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: EMAIL,
    areaServed: "GB",
    availableLanguage: "English",
    url: `${SITE}/contact`,
  },
};

const Pin = () => (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

const Mail = () => (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="3" y="5" width="18" height="14" rx="1" />
    <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
  </svg>
);

const XIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="15"
    height="15"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M17.8 3h3.1l-6.8 7.7L22 21h-6.2l-4.9-6.3L5.3 21H2.2l7.2-8.3L2 3h6.4l4.4 5.8L17.8 3Zm-1.1 16.2h1.7L7.3 4.7H5.5l11.2 14.5Z" />
  </svg>
);

function LinkGroup({ title, links, id }) {
  return (
    <nav className="ftr-group" aria-labelledby={id}>
      <h2 className="ftr-heading" id={id}>
        {title}
      </h2>
      <ul>
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="ftr-link">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function Footer() {
  return (
    <footer className={`ftr ${dmSans.variable} ${fraunces.variable}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="ftr-c">
        {/* TOP */}
        <div className="ftr-top">
          {/* BRAND */}
          <div className="ftr-brand">
            <Link href="/" className="ftr-logo" aria-label="Falcoon home">
              <svg
                viewBox="0 4 150 58"
                width="150"
                height="58"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <text
                  x="6"
                  y="46"
                  fontFamily="var(--font-fraunces), Georgia, serif"
                  fontStyle="italic"
                  fontWeight="600"
                  fontSize="56"
                  fill="#d0b477"
                >
                  f
                </text>
                <text
                  x="30"
                  y="41"
                  fontFamily="var(--font-fraunces), Georgia, serif"
                  fontWeight="600"
                  fontSize="30"
                  letterSpacing="0.2"
                  fill="#ffffff"
                >
                  alcoon
                </text>
              </svg>
            </Link>

            <p className="ftr-desc">
              Websites, funnels and automation systems built for UK fitness
              professionals. We build the funnel, you keep coaching.
            </p>

            <span className="ftr-location">
              <Pin />
              Serving fitness professionals across the UK
            </span>
          </div>

          {/* LINK GROUPS */}
          <LinkGroup title="Services" links={SERVICES} id="ftr-h-services" />
          <LinkGroup title="Company" links={COMPANY} id="ftr-h-company" />
          <LinkGroup title="Help & legal" links={SUPPORT} id="ftr-h-help" />

          {/* CONTACT */}
          <div className="ftr-contact">
            <h2 className="ftr-heading">Get in touch</h2>
            <a href={`mailto:${EMAIL}`} className="ftr-mail">
              <Mail />
              {EMAIL}
            </a>
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="ftr-btn"
            >
              Book Free Website Audit <span aria-hidden="true">→</span>
            </a>
            <p className="ftr-fine">Fixed pricing. No hidden fees.</p>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="ftr-bottom">
          <p>© {new Date().getFullYear()} Falcoon. All rights reserved.</p>
          <p className="ftr-market">Built for UK fitness professionals</p>
          <div className="ftr-legal">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <a
              href={X_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Falcoon on X"
              className="ftr-social"
            >
              <XIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
