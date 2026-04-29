const LAUNCH_OPTIONS = [
  {
    price: 14999,
    label: "Fitness Program",
    icon: "fa-dumbbell",
    desc: "Sell online training programs",
  },
  {
    price: 14999,
    label: "Product",
    icon: "fa-box",
    desc: "Physical or digital products",
  },
  {
    price: 14999,
    label: "Counseling",
    icon: "fa-user-tie",
    desc: "1:1 or group sessions",
  },
];

export default function StepLaunch({ selected, onChange, onNext }) {
  return (
    <div className="step active">
      <h2>What do you want to launch?</h2>
      <div className="options-grid">
        {LAUNCH_OPTIONS.map((opt) => (
          <div
            key={opt.label}
            className={`option ${selected.label === opt.label ? "active" : ""}`}
            onClick={() => onChange({ label: opt.label, price: opt.price })}
          >
            <div className="icon">
              <i className={`fas ${opt.icon}`} />
            </div>
            <strong>{opt.label}</strong>
            <p>{opt.desc}</p>
          </div>
        ))}
      </div>
      <div className="actions">
        <button className="btn btn-primary" onClick={onNext}>Continue →</button>
      </div>
    </div>
  );
}
