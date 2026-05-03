"use client";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  // if (pathname === "/pricing") return null;

  return (
    <footer className="falcoon-footer">
      <div className="falcoon-container">
        {/* MAIN ROW */}
        <div className="falcoon-footer__row">
          {/* LINKS */}
          <div className="falcoon-footer__links">
            <a href="/pricing">Pricing</a>
            <a href="/about">About</a>
            <a href="/help">Help</a>
            <a href="/faq">FAQs</a>
            <a href="/terms">Terms</a>
          </div>

          {/* CONTACT */}
          <div className="falcoon-footer__contact">
            <span className="falcoon-chip">
              <i className="fa-solid fa-location-dot"></i>
              Jalandhar
            </span>

            <a
              href="tel:+917888467258"
              className="falcoon-chip falcoon-chip--highlight"
            >
              <i className="fa-solid fa-phone"></i>
              +91 7888467258
            </a>

            <a
              href="mailto:thesatishjassal@gmail.com
"
              className="falcoon-chip falcoon-chip--highlight"
            >
              <i className="fa-solid fa-envelope"></i>
              thesatishjassal@gmail.com
            </a>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="falcoon-footer__bottom">
          <p>© 2026 Falcoon</p>

          <div className="falcoon-footer__legal">
            <a href="#">Privacy</a>
            <a href="/terms">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
