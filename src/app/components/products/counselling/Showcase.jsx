import Tabs from "./Tabs";
import CallMock from "./CallMock";
import BookingMock from "./BookingMock";

function Panel({ title, text, points, hint, children }) {
  return (
    <div className="fc-show__panel">
      <div className="fc-show__text">
        <h3>{title}</h3>
        <p>{text}</p>
        <ul>
          {points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
        {hint && <p className="fc-show__hint">{hint}</p>}
      </div>
      <div className="fc-show__mock">{children}</div>
    </div>
  );
}

const tabs = [
  {
    id: "one",
    label: "1:1 consultation",
    panel: (
      <Panel
        title="1:1 consultation"
        text="Private consultation, programme review or discovery call on Zoom or Google Meet."
        points={[
          "The client pays at booking",
          "A unique meeting link is sent automatically",
          "The call is added to both calendars",
        ]}
        hint="Try the mic and camera buttons."
      >
        <CallMock variant="one" title="Zoom · Strategy session" badge="Paid" />
      </Panel>
    ),
  },
  {
    id: "group",
    label: "Group coaching",
    panel: (
      <Panel
        title="1:many group coaching"
        text="Group sessions, workshops and Q&As where every attendee has paid and received the link."
        points={[
          "Every attendee pays before joining",
          "Everyone receives the link automatically",
          "Reminders go out before the session",
        ]}
        hint="Try the mic and camera buttons."
      >
        <CallMock variant="group" title="Google Meet · Group Q&A" badge="6 paid" />
      </Panel>
    ),
  },
  {
    id: "booking",
    label: "Booking & payment",
    panel: (
      <Panel
        title="Booking & payment"
        text="Clients pick a time, pay, and get their confirmation and link instantly."
        points={[
          "Real availability from your calendar",
          "Card, PayPal or wallet payments",
          "Instant confirmation",
        ]}
        hint="It's a live demo. Pick a time and tap pay."
      >
        <BookingMock />
      </Panel>
    ),
  },
];

export default function Showcase() {
  return (
    <section className="fc-section fc-show">
      <div className="fc-container">
        <div className="fc-show__head fc-reveal">
          <p className="fc-label">05 — See it in action</p>
          <h2 className="fc-h2">
            One funnel. <em>Every kind</em> of call.
          </h2>
          <p>
            Whether you coach one client at a time or run a group session, the booking, payment and
            meeting link all happen before the call starts.
          </p>
        </div>

        <Tabs tabs={tabs} label="Consultation formats" variant="dark" layout="row" />
      </div>
    </section>
  );
}
