"use client";

/*
  SfpPlanPicker: replaces the old add-on calculator.
  Two easy choices (build + care), two optional extras, and a live summary
  of what's paid today, what's paid monthly, and what the client pays
  other companies directly. "Start my setup" pre-fills the intake form.
*/

import { useMemo, useState } from "react";

export const BUILDS = [
  {
    id: "digital",
    name: "Digital Launch",
    price: 499,
    tag: "Plans, ebooks and programmes",
    points: ["Sales page and Stripe checkout", "Up to 5 digital products", "Instant download delivery", "One order bump or bundle", "Receipts and order alerts"],
    platform: null,
  },
  {
    id: "store",
    name: "Store Launch",
    price: 699,
    tag: "Supplements, merch, or digital and physical",
    points: ["Shopify store, up to 10 products", "Order bumps and bundles", "Fulfilment partner connection", "Instant digital delivery", "Receipts and reorder reminders"],
    platform: "Shopify Basic: £19/month billed yearly, or £25 monthly",
  },
];

export const CARES = [
  { id: "none", name: "No Care", monthly: 0, note: "You run the tools yourself" },
  { id: "care", name: "Care", monthly: 49, note: "Hosting, automations, fixes, 30 min edits, monthly report", popular: true },
  { id: "growth", name: "Growth Care", monthly: 89, note: "Care + 2 hrs edits, new products monthly, a promo campaign, monthly review" },
];

export const ADS_PRICE = 149;
export const ANNUAL_SAVING = 100;

const gbp = (n) => `£${n.toLocaleString("en-GB")}`;

export default function SfpPlanPicker() {
  const [build, setBuild] = useState("digital");
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
      window.dispatchEvent(new CustomEvent("sfp-plan", { detail: { build, care, annual: yearly, ads } }));
    } catch {}
  };

  return (
    <div className="sfv-picker">
      <div className="sfv-picker-main">
        <fieldset className="sfv-choice">
          <legend><span className="sfv-pnum">1</span> Choose your build</legend>
          <div className="sfv-opts sfv-opts-2">
            {BUILDS.map((x) => (
              <label key={x.id} className={`sfv-opt${build === x.id ? " sfv-on" : ""}`}>
                <input type="radio" name="sfv-build" value={x.id} checked={build === x.id} onChange={() => setBuild(x.id)} />
                <span className="sfv-opt-top">
                  <b>{x.name}</b>
                  <span className="sfv-opt-price">{gbp(x.price)} <small>one-time</small></span>
                </span>
                <span className="sfv-opt-tag">{x.tag}</span>
                <ul>
                  {x.points.map((p) => <li key={p}>{p}</li>)}
                </ul>
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset className="sfv-choice">
          <legend><span className="sfv-pnum">2</span> Choose monthly care</legend>
          <div className="sfv-opts sfv-opts-3">
            {CARES.map((x) => (
              <label key={x.id} className={`sfv-opt sfv-opt-sm${care === x.id ? " sfv-on" : ""}`}>
                <input type="radio" name="sfv-care" value={x.id} checked={care === x.id} onChange={() => setCare(x.id)} />
                {x.popular && <span className="sfv-pop">Most popular</span>}
                <span className="sfv-opt-top">
                  <b>{x.name}</b>
                  <span className="sfv-opt-price">{x.monthly ? <>{gbp(x.monthly)}<small>/month</small></> : "£0"}</span>
                </span>
                <span className="sfv-opt-tag">{x.note}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset className="sfv-choice">
          <legend><span className="sfv-pnum">3</span> Extras <span className="sfv-optional">(optional)</span></legend>
          <label className={`sfv-toggle${care === "none" ? " sfv-disabled" : ""}`}>
            <input type="checkbox" checked={yearly} disabled={care === "none"} onChange={(e) => setAnnual(e.target.checked)} />
            <span>
              <b>Pay a year of Care upfront</b>
              <small>Save {gbp(ANNUAL_SAVING)} on the build, and get 12 months for the price of 10.</small>
            </span>
          </label>
          <label className="sfv-toggle">
            <input type="checkbox" checked={ads} onChange={(e) => setAds(e.target.checked)} />
            <span>
              <b>Meta and Google Ads setup, {gbp(ADS_PRICE)}</b>
              <small>One-time. Your ad budget is paid to Meta or Google directly.</small>
            </span>
          </label>
        </fieldset>
      </div>

      <aside className="sfv-sum" aria-live="polite" aria-label="Your plan summary">
        <h3>Your plan</h3>
        <dl>
          <div><dt>{b.name}</dt><dd>{gbp(b.price)}</dd></div>
          {yearly && <div className="sfv-save"><dt>Annual saving</dt><dd>−{gbp(ANNUAL_SAVING)}</dd></div>}
          {ads && <div><dt>Ads setup</dt><dd>{gbp(ADS_PRICE)}</dd></div>}
          {yearly && <div><dt>{c.name}, 12 months</dt><dd>{gbp(c.monthly * 10)}</dd></div>}
        </dl>
        <p className="sfv-total"><span>Pay today</span><b>{gbp(sum.today)}</b></p>
        <p className="sfv-then">
          {c.monthly === 0 ? "No monthly fee from us." : yearly ? `${c.name} is paid for the next 12 months.` : <>Then <b>{gbp(c.monthly)}/month</b> for {c.name}.</>}
        </p>
        <div className="sfv-direct">
          <b>Paid to other companies, in your name</b>
          <ul>
            <li>Card fees: about 1.5% + 20p per UK card payment</li>
            {b.platform && <li>{b.platform}</li>}
            {ads && <li>Your ad budget</li>}
          </ul>
        </div>
        <a className="sfp-btn sfp-d sfv-sum-cta" href="#intake" onClick={start}>
          Start my setup <span aria-hidden="true">→</span>
        </a>
        <p className="sfv-fine">No payment today. We confirm everything by email first.</p>
      </aside>
    </div>
  );
}