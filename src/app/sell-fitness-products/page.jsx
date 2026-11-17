import "../sell-fitness-products.css";
import SfpCtaPair from "../components/SfpCtaPair";
import SfpHeroPhone from "../components/SfpHeroPhone";
import SfpPlanPicker from "../components/SfpPlanPicker";
import SfpIntakeForm from "../components/SfpIntakeForm";
// import { dmSans, fraunces } from "./fonts";

export const metadata = {
  title: "Sell Fitness Products Online | Store and Checkout | Falcoon",
  description:
    "Sell supplements, plans and digital fitness products 24/7. Falcoon builds your checkout, instant delivery and upsells for UK fitness coaches. From £499 one-time.",
};

/* ------------------------------------------------------------------ */
/* Icons: one small inline set. Decorative; text always sits beside.   */
/* ------------------------------------------------------------------ */
const ICONS = {
  dm: <path d="M4 5h16v11H9l-5 4z" />,
  file: <path d="M7 3h7l4 4v14H7zM14 3v4h4" />,
  bank: <path d="M3 9l9-5 9 5M5 10v8M10 10v8M14 10v8M19 10v8M3 20h18" />,
  box: <path d="M12 3l8 4v10l-8 4-8-4V7zM4 7l8 4 8-4M12 11v10" />,
  store: <path d="M4 9l1.5-5h13L20 9M4 9v11h16V9M4 9h16M10 20v-6h4v6" />,
  basket: <path d="M3 8h18l-2 11H5zM8 8l4-5 4 5" />,
  card: (<><rect x="3" y="6" width="18" height="13" rx="2" /><path d="M3 11h18M7 15h4" /></>),
  layers: <path d="M12 3l9 5-9 5-9-5zM3 13l9 5 9-5" />,
  download: <path d="M12 4v11M7 11l5 5 5-5M5 20h14" />,
  bell: <path d="M6 16v-5a6 6 0 0112 0v5l2 2H4zM10 21h4" />,
  layout: (<><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18M9 9v11" /></>),
  truck: (<><path d="M3 6h11v10H3zM14 10h4l3 3v3h-7" /><circle cx="7" cy="18" r="1.8" /><circle cx="17" cy="18" r="1.8" /></>),
  refresh: (<><path d="M20 11a8 8 0 10-2.3 5.7" /><path d="M20 4v7h-7" /></>),
  table: (<><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 10h18M3 15h18M9 4v16" /></>),
  chart: <path d="M4 20V11M10 20V5M16 20v-6M3 20h18" />,
  server: (<><rect x="3" y="4" width="18" height="7" rx="1.5" /><rect x="3" y="13" width="18" height="7" rx="1.5" /><path d="M7 7.5h.01M7 16.5h.01" /></>),
  play: (<><circle cx="12" cy="12" r="9" /><path d="M10 8.5l5.5 3.5-5.5 3.5z" /></>),
  form: (<><rect x="5" y="3" width="14" height="18" rx="2" /><path d="M9 8h6M9 12h6M9 16h3" /></>),
  phone: (<><rect x="7" y="2.5" width="10" height="19" rx="2" /><path d="M11 18.5h2" /></>),
  check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
  lock: (<><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V8a4 4 0 018 0v3" /></>),
  shield: (<><path d="M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6z" /><path d="M9 12l2 2 4-4" /></>),
  star: <path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z" />,
  key: (<><circle cx="8" cy="15" r="4" /><path d="M11 12l9-9M17 6l3 3" /></>),
  user: (<><circle cx="12" cy="8" r="4" /><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6" /></>),
  heart: <path d="M12 20s-7-4.4-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.6-7 10-7 10z" />,
};

function Icon({ name, size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      {ICONS[name]}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Content. Prices live in components/SfpPlanPicker.jsx (BUILDS/CARES) */
/* ------------------------------------------------------------------ */
const TRUST = [
  ["card", "Paid into your own Stripe"],
  ["download", "Instant digital delivery"],
  ["key", "No tech skills needed"],
];

const PROBLEMS = [
  ["dm", "Orders lost in DMs and inboxes"],
  ["file", "Sending files and links by hand"],
  ["bank", "Bank transfers and chasing payments"],
  ["box", "One product per buyer, no add-ons"],
];

const JOURNEY = [
  ["store", "Browse", "A clean store in your brand, with clear product pages and photos."],
  ["basket", "Add to basket", "Buyers add plans, supplements or bundles in one tap, built for phones first."],
  ["card", "Check out", "A short checkout with card, PayPal, Apple Pay and Google Pay."],
  ["layers", "Upsell", "Order bumps and bundles appear when buyers are ready to say yes."],
  ["download", "Deliver", "Digital products arrive by instant download. Physical orders go straight to your fulfilment partner."],
  ["bell", "Follow up", "Receipts, a review request and a reorder reminder go out on their own."],
];

const INCLUDED = [
  ["layout", "Sales page", "Copy and design that explain the result and make buying obvious."],
  ["card", "Fast checkout", "Card, PayPal, Apple Pay and Google Pay. Money goes to your account."],
  ["download", "Instant delivery", "A secure download link the moment a digital order is paid."],
  ["layers", "Bumps and bundles", "One-tap add-ons and tiered bundles that grow every basket."],
  ["store", "Product store", "A Shopify store for up to 10 products (Store Launch)."],
  ["truck", "Fulfilment link", "Physical orders sent to your partner, with tracking emails (Store Launch)."],
  ["refresh", "Reorder reminders", "A nudge when a tub is about to run out, for customers who opted in."],
  ["table", "Order tracker", "Every order in one simple sheet you can read on your phone."],
  ["chart", "Weekly sales report", "Orders, revenue, top products and refunds every Monday."],
  ["play", "Handover video", "A short walkthrough and a one-page guide. No training call."],
];

const TOOLS = ["Stripe", "Shopify", "PayPal", "Apple Pay", "Google Pay", "Make.com", "Google Drive", "Mailchimp", "WhatsApp"];

const YOUR_STEPS = [
  ["form", "Fill in one form", "Your details, products, prices and brand.", "About 10 min"],
  ["phone", "Verify payments on your phone", "Stripe or Shopify checks your ID and bank so you can be paid. We send the link.", "About 10 min"],
  ["truck", "Set up shipping (physical only)", "Create your fulfilment partner account, or we help you choose one.", "If needed"],
];

const WE_DO = [
  "Set up your domain, email and one login for everything",
  "Build your sales page or store, checkout and delivery",
  "Connect payments, delivery and order emails with Make.com",
  "Test every path: paid, refunded, bump added, download sent",
  "Send you a preview to approve, then go live",
];

const DIRECT_COSTS = [
  ["card", "Card fees", "about 1.5% + 20p", "Per standard UK card payment, taken automatically. About 94p on a £49 plan."],
  ["store", "Shopify Basic", "£19–£25/month", "Store Launch only. £19 billed yearly, £25 billed monthly."],
  ["truck", "Fulfilment partner", "their rates", "Physical products only. Paid to your partner."],
  ["chart", "Ad budget", "you choose", "Only if you run ads. Paid to Meta or Google."],
];

const IN_CARE = ["Google Workspace email and login", "Hosting and domain renewal", "Make.com automations", "Monitoring, fixes and edits", "Monthly sales report"];

const SAFEGUARDS = [
  ["lock", "Your money, your account", "Payments go straight to your Stripe or Shopify. We never hold your money."],
  ["download", "Download consent", "Checkout asks buyers to agree to instant access, as UK rules expect for digital products."],
  ["star", "Real reviews only", "We only show reviews from genuine customers. Never invented ones."],
  ["shield", "Your claims stay yours", "We build the store. Product and health claims remain your responsibility."],
];

const FAQ = [
  ["Is £499 a monthly fee?", "No. Digital Launch is £499 one-time and Store Launch is £699 one-time. Care plans are optional and cover running everything each month."],
  ["Digital Launch or Store Launch?", "Digital Launch is for plans, ebooks and programmes: no store subscription needed. Choose Store Launch for supplements, merch, or a mix of digital and physical products."],
  ["Do I need Shopify?", "Only for Store Launch. Digital Launch uses Stripe checkout with no monthly platform fee. Shopify Basic is £19/month billed yearly or £25 monthly, paid by you to Shopify."],
  ["Do you ship my supplements?", "No. We don't stock or ship products. We connect your store to a fulfilment partner, who ships every order and sends tracking."],
  ["Do I need to be technical?", "No. We set up a new login for you and connect every tool. You fill in one form and verify payments on your phone."],
  ["Who owns the store and accounts?", "You do. Your Stripe, Shopify, domain and email are in your name. If you leave Care, we hand everything over."],
  ["What does Care include?", "Hosting, domain renewal, Google Workspace, Make.com automations, monitoring, fixes, 30 minutes of edits a month and a monthly sales report. 3-month minimum, then month to month."],
  ["How much do Meta and Google Ads cost?", "Setup is £149 one-time. Your ad budget is paid directly to Meta or Google."],
];

function Head({ label, title, lead, center = false, id }) {
  return (
    <div className={`sfp-head${center ? " sfp-center" : ""}`}>
      <div className="sfp-label">{label}</div>
      <h2 id={id}>{title}</h2>
      {lead && <p className="sfp-lead">{lead}</p>}
    </div>
  );
}

export default function SellFitnessProductsPage() {
  return (
    <div>
      {/* HERO */}
      <section className="sfp-hero" aria-labelledby="sfp-hero-h">
        <div className="sfp-c sfp-hero-in">
          <div>
            <div className="sfp-eyebrow">For UK fitness coaches and creators</div>
            <h1 id="sfp-hero-h">
              Sell products
              <br />
              while you <em>sleep.</em>
            </h1>
            <p>
              Plans, ebooks and supplements, sold 24/7. Buyers pay at checkout,
              digital products deliver themselves, and physical orders go
              straight to your fulfilment partner.
            </p>
            <SfpCtaPair />
            <ul className="sfv-trust" aria-label="Why it's safe">
              {TRUST.map(([i, t]) => (
                <li key={t}><Icon name={i} size={18} />{t}</li>
              ))}
            </ul>
            <p className="sfp-micro">Free strategy call. Done for you from £499 one-time.</p>
          </div>
          <div className="sfp-hv">
            <SfpHeroPhone />
          </div>
        </div>
      </section>

      {/* 01 PROBLEM */}
      <section className="sfp-sec sfp-dk" aria-labelledby="sfp-problem-h">
        <div className="sfp-c sfp-two">
          <div>
            <div className="sfp-label">01 · The way it works now</div>
            <h2 id="sfp-problem-h" style={{ marginTop: 20 }}>
              Stop selling one DM at <em>a time.</em>
            </h2>
          </div>
          <div>
            <p className="sfp-lead">
              DMs, link-in-bio pages and PDF attachments lose sales you&apos;ve
              already earned. Buyers want to check out now, not when you&apos;re
              back online.
            </p>
            <ul className="sfp-list">
              {PROBLEMS.map(([k, t]) => (
                <li className="sfp-li" key={t}>
                  <span className="sfp-ico"><Icon name={k} /></span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 02 JOURNEY */}
      <section className="sfp-sec" id="system" aria-labelledby="sfp-journey-h">
        <div className="sfp-c">
          <Head id="sfp-journey-h" label="02 · How it works" title={<>From scroll to <em>delivered.</em></>} lead="Follow one buyer from your post to their download. Every step runs on its own." />
          <p className="sfv-swipe" aria-hidden="true">Swipe to see each step <span>→</span></p>
          <ol className="sfv-steps sfv-rail" tabIndex={0} aria-label="The six steps, scroll sideways on small screens">
            {JOURNEY.map(([icon, t, x], i) => (
              <li key={t} className={i === 2 ? "sfv-step sfv-step-key" : "sfv-step"}>
                <span className="sfv-ico"><Icon name={icon} /></span>
                <span className="sfv-step-n">Step {i + 1}</span>
                <strong>{t}</strong>
                <p>{x}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 03 SHOWCASE */}
      <section className="sfp-sec sfp-dk" aria-labelledby="sfp-show-h">
        <div className="sfp-c">
          <Head id="sfp-show-h" label="03 · What buyers see" title={<>Browse, buy, <em>download.</em></>} lead="An example store for a coach selling a training plan, a recipe book and protein." />
          <p className="sfv-swipe sfv-swipe-dk" aria-hidden="true">Swipe <span>→</span></p>
          <div className="sfp-grid3 sfv-rail sfv-show" tabIndex={0} role="group" aria-label="Example screens, scroll sideways on small screens">
            <figure>
              <figcaption className="sfp-sl">Product page</figcaption>
              <div className="sfp-win" aria-hidden="true">
                <div className="sfp-bar"><div className="sfp-dots"><i></i><i></i><i></i></div><b>yourname.co.uk/plan</b></div>
                <div className="sfp-mock">
                  <div className="sfp-pimg sfp-p2" data-t="Digital plan" style={{ height: "110px" }}></div>
                  <h4>12-week strength plan</h4>
                  <div className="sfp-sub">PDF + app · Instant download</div>
                  <div className="sfp-row sfp-s"><span>Beginner to advanced</span><span>12 weeks</span></div>
                  <div className="sfp-row sfp-s"><span>3 sessions a week</span><span>Home or gym</span></div>
                  <div className="sfp-row"><span>Price</span><span>£49</span></div>
                  <div className="sfp-pay">Add to basket</div>
                </div>
              </div>
              <p className="sfp-cap">A page that explains the result and makes buying obvious.</p>
            </figure>
            <figure>
              <figcaption className="sfp-sl">Checkout and order bump</figcaption>
              <div className="sfp-win" aria-hidden="true">
                <div className="sfp-bar"><div className="sfp-dots"><i></i><i></i><i></i></div><b>yourname.co.uk/checkout</b></div>
                <div className="sfp-mock">
                  <h4>Checkout</h4>
                  <div className="sfp-sub">Secure payment · Instant delivery</div>
                  <div className="sfp-row"><span>12-week strength plan</span><span>£49.00</span></div>
                  <div className="sfp-bump">
                    <strong>Add the recipe book for £9 <i>(usually £19)</i></strong>
                    High-protein meals to go with your plan.
                  </div>
                  <div className="sfp-row"><span>Total</span><span>£58.00</span></div>
                  <div className="sfp-meth"><span>Card</span><span>PayPal</span><span>Apple Pay</span></div>
                  <div className="sfp-pay">Pay and download</div>
                </div>
              </div>
              <p className="sfp-cap">One-tap add-ons grow the basket before the buyer pays.</p>
            </figure>
            <figure>
              <figcaption className="sfp-sl">Bundles</figcaption>
              <div className="sfp-win" aria-hidden="true">
                <div className="sfp-bar"><div className="sfp-dots"><i></i><i></i><i></i></div><b>yourname.co.uk/bundles</b></div>
                <div className="sfp-mock">
                  <h4>Choose your bundle</h4>
                  <div className="sfp-sub">Plan £49 · Recipes £19 · Protein £34.99</div>
                  <div className="sfp-tier"><strong><span>Plan only</span><span>£49</span></strong>12-week strength plan</div>
                  <div className="sfp-tier sfp-on"><strong><span>Starter bundle</span><span>£59</span></strong>Plan + recipe book <span className="sfp-save">Save £9</span></div>
                  <div className="sfp-tier"><strong><span>Full kit</span><span>£89</span></strong>Plan + recipes + protein <span className="sfp-save">Save £13.99</span></div>
                  <div className="sfp-pay">Add bundle</div>
                </div>
              </div>
              <p className="sfp-cap">Tiered bundles give buyers a reason to spend more.</p>
            </figure>
          </div>
        </div>
      </section>

      {/* 04 INCLUDED */}
      <section className="sfp-sec sfp-ivory" id="included" aria-labelledby="sfp-inc-h">
        <div className="sfp-c">
          <Head id="sfp-inc-h" label="04 · What you get" title={<>Everything, <em>A to Z.</em></>} lead="From a buyer tapping your link to a paid order, a delivered download and a reorder." />
          <ul className="sfv-grid sfv-grid-compact">
            {INCLUDED.map(([icon, t, x]) => (
              <li className="sfv-tile" key={t}>
                <span className="sfv-ico"><Icon name={icon} /></span>
                <strong>{t}</strong>
                <p>{x}</p>
              </li>
            ))}
          </ul>
          <div className="sfv-tools">
            <span>Works with</span>
            <ul aria-label="Connected tools">{TOOLS.map((t) => <li key={t}>{t}</li>)}</ul>
          </div>
        </div>
      </section>

      {/* 05 GETTING LIVE */}
      <section className="sfp-sec" id="onboarding" aria-labelledby="sfp-live-h">
        <div className="sfp-c">
          <Head id="sfp-live-h" label="05 · Getting live" title={<>You do 3 things. <em>We do the rest.</em></>} lead="No meetings, no screen-sharing, no passwords to hand over." center />
          <div className="sfv-split">
            <div className="sfv-panel">
              <h3>Your part</h3>
              <ol className="sfv-todo">
                {YOUR_STEPS.map(([icon, t, x, time], i) => (
                  <li key={t}>
                    <span className="sfv-num" aria-hidden="true">{i + 1}</span>
                    <div>
                      <strong><Icon name={icon} size={18} /> {t}</strong>
                      <p>{x}</p>
                      {i === 0 && <a className="sfv-start" href="#intake">Start the form <span aria-hidden="true">→</span></a>}
                    </div>
                    <span className="sfv-time">{time}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="sfv-panel sfv-panel-dk">
              <h3>Our part</h3>
              <ul className="sfv-checks">{WE_DO.map((t) => <li key={t}><Icon name="check" size={18} />{t}</li>)}</ul>
              <p className="sfv-login"><Icon name="user" size={18} /><span>You get <b>one login</b> for everything: <b>hello@yourbrand.co.uk</b></span></p>
            </div>
          </div>
        </div>
      </section>

      {/* 06 PRICING (plan picker replaces the old add-on calculator) */}
      <section className="sfp-sec sfp-ivory" id="pricing" aria-labelledby="sfp-price-h">
        <span id="budget" aria-hidden="true" />
        <div className="sfp-c">
          <Head id="sfp-price-h" label="06 · Pricing" title={<>Pick your plan in <em>3 taps.</em></>} lead="One fixed build price, optional monthly care, and every other cost shown up front." center />
          <SfpPlanPicker />
        </div>
      </section>

      {/* 07 RUNNING COSTS */}
      <section className="sfp-sec" id="costs" aria-labelledby="sfp-costs-h">
        <div className="sfp-c">
          <Head id="sfp-costs-h" label="07 · No surprises" title={<>What else you&apos;ll <em>pay.</em></>} lead="Some costs belong in your name because they handle your money or your stock. Here they are." />
          <div className="sfv-costs">
            <ul className="sfv-costlist" aria-label="Paid directly by you">
              {DIRECT_COSTS.map(([icon, n, p, x]) => (
                <li key={n}>
                  <span className="sfv-ico"><Icon name={icon} /></span>
                  <div><strong>{n}</strong><p>{x}</p></div>
                  <b className="sfv-cost">{p}</b>
                </li>
              ))}
            </ul>
            <div className="sfv-panel sfv-panel-dk">
              <h3>Included in Care</h3>
              <ul className="sfv-checks">{IN_CARE.map((t) => <li key={t}><Icon name="check" size={18} />{t}</li>)}</ul>
            </div>
          </div>
          <p className="sfv-fine">List prices checked November 2026 and may change. Card fee shown is Stripe&apos;s standard UK rate; Shopify Payments rates differ by plan.</p>
        </div>
      </section>

      {/* 08 SAFEGUARDS */}
      <section className="sfp-sec sfp-dk" id="safeguards" aria-labelledby="sfp-safe-h">
        <div className="sfp-c">
          <Head id="sfp-safe-h" label="08 · Built in" title={<>Honest by <em>design.</em></>} lead="The things buyers and UK rules expect, set up from day one." />
          <p className="sfv-swipe sfv-swipe-dk" aria-hidden="true">Swipe <span>→</span></p>
          <ul className="sfv-grid sfv-grid-4 sfv-rail" tabIndex={0} aria-label="Safeguards, scroll sideways on small screens">
            {SAFEGUARDS.map(([icon, t, x]) => (
              <li className="sfv-tile sfv-tile-dk" key={t}>
                <span className="sfv-ico"><Icon name={icon} /></span>
                <strong>{t}</strong>
                <p>{x}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* INTAKE FORM */}
      <section className="sfp-sec sfp-ivory" id="intake" aria-labelledby="sfp-intake-h">
        <div className="sfp-c sfv-intake">
          <Head id="sfp-intake-h" label="Your part · Step 1" title={<>Tell us about your <em>products.</em></>} lead="4 short steps, about 10 minutes. No payment is taken, and your answers save as you go." center />
          <SfpIntakeForm />
        </div>
      </section>

      {/* FAQ */}
      <section className="sfp-sec sfp-faq" id="faq" aria-labelledby="sfp-faq-h">
        <div className="sfp-c">
          <div className="sfp-head sfp-center"><h2 id="sfp-faq-h">Questions before you <em>start?</em></h2></div>
          <div className="sfp-faq-list">
            {FAQ.map(([q, a]) => (
              <details key={q}><summary>{q}</summary><p>{a}</p></details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="sfp-cta" id="start" aria-labelledby="sfp-cta-h">
        <div className="sfp-c">
          <div className="sfp-label">For UK fitness coaches and creators</div>
          <h2 id="sfp-cta-h">Let&apos;s build your <em>product store.</em></h2>
          <p>Book a free strategy call. We&apos;ll recommend Digital or Store Launch and map out your checkout and upsells.</p>
          <SfpCtaPair dark />
        </div>
      </section>

      {/* Mobile-only sticky action bar */}
      <nav className="sfv-mbar" aria-label="Quick actions">
        <a href="#pricing" className="sfv-mbar-price"><b>From £499</b><span>See plans</span></a>
        <a className="sfp-btn" href="#start">Free strategy call <span aria-hidden="true">→</span></a>
      </nav>
    </div>
  );
}