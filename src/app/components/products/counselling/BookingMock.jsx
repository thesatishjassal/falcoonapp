"use client";

import { useState } from "react";

const DAYS = [
  ["Mon", "12"],
  ["Tue", "13"],
  ["Wed", "14"],
  ["Thu", "15"],
  ["Fri", "16"],
];
const SLOTS = ["10:00", "11:30", "14:00"];
const METHODS = ["Card", "PayPal", "Apple Pay"];

/** Interactive booking-page demo: pick a day, time and payment method. */
export default function BookingMock() {
  const [day, setDay] = useState(1);
  const [slot, setSlot] = useState(1);
  const [method, setMethod] = useState(0);
  const [done, setDone] = useState(false);

  return (
    <div className="fc-win">
      <div className="fc-win__bar">
        <div className="fc-dots" aria-hidden="true"><i /><i /><i /></div>
        <div className="fc-win__title">yourname.co.uk/book</div>
        <div className="fc-badge">Demo</div>
      </div>

      {done ? (
        <div className="fc-book fc-book--done" role="status">
          <div className="fc-book__check" aria-hidden="true">✓</div>
          <h4>You&apos;re booked</h4>
          <p>
            {DAYS[day][0]} {DAYS[day][1]} at {SLOTS[slot]}. Payment received via {METHODS[method]}.
            Your Zoom/Meet link and calendar invite are on their way.
          </p>
          <button type="button" className="fc-book__reset" onClick={() => setDone(false)}>
            Try it again
          </button>
        </div>
      ) : (
        <div className="fc-book">
          <h4>Book your consultation</h4>
          <p className="fc-book__sub">45 minutes · Zoom or Google Meet</p>

          <div className="fc-book__row" role="group" aria-label="Choose a day">
            {DAYS.map(([d, n], i) => (
              <button key={d} type="button" aria-pressed={day === i} onClick={() => setDay(i)}>
                {d}<br />{n}
              </button>
            ))}
          </div>

          <div className="fc-book__row fc-book__row--slots" role="group" aria-label="Choose a time">
            {SLOTS.map((s, i) => (
              <button key={s} type="button" aria-pressed={slot === i} onClick={() => setSlot(i)}>
                {s}
              </button>
            ))}
          </div>

          <div className="fc-book__total"><span>Consultation</span><span>£75</span></div>

          <div className="fc-book__methods" role="group" aria-label="Payment method">
            {METHODS.map((m, i) => (
              <button key={m} type="button" aria-pressed={method === i} onClick={() => setMethod(i)}>
                {m}
              </button>
            ))}
          </div>

          <button type="button" className="fc-book__pay" onClick={() => setDone(true)}>
            Pay &amp; confirm booking
          </button>
        </div>
      )}
    </div>
  );
}
