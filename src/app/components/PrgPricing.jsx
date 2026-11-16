import Link from "next/link";
import PrgCtaPair from "./PrgCtaPair";
import {
  CORE_PRICE,
  CORE_INCLUDES,
  ADDONS,
  ADS,
  SUPPORT_FROM,
  gbp,
  totalFor,
} from "./prgPricingdata";

// Totals are computed from the same data as the calculator, so they can't drift.
const EXAMPLES = [
  [
    "Page with WhatsApp replies",
    "WhatsApp chat and auto-replies",
    ["whatsapp"],
  ],
  [
    "Qualified, booked calls",
    "Offer session, WhatsApp, qualifying and booking",
    ["positioning", "whatsapp", "qualify", "booking"],
  ],
  ["Full client system", "All six add-ons", ADDONS.map((a) => a.id)],
];

// TODO before launch: state whether prices include VAT, and what hosting
// costs after the free first year (only domain renewal is stated on /pricing).
export default function PrgPricing() {
  return (
    <section className="prg-sec prg-ivory" id="pricing">
      <div className="prg-c">
        <div className="prg-head prg-center">
          <div className="prg-label">09 — Pricing</div>
          <h2>
            Pay once for the core. Add only what you <em>need.</em>
          </h2>
          <p className="prg-lead">
            Hosting and your domain are free for the first year. Add-ons are
            one-time prices on top of the core build.
          </p>
        </div>

        <div className="prg-price-grid">
          <article className="prg-core">
            <small>Core build</small>
            <div className="prg-core-p">
              {gbp(CORE_PRICE)} <span>one-time</span>
            </div>
            <ul>
              {CORE_INCLUDES.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
            <p className="prg-micro">
              Support is optional, from {gbp(SUPPORT_FROM)} a month.
            </p>
          </article>

          <ul className="prg-addons" aria-label="Add-ons">
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

        <h3 className="prg-ex-h">What client systems actually cost</h3>
        <div className="prg-ex">
          {EXAMPLES.map(([t, d, ids]) => (
            <div key={t}>
              <strong>{t}</strong>
              <small>Core build + {d.toLowerCase()}</small>
              <b>{gbp(totalFor(ids))}</b>
            </div>
          ))}
        </div>

        <p className="prg-micro prg-note">
          Your store platform, payment provider and email tools bill you
          directly. For example, Stripe charges 1.5% + 20p on standard UK cards.
          See the <Link href="/pricing">full pricing page</Link> for current
          third-party costs.
        </p>
        <PrgCtaPair secondary="budget" center />
      </div>
    </section>
  );
}
