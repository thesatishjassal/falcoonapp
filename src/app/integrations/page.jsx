"use client";
import { useEffect, useState } from "react";

export default function IntegrationFlows() {
  const [active, setActive] = useState(0);

  const flows = [
    {
      title: "Sell Coaching",
      subtitle: "Instagram → Clients",
      steps: ["Ads", "Landing", "Checkout", "Payment", "Delivery"],
    },
    {
      title: "Digital Products",
      subtitle: "Auto selling system",
      steps: ["Google Ads", "Page", "Checkout", "Payment", "Access"],
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % 5);
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flow-section">
      <h2>How Your System Works</h2>

      {flows.map((flow, i) => (
        <div key={i} className="flow-row">
          {/* LEFT TEXT */}
          <div className="flow-text">
            <h3>{flow.title}</h3>
            <p>{flow.subtitle}</p>
          </div>

          {/* FLOW */}
          <div className="flow-line">
            {flow.steps.map((step, index) => (
              <div key={index} className="flow-step">
                {/* CIRCLE */}
                <div className={`circle ${index <= active ? "active" : ""}`}>
                  {index + 1}
                </div>

                {/* LABEL */}
                <span className={index <= active ? "active" : ""}>{step}</span>

                {/* LINE */}
                {index !== flow.steps.length - 1 && (
                  <div className={`line ${index < active ? "filled" : ""}`} />
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
