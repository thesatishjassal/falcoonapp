"use client";

import { useState } from "react";
import axios from "axios";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
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
      setForm({ name: "", email: "", message: "" });
    } catch {
      alert("Error");
    }

    setLoading(false);
  };

  return (
    <section className="falcoon-contact-new">
      <div className="falcoon-container falcoon-contact-new__wrap">
        {/* LEFT SIDE */}
        <div className="falcoon-contact-new__left">
          <p className="tag">CONTACT</p>
          <h1>
            Let’s build something <br />
            amazing together 🚀
          </h1>

          <p className="desc">
            Have an idea or project? Just drop a message and we’ll get back
            fast.
          </p>

          {/* QUICK ACTIONS */}
          <div className="quick-actions">
            <a href="#">📞 Call Us</a>
            <a href="#">💬 WhatsApp</a>
            <a href="#">📧 Email</a>
          </div>
        </div>

        {/* RIGHT SIDE (FORM CARD) */}
        <form className="falcoon-contact-new__form" onSubmit={handleSubmit}>
          <h3>Start a conversation</h3>

          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={form.email}
            onChange={handleChange}
          />

          <textarea
            name="message"
            rows="4"
            placeholder="Tell us about your idea..."
            value={form.message}
            onChange={handleChange}
          />

          <button type="submit">
            {loading ? "Sending..." : "Send Message →"}
          </button>
        </form>
      </div>

      <div className="falcoon-map">
        {/* MAP */}
        <iframe
          src="https://maps.google.com/maps?q=Delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"
          loading="lazy"
        />

        {/* OVERLAY CARD */}
        <div className="falcoon-map__card">
          <h4>Our Office</h4>
          <p>Delhi, India</p>

          <a
            href="https://maps.google.com?q=Delhi"
            target="_blank"
            rel="noreferrer"
          >
            Get Directions →
          </a>
        </div>
      </div>
    </section>
  );
}
