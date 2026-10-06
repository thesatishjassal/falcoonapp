import Link from "next/link";
import SfpCtaPair from "./SfpCtaPair";
import {
  CORE_PRICE,
  CORE_INCLUDES,
  ADDONS,
  ADS,
  SUPPORT_FROM,
  gbp,
  totalFor,
} from "../Sfppricingdata ";

// Totals are computed from the same data as the calculator, so they can't drift.
const EXAMPLES = [
  [
    "Digital plan store",
    "Store setup and instant delivery",
    ["store", "delivery"],
  ],
  [
    "Store that grows the basket",
    "Store, delivery, bumps and wallet payments",
    ["store", "delivery", "bumps", "wallets"],
  ],
  [
    "Full supplements and plans setup",
    "All six add-ons",
    ADDONS.map((a) => a.id),
  ],
];

// TODO before launch: state whether prices include VAT, and what hosting
// costs after the free first year (only domain renewal is stated on /pricing).
export default function SfpPricing() {
  return (
    <section className="sfp-sec sfp-ivory" id="pricing">
      <div className="sfp-c">
        <div className="sfp-head sfp-center">
          <div className="sfp-label">09 — Pricing</div>
          <h2>
            Pay once for the core. Add only what you <em>sell.</em>
          </h2>
          <p className="sfp-lead">
            Hosting and your domain are free for the first year. Add-ons are
            one-time prices on top of the core build.
          </p>
        </div>

        <div className="sfp-price-grid">
          <article className="sfp-core">
            <small>Core build</small>
            <div className="sfp-core-p">
              {gbp(CORE_PRICE)} <span>one-time</span>
            </div>
            <ul>
              {CORE_INCLUDES.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
            <p className="sfp-micro">
              Support is optional, from {gbp(SUPPORT_FROM)} a month.
            </p>
          </article>

          <ul className="sfp-addons" aria-label="Add-ons">
            {[...ADDONS, ADS].map((a) => (
              <li key={a.id}>
                <span>
                  <strong>{a.name}</strong>
                  <small>{a.tools}</small>
                </span>
                <b>{gbp(a.price)}</b>
              </li>
            ))}
          </ul>
        </div>

        <h3 className="sfp-ex-h">What stores actually cost</h3>
        <div className="sfp-ex">
          {EXAMPLES.map(([t, d, ids]) => (
            <div key={t}>
              <strong>{t}</strong>
              <small>Core build + {d.toLowerCase()}</small>
              <b>{gbp(totalFor(ids))}</b>
            </div>
          ))}
        </div>

        <p className="sfp-micro sfp-note">
          Your store platform, payment provider and email tools bill you
          directly. For example, Stripe charges 1.5% + 20p on standard UK cards.
          See the <Link href="/pricing">full pricing page</Link> for current
          third-party costs.
        </p>
        <SfpCtaPair secondary="budget" center />
      </div>
    </section>
  );
}
