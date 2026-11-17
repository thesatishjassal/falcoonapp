import "../sell-fitness-programmes.css";

import PrgCtaPair from "../components/PrgCtaPair";
import PrgHeroPhone from "../components/PrgHeroPhone";
import PrgPlanPicker from "../components/PrgPlanPicker";
import PrgIntakeForm from "../components/PrgIntakeForm";
import { dmSans, fraunces } from "./fonts";

export const metadata = {
  title: "Sell Fitness Programmes Online | Falcoon",
  description:
    "Landing pages, offer positioning and WhatsApp automation that turn followers into booked calls and paying clients. For UK fitness coaches. From £499 one-time.",
};

/* ------------------------------------------------------------------ */
/* Icons: one small inline set. Decorative; text always sits beside.   */
/* ------------------------------------------------------------------ */
const ICONS = {
  trend: <path d="M3 17l6-6 4 4 8-8M15 7h6v6" />,
  help: (<><circle cx="12" cy="12" r="9" /><path d="M9.5 9.5a2.5 2.5 0 015 .5c0 1.5-2.5 2-2.5 3.5M12 17h.01" /></>),
  dm: <path d="M4 5h16v11H9l-5 4z" />,
  clock: (<><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>),
  megaphone: <path d="M3 11v2a1 1 0 001 1h3l7 4V6L7 10H4a1 1 0 00-1 1zM18 9a4 4 0 010 6" />,
  page: (<><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M4 9h16M8 13h8" /></>),
  qualify: (<><circle cx="12" cy="12" r="9" /><path d="M8 12l3 3 5-6" /></>),
  calendar: (<><rect x="3.5" y="5" width="17" height="15" rx="2" /><path d="M3.5 10h17M8 3v4M16 3v4" /></>),
  bell: <path d="M6 16v-5a6 6 0 0112 0v5l2 2H4zM10 21h4" />,
  pen: <path d="M4 20h4L19 9l-4-4L4 16zM14 6l4 4" />,
  card: (<><rect x="3" y="6" width="18" height="13" rx="2" /><path d="M3 11h18M7 15h4" /></>),
  refresh: (<><path d="M20 11a8 8 0 10-2.3 5.7" /><path d="M20 4v7h-7" /></>),
  table: (<><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 10h18M3 15h18M9 4v16" /></>),
  wave: <path d="M7 11V6a2 2 0 014 0v5M11 10V4a2 2 0 014 0v7M15 9a2 2 0 014 0v5a7 7 0 01-7 7h-1a7 7 0 01-6-3.5L3 14a2 2 0 013.4-2L7 13" />,
  play: (<><circle cx="12" cy="12" r="9" /><path d="M10 8.5l5.5 3.5-5.5 3.5z" /></>),
  form: (<><rect x="5" y="3" width="14" height="18" rx="2" /><path d="M9 8h6M9 12h6M9 16h3" /></>),
  phone: (<><rect x="7" y="2.5" width="10" height="19" rx="2" /><path d="M11 18.5h2" /></>),
  check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
  lock: (<><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V8a4 4 0 018 0v3" /></>),
  shield: (<><path d="M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6z" /><path d="M9 12l2 2 4-4" /></>),
  key: (<><circle cx="8" cy="15" r="4" /><path d="M11 12l9-9M17 6l3 3" /></>),
  user: (<><circle cx="12" cy="8" r="4" /><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6" /></>),
  stop: (<><circle cx="12" cy="12" r="9" /><path d="M9 9h6v6H9z" /></>),
  chart: <path d="M4 20V11M10 20V5M16 20v-6M3 20h18" />,
};

function Icon({ name, size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      {ICONS[name]}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Content. Prices live in components/PrgPlanPicker.jsx (BUILDS/CARES) */
/* ------------------------------------------------------------------ */
const TRUST = [
  ["dm", "Every enquiry answered"],
  ["calendar", "Calls booked into your diary"],
  ["key", "No tech skills needed"],
];

const PROBLEMS = [
  ["trend", "Clients only when a post lands"],
  ["help", "Followers who don't know what you sell"],
  ["dm", "Leads going cold in your DMs"],
  ["clock", "Following up by hand, when you remember"],
];

const JOURNEY = [
  ["megaphone", "Attract", "Your content and ads send people to one link, not a bio full of options."],
  ["page", "Land", "A page that says who the programme is for, what they get and what it costs."],
  ["dm", "Message", "One tap opens WhatsApp with their question already started."],
  ["qualify", "Qualify", "Automatic replies ask about goals and availability, so you only talk to good fits."],
  ["calendar", "Book", "Good fits pick a time for a call, straight into your calendar, with reminders."],
  ["bell", "Follow up", "Leads who go quiet get up to 3 friendly nudges, then the messages stop."],
];

const INCLUDED = [
  ["page", "Landing page", "One page for your programme, with one clear button."],
  ["pen", "Offer positioning", "Who it's for, what they get and what it costs, in plain words."],
  ["dm", "WhatsApp replies", "Instant answers to common questions, day and night (Client System)."],
  ["qualify", "Qualifying questions", "Goals, experience and availability asked before any call."],
  ["calendar", "Call booking", "Good fits book a call, with reminders 24 hours and 2 hours before."],
  ["refresh", "Quiet-lead follow-ups", "Up to 3 friendly nudges, then it stops (Client System)."],
  ["card", "Programme checkout", "One-off or monthly payments into your account (Client System)."],
  ["wave", "Welcome onboarding", "New clients get a welcome, access details and check-in times (Client System)."],
  ["table", "Lead tracker", "Every lead, call and new client in one simple sheet."],
  ["play", "Handover video", "A short walkthrough and a one-page guide. No training call."],
];

const TOOLS = ["Instagram", "TikTok", "WhatsApp Business", "Calendly", "Zoom", "Google Meet", "Stripe", "GoCardless", "Make.com", "Google Sheets"];

const YOUR_STEPS = [
  ["form", "Fill in one form", "Your details, programme, prices and how people join.", "About 10 min"],
  ["phone", "Verify Stripe on your phone", "Stripe checks your ID and bank so you can be paid. We send the link.", "About 10 min"],
  ["dm", "Send us one WhatsApp code", "Meta texts a code to your business number. Just forward it. Client System only.", "1 min"],
];

const WE_DO = [
  "Set up your domain, email and one login for everything",
  "Write your offer and build your landing page",
  "Connect WhatsApp, booking, checkout and your lead tracker with Make.com",
  "Test every path: new lead, qualified, booked, no-show, paid",
  "Send you a preview to approve, then go live",
];

const DIRECT_COSTS = [
  ["card", "Card or Direct Debit fees", "about 1.5% + 20p", "Stripe's rate per standard UK card. About £3.94 on a £249 monthly payment."],
  ["calendar", "Calendly Standard", "about $12/month", "Only if you charge for calls at booking. Free discovery calls don't need it."],
  ["dm", "WhatsApp messages", "pennies each", "Paid to Meta. Reminders are cheap; follow-ups to quiet leads cost a little more."],
  ["chart", "Ad budget", "you choose", "Only if you run ads. Paid to Meta or Google."],
];

const IN_CARE = ["Google Workspace email and login", "Hosting and domain renewal", "Make.com automations", "Monitoring, fixes and edits", "Monthly leads and sales report"];

const SAFEGUARDS = [
  ["shield", "No promised numbers", "We build the system. Results depend on your offer, traffic and follow-up, and we say so up front."],
  ["stop", "Opt-in messaging", "Leads only get WhatsApp messages after they contact you, with an easy way to stop them."],
  ["card", "Clear monthly terms", "Checkout shows the monthly price, any minimum term and how to cancel."],
  ["lock", "Your money, your account", "Payments go straight to your Stripe or GoCardless. We never hold your money."],
];

const FAQ = [
  ["Is £499 a monthly fee?", "No. Programme Launch is £499 one-time and Client System Launch is £699 one-time. Care plans are optional and cover running everything each month."],
  ["Programme Launch or Client System Launch?", "Programme Launch gives you the page, offer, qualifying questions, call booking and a lead tracker. Client System Launch adds WhatsApp replies, follow-ups for quiet leads, programme checkout and welcome onboarding."],
  ["Is WhatsApp automation included?", "Yes, in Client System Launch. Messages are charged by Meta at a few pence each, paid by you."],
  ["Do I need to pay for other tools?", "Card or Direct Debit fees on each payment, WhatsApp messages if you use them, and Calendly Standard only if you charge for calls. With Care, everything else is in your one monthly bill."],
  ["Can you promise a number of clients?", "No. Results depend on your offer, your traffic and how you follow up. We build the system that makes every lead easier to convert."],
  ["Can I sell monthly programmes?", "Yes. Clients can pay monthly by card or Direct Debit. Checkout shows the price, terms and how to cancel, and failed payments get a friendly update link."],
  ["Do I need to be technical?", "No. We set up a new login for you and connect every tool. You fill in one form, verify Stripe on your phone and forward one WhatsApp code."],
  ["Can you run my ads?", "We set them up for £149 one-time. Your ad budget is paid directly to Meta or Google."],
];

function Head({ label, title, lead, center = false, id }) {
  return (
    <div className={`prg-head${center ? " prg-center" : ""}`}>
      <div className="prg-label">{label}</div>
      <h2 id={id}>{title}</h2>
      {lead && <p className="prg-lead">{lead}</p>}
    </div>
  );
}

export default function SellFitnessProgrammesPage() {
  return (
    <div className={`prg-page ${dmSans.variable} ${fraunces.variable}`}>
      {/* HERO */}
      <section className="prg-hero" aria-labelledby="prg-hero-h">
        <div className="prg-c prg-hero-in">
          <div>
            <div className="prg-eyebrow">For UK personal brand fitness coaches</div>
            <h1 id="prg-hero-h">
              Turn followers into <em>paying clients.</em>
            </h1>
            <p>
              One clear page, one clear offer, and WhatsApp replies that qualify
              leads and book calls for you, so new clients don&apos;t depend on
              your last post.
            </p>
            <PrgCtaPair />
            <ul className="pgv-trust" aria-label="What you get">
              {TRUST.map(([i, t]) => (
                <li key={t}><Icon name={i} size={18} />{t}</li>
              ))}
            </ul>
            <p className="prg-micro">Free strategy call. Done for you from £499 one-time.</p>
          </div>
          <div className="prg-hv">
            <PrgHeroPhone />
          </div>
        </div>
      </section>

      {/* 01 PROBLEM */}
      <section className="prg-sec prg-dk" aria-labelledby="prg-problem-h">
        <div className="prg-c prg-two">
          <div>
            <div className="prg-label">01 · The way it works now</div>
            <h2 id="prg-problem-h" style={{ marginTop: 20 }}>
              Posting more won&apos;t fix it. A <em>system</em> will.
            </h2>
          </div>
          <div>
            <p className="prg-lead">
              Without a system, your income follows your posting. A good week
              fills your diary, a quiet one empties it, and every late reply is a
              lead you may have lost.
            </p>
            <ul className="prg-list">
              {PROBLEMS.map(([k, t]) => (
                <li className="prg-li" key={t}>
                  <span className="prg-ico"><Icon name={k} /></span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 02 JOURNEY */}
      <section className="prg-sec" id="system" aria-labelledby="prg-system-h">
        <div className="prg-c">
          <Head id="prg-system-h" label="02 · How it works" title={<>From follower to <em>new client.</em></>} lead="Follow one lead from your post to a booked call. Every step runs on its own." />
          <p className="pgv-swipe" aria-hidden="true">Swipe to see each step <span>→</span></p>
          <ol className="pgv-steps pgv-rail" tabIndex={0} aria-label="The six steps, scroll sideways on small screens">
            {JOURNEY.map(([icon, t, x], i) => (
              <li key={t} className={i === 3 ? "pgv-step pgv-step-key" : "pgv-step"}>
                <span className="pgv-ico"><Icon name={icon} /></span>
                <span className="pgv-step-n">Step {i + 1}</span>
                <strong>{t}</strong>
                <p>{x}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 03 SHOWCASE */}
      <section className="prg-sec prg-dk" aria-labelledby="prg-show-h">
        <div className="prg-c">
          <Head id="prg-show-h" label="03 · What leads see" title={<>One page. One offer. <em>One clear step.</em></>} lead="An example for a coach selling a 12-week programme at £249 a month." />
          <p className="pgv-swipe pgv-swipe-dk" aria-hidden="true">Swipe <span>→</span></p>
          <div className="prg-grid3 pgv-rail pgv-show" tabIndex={0} role="group" aria-label="Example screens, scroll sideways on small screens">
            <figure>
              <figcaption className="prg-sl">Landing page</figcaption>
              <div className="prg-win" aria-hidden="true">
                <div className="prg-bar"><div className="prg-dots"><i></i><i></i><i></i></div><b>yourname.co.uk/12-week</b></div>
                <div className="prg-mock">
                  <div className="prg-sub" style={{ margin: "0 0 8px" }}>12-week programme · Online coaching</div>
                  <h4>Lose fat and build strength around a busy week</h4>
                  <div className="prg-sub" style={{ margin: "14px 0 6px" }}>What&apos;s included</div>
                  <div className="prg-row prg-s"><span>4 sessions a week</span><span>Gym or home</span></div>
                  <div className="prg-row prg-s"><span>Weekly check-ins</span><span>With your coach</span></div>
                  <div className="prg-row prg-s"><span>Meal plan</span><span>Included</span></div>
                  <div className="prg-row"><span>Price</span><span>£249/month</span></div>
                  <div className="prg-pay">Chat on WhatsApp</div>
                </div>
              </div>
              <p className="prg-cap">A page built for one programme, with one button.</p>
            </figure>
            <figure>
              <figcaption className="prg-sl">Offer positioning</figcaption>
              <div className="prg-win" aria-hidden="true">
                <div className="prg-bar"><div className="prg-dots"><i></i><i></i><i></i></div><b>Offer rewrite</b></div>
                <div className="prg-mock">
                  <h4>Say it clearly</h4>
                  <div className="prg-sub">Before and after</div>
                  <div className="prg-tier"><strong><span>Before</span></strong>&ldquo;Online coaching. DM for details.&rdquo;</div>
                  <div className="prg-tier prg-on"><strong><span>After</span><span className="prg-save">Clear</span></strong>12-week fat loss programme for busy professionals. Weekly check-ins, meal plan and WhatsApp support. £249 a month.</div>
                  <div className="prg-pay">Start with a free call</div>
                </div>
              </div>
              <p className="prg-cap">Who it&apos;s for, what they get and what it costs.</p>
            </figure>
            <figure>
              <figcaption className="prg-sl">WhatsApp replies</figcaption>
              <div className="prg-win" aria-hidden="true">
                <div className="prg-bar"><div className="prg-dots"><i></i><i></i><i></i></div><b>WhatsApp · Lead replies</b><div className="prg-badge">Auto</div></div>
                <div className="prg-mock">
                  <div className="prg-bub prg-light prg-in">Is the programme good for beginners?</div>
                  <div className="prg-bub prg-light prg-out">Yes, it starts at your level. How many days a week can you train?</div>
                  <div className="prg-bub prg-light prg-in">3 or 4</div>
                  <div className="prg-bub prg-light prg-out">Perfect. Pick a time for a free call:</div>
                  <div className="prg-row prg-s"><span>Tagged</span><span>Good fit</span></div>
                  <div className="prg-row prg-s"><span>Added to lead tracker</span><span>Yes</span></div>
                </div>
              </div>
              <p className="prg-cap">Replies, tags and bookings happen on their own.</p>
            </figure>
          </div>
        </div>
      </section>

      {/* 04 INCLUDED */}
      <section className="prg-sec prg-ivory" id="included" aria-labelledby="prg-inc-h">
        <div className="prg-c">
          <Head id="prg-inc-h" label="04 · What you get" title={<>Everything, <em>A to Z.</em></>} lead="From a follower tapping your link to a booked call, a paid client and their first check-in." />
          <ul className="pgv-grid pgv-grid-compact">
            {INCLUDED.map(([icon, t, x]) => (
              <li className="pgv-tile" key={t}>
                <span className="pgv-ico"><Icon name={icon} /></span>
                <strong>{t}</strong>
                <p>{x}</p>
              </li>
            ))}
          </ul>
          <div className="pgv-tools">
            <span>Works with</span>
            <ul aria-label="Connected tools">{TOOLS.map((t) => <li key={t}>{t}</li>)}</ul>
          </div>
        </div>
      </section>

      {/* 05 GETTING LIVE */}
      <section className="prg-sec" id="onboarding" aria-labelledby="prg-live-h">
        <div className="prg-c">
          <Head id="prg-live-h" label="05 · Getting live" title={<>You do 3 things. <em>We do the rest.</em></>} lead="No meetings, no screen-sharing, no passwords to hand over." center />
          <div className="pgv-split">
            <div className="pgv-panel">
              <h3>Your part</h3>
              <ol className="pgv-todo">
                {YOUR_STEPS.map(([icon, t, x, time], i) => (
                  <li key={t}>
                    <span className="pgv-num" aria-hidden="true">{i + 1}</span>
                    <div>
                      <strong><Icon name={icon} size={18} /> {t}</strong>
                      <p>{x}</p>
                      {i === 0 && <a className="pgv-start" href="#intake">Start the form <span aria-hidden="true">→</span></a>}
                    </div>
                    <span className="pgv-time">{time}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="pgv-panel pgv-panel-dk">
              <h3>Our part</h3>
              <ul className="pgv-checks">{WE_DO.map((t) => <li key={t}><Icon name="check" size={18} />{t}</li>)}</ul>
              <p className="pgv-login"><Icon name="user" size={18} /><span>You get <b>one login</b> for everything: <b>hello@yourbrand.co.uk</b></span></p>
            </div>
          </div>
        </div>
      </section>

      {/* 06 PRICING (plan picker replaces the old static calculator) */}
      <section className="prg-sec prg-ivory" id="pricing" aria-labelledby="prg-price-h">
        <span id="budget" aria-hidden="true" />
        <div className="prg-c">
          <Head id="prg-price-h" label="06 · Pricing" title={<>Pick your plan in <em>3 taps.</em></>} lead="One fixed build price, optional monthly care, and every other cost shown up front." center />
          <PrgPlanPicker />
        </div>
      </section>

      {/* 07 RUNNING COSTS */}
      <section className="prg-sec" id="costs" aria-labelledby="prg-costs-h">
        <div className="prg-c">
          <Head id="prg-costs-h" label="07 · No surprises" title={<>What else you&apos;ll <em>pay.</em></>} lead="A few costs belong in your name because they handle your money or your phone number. Here they are." />
          <div className="pgv-costs">
            <ul className="pgv-costlist" aria-label="Paid directly by you">
              {DIRECT_COSTS.map(([icon, n, p, x]) => (
                <li key={n}>
                  <span className="pgv-ico"><Icon name={icon} /></span>
                  <div><strong>{n}</strong><p>{x}</p></div>
                  <b className="pgv-cost">{p}</b>
                </li>
              ))}
            </ul>
            <div className="pgv-panel pgv-panel-dk">
              <h3>Included in Care</h3>
              <ul className="pgv-checks">{IN_CARE.map((t) => <li key={t}><Icon name="check" size={18} />{t}</li>)}</ul>
            </div>
          </div>
          <p className="pgv-fine">List prices checked November 2026 and may change. Calendly and Meta charge in US dollars.</p>
        </div>
      </section>

      {/* 08 SAFEGUARDS */}
      <section className="prg-sec prg-dk" id="safeguards" aria-labelledby="prg-safe-h">
        <div className="prg-c">
          <Head id="prg-safe-h" label="08 · Built in" title={<>Honest by <em>design.</em></>} lead="The things leads, clients and UK rules expect, set up from day one." />
          <p className="pgv-swipe pgv-swipe-dk" aria-hidden="true">Swipe <span>→</span></p>
          <ul className="pgv-grid pgv-grid-4 pgv-rail" tabIndex={0} aria-label="Safeguards, scroll sideways on small screens">
            {SAFEGUARDS.map(([icon, t, x]) => (
              <li className="pgv-tile pgv-tile-dk" key={t}>
                <span className="pgv-ico"><Icon name={icon} /></span>
                <strong>{t}</strong>
                <p>{x}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* INTAKE FORM */}
      <section className="prg-sec prg-ivory" id="intake" aria-labelledby="prg-intake-h">
        <div className="prg-c pgv-intake">
          <Head id="prg-intake-h" label="Your part · Step 1" title={<>Tell us about your <em>programme.</em></>} lead="4 short steps, about 10 minutes. No payment is taken, and your answers save as you go." center />
          <PrgIntakeForm />
        </div>
      </section>

      {/* FAQ */}
      <section className="prg-sec prg-faq" id="faq" aria-labelledby="prg-faq-h">
        <div className="prg-c">
          <div className="prg-head prg-center"><h2 id="prg-faq-h">Questions before you <em>start?</em></h2></div>
          <div className="prg-faq-list">
            {FAQ.map(([q, a]) => (
              <details key={q}><summary>{q}</summary><p>{a}</p></details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="prg-cta" id="start" aria-labelledby="prg-cta-h">
        <div className="prg-c">
          <div className="prg-label">For UK personal brand fitness coaches</div>
          <h2 id="prg-cta-h">Let&apos;s build your <em>client system.</em></h2>
          <p>Book a free strategy call. We&apos;ll recommend the right launch and map out your page, offer and follow-ups.</p>
          <PrgCtaPair dark />
        </div>
      </section>

      {/* Mobile-only sticky action bar */}
      <nav className="pgv-mbar" aria-label="Quick actions">
        <a href="#pricing" className="pgv-mbar-price"><b>From £499</b><span>See plans</span></a>
        <a className="prg-btn" href="#start">Free strategy call <span aria-hidden="true">→</span></a>
      </nav>
    </div>
  );
}