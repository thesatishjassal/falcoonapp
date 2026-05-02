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

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post("http://localhost:5000/api/contact", form);
      alert("Sent 🚀");
    } catch {
      alert("Error");
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
            <div className="row">
              <input
                name="firstName"
                placeholder="First name"
                onChange={handleChange}
              />
              <input
                name="lastName"
                placeholder="Last name"
                onChange={handleChange}
              />
            </div>

            <input name="email" placeholder="Email" onChange={handleChange} />

            <input
              name="phone"
              placeholder="Phone number"
              onChange={handleChange}
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Leave us a message..."
              onChange={handleChange}
            />

            {/* CHECKBOX */}
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

            <button type="submit">
              {loading ? "Sending..." : "Send message"}
            </button>
          </form>

          {/* RIGHT SIDE */}
          <div className="falcoon-contact-ui__info">
            <div className="falcoon-contact-ui__card">
              <i className="fas fa-comment-dots"></i>
              <h4>Chat with us</h4>
              <p>Speak to our team instantly</p>
              <a href="#">Start live chat →</a>
            </div>

            <div className="falcoon-contact-ui__card">
              <i className="fas fa-envelope"></i>
              <h4>Email</h4>
              <a href="mailto:hello@facoo.in">hello@facoo.in</a>
            </div>

            <div className="falcoon-contact-ui__card">
              <i className="fas fa-phone"></i>
              <h4>Call</h4>
              <a href="tel:+917888467258">+91 7888467258</a>
            </div>

            <div className="falcoon-contact-ui__card">
              <i className="fas fa-map-marker-alt"></i>
              <h4>Location</h4>
              <p>Jalandhar, Punjab</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
