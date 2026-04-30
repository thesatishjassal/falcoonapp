"use client";

import { useState } from "react";

export default function ApplyModal({ open, onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  if (!open) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // API call here
    setTimeout(() => {
      setLoading(false);
      alert("Application submitted 🚀");
      onClose();
    }, 1500);
  };

  return (
    <div className="falcoon-modal__overlay">
      <div className="falcoon-modal">

        {/* HEADER */}
        <div className="falcoon-modal__header">
          <h3>Apply Now</h3>
          <span onClick={onClose}>✖</span>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit}>

          <input
            className="falcoon-input"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            className="falcoon-input"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            className="falcoon-input"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
          />

          <select
            className="falcoon-input"
            name="service"
            value={form.service}
            onChange={handleChange}
            required
          >
            <option value="">Select Service</option>
            <option>Website Development</option>
            <option>Automation</option>
            <option>Marketing Funnel</option>
          </select>

          <textarea
            className="falcoon-input"
            name="message"
            placeholder="Your Requirement"
            rows="3"
            value={form.message}
            onChange={handleChange}
          />

          <button
            className="falcoon-btn falcoon-btn--dark w-100"
            type="submit"
          >
            {loading ? "Submitting..." : "Submit Application →"}
          </button>

        </form>
      </div>
    </div>
  );
}