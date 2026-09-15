"use client";
import { useState } from "react";
import axios from "axios";
import "./contact.css";

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const validate = () => {
    let newErrors = {};

    if (!form.firstName.trim()) newErrors.firstName = "First name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Enter valid email";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (form.phone.length < 10) {
      newErrors.phone = "Enter valid phone number";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message can't be empty";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });

    // remove error on typing (good UX)
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    setSuccess("");

    try {
      await axios.post("/api/contact", form);
      setSuccess("Message sent successfully 🚀");
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch {
      setErrors({ api: "Something went wrong. Try again." });
    }

    setLoading(false);
  };

  return (
    <section className="classic-contact">
      <div className="classic-wrap">
        {/* HERO */}
        <div className="classic-contact-hero">
          <div className="classic-eyebrow">★ Built for UK 🇬🇧 fitness brands </div>
          <h1>Contact our team</h1>
          <p>
            Got any questions about your business or scaling? We&apos;re here
            to help.
          </p>
        </div>

        {/* GRID */}
        <div className="classic-contact-grid">
          {/* FORM */}
          <form className="classic-contact-form" onSubmit={handleSubmit}>
            {success && <div className="classic-form-success">{success}</div>}
            {errors.api && (
              <div className="classic-form-error">{errors.api}</div>
            )}

            <div className="classic-form-row">
              <div className="classic-field">
                <input
                  name="firstName"
                  placeholder="First name"
                  value={form.firstName}
                  onChange={handleChange}
                  disabled={loading}
                />
                {errors.firstName && (
                  <span className="classic-error">{errors.firstName}</span>
                )}
              </div>

              <div className="classic-field">
                <input
                  name="lastName"
                  placeholder="Last name"
                  value={form.lastName}
                  disabled={loading}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="classic-field">
              <input
                name="email"
                placeholder="Email"
                value={form.email}
                disabled={loading}
                onChange={handleChange}
              />
              {errors.email && (
                <span className="classic-error">{errors.email}</span>
              )}
            </div>

            <div className="classic-field">
              <input
                name="phone"
                placeholder="Phone number"
                value={form.phone}
                disabled={loading}
                onChange={handleChange}
              />
              {errors.phone && (
                <span className="classic-error">{errors.phone}</span>
              )}
            </div>

            <div className="classic-field">
              <textarea
                name="message"
                rows="4"
                placeholder="Leave us a message..."
                value={form.message}
                disabled={loading}
                onChange={handleChange}
              />
              {errors.message && (
                <span className="classic-error">{errors.message}</span>
              )}
            </div>

            {/* SERVICES */}
            <div className="classic-services">
              <label>
                <input type="checkbox" /> Funnel Setup
              </label>
              <label>
                <input type="checkbox" /> Ads &amp; Leads
              </label>
              <label>
                <input type="checkbox" /> Automation
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="classic-submit-btn"
            >
              {loading ? (
                <span className="classic-btn-loading">
                  <span className="classic-spinner"></span>
                  Sending...
                </span>
              ) : (
                "Send message"
              )}
            </button>

            {/* SMART CTA BELOW FORM */}
            <div className="classic-form-cta">
              <p>Need faster help?</p>
              <a
                href="https://calendly.com/thesatishjassal/free-strategy-call-uk"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Free Strategy Call →
              </a>
            </div>
          </form>

          {/* RIGHT SIDE */}
          <div className="classic-contact-info">
            <div className="classic-contact-card">
              <div className="classic-contact-icon">
                <img
                  src="/assets/images/whatsapp-svgrepo-com.svg"
                  alt="WhatsApp"
                />
              </div>

              <div className="classic-contact-content">
                <h4>Chat on WhatsApp</h4>
                <p>Speak to our team instantly</p>

                <a
                  href="https://wa.me/447888467258"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="classic-contact-cta"
                >
                  Message Now →
                </a>
              </div>
            </div>

            <div className="classic-contact-card">
              <div className="classic-contact-icon">
                <i className="fas fa-envelope"></i>
              </div>

              <div className="classic-contact-content">
                <h4>Email</h4>
                <p>Send us your query anytime</p>

                <a
                  href="mailto:hello@falcoon.co.uk"
                  className="classic-contact-cta"
                >
                  Send Email →
                </a>
              </div>
            </div>

            <div className="classic-contact-card">
              <div className="classic-contact-icon">
                <i className="fas fa-phone"></i>
              </div>

              <div className="classic-contact-content">
                <h4>Call</h4>
                <p>Talk directly with our team</p>

                <a href="tel:+447888467258" className="classic-contact-cta">
                  Call Now →
                </a>
              </div>
            </div>

            <div className="classic-contact-card">
              <div className="classic-contact-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>

              <div className="classic-contact-content">
                <h4>Location</h4>
                <p>London, United Kingdom</p>

                <a
                  href="https://maps.app.goo.gl/d56MWasrmE1ChWZDA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="classic-contact-cta"
                >
                  View Map →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}