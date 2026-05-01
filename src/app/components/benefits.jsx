"use client";
import { useState } from "react";

export default function ProcessSection() {
  const [active, setActive] = useState(0);

  const steps = [
    {
      title: "We learn your niche & goals",
      desc: "We map your audience, offer, and competitors — so everything we build is designed to convert your specific clients.",
    },
    {
      title: "We create your content & videos",
      desc: "High-converting scripts and engaging short-form content designed to capture attention.",
    },
    {
      title: "We build your landing page",
      desc: "Clean, conversion-focused landing page with persuasive copy and strong CTAs.",
    },
    {
      title: "We set up your funnel & automation",
      desc: "Full funnel with AI automation so your system runs 24/7.",
    },
    {
      title: "We launch ads & connect payments",
      desc: "We integrate payments, launch ads, and activate your revenue system.",
    },
  ];

  return (
    <section className="falcoon-process">
      <div className="falcoon-container">

        {/* HEADER */}
        <div className="falcoon-process__header">
          <span className="falcoon-process__badge">• HOW IT WORKS</span>

          <h2 className="falcoon-process__title">
            From signup to <span>first paying client</span> — here's your path
          </h2>

          <p className="falcoon-process__subtitle">
            Five steps. Done with you. Most coaches are live within a week.
          </p>
        </div>

        <div className="falcoon-process__grid">

          {/* LEFT VISUAL */}
          <div className="falcoon-process__visual">
            <div className="falcoon-process__card">
              🎯
            </div>
          </div>

          {/* RIGHT STEPS */}
          <div className="falcoon-process__accordion">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`falcoon-process__item ${
                  active === i ? "active" : ""
                }`}
                onClick={() => setActive(i)}
              >
                <div className="falcoon-process__item-header">
                  <span className="falcoon-process__number">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <h4>{step.title}</h4>

                  <span className="falcoon-process__icon">
                    {active === i ? "−" : "+"}
                  </span>
                </div>

                {active === i && (
                  <p className="falcoon-process__desc">{step.desc}</p>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}