import Accordion from "./Accordion";
import { problems } from "../../../lib/emailTemplates/data";

export default function Problem() {
  return (
    <section className="fc-section fc-problem">
      <div className="fc-container fc-problem__grid">
        <div className="fc-reveal">
          <p className="fc-label">02 — The problem</p>
          <h2 className="fc-h2 fc-problem__title">
            Stop negotiating before you&apos;ve even <em>spoken.</em>
          </h2>
        </div>

        <div className="fc-problem__copy fc-reveal">
          <p>
            Free calls with unpaid strangers cost you hours. Booking by DM costs
            you more. By the time a time is agreed, the interest has often gone.
          </p>
          <p>
            Clients who have already booked and paid turn up ready to work with
            you.
          </p>
          <Accordion items={problems} variant="dark" defaultOpen={0} />
        </div>
      </div>
    </section>
  );
}
