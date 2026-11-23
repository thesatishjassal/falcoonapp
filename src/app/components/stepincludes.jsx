"use client";

// Comes free with every package — shown as checked, not toggleable
const INCLUDED_ITEMS = [
  {
    key: "landingPage",
    label: "Landing Page",
    icon: "🌐",
    desc: "A page built to turn visitors into leads",
  },
  {
    key: "whatsappAutomation",
    label: "WhatsApp Automation",
    icon: "💬",
    desc: "Instant replies and follow-ups, day or night",
  },
  {
    key: "emailAutomation",
    label: "Email Automation",
    icon: "📧",
    desc: "Automatic email sequences so no lead goes cold",
  },
];

// Optional extras — client can tick these on
const ADDON_ITEMS = [
  {
    key: "crm",
    label: "Lead Management",
    icon: "👥",
    price: 299,
    desc: "Track every lead from first message to paying client",
  },
  {
    key: "booking",
    label: "Appointment Booking",
    icon: "📅",
    price: 299,
    desc: "Let people book a call with you, with automatic reminders",
  },
  {
    key: "hosting",
    label: "Hosting + Domain",
    icon: "☁️",
    price: 399,
    desc: "Don't have a website host yet? We'll set it up for you",
  },
  {
    key: "dashboard",
    label: "Client Dashboard",
    icon: "📊",
    price: 299,
    desc: "Give your clients a place to log in and see their progress",
  },
  {
    key: "coachingPortal",
    label: "Coaching Portal",
    icon: "💪",
    price: 499,
    desc: "Workout plans, meal plans and check-ins in one place",
  },
  {
    key: "community",
    label: "Private Community",
    icon: "❤️",
    price: 299,
    desc: "A group space for your clients to support each other",
  },
  {
    key: "aiChatbot",
    label: "AI Chatbot",
    icon: "🤖",
    price: 299,
    desc: "Answers questions and qualifies new leads while you're busy training",
  },
];

export default function StepIncludes({ selected, onToggle, onNext, onBack }) {
  return (
    <div className="includes">
      <div className="mobile">
        <h2 className="includes__title">What's Included</h2>
        <p className="includes__subtitle">
          Every package comes with the basics below — tick on anything else you
          want added
        </p>
      </div>

      <div className="includes__section">
        <h3 className="includes__section-title">Included in your package</h3>

        <div className="includes__list">
          {INCLUDED_ITEMS.map((item) => (
            <div
              key={item.key}
              className="includes__item includes__item--locked"
            >
              <div className="includes__checkbox includes__checkbox--checked">
                ✔
              </div>
              <div className="includes__icon">{item.icon}</div>
              <div className="includes__content">
                <strong>{item.label}</strong>
                <p>{item.desc}</p>
              </div>
              <div className="includes__price includes__price--included">
                Included
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="includes__section">
        <h3 className="includes__section-title">Add more to your package</h3>

        <div className="includes__list">
          {ADDON_ITEMS.map((item) => {
            const isChecked = !!selected?.[item.key];

            return (
              <div
                key={item.key}
                className={`includes__item ${
                  isChecked ? "includes__item--active" : ""
                }`}
                onClick={() => onToggle(item.key)}
              >
                <div
                  className={`includes__checkbox ${
                    isChecked ? "includes__checkbox--checked" : ""
                  }`}
                >
                  {isChecked && "✔"}
                </div>
                <div className="includes__icon">{item.icon}</div>
                <div className="includes__content">
                  <strong>{item.label}</strong>
                  <p>{item.desc}</p>
                </div>
                <div className="includes__price">+£{item.price}</div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="includes__actions">
        <button
          className="includes__btn includes__btn--secondary"
          onClick={onBack}
        >
          ← Back
        </button>
        <button
          className="includes__btn includes__btn--primary"
          onClick={onNext}
        >
          Continue →
        </button>
      </div>
    </div>
  );
}

export { INCLUDED_ITEMS, ADDON_ITEMS };
