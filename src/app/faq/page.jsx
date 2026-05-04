"use client";
import { useState } from "react";

const faqs = [
  {
    q: "How will Falcoon help me get more fitness clients?",
    a: "Falcoon builds a complete client acquisition system for you — including landing pages, booking flows, follow-ups, and automation. This means no missed leads and more consistent client bookings.",
  },
  {
    q: "Is this only for online fitness coaches?",
    a: "No. Falcoon works for personal trainers, gym owners, online coaches, yoga instructors, and nutritionists — both online and offline businesses.",
  },
  {
    q: "Do I need technical skills to use Falcoon?",
    a: "Not at all. Everything is set up for you. You just focus on training clients while Falcoon handles leads, bookings, and follow-ups automatically.",
  },
  {
    q: "Can I automate WhatsApp, email, and reminders?",
    a: "Yes. Falcoon automates WhatsApp messages, emails, booking confirmations, and reminders — so your clients stay engaged without manual effort.",
  },
  {
    q: "Will I get a custom landing page or funnel?",
    a: "Yes. You get a high-converting landing page tailored for your fitness niche, designed to turn visitors into paying clients.",
  },
  {
    q: "How quickly can I start getting leads?",
    a: "Most fitness professionals start seeing inquiries within days once traffic is driven to their funnel. Results depend on your outreach or ads.",
  },
  {
    q: "Can I integrate payments like Stripe or Razorpay?",
    a: "Yes. You can accept payments directly through your funnel using Stripe, Razorpay, or other supported platforms.",
  },
  {
    q: "What kind of support do you provide?",
    a: "We provide full support — from setup to scaling. You’ll get guidance on improving conversions and getting more clients.",
  },
  {
    q: "Is there a contract or can I cancel anytime?",
    a: "There are no long-term contracts. You can cancel anytime without hidden charges.",
  },
];

export default function FAQPage() {
  const [active, setActive] = useState(0);

  return (
    <section className="falcoon-faq-new">
      <div className="falcoon-container">
        {/* HERO */}
        <div className="falcoon-faq-new__hero">
          <h1>Frequently asked questions</h1>
          <p>Everything you need to know before getting started</p>
        </div>

        {/* GRID */}
        <div className="falcoon-faq-new__grid">
          {/* LEFT SIDE */}
          <div className="falcoon-faq-new__left">
            {faqs.map((item, i) => (
              <div
                key={i}
                className={`falcoon-faq-new__item ${
                  active === i ? "active" : ""
                }`}
                onClick={() => setActive(active === i ? -1 : i)}
              >
                <div className="falcoon-faq-new__question">
                  <span>{item.q}</span>
                  <span className="icon">{active === i ? "−" : "+"}</span>
                </div>

                {active === i && (
                  <div className="falcoon-faq-new__answer">{item.a}</div>
                )}
              </div>
            ))}
          </div>

          {/* RIGHT SIDE (CTA CARD) */}
          <div className="falcoon-faq-new__card">
            {/* TOP IMAGE (calendar style) */}
            <div className="falcoon-faq-new__card-visual">
              <div className="calendar">
                <div className="calendar-top"></div>
                <div className="calendar-body">
                  <span></span>
                  <span></span>
                  <span className="active"></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>

            <h3>Still have questions?</h3>
            <p>Book a call or reach us anytime.</p>

            <a
              href="https://calendly.com/thesatishjassal/falcoon-fitness-business-strategy-call"
              className="falcoon-btn falcoon-btn--dark"
            >
              Schedule a Call <i className="fa-solid fa-calendar"></i>
            </a>

            {/* CONTACT LIST */}
            <div className="falcoon-faq-new__contact">
              <div className="item">
                <div className="item-left">
                  <i className="fas fa-phone"></i>
                  <span>+91 7888467258</span>
                </div>

                <a href="tel:+917888467258">
                  <i className="fa-solid fa-angle-right"></i>
                </a>
              </div>

              <div className="item">
                <div className="item-left">
                  <i className="fas fa-envelope"></i>
                  <span>thesatishjassal@gmail.com</span>
                </div>

                <a
                  href="mailto:thesatishjassal@gmail.com
"
                >
                  <i className="fa-solid fa-angle-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
