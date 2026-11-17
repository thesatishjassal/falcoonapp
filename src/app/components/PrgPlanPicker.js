"use client";

/*
  PrgPlanPicker: replaces the old add-on calculator.
  Two easy choices (build + care), two optional extras, and a live summary
  of what's paid today, what's paid monthly, and what the client pays
  other companies directly. "Start my setup" pre-fills the intake form.
*/

import { useMemo, useState } from "react";

export const BUILDS = [
  {
    id: "programme",
    name: "Programme Launch",
    price: 499,
    tag: "Sell through discovery calls",
    points: ["Landing page for one programme", "Offer positioning and copy", "Qualifying questions", "Call booking and reminders", "Lead tracker"],
    direct: ["Calendly Standard, about $12/month, only if you charge for calls"],
  },
  {
    id: "system",
    name: "Client System Launch",
    price: 699,
    tag: "The whole lead-to-paid-client flow",
    points: ["Everything in Programme Launch", "WhatsApp auto-replies and qualifying", "Follow-ups for quiet leads", "Programme checkout, one-off or monthly", "Welcome onboarding for new clients"],
    direct: ["WhatsApp messages: pennies each, paid to Meta", "Calendly Standard, about $12/month, only if you charge for calls"],
  },
];

export const CARES = [
  { id: "none", name: "No Care", monthly: 0, note: "You run the tools yourself" },
  { id: "care", name: "Care", monthly: 49, note: "Hosting, automations, fixes, 30 min edits, monthly report", popular: true },
  { id: "growth", name: "Growth Care", monthly: 89, note: "Care + 2 hrs edits, a new programme page each quarter, monthly funnel review" },
];

export const ADS_PRICE = 149;
export const ANNUAL_SAVING = 100;

const gbp = (n) => `£${n.toLocaleString("en-GB")}`;

export default function PrgPlanPicker() {
  const [build, setBuild] = useState("system");
  const [care, setCare] = useState("care");
  const [annual, setAnnual] = useState(false);
  const [ads, setAds] = useState(false);

  const b = BUILDS.find((x) => x.id === build);
  const c = CARES.find((x) => x.id === care);
  const yearly = annual && c.monthly > 0;

  const sum = useMemo(() => {
    const setup = b.price - (yearly ? ANNUAL_SAVING : 0);
    const today = setup + (ads ? ADS_PRICE : 0) + (yearly ? c.monthly * 10 : 0);
    return { setup, today };
  }, [b, c, ads, yearly]);

  const start = () => {
    try {
      window.dispatchEvent(new CustomEvent("prg-plan", { detail: { build, care, annual: yearly, ads } }));
    } catch {}
  };

  return (
    <div className="pgv-picker">
      <div className="pgv-picker-main">
        <fieldset className="pgv-choice">
          <legend><span className="pgv-pnum">1</span> Choose your build</legend>
          <div className="pgv-opts pgv-opts-2">
            {BUILDS.map((x) => (
              <label key={x.id} className={`pgv-opt${build === x.id ? " pgv-on" : ""}`}>
                <input type="radio" name="pgv-build" value={x.id} checked={build === x.id} onChange={() => setBuild(x.id)} />
                <span className="pgv-opt-top">
                  <b>{x.name}</b>
                  <span className="pgv-opt-price">{gbp(x.price)} <small>one-time</small></span>
                </span>
                <span className="pgv-opt-tag">{x.tag}</span>
                <ul>
                  {x.points.map((p) => <li key={p}>{p}</li>)}
                </ul>
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset className="pgv-choice">
          <legend><span className="pgv-pnum">2</span> Choose monthly care</legend>
          <div className="pgv-opts pgv-opts-3">
            {CARES.map((x) => (
              <label key={x.id} className={`pgv-opt pgv-opt-sm${care === x.id ? " pgv-on" : ""}`}>
                <input type="radio" name="pgv-care" value={x.id} checked={care === x.id} onChange={() => setCare(x.id)} />
                {x.popular && <span className="pgv-pop">Most popular</span>}
                <span className="pgv-opt-top">
                  <b>{x.name}</b>
                  <span className="pgv-opt-price">{x.monthly ? <>{gbp(x.monthly)}<small>/month</small></> : "£0"}</span>
                </span>
                <span className="pgv-opt-tag">{x.note}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset className="pgv-choice">
          <legend><span className="pgv-pnum">3</span> Extras <span className="pgv-optional">(optional)</span></legend>
          <label className={`pgv-toggle${care === "none" ? " pgv-disabled" : ""}`}>
            <input type="checkbox" checked={yearly} disabled={care === "none"} onChange={(e) => setAnnual(e.target.checked)} />
            <span>
              <b>Pay a year of Care upfront</b>
              <small>Save {gbp(ANNUAL_SAVING)} on the build, and get 12 months for the price of 10.</small>
            </span>
          </label>
          <label className="pgv-toggle">
            <input type="checkbox" checked={ads} onChange={(e) => setAds(e.target.checked)} />
            <span>
              <b>Meta and Google Ads setup, {gbp(ADS_PRICE)}</b>
              <small>One-time. Your ad budget is paid to Meta or Google directly.</small>
            </span>
          </label>
        </fieldset>
      </div>

      <aside className="pgv-sum" aria-live="polite" aria-label="Your plan summary">
        <h3>Your plan</h3>
        <dl>
          <div><dt>{b.name}</dt><dd>{gbp(b.price)}</dd></div>
          {yearly && <div className="pgv-save"><dt>Annual saving</dt><dd>−{gbp(ANNUAL_SAVING)}</dd></div>}
          {ads && <div><dt>Ads setup</dt><dd>{gbp(ADS_PRICE)}</dd></div>}
          {yearly && <div><dt>{c.name}, 12 months</dt><dd>{gbp(c.monthly * 10)}</dd></div>}
        </dl>
        <p className="pgv-total"><span>Pay today</span><b>{gbp(sum.today)}</b></p>
        <p className="pgv-then">
          {c.monthly === 0 ? "No monthly fee from us." : yearly ? `${c.name} is paid for the next 12 months.` : <>Then <b>{gbp(c.monthly)}/month</b> for {c.name}.</>}
        </p>
        <div className="pgv-direct">
          <b>Paid to other companies, in your name</b>
          <ul>
            <li>Card or Direct Debit fees on each payment (Stripe: about 1.5% + 20p per UK card)</li>
            {b.direct.map((d) => <li key={d}>{d}</li>)}
            {ads && <li>Your ad budget</li>}
          </ul>
        </div>
        <a className="prg-btn prg-d pgv-sum-cta" href="#intake" onClick={start}>
          Start my setup <span aria-hidden="true">→</span>
        </a>
        <p className="pgv-fine">No payment today. We confirm everything by email first.</p>
      </aside>
    </div>
  );
}