"use client";

export default function ThankYouPage() {
  return (
    <div className="thankyou">
      <div className="thankyou__card">
        <div className="checkmark">✓</div>

        <h1>Proposal Sent</h1>

        <p>
          Your personalized quotation has been sent to your email.
          <br />
          Our team will connect with you shortly.
        </p>

        <div className="thankyou__actions">
          <a
            href="https://calendly.com/thesatishjassal/falcoon-fitness-business-strategy-call"
            target="_blank"
          >
            Book Strategy Call
          </a>

          <a href="/" className="secondary">
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
