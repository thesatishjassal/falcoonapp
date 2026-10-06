import { DM_Sans, Fraunces } from "next/font/google";
import "./privacy.css";

const EMAIL = "thesatishjassal@gmail.com";

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
  "How Falcoon collects, uses and protects your personal data, and the rights you have under UK data protection law.";

export const metadata = {
  title: "Privacy Policy | Falcoon",
  description: DESCRIPTION,
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy | Falcoon",
    description: DESCRIPTION,
    locale: "en_GB",
    type: "website",
    siteName: "Falcoon",
  },
};

const SECTIONS = [
  {
    id: "who-we-are",
    title: "Who we are",
    paras: [
      "Falcoon builds sales funnels, booking systems and payment integrations for UK fitness and wellbeing professionals. For the purposes of UK data protection law, Falcoon is the controller of the personal data described in this policy.",
    ],
  },
  {
    id: "data-we-collect",
    title: "What we collect",
    paras: [
      "Depending on how you use our website and services, we may collect:",
    ],
    list: [
      "Contact details, such as your name, email address and phone number",
      "Business details you share with us, such as your offer, audience and brand assets",
      "Booking details when you schedule a call with us",
      "Payment information, handled by our payment providers (we do not store full card details)",
      "Technical data, such as your IP address, browser and pages visited",
      "Messages you send us by email, WhatsApp or forms",
    ],
  },
  {
    id: "how-we-use-it",
    title: "How we use your data",
    list: [
      "To respond to enquiries and book strategy calls",
      "To design, build and support your funnel",
      "To take payments and send invoices",
      "To send service updates and, where you agree, marketing emails",
      "To keep our website secure and improve it",
      "To meet our legal and accounting obligations",
    ],
  },
  {
    id: "legal-basis",
    title: "Our legal basis",
    paras: [
      "We process personal data where it is needed to carry out a contract with you, where we have a legitimate interest in running and improving our business, where you have given consent, or where the law requires it. You can withdraw consent at any time.",
    ],
  },
  {
    id: "sharing",
    title: "Who we share it with",
    paras: [
      "We do not sell your personal data. We share it only with trusted providers who help us deliver our services, such as payment, scheduling, video call, messaging, hosting and automation tools. Examples include Stripe, PayPal, GoCardless, Calendly, Zoom, Google Meet, WhatsApp and Zapier. These providers process data under their own privacy policies and our agreements with them.",
      "We may also share data with professional advisers or authorities when the law requires it.",
    ],
  },
  {
    id: "cookies",
    title: "Cookies",
    paras: [
      "Our website may use cookies and similar technologies to make the site work, understand how it is used and measure marketing. You can control cookies through your browser settings. Where required, we ask for your consent before using non-essential cookies.",
    ],
  },
  {
    id: "retention",
    title: "How long we keep it",
    paras: [
      "We keep personal data only as long as we need it for the purposes above. Enquiry data is usually deleted when it is no longer needed. Client and invoice records are kept for the period required by UK tax and accounting rules.",
    ],
  },
  {
    id: "security",
    title: "Security",
    paras: [
      "We use reasonable technical and organisational measures to protect your data. No online service is completely secure, so please take care when sharing sensitive information.",
    ],
  },
  {
    id: "your-rights",
    title: "Your rights",
    paras: ["Under UK data protection law you have the right to:"],
    list: [
      "Access the personal data we hold about you",
      "Ask us to correct inaccurate data",
      "Ask us to delete your data",
      "Object to or restrict how we use your data",
      "Ask for your data in a portable format",
      "Withdraw consent for marketing at any time",
    ],
  },
  {
    id: "changes",
    title: "Changes to this policy",
    paras: [
      "We may update this policy from time to time. The date at the top shows when it was last changed.",
    ],
  },
  {
    id: "contact",
    title: "Contact and complaints",
    contact: true,
  },
];

export default function PrivacyPage() {
  return (
    <main className={`pp-page ${dmSans.variable} ${fraunces.variable}`}>
      <section className="pp-hero">
        <div className="pp-c">
          <div className="pp-eyebrow">Legal</div>
          <h1 className="pp-h1">
            Privacy <em>Policy</em>
          </h1>
          <p>
            What we collect, why we collect it, and the control you have over
            it.
          </p>
          <small>Last updated: March 2026</small>
        </div>
      </section>

      <section className="pp-body">
        <div className="pp-c pp-layout">
          <nav className="pp-toc" aria-label="Privacy policy sections">
            <div className="pp-toc-t">On this page</div>
            {SECTIONS.map((s, i) => (
              <a key={s.id} href={`#${s.id}`}>
                {i + 1}. {s.title}
              </a>
            ))}
          </nav>

          <div className="pp-doc">
            {SECTIONS.map((s, i) => (
              <section key={s.id} id={s.id} className="pp-sec">
                <h2>
                  <span>{i + 1}.</span>
                  {s.title}
                </h2>
                {s.paras?.map((p) => (
                  <p key={p}>{p}</p>
                ))}
                {s.list && (
                  <ul>
                    {s.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
                {s.contact && (
                  <>
                    <p>
                      To use your rights or ask a question about this policy,
                      email <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
                    </p>
                    <p>
                      If you are unhappy with how we handle your data, you can
                      complain to the Information Commissioner&apos;s Office
                      (ICO) at{" "}
                      <a
                        href="https://ico.org.uk"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        ico.org.uk
                      </a>
                      .
                    </p>
                  </>
                )}
              </section>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
