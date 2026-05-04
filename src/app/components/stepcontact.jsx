export default function StepContact({ contact, onChange, onSubmit, onBack }) {
  const handleChange = (field) => (e) =>
    onChange({ ...contact, [field]: e.target.value });

  return (
    <div className="contact">
      <div className="contact__header">
        <h2>Almost Done 🎉</h2>
        <p>Enter your details to receive your custom proposal instantly</p>
      </div>

      <div className="contact__form">
        <div className="contact__field">
          <label>Full Name</label>
          <input
            type="text"
            placeholder="John Doe"
            value={contact.name}
            onChange={handleChange("name")}
          />
        </div>

        <div className="contact__field">
          <label>Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            value={contact.email}
            onChange={handleChange("email")}
          />
        </div>

        <div className="contact__field">
          <label>Phone</label>
          <input
            type="tel"
            placeholder="+91 98765 43210"
            value={contact.phone}
            onChange={handleChange("phone")}
          />
        </div>
      </div>

      {/* TRUST LINE */}
      <p className="contact__trust">
        🔒 Your details are सुरक्षित. No spam. Only your proposal.
      </p>

      <div className="contact__actions">
        <button className="contact__btn--secondary" onClick={onBack}>
          ← Back
        </button>

        <button className="contact__btn--primary" onClick={onSubmit}>
          📄 Get My Proposal →
        </button>
      </div>
    </div>
  );
}
