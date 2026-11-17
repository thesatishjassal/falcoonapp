import "../sell-consultations.css";
import ScnMotion from "../components/ScnMotion";
import ScnBudgetCalc, { ScnCtaPair } from "../components/ScnBudgetCalc";
import ScnIntakeForm from "../components/ScnIntakeForm";
// import { dmSans, fraunces } from "./fonts";

export const metadata = {
  title: "Sell Paid Consultations Online | Falcoon",
  description:
    "A done-for-you booking funnel for UK counsellors, therapists and coaches. Clients book and pay before the session. We build, host and run it. No tech skills needed.",
};

/* ------------------------------------------------------------------ */
/* Icons: one tiny inline set, no dependency. Decorative, so hidden    */
/* from screen readers; every icon sits next to visible text.          */
/* ------------------------------------------------------------------ */
const ICONS = {
  calendar: (<><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18M8 3v4M16 3v4" /></>),
  card: (<><rect x="2.5" y="5" width="19" height="14" rx="2" /><path d="M2.5 10h19M6.5 15h4" /></>),
  video: (<><rect x="2.5" y="6" width="13" height="12" rx="2" /><path d="M15.5 10.5l6-3.5v10l-6-3.5z" /></>),
  bell: (<><path d="M6 16v-5a6 6 0 0112 0v5l1.5 2h-15z" /><path d="M10 21h4" /></>),
  chat: <path d="M4 5h16v11H9l-5 4z" />,
  mail: (<><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></>),
  globe: (<><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.5 3.8 5.5 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.5-3.8-9S9.5 5.5 12 3z" /></>),
  layout: (<><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18M9 9v11" /></>),
  table: (<><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 10h18M3 15h18M9 4v16" /></>),
  zap: <path d="M13 2L4 14h7l-1 8 9-12h-7z" />,
  shield: (<><path d="M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6z" /><path d="M9 12l2 2 4-4" /></>),
  server: (<><rect x="3" y="4" width="18" height="7" rx="1.5" /><rect x="3" y="13" width="18" height="7" rx="1.5" /><path d="M7 7.5h.01M7 16.5h.01" /></>),
  play: (<><circle cx="12" cy="12" r="9" /><path d="M10 8.5l5.5 3.5-5.5 3.5z" /></>),
  form: (<><rect x="5" y="3" width="14" height="18" rx="2" /><path d="M9 8h6M9 12h6M9 16h3" /></>),
  phone: (<><rect x="7" y="2.5" width="10" height="19" rx="2" /><path d="M11 18.5h2" /></>),
  check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
  x: <path d="M6 6l12 12M18 6L6 18" />,
  lock: (<><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V8a4 4 0 018 0v3" /></>),
  user: (<><circle cx="12" cy="8" r="4" /><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6" /></>),
  heart: <path d="M12 20s-7-4.4-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.6-7 10-7 10z" />,
  refresh: (<><path d="M20 11a8 8 0 10-2.3 5.7" /><path d="M20 4v7h-7" /></>),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  key: (<><circle cx="8" cy="15" r="4" /><path d="M11 12l9-9M17 6l3 3" /></>),
  sos: (<><circle cx="12" cy="12" r="9" /><path d="M12 7v6M12 16.5h.01" /></>),
};

function Icon({ name, size = 22 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {ICONS[name]}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Content: edit prices and copy here, not in the markup.              */
/* Source of truth: Pricing & Packages, Running Costs and Onboarding   */
/* docs (prices checked 16 Nov 2026).                                  */
/* ------------------------------------------------------------------ */

const TRUST = [
  ["card", "Paid into your own Stripe"],
  ["key", "No tech skills or API keys"],
  ["lock", "No client notes stored"],
];

const PAINS = [
  "Endless messages about price and availability",
  "Unpaid sessions and no-shows",
  "Sending meeting links by hand",
  "Double-booked diaries",
];

/* One client, one booking, start to finish. */
const STORY = [
  ["layout", "Finds you", "She lands on your page", "It explains, in your voice, who you help, how sessions work and the price."],
  ["calendar", "Picks a time", "She chooses a slot", "From your real availability. No messages back and forth."],
  ["card", "Pays", "She pays at booking", "Card, Apple Pay or Google Pay. The slot is only confirmed once it's paid."],
  ["mail", "Gets confirmed", "Her link arrives instantly", "Email and WhatsApp confirmation with the video link and calendar invite."],
  ["bell", "Gets reminded", "Reminders go out for you", "24 hours and 2 hours before, with a reschedule link. Fewer no-shows."],
  ["refresh", "Comes back", "She books her next session", "A thank-you with a one-click link to book again, plus your package offer."],
];

const INCLUDED = [
  ["globe", "Domain & email", "Your own web address and a professional email, like hello@yourpractice.co.uk."],
  ["layout", "Landing page", "Written and designed for you, with prices, FAQs and a privacy notice."],
  ["calendar", "Online booking", "Live availability, session types and buffers between sessions."],
  ["card", "Payment at booking", "Stripe checkout. Money goes straight to your account."],
  ["video", "Video links", "A Google Meet or Zoom link created for every booking."],
  ["bell", "Reminders", "Email and WhatsApp, 24 hours and 2 hours before."],
  ["zap", "Automations", "Cancellations, no-shows, rebooking nudges and a weekly report."],
  ["table", "Client tracker", "A simple sheet of every client, booking and payment."],
  ["server", "Hosting & care", "We host, monitor and fix it (Care plans)."],
  ["play", "Handover video", "A short walkthrough and a one-page guide. No training call."],
];

const TOOLS = ["Stripe", "Calendly", "Google Meet", "Zoom", "Google Calendar", "Outlook", "WhatsApp", "Make.com", "Google Sheets", "Gmail"];

/* What the client does. Everything else is ours. */
const YOUR_STEPS = [
  ["form", "Fill in one form", "Your details, photo, prices and policies.", "About 10 min"],
  ["phone", "Verify Stripe on your phone", "Stripe checks your ID and bank so you can be paid. We send the link.", "About 10 min"],
  ["chat", "Send us one WhatsApp code", "Meta texts a code to your business number. Just forward it.", "1 min"],
];

const WE_DO = [
  "Set up your domain, email and one login for everything",
  "Connect every tool for you, with no API keys or screen-sharing",
  "Build, then test every path: paid, cancelled, no-show, rebooked",
  "Send you a preview to approve, then go live",
];

const PLANS = [
  {
    id: "launch",
    name: "Launch",
    tagline: "We build it and hand it over.",
    price: "£499",
    unit: "one-time",
    monthly: null,
    features: [
      "Branded consultation page and copy",
      "Booking with your real availability",
      "Payment at booking into your Stripe",
      "Automatic Meet or Zoom links",
      "Email and WhatsApp reminders",
      "Cancellation, no-show and rebooking automations",
      "Simple client tracker",
      "Handover video and one-page guide",
    ],
    note: "You run the tools yourself afterwards and pay hosting, domain, email and Make.com directly.",
    cta: "Start with Launch",
  },
  {
    id: "care",
    name: "Launch + Care",
    tagline: "Most counsellors pick this. One bill, zero tech.",
    price: "£499",
    unit: "setup",
    monthly: "£49/month",
    popular: true,
    features: [
      "Everything in Launch",
      "Google Workspace email and login included",
      "Hosting, domain renewal and automations",
      "Monitoring and fixes",
      "30 minutes of edits a month",
      "Monthly booking report",
    ],
    note: "Already pay for Google Workspace? Care is £39/month.",
    cta: "Choose Launch + Care",
  },
  {
    id: "growth",
    name: "Growth Care",
    tagline: "For busy practices that want to grow.",
    price: "£499",
    unit: "setup",
    monthly: "£89/month",
    features: [
      "Everything in Care",
      "2 hours of edits a month",
      "A second session type",
      "Session package or Direct Debit offer",
      "Quarterly funnel review",
    ],
    note: null,
    cta: "Choose Growth Care",
  },
];

/* Paid by the client, in their own name. Everything else sits in Care. */
const DIRECT_COSTS = [
  ["card", "Stripe card fees", "1.5% + 20p per UK card payment", "£1.33 on a £75 session. Taken automatically, never billed."],
  ["calendar", "Calendly Standard", "about $12/month", "Needed to take payment at booking."],
  ["chat", "WhatsApp messages", "about $3/month", "A few pence per message, for about 26 sessions a month."],
  ["video", "Google Meet", "Free", "No time limit on one-to-one sessions."],
];

const IN_CARE = ["Google Workspace (2 seats)", "Hosting and domain renewal", "Make.com automations", "Monitoring, fixes and edits"];

const PRIVACY = [
  ["lock", "No clinical data", "We handle booking and payment only. Forms never ask why someone is seeking support."],
  ["bell", "Discreet reminders", "Messages say \"Your appointment on Tuesday at 6pm\". Nothing that reveals counselling on a lock screen."],
  ["sos", "Crisis signposting", "Every page and email says it isn't an emergency service, with 999, NHS 111 and Samaritans 116 123."],
  ["shield", "UK GDPR ready", "A data processing agreement is included, with EU-hosted automations and payments handled by Stripe."],
];

const FAQ = [
  ["Is the £499 a monthly fee?", "No. £499 is a one-time payment to build your funnel. Care plans are optional and cover running everything for you each month."],
  ["Do I need to be technical, or give you my Gmail?", "No. We set up a new practice login on Google Workspace (for example hello@yourpractice.co.uk) and connect every tool for you. No API keys, no consoles, no screen-sharing."],
  ["What do I actually have to do?", "Three things: fill in one form, verify your identity with Stripe on your phone, and forward one WhatsApp code. About 20 minutes in total."],
  ["What will I pay other companies?", "Stripe's card fee on each payment, Calendly Standard (about $12/month) and WhatsApp messages (a few pence each). With Care, everything else is in your one monthly bill."],
  ["Who owns the accounts?", "You do. Stripe, Calendly, WhatsApp, your domain and Google Workspace are all in your name, and you're the main admin. We only have a separate admin login."],
  ["What if I stop Care?", "Care has a 3-month minimum, then runs month to month. If you leave, we export your client sheet and remove our access. Bookings and payments keep working because they're in your accounts."],
  ["Can counsellors and therapists use this?", "Yes, it's designed for them. We build the booking, payment and reminders only, and never store session notes or client records."],
  ["Do I need my own Stripe account?", "Yes, and we send you the link to create it. Payments land straight in your bank."],
];

/* ------------------------------------------------------------------ */

function SectionHead({ label, title, lead, center = false, id }) {
  return (
    <div className={`scn-head${center ? " scn-center" : ""}`}>
      <div className="scn-label">{label}</div>
      <h2 id={id}>{title}</h2>
      {lead && <p className="scn-lead">{lead}</p>}
    </div>
  );
}

export default function SellConsultationsPage() {
  return (
    <div>
      <ScnMotion />

      {/* HERO */}
      <section className="scn-hero" aria-labelledby="hero-title">
        <div className="scn-c scn-hero-in">
          <div>
            <div className="scn-eyebrow">For UK counsellors, therapists and coaches</div>
            <h1 id="hero-title">
              Get paid before the <em>session.</em>
            </h1>
            <p>
              Clients pick a time, pay and get their video link on their own. We
              build, host and run the whole system for you, with no tech skills
              needed.
            </p>
            <ScnCtaPair dark />
            <ul className="scv-trust" aria-label="Why it's safe">
              {TRUST.map(([icon, text]) => (
                <li key={text}>
                  <Icon name={icon} size={18} />
                  {text}
                </li>
              ))}
            </ul>
            <p className="scx-micro">Free audit, no payment needed. Done for you from £499 one-time.</p>
          </div>

          <div className="scn-hv" aria-hidden="true">
            <div className="scn-phone scn-diaryphone">
              <div className="scn-ph-h">
                <b>Tomorrow</b>
                <span>Your diary</span>
              </div>
              {[
                ["09:30", "First session", "Google Meet · 1:1"],
                ["12:00", "Session", "Google Meet · 1:1"],
                ["18:00", "Session", "Zoom · 1:1"],
              ].map(([t, n, w]) => (
                <div className="scn-ds" key={t}>
                  <time>{t}</time>
                  <div>
                    <strong>{n}</strong>
                    <small>{w}</small>
                  </div>
                  <em>£75 Paid</em>
                </div>
              ))}
              <div className="scn-lock-foot">£225 paid before the first session</div>
            </div>
          </div>
        </div>
      </section>

      {/* 01 PROBLEM */}
      <section className="scn-sec scn-dk" aria-labelledby="problem-title">
        <div className="scn-c scn-two">
          <div>
            <div className="scn-label">01 · The way it works now</div>
            <h2 id="problem-title" style={{ marginTop: "20px" }}>
              Stop <span className="scn-ul scn-red">chasing</span> before
              you&apos;ve even <em>met.</em>
            </h2>
          </div>
          <div>
            <p className="scn-lead">
              Every booking by message costs you time, and every unpaid no-show
              costs you income.
            </p>
            <ul className="scn-list">
              {PAINS.map((p) => (
                <li className="scn-li" key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 02 HOW IT WORKS */}
      <section className="scn-sec" id="system" aria-labelledby="system-title">
        <div className="scn-c">
          <SectionHead
            id="system-title"
            label="02 · How it works"
            title={<>From click to <em>paid session.</em></>}
            lead="Follow one new client through your funnel. Every step runs on its own."
          />
          <p className="scv-swipe" aria-hidden="true">Swipe to see each step <span>→</span></p>
          <ol className="scv-steps scv-rail" tabIndex={0} aria-label="The six steps, scroll sideways on small screens">
            {STORY.map(([icon, step, head, text], i) => (
              <li key={step} className={i === 2 ? "scv-step scv-step-key" : "scv-step"}>
                <span className="scv-ico"><Icon name={icon} /></span>
                <span className="scv-step-n">Step {i + 1} · {step}</span>
                <strong>{head}</strong>
                <p>{text}</p>
              </li>
            ))}
          </ol>
          <p className="scv-note">
            <Icon name="lock" size={16} /> Step 3 is the gate: nothing is booked until it&apos;s paid.
          </p>
        </div>
      </section>

      {/* 03 WHAT'S INCLUDED */}
      <section className="scn-sec scn-ivory" id="included" aria-labelledby="included-title">
        <div className="scn-c">
          <SectionHead
            id="included-title"
            label="03 · What you get"
            title={<>Everything, <em>A to Z.</em></>}
            lead="One package covers the whole journey, from a stranger finding your page to a paid, returning client."
          />
          <ul className="scv-grid scv-grid-compact">
            {INCLUDED.map(([icon, title, text]) => (
              <li className="scv-tile" key={title}>
                <span className="scv-ico"><Icon name={icon} /></span>
                <strong>{title}</strong>
                <p>{text}</p>
              </li>
            ))}
          </ul>
          <div className="scv-tools">
            <span>Works with</span>
            <ul aria-label="Connected tools">
              {TOOLS.map((t) => <li key={t}>{t}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* 04 GETTING LIVE */}
      <section className="scn-sec" id="onboarding" aria-labelledby="onboarding-title">
        <div className="scn-c">
          <SectionHead
            id="onboarding-title"
            label="04 · Getting live"
            title={<>You do 3 things. <em>We do the rest.</em></>}
            lead="No meetings, no screen-sharing, no passwords to hand over. About 20 minutes of your time in total."
            center
          />
          <div className="scv-split">
            <div className="scv-panel">
              <h3>Your part</h3>
              <ol className="scv-todo">
                {YOUR_STEPS.map(([icon, title, text, time], i) => (
                  <li key={title}>
                    <span className="scv-num" aria-hidden="true">{i + 1}</span>
                    <div>
                      <strong><Icon name={icon} size={18} /> {title}</strong>
                      <p>{text}</p>
                      {i === 0 && (
                        <a className="scv-start" href="#intake">
                          Start the form <span aria-hidden="true">→</span>
                        </a>
                      )}
                    </div>
                    <span className="scv-time">{time}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="scv-panel scv-panel-dk">
              <h3>Our part</h3>
              <ul className="scv-checks">
                {WE_DO.map((t) => (
                  <li key={t}><Icon name="check" size={18} />{t}</li>
                ))}
              </ul>
              <p className="scv-login">
                <Icon name="user" size={18} />
                <span>You get <b>one login</b> for everything: <b>hello@yourpractice.co.uk</b></span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 04b INTAKE FORM: "Your part", step 1 */}
      <section className="scn-sec scn-ivory" id="intake" aria-labelledby="intake-title">
        <div className="scn-c scv-intake">
          <SectionHead
            id="intake-title"
            label="Your part · Step 1"
            title={<>Tell us about your <em>practice.</em></>}
            lead="4 short steps, about 10 minutes. No payment is taken, and you can come back later because your answers save as you go."
            center
          />
          <ScnIntakeForm />
        </div>
      </section>

      {/* BUDGET CALCULATOR (existing component) */}
      <ScnBudgetCalc />

      {/* 05 PRICING */}
      <section className="scn-sec scn-ivory" id="pricing" aria-labelledby="pricing-title">
        <div className="scn-c">
          <SectionHead
            id="pricing-title"
            label="05 · Pricing"
            title={<>Simple, fixed <em>prices.</em></>}
            lead="Pay once to build it. Add Care if you'd rather never think about the tech."
            center
          />
          <p className="scv-swipe" aria-hidden="true">Swipe to compare plans <span>→</span></p>
          <div className="scv-plans scv-rail" tabIndex={0} role="group" aria-label="Plans, scroll sideways on small screens">
            {PLANS.map((p) => (
              <article
                key={p.id}
                className={`scv-plan${p.popular ? " scv-plan-pop" : ""}`}
                aria-labelledby={`plan-${p.id}`}
              >
                {p.popular && <span className="scv-badge">Most popular</span>}
                <h3 id={`plan-${p.id}`}>{p.name}</h3>
                <p className="scv-tag">{p.tagline}</p>
                <p className="scv-price">
                  <b>{p.price}</b> <span>{p.unit}</span>
                  {p.monthly && <span className="scv-mo">+ {p.monthly}</span>}
                </p>
                <ul className="scv-feat">
                  {p.features.map((f) => (
                    <li key={f}><Icon name="check" size={18} />{f}</li>
                  ))}
                </ul>
                {p.note && <p className="scv-plan-note">{p.note}</p>}
                <a className={`scn-btn scv-plan-cta${p.popular ? "" : " scn-d"}`} href="#start">
                  {p.cta} <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
          <ul className="scv-terms">
            <li><Icon name="heart" size={16} /> Pay a year of Care upfront: setup drops to £399 and Care is £490 a year (about two months free).</li>
            <li><Icon name="refresh" size={16} /> Care has a 3-month minimum, then runs month to month.</li>
            <li><Icon name="card" size={16} /> Fixed prices in GBP. No hidden fees.</li>
          </ul>
        </div>
      </section>

      {/* 06 RUNNING COSTS */}
      <section className="scn-sec" id="costs" aria-labelledby="costs-title">
        <div className="scn-c">
          <SectionHead
            id="costs-title"
            label="06 · No surprises"
            title={<>What else you&apos;ll <em>pay.</em></>}
            lead="A few tools must be in your own name because they handle your money or your phone number. Here's exactly what they cost."
          />
          <div className="scv-costs">
            <ul className="scv-costlist" aria-label="Paid directly by you">
              {DIRECT_COSTS.map(([icon, name, price, note]) => (
                <li key={name}>
                  <span className="scv-ico"><Icon name={icon} /></span>
                  <div>
                    <strong>{name}</strong>
                    <p>{note}</p>
                  </div>
                  <b className="scv-cost">{price}</b>
                </li>
              ))}
            </ul>
            <div className="scv-panel scv-panel-dk">
              <h3>Included in Care</h3>
              <ul className="scv-checks">
                {IN_CARE.map((t) => (
                  <li key={t}><Icon name="check" size={18} />{t}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="scv-fine">
            List prices checked November 2026, before VAT, and may change. Calendly and Meta charge in US dollars.
          </p>
        </div>
      </section>

      {/* 07 PRIVACY */}
      <section className="scn-sec scn-dk" id="privacy" aria-labelledby="privacy-title">
        <div className="scn-c">
          <SectionHead
            id="privacy-title"
            label="07 · Built for counselling"
            title={<>Private by <em>design.</em></>}
            lead="Your clients share something personal. The system collects as little as it can."
          />
          <p className="scv-swipe scv-swipe-dk" aria-hidden="true">Swipe <span>→</span></p>
          <ul className="scv-grid scv-grid-4 scv-rail" tabIndex={0} aria-label="Privacy features, scroll sideways on small screens">
            {PRIVACY.map(([icon, title, text]) => (
              <li className="scv-tile scv-tile-dk" key={title}>
                <span className="scv-ico"><Icon name={icon} /></span>
                <strong>{title}</strong>
                <p>{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="scn-sec scn-ivory scx-faq" id="faq" aria-labelledby="faq-title">
        <div className="scn-c">
          <div className="scn-head scn-center">
            <h2 id="faq-title">
              Questions before you <em>book?</em>
            </h2>
          </div>
          <div className="scx-faq-list">
            {FAQ.map(([q, a]) => (
              <details key={q}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="scn-cta" id="start" aria-labelledby="cta-title">
        <div className="scn-c">
          <div className="scn-label">For UK counsellors, therapists and coaches</div>
          <h2 id="cta-title">
            Let&apos;s build your <em>booking funnel.</em>
          </h2>
          <p>
            Book a free audit. We&apos;ll map out your funnel and recommend the
            right plan, with no payment needed.
          </p>
          <div className="scx-center">
            <ScnCtaPair />
          </div>
        </div>
      </section>

      {/* Mobile-only sticky action bar */}
      <nav className="scv-mbar" aria-label="Quick actions">
        <a href="#pricing" className="scv-mbar-price">
          <b>From £499</b>
          <span>See plans</span>
        </a>
        <a className="scn-btn" href="#start">
          Book free audit <span aria-hidden="true">→</span>
        </a>
      </nav>
    </div>
  );
}