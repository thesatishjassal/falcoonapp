"use client";

import { useState } from "react";

export default function ProcessSection() {
  const steps = [
    {
      title: "Understanding Your Goals",
      desc: "We analyze your niche, audience, and offer to create a strategy that actually converts. No guesswork — only data-driven decisions.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQqkUDU3T_z3SDvlOBQhW7fnPwyqDAZeFUMg&s",
    },
    {
      title: "Video Record & Editing",
      desc: "We craft high-converting scripts and engaging short-form videos designed to capture attention and drive action.",
      image:
        "https://www.entrepreneur.com/wp-content/uploads/sites/2/2018/01/20180109204555-GettyImages-658621130.jpeg",
    },
    {
      title: "Landing Page & Content",
      desc: "We design a clean, conversion-focused landing page with persuasive copy and strong CTAs.",
      image:
        "https://contentwriters.com/blog/wp-content/uploads/content-writer.jpg",
    },
    {
      title: "Funnel & AI Automation",
      desc: "We build a complete funnel with automation and AI workflows so your business runs 24/7.",
      image:
        "https://blogv2new.clickfunnels.com/wp-content/uploads/2024/06/How-AI-Can-Benefit-Businesses-Of-All-Sizes-Info.png",
    },
    {
      title: "Ads, Payments & Automation",
      desc: "We integrate payments, launch ads, and connect everything to start generating revenue.",
      image:
        "https://images.ctfassets.net/lzny33ho1g45/4dsMhlI58z5WrjOnNykcbi/bf8dc73061ff582f2700b61e8e6585be/Group_14833.jpg",
    },
  ];

  const [active, setActive] = useState(0);

  return (
    <section className="falcoon-process">
<h2 className="falcoon-process__title">
  How We Work ⚡
</h2>
      <div className="falcoon-container falcoon-grid">
        {/* LEFT IMAGE (DYNAMIC) */}
        <div className="falcoon-col falcoon-col-left">
          <div className="falcoon-process__image-card">
            <img src={steps[active].image} alt="process" />
          </div>
        </div>

        {/* RIGHT ACCORDION */}
        <div className="falcoon-col">
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

                  <h5>{step.title}</h5>

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