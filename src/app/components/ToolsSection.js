import { Fragment } from "react";
/* ── TOOLS DATA ─────────────────────────────────────────────── */
const ICONS = {
  user: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4.5 20a7.5 7.5 0 0 1 15 0",
  calendar: "M4 6.5h16V20H4zM4 10.5h16M8 3.5v4M16 3.5v4",
  video: "M3.5 7h11v10h-11zM14.5 11l6-3.5v9l-6-3.5",
  card: "M3 6h18v12H3zM3 10h18M6.5 14.5h4",
  shield:
    "M12 3l7.5 3v5.5c0 4.5-3 7.8-7.5 9.5-4.5-1.7-7.5-5-7.5-9.5V6zM8.5 12l2.5 2.5 4.5-5",
  bolt: "M13 3L5 13.5h6L10 21l8-10.5h-6z",
  chat: "M4 5h16v11H9l-5 4z",
  mail: "M3.5 6h17v12h-17zM3.5 7l8.5 6.5L20.5 7",
  check: "M4 12.5l5 5L20 6.5",
  coin: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM14.5 9.2c-.5-.8-1.4-1.2-2.5-1.2-1.4 0-2.5.7-2.5 1.8 0 2.5 5 1.2 5 3.7 0 1.1-1.1 1.8-2.5 1.8-1.1 0-2-.4-2.5-1.2M12 6v2M12 16v2",
};

function Icon({ name }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="28"
      height="28"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={ICONS[name]} />
    </svg>
  );
}

const TOOL_GROUPS = [
  {
    title: "Video calls",
    icon: "video",
    chips: [
      ["Zoom", "#2d8cff"],
      ["Google Meet", "#00897b"],
      ["Microsoft Teams", "#5059c9"],
    ],
  },
  {
    title: "Booking",
    icon: "calendar",
    chips: [
      ["Calendly", "#006bff"],
      ["Google Calendar", "#4285f4"],
      ["Outlook", "#0078d4"],
    ],
  },
  {
    title: "Payments",
    icon: "card",
    chips: [
      ["Stripe", "#635bff"],
      ["PayPal", "#003087"],
      ["GoCardless", "#0f9d58", true],
    ],
  },
  {
    title: "Messaging",
    icon: "chat",
    chips: [
      ["WhatsApp Business", "#25d366"],
      ["Email", "#ea4335"],
      ["SMS", "#6b6b6b"],
      ["Mailchimp", "#ffb800"],
    ],
  },
  {
    title: "Automation",
    icon: "bolt",
    chips: [
      ["Zapier", "#ff4a00"],
      ["Make", "#6d00cc"],
      ["n8n", "#ea4b71"],
      ["HubSpot", "#ff7a59"],
    ],
  },
];

const FLOWS = [
  {
    key: "video",
    tab: "Video call",
    nodes: [
      {
        icon: "user",
        c: "#d0b477",
        t: "Client",
        s: "Picks a time on your page",
      },
      {
        icon: "calendar",
        c: "#4285f4",
        t: "Calendly",
        s: "Checks your real availability",
      },
      {
        icon: "video",
        c: "#2d8cff",
        t: "Zoom, Meet or Teams",
        s: "Link created for that slot",
        live: true,
      },
      { icon: "user", c: "#d0b477", t: "You", s: "Join in one click" },
    ],
    result: { value: "Link sent", label: "No copy-pasting, no double-booking" },
  },
  {
    key: "pay",
    tab: "Payment",
    nodes: [
      { icon: "user", c: "#d0b477", t: "Client", s: "Books a £75 session" },
      {
        icon: "card",
        c: "#635bff",
        t: "Checkout",
        s: "Card, wallet or Direct Debit",
      },
      {
        icon: "shield",
        c: "#0f9d58",
        t: "Stripe, PayPal, GoCardless",
        s: "Secure, confirmed in seconds",
        live: true,
      },
      {
        icon: "coin",
        c: "#7fcf9f",
        t: "You",
        s: "£73.67 lands in your account",
      },
    ],
    result: { value: "£75 paid", label: "Before the first call" },
  },
  {
    key: "auto",
    tab: "Automation",
    nodes: [
      { icon: "user", c: "#d0b477", t: "Client", s: "Books or buys" },
      {
        icon: "bolt",
        c: "#ff4a00",
        t: "Zapier, Make or n8n",
        s: "Trigger fires instantly",
        live: true,
      },
      {
        icon: "chat",
        c: "#25d366",
        t: "WhatsApp, email, SMS",
        s: "Confirmation and reminder",
      },
      {
        icon: "check",
        c: "#7fcf9f",
        t: "Follow-up",
        s: "Review request after the session",
      },
    ],
    result: {
      value: "0 messages sent by you",
      label: "All of it runs on its own",
    },
  },
];

const CHAIN = [
  ["Lead arrives", "Page, ad or WhatsApp"],
  ["Time chosen", "Calendly or your calendar"],
  ["Payment taken", "Stripe, PayPal or GoCardless"],
  ["Link sent", "Zoom, Meet or Teams"],
  ["Reminders", "Email, WhatsApp or SMS"],
  ["Follow-up", "Zapier, Make or n8n"],
];

/* ── TOOLS SECTION ──────────────────────────────────────────── */
export default function ToolsSection() {
  return (
    <section className="hm-sec hm-ivory" id="tools">
      <div className="hm-c">
        <div className="hm-head hm-center">
          <div className="hm-label">05 — Tools &amp; automation</div>
          <h2>
            Every tool, one funnel. <em>Zero effort</em> from you.
          </h2>
          <p className="hm-lead">
            We wire in the tools you already use. You don&apos;t set up a thing.
          </p>
        </div>

        {/* interactive flow: tabs are radio inputs, so no JavaScript */}
        <div className="hm-tf">
          {FLOWS.map((f, i) => (
            <input
              key={f.key}
              type="radio"
              name="hm-tf"
              id={`tf-${f.key}`}
              className="hm-tf-r"
              defaultChecked={i === 0}
            />
          ))}

          <div className="hm-tf-top">
            <p className="hm-tf-cap">
              Pick a flow and watch <em>it run.</em>
            </p>
            <div className="hm-tf-tabs" role="presentation">
              {FLOWS.map((f) => (
                <label
                  key={f.key}
                  htmlFor={`tf-${f.key}`}
                  className="hm-tf-tab"
                >
                  {f.tab}
                </label>
              ))}
            </div>
          </div>

          <div className="hm-tf-stage">
            {FLOWS.map((f) => (
              <div className={`hm-tf-scene hm-sc-${f.key}`} key={f.key}>
                <ol className="hm-tf-track">
                  {f.nodes.map((n, i) => (
                    <Fragment key={n.t + i}>
                      <li
                        className={`hm-tf-node${n.live ? " hm-tf-live" : ""}`}
                        style={{ "--c": n.c, "--i": i }}
                      >
                        <span className="hm-tf-ico">
                          <Icon name={n.icon} />
                        </span>
                        <strong>{n.t}</strong>
                        <small>{n.s}</small>
                      </li>
                      {i < f.nodes.length - 1 && (
                        <li
                          className="hm-tf-link"
                          style={{ "--i": i }}
                          aria-hidden="true"
                        >
                          <span className="hm-tf-dot"></span>
                          <span className="hm-tf-dot hm-tf-dot2"></span>
                        </li>
                      )}
                    </Fragment>
                  ))}
                </ol>
                <div className="hm-tf-res">
                  <strong>{f.result.value}</strong>
                  <span>{f.result.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* tool groups */}
        <div className="hm-tools-grid">
          {TOOL_GROUPS.map((g) => (
            <div className="hm-tile" key={g.title}>
              <h3>
                <span className="hm-tile-ico">
                  <Icon name={g.icon} />
                </span>
                {g.title}
              </h3>
              <div className="hm-chips">
                {g.chips.map(([name, color, uk]) => (
                  <span className="hm-chip" style={{ "--d": color }} key={name}>
                    <i></i>
                    {name}
                    {uk && <em className="hm-uk">UK</em>}
                  </span>
                ))}
              </div>
            </div>
          ))}
          <div className="hm-tile hm-tile-note">
            <h3>
              <span className="hm-tile-ico">
                <Icon name="shield" />
              </span>
              UK tools too
            </h3>
            <div className="hm-chips">
              <span className="hm-chip" style={{ "--d": "#1f4e8c" }}>
                <i></i>FreeAgent<em className="hm-uk">UK</em>
              </span>
              <span className="hm-chip" style={{ "--d": "#222" }}>
                <i></i>PT Distinction<em className="hm-uk">UK</em>
              </span>
            </div>
            <p>
              Using something else? If it connects through Zapier or Make, we
              can wire it in.
            </p>
          </div>
        </div>

        <div className="hm-chain-wrap">
          <p className="hm-chain-cap">
            Once live, every booking runs <em>like this.</em>
          </p>
          <ol className="hm-chain">
            {CHAIN.map(([t, s]) => (
              <li key={t}>
                <strong>{t}</strong>
                <small>{s}</small>
              </li>
            ))}
          </ol>
        </div>

        <a href="#prices" className="hm-bridge">
          Now the numbers: what UK coaches charge <span>↓</span>
        </a>
      </div>
    </section>
  );
}
