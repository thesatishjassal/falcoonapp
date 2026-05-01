"use client"
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  if (pathname === "/pricing") return null;

  return (
    <footer className="falcoon-footer">
      <div className="falcoon-container">
        <div className="falcoon-footer__grid">
          {/* BRAND */}
          <div className="falcoon-footer__col">
            <img
              src="/assets/images/falcoon_logo.png"
              alt="Falcoon"
              className="falcoon-footer__logo"
            />

            <p className="falcoon-footer__desc">
              Falcoon helps businesses grow with modern digital solutions,
              automation, and high-converting systems.
            </p>

            <div className="falcoon-footer__social">
              <a href="#" target="_blank" rel="noopener noreferrer">
                FB
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                IG
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                LN
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                YT
              </a>
            </div>
          </div>

          {/* PRODUCT */}
          <div className="falcoon-footer__col">
            <h4>Product</h4>
            <a href="/pricing">Pricing</a>
            <a href="/integrations">Integrations</a>
            <a href="/case-studies">Case Studies</a>
          </div>

          {/* COMPANY */}
          <div className="falcoon-footer__col">
            <h4>Company</h4>
            <a href="/about">About Us</a>
            <a href="/careers">Careers</a>
            <a href="/blog">Blog</a>
          </div>

          {/* SUPPORT */}
          <div className="falcoon-footer__col">
            <h4>Support</h4>
            <a href="/help">Help Center</a>
            <a href="/faqs">FAQs</a>
            <a href="/terms">Terms & Conditions</a>
          </div>

          {/* CONTACT */}
          <div className="falcoon-footer__col">
            <h4>Contact</h4>
            <p>📍 Punjab, India</p>
            <p>📞 +91 7888467258</p>
            <p>📧 hello@falcoon.in</p>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="falcoon-footer__bottom">
          <p>© 2026 Falcoon. All rights reserved.</p>

          <div className="falcoon-footer__legal">
            <a href="#">Privacy</a>
            <a href="/terms">Terms</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
