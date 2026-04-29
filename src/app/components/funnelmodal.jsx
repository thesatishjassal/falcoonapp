"use client";

export default function FunnelModal({ isOpen, onClose }) {
  if (!isOpen) return null;
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);
  return (
    <div className="falcoon-modal">
      {/* Overlay */}
      <div className="falcoon-modal__overlay" onClick={onClose} />

      {/* Content */}
      <div className="falcoon-modal__content">
        {/* Header */}
        <div className="falcoon-modal__header">
          <h5 className="falcoon-modal__title">
            Let’s Build Your Fitness Funnel 🚀
          </h5>
          <button className="falcoon-modal__close" onClick={onClose}>
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="falcoon-modal__body">
          <p className="falcoon-modal__desc">
            Tell us about your fitness business and we’ll create a
            high-converting funnel for you.
          </p>

          <form className="falcoon-modal__form">
            <input className="falcoon-input" placeholder="Your Name" />
            <input className="falcoon-input" placeholder="WhatsApp Number" />

            <select className="falcoon-input">
              <option>Select Your Role</option>
              <option>Fitness Trainer</option>
              <option>Gym Owner</option>
              <option>Dietitian</option>
              <option>Online Coach</option>
            </select>

            <select className="falcoon-input">
              <option>Your Goal</option>
              <option>Get More Leads</option>
              <option>Sell Online Programs</option>
              <option>Automate Booking</option>
              <option>Scale Revenue</option>
            </select>

            <button className="falcoon-btn falcoon-btn--dark">
              Start My Fitness Funnel →
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
