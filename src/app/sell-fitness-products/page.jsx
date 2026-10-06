import { DM_Sans, Fraunces } from "next/font/google";
import "../sell-fitness-products.css";
import SfpCtaPair from "../components/SfpCtaPair";
import SfpBudgetCalc from "../components/SfpBudgetCalc";
import SfpPricing from "../components/SfpPricing";
import SfpFaq from "../components/SfpFaq";
import SfpHeroPhone from "../components/SfpHeroPhone";

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

export const metadata = {
  title: "Sell Fitness Products Online | Falcoon",
  description:
    "Sell supplements, plans and digital fitness products 24/7. Falcoon builds the product store, checkout and upsell system for UK fitness coaches. Core build £149 one-time.",
};

export default function SellFitnessProductsPage() {
  return (
    <div className={`sfp-page ${dmSans.variable} ${fraunces.variable}`}>
      {/* HERO */}
      <section className="sfp-hero">
        <div className="sfp-c sfp-hero-in">
          <div>
            <div className="sfp-eyebrow">
              For UK personal brand fitness coaches
            </div>
            <h1>
              Sell products
              <br />
              while you <em>sleep.</em>
            </h1>
            <p>
              Sell supplements, plans and digital fitness products 24/7. We
              build the store, checkout and upsell system, so every order is
              paid for and delivered without you.
            </p>
            <SfpCtaPair />
            <p className="sfp-micro">
              Free audit. No payment needed. Core build £149 one-time; store,
              delivery and upsells are add-ons from £29.
            </p>
          </div>
          <div className="sfp-hv">
            <SfpHeroPhone />
          </div>
        </div>
        <div className="sfp-c sfp-pillars">
          <div>
            <b>Product store setup</b>
            <span>A branded shop for supplements, plans and ebooks.</span>
          </div>
          <div>
            <b>Checkout + payment flow</b>
            <span>Card, PayPal and Apple Pay, with instant delivery.</span>
          </div>
          <div>
            <b>Upsell &amp; bundle system</b>
            <span>Order bumps and bundles that grow every basket.</span>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="sfp-sec sfp-ivory">
        <div className="sfp-c">
          <div className="sfp-label">01 — The idea</div>
          <div className="sfp-idea-top">
            <h2>
              You already have something people want. Let them buy it{" "}
              <em>at 2am.</em>
            </h2>
            <p className="sfp-lead">
              Right now buying from you means a DM, a wait and a bank transfer.
              Most people give up before the reply arrives.
              <br />
              <br />
              <strong>
                Every product you sell should be one tap from checkout.
              </strong>
            </p>
          </div>
          <div className="sfp-ledger">
            <div>
              <b>Supplements</b>
              <span>Ordered in two taps</span>
              <em>Shipped by your fulfilment partner</em>
            </div>
            <div>
              <b>Training plans</b>
              <span>Paid at checkout</span>
              <em>Downloaded in seconds</em>
            </div>
            <div>
              <b>Recipe books &amp; guides</b>
              <span>Added as an order bump</span>
              <em>Emailed instantly</em>
            </div>
            <div>
              <b>Bundles</b>
              <span>Priced to raise the basket</span>
              <em>Delivered together</em>
            </div>
          </div>
          <SfpCtaPair />
        </div>
      </section>

      {/* PROBLEM */}
      <section className="sfp-sec sfp-dk">
        <div className="sfp-c sfp-two">
          <div>
            <div className="sfp-label">02 — The problem</div>
            <h2 style={{ marginTop: "20px" }}>
              Stop selling one DM at <em>a time.</em>
            </h2>
          </div>
          <div>
            <p className="sfp-lead">
              Selling through Instagram DMs, link-in-bio pages and PDF
              attachments loses sales you&apos;ve already earned. Buyers want to
              check out now, not wait until you&apos;re back online.
            </p>
            <div className="sfp-list">
              <div className="sfp-li">Orders lost in DMs and inboxes</div>
              <div className="sfp-li">Sending files and links by hand</div>
              <div className="sfp-li">Bank transfers and chasing payments</div>
              <div className="sfp-li">One product per buyer, no add-ons</div>
            </div>
            <SfpCtaPair secondary="budget" />
          </div>
        </div>
      </section>

      {/* FUNNEL */}
      <section className="sfp-sec" id="system">
        <div className="sfp-c">
          <div className="sfp-head sfp-sys-h">
            <div>
              <div className="sfp-label">03 — The journey</div>
              <h2 style={{ marginTop: "20px" }}>
                From scroll to <em>delivered.</em>
              </h2>
            </div>
            <p className="sfp-lead">
              We build the whole buying journey around your products, your brand
              and your audience.
            </p>
          </div>
          <div className="sfp-flow">
            <div className="sfp-fi">
              <div className="sfp-fn">01</div>
              <div className="sfp-ft">Browse</div>
              <div className="sfp-fx">
                A clean store in your brand, with clear product pages, photos
                and reviews.
              </div>
            </div>
            <div className="sfp-fi">
              <div className="sfp-fn">02</div>
              <div className="sfp-ft">Add to basket</div>
              <div className="sfp-fx">
                Buyers add supplements, plans or bundles in one tap, on mobile
                first.
              </div>
            </div>
            <div className="sfp-fi">
              <div className="sfp-fn">03</div>
              <div className="sfp-ft">Check out</div>
              <div className="sfp-fx">
                A short checkout with card, PayPal, Apple Pay and Google Pay.
              </div>
            </div>
            <div className="sfp-fi">
              <div className="sfp-fn">04</div>
              <div className="sfp-ft">Upsell</div>
              <div className="sfp-fx">
                Order bumps and bundle offers appear at the moment buyers are
                ready to say yes.
              </div>
            </div>
            <div className="sfp-fi">
              <div className="sfp-fn">05</div>
              <div className="sfp-ft">Deliver</div>
              <div className="sfp-fx">
                Digital products arrive by instant download. Physical orders go
                to your fulfilment partner.
              </div>
            </div>
            <div className="sfp-fi">
              <div className="sfp-fn">06</div>
              <div className="sfp-ft">Follow up</div>
              <div className="sfp-fx">
                Receipts, usage tips and a reorder reminder go out without you
                lifting a finger.
              </div>
            </div>
          </div>
          <SfpCtaPair />
        </div>
      </section>

      {/* FEATURES */}
      <section className="sfp-sec sfp-ivory" id="products">
        <div className="sfp-c">
          <div className="sfp-head sfp-center">
            <div className="sfp-label">04 — Sell fitness products</div>
            <h2>
              A store that sells <em>around the clock.</em>
            </h2>
            <p className="sfp-lead">Here&apos;s what we build for you.</p>
          </div>
          <div className="sfp-grid3">
            <article className="sfp-card">
              <small>01</small>
              <h3>Product store setup</h3>
              <p>
                A branded store for supplements, training plans, ebooks and
                programmes. Product pages, categories and pricing are set up and
                ready to sell.
              </p>
            </article>
            <article className="sfp-card">
              <small>02</small>
              <h3>Checkout + payment flow</h3>
              <p>
                A fast, secure checkout that takes payment by card, PayPal or
                Apple Pay. Digital products are delivered the moment the payment
                clears.
              </p>
            </article>
            <article className="sfp-card">
              <small>03</small>
              <h3>Upsell &amp; bundle system</h3>
              <p>
                Order bumps, bundles and post-purchase offers that raise the
                value of every order, with no extra work from you.
              </p>
            </article>
          </div>
          <SfpCtaPair center />
        </div>
      </section>

      {/* SHOWCASE */}
      <section className="sfp-sec sfp-dk">
        <div className="sfp-c">
          <div className="sfp-head" style={{ maxWidth: "780px" }}>
            <div className="sfp-label">05 — See it in action</div>
            <h2>
              One store. <em>Every kind</em> of product.
            </h2>
            <p className="sfp-lead">
              Supplements, plans or bundles: shopping, payment and delivery all
              happen without you.
            </p>
          </div>
          <div className="sfp-grid3">
            <div>
              <div className="sfp-sl">Product page</div>
              <div className="sfp-win">
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
                A product page that explains the result, shows the price and
                makes buying obvious.
              </p>
            </div>

            <div>
              <div className="sfp-sl">Checkout + order bump</div>
              <div className="sfp-win">
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
                  <div className="sfp-pay">Pay &amp; download</div>
                </div>
              </div>
              <p className="sfp-cap">
                One-tap order bumps add to the basket before the buyer pays.
              </p>
            </div>

            <div>
              <div className="sfp-sl">Bundles</div>
              <div className="sfp-win">
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
          <SfpCtaPair center />
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section className="sfp-sec sfp-ivory" id="integrations">
        <div className="sfp-c">
          <div className="sfp-head sfp-center">
            <div className="sfp-label">06 — Integrations</div>
            <h2>
              Plugs into the tools you <em>already use.</em>
            </h2>
            <p className="sfp-lead">
              Store, payments, delivery and email, connected into one system
              that runs without you.
            </p>
          </div>
          <div className="sfp-grid3">
            <div className="sfp-ic">
              <small>Store</small>
              <h3>Where you sell</h3>
              <div className="sfp-chips">
                <span className="sfp-chip" style={{ "--d": "#95bf47" }}>
                  <i></i>Shopify
                </span>
                <span className="sfp-chip" style={{ "--d": "#21759b" }}>
                  <i></i>WooCommerce
                </span>
                <span className="sfp-chip" style={{ "--d": "#222" }}>
                  <i></i>Stan Store
                </span>
              </div>
            </div>
            <div className="sfp-ic">
              <small>Payments</small>
              <h3>Get paid at checkout</h3>
              <div className="sfp-chips">
                <span className="sfp-chip" style={{ "--d": "#635bff" }}>
                  <i></i>Stripe
                </span>
                <span className="sfp-chip" style={{ "--d": "#003087" }}>
                  <i></i>PayPal
                </span>
                <span className="sfp-chip" style={{ "--d": "#111" }}>
                  <i></i>Apple Pay
                </span>
                <span className="sfp-chip" style={{ "--d": "#4285f4" }}>
                  <i></i>Google Pay
                </span>
              </div>
            </div>
            <div className="sfp-ic">
              <small>Delivery</small>
              <h3>Files and fulfilment</h3>
              <div className="sfp-chips">
                <span className="sfp-chip" style={{ "--d": "#4285f4" }}>
                  <i></i>Google Drive
                </span>
                <span className="sfp-chip" style={{ "--d": "#0061ff" }}>
                  <i></i>Dropbox
                </span>
                <span className="sfp-chip" style={{ "--d": "#8a6d3b" }}>
                  <i></i>Fulfilment partner
                </span>
              </div>
            </div>
            <div className="sfp-ic">
              <small>Email &amp; messaging</small>
              <h3>Receipts and reminders</h3>
              <div className="sfp-chips">
                <span className="sfp-chip" style={{ "--d": "#ea4335" }}>
                  <i></i>Email
                </span>
                <span className="sfp-chip" style={{ "--d": "#25d366" }}>
                  <i></i>WhatsApp
                </span>
                <span className="sfp-chip" style={{ "--d": "#ffb800" }}>
                  <i></i>Mailchimp
                </span>
                <span className="sfp-chip" style={{ "--d": "#6b6b6b" }}>
                  <i></i>Klaviyo
                </span>
              </div>
            </div>
            <div className="sfp-ic">
              <small>Automation &amp; CRM</small>
              <h3>Follow-ups on autopilot</h3>
              <div className="sfp-chips">
                <span className="sfp-chip" style={{ "--d": "#ff4a00" }}>
                  <i></i>Zapier
                </span>
                <span className="sfp-chip" style={{ "--d": "#6d00cc" }}>
                  <i></i>Make
                </span>
                <span className="sfp-chip" style={{ "--d": "#ff7a59" }}>
                  <i></i>HubSpot
                </span>
                <span className="sfp-chip" style={{ "--d": "#0f9d58" }}>
                  <i></i>Google Sheets
                </span>
              </div>
            </div>
            <div className="sfp-ic">
              <small>Something else?</small>
              <h3>Your own stack</h3>
              <p>
                Using another tool? If it connects through Zapier or Make, we
                can wire it in.
              </p>
            </div>
          </div>

          <div className="sfp-auto">
            <h3>
              What happens <em>automatically.</em>
            </h3>
            <p>
              From the moment a customer taps buy, nothing needs your attention.
            </p>
            <div className="sfp-af">
              <div className="sfp-node">
                <small>Store</small>
                <strong>Order placed</strong>Basket, bundle or single product.
              </div>
              <div className="sfp-ar">→</div>
              <div className="sfp-node">
                <small>Stripe · PayPal</small>
                <strong>Payment taken</strong>Secure, one-step checkout.
              </div>
              <div className="sfp-ar">→</div>
              <div className="sfp-node">
                <small>Email</small>
                <strong>Product delivered</strong>Instant download or order sent
                to fulfilment.
              </div>
              <div className="sfp-ar">→</div>
              <div className="sfp-node">
                <small>Checkout</small>
                <strong>Upsell offered</strong>Bump or bundle added to the
                order.
              </div>
              <div className="sfp-ar">→</div>
              <div className="sfp-node">
                <small>Email · WhatsApp</small>
                <strong>Receipt sent</strong>Confirmation and usage tips.
              </div>
              <div className="sfp-ar">→</div>
              <div className="sfp-node">
                <small>CRM · Zapier</small>
                <strong>Reorder triggered</strong>Reminder when stock runs low.
              </div>
            </div>
          </div>
          <SfpCtaPair center />
        </div>
      </section>

      {/* QUOTE */}
      <section className="sfp-quote">
        <div className="sfp-c">
          <div className="sfp-qm">“</div>
          <h2>
            Your best salesperson <em>never clocks off.</em>
          </h2>
        </div>
      </section>

      {/* PARTNERSHIP */}
      <section className="sfp-sec sfp-part" id="partnership">
        <div className="sfp-c sfp-two">
          <div className="sfp-dash" aria-hidden="true">
            <div className="sfp-dh">
              <span>Overnight orders</span>
              <span className="sfp-badge">Example</span>
            </div>
            <div className="sfp-dr">
              <time>00:42</time>
              <div>
                <strong>Starter bundle</strong>
                <small>Plan + recipes · Apple Pay</small>
              </div>
              <em>£59 · Paid</em>
            </div>
            <div className="sfp-dr">
              <time>02:14</time>
              <div>
                <strong>Full kit + order bump</strong>
                <small>Plan, recipes, protein · Card</small>
              </div>
              <em>£97 · Paid</em>
            </div>
            <div className="sfp-dr">
              <time>06:55</time>
              <div>
                <strong>12-week strength plan</strong>
                <small>Instant download · PayPal</small>
              </div>
              <em>£49 · Paid</em>
            </div>
            <div className="sfp-df">
              3 orders · £205 · all delivered automatically
            </div>
          </div>

          <div>
            <div className="sfp-label" style={{ color: "var(--gold-l)" }}>
              07 — The partnership
            </div>
            <h2>
              You build the <em>brand.</em>
              <br />
              We build the <em>store.</em>
            </h2>
            <p>
              Falcoon sets up your product store, checkout and upsell system, so
              you can launch and start selling without touching the tech.
            </p>
            <div className="sfp-checks">
              <div className="sfp-chk">Branded product store</div>
              <div className="sfp-chk">
                Checkout with every major payment method
              </div>
              <div className="sfp-chk">
                Instant delivery of digital products
              </div>
              <div className="sfp-chk">Order bumps and bundles</div>
              <div className="sfp-chk">Receipts, reminders and follow-ups</div>
              <div className="sfp-chk">Mobile-first experience</div>
            </div>
            <SfpCtaPair />
          </div>
        </div>
      </section>

      {/* BUDGET CALCULATOR → PRICING → FAQ */}
      <SfpBudgetCalc />
      <SfpPricing />
      <SfpFaq />

      {/* CTA */}
      <section className="sfp-cta">
        <div className="sfp-c">
          <div className="sfp-label">For UK personal brand fitness coaches</div>
          <h2>
            Let&apos;s build your <em>product store.</em>
          </h2>
          <p>
            Book a free website audit and we&apos;ll map out the store, checkout
            and upsell system that sells your products 24/7.
          </p>
          <SfpCtaPair dark />
        </div>
      </section>
    </div>
  );
}
