export default function StepProgress({ steps, currentStep }) {
  return (
    <div className="progress">

      {/* ── Pill track ── */}
      <div className="progress__track">
        {steps.map((label, i) => {
          const n = i + 1;
          const isActive    = n === currentStep;
          const isCompleted = n < currentStep;

          return (
            <div
              key={n}
              className={[
                "progress__step",
                isActive    ? "progress__step--active"    : "",
                isCompleted ? "progress__step--completed" : "",
              ].join(" ")}
            >
              <span className="progress__step-num">
                {isCompleted ? "✔" : n}
              </span>
              <span className="progress__step-label">{label}</span>
            </div>
          );
        })}
      </div>

      {/* ── Sub info line ── */}
      <div className="progress__info">
        <span className="progress__info-text">
          Step {currentStep} of {steps.length}
        </span>
        <span className="progress__info-current">
          {steps[currentStep - 1]}
        </span>
      </div>

    </div>
  );
}