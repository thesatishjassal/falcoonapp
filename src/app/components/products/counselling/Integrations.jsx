import Tabs from "./Tabs";
import {
  integrations,
  automationNodes,
} from "../../../lib/emailTemplates/data";

const tabs = integrations.map((c) => ({
  id: c.id,
  label: c.label,
  panel: (
    <div className="fc-integ__panel">
      <h3>{c.title}</h3>
      <p>{c.body}</p>
      {c.chips.length > 0 && (
        <ul className="fc-chips">
          {c.chips.map(([name, color], i) => (
            <li
              key={name}
              className="fc-chip"
              style={{ "--d": color, "--i": i }}
            >
              <i aria-hidden="true" />
              {name}
            </li>
          ))}
        </ul>
      )}
    </div>
  ),
}));

export default function Integrations() {
  return (
    <section className="fc-section fc-integ">
      <div className="fc-container">
        <div className="fc-integ__head fc-reveal">
          <p className="fc-label">06 — Integrations</p>
          <h2 className="fc-h2">
            Plugs into the tools you <em>already use.</em>
          </h2>
          <p>
            Payments, video calls, calendars and automation, connected into one
            funnel that runs without you.
          </p>
        </div>

        <Tabs
          tabs={tabs}
          label="Integration categories"
          variant="light"
          layout="side"
        />

        <div className="fc-auto fc-reveal">
          <h3 className="fc-auto__title">
            What happens <em>automatically.</em>
          </h3>
          <p className="fc-auto__sub">
            From the moment a client books, nothing needs your attention until
            the call.
          </p>

          <ol className="fc-auto__flow">
            {automationNodes.map((n, i) => (
              <li key={n.title} className="fc-node" style={{ "--i": i }}>
                <small>{n.tool}</small>
                <strong>{n.title}</strong>
                <span>{n.text}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
