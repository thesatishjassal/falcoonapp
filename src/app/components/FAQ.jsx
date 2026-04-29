"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How does Falcoon help fitness coaches?",
    answer:
      "We build high-converting landing pages, funnels, and ad systems so you can sell your fitness programs, coaching, and digital products effortlessly.",
  },
  {
    question: "Do you run ads for lead generation?",
    answer:
      "Yes, we create and manage ad campaigns to bring high-quality leads directly into your funnel.",
  },
  {
    question: "Can I sell digital products?",
    answer:
      "Absolutely. We help you sell ebooks, workout plans, and diet guides using optimized funnels.",
  },
  {
    question: "Do I need technical skills?",
    answer:
      "Not at all. We handle everything from setup to optimization so you can focus on your clients.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="falcoon-faq">
      <div className="falcoon-container">
        {/* Left */}
        <div className="falcoon-faq__left">
          <h2 className="falcoon-faq__title">Frequently Asked Questions</h2>
          <p className="falcoon-faq__subtitle">
            Can&apos;t find the answer you&apos;re looking for?{" "}
            <a href="#" className="falcoon-faq__link">Reach out to us</a>
          </p>
        </div>

        {/* Right */}
        <div className="falcoon-faq__right">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`falcoon-faq__item${activeIndex === i ? " active" : ""}`}
            >
              <div
                className="falcoon-faq__header"
                onClick={() => setActiveIndex(activeIndex === i ? -1 : i)}
              >
                <span className="falcoon-faq__number">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h4 className="falcoon-faq__question">{faq.question}</h4>
                <span className="falcoon-faq__icon">⌄</span>
              </div>
              {activeIndex === i && (
                <p className="falcoon-faq__answer">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}