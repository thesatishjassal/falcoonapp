"use client";

import Image from "next/image";
import { useState } from "react";

const steps = [
  {
    number: "01",
    title: "Understanding Your Goals",
    desc: "We deeply understand your requirements, audience, and offers to build a strategy that actually works.",
  },
  {
    number: "02",
    title: "Script & Video Creation",
    desc: "We write high-converting scripts and help you record videos at your place to build trust and authority.",
  },
  {
    number: "03",
    title: "Landing Page & Content",
    desc: "We create persuasive landing pages and supporting content designed to convert visitors into leads.",
  },
  {
    number: "04",
    title: "Funnel & AI Automation",
    desc: "We build your funnel and integrate AI systems to automate lead responses, follow-ups, and qualification.",
  },
  {
    number: "05",
    title: "Ads, Payments & Automation",
    desc: "We run Instagram ads, integrate payments, and set up email automation to convert leads into paying clients.",
  },
];

export default function HowWeWork() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="falcoon-weoffer container-fluid">
      <div className="container falcoon-services__wrapper">
        {/* Heading */}
        <div className="falcoon-services__header text-center">
          <p className="falcoon-services__subtitle">How We Work</p>
          <h2 className="falcoon-services__title">
            Turn your fitness business into a client machine
          </h2>
        </div>

        <div className="row align-items-center">
          {/* Left Image */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="falcoon-services__image-card">
              <img
                src="/assets/images/coching.png"
                alt="Services"
                className="falcoon-services__image img-fluid"
              />
            </div>
          </div>

          {/* Right Accordion */}
          <div className="col-lg-6">
            <div className="falcoon-process__accordion">
              {steps.map((step, i) => (
                <div
                  key={i}
                  className={`falcoon-process__item${activeIndex === i ? " active" : ""}`}
                  onClick={() => setActiveIndex(activeIndex === i ? -1 : i)}
                >
                  <div className="falcoon-process__item-header">
                    <span className="falcoon-process__number">{step.number}</span>
                    <h5>{step.title}</h5>
                    <span className="falcoon-process__icon">⌄</span>
                  </div>
                  {activeIndex === i && (
                    <p className="falcoon-process__desc">{step.desc}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="falcoon-process__footer text-center">
          <p>You focus on coaching. We build the system that brings you clients.</p>
        </div>
      </div>
    </section>
  );
}