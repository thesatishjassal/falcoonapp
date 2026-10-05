import Button from "./Button";
import { BOOKING_URL } from "../../../lib/emailTemplates/config";

export default function FinalCta() {
  return (
    <section className="fc-section fc-cta">
      <div className="fc-container fc-reveal">
        <p className="fc-label">For UK personal brand fitness coaches</p>
        <h2 className="fc-h2 fc-cta__title">
          Let&apos;s build your <em>consultation funnel.</em>
        </h2>
        <p className="fc-cta__text">
          Book a free strategy call and we&apos;ll map out the funnel that gets
          your clients booked and paid before they talk to you.
        </p>
        <Button href={BOOKING_URL} variant="dark">
          Book a free strategy call
        </Button>
      </div>
    </section>
  );
}
