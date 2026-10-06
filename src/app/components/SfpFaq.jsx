const FAQ = [
  [
    "Is the £149 a monthly fee?",
    "No. £149 is a one-time payment for your core build. Hosting and your domain are free for the first year, and ongoing support is optional from £39 a month.",
  ],
  [
    "Is the store included in the £149?",
    "The core build gives you a landing page, checkout page and thank-you page. Product store setup (£129), instant delivery (£39), order bumps and bundles (£49) and the other extras are one-time add-ons, so you only pay for what you sell.",
  ],
  [
    "Do I need Shopify?",
    "No. We can set up Shopify, WooCommerce or Stan Store, whichever suits your products. Platforms bill you directly. Shopify Basic is about £19 a month on annual billing.",
  ],
  [
    "Do I need my own Stripe or PayPal account?",
    "Yes. We connect your own account so payments land straight with you. On a £49 plan paid by standard UK card, Stripe's fee is about £0.94, so about £48.06 reaches you.",
  ],
  [
    "Can you ship my supplements?",
    "We connect your store to your fulfilment partner so orders are passed on automatically (£69). We build the funnel and don't stock or ship products.",
  ],
  [
    "What does Meta and Google Ads setup cost?",
    "£149, for setup only. Your ad budget is paid directly to Meta or Google.",
  ],
];

export default function SfpFaq() {
  return (
    <section className="sfp-sec sfp-faq" id="faq">
      <div className="sfp-c">
        <div className="sfp-head sfp-center">
          <h2>
            Questions before you <em>book?</em>
          </h2>
        </div>
        <div className="sfp-faq-list">
          {FAQ.map(([q, a]) => (
            <details key={q}>
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
