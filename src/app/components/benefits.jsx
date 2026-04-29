"use client";

import { useState } from "react";

export default function ProcessSection() {
  const [active, setActive] = useState(1);

  const toggle = (index) => {
    setActive(index === active ? null : index);
  };

  const steps = [
    {
      title: "Understanding Your Goals",
      desc: "We analyze your niche, audience, and offer to create a strategy that actually converts. No guesswork — only data-driven decisions.",
    },
    {
      title: "Script & Video Creation",
      desc: "We craft high-converting scripts and engaging short-form videos designed to capture attention and drive action on platforms like Instagram and YouTube.",
    },
    {
      title: "Landing Page & Content",
      desc: "We design a clean, conversion-focused landing page with persuasive copy, strong CTAs, and trust elements to turn visitors into leads.",
    },
    {
      title: "Funnel & AI Automation",
      desc: "We build a complete sales funnel with automated follow-ups, lead nurturing, and AI workflows so your business runs 24/7 without manual effort.",
    },
    {
      title: "Ads, Payments & Automation",
      desc: "We integrate payment systems, launch ad campaigns, and connect everything seamlessly so you can start getting clients and revenue immediately.",
    },
  ];

  return (
    <section className="falcoon-process">
      <div className="falcoon-container falcoon-grid">

        {/* LEFT IMAGE */}
        <div className="falcoon-col falcoon-col-left">
          <div className="falcoon-services__image-card">
            <img
              src="/assets/images/coching.png"
              alt="Services"
              className="falcoon-services__image"
            />
          </div>
        </div>

        {/* RIGHT ACCORDION */}
        <div className="falcoon-col">
          <div className="falcoon-process__accordion">
            {steps.map((step, i) => {
              const index = i + 1;
              return (
                <div
                  key={index}
                  className={`falcoon-process__item ${
                    active === index ? "active" : ""
                  }`}
                  onClick={() => toggle(index)}
                >
                  <div className="falcoon-process__item-header">
                    <span className="falcoon-process__number">
                      {String(index).padStart(2, "0")}
                    </span>

                    <h5>{step.title}</h5>

                    <span className="falcoon-process__icon">⌄</span>
                  </div>

                  {active === index && (
                    <p className="falcoon-process__desc">{step.desc}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}