const FAQ = [
  [
    "Is the £149 a monthly fee?",
    "No. £149 is a one-time payment for your core build. Hosting and your domain are free for the first year, and ongoing support is optional from £39 a month.",
  ],
  [
    "Is the WhatsApp automation included?",
    "The core build gives you the landing, checkout and thank-you pages. WhatsApp replies (£89), qualifying questions (£49), call booking (£59), lead tracking (£69) and follow-ups (£79) are one-time add-ons, so you only pay for what you need.",
  ],
  [
    "Do I need to pay for any tools?",
    "Possibly. Subscriptions such as WhatsApp API, CRM or meeting tools are billed directly by those providers, and many have free tiers, so check current rates. Calendly has a free plan, but taking payments at booking needs a paid plan.",
  ],
  [
    "Can you promise me a number of clients?",
    "No. We build the pages, offer and automation. Results depend on your offer, your traffic and how you follow up, so we don't guarantee a number of clients.",
  ],
  [
    "Can you run my ads?",
    "We set up Meta and Google Ads for £149, setup only. Your ad budget is paid directly to Meta or Google.",
  ],
];

export default function PrgFaq() {
  return (
    <section className="prg-sec prg-faq" id="faq">
      <div className="prg-c">
        <div className="prg-head prg-center">
          <h2>
            Questions before you <em>book?</em>
          </h2>
        </div>
        <div className="prg-faq-list">
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
