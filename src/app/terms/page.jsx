"use client";

export default function TermsPage() {
  return (
    <main className="falcoon-terms">
      {/* HERO */}
      <section className="falcoon-terms__hero">
        <div className="falcoon-container">
          <h1>Terms & Conditions</h1>
          <p>Last updated: March 2026</p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="falcoon-terms__content">
        <div className="falcoon-container falcoon-terms__wrapper">
          <div className="falcoon-terms__section">
            <h2>1. Introduction</h2>
            <p>
              Welcome to Falcoon. By accessing our website and services, you
              agree to comply with these terms. Please read them carefully
              before using our platform.
            </p>
          </div>

          <div className="falcoon-terms__section">
            <h2>2. Services</h2>
            <p>
              Falcoon provides digital solutions including funnels, booking
              systems, payment integrations, and marketing automation for
              fitness professionals.
            </p>
          </div>

          <div className="falcoon-terms__section">
            <h2>3. User Responsibilities</h2>
            <ul>
              <li>Provide accurate information</li>
              <li>Do not misuse or abuse the platform</li>
              <li>Comply with all applicable laws</li>
            </ul>
          </div>

          <div className="falcoon-terms__section">
            <h2>4. Payments & Pricing</h2>
            <p>
              All payments are final unless stated otherwise. Pricing may change
              without prior notice.
            </p>
          </div>

          <div className="falcoon-terms__section">
            <h2>5. Intellectual Property</h2>
            <p>
              All content, branding, and technology belong to Falcoon and cannot
              be reused without permission.
            </p>
          </div>

          <div className="falcoon-terms__section">
            <h2>6. Limitation of Liability</h2>
            <p>
              We are not liable for any indirect losses or damages arising from
              the use of our services.
            </p>
          </div>

          <div className="falcoon-terms__section">
            <h2>7. Termination</h2>
            <p>
              We reserve the right to suspend or terminate access if terms are
              violated.
            </p>
          </div>

          <div className="falcoon-terms__section">
            <h2>8. Changes to Terms</h2>
            <p>
              These terms may be updated from time to time. Continued use means
              acceptance of updated terms.
            </p>
          </div>

          <div className="falcoon-terms__section">
            <h2>9. Contact</h2>
            <p>
              For any questions, contact us at{" "}
              <strong>thesatishjassal@gmail.com</strong>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
