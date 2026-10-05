"use client";
import { useState } from "react";
import axios from "axios";
import { DM_Sans, Fraunces } from "next/font/google";
import "./contact.css";

const CALENDLY = "https://calendly.com/thesatishjassal/free-strategy-call-uk";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const SERVICES = ["Funnel setup", "Ads & leads", "Automation"];

const EMPTY = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
  services: [],
};

const Icon = ({ children }) => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

const CHANNELS = [
  {
    title: "WhatsApp",
    text: "Speak to our team instantly",
    cta: "Message now",
    href: "https://wa.me/447888467258",
    external: true,
    icon: (
      <Icon>
        <path d="M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20.5l1.7-5.2A8.5 8.5 0 1 1 21 11.5Z" />
        <path d="M9 8.5c.3 2.6 2.9 5.2 5.5 5.5l1.3-1.4-2-1-.8.8c-.9-.4-1.7-1.2-2.1-2.1l.8-.8-1-2L9 8.5Z" />
      </Icon>
    ),
  },
  {
    title: "Email",
    text: "Send us your query anytime",
    cta: "Send email",
    href: "mailto:hello@falcoon.co.uk",
    icon: (
      <Icon>
        <rect x="3" y="5" width="18" height="14" rx="1" />
        <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
      </Icon>
    ),
  },
  {
    title: "Call",
    text: "Talk directly with our team",
    cta: "Call now",
    href: "tel:+447888467258",
    icon: (
      <Icon>
        <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1Z" />
      </Icon>
    ),
  },
  {
    title: "Location",
    text: "London, United Kingdom",
    cta: "View map",
    href: "https://maps.app.goo.gl/d56MWasrmE1ChWZDA",
    external: true,
    icon: (
      <Icon>
        <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z" />
        <circle cx="12" cy="10" r="2.5" />
      </Icon>
    ),
  },
];

export default function ContactPage() {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const validate = () => {
    const e = {};
    if (!form.firstName.trim()) e.firstName = "Enter your first name";
    if (!form.email.trim()) e.email = "Enter your email address";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      e.email = "Enter a valid email address";
    if (!form.phone.trim()) e.phone = "Enter your phone number";
    else if (form.phone.length < 10) e.phone = "Enter a valid phone number";
    if (!form.message.trim()) e.message = "Enter a message";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const toggleService = (service) => {
    setForm((f) => ({
      ...f,
      services: f.services.includes(service)
        ? f.services.filter((s) => s !== service)
        : [...f.services, service],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const found = validate();
    if (Object.keys(found).length > 0) {
      setErrors(found);
      return;
    }

    setLoading(true);
    setSuccess("");
    setErrors({});

    try {
      await axios.post("/api/contact", form);
      setSuccess("Message sent. We'll be in touch soon.");
      setForm(EMPTY);
    } catch {
      setErrors({
        api: "Your message didn't send. Check your connection and try again.",
      });
    }

    setLoading(false);
  };

  const field = (name) => ({
    id: `cnt-${name}`,
    name,
    value: form[name],
    onChange: handleChange,
    disabled: loading,
    "aria-invalid": errors[name] ? "true" : undefined,
    "aria-describedby": errors[name] ? `cnt-${name}-err` : undefined,
  });

  const fieldError = (name) =>
    errors[name] ? (
      <span className="cnt-error" id={`cnt-${name}-err`} role="alert">
        {errors[name]}
      </span>
    ) : null;

  return (
    <main className={`cnt-page ${dmSans.variable} ${fraunces.variable}`}>
      {/* HERO */}
      <section className="cnt-hero">
        <div className="cnt-c">
          <div className="cnt-eyebrow">Built for UK fitness professionals</div>
          <h1 className="cnt-h1">
            Questions about your funnel? <em>Ask us.</em>
          </h1>
          <p>
            Tell us about your business and what you want to sell. We&apos;ll
            reply with{" "}
            <span className="cnt-ul cnt-green">clear next steps</span>, not a
            sales script.
          </p>
        </div>
      </section>

      {/* FORM + CHANNELS */}
      <section className="cnt-sec">
        <div className="cnt-c cnt-grid">
          <form className="cnt-form" onSubmit={handleSubmit} noValidate>
            <div className="cnt-label">Send a message</div>

            <div aria-live="polite">
              {success && <div className="cnt-alert cnt-ok">{success}</div>}
              {errors.api && (
                <div className="cnt-alert cnt-bad" role="alert">
                  {errors.api}
                </div>
              )}
            </div>

            <div className="cnt-row">
              <div className="cnt-field">
                <label htmlFor="cnt-firstName">First name</label>
                <input autoComplete="given-name" {...field("firstName")} />
                {fieldError("firstName")}
              </div>
              <div className="cnt-field">
                <label htmlFor="cnt-lastName">Last name</label>
                <input autoComplete="family-name" {...field("lastName")} />
              </div>
            </div>

            <div className="cnt-field">
              <label htmlFor="cnt-email">Email</label>
              <input type="email" autoComplete="email" {...field("email")} />
              {fieldError("email")}
            </div>

            <div className="cnt-field">
              <label htmlFor="cnt-phone">Phone number</label>
              <input type="tel" autoComplete="tel" {...field("phone")} />
              {fieldError("phone")}
            </div>

            <div className="cnt-field">
              <label htmlFor="cnt-message">Message</label>
              <textarea rows="5" {...field("message")} />
              {fieldError("message")}
            </div>

            <fieldset className="cnt-services">
              <legend>What do you need help with?</legend>
              <div className="cnt-chips">
                {SERVICES.map((s) => (
                  <label className="cnt-chip" key={s}>
                    <input
                      type="checkbox"
                      checked={form.services.includes(s)}
                      onChange={() => toggleService(s)}
                      disabled={loading}
                    />
                    <span>{s}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <button type="submit" disabled={loading} className="cnt-btn">
              {loading ? (
                <>
                  <span className="cnt-spinner" aria-hidden="true"></span>
                  Sending
                </>
              ) : (
                <>
                  Send message <span>→</span>
                </>
              )}
            </button>

            <p className="cnt-fine">
              Prefer to talk it through?{" "}
              <a href={CALENDLY} target="_blank" rel="noopener noreferrer">
                Book a free strategy call
              </a>
            </p>
          </form>

          <aside className="cnt-info">
            <div className="cnt-label">Or reach us directly</div>
            <ul className="cnt-ledger">
              {CHANNELS.map((c) => (
                <li key={c.title}>
                  <span className="cnt-ico">{c.icon}</span>
                  <div className="cnt-ch-body">
                    <h2>{c.title}</h2>
                    <p>{c.text}</p>
                  </div>
                  <a
                    href={c.href}
                    className="cnt-more"
                    {...(c.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {c.cta} <span aria-hidden="true">→</span>
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {/* CTA */}
      <section className="cnt-cta">
        <div className="cnt-c">
          <div className="cnt-label">Need a faster answer?</div>
          <h2>
            Book a call and we&apos;ll <em>map your funnel.</em>
          </h2>
          <p>Fixed pricing, no hidden fees, no obligation.</p>
          <a
            href={CALENDLY}
            className="cnt-btn cnt-d"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Free Website Audit <span>→</span>
          </a>
        </div>
      </section>
    </main>
  );
}
