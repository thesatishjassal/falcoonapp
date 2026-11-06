import { DM_Sans, Fraunces } from "next/font/google";
import "../sell-fitness-programmes.css";
import PrgCtaPair from "../components/PrgCtaPair";
import PrgHeroPhone from "../components/PrgHeroPhone";
import PrgBudgetCalc from "../components/Prgbudgetcalc";
import PrgPricing from "../components/PrgPricing";
import PrgFaq from "../components/PrgFaq";

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
    "A client system that brings leads daily, not randomly. Landing pages, offer positioning and WhatsApp automation for UK fitness coaches. Core build £499 one-time.",
};

/* Simple line icons (inherit colour, decorative) */
const Ico = ({ children }) => (
  <span className="prg-ico" aria-hidden="true">
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
  trend: <path d="M3 17l6-6 4 4 8-8M15 7h6v6" />,
  help: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M9.5 9.5a2.5 2.5 0 015 .5c0 1.5-2.5 2-2.5 3.5M12 17h.01" />
    </>
  ),
  dm: <path d="M4 5h16v11H9l-5 4z" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  megaphone: (
    <path d="M3 11v2a1 1 0 001 1h3l7 4V6L7 10H4a1 1 0 00-1 1zM18 9a4 4 0 010 6" />
  ),
  page: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M4 9h16M8 13h8" />
    </>
  ),
  check: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12l3 3 5-6" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="15" rx="2" />
      <path d="M3.5 10h17M8 3v4M16 3v4" />
    </>
  ),
  bell: <path d="M6 16v-5a6 6 0 0112 0v5l2 2H4zM10 21h4" />,
};

const PROBLEMS = [
  ["trend", "Clients only when a post lands"],
  ["help", "Followers who don't know what you sell"],
  ["dm", "Leads going cold in your DMs"],
  ["clock", "Following up by hand, when you remember"],
];

const JOURNEY = [
  [
    "Attract",
    "Your content and ads send people to one link, not a bio full of options.",
  ],
  [
    "Land",
    "A page that says who the programme is for, what they get and what it costs.",
  ],
  ["Message", "One tap opens WhatsApp with their question already started."],
  [
    "Qualify",
    "Automatic replies ask about goals and availability, so you only talk to good fits.",
  ],
  [
    "Book",
    "Qualified leads pick a time for a call, straight into your calendar.",
  ],
  [
    "Follow up",
    "Leads who go quiet get timely nudges until they book or say no.",
  ],
];

const JOURNEY_ICONS = ["megaphone", "page", "dm", "check", "calendar", "bell"];

// One compact row replaces the old six-card integrations section
const WORKS_WITH = [
  ["Instagram", "#e1306c"],
  ["TikTok", "#111"],
  ["Meta Ads", "#0866ff"],
  ["Google Ads", "#4285f4"],
  ["WhatsApp Business", "#25d366"],
  ["Calendly", "#006bff"],
  ["Zoom", "#2d8cff"],
  ["HubSpot", "#ff7a59"],
  ["Google Sheets", "#0f9d58"],
  ["Zapier", "#ff4a00"],
];

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
            <PrgCtaPair />
            <p className="prg-micro">
              Free audit. No payment needed. Core build £499 one-time; WhatsApp,
              booking and follow-ups are add-ons from £49.
            </p>
          </div>
          <div className="prg-hv">
            <PrgHeroPhone />
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

      {/* PROBLEM */}
      <section className="prg-sec prg-dk" aria-labelledby="prg-problem-h">
        <div className="prg-c prg-two">
          <div>
            <h2 id="prg-problem-h">
              Posting more won&apos;t fix it. A <em>system</em> will.
            </h2>
          </div>
          <div>
            <p className="prg-lead">
              Without a system, your income follows your posting. A good week
              fills your diary. A bad one empties it, and every lead you reply
              to late is a lead you may have lost. Every follower should have
              one clear next step.
            </p>
            <div className="prg-list">
              {PROBLEMS.map(([k, t]) => (
                <div className="prg-li" key={t}>
                  <Ico>{ICONS[k]}</Ico>
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="prg-sec" id="system" aria-labelledby="prg-system-h">
        <div className="prg-c">
          <div className="prg-head prg-sys-h">
            <div>
              <h2 id="prg-system-h">
                From follower to <em>new client.</em>
              </h2>
            </div>
            <p className="prg-lead">
              We build the whole path around your programme, your brand and your
              audience.
            </p>
          </div>
          <div className="prg-flow">
            {JOURNEY.map(([t, x], i) => (
              <div className="prg-fi" key={t}>
                <Ico>{ICONS[JOURNEY_ICONS[i]]}</Ico>
                <div className="prg-fn">Step {i + 1}</div>
                <div className="prg-ft">{t}</div>
                <div className="prg-fx">{x}</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "40px" }}>
            <div className="prg-sl">Works with the tools you already use</div>
            <div className="prg-chips">
              {WORKS_WITH.map(([n, c]) => (
                <span className="prg-chip" style={{ "--d": c }} key={n}>
                  <i></i>
                  {n}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SHOWCASE */}
      <section className="prg-sec prg-dk" aria-labelledby="prg-show-h">
        <div className="prg-c">
          <div className="prg-head" style={{ maxWidth: "780px" }}>
            <h2 id="prg-show-h">
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
              <div className="prg-win" aria-hidden="true">
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
              <div className="prg-win" aria-hidden="true">
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
              <div className="prg-win" aria-hidden="true">
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
          <PrgCtaPair center secondary="budget" />
        </div>
      </section>

      {/* PARTNERSHIP */}
      <section
        className="prg-sec prg-part"
        id="partnership"
        aria-labelledby="prg-part-h"
      >
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
            <h2 id="prg-part-h">
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
          </div>
        </div>
      </section>

      {/* BUDGET CALCULATOR → PRICING → FAQ */}
      <PrgBudgetCalc />
      <PrgPricing />
      <PrgFaq />

      {/* CTA */}
      <section className="prg-cta">
        <div className="prg-c">
          <h2>
            Let&apos;s build your <em>client system.</em>
          </h2>
          <p>
            Book a free website audit and we&apos;ll map out the pages, offer
            and automation that bring you clients every day.
          </p>
          <PrgCtaPair dark />
        </div>
      </section>
    </div>
  );
}
