import Accordion from "./Accordion";
import { funnelSteps } from "../../../lib/emailTemplates/data";

export default function Funnel() {
  return (
    <section className="fc-section fc-funnel">
      <div className="fc-container fc-funnel__grid">
        <div className="fc-funnel__head fc-reveal">
          <p className="fc-label">03 — The funnel</p>
          <h2 className="fc-h2">
            From click to <em>paid call.</em>
          </h2>
          <p className="fc-funnel__sub">
            We build the full consultation journey around your offer, your brand
            and your diary.
          </p>
        </div>

        <div className="fc-reveal">
          <Accordion items={funnelSteps} variant="light" defaultOpen={0} />
        </div>
      </div>
    </section>
  );
}
