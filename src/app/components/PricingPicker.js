"use client";

/*
  PricingPicker: the quote builder on /pricing.
  What do you sell? → build → care → extras → live summary.
  All prices and maths come from falcoon-pricing.js.
*/

import { useState } from "react";
import { SERVICES, CARES, ADS, ANNUAL, quote, gbp, service } from "./falcoon-pricing";

export default function PricingPicker() {
  const [svcId, setSvcId] = useState("consultations");
  const [buildId, setBuildId] = useState(SERVICES[0].builds[0].id);
  const [careId, setCareId] = useState("care");
  const [annual, setAnnual] = useState(false);
  const [ads, setAds] = useState(false);

  const svc = service(svcId);
  const build = svc.builds.find((b) => b.id === buildId) || svc.builds[0];
  const q = quote({ build, careId, annual, ads });

  const pickService = (id) => {
    setSvcId(id);
    setBuildId(service(id).builds[0].id);
  };

  return (
    <div className="pv-picker">
      <div className="pv-picker-main">
        <fieldset className="pv-choice">
          <legend><span className="pv-pnum">1</span> What do you sell?</legend>
          <div className="pv-seg">
            {SERVICES.map((s) => (
              <label key={s.id} className={svcId === s.id ? "pv-on" : ""}>
                <input type="radio" name="pv-svc" value={s.id} checked={svcId === s.id} onChange={() => pickService(s.id)} />
                <b>{s.name.replace("Sell ", "")}</b>
                <small>{s.for}</small>
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset className="pv-choice">
          <legend><span className="pv-pnum">2</span> Choose your build</legend>
          <div className={`pv-opts${svc.builds.length > 1 ? " pv-opts-2" : ""}`}>
            {svc.builds.map((b) => (
              <label key={b.id} className={`pv-opt${build.id === b.id ? " pv-on" : ""}`}>
                <input type="radio" name="pv-build" value={b.id} checked={build.id === b.id} onChange={() => setBuildId(b.id)} />
                <span className="pv-opt-top">
                  <b>{b.name}</b>
                  <span className="pv-opt-price">{gbp(b.price)} <small>one-time</small></span>
                </span>
                <span className="pv-opt-tag">{b.tag}</span>
                <ul>{b.points.map((p) => <li key={p}>{p}</li>)}</ul>
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset className="pv-choice">
          <legend><span className="pv-pnum">3</span> Choose monthly care</legend>
          <div className="pv-opts pv-opts-3">
            {CARES.map((c) => (
              <label key={c.id} className={`pv-opt pv-opt-sm${careId === c.id ? " pv-on" : ""}`}>
                <input type="radio" name="pv-care" value={c.id} checked={careId === c.id} onChange={() => setCareId(c.id)} />
                {c.popular && <span className="pv-pop">Most popular</span>}
                <span className="pv-opt-top">
                  <b>{c.name}</b>
                  <span className="pv-opt-price">{c.monthly ? <>{gbp(c.monthly)}<small>/month</small></> : "£0"}</span>
                </span>
                <span className="pv-opt-tag">{c.note}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset className="pv-choice">
          <legend><span className="pv-pnum">4</span> Extras <span className="pv-optional">(optional)</span></legend>
          <label className={`pv-toggle${careId === "none" ? " pv-disabled" : ""}`}>
            <input type="checkbox" checked={q.yearly} disabled={careId === "none"} onChange={(e) => setAnnual(e.target.checked)} />
            <span>
              <b>Pay a year of Care upfront</b>
              <small>Save {gbp(ANNUAL.saving)} on the build, and get 12 months for the price of {ANNUAL.monthsPaid}.</small>
            </span>
          </label>
          <label className="pv-toggle">
            <input type="checkbox" checked={ads} onChange={(e) => setAds(e.target.checked)} />
            <span>
              <b>{ADS.name}, {gbp(ADS.price)}</b>
              <small>{ADS.note}</small>
            </span>
          </label>
        </fieldset>
      </div>

      <aside className="pv-sum" aria-live="polite" aria-label="Your quote">
        <p className="pv-sum-for">{svc.name}</p>
        <h3>Your quote</h3>
        <dl>
          <div><dt>{build.name}</dt><dd>{gbp(build.price)}</dd></div>
          {q.yearly && <div className="pv-save"><dt>Annual saving</dt><dd>−{gbp(ANNUAL.saving)}</dd></div>}
          {ads && <div><dt>Ads setup</dt><dd>{gbp(ADS.price)}</dd></div>}
          {q.yearly && <div><dt>{q.care.name}, 12 months</dt><dd>{gbp(q.careUpfront)}</dd></div>}
        </dl>
        <p className="pv-total"><span>Pay today</span><b>{gbp(q.today)}</b></p>
        <p className="pv-then">
          {q.care.monthly === 0
            ? "No monthly fee from us."
            : q.yearly
              ? `${q.care.name} is paid for the next 12 months.`
              : <>Then <b>{gbp(q.monthly)}/month</b> for {q.care.name}.</>}
        </p>
        <div className="pv-direct">
          <b>Paid to other companies, in your name</b>
          <ul>
            <li>Card or Direct Debit fees on each payment</li>
            {build.direct.map((d) => <li key={d}>{d}</li>)}
            {ads && <li>Your ad budget</li>}
            {careId === "none" && <li>Hosting, domain, email and Make.com</li>}
          </ul>
        </div>
        <a className="pv-btn pv-btn-gold" href={`${svc.href}#intake`}>
          Start my setup <span aria-hidden="true">→</span>
        </a>
        <p className="pv-fine">No payment today. We confirm everything by email first.</p>
      </aside>
    </div>
  );
}