import Link from "next/link";
import { DM_Sans, Fraunces } from "next/font/google";
import "../sell-consultations.css";
import ScnMotion from "../components/ScnMotion";

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

export default function SellConsultationsPage() {
  return (
    <div className={`scn-page ${dmSans.variable} ${fraunces.variable}`}>
      <ScnMotion />
      {/* HERO */}
      <section className="scn-hero">
        <div className="scn-c scn-hero-in">
          <div>
            <div className="scn-eyebrow">
              For UK personal brand fitness coaches
            </div>
            <h1>
              Get paid before the <em>call.</em>
            </h1>
            <p>
              Clients book and pay before they talk to you, with no negotiation
              and no delays. We build the consultation funnel that fills your
              diary with paid calls.
            </p>
            <a
              href={CALENDLY}
              className="scn-btn"
              target="_blank"
              rel="noopener"
            >
              Build my consultation funnel <span>→</span>
            </a>
          </div>
          <div className="scn-hv" aria-hidden="true">
            <div className="scn-phone scn-diaryphone">
              <div className="scn-ph-h">
                <b>Tomorrow</b>
                <span>Tuesday 13 January</span>
              </div>
              <div className="scn-ds">
                <time>09:30</time>
                <div>
                  <strong>Discovery call</strong>
                  <small>Zoom · 1:1</small>
                </div>
                <em>£75 Paid</em>
              </div>
              <div className="scn-ds">
                <time>11:30</time>
                <div>
                  <strong>Strategy session</strong>
                  <small>Google Meet · 1:1</small>
                </div>
                <em>£75 Paid</em>
              </div>
              <div className="scn-ds">
                <time>14:00</time>
                <div>
                  <strong>Programme review</strong>
                  <small>Zoom · 1:1</small>
                </div>
                <em>£75 Paid</em>
              </div>
              <div className="scn-lock-foot">
                £225 paid before the first call
              </div>
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
            <div>
              <b>First consultation</b>
              <span>Client picks a time and pays</span>
              <em>Zoom or Meet link sent instantly</em>
            </div>
            <div>
              <b>Programme review</b>
              <span>Booked and paid in one step</span>
              <em>Added to your calendar</em>
            </div>
            <div>
              <b>Strategy session</b>
              <span>Paid at the point of booking</span>
              <em>Reminders go out automatically</em>
            </div>
            <div>
              <b>Discovery call</b>
              <span>Fee taken before the call</span>
              <em>Next step offered afterwards</em>
            </div>
          </div>
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
              <div className="scn-li">
                Endless DMs about price and availability
              </div>
              <div className="scn-li">
                <span className="scn-ul scn-red">Unpaid calls</span> and
                no-shows
              </div>
              <div className="scn-li">Sending meeting links by hand</div>
              <div className="scn-li">Double-booked diaries</div>
            </div>
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
            <div className="scn-fi">
              <div className="scn-fn">01</div>
              <div className="scn-ft">Discover</div>
              <div className="scn-fx">
                A page in your voice that explains who the consultation is for
                and what they walk away with.
              </div>
            </div>
            <div className="scn-fi">
              <div className="scn-fn">02</div>
              <div className="scn-ft">Choose a time</div>
              <div className="scn-fx">
                Clients pick from your real availability, with no
                back-and-forth.
              </div>
            </div>
            <div className="scn-fi">
              <div className="scn-fn">03</div>
              <div className="scn-ft">Pay</div>
              <div className="scn-fx">
                Payment is taken at booking, so the slot is only held once
                it&apos;s paid.
              </div>
            </div>
            <div className="scn-fi">
              <div className="scn-fn">04</div>
              <div className="scn-ft">Confirm</div>
              <div className="scn-fx">
                The client gets an instant confirmation with their Zoom or Meet
                link and calendar invite.
              </div>
            </div>
            <div className="scn-fi">
              <div className="scn-fn">05</div>
              <div className="scn-ft">Remind</div>
              <div className="scn-fx">
                Automatic reminders before the call, so fewer no-shows and less
                admin.
              </div>
            </div>
            <div className="scn-fi">
              <div className="scn-fn">06</div>
              <div className="scn-ft">Next step</div>
              <div className="scn-fx">
                After the call, invite them into coaching or a programme while
                the conversation is fresh.
              </div>
            </div>
          </div>
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
                <span className="scn-ul scn-green">
                  once it&apos;s paid for.
                </span>
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
                    <span>
                      Mon
                      <br />
                      12
                    </span>
                    <span className="scn-on">
                      Tue
                      <br />
                      13
                    </span>
                    <span>
                      Wed
                      <br />
                      14
                    </span>
                    <span>
                      Thu
                      <br />
                      15
                    </span>
                    <span>
                      Fri
                      <br />
                      16
                    </span>
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
                  <div className="scn-pay">Pay &amp; confirm booking</div>
                </div>
              </div>
              <p className="scn-cap">
                Clients pick a time and pay in one step.
              </p>
            </div>

            <div>
              <div className="scn-sl">Instant confirmation</div>
              <div className="scn-win">
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
                The Zoom or Meet link arrives the moment payment clears.
              </p>
            </div>

            <div>
              <div className="scn-sl">Calendar sync</div>
              <div className="scn-win">
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
              <p className="scn-cap">
                Bookings respect your availability, so there are no
                double-bookings.
              </p>
            </div>
          </div>
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
            <div className="scn-ic">
              <small>Payments</small>
              <h3>Get paid at booking</h3>
              <div className="scn-chips">
                <span className="scn-chip" style={{ "--d": "#635bff" }}>
                  <i></i>Stripe
                </span>
                <span className="scn-chip" style={{ "--d": "#003087" }}>
                  <i></i>PayPal
                </span>
                <span className="scn-chip" style={{ "--d": "#111" }}>
                  <i></i>Apple Pay
                </span>
                <span className="scn-chip" style={{ "--d": "#4285f4" }}>
                  <i></i>Google Pay
                </span>
              </div>
            </div>
            <div className="scn-ic">
              <small>Video calls</small>
              <h3>Meeting links, created for you</h3>
              <div className="scn-chips">
                <span className="scn-chip" style={{ "--d": "#2d8cff" }}>
                  <i></i>Zoom
                </span>
                <span className="scn-chip" style={{ "--d": "#00897b" }}>
                  <i></i>Google Meet
                </span>
                <span className="scn-chip" style={{ "--d": "#5059c9" }}>
                  <i></i>Microsoft Teams
                </span>
              </div>
            </div>
            <div className="scn-ic">
              <small>Calendars</small>
              <h3>Always in sync</h3>
              <div className="scn-chips">
                <span className="scn-chip" style={{ "--d": "#4285f4" }}>
                  <i></i>Google Calendar
                </span>
                <span className="scn-chip" style={{ "--d": "#0078d4" }}>
                  <i></i>Outlook
                </span>
                <span className="scn-chip" style={{ "--d": "#fa3e3e" }}>
                  <i></i>Apple Calendar
                </span>
              </div>
            </div>
            <div className="scn-ic">
              <small>Email &amp; messaging</small>
              <h3>Confirmations and reminders</h3>
              <div className="scn-chips">
                <span className="scn-chip" style={{ "--d": "#ea4335" }}>
                  <i></i>Email
                </span>
                <span className="scn-chip" style={{ "--d": "#25d366" }}>
                  <i></i>WhatsApp
                </span>
                <span className="scn-chip" style={{ "--d": "#6b6b6b" }}>
                  <i></i>SMS
                </span>
                <span className="scn-chip" style={{ "--d": "#ffb800" }}>
                  <i></i>Mailchimp
                </span>
              </div>
            </div>
            <div className="scn-ic">
              <small>Automation &amp; CRM</small>
              <h3>Follow-ups on autopilot</h3>
              <div className="scn-chips">
                <span className="scn-chip" style={{ "--d": "#ff4a00" }}>
                  <i></i>Zapier
                </span>
                <span className="scn-chip" style={{ "--d": "#6d00cc" }}>
                  <i></i>Make
                </span>
                <span className="scn-chip" style={{ "--d": "#ff7a59" }}>
                  <i></i>HubSpot
                </span>
                <span className="scn-chip" style={{ "--d": "#0f9d58" }}>
                  <i></i>Google Sheets
                </span>
                <span className="scn-chip" style={{ "--d": "#222" }}>
                  <i></i>Notion
                </span>
              </div>
            </div>
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
              <div className="scn-node">
                <small>Booking page</small>
                <strong>Client picks a time</strong>Chosen from your real
                availability.
              </div>
              <div className="scn-ar">→</div>
              <div className="scn-node">
                <small>Stripe · PayPal</small>
                <strong>Payment taken</strong>The slot is secured once paid.
              </div>
              <div className="scn-ar">→</div>
              <div className="scn-node">
                <small>Zoom · Google Meet</small>
                <strong>Link created</strong>Unique meeting link generated.
              </div>
              <div className="scn-ar">→</div>
              <div className="scn-node">
                <small>Google · Outlook</small>
                <strong>Calendar updated</strong>Added for you and the client.
              </div>
              <div className="scn-ar">→</div>
              <div className="scn-node">
                <small>Email · WhatsApp · SMS</small>
                <strong>Reminders sent</strong>Fewer no-shows, less admin.
              </div>
              <div className="scn-ar">→</div>
              <div className="scn-node">
                <small>CRM · Zapier · Make</small>
                <strong>Follow-up triggered</strong>Next offer sent after the
                call.
              </div>
            </div>
          </div>
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
            <div className="scn-dr">
              <time>09:30</time>
              <div>
                <strong>Discovery call</strong>
                <small>Zoom · 1:1</small>
              </div>
              <em>£75 · Paid</em>
            </div>
            <div className="scn-dr">
              <time>11:30</time>
              <div>
                <strong>Strategy session</strong>
                <small>Google Meet · 1:1</small>
              </div>
              <em>£75 · Paid</em>
            </div>
            <div className="scn-dr">
              <time>14:00</time>
              <div>
                <strong>Group Q&amp;A</strong>
                <small>Google Meet · 8 clients</small>
              </div>
              <em>£240 · Paid</em>
            </div>
            <div className="scn-df">
              Link sent · Calendar synced · Reminder queued
            </div>
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
              <div className="scn-chk">
                Consultation landing page in your brand
              </div>
              <div className="scn-chk">Auto booking funnel</div>
              <div className="scn-chk">Payment at booking</div>
              <div className="scn-chk">Zoom/Meet links sent automatically</div>
              <div className="scn-chk">Calendar sync and reminders</div>
              <div className="scn-chk">Mobile-first experience</div>
            </div>
            <a
              href={CALENDLY}
              className="scn-btn"
              target="_blank"
              rel="noopener"
            >
              Book your strategy call <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="scn-cta">
        <div className="scn-c">
          <div className="scn-label">For UK personal brand fitness coaches</div>
          <h2>
            Let&apos;s build your <em>consultation funnel.</em>
          </h2>
          <p>
            Book a free strategy call and we&apos;ll map out the funnel that
            gets your clients booked and paid before they talk to you.
          </p>
          <a
            href={CALENDLY}
            className="scn-btn scn-d"
            target="_blank"
            rel="noopener"
          >
            Book a free strategy call <span>→</span>
          </a>
        </div>
      </section>
    </div>
  );
}
