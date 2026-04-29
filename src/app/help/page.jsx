"use client";

import { useState } from "react";
import axios from "axios";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim() || !validateEmail(form.email))
      newErrors.email = "Valid email is required";
    if (form.phone && form.phone.length < 10)
      newErrors.phone = "Enter valid phone number";
    if (!form.message.trim())
      newErrors.message = "Message cannot be empty";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/contact",
        form
      );

      if (res.data.success) {
        alert("Message sent successfully 🚀");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        alert("Something went wrong");
      }
    } catch (err) {
      alert(err.response?.data?.message || "Server error");
    }

    setLoading(false);
  };

  return (
    <section className="falcoon-contact">
      <div className="falcoon-container">
        <p className="falcoon-contact__tag">Get Started</p>

        <h1 className="falcoon-contact__title">
          Get in touch with us.<br />
          We're here to assist you.
        </h1>

        <form className="falcoon-contact__form" onSubmit={handleSubmit}>
          <div className="falcoon-contact__grid">
            <div className="falcoon-contact__field">
              <label>Your Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
              />
              {errors.name && <p className="error-text">{errors.name}</p>}
            </div>

            <div className="falcoon-contact__field">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
              />
              {errors.email && <p className="error-text">{errors.email}</p>}
            </div>

            <div className="falcoon-contact__field">
              <label>Phone Number (optional)</label>
              <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
              />
              {errors.phone && <p className="error-text">{errors.phone}</p>}
            </div>
          </div>

          <div className="falcoon-contact__field falcoon-contact__message">
            <label>Message</label>
            <textarea
              name="message"
              rows="4"
              value={form.message}
              onChange={handleChange}
            />
            {errors.message && (
              <p className="error-text">{errors.message}</p>
            )}
          </div>

          <button
            className={`falcoon-contact__btn ${
              loading ? "loading" : ""
            }`}
            type="submit"
          >
            {loading ? "Sending..." : "Leave us a Message →"}
          </button>
        </form>
      </div>
    </section>
  );
}