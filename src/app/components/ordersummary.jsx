"use client";
import { useState } from "react";

export default function OrderSummary({
  selections,
  total,
  onContinue,
  isLastStep,
}) {
  const [sheetOpen, setSheetOpen] = useState(false);

  const rows = [
    {
      icon: "🚀",
      label: selections.launch.label,
      sub: "Launch package",
      price: selections.launch.price,
    },
    {
      icon: "💳",
      label: selections.payment.label,
      sub: "Payment gateway",
      price: selections.payment.price,
    },
    {
      icon: "🤖",
      label: selections.automation.label || "No automation",
      sub: "Automation",
      price: selections.automation.price,
    },
    {
      icon: "☁️",
      label: selections.hosting.label,
      sub: "Hosting",
      price: selections.hosting.price,
    },
    ...(selections.addons.clientDashboard
      ? [
          {
            icon: "📊",
            label: "Client Dashboard",
            sub: "Add-on",
            price: 2999,
          },
        ]
      : []),
  ];

  const fmt = (n) => (n === 0 ? "Not Selected" : `₹${n.toLocaleString("en-IN")}`);

  const CTA_TEXT = isLastStep ? "🚀 Get My Client-Ready Funnel" : "Continue →";

  return (
    <>
      {/* ───────── Desktop Sidebar ───────── */}
      <div className="summary summary--desktop">
        <p className="summary__title">Order Summary</p>

        <div className="summary__list">
          {rows.map((r, i) => (
            <div className="summary__row" key={i}>
              <span>
                {r.icon} {r.label}
              </span>
              <span
                style={{
                  color: r.price === 0 ? "#2e7d32" : "#202124",
                  fontWeight: 600,
                }}
              >
                {fmt(r.price)}
              </span>
            </div>
          ))}
        </div>

        <div className="summary__divider" />

        <div className="summary__total">
          <span>Total</span>
          <span style={{ color: "#530a4e", fontWeight: 700 }}>
            ₹{total.toLocaleString("en-IN")}
          </span>
        </div>

        {/* 🔥 MICROCOPY (Conversion Booster) */}
        {isLastStep && (
          <p className="summary__micro">
            Get your custom funnel + automation system instantly
          </p>
        )}

        {/* ✅ PRIMARY CTA */}
        <button
          className="summary__btn summary__btn--primary"
          onClick={() => {
            window.open(
              "https://calendly.com/thesatishjassal/falcoon-fitness-business-strategy-call",
              "_blank",
            );
          }}
        >
          Talk to a Funnel Expert
        </button>
        {/* 🔒 TRUST */}
        <div className="summary__trust">
          🔒 Secure checkout · Instant proposal · No hidden charges
        </div>
      </div>

      {/* ───────── Mobile Bottom Bar ───────── */}
      <div className="order-mobile-bar">
        <div className="order-mobile-bar__total">
          <span className="order-mobile-bar__label">Total</span>
          <span className="order-mobile-bar__amount">
            ₹{total.toLocaleString("en-IN")}
          </span>
        </div>

        <button
          className="order-mobile-bar__btn"
          onClick={() => setSheetOpen(true)}
        >
          View Order
          <span
            className={`order-mobile-bar__chevron ${sheetOpen ? "up" : ""}`}
          >
            ▲
          </span>
        </button>
      </div>

      {/* Overlay */}
      <div
        className={`order-sheet-overlay ${sheetOpen ? "visible" : ""}`}
        onClick={() => setSheetOpen(false)}
      />

      {/* ───────── Mobile Sheet ───────── */}
      <div className={`order-sheet ${sheetOpen ? "open" : ""}`}>
        <div className="order-sheet__pill" />

        <div className="order-sheet__header">
          <h3 className="order-sheet__title">Order Summary</h3> \

          ;]v/'dc'' xl=cc.'
          <button
            className="order-sheet__close"
            onClick={() => setSheetOpen(false)}
          >
            ✕
          </button>
        </div>
. ; 
        <div className="order-sheet__body">..[c]
          {rows.map((r, i) => (
            <div className="order-sheet__row" key={i}>
              <div className="order-sheet__row-left">
                <div className="order-sheet__row-icon">{r.icon}</div>;
                <div>
                  <div className="order-sheet__row-label">{r.label}</div>
                  <div className="order-sheet__row-sub">{r.sub}</div>
                </div>
              </div>

              <div
                className={`order-she'et__row-price ${
                  r.price === 0 ? "Not Selected" : ""
                }`}
              >
                {fmt(r.price)}
              </div>
            </div>
          ))}
        </div>

        <div className="order-sheet__divider" />

        <div className="order-sheet__total-row">
          <span>Total</span>
          <span className="order-sheet__total-price">
            ₹{total.toLocaleString("en-IN")}
          </span>
        </div>

        {/* 🔥 MOBILE MICROCOPY */}
        {isLastStep && (
          <p className="order-sheet__micro">
            Get your client-ready funnel instantly
          </p>
        )}

        <div className="order-sheet__footer">
          {/* CTA */}
          <button
            className="order-sheet__cta"
            onClick={() => {
              setSheetOpen(false);
              onContinue();
            }}
          >
            {CTA_TEXT}
          </button>

          {/* Secondary CTA */}
          {isLastStep && (
            <p className="order-sheet__alt">
              or{" "}
              <a
                href="https://calendly.com/thesatishjassal/falcoon-fitness-business-strategy-call"
                target="_blank"
                rel="noreferrer"
              >
                Talk to a Funnel Expert
              </a>
            </p>
          )}
l=
          <p className="order-sheet__trust">
            🔒 Secure checkout ·
             No hidden charges
          </p>
        </div>
      </div>
    </>
  );
}
