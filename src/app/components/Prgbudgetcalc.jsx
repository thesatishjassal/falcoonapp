"use client";

import { useState } from "react";
import PrgCtaPair from "./PrgCtaPair.jsx";
import {
  CORE_PRICE,
  ADDONS,
  ADS,
  SUPPORT_FROM,
  gbp,
} from "./prgPricingdata.jsx";

const OPTIONS = [...ADDONS, ADS];

export default function PrgBudgetCalc() {
  const [picked, setPicked] = useState(() => new Set(["whatsapp"]));

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
    <section className="prg-sec prg-dk" id="budget">
      <div className="prg-c prg-two">
        <div>
          <div className="prg-label">08 — Budget</div>
          <h2 style={{ marginTop: "20px" }}>
            Tick what you need. See what it <em>costs.</em>
          </h2>
          <p className="prg-lead">
            Every client system starts with the £149 core build. Add only the
            parts you need.
          </p>
        </div>

        <div className="prg-calc">
          <fieldset>
            <legend className="prg-sr">Choose your add-ons</legend>
            {OPTIONS.map((o) => (
              <label className="prg-opt" key={o.id}>
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

          <div className="prg-total" aria-live="polite">
            <span>One-time total</span>
            <b>{gbp(total)}</b>
          </div>
          <p className="prg-micro">
            Includes the £149 core build. Optional support is from £
            {SUPPORT_FROM} a month. Third-party tools and ad budgets are billed
            by their providers.
          </p>
          <PrgCtaPair secondary="pricing" />
        </div>
      </div>
    </section>
  );
}
