"use client";
import { useState } from "react";

export default function StepContact({ contact, onChange, onSubmit, onBack }) {
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validate = (field, value) => {
    let error = "";

    if (field === "name") {
      if (!value.trim()) error = "Full name is required";
      else if (value.trim().length < 3) error = "Enter a valid name";
    }

    if (field === "email") {
      if (!value.trim()) error = "Email is required";
      else if (!/^\S+@\S+\.\S+$/.test(value))
        error = "Enter a valid email address";
    }

    if (field === "phone") {
      if (!value.trim()) error = "Phone number is required";
      else if (!/^[6-9]\d{9}$/.test(value))
        error = "Enter a valid 10-digit number";
    }

    return error;
  };

  const handleChange = (field) => (e) => {
    const value = e.target.value;
    onChange({ ...contact, [field]: value });

    if (touched[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: validate(field, value),
      }));
    }
  };

  const handleBlur = (field) => () => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors((prev) => ({
      ...prev,
      [field]: validate(field, contact[field]),
    }));
  };

  const handleSubmit = () => {
    const newErrors = {
      name: validate("name", contact.name),
      email: validate("email", contact.email),
      phone: validate("phone", contact.phone),
    };

    setErrors(newErrors);
    setTouched({
      name: true,
      email: true,
      phone: true,
    });

    if (!Object.values(newErrors).some((e) => e)) {
      onSubmit();
    }
  };

  const isValid =
    contact.name &&
    contact.email &&
    contact.phone &&
    !errors.name &&
    !errors.email &&
    !errors.phone;

  return (
    <div className="contact">
      <div className="contact__header">
        <h2>Almost Done</h2>
        <p>Enter your details to receive your custom proposal instantly</p>
      </div>

      <div className="contact__form">
        {/* NAME (FULL WIDTH) */}
        <div className="contact__field">
          <label>Full Name</label>
          <input
            type="text"
            placeholder="John Doe"
            value={contact.name}
            onChange={handleChange("name")}
            onBlur={handleBlur("name")}
            className={errors.name && touched.name ? "error" : ""}
          />
          {errors.name && touched.name && (
            <span className="contact__error">{errors.name}</span>
          )}
        </div>

        {/* EMAIL + PHONE ROW */}
        <div className="contact__row">
          <div className="contact__field">
            <label>Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={contact.email}
              onChange={handleChange("email")}
              onBlur={handleBlur("email")}
              className={errors.email && touched.email ? "error" : ""}
            />
            {errors.email && touched.email && (
              <span className="contact__error">{errors.email}</span>
            )}
          </div>

          <div className="contact__field">
            <label>Phone</label>
            <input
              type="tel"
              placeholder="9876543210"
              value={contact.phone}
              onChange={handleChange("phone")}
              onBlur={handleBlur("phone")}
              className={errors.phone && touched.phone ? "error" : ""}
            />
            {errors.phone && touched.phone && (
              <span className="contact__error">{errors.phone}</span>
            )}
          </div>
        </div>
      </div>

      <p className="contact__trust">
        🔒 Your details are secure. No spam. Only your proposal.
      </p>

      <div className="contact__actions">
        <button className="contact__btn--secondary" onClick={onBack}>
          ← Back
        </button>

        <button
          className="contact__btn--primary"
          onClick={handleSubmit}
          disabled={!isValid}
        >
          Get My Proposal →
        </button>
      </div>
    </div>
  );
}
