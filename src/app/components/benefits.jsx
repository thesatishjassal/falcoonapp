"use client";

const steps = [
  {
    step: "01",
    title: "We understand your business",
    desc: "We jump on a quick call to understand your business, goals, and what you want to sell.",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=280&fit=crop&auto=format",
    alt: "Team discovery call",
  },
  {
    step: "02",
    title: "We create your content & videos",
    desc: "We write high-converting copy and help you record simple videos for your funnel.",
    img: "https://www.shutterstock.com/shutterstock/videos/3801470865/thumb/1.jpg?ip=x480",
    alt: "Professional video recording setup",
  },
  {
    step: "03",
    title: "We build your landing page",
    desc: "We design and develop your landing pages and test everything for conversions.",
    img: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXcZ7F3ozUL9g7kTSoSI6A4b5x5Hb-LgInRhK-e-mxW7W_6bludZdEK9vC9IcsxFe73U5OzclZI7NqeKH_op4upvriSVVmy6RqbrHNcyvIo8Ros9blUsxSs1CetNgjNQiSmehGbtfg?key=IkP_WcJsQ0CdEyp4yM7rSGZk",
    alt: "Web design and development",
  },
  {
    step: "04",
    title: "We set up automation & payments",
    desc: "We connect email, WhatsApp, Google Calendar, meetings, and payments (Stripe, PayPal, Razorpay).",
    img: "https://docs.n8n.io/_images/advanced-ai/ai-intro01.png",
    alt: "Automation and integrations",
  },
  {
    step: "05",
    title: "We run your ads",
    desc: "We set up Meta and Google Ads to bring targeted traffic to your funnel.",
    img: "https://agencianatu.com.br/wp-content/uploads/2024/01/Blog-01-21.png",
    alt: "Marketing analytics dashboard",
  },
  {
    step: "06",
    title: "You start getting clients",
    desc: "Leads come in, bookings happen, and payments get collected automatically.",
    img: "https://www.entrepreneur.com/wp-content/uploads/sites/2/2020/12/1607716659-GettyImages-1189508360.jpg",
    alt: "Happy client on a call",
  },
];

export default function ProcessSection() {
  return (
    <section className="falcoon-process">
      <div className="falcoon-container">
        {/* HEADER */}
        <div className="falcoon-process__header">
          <span className="falcoon-process__badge">• HOW IT WORKS</span>
          <h2 className="falcoon-process__title">
            How we build your <span>revenue funnel</span>
          </h2>
          <p className="falcoon-process__subtitle">
            Simple, done-for-you process — from idea to paying clients.
          </p>
        </div>

        {/* GRID */}
        <div className="falcoon-process__grid-6">
          {steps.map((step, i) => (
            <div key={i} className="falcoon-process__card">
              <div className="falcoon-process__img-wrap">
                <img src={step.img} alt={step.alt} />
                <span className="falcoon-process__step">{step.step}</span>
              </div>

              <h3 className="falcoon-process__card-title">{step.title}</h3>

              <p className="falcoon-process__card-desc">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* NOTE */}
        {/* <div className="falcoon-process__note">
          <p>
            <strong>Note:</strong> Advertising costs are separate. Our full
            funnel setup, automation, and support are included — anytime you
            need help.
          </p>
        </div> */}

        {/* 🔥 CTA SECTION ADDED */}
        <div className="falcoon-process__cta">
          <h3>Ready to build your revenue funnel?</h3>
          <p>Get pricing and a custom proposal for your business in minutes.</p>

          <a href="/pricing" className="falcoon-process__cta-btn">
            View Pricing & Get Proposal →
          </a>
        </div>
      </div>
    </section>
  );
}
