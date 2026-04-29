export default function StepProgress({ steps, currentStep }) {
  return (
    <div className="progress">
      <div className="progress__steps">
        {steps.map((label, i) => {
          const stepNum = i + 1;
          const isCompleted = stepNum < currentStep;
          const isActive = stepNum === currentStep;

          return (
            <div
              key={stepNum}
              className={`progress__item 
                ${isActive ? "progress__item--active" : ""} 
                ${isCompleted ? "progress__item--completed" : ""}`}
            >
              <div className="progress__circle">
                {isCompleted ? "✔" : stepNum}
              </div>

              <div className="progress__label">{label}</div>

              {/* Connector line */}
              {i < steps.length - 1 && (
                <div
                  className={`progress__line ${
                    isCompleted ? "progress__line--active" : ""
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
