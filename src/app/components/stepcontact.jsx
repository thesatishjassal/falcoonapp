export default function StepContact({ contact, onChange, onSubmit, onBack }) {
  const handleChange = (field) => (e) =>
    onChange({ ...contact, [field]: e.target.value });

  return (
    <div className="contact">
      <h2 className="contact__title">Contact Details</h2>
      <p className="contact__subtitle">We’ll use this to set up your account</p>

      <div className="contact__form">
        {/* NAME */}
        <div className="contact__field">
          <label className="contact__label">Full Name</label>
          <div className="contact__input-wrapper">
            <span className="contact__icon">👤</span>
            <input
              className="contact__input"
              type="text"
              placeholder="Enter your full name"
              value={contact.name}
              onChange={handleChange("name")}
            />
          </div>
        </div>

        {/* EMAIL */}
        <div className="contact__field">
          <label className="contact__label">Email Address</label>
          <div className="contact__input-wrapper">
            <span className="contact__icon">📧</span>
            <input
              className="contact__input"
              type="email"
              placeholder="you@example.com"
              value={contact.email}
              onChange={handleChange("email")}
            />
          </div>
        </div>

        {/* PHONE */}
        <div className="contact__field">
          <label className="contact__label">Phone Number</label>
          <div className="contact__input-wrapper">
            <span className="contact__icon">📱</span>
            <input
              className="contact__input"
              type="tel"
              placeholder="+91 98765 43210"
              value={contact.phone}
              onChange={handleChange("phone")}
            />
          </div>
        </div>
      </div>

      <div className="contact__actions">
        <button
          className="contact__btn contact__btn--secondary"
          onClick={onBack}
        >
          ← Back
        </button>
        <button
          className="contact__btn contact__btn--primary"
          onClick={onSubmit}
        >
          Proceed to Payment →
        </button>
      </div>
    </div>
  );
}
