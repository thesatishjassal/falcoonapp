"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="falcoon-footer">
      <div className="falcoon-container">

        {/* TOP */}
        <div className="falcoon-footer__top">

          {/* BRAND */}
          <div className="falcoon-footer__brand">
            <Link
              href="/"
              className="falcoon-footer__logo"
              aria-label="Falcoon home"
            >
              Falcoon
            </Link>

            <p className="falcoon-footer__description">
              Websites, funnels and automation systems
              built for UK fitness professionals.
            </p>

            <span className="falcoon-footer__location">
              <i className="fa-solid fa-location-dot"></i>
              Serving fitness professionals across the UK
            </span>
          </div>

          {/* LINKS */}
          <div className="falcoon-footer__links-group">
            <span className="falcoon-footer__heading">
              Explore
            </span>

            <Link href="/pricing">Pricing</Link>
            <Link href="/about">About</Link>
            <Link href="/help">Support</Link>
            <Link href="/faq">FAQs</Link>
          </div>

          {/* BUSINESS */}
          <div className="falcoon-footer__links-group">
            <span className="falcoon-footer__heading">
              Business
            </span>

            <Link href="/terms">Terms</Link>
            <Link href="/privacy">Privacy</Link>
          </div>

          {/* CONTACT */}
          <div className="falcoon-footer__contact">
            <span className="falcoon-footer__heading">
              Get in touch
            </span>

            <a
              href="mailto:hello@falcoon.in"
              className="falcoon-footer__contact-link"
            >
              <span className="falcoon-footer__contact-icon">
                <i className="fa-solid fa-envelope"></i>
              </span>
              hello@falcoon.in
            </a>

            <a
              href="https://calendly.com/thesatishjassal/falcoon-fitness-business-strategy-call"
              target="_blank"
              rel="noopener noreferrer"
              className="falcoon-footer__cta"
            >
              Book Free Strategy Call
              <span>→</span>
            </a>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="falcoon-footer__divider" />

        {/* BOTTOM */}
        <div className="falcoon-footer__bottom">

          <p>
            © {new Date().getFullYear()} Falcoon. All rights reserved.
          </p>

          <p className="falcoon-footer__market">
            Built for UK fitness professionals
          </p>

          <div className="falcoon-footer__legal">
            <Link href="/privacy">
              Privacy
            </Link>

            <Link href="/terms">
              Terms
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
}