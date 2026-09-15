"use client";
import { useState } from "react";

const faqs = [
  {
    question: "How does Falcoon help fitness coaches?",
    answer:
      "We build high-converting landing pages, funnels, and ad systems so you can sell your fitness programmes, coaching, and digital products effortlessly.",
  },
  {
    question: "Do you run ads for lead generation?",
    answer:
      "Yes, we create and manage ad campaigns to bring high-quality leads directly into your funnel.",
  },
  {
    question: "Can I sell digital products?",
    answer:
      "Absolutely. We help you sell ebooks, workout plans, and diet guides using optimised funnels.",
  },
  {
    question: "Do I need technical skills?",
    answer:
      "Not at all. We handle everything from setup to optimisation so you can focus on your clients.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="classic-mini-faq">
      <div className="classic-wrap classic-mini-faq-grid">
        {/* LEFT SIDE */}
        <div className="classic-mini-faq-left">
          <span className="classic-mini-faq-badge">★ FAQ</span>

          <h2 className="classic-mini-faq-title">
            Everything you need to know before you start
          </h2>

          <p className="classic-mini-faq-subtitle">
            Still unsure? We&apos;ll walk you through everything on a free
            call.
          </p>

          <button
            onClick={() => {
              window.open(
                "https://calendly.com/thesatishjassal/free-strategy-call-uk",
                "_blank"
              );
            }}
            className="classic-mini-faq-cta"
          >
            Book Free Strategy Call →
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="classic-mini-faq-right">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`classic-mini-faq-item ${
                activeIndex === i ? "active" : ""
              }`}
              onClick={() => setActiveIndex(activeIndex === i ? -1 : i)}
            >
              <div className="classic-mini-faq-header">
                <span className="classic-mini-faq-number">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <h4>{faq.question}</h4>

                <span className="classic-mini-faq-icon">
                  {activeIndex === i ? "−" : "+"}
                </span>
              </div>

              {activeIndex === i && (
                <p className="classic-mini-faq-answer">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .classic-mini-faq {
          background: var(--ivory, #f7f1e4);
          color: var(--ink, #241f1c);
          font-family: var(--sans, "Karla", Arial, sans-serif);
          padding: 72px 0 80px;
          border-top: 1px solid var(--line-soft, rgba(36, 31, 28, 0.07));
        }

        .classic-wrap {
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .classic-mini-faq-grid {
          display: grid;
          grid-template-columns: 360px 1fr;
          gap: 48px;
          align-items: start;
        }
        @media (max-width: 900px) {
          .classic-mini-faq-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }

        /* ── Left ── */
        .classic-mini-faq-left {
          position: sticky;
          top: 24px;
        }
        @media (max-width: 900px) {
          .classic-mini-faq-left {
            position: static;
          }
        }
        .classic-mini-faq-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--gold-dark, #96702f);
          background: var(--gold-pale, #f1e4c8);
          padding: 6px 14px;
          border-radius: var(--radius-pill, 999px);
          margin-bottom: 18px;
        }
        .classic-mini-faq-title {
          font-family: var(--serif, "Fraunces", Georgia, serif);
          font-size: clamp(26px, 3.2vw, 34px);
          font-weight: 600;
          letter-spacing: -0.02em;
          line-height: 1.22;
          margin: 0 0 14px;
        }
        .classic-mini-faq-subtitle {
          font-size: 14.5px;
          line-height: 1.6;
          color: var(--ink-soft, #665c53);
          margin: 0 0 26px;
          max-width: 320px;
        }
        .classic-mini-faq-cta {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 15px 26px;
          border: none;
          border-radius: var(--radius-pill, 999px);
          background: var(--ink, #241f1c);
          color: var(--ivory, #f7f1e4);
          font-family: var(--sans, "Karla", Arial, sans-serif);
          font-weight: 700;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.25s ease;
        }
        .classic-mini-faq-cta:hover {
          background: var(--gold-dark, #96702f);
          transform: translateY(-2px);
          box-shadow: 0 12px 24px rgba(150, 112, 47, 0.3);
        }

        /* ── Right: accordion ── */
        .classic-mini-faq-right {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .classic-mini-faq-item {
          border: 1px solid var(--line, rgba(36, 31, 28, 0.13));
          border-radius: var(--radius, 16px);
          background: var(--cream-card, #fffdf7);
          padding: 4px 20px;
          cursor: pointer;
          transition: all 0.22s ease;
        }
        .classic-mini-faq-item:hover {
          border-color: var(--gold, #c39a56);
          box-shadow: var(
            --shadow,
            0 10px 28px rgba(36, 31, 28, 0.08),
            0 2px 8px rgba(36, 31, 28, 0.04)
          );
        }
        .classic-mini-faq-item.active {
          border-color: var(--ink, #241f1c);
          box-shadow: var(
            --shadow,
            0 10px 28px rgba(36, 31, 28, 0.08),
            0 2px 8px rgba(36, 31, 28, 0.04)
          );
          background: linear-gradient(
            160deg,
            #fff,
            var(--gold-pale, #f1e4c8) 260%
          );
        }

        .classic-mini-faq-header {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 16px 0;
        }
        .classic-mini-faq-number {
          flex-shrink: 0;
          font-family: var(--serif, "Fraunces", Georgia, serif);
          font-size: 13px;
          font-weight: 700;
          color: var(--gold-dark, #96702f);
          width: 26px;
        }
        .classic-mini-faq-header h4 {
          flex: 1;
          margin: 0;
          font-size: 14.5px;
          font-weight: 700;
        }
        .classic-mini-faq-icon {
          flex-shrink: 0;
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: var(--ivory-deep, #ece2cc);
          color: var(--ink, #241f1c);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 15px;
          font-weight: 700;
          transition: all 0.2s ease;
        }
        .classic-mini-faq-item.active .classic-mini-faq-icon {
          background: var(--ink, #241f1c);
          color: var(--ivory, #f7f1e4);
        }

        .classic-mini-faq-answer {
          font-size: 13.5px;
          line-height: 1.65;
          color: var(--ink-soft, #665c53);
          margin: 0 0 18px 40px;
          max-width: 560px;
        }
      `}</style>
    </section>
  );
}