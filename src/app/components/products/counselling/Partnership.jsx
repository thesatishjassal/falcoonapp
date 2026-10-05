import Button from "./Button";
import { BOOKING_URL } from "../../../lib/emailTemplates/config";
import { partnershipChecks } from "../../../lib/emailTemplates/data";

export default function Partnership() {
  return (
    <section className="fc-section fc-partner">
      <div className="fc-container fc-partner__grid">
        <div className="fc-dash fc-reveal" aria-hidden="true">
          <div className="fc-dash__head">
            <span>Your calendar · Tuesday</span>
            <span className="fc-badge">Example</span>
          </div>
          <div className="fc-dash__row">
            <time>09:30</time>
            <div>
              <strong>Discovery call</strong>
              <small>Zoom · 1:1</small>
            </div>
            <em>£75 · Paid</em>
          </div>
          <div className="fc-dash__row">
            <time>11:30</time>
            <div>
              <strong>Strategy session</strong>
              <small>Google Meet · 1:1</small>
            </div>
            <em>£75 · Paid</em>
          </div>
          <div className="fc-dash__row">
            <time>14:00</time>
            <div>
              <strong>Group Q&amp;A</strong>
              <small>Google Meet · 8 clients</small>
            </div>
            <em>£240 · Paid</em>
          </div>
          <p className="fc-dash__foot">
            Link sent · Calendar synced · Reminder queued
          </p>
        </div>

        <div className="fc-partner__content fc-reveal">
          <p className="fc-label">07 — The partnership</p>
          <h2 className="fc-h2">
            You run the <em>consultation.</em> We build the <em>funnel.</em>
          </h2>
          <p>
            Falcoon builds and sets up your consultation funnel for you, so you
            can see it, book it and start selling without touching the tech.
          </p>

          <ul className="fc-checks">
            {partnershipChecks.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>

          <Button href={BOOKING_URL}>Book your strategy call</Button>
        </div>
      </div>
    </section>
  );
}
