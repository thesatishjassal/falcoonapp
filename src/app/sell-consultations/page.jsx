import { DM_Sans, Fraunces } from "next/font/google";
import "../sell-consultations.css";
import ScnMotion from "../components/ScnMotion";
import ScnPricing from "../components/ScnPricing";
import ScnBudgetCalc, { ScnCtaPair } from "../components/ScnBudgetCalc";

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

export const metadata = {
  title: "Sell Consultations Online | Falcoon",
  description:
    "Clients book and pay before they talk to you, with no negotiation and no delays. We build the consultation funnel that fills your diary with paid calls.",
};

const LEDGER = [
  ["First consultation", "Client picks a time and pays", "Zoom or Meet link sent instantly"],
  ["Programme review", "Booked and paid in one step", "Added to your calendar"],
  ["Strategy session", "Paid at the point of booking", "Reminders go out automatically"],
  ["Discovery call", "Fee taken before the call", "Next step offered afterwards"],
];

const FLOW = [
  ["Discover", "A page in your voice that explains who the consultation is for and what they walk away with."],
  ["Choose a time", "Clients pick from your real availability, with no back-and-forth."],
  ["Pay", "Payment is taken at booking, so the slot is only held once it's paid."],
  ["Confirm", "The client gets an instant confirmation with their Zoom or Meet link and calendar invite."],
  ["Remind", "Automatic reminders before the call, so fewer no-shows and less admin."],
  ["Next step", "After the call, invite them into coaching or a programme while the conversation is fresh."],
];

const INTEGRATIONS = [
  ["Payments", "Get paid at booking", [["Stripe", "#635bff"], ["PayPal", "#003087"], ["Apple Pay", "#111"], ["Google Pay", "#4285f4"]]],
  ["Video calls", "Meeting links, created for you", [["Zoom", "#2d8cff"], ["Google Meet", "#00897b"], ["Microsoft Teams", "#5059c9"]]],
  ["Calendars", "Always in sync", [["Google Calendar", "#4285f4"], ["Outlook", "#0078d4"], ["Apple Calendar", "#fa3e3e"]]],
  ["Email & messaging", "Confirmations and reminders", [["Email", "#ea4335"], ["WhatsApp", "#25d366"], ["SMS", "#6b6b6b"], ["Mailchimp", "#ffb800"]]],
  ["Automation & CRM", "Follow-ups on autopilot", [["Zapier", "#ff4a00"], ["Make", "#6d00cc"], ["HubSpot", "#ff7a59"], ["Google Sheets", "#0f9d58"], ["Notion", "#222"]]],
];

const AUTO = [
  ["Booking page", "Client picks a time", "Chosen from your real availability."],
  ["Stripe · PayPal", "Payment taken", "The slot is secured once paid."],
  ["Zoom · Google Meet", "Link created", "Unique meeting link generated."],
  ["Google · Outlook", "Calendar updated", "Added for you and the client."],
  ["Email · WhatsApp · SMS", "Reminders sent", "Fewer no-shows, less admin."],
  ["CRM · Zapier · Make", "Follow-up triggered", "Next offer sent after the call."],
];

const FAQ = [
  ["Is the £149 a monthly fee?", "No. £149 is a one-time payment for your funnel build. Hosting and your domain are free for the first year, and ongoing support is optional from £39 a month."],
  ["Do I need my own Stripe or PayPal account?", "Yes. We connect your own account so payments land straight with you. GoCardless Direct Debit suits monthly coaching plans."],
  ["Which tools can you connect?", "Zoom, Google Meet, Microsoft Teams and Calendly for sessions, plus Stripe, PayPal and GoCardless for payments, and email, WhatsApp and your CRM."],
  ["What does the free website audit cover?", "A free strategy call where we map out the consultation funnel for your offer, so you know what to build before you spend anything."],
  ["Can counsellors and therapists use this?", "Yes. The same booking, payment and meeting-link funnel works for counselling and therapy sessions. We build the funnel only and don't handle session content or client records."],
];

export default function SellConsultationsPage() {
  return (
    <div className={`scn-page ${dmSans.variable} ${fraunces.variable}`}>
      <ScnMotion />

      {/* STICKY TOP ACTION BAR */}
      {/* <nav className="scx-top" aria-label="Quick actions">
        <a href="#pricing">Pricing</a>
        <a href="#budget">Budget calculator</a>
        <a href={CALENDLY} className="scn-btn" target="_blank" rel="noopener">
          Book free website audit
        </a>
      </nav> */}

      {/* HERO */}
      <section className="scn-hero">
        <div className="scn-c scn-hero-in">
          <div>
            <div className="scn-eyebrow">For UK personal brand fitness coaches</div>
            <h1>
              Get paid before the <em>call.</em>
            </h1>
            <p>
              Clients book and pay before they talk to you, with no negotiation
              and no delays. We build the consultation funnel that fills your
              diary with paid calls.
            </p>
            <ScnCtaPair dark />
            <p className="scx-micro">Free audit. No payment needed. Funnels from £149 one-time.</p>
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
              <div className="scn-lock-foot">£225 paid before the first call</div>
            </div>
          </div>
        </div>
        <div className="scn-c scn-pillars">
          <div>
            <b>Auto booking funnels</b>
            <span>Clients choose a time and book themselves in.</span>
          </div>
          <div>
            <b>Paid Zoom/Meet integration</b>
            <span>Payment first, then the meeting link is sent.</span>
          </div>
          <div>
            <b>Smart calendar sync</b>
            <span>Bookings land in your diary with no double-bookings.</span>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="scn-sec scn-ivory">
        <div className="scn-c">
          <div className="scn-label">01 — The idea</div>
          <div className="scn-idea-top">
            <h2>
              Your time is the product. Treat it <em>that way.</em>
            </h2>
            <p className="scn-lead">
              If someone wants an hour of your expertise, they should be able to
              see it, book it and pay for it in minutes, without sending a
              single DM.
              <br />
              <br />
              <strong>
                Every call in your diary should{" "}
                <span className="scn-ul scn-green">already be paid for.</span>
              </strong>
            </p>
          </div>
          <div className="scn-ledger">
            {LEDGER.map(([b, s, e]) => (
              <div key={b}>
                <b>{b}</b>
                <span>{s}</span>
                <em>{e}</em>
              </div>
            ))}
          </div>
          <div className="scx-cta"><ScnCtaPair /></div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="scn-sec scn-dk">
        <div className="scn-c scn-two">
          <div>
            <div className="scn-label">02 — The problem</div>
            <h2 style={{ marginTop: "20px" }}>
              Stop <span className="scn-ul scn-red">negotiating </span> before
              you&apos;ve even <em>spoken.</em>
            </h2>
          </div>
          <div>
            <p className="scn-lead">
              Free calls with unpaid strangers cost you hours, and booking by DM
              costs you more. By the time a time is agreed, the interest has
              often gone. Clients who have already booked and paid turn up ready
              to work.
            </p>
            <div className="scn-list">
              <div className="scn-li">Endless DMs about price and availability</div>
              <div className="scn-li">
                <span className="scn-ul scn-red">Unpaid calls</span> and no-shows
              </div>
              <div className="scn-li">Sending meeting links by hand</div>
              <div className="scn-li">Double-booked diaries</div>
            </div>
            <div className="scx-cta"><ScnCtaPair dark secondary="budget" /></div>
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="scn-sec" id="system">
        <div className="scn-c">
          <div className="scn-head scn-sys-h">
            <div>
              <div className="scn-label">03 — The funnel</div>
              <h2 style={{ marginTop: "20px" }}>
                From click to <em>paid call.</em>
              </h2>
            </div>
            <p className="scn-lead">
              We build the full consultation journey around your offer, your
              brand and your diary.
            </p>
          </div>
          <div className="scn-flow">
            {FLOW.map(([t, x], i) => (
              <div className="scn-fi" key={t}>
                <div className="scn-fn">{String(i + 1).padStart(2, "0")}</div>
                <div className="scn-ft">{t}</div>
                <div className="scn-fx">{x}</div>
              </div>
            ))}
          </div>
          <div className="scx-cta"><ScnCtaPair /></div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="scn-sec scn-ivory" id="consultations">
        <div className="scn-c">
          <div className="scn-head scn-center">
            <div className="scn-label">04 — Sell consultations</div>
            <h2>
              Clients book and pay <em>before</em> they talk to you.
            </h2>
            <p className="scn-lead">
              No negotiation, no delays. Here&apos;s what we build for you.
            </p>
          </div>
          <div className="scn-grid3">
            <article className="scn-card">
              <small>01</small>
              <h3>Auto booking funnels</h3>
              <p>
                A dedicated page where clients choose a time and book themselves
                in, so there are no DMs, no emails and no waiting for you to
                reply.
              </p>
            </article>
            <article className="scn-card">
              <small>02</small>
              <h3>Paid Zoom/Meet integration</h3>
              <p>
                Payment is taken at booking and the Zoom or Google Meet link is
                sent automatically. The call only exists{" "}
                <span className="scn-ul scn-green">once it&apos;s paid for.</span>
              </p>
            </article>
            <article className="scn-card">
              <small>03</small>
              <h3>Smart calendar sync</h3>
              <p>
                Bookings drop straight into your calendar and respect your
                availability, so there are no double-bookings and no manual
                updates.
              </p>
            </article>
          </div>
          <div className="scx-cta scx-center"><ScnCtaPair /></div>
        </div>
      </section>

      {/* SHOWCASE */}
      <section className="scn-sec scn-dk">
        <div className="scn-c">
          <div className="scn-head" style={{ maxWidth: "780px" }}>
            <div className="scn-label">05 — See it in action</div>
            <h2>
              One funnel. <em>Every kind</em> of call.
            </h2>
            <p className="scn-lead">
              Whether you coach one client at a time or run a group session, the
              booking, payment and meeting link all happen before the call
              starts.
            </p>
          </div>
          <div className="scn-grid3">
            <div>
              <div className="scn-sl">Booking &amp; payment</div>
              <div className="scn-win">
                <div className="scn-bar">
                  <div className="scn-dots"><i></i><i></i><i></i></div>
                  <b>yourname.co.uk/book</b>
                </div>
                <div className="scn-mock">
                  <h4>Book your consultation</h4>
                  <div className="scn-sub">45 minutes · Zoom or Google Meet</div>
                  <div className="scn-days">
                    {[["Mon", 12], ["Tue", 13, 1], ["Wed", 14], ["Thu", 15], ["Fri", 16]].map(([d, n, on]) => (
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
                  <div className="scn-row"><span>Consultation</span><span>£75</span></div>
                  <div className="scn-meth">
                    <span>Card</span><span>PayPal</span><span>Apple Pay</span>
                  </div>
                  <div className="scn-pay">Pay &amp; confirm booking</div>
                </div>
              </div>
              <p className="scn-cap">Clients pick a time and pay in one step.</p>
            </div>

            <div>
              <div className="scn-sl">Instant confirmation</div>
              <div className="scn-win">
                <div className="scn-bar">
                  <div className="scn-dots"><i></i><i></i><i></i></div>
                  <b>Confirmation email</b>
                  <div className="scn-badge">Paid</div>
                </div>
                <div className="scn-mock">
                  <h4>You&apos;re booked</h4>
                  <div className="scn-sub">Your link and calendar invite are below</div>
                  <div className="scn-row scn-s"><span>Session</span><span>Strategy session</span></div>
                  <div className="scn-row scn-s"><span>When</span><span>Tue 13, 11:30</span></div>
                  <div className="scn-row scn-s"><span>Where</span><span>Zoom link included</span></div>
                  <div className="scn-row"><span>Paid</span><span>£75</span></div>
                  <div className="scn-pay">Add to calendar</div>
                </div>
              </div>
              <p className="scn-cap">The Zoom or Meet link arrives the moment payment clears.</p>
            </div>

            <div>
              <div className="scn-sl">Calendar sync</div>
              <div className="scn-win">
                <div className="scn-bar">
                  <div className="scn-dots"><i></i><i></i><i></i></div>
                  <b>Your calendar · Tuesday</b>
                </div>
                <div className="scn-mock">
                  <h4>Today&apos;s diary</h4>
                  <div className="scn-sub">Booked, paid and synced</div>
                  <div className="scn-row scn-s"><span>09:30 Discovery call</span><span>£75 Paid</span></div>
                  <div className="scn-row scn-s"><span>11:30 Strategy session</span><span>£75 Paid</span></div>
                  <div className="scn-row scn-s"><span>14:00 Group Q&amp;A</span><span>£240 Paid</span></div>
                  <div className="scn-row scn-s"><span>16:00 Training</span><span>Blocked</span></div>
                  <div className="scn-pay">Synced with Google Calendar</div>
                </div>
              </div>
              <p className="scn-cap">Bookings respect your availability, so there are no double-bookings.</p>
            </div>
          </div>
          <div className="scx-cta scx-center"><ScnCtaPair dark /></div>
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section className="scn-sec scn-ivory" id="integrations">
        <div className="scn-c">
          <div className="scn-head scn-center">
            <div className="scn-label">06 — Integrations</div>
            <h2>
              Plugs into the tools you <em>already use.</em>
            </h2>
            <p className="scn-lead">
              Payments, video calls, calendars and automation, connected into
              one funnel that runs without you.
            </p>
          </div>
          <div className="scn-grid3">
            {INTEGRATIONS.map(([s, h, chips]) => (
              <div className="scn-ic" key={s}>
                <small>{s}</small>
                <h3>{h}</h3>
                <div className="scn-chips">
                  {chips.map(([n, c]) => (
                    <span className="scn-chip" style={{ "--d": c }} key={n}>
                      <i></i>
                      {n}
                    </span>
                  ))}
                </div>
              </div>
            ))}
            <div className="scn-ic">
              <small>Something else?</small>
              <h3>Your own stack</h3>
              <p>
                Using another tool? If it connects through Zapier or Make, we
                can wire it into your funnel.
              </p>
            </div>
          </div>

          <div className="scn-auto">
            <h3>
              What happens <em>automatically.</em>
            </h3>
            <p>
              From the moment a client books, nothing needs your attention until
              the call.
            </p>
            <div className="scn-af">
              {AUTO.map(([s, t, x], i) => (
                <div key={t} style={{ display: "contents" }}>
                  {i > 0 && <div className="scn-ar">→</div>}
                  <div className="scn-node">
                    <small>{s}</small>
                    <strong>{t}</strong>
                    {x}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="scx-cta scx-center"><ScnCtaPair /></div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="scn-quote">
        <div className="scn-c">
          <div className="scn-qm">&ldquo;</div>
          <h2>
            Your calendar should be full of <em>paid conversations.</em>
          </h2>
        </div>
      </section>

      {/* PARTNERSHIP */}
      <section className="scn-sec scn-part" id="partnership">
        <div className="scn-c scn-two">
          <div className="scn-dash" aria-hidden="true">
            <div className="scn-dh">
              <span>Your calendar · Tuesday</span>
              <span className="scn-badge">Example</span>
            </div>
            {[
              ["09:30", "Discovery call", "Zoom · 1:1", "£75"],
              ["11:30", "Strategy session", "Google Meet · 1:1", "£75"],
              ["14:00", "Group Q&A", "Google Meet · 8 clients", "£240"],
            ].map(([t, n, w, p]) => (
              <div className="scn-dr" key={t}>
                <time>{t}</time>
                <div>
                  <strong>{n}</strong>
                  <small>{w}</small>
                </div>
                <em>{p} · Paid</em>
              </div>
            ))}
            <div className="scn-df">Link sent · Calendar synced · Reminder queued</div>
          </div>

          <div>
            <div className="scn-label" style={{ color: "var(--gold-l)" }}>
              07 — The partnership
            </div>
            <h2>
              You run the <em>consultation.</em>
              <br />
              We build the <em>funnel.</em>
            </h2>
            <p>
              Falcoon builds and sets up your consultation funnel for you, so
              you can see it, book it and start selling without touching the
              tech.
            </p>
            <div className="scn-checks">
              <div className="scn-chk">Consultation landing page in your brand</div>
              <div className="scn-chk">Auto booking funnel</div>
              <div className="scn-chk">Payment at booking</div>
              <div className="scn-chk">Zoom/Meet links sent automatically</div>
              <div className="scn-chk">Calendar sync and reminders</div>
              <div className="scn-chk">Mobile-first experience</div>
            </div>
            <ScnCtaPair dark />
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
      <section className="scn-cta">
        <div className="scn-c">
          <div className="scn-label">For UK personal brand fitness coaches</div>
          <h2>
            Let&apos;s build your <em>consultation funnel.</em>
          </h2>
          <p>
            Book a free website audit and we&apos;ll map out the funnel that
            gets your clients booked and paid before they talk to you.
          </p>
          <ScnCtaPair dark />
        </div>
      </section>
    </div>
  );
}