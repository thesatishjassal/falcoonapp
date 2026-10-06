"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { DM_Sans, Fraunces } from "next/font/google";
import "./faq.css";

const CALENDLY = "https://calendly.com/thesatishjassal/free-strategy-call-uk";
// Keep these in one place and make sure the displayed and dialled numbers match.
const PHONE_DISPLAY = "+91 7888 467258";
const PHONE_TEL = "+917888467258";
const WHATSAPP = "917888467258";
const EMAIL = "hello@falcoon.in";

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

const CATS = [
  ["all", "All"],
  ["start", "Getting started"],
  ["pay", "Pricing & payments"],
  ["tools", "Tools & automation"],
  ["results", "Results & support"],
];

const FAQS = [
  {
    id: "help",
    cat: "start",
    q: "How will Falcoon help me get more fitness clients?",
    a: "We build a client system around your offer: landing pages, booking flows, follow-ups and automation. That means fewer leads slipping through and a clearer path from follower to paying client.",
  },
  {
    id: "who",
    cat: "start",
    q: "Who is Falcoon for?",
    a: "UK personal trainers, online coaches, programme creators, gym and studio owners, yoga instructors, nutritionists, and counsellors or therapists who book and take payment online. It works for online and in-person businesses.",
  },
  {
    id: "tech",
    cat: "start",
    q: "Do I need technical skills?",
    a: "No. We build the pages, connect your payments, booking and WhatsApp, and test everything, so you can focus on your clients.",
  },
  {
    id: "cost",
    cat: "pay",
    q: "How much does it cost?",
    a: "The core build is £149 one-time, with hosting and your domain free for the first year. Add-ons such as booking, WhatsApp automation or a product store start from £29, and optional support is from £39 a month.",
    link: ["See full pricing", "/pricing"],
  },
  {
    id: "payments",
    cat: "pay",
    q: "Can I take payments through Stripe, PayPal or GoCardless?",
    a: "Yes. We connect your own Stripe, PayPal or GoCardless account so payments land straight with you. GoCardless Direct Debit suits monthly coaching plans. Each provider charges its own fees.",
  },
  {
    id: "contract",
    cat: "pay",
    q: "Is there a contract?",
    a: "The core build is a one-time payment with no recurring core fee. Support is optional, from £39 a month. Ask us about support terms on your call.",
  },
  {
    id: "automate",
    cat: "tools",
    q: "Can I automate WhatsApp, email and reminders?",
    a: "Yes. We can set up WhatsApp replies, qualifying questions, call booking, email and SMS reminders, and follow-ups for leads who go quiet. Each is a one-time add-on, and tool subscriptions are billed by their providers.",
  },
  {
    id: "page",
    cat: "tools",
    q: "Will I get a custom landing page or funnel?",
    a: "Yes. Your core build includes a landing page, checkout page and thank-you page, with copy written for your niche and designed mobile-first.",
  },
  {
    id: "leads",
    cat: "results",
    q: "How quickly can I start getting leads?",
    a: "Once traffic is going to your funnel, enquiries can start within days. Results depend on your offer, your traffic and how you follow up, so we can't promise a number of clients.",
  },
  {
    id: "support",
    cat: "results",
    q: "What support do you provide?",
    a: "Setup is done for you, including connecting your tools and testing. If you'd like help after launch, optional support starts from £39 a month.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FAQPage() {
  const [active, setActive] = useState(FAQS[0].id);
  const [cat, setCat] = useState("all");
  const [query, setQuery] = useState("");

  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    return FAQS.filter(
      (f) =>
        (cat === "all" || f.cat === cat) &&
        (!q || `${f.q} ${f.a}`.toLowerCase().includes(q)),
    );
  }, [cat, query]);

  return (
    <section className={`fq ${dmSans.variable} ${fraunces.variable}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="fq-c">
        {/* HEADER */}
        <header className="fq-head">
          <div className="fq-eyebrow">Built for UK fitness brands</div>
          <h1>
            Frequently asked <em>questions.</em>
          </h1>
          <p>Everything you need to know before getting started.</p>
        </header>

        {/* TOOLBAR */}
        <div className="fq-bar">
          <div className="fq-tabs" role="group" aria-label="Filter by topic">
            {CATS.map(([id, label]) => (
              <button
                type="button"
                key={id}
                className={cat === id ? "on" : undefined}
                aria-pressed={cat === id}
                onClick={() => setCat(id)}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="fq-search">
            <label className="fq-sr" htmlFor="fq-search">
              Search questions
            </label>
            <input
              id="fq-search"
              type="search"
              placeholder="Search questions"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>

        {/* GRID */}
        <div className="fq-grid">
          <div>
            <p className="fq-count" aria-live="polite">
              {list.length} of {FAQS.length} questions
            </p>

            {list.length === 0 ? (
              <div className="fq-empty">
                <strong>No questions match &ldquo;{query}&rdquo;.</strong>
                <p>Try a different word, or ask us on a free call.</p>
                <button
                  type="button"
                  onClick={() => {
                    setQuery("");
                    setCat("all");
                  }}
                >
                  Clear search
                </button>
              </div>
            ) : (
              <div className="fq-list">
                {list.map((f) => {
                  const open = active === f.id;
                  return (
                    <div className={`fq-item${open ? " open" : ""}`} key={f.id}>
                      <h3>
                        <button
                          type="button"
                          className="fq-q"
                          id={`q-${f.id}`}
                          aria-expanded={open}
                          aria-controls={`a-${f.id}`}
                          onClick={() => setActive(open ? null : f.id)}
                        >
                          <span>{f.q}</span>
                          <i className="fq-ico" aria-hidden="true"></i>
                        </button>
                      </h3>
                      <div
                        className="fq-a"
                        id={`a-${f.id}`}
                        role="region"
                        aria-labelledby={`q-${f.id}`}
                      >
                        <div>
                          <p>{f.a}</p>
                          {f.link && (
                            <Link href={f.link[1]} className="fq-link">
                              {f.link[0]} →
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* CTA CARD */}
          <aside className="fq-card">
            <h2>Still have questions?</h2>
            <p>
              Book a free website audit and we&apos;ll answer them on a call.
            </p>
            <a
              href={CALENDLY}
              className="fq-btn"
              target="_blank"
              rel="noopener"
            >
              Book free website audit <span>→</span>
            </a>
            <Link href="/pricing" className="fq-ghost">
              See pricing
            </Link>
            <p className="fq-micro">Free audit. No payment needed.</p>

            <ul className="fq-contact">
              <li>
                <a
                  href={`https://wa.me/${WHATSAPP}`}
                  target="_blank"
                  rel="noopener"
                >
                  <small>WhatsApp</small>
                  <span>{PHONE_DISPLAY}</span>
                </a>
              </li>
              <li>
                <a href={`tel:${PHONE_TEL}`}>
                  <small>Call</small>
                  <span>{PHONE_DISPLAY}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`}>
                  <small>Email</small>
                  <span>{EMAIL}</span>
                </a>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
