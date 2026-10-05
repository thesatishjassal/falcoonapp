/* Save as src/app/FinalCta.jsx (next to page.js)
   In page.js:  import FinalCta from "./FinalCta";
   Replace the old {/* FINAL CTA *​/} <section className="hm-cta"> ... </section>
   with:        <FinalCta href={CALENDLY} />
   Then append final-cta.css to home.css. Server component, no JS. */

const ICONS = {
  calendar: "M4 6.5h16V20H4zM4 10.5h16M8 3.5v4M16 3.5v4",
  card: "M3 6h18v12H3zM3 10h18M6.5 14.5h4",
  video: "M3.5 7h11v10h-11zM14.5 11l6-3.5v9l-6-3.5",
  check: "M4 12.5l5 5L20 6.5",
};

function Icon({ name }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={ICONS[name]} />
    </svg>
  );
}

const CARDS = [
  {
    icon: "calendar",
    c: "#6aa0ff",
    t: "New booking",
    s: "Strategy session, Thu 10:00",
    time: "Just now",
  },
  {
    icon: "card",
    c: "#8f89ff",
    t: "£75 received",
    s: "Paid by card through Stripe",
    time: "Just now",
  },
  {
    icon: "video",
    c: "#4aa3ff",
    t: "Zoom link sent",
    s: "Reminder queued for the day before",
    time: "Auto",
  },
  {
    icon: "check",
    c: "#7fcf9f",
    t: "First paying client",
    s: "Booked and paid. You didn't lift a finger.",
    time: "Day 7",
    win: true,
  },
];

const DAYS = [
  ["Day 1", "Funnel goes live", "Page, booking and payments connected"],
  ["Day 3", "Leads start booking", "Ads and WhatsApp replies running"],
  ["Day 7", "First client pays", "Money in before the first call"],
];

export default function FinalCta({ href }) {
  return (
    <section className="hm-fin">
      <div className="hm-c">
        <div className="hm-fin-in">
          <div className="hm-fin-copy">
            <div className="hm-label hm-fin-label">
              Limited spots available this month
            </div>
            <h2>
              Get your first paying fitness client in days, <em>not months.</em>
            </h2>
            <p>
              We build your complete funnel, content and automation so you can
              focus on coaching.
            </p>
            <a href={href} className="hm-btn" target="_blank" rel="noopener">
              Book Free Website Audit <span>→</span>
            </a>
            <div className="hm-fine">
              No commitment · Done-for-you system · Results-focused
            </div>
          </div>

          <div
            className="hm-fin-vis"
            role="img"
            aria-label="Example of a first paying client arriving: a booking, a payment, a Zoom link and the first paid client."
          >
            <span className="hm-fin-ring hm-fin-r1"></span>
            <span className="hm-fin-ring hm-fin-r2"></span>
            <span className="hm-fin-ring hm-fin-r3"></span>
            <div className="hm-fin-cards">
              {CARDS.map((c, i) => (
                <div
                  key={c.t}
                  className={`hm-fin-card${c.win ? " hm-fin-win" : ""}`}
                  style={{ "--c": c.c, "--i": i }}
                >
                  <span className="hm-fin-ico">
                    <Icon name={c.icon} />
                  </span>
                  <div>
                    <strong>{c.t}</strong>
                    <small>{c.s}</small>
                  </div>
                  <time>{c.time}</time>
                </div>
              ))}
            </div>
          </div>
        </div>

        <ol className="hm-fin-days">
          <span className="hm-fin-line" aria-hidden="true"></span>
          {DAYS.map(([d, t, s]) => (
            <li key={d}>
              <span className="hm-fin-d">{d}</span>
              <strong>{t}</strong>
              <small>{s}</small>
            </li>
          ))}
        </ol>
        <p className="hm-fin-note">
          Example timeline. Results vary by offer, audience and ad budget.
        </p>
      </div>
    </section>
  );
}
