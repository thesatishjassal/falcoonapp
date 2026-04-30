export default function Footer() {
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
              <a href="#">FB</a>
              <a href="#">IG</a>
              <a href="#">LN</a>
              <a href="#">YT</a>
            </div>
          </div>

          {/* PRODUCT */}
          <div className="falcoon-footer__col">
            <h4>Product</h4>
            <a href="#">Pricing</a>
            <a href="#">Features</a>
            <a href="#">Integrations</a>
            <a href="#">Case Studies</a>
          </div>

          {/* COMPANY */}
          <div className="falcoon-footer__col">
            <h4>Company</h4>
            <a href="#">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
          </div>

          {/* SUPPORT */}
          <div className="falcoon-footer__col">
            <h4>Support</h4>
            <a href="#">Help Center</a>
            <a href="#">FAQs</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
          </div>

          {/* CONTACT */}
          <div className="falcoon-footer__col">
            <h4>Contact</h4>
            <p>📍 Delhi, India</p>
            <p>📞 +91 98765 43210</p>
            <p>📧 hello@falcoon.com</p>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="falcoon-footer__bottom">
          <p>© 2026 Falcoon. All rights reserved.</p>

          <div className="falcoon-footer__legal">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
}