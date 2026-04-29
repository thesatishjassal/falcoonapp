export default function StepContact({ contact, onChange, onSubmit, onBack }) {
  const handleChange = (field) => (e) =>
    onChange({ ...contact, [field]: e.target.value });

  return (
    <div className="step active">
      <h2>Contact Details</h2>
      <div className="contact-form">
        <label>Full Name</label>
        <input
          type="text"
          placeholder="Enter your full name"
          value={contact.name}
          onChange={handleChange("name")}
        />

        <label>Email Address</label>
        <input
          type="email"
          placeholder="you@example.com"
          value={contact.email}
          onChange={handleChange("email")}
        />

        <label>Phone Number</label>
        <input
          type="tel"
          placeholder="+91 98765 43210"
          value={contact.phone}
          onChange={handleChange("phone")}
        />
      </div>

      <div className="actions">
        <button className="btn btn-secondary" onClick={onBack}>← Back</button>
        <button className="btn btn-primary" onClick={onSubmit}>
          Proceed to Payment →
        </button>
      </div>
    </div>
  );
}
