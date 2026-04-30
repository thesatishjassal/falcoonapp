"use client";

export default function IntegrationFlows() {
  const flows = [
    {
      title: "Sell Coaching / Programs",
      desc: "Turn Instagram traffic into paid clients automatically",
      steps: [
        { name: "Instagram Ads", icon: "📱" },
        { name: "Landing Page", icon: "🌐" },
        { name: "Checkout", icon: "💳" },
        { name: "Payment", icon: "💰" },
        { name: "Email Delivery", icon: "📩" },
      ],
    },
    {
      title: "Sell Digital Products",
      desc: "E-books, courses & plans — fully automated",
      steps: [
        { name: "Google Ads", icon: "🔍" },
        { name: "Sales Page", icon: "🧾" },
        { name: "Checkout", icon: "💳" },
        { name: "Payment", icon: "💰" },
        { name: "Instant Access", icon: "⚡" },
      ],
    },
    {
      title: "Sell Physical Products",
      desc: "Simple ecommerce flow for fitness brands",
      steps: [
        { name: "Facebook Ads", icon: "📣" },
        { name: "Product Page", icon: "📦" },
        { name: "Cart", icon: "🛒" },
        { name: "Payment", icon: "💳" },
        { name: "Delivery", icon: "🚚" },
      ],
    },
    {
      title: "Book Consultations",
      desc: "Convert leads into booked calls",
      steps: [
        { name: "Instagram / YouTube", icon: "🎥" },
        { name: "Landing Page", icon: "🌐" },
        { name: "Calendar Booking", icon: "📅" },
        { name: "Confirmation", icon: "✅" },
        { name: "Reminder Emails", icon: "📨" },
      ],
    },
  ];

  return (
    <section className="falcoon-integrations">
      <div className="falcoon-container">
        <h2 className="falcoon-integrations__title">
          How Your System Works
        </h2>
        <p className="falcoon-integrations__sub">
          From traffic → payment → delivery. Fully automated.
        </p>

        <div className="falcoon-integrations__grid">
          {flows.map((flow, i) => (
            <div className="falcoon-integrations__card" key={i}>
              <h3>{flow.title}</h3>
              <p>{flow.desc}</p>

              <div className="falcoon-integrations__flow">
                {flow.steps.map((step, index) => (
                  <div key={index} className="falcoon-step">
                    <div className="falcoon-step__icon">
                      {step.icon}
                    </div>
                    <span>{step.name}</span>

                    {index !== flow.steps.length - 1 && (
                      <div className="falcoon-step__arrow">→</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}