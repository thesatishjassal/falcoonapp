import Link from "next/link";
import { DM_Sans, Fraunces } from "next/font/google";
import "../sell-fitness-programmes.css";

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
  title: "Sell Fitness Programmes Online | Falcoon",
  description:
    "Turn your coaching into a system that brings clients daily, not randomly. Falcoon builds high-converting landing pages, clear offer positioning and WhatsApp lead automation for UK personal brand fitness coaches.",
};

export default function SellFitnessProgrammesPage() {
  return (
    <div className={`prg-page ${dmSans.variable} ${fraunces.variable}`}>
      {/* HERO */}
      <section className="prg-hero">
        <div className="prg-c prg-hero-in">
          <div>
            <div className="prg-eyebrow">
              For UK personal brand fitness coaches
            </div>
            <h1>
              Clients every day, <em>not randomly.</em>
            </h1>
            <p>
              Turn your coaching into a system that brings clients daily. We
              build the pages, the offer and the WhatsApp automation that turn
              attention into booked calls.
            </p>
            <a
              href={CALENDLY}
              className="prg-btn"
              target="_blank"
              rel="noopener"
            >
              Build my client system <span>→</span>
            </a>
          </div>
          <div className="prg-hv" aria-hidden="true">
            <div className="prg-phone prg-chatphone">
              <div className="prg-chat-h">
                <b>New lead</b>
                <span>Today, 21:47</span>
              </div>
              <div className="prg-bub prg-in">
                Hi, saw your 12-week programme. Is it right for me?
              </div>
              <div className="prg-bub prg-out">
                Hi Sam! It&apos;s built for busy people who want to lose fat and
                build strength. What&apos;s your goal, and how many days can you
                train?
              </div>
              <div className="prg-bub prg-in">Lose 10kg, 4 days a week</div>
              <div className="prg-bub prg-out">
                Great fit. Free call with the coach: Thu 10:00 or Fri 17:30?
              </div>
              <div className="prg-lock-foot">
                Qualified and booked while you were offline
              </div>
            </div>
          </div>
        </div>
        <div className="prg-c prg-pillars">
          <div>
            <b>High-converting landing pages</b>
            <span>One page, one programme, one clear action.</span>
          </div>
          <div>
            <b>Clear offer positioning</b>
            <span>Say who it is for, what they get and why you.</span>
          </div>
          <div>
            <b>WhatsApp + lead automation</b>
            <span>Every enquiry answered, qualified and followed up.</span>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="prg-sec prg-ivory">
        <div className="prg-c">
          <div className="prg-label">01 — The idea</div>
          <div className="prg-idea-top">
            <h2>
              Posting more won&apos;t fix it. A <em>system</em> will.
            </h2>
            <p className="prg-lead">
              Most coaches get clients in bursts: a post goes well, enquiries
              arrive, then it goes quiet. Daily clients need a path that works
              every day, whatever you posted.
              <br />
              <br />
              <strong>Every follower should have one clear next step.</strong>
            </p>
          </div>
          <div className="prg-ledger">
            <div>
              <b>Instagram &amp; TikTok</b>
              <span>Lands on a page for one programme</span>
              <em>Opens a WhatsApp chat in one tap</em>
            </div>
            <div>
              <b>Paid ads</b>
              <span>Sees a clear offer, price and result</span>
              <em>Gets a reply in seconds</em>
            </div>
            <div>
              <b>Referrals &amp; DMs</b>
              <span>Shares the same single link</span>
              <em>Logged to your CRM automatically</em>
            </div>
            <div>
              <b>Quiet leads</b>
              <span>Receives a short follow-up sequence</span>
              <em>Comes back without you chasing</em>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="prg-sec prg-dk">
        <div className="prg-c prg-two">
          <div>
            <div className="prg-label">02 — The problem</div>
            <h2 style={{ marginTop: "20px" }}>
              Feast, then <em>famine.</em>
            </h2>
          </div>
          <div>
            <p className="prg-lead">
              Without a system, your income follows your posting. A good week
              fills your diary. A bad one empties it, and every lead you reply
              to late is a lead you may have lost.
            </p>
            <div className="prg-list">
              <div className="prg-li">Clients only when a post lands</div>
              <div className="prg-li">
                Followers who don&apos;t know what you sell
              </div>
              <div className="prg-li">Leads going cold in your DMs</div>
              <div className="prg-li">
                Following up by hand, when you remember
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="prg-sec" id="system">
        <div className="prg-c">
          <div className="prg-head prg-sys-h">
            <div>
              <div className="prg-label">03 — The system</div>
              <h2 style={{ marginTop: "20px" }}>
                From follower to <em>new client.</em>
              </h2>
            </div>
            <p className="prg-lead">
              We build the whole path around your programme, your brand and your
              audience.
            </p>
          </div>
          <div className="prg-flow">
            <div className="prg-fi">
              <div className="prg-fn">01</div>
              <div className="prg-ft">Attract</div>
              <div className="prg-fx">
                Your content and ads send people to one link, not a bio full of
                options.
              </div>
            </div>
            <div className="prg-fi">
              <div className="prg-fn">02</div>
              <div className="prg-ft">Land</div>
              <div className="prg-fx">
                A page that says who the programme is for, what they get and
                what it costs.
              </div>
            </div>
            <div className="prg-fi">
              <div className="prg-fn">03</div>
              <div className="prg-ft">Message</div>
              <div className="prg-fx">
                One tap opens WhatsApp with their question already started.
              </div>
            </div>
            <div className="prg-fi">
              <div className="prg-fn">04</div>
              <div className="prg-ft">Qualify</div>
              <div className="prg-fx">
                Automatic replies ask about goals and availability, so you only
                talk to good fits.
              </div>
            </div>
            <div className="prg-fi">
              <div className="prg-fn">05</div>
              <div className="prg-ft">Book</div>
              <div className="prg-fx">
                Qualified leads pick a time for a call, straight into your
                calendar.
              </div>
            </div>
            <div className="prg-fi">
              <div className="prg-fn">06</div>
              <div className="prg-ft">Follow up</div>
              <div className="prg-fx">
                Leads who go quiet get timely nudges until they book or say no.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="prg-sec prg-ivory" id="programmes">
        <div className="prg-c">
          <div className="prg-head prg-center">
            <div className="prg-label">04 — Sell fitness programmes</div>
            <h2>
              A client system that runs <em>every day.</em>
            </h2>
            <p className="prg-lead">Here&apos;s what we build for you.</p>
          </div>
          <div className="prg-grid3">
            <article className="prg-card">
              <small>01</small>
              <h3>High-converting landing pages</h3>
              <p>
                A fast, mobile-first page for each programme, written to turn a
                visitor into an enquiry. One message and one action per page.
              </p>
            </article>
            <article className="prg-card">
              <small>02</small>
              <h3>Clear offer positioning</h3>
              <p>
                We sharpen who your programme is for, the result it delivers and
                why you are the one to choose, so people understand it in
                seconds.
              </p>
            </article>
            <article className="prg-card">
              <small>03</small>
              <h3>WhatsApp + lead automation</h3>
              <p>
                Instant replies, qualifying questions, call booking and
                follow-ups on WhatsApp, with every lead tracked for you.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* SHOWCASE */}
      <section className="prg-sec prg-dk">
        <div className="prg-c">
          <div className="prg-head" style={{ maxWidth: "780px" }}>
            <div className="prg-label">05 — See it in action</div>
            <h2>
              One page. One offer. <em>One clear step.</em>
            </h2>
            <p className="prg-lead">
              From the landing page to the first reply, each step is built to
              move the lead forward.
            </p>
          </div>
          <div className="prg-grid3">
            <div>
              <div className="prg-sl">Landing page</div>
              <div className="prg-win">
                <div className="prg-bar">
                  <div className="prg-dots">
                    <i></i>
                    <i></i>
                    <i></i>
                  </div>
                  <b>yourname.co.uk/12-week</b>
                </div>
                <div className="prg-mock">
                  <div className="prg-sub" style={{ margin: "0 0 8px" }}>
                    12-week programme · Online coaching
                  </div>
                  <h4>Lose fat and build strength around a busy week</h4>
                  <div className="prg-sub" style={{ margin: "14px 0 6px" }}>
                    What&apos;s included
                  </div>
                  <div className="prg-row prg-s">
                    <span>4 sessions a week</span>
                    <span>Gym or home</span>
                  </div>
                  <div className="prg-row prg-s">
                    <span>Weekly check-ins</span>
                    <span>With your coach</span>
                  </div>
                  <div className="prg-row prg-s">
                    <span>Meal plan</span>
                    <span>Included</span>
                  </div>
                  <div className="prg-pay">Chat on WhatsApp</div>
                </div>
              </div>
              <p className="prg-cap">
                A page built for one programme, with one button.
              </p>
            </div>

            <div>
              <div className="prg-sl">Offer positioning</div>
              <div className="prg-win">
                <div className="prg-bar">
                  <div className="prg-dots">
                    <i></i>
                    <i></i>
                    <i></i>
                  </div>
                  <b>Offer rewrite</b>
                </div>
                <div className="prg-mock">
                  <h4>Say it clearly</h4>
                  <div className="prg-sub">Before and after</div>
                  <div className="prg-tier">
                    <strong>
                      <span>Before</span>
                    </strong>
                    &ldquo;Online coaching. DM for details.&rdquo;
                  </div>
                  <div className="prg-tier prg-on">
                    <strong>
                      <span>After</span>
                      <span className="prg-save">Clear</span>
                    </strong>
                    12-week fat loss programme for busy professionals. Weekly
                    check-ins, meal plan and WhatsApp support. £249 a month.
                  </div>
                  <div className="prg-pay">Start with a free call</div>
                </div>
              </div>
              <p className="prg-cap">
                Who it&apos;s for, what they get and what it costs.
              </p>
            </div>

            <div>
              <div className="prg-sl">WhatsApp automation</div>
              <div className="prg-win">
                <div className="prg-bar">
                  <div className="prg-dots">
                    <i></i>
                    <i></i>
                    <i></i>
                  </div>
                  <b>WhatsApp · Lead replies</b>
                  <div className="prg-badge">Auto</div>
                </div>
                <div className="prg-mock">
                  <div className="prg-bub prg-light prg-in">
                    Is the programme good for beginners?
                  </div>
                  <div className="prg-bub prg-light prg-out">
                    Yes, it starts at your level. How many days a week can you
                    train?
                  </div>
                  <div className="prg-bub prg-light prg-in">3 or 4</div>
                  <div className="prg-bub prg-light prg-out">
                    Perfect. Pick a time for a free call:
                  </div>
                  <div className="prg-row prg-s">
                    <span>Tagged</span>
                    <span>Hot lead</span>
                  </div>
                  <div className="prg-row prg-s">
                    <span>Added to CRM</span>
                    <span>Yes</span>
                  </div>
                </div>
              </div>
              <p className="prg-cap">
                Replies, tags and bookings happen without you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section className="prg-sec prg-ivory" id="integrations">
        <div className="prg-c">
          <div className="prg-head prg-center">
            <div className="prg-label">06 — Integrations</div>
            <h2>
              Plugs into the tools you <em>already use.</em>
            </h2>
            <p className="prg-lead">
              Traffic, messaging, booking and tracking, connected into one
              system that runs without you.
            </p>
          </div>
          <div className="prg-grid3">
            <div className="prg-ic">
              <small>Traffic</small>
              <h3>Where leads come from</h3>
              <div className="prg-chips">
                <span className="prg-chip" style={{ "--d": "#e1306c" }}>
                  <i></i>Instagram
                </span>
                <span className="prg-chip" style={{ "--d": "#111" }}>
                  <i></i>TikTok
                </span>
                <span className="prg-chip" style={{ "--d": "#0866ff" }}>
                  <i></i>Meta Ads
                </span>
                <span className="prg-chip" style={{ "--d": "#4285f4" }}>
                  <i></i>Google Ads
                </span>
              </div>
            </div>
            <div className="prg-ic">
              <small>Messaging</small>
              <h3>Reply instantly</h3>
              <div className="prg-chips">
                <span className="prg-chip" style={{ "--d": "#25d366" }}>
                  <i></i>WhatsApp Business
                </span>
                <span className="prg-chip" style={{ "--d": "#6b6b6b" }}>
                  <i></i>SMS
                </span>
                <span className="prg-chip" style={{ "--d": "#ea4335" }}>
                  <i></i>Email
                </span>
              </div>
            </div>
            <div className="prg-ic">
              <small>Booking</small>
              <h3>Calls in your diary</h3>
              <div className="prg-chips">
                <span className="prg-chip" style={{ "--d": "#006bff" }}>
                  <i></i>Calendly
                </span>
                <span className="prg-chip" style={{ "--d": "#4285f4" }}>
                  <i></i>Google Calendar
                </span>
                <span className="prg-chip" style={{ "--d": "#2d8cff" }}>
                  <i></i>Zoom
                </span>
              </div>
            </div>
            <div className="prg-ic">
              <small>CRM</small>
              <h3>Every lead tracked</h3>
              <div className="prg-chips">
                <span className="prg-chip" style={{ "--d": "#ff7a59" }}>
                  <i></i>HubSpot
                </span>
                <span className="prg-chip" style={{ "--d": "#0f9d58" }}>
                  <i></i>Google Sheets
                </span>
                <span className="prg-chip" style={{ "--d": "#222" }}>
                  <i></i>Notion
                </span>
              </div>
            </div>
            <div className="prg-ic">
              <small>Automation</small>
              <h3>Follow-ups on autopilot</h3>
              <div className="prg-chips">
                <span className="prg-chip" style={{ "--d": "#ff4a00" }}>
                  <i></i>Zapier
                </span>
                <span className="prg-chip" style={{ "--d": "#6d00cc" }}>
                  <i></i>Make
                </span>
                <span className="prg-chip" style={{ "--d": "#ffb800" }}>
                  <i></i>Mailchimp
                </span>
              </div>
            </div>
            <div className="prg-ic">
              <small>Something else?</small>
              <h3>Your own stack</h3>
              <p>
                Using another tool? If it connects through Zapier or Make, we
                can wire it in.
              </p>
            </div>
          </div>

          <div className="prg-auto">
            <h3>
              What happens <em>automatically.</em>
            </h3>
            <p>
              From the moment someone enquires, the system works the lead until
              they book.
            </p>
            <div className="prg-af">
              <div className="prg-node">
                <small>Page · Ad</small>
                <strong>Lead arrives</strong>From any source, one link.
              </div>
              <div className="prg-ar">→</div>
              <div className="prg-node">
                <small>WhatsApp</small>
                <strong>Instant reply</strong>Answered within seconds.
              </div>
              <div className="prg-ar">→</div>
              <div className="prg-node">
                <small>WhatsApp</small>
                <strong>Lead qualified</strong>Goal and availability asked.
              </div>
              <div className="prg-ar">→</div>
              <div className="prg-node">
                <small>Calendly</small>
                <strong>Call booked</strong>Added to your calendar.
              </div>
              <div className="prg-ar">→</div>
              <div className="prg-node">
                <small>Email · SMS</small>
                <strong>Reminder sent</strong>Fewer no-shows.
              </div>
              <div className="prg-ar">→</div>
              <div className="prg-node">
                <small>CRM · Zapier</small>
                <strong>Follow-up queued</strong>If they go quiet.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="prg-quote">
        <div className="prg-c">
          <div className="prg-qm">&ldquo;</div>
          <h2>
            Your income shouldn&apos;t depend on your best <em>post day.</em>
          </h2>
        </div>
      </section>

      {/* PARTNERSHIP */}
      <section className="prg-sec prg-part" id="partnership">
        <div className="prg-c prg-two">
          <div className="prg-dash" aria-hidden="true">
            <div className="prg-dh">
              <span>Leads this week</span>
              <span className="prg-badge">Example</span>
            </div>
            <div className="prg-dr">
              <time>07:12</time>
              <div>
                <strong>Sam</strong>
                <small>Instagram · 12-week programme</small>
              </div>
              <em>Call booked</em>
            </div>
            <div className="prg-dr">
              <time>12:40</time>
              <div>
                <strong>Priya</strong>
                <small>Meta ad · 12-week programme</small>
              </div>
              <em>Qualified</em>
            </div>
            <div className="prg-dr">
              <time>21:47</time>
              <div>
                <strong>Dan</strong>
                <small>Referral · WhatsApp</small>
              </div>
              <em>Replied</em>
            </div>
            <div className="prg-df">
              3 leads · 1 call booked · follow-ups queued
            </div>
          </div>

          <div>
            <div className="prg-label" style={{ color: "var(--gold-l)" }}>
              07 — The partnership
            </div>
            <h2>
              You coach the <em>clients.</em>
              <br />
              We build the <em>system.</em>
            </h2>
            <p>
              Falcoon builds your landing pages, sharpens your offer and sets up
              the WhatsApp automation, so you can focus on coaching.
            </p>
            <div className="prg-checks">
              <div className="prg-chk">Landing page for each programme</div>
              <div className="prg-chk">Offer positioning and copy</div>
              <div className="prg-chk">WhatsApp replies and qualifying</div>
              <div className="prg-chk">Call booking and reminders</div>
              <div className="prg-chk">Lead tracking and follow-ups</div>
              <div className="prg-chk">Mobile-first experience</div>
            </div>
            <a
              href={CALENDLY}
              className="prg-btn"
              target="_blank"
              rel="noopener"
            >
              Book your strategy call <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="prg-cta">
        <div className="prg-c">
          <div className="prg-label">For UK personal brand fitness coaches</div>
          <h2>
            Let&apos;s build your <em>client system.</em>
          </h2>
          <p>
            Book a free strategy call and we&apos;ll map out the pages, offer
            and automation that bring you clients every day.
          </p>
          <a
            href={CALENDLY}
            className="prg-btn prg-d"
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
