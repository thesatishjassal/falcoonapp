export default function StepProgress({ steps, currentStep }) {
  return (
    <div className="progress-bar">
      <div className="steps" id="progress-steps">
        {steps.map((label, i) => {
          const stepNum = i + 1;
          const isCompleted = stepNum < currentStep;
          const isActive = stepNum === currentStep;

          return (
            <div
              key={stepNum}
              className={`step-item${isActive ? " active" : ""}${isCompleted ? " completed" : ""}`}
              data-step={stepNum}
            >
              <div className="step-circle">
                {isCompleted ? "" : stepNum}
              </div>
              <div className="step-label">{label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
