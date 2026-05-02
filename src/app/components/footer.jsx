"use client";
import { useEffect, useState } from "react";

export default function IntegrationFlows() {
  const [activeStep, setActiveStep] = useState(0);

  const flows = [
    {
      title: "Sell Coaching",
      desc: "Instagram → Clients",
      steps: ["Ads", "Landing", "Checkout", "Payment", "Delivery"],
    },
    {
      title: "Digital Products",
      desc: "Auto selling system",
      steps: ["Google Ads", "Page", "Checkout", "Payment", "Access"],
    },
  ];

  // Auto animate steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 5);
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flows">
      <div className="container">
        <h2 className="title">How Your System Works</h2>

        {flows.map((flow, i) => (
          <div className="flow" key={i}>
            <div className="flow-left">
              <h3>{flow.title}</h3>
              <p>{flow.desc}</p>
            </div>

            <div className="flow-right">
              {flow.steps.map((step, index) => (
                <div key={index} className="step-wrapper">
                  <div
                    className={`step-circle ${
                      index <= activeStep ? "active" : ""
                    }`}
                  >
                    {index + 1}
                  </div>

                  <span
                    className={`step-text ${
                      index <= activeStep ? "active" : ""
                    }`}
                  >
                    {step}
                  </span>

                  {index !== flow.steps.length - 1 && (
                    <div
                      className={`step-line ${
                        index < activeStep ? "filled" : ""
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
