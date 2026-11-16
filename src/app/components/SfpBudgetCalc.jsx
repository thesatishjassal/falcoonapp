"use client";

import { useState } from "react";
import SfpCtaPair from "./SfpCtaPair";
import { CORE_PRICE, ADDONS, ADS, SUPPORT_FROM, gbp } from "../Sfppricingdata ";

const OPTIONS = [...ADDONS, ADS];

export default function SfpBudgetCalc() {
  const [picked, setPicked] = useState(() => new Set(["store"]));

  const toggle = (id) =>
    setPicked((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  const total =
    CORE_PRICE +
    OPTIONS.filter((o) => picked.has(o.id)).reduce((s, o) => s + o.price, 0);

  return (
    <section className="sfp-sec sfp-dk" id="budget">
      <div className="sfp-c sfp-two">
        <div>
          <div className="sfp-label">08 — Budget</div>
          <h2 style={{ marginTop: "20px" }}>
            Tick what you sell. See what it <em>costs.</em>
          </h2>
          <p className="sfp-lead">
            Every store starts with the £149 core build. Add only the parts your
            products need.
          </p>
        </div>

        <div className="sfp-calc">
          <fieldset>
            <legend className="sfp-sr">Choose your add-ons</legend>
            {OPTIONS.map((o) => (
              <label className="sfp-opt" key={o.id}>
                <input
                  type="checkbox"
                  checked={picked.has(o.id)}
                  onChange={() => toggle(o.id)}
                />
                <span>
                  <strong>{o.name}</strong>
                  <small>{o.tools}</small>
                </span>
                <b>{gbp(o.price)}</b>
              </label>
            ))}
          </fieldset>

          <div className="sfp-total" aria-live="polite">
            <span>One-time total</span>
            <b>{gbp(total)}</b>
          </div>
          <p className="sfp-micro">
            Includes the £149 core build. Optional support is from £
            {SUPPORT_FROM} a month. Third-party tools and ad budgets are billed
            by their providers.
          </p>
          <SfpCtaPair secondary="pricing" />
        </div>
      </div>
    </section>
  );
}
