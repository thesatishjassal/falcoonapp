"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="falcoon-header">
      <div className="falcoon-header__container falcoon-container">
        {/* Logo */}
        <div className="falcoon-header__logo">
          <Link href="/">
            <img src="/assets/images/falcoon_logo.png" alt="Falcoon Logo" />
          </Link>
        </div>

        {/* CTA */}
        <div className="falcoon-header__cta">
          <nav className="falcoon-header__nav">
            <Link href="/pricing" className="falcoon-header__link">Pricing</Link>
            <Link href="/about" className="falcoon-header__link">About</Link>
            <Link href="/help" className="falcoon-header__link">
              Support <span className="falcoon-header__icon">?</span>
            </Link>
          </nav>
          <a
            href="https://calendly.com/thesatishjassal/falcoon-fitness-business-strategy-call"
            className="falcoon-header__btn"
          >
            Book Free Strategy Call
            <span className="falcoon-header__calendar">
              <Image src="/assets/images/calendar_month.svg" alt="" width={20} height={20} />
            </span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="falcoon-header__toggle">☰</div>
      </div>
    </header>
  );
}