import Button from "./Button";
import { BOOKING_URL } from "../../../lib/emailTemplates/config";

export default function Hero() {
  return (
    <section className="fc-hero">
      <div className="fc-container fc-hero__grid">
        <div className="fc-hero__copy">
          <p className="fc-eyebrow">For UK personal brand fitness coaches</p>

          <h1 className="fc-hero__title">
            Get paid
            <br />
            before the <em>call.</em>
          </h1>

          <p className="fc-hero__lead">
            Sell consultations online. Clients book and pay before they talk to
            you, with no negotiation and no delays. We build the consultation
            funnel for you.
          </p>

          <Button href={BOOKING_URL}>Build my consultation funnel</Button>
        </div>

        <div className="fc-hero__visual" aria-hidden="true">
          <div className="fc-win">
            <div className="fc-win__bar">
              <div className="fc-dots">
                <i />
                <i />
                <i />
              </div>
              <div className="fc-win__title">Zoom · Strategy session</div>
              <div className="fc-badge">Paid</div>
            </div>
            <div className="fc-tiles fc-tiles--one">
              <div className="fc-tile fc-tile--1 is-speaking">
                <span className="fc-tile__name">You (Coach)</span>
              </div>
              <div className="fc-tile fc-tile--2">
                <span className="fc-tile__name">Client</span>
              </div>
            </div>
            <div className="fc-ctrls">
              <span>Mic on</span>
              <span>Camera on</span>
              <span>Share</span>
              <span className="end">Leave</span>
            </div>
          </div>

          <div className="fc-float fc-float--1">
            <strong>✓ Payment received</strong>
            <span>£75 · Stripe</span>
          </div>
          <div className="fc-float fc-float--2">
            <strong>Booked</strong>
            <span>Tue 13, 11:30</span>
          </div>
        </div>
      </div>
    </section>
  );
}
