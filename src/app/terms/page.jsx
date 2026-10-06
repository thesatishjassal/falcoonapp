import { DM_Sans, Fraunces } from "next/font/google";
import "./terms.css";

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
  "The terms that apply when you use Falcoon's website and funnel-building services.";

export const metadata = {
  title: "Terms & Conditions | Falcoon",
  description: DESCRIPTION,
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms & Conditions | Falcoon",
    description: DESCRIPTION,
    locale: "en_GB",
    type: "website",
    siteName: "Falcoon",
  },
};

const SECTIONS = [
  {
    id: "introduction",
    title: "Introduction",
    body: "Welcome to Falcoon. By accessing our website and services, you agree to comply with these terms. Please read them carefully before using our platform.",
  },
  {
    id: "services",
    title: "Services",
    body: "Falcoon provides digital solutions including funnels, booking systems, payment integrations, and marketing automation for fitness professionals.",
  },
  {
    id: "responsibilities",
    title: "User responsibilities",
    list: [
      "Provide accurate information",
      "Do not misuse or abuse the platform",
      "Comply with all applicable laws",
    ],
  },
  {
    id: "payments",
    title: "Payments & pricing",
    body: "All payments are final unless stated otherwise. Pricing may change without prior notice.",
  },
  {
    id: "ip",
    title: "Intellectual property",
    body: "All content, branding, and technology belong to Falcoon and cannot be reused without permission.",
  },
  {
    id: "liability",
    title: "Limitation of liability",
    body: "We are not liable for any indirect losses or damages arising from the use of our services.",
  },
  {
    id: "termination",
    title: "Termination",
    body: "We reserve the right to suspend or terminate access if terms are violated.",
  },
  {
    id: "changes",
    title: "Changes to terms",
    body: "These terms may be updated from time to time. Continued use means acceptance of updated terms.",
  },
  {
    id: "contact",
    title: "Contact",
    contact: true,
  },
];

export default function TermsPage() {
  return (
    <main className={`tc-page ${dmSans.variable} ${fraunces.variable}`}>
      <section className="tc-hero">
        <div className="tc-c">
          <div className="tc-eyebrow">Legal</div>
          <h1 className="tc-h1">
            Terms &amp; <em>Conditions</em>
          </h1>
          <p>Last updated: March 2026</p>
        </div>
      </section>

      <section className="tc-body">
        <div className="tc-c tc-layout">
          <nav className="tc-toc" aria-label="Terms sections">
            <div className="tc-toc-t">On this page</div>
            {SECTIONS.map((s, i) => (
              <a key={s.id} href={`#${s.id}`}>
                {i + 1}. {s.title}
              </a>
            ))}
          </nav>

          <div className="tc-doc">
            {SECTIONS.map((s, i) => (
              <section key={s.id} id={s.id} className="tc-sec">
                <h2>
                  <span>{i + 1}.</span>
                  {s.title}
                </h2>
                {s.body && <p>{s.body}</p>}
                {s.list && (
                  <ul>
                    {s.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
                {s.contact && (
                  <p>
                    For any questions, contact us at{" "}
                    <a href="mailto:thesatishjassal@gmail.com">
                      thesatishjassal@gmail.com
                    </a>
                    .
                  </p>
                )}
              </section>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
