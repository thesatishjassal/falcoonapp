import { DM_Sans, Fraunces } from "next/font/google";
import "../sell-consultations.css";
import ScnMotion from "../components/ScnMotion";
import ScnPricing from "../components/ScnPricing";
import ScnBudgetCalc, { ScnCtaPair } from "../components/ScnBudgetCalc";
import { CORE, SUPPORT, MIN_ADDON, gbp } from "../components/pricing-data";

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

const CARE = SUPPORT.find((s) => s.id === "care");
const GROWTH = SUPPORT.find((s) => s.id === "growth");

export const metadata = {
  title: "Sell Consultations Online | Paid Booking Funnels | Falcoon",
  description: `Clients book and pay before they talk to you. We build the consultation funnel that fills your diary with paid calls, from ${gbp(CORE.price)} one-time.`,
};

/* Simple line icons (inherit colour, decorative) */
const Ico = ({ children }) => (
  <span className="scn-ico" aria-hidden="true">
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  </span>
);

const ICONS = {
  dm: <path d="M4 5h16v11H9l-5 4z" />,
  noshow: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20c0-3.5 3-6 6.5-6s6.5 2.5 6.5 6M17 9l5 5M22 9l-5 5" />
    </>
  ),
  link: (
    <path d="M10 14a4 4 0 005.7 0l3-3a4 4 0 00-5.7-5.7l-1 1M14 10a4 4 0 00-5.7 0l-3 3a4 4 0 005.7 5.7l1-1" />
  ),
  double: (
    <>
      <rect x="8" y="8" width="12" height="12" rx="2" />
      <path d="M4 16V6a2 2 0 012-2h10" />
    </>
  ),
  page: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M4 9h16M8 13h8" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="15" rx="2" />
      <path d="M3.5 10h17M8 3v4M16 3v4" />
    </>
  ),
  card: (
    <>
      <rect x="3" y="6" width="18" height="13" rx="2" />
      <path d="M3 11h18M7 15h4" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </>
  ),
  bell: <path d="M6 16v-5a6 6 0 0112 0v5l2 2H4zM10 21h4" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
};

const PROBLEMS = [
  ["dm", "Endless DMs about price and availability"],
  ["noshow", "Unpaid calls and no-shows"],
  ["link", "Meeting links sent by hand"],
  ["double", "Double-booked diaries"],
];

const FLOW = [
  [
    "Discover",
    "A page in your voice that explains who the consultation is for and what they walk away with.",
  ],
  [
    "Choose a time",
    "Clients pick from your real availability, with no back-and-forth.",
  ],
  [
    "Pay",
    "Payment is taken at booking, so the slot is only held once it's paid.",
  ],
  [
    "Confirm",
    "An instant confirmation with their Zoom or Meet link and calendar invite.",
  ],
  [
    "Remind",
    "Automatic reminders before the call, so fewer no-shows and less admin.",
  ],
  [
    "Next step",
    "After the call, invite them into coaching or a programme while the conversation is fresh.",
  ],
];

const FLOW_ICONS = ["page", "calendar", "card", "mail", "bell", "arrow"];

// One compact row replaces the old five-card integrations section
const WORKS_WITH = [
  ["Stripe", "#635bff"],
  ["PayPal", "#003087"],
  ["Apple Pay", "#111"],
  ["Zoom", "#2d8cff"],
  ["Google Meet", "#00897b"],
  ["Microsoft Teams", "#5059c9"],
  ["Google Calendar", "#4285f4"],
  ["Outlook", "#0078d4"],
  ["WhatsApp", "#25d366"],
  ["Zapier", "#ff4a00"],
];

const FAQ = [
  [
    `Is the ${gbp(CORE.price)} a monthly fee?`,
    `No. ${gbp(CORE.price)} is a one-time payment for your funnel build. Hosting and your domain are free for the first year, and ongoing support is optional from ${gbp(CARE.price)} a month.`,
  ],
  [
    "What is included?",
    `A landing page, booking and checkout page and thank-you page, written for you, mobile ready and connected to your email. Extras such as Calendly booking, meeting links, WhatsApp and Direct Debit are add-ons from ${gbp(MIN_ADDON)}.`,
  ],
  [
    "Do I need my own Stripe or PayPal account?",
    "Yes. We connect your own account so payments land straight with you. GoCardless Direct Debit suits monthly coaching plans.",
  ],
  [
    "Which tools can you connect?",
    "Zoom, Google Meet, Microsoft Teams and Calendly for sessions, plus Stripe, PayPal and GoCardless for payments, and email, WhatsApp and your CRM.",
  ],
  [
    "Can counsellors and therapists use this?",
    "Yes. The same booking, payment and meeting-link funnel works for counselling and therapy sessions. We build the funnel only and don't handle session content or client records.",
  ],
  [
    "What happens on the free call?",
    "We map out the consultation funnel for your offer, so you know exactly what to build and what it costs before you spend anything.",
  ],
];

export default function SellConsultationsPage() {
  return (
    <div className={`scn-page ${dmSans.variable} ${fraunces.variable}`}>
      <ScnMotion />

      {/* HERO */}
      <section className="scn-hero">
        <div className="scn-c scn-hero-in">
          <div>
            <div className="scn-eyebrow">For UK coaches and counsellors</div>
            <h1>
              Get paid before the <em>call.</em>
            </h1>
            <p>
              Clients book and pay before they talk to you. No DMs, no
              negotiating, no unpaid calls. We build the funnel that fills your
              diary with paid consultations.
            </p>
            <ScnCtaPair dark />
            <p className="scx-micro">
              Free strategy call. Funnels from {gbp(CORE.price)} one-time.
            </p>
          </div>
          <div className="scn-hv" aria-hidden="true">
            <div className="scn-phone scn-diaryphone">
              <div className="scn-ph-h">
                <b>Tomorrow</b>
                <span>Tuesday 13 January</span>
              </div>
              {[
                ["09:30", "Discovery call", "Zoom · 1:1"],
                ["11:30", "Strategy session", "Google Meet · 1:1"],
                ["14:00", "Programme review", "Zoom · 1:1"],
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
              <div className="scn-lock-foot">
                £225 paid before the first call
              </div>
            </div>
          </div>
        </div>
        <div className="scn-c scn-pillars">
          <div>
            <b>Self-booking page</b>
            <span>Clients choose a time and book themselves in.</span>
          </div>
          <div>
            <b>Pay first, then the link</b>
            <span>The Zoom or Meet link is sent once payment clears.</span>
          </div>
          <div>
            <b>Calendar sync</b>
            <span>Bookings land in your diary with no double-bookings.</span>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="scn-sec scn-dk" aria-labelledby="scn-problem-h">
        <div className="scn-c scn-two">
          <div>
            <h2 id="scn-problem-h">
              Stop <span className="scn-ul scn-red">negotiating </span> before
              you&apos;ve even <em>spoken.</em>
            </h2>
          </div>
          <div>
            <p className="scn-lead">
              Free calls with unpaid strangers cost you hours, and booking by DM
              costs you more. Clients who have already booked and paid turn up
              ready to work.
            </p>
            <div className="scn-list">
              {PROBLEMS.map(([k, t]) => (
                <div className="scn-li" key={t}>
                  <Ico>{ICONS[k]}</Ico>
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="scn-sec" id="system" aria-labelledby="scn-flow-h">
        <div className="scn-c">
          <div className="scn-head scn-sys-h">
            <div>
              <h2 id="scn-flow-h">
                From click to <em>paid call.</em>
              </h2>
            </div>
            <p className="scn-lead">
              We build the full journey around your offer, your brand and your
              diary.
            </p>
          </div>
          <div className="scn-flow">
            {FLOW.map(([t, x], i) => (
              <div className="scn-fi" key={t}>
                <Ico>{ICONS[FLOW_ICONS[i]]}</Ico>
                <div className="scn-fn">Step {i + 1}</div>
                <div className="scn-ft">{t}</div>
                <div className="scn-fx">{x}</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "40px" }}>
            <div className="scn-sl">Works with the tools you already use</div>
            <div className="scn-chips">
              {WORKS_WITH.map(([n, c]) => (
                <span className="scn-chip" style={{ "--d": c }} key={n}>
                  <i></i>
                  {n}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SHOWCASE */}
      <section className="scn-sec scn-dk" aria-labelledby="scn-show-h">
        <div className="scn-c">
          <div className="scn-head" style={{ maxWidth: "780px" }}>
            <h2 id="scn-show-h">
              Book, pay, <em>confirmed.</em>
            </h2>
            <p className="scn-lead">
              Whether you coach one client at a time or run a group session, the
              booking, payment and meeting link all happen before the call
              starts.
            </p>
          </div>
          <div className="scn-grid3">
            <div>
              <div className="scn-sl">Booking and payment</div>
              <div className="scn-win" aria-hidden="true">
                <div className="scn-bar">
                  <div className="scn-dots">
                    <i></i>
                    <i></i>
                    <i></i>
                  </div>
                  <b>yourname.co.uk/book</b>
                </div>
                <div className="scn-mock">
                  <h4>Book your consultation</h4>
                  <div className="scn-sub">
                    45 minutes · Zoom or Google Meet
                  </div>
                  <div className="scn-days">
                    {[
                      ["Mon", 12],
                      ["Tue", 13, 1],
                      ["Wed", 14],
                      ["Thu", 15],
                      ["Fri", 16],
                    ].map(([d, n, on]) => (
                      <span className={on ? "scn-on" : undefined} key={n}>
                        {d}
                        <br />
                        {n}
                      </span>
                    ))}
                  </div>
                  <div className="scn-slots">
                    <span>10:00</span>
                    <span className="scn-on">11:30</span>
                    <span>14:00</span>
                  </div>
                  <div className="scn-row">
                    <span>Consultation</span>
                    <span>£75</span>
                  </div>
                  <div className="scn-meth">
                    <span>Card</span>
                    <span>PayPal</span>
                    <span>Apple Pay</span>
                  </div>
                  <div className="scn-pay">Pay and confirm booking</div>
                </div>
              </div>
              <p className="scn-cap">
                Clients pick a time and pay in one step.
              </p>
            </div>

            <div>
              <div className="scn-sl">Instant confirmation</div>
              <div className="scn-win" aria-hidden="true">
                <div className="scn-bar">
                  <div className="scn-dots">
                    <i></i>
                    <i></i>
                    <i></i>
                  </div>
                  <b>Confirmation email</b>
                  <div className="scn-badge">Paid</div>
                </div>
                <div className="scn-mock">
                  <h4>You&apos;re booked</h4>
                  <div className="scn-sub">
                    Your link and calendar invite are below
                  </div>
                  <div className="scn-row scn-s">
                    <span>Session</span>
                    <span>Strategy session</span>
                  </div>
                  <div className="scn-row scn-s">
                    <span>When</span>
                    <span>Tue 13, 11:30</span>
                  </div>
                  <div className="scn-row scn-s">
                    <span>Where</span>
                    <span>Zoom link included</span>
                  </div>
                  <div className="scn-row">
                    <span>Paid</span>
                    <span>£75</span>
                  </div>
                  <div className="scn-pay">Add to calendar</div>
                </div>
              </div>
              <p className="scn-cap">
                The link arrives the moment payment clears.
              </p>
            </div>

            <div>
              <div className="scn-sl">Calendar sync</div>
              <div className="scn-win" aria-hidden="true">
                <div className="scn-bar">
                  <div className="scn-dots">
                    <i></i>
                    <i></i>
                    <i></i>
                  </div>
                  <b>Your calendar · Tuesday</b>
                </div>
                <div className="scn-mock">
                  <h4>Today&apos;s diary</h4>
                  <div className="scn-sub">Booked, paid and synced</div>
                  <div className="scn-row scn-s">
                    <span>09:30 Discovery call</span>
                    <span>£75 Paid</span>
                  </div>
                  <div className="scn-row scn-s">
                    <span>11:30 Strategy session</span>
                    <span>£75 Paid</span>
                  </div>
                  <div className="scn-row scn-s">
                    <span>14:00 Group Q&amp;A</span>
                    <span>£240 Paid</span>
                  </div>
                  <div className="scn-row scn-s">
                    <span>16:00 Training</span>
                    <span>Blocked</span>
                  </div>
                  <div className="scn-pay">Synced with Google Calendar</div>
                </div>
              </div>
              <p className="scn-cap">No double-bookings, no manual updates.</p>
            </div>
          </div>
          <div className="scx-cta scx-center">
            <ScnCtaPair dark secondary="budget" />
          </div>
        </div>
      </section>

      {/* BUDGET CALCULATOR → PRICING + QUOTE */}
      <ScnBudgetCalc />
      <ScnPricing />

      {/* FAQ */}
      <section className="scn-sec scn-ivory scx-faq" id="faq">
        <div className="scn-c">
          <div className="scn-head scn-center">
            <h2>
              Questions before you <em>book?</em>
            </h2>
            <p className="scn-lead">
              Funnel build {gbp(CORE.price)} one-time. Support {gbp(CARE.price)}{" "}
              or {gbp(GROWTH.price)} a month, optional.
            </p>
          </div>
          <div className="scx-faq-list">
            {FAQ.map(([q, a], i) => (
              <details key={q} open={i === 0}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="scn-cta">
        <div className="scn-c">
          <h2>
            Let&apos;s build your <em>consultation funnel.</em>
          </h2>
          <p>
            Book a free strategy call and we&apos;ll map out the funnel that
            gets your clients booked and paid before they talk to you.
          </p>
          <ScnCtaPair dark />
        </div>
      </section>
    </div>
  );
}
