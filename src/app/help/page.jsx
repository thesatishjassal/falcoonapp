"use client";
import { useState } from "react";
import axios from "axios";

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
      await axios.post("http://localhost:5000/api/contact", form);
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
    <section className="falcoon-contact-ui">
      <div className="falcoon-container">
        {/* HERO */}
        <div className="falcoon-contact-ui__hero">
          <h1>Contact our team</h1>
          <p>
            Got any questions about your business or scaling? We’re here to
            help.
          </p>
        </div>

        {/* GRID */}
        <div className="falcoon-contact-ui__grid">
          {/* FORM */}
          <form className="falcoon-contact-ui__form" onSubmit={handleSubmit}>
            {/* SUCCESS MESSAGE */}
            {success && <div className="form-success">{success}</div>}
            {errors.api && <div className="form-error">{errors.api}</div>}

            <div className="row">
              <div>
                <input
                  name="firstName"
                  placeholder="First name"
                  value={form.firstName}
                  onChange={handleChange}
                />
                {errors.firstName && (
                  <span className="error">{errors.firstName}</span>
                )}
              </div>

              <div>
                <input
                  name="lastName"
                  placeholder="Last name"
                  value={form.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <input
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>

            <div>
              <input
                name="phone"
                placeholder="Phone number"
                value={form.phone}
                onChange={handleChange}
              />
              {errors.phone && <span className="error">{errors.phone}</span>}
            </div>

            <div>
              <textarea
                name="message"
                rows="4"
                placeholder="Leave us a message..."
                value={form.message}
                onChange={handleChange}
              />
              {errors.message && (
                <span className="error">{errors.message}</span>
              )}
            </div>

            {/* SERVICES */}
            <div className="services">
              <label>
                <input type="checkbox" /> Funnel Setup
              </label>
              <label>
                <input type="checkbox" /> Ads & Leads
              </label>
              <label>
                <input type="checkbox" /> Automation
              </label>
            </div>

            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send message"}
            </button>

            {/* SMART CTA BELOW FORM */}
            <div className="form-cta">
              <p>Need faster help?</p>
              <a
                href="https://calendly.com/thesatishjassal/falcoon-fitness-business-strategy-call"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Free Strategy Call →
              </a>
            </div>
          </form>

          {/* RIGHT SIDE */}
          <div className="falcoon-contact-ui__info">
            <div className="falcoon-contact-ui__card">
              <div className="whatapp_wrapper">
                <img
                  src="/assets/images/whatsapp-svgrepo-com.svg"
                  alt="WhatsApp"
                  className="falcoon-contact-ui__icon"
                />
              </div>

              <div className="falcoon-contact-ui__content">
                <h4>Chat on WhatsApp</h4>
                <p>Speak to our team instantly</p>

                <a
                  href="https://wa.me/917888467258"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="falcoon-contact-ui__cta"
                >
                  Message Now →
                </a>
              </div>
            </div>

            <div className="falcoon-contact-ui__card">
              <i className="fas fa-envelope"></i>

              <div className="falcoon-contact-ui__content">
                <h4>Email</h4>
                <p>Send us your query anytime</p>

                <a
                  href="mailto:hello@facoo.in"
                  className="falcoon-contact-ui__cta"
                >
                  Send Email →
                </a>
              </div>
            </div>

            <div className="falcoon-contact-ui__card">
              <i className="fas fa-phone"></i>

              <div className="falcoon-contact-ui__content">
                <h4>Call</h4>
                <p>Talk directly with our team</p>

                <a href="tel:+917888467258" className="falcoon-contact-ui__cta">
                  Call Now →
                </a>
              </div>
            </div>

            <div className="falcoon-contact-ui__card">
              <i className="fas fa-map-marker-alt"></i>

              <div className="falcoon-contact-ui__content">
                <h4>Location</h4>
                <p>Jalandhar, Punjab</p>

                <a
                  href="https://maps.app.goo.gl/d56MWasrmE1ChWZDA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="falcoon-contact-ui__cta"
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
