import { DM_Sans, Fraunces } from "next/font/google";
import "../sell-fitness-products.css";
import SfpCtaPair from "../components/SfpCtaPair";
import SfpBudgetCalc from "../components/SfpBudgetCalc";
import SfpPricing from "../components/SfpPricing";
import SfpFaq from "../components/SfpFaq";
import SfpHeroPhone from "../components/SfpHeroPhone";
import { CORE, AUDIENCES, gbp } from "../components/pricing-data";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

// Cheapest add-on a product seller is likely to need (payments, store, reminders, WhatsApp, CRM)
const PROGRAMME = AUDIENCES.find((a) => a.id === "programme");
const MIN_PRODUCT_ADDON = Math.min(...PROGRAMME.addons.map((x) => x.price));

export const metadata = {
  title: "Sell Fitness Products Online | Store and Checkout | Falcoon",
  description: `Sell supplements, plans and digital fitness products 24/7. Falcoon builds the store, checkout and upsells for UK fitness coaches. Core build ${gbp(CORE.price)} one-time.`,
};

/* Simple line icons (inherit colour, decorative) */
const Ico = ({ children }) => (
  <span className="sfp-ico" aria-hidden="true">
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  </span>
);

const ICONS = {
  dm: <path d="M4 5h16v11H9l-5 4z" />,
  file: <path d="M7 3h7l4 4v14H7zM14 3v4h4" />,
  bank: <path d="M3 9l9-5 9 5M5 10v8M10 10v8M14 10v8M19 10v8M3 20h18" />,
  box: <path d="M12 3l8 4v10l-8 4-8-4V7zM4 7l8 4 8-4M12 11v10" />,
  store: <path d="M4 9l1.5-5h13L20 9M4 9v11h16V9M4 9h16M10 20v-6h4v6" />,
  basket: <path d="M3 8h18l-2 11H5zM8 8l4-5 4 5" />,
  card: (
    <>
      <rect x="3" y="6" width="18" height="13" rx="2" />
      <path d="M3 11h18M7 15h4" />
    </>
  ),
  layers: <path d="M12 3l9 5-9 5-9-5zM3 13l9 5 9-5" />,
  download: <path d="M12 4v11M7 11l5 5 5-5M5 20h14" />,
  bell: <path d="M6 16v-5a6 6 0 0112 0v5l2 2H4zM10 21h4" />,
};

const PROBLEMS = [
  ["dm", "Orders lost in DMs and inboxes"],
  ["file", "Sending files and links by hand"],
  ["bank", "Bank transfers and chasing payments"],
  ["box", "One product per buyer, no add-ons"],
];

const JOURNEY_ICONS = ["store", "basket", "card", "layers", "download", "bell"];

const JOURNEY = [
  [
    "Browse",
    "A clean store in your brand, with clear product pages, photos and reviews.",
  ],
  [
    "Add to basket",
    "Buyers add supplements, plans or bundles in one tap, on mobile first.",
  ],
  [
    "Check out",
    "A short checkout with card, PayPal, Apple Pay and Google Pay.",
  ],
  [
    "Upsell",
    "Order bumps and bundle offers appear when buyers are ready to say yes.",
  ],
  [
    "Deliver",
    "Digital products arrive by instant download. Physical orders go to your fulfilment partner.",
  ],
  [
    "Follow up",
    "Receipts, usage tips and a reorder reminder go out without you lifting a finger.",
  ],
];

// One compact row replaces the old five-card integrations section
const WORKS_WITH = [
  ["Shopify", "#95bf47"],
  ["WooCommerce", "#21759b"],
  ["Stan Store", "#222"],
  ["Stripe", "#635bff"],
  ["PayPal", "#003087"],
  ["Apple Pay", "#111"],
  ["Google Pay", "#4285f4"],
  ["WhatsApp", "#25d366"],
  ["Mailchimp", "#ffb800"],
  ["Zapier", "#ff4a00"],
];

export default function SellFitnessProductsPage() {
  return (
    <div className={`sfp-page ${dmSans.variable} ${fraunces.variable}`}>
      {/* HERO */}
      <section className="sfp-hero">
        <div className="sfp-c sfp-hero-in">
          <div>
            <div className="sfp-eyebrow">
              For UK fitness coaches and creators
            </div>
            <h1>
              Sell products
              <br />
              while you <em>sleep.</em>
            </h1>
            <p>
              Sell supplements, plans and digital fitness products 24/7. We
              build the store, checkout and upsells, so every order is paid for
              and delivered without you.
            </p>
            <SfpCtaPair />
            <p className="sfp-micro">
              Free strategy call. Core build {gbp(CORE.price)} one-time. Store,
              delivery and upsells are add-ons from {gbp(MIN_PRODUCT_ADDON)}.
            </p>
          </div>
          <div className="sfp-hv">
            <SfpHeroPhone />
          </div>
        </div>
        <div className="sfp-c sfp-pillars">
          <div>
            <b>Product store</b>
            <span>A branded shop for supplements, plans and ebooks.</span>
          </div>
          <div>
            <b>Fast checkout</b>
            <span>Card, PayPal and Apple Pay, with instant delivery.</span>
          </div>
          <div>
            <b>Upsells and bundles</b>
            <span>Order bumps that grow every basket.</span>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="sfp-sec sfp-dk" aria-labelledby="sfp-problem-h">
        <div className="sfp-c sfp-two">
          <div>
            <h2 id="sfp-problem-h">
              Stop selling one DM at <em>a time.</em>
            </h2>
          </div>
          <div>
            <p className="sfp-lead">
              Selling through DMs, link-in-bio pages and PDF attachments loses
              sales you&apos;ve already earned. Buyers want to check out now,
              not wait until you&apos;re back online.
            </p>
            <div className="sfp-list">
              {PROBLEMS.map(([k, t]) => (
                <div className="sfp-li" key={t}>
                  <Ico>{ICONS[k]}</Ico>
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="sfp-sec" id="system" aria-labelledby="sfp-journey-h">
        <div className="sfp-c">
          <div className="sfp-head sfp-sys-h">
            <div>
              <h2 id="sfp-journey-h">
                From scroll to <em>delivered.</em>
              </h2>
            </div>
            <p className="sfp-lead">
              We build the whole buying journey around your products, your brand
              and your audience.
            </p>
          </div>
          <div className="sfp-flow">
            {JOURNEY.map(([t, x], i) => (
              <div className="sfp-fi" key={t}>
                <Ico>{ICONS[JOURNEY_ICONS[i]]}</Ico>
                <div className="sfp-fn">Step {i + 1}</div>
                <div className="sfp-ft">{t}</div>
                <div className="sfp-fx">{x}</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "40px" }}>
            <div className="sfp-sl">Works with the tools you already use</div>
            <div className="sfp-chips">
              {WORKS_WITH.map(([n, c]) => (
                <span className="sfp-chip" style={{ "--d": c }} key={n}>
                  <i></i>
                  {n}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SHOWCASE */}
      <section className="sfp-sec sfp-dk" aria-labelledby="sfp-show-h">
        <div className="sfp-c">
          <div className="sfp-head" style={{ maxWidth: "780px" }}>
            <h2 id="sfp-show-h">
              Browse, buy, <em>delivered.</em>
            </h2>
            <p className="sfp-lead">
              Supplements, plans or bundles: shopping, payment and delivery all
              happen without you.
            </p>
          </div>
          <div className="sfp-grid3">
            <div>
              <div className="sfp-sl">Product page</div>
              <div className="sfp-win" aria-hidden="true">
                <div className="sfp-bar">
                  <div className="sfp-dots">
                    <i></i>
                    <i></i>
                    <i></i>
                  </div>
                  <b>yourname.co.uk/plan</b>
                </div>
                <div className="sfp-mock">
                  <div
                    className="sfp-pimg sfp-p2"
                    data-t="Digital plan"
                    style={{ height: "110px" }}
                  ></div>
                  <h4>12-week strength plan</h4>
                  <div className="sfp-sub">PDF + app · Instant download</div>
                  <div className="sfp-row sfp-s">
                    <span>Beginner to advanced</span>
                    <span>12 weeks</span>
                  </div>
                  <div className="sfp-row sfp-s">
                    <span>3 sessions a week</span>
                    <span>Home or gym</span>
                  </div>
                  <div className="sfp-row">
                    <span>Price</span>
                    <span>£49</span>
                  </div>
                  <div className="sfp-pay">Add to basket</div>
                </div>
              </div>
              <p className="sfp-cap">
                A page that explains the result and makes buying obvious.
              </p>
            </div>

            <div>
              <div className="sfp-sl">Checkout and order bump</div>
              <div className="sfp-win" aria-hidden="true">
                <div className="sfp-bar">
                  <div className="sfp-dots">
                    <i></i>
                    <i></i>
                    <i></i>
                  </div>
                  <b>yourname.co.uk/checkout</b>
                </div>
                <div className="sfp-mock">
                  <h4>Checkout</h4>
                  <div className="sfp-sub">
                    Secure payment · Instant delivery
                  </div>
                  <div className="sfp-row">
                    <span>12-week strength plan</span>
                    <span>£49.00</span>
                  </div>
                  <div className="sfp-bump">
                    <strong>
                      Add the recipe book for £9 <i>(save £10)</i>
                    </strong>
                    High-protein meals to go with your plan.
                  </div>
                  <div className="sfp-row">
                    <span>Total</span>
                    <span>£58.00</span>
                  </div>
                  <div className="sfp-meth">
                    <span>Card</span>
                    <span>PayPal</span>
                    <span>Apple Pay</span>
                  </div>
                  <div className="sfp-pay">Pay and download</div>
                </div>
              </div>
              <p className="sfp-cap">
                One-tap order bumps add to the basket before the buyer pays.
              </p>
            </div>

            <div>
              <div className="sfp-sl">Bundles</div>
              <div className="sfp-win" aria-hidden="true">
                <div className="sfp-bar">
                  <div className="sfp-dots">
                    <i></i>
                    <i></i>
                    <i></i>
                  </div>
                  <b>yourname.co.uk/bundles</b>
                </div>
                <div className="sfp-mock">
                  <h4>Choose your bundle</h4>
                  <div className="sfp-sub">
                    The more you add, the more you save
                  </div>
                  <div className="sfp-tier">
                    <strong>
                      <span>Plan only</span>
                      <span>£49</span>
                    </strong>
                    12-week strength plan
                  </div>
                  <div className="sfp-tier sfp-on">
                    <strong>
                      <span>Starter bundle</span>
                      <span>£59</span>
                    </strong>
                    Plan + recipe book <span className="sfp-save">Save £9</span>
                  </div>
                  <div className="sfp-tier">
                    <strong>
                      <span>Full kit</span>
                      <span>£89</span>
                    </strong>
                    Plan + recipes + protein{" "}
                    <span className="sfp-save">Save £13.99</span>
                  </div>
                  <div className="sfp-pay">Add bundle</div>
                </div>
              </div>
              <p className="sfp-cap">
                Tiered bundles give buyers a reason to spend more.
              </p>
            </div>
          </div>
          <SfpCtaPair center secondary="budget" />
        </div>
      </section>

      {/* BUDGET CALCULATOR → PRICING → FAQ */}
      <SfpBudgetCalc />
      <SfpPricing />
      <SfpFaq />

      {/* CTA */}
      <section className="sfp-cta">
        <div className="sfp-c">
          <h2>
            Let&apos;s build your <em>product store.</em>
          </h2>
          <p>
            Book a free strategy call and we&apos;ll map out the store, checkout
            and upsells that sell your products 24/7.
          </p>
          <SfpCtaPair dark />
        </div>
      </section>
    </div>
  );
}
