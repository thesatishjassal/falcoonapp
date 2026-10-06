"use client";
import { useState } from "react";

const CALENDLY = "https://calendly.com/thesatishjassal/free-strategy-call-uk";
const CORE = 149; // one-time funnel price, matches your Pricing page
const WEEKS = 4.33;
const gbp = (n) => "£" + Math.round(n).toLocaleString("en-GB");

/* Reusable button pair: use in hero, partnership and final CTA sections.
   dark={true} for dark backgrounds. Works without JS (plain anchors). */
export function ScnCtaPair({ dark = false, secondary = "pricing" }) {
  const s = secondary === "budget"
    ? { href: "#budget", label: "Calculate my funnel budget" }
    : { href: "#pricing", label: "See pricing and get a quote" };
  return (
    <div className={"scb-pair" + (dark ? " dk" : "")}>
      <a href={CALENDLY} className="scn-btn" target="_blank" rel="noopener">
        Book free website audit <span>→</span>
      </a>
      <a href={s.href} className="scb-ghost">{s.label}</a>
    </div>
  );
}

export default function ScnBudgetCalc() {
  const [price, setPrice] = useState(75);
  const [calls, setCalls] = useState(6);
  const [noShow, setNoShow] = useState(20);

  const monthly = calls * WEEKS * price;
  const lost = monthly * (noShow / 100);
  const payback = Math.max(1, Math.ceil(CORE / price));

  const Slider = ({ id, label, value, set, min, max, step = 1, fmt }) => (
    <div className="scb-row">
      <label htmlFor={id}>{label}<b>{fmt(value)}</b></label>
      <input id={id} type="range" min={min} max={max} step={step} value={value} onChange={(e) => set(+e.target.value)} />
    </div>
  );

  return (
    <section className="scn-sec scn-ivory scb" id="budget">
      <div className="scn-c scb-grid">
        <div>
          <h2>What could your calls be <em>worth?</em></h2>
          <p className="scn-lead">Move the sliders to match your diary. We'll show what your consultations bring in each month and how quickly the funnel pays for itself.</p>
          <Slider id="p" label="Price per consultation" value={price} set={setPrice} min={25} max={300} step={5} fmt={gbp} />
          <Slider id="c" label="Calls per week" value={calls} set={setCalls} min={1} max={30} fmt={(v) => v} />
          <Slider id="n" label="Calls that don't show up today" value={noShow} set={setNoShow} min={0} max={50} fmt={(v) => v + "%"} />
        </div>

        <div className="scb-out" aria-live="polite">
          <div><small>Paid-call revenue each month</small><b>{gbp(monthly)}</b></div>
          <div><small>Lost to no-shows each month (est.)</small><b>{gbp(lost)}</b></div>
          <div><small>Funnel build, paid once</small><b>from {gbp(CORE)}</b></div>
          <p className="scb-pay">At {gbp(price)} a call, the core funnel pays for itself after <strong>{payback} {payback === 1 ? "call" : "calls"}</strong>.</p>
          <p className="scb-fine">Estimates based on your inputs, not a guarantee of results.</p>
          <a href="#pricing" className="scn-btn">Build my quote from this</a>
          <a href={CALENDLY} className="scb-link" target="_blank" rel="noopener">or book a free audit call</a>
        </div>
      </div>
    </section>
  );
}