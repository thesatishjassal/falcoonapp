"use client";

export default function StepGrowth({ selected, onChange, onNext, onBack }) {
  const handleVSL = (value) => {
    onChange({ ...selected, vsl: value });
  };

  const handleBudget = (value) => {
    onChange({ ...selected, adsBudget: value });
  };
  const safeSelected = selected || { vsl: null, adsBudget: null };
  return (
    <div className="growth">
      <h2 className="growth__title">Growth Setup</h2>
      <p className="growth__subtitle">
        Help us tailor your funnel for better results
      </p>

      {/* VSL */}
      <div className="growth__section">
        <p className="growth__label">
          Do you want to record a VSL (Video Sales Letter)?
        </p>

        <div className="growth__grid">
          <div
            className={`growth__card ${
              safeSelected.vsl === "have" ? "growth__card--active" : ""
            }`}
            onClick={() => handleVSL("have")}
          >
            I already have a video
          </div>

          <div
            className={`growth__card ${
              safeSelected.vsl === "record" ? "growth__card--active" : ""
            }`}
            onClick={() => handleVSL("record")}
          >
            Yes, I want to record one
          </div>
        </div>
      </div>

      {/* BUDGET */}
      <div className="growth__section">
        <p className="growth__label">What is your monthly ads budget?</p>

        <div className="growth__grid">
          {["₹5k – ₹7.5k", "₹7.5k – ₹10k", "Above ₹10k"].map((b) => (
            <div
              key={b}
              className={`growth__card ${
                selected.adsBudget === b ? "growth__card--active" : ""
              }`}
              onClick={() => handleBudget(b)}
            >
              {b}
            </div>
          ))}
        </div>
      </div>

      <div className="growth__actions">
        <button className="growth__btn--secondary" onClick={onBack}>
          Back
        </button>

        <button
          className="growth__btn"
          onClick={onNext}
          disabled={!safeSelected.vsl || !selected.adsBudget}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
