"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef(null);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) return;
    const handleClick = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isOpen]);

  return (
    <header className="falcoon-header" ref={headerRef}>
      <div className="falcoon-header__container falcoon-container">
        {/* Logo */}
        <div className="falcoon-header__logo">
          <Link href="/" onClick={closeMenu}>
            <img src="/assets/images/falcoon_logo.png" alt="Falcoon Logo" />
          </Link>
        </div>

        {/* Desktop Nav + CTA */}
        <div className="falcoon-header__cta">
          <nav className="falcoon-header__nav">
            <Link href="/about" className="falcoon-header__link">
              About
            </Link>
            <Link href="/pricing" className="falcoon-header__link">
              Pricing
            </Link>
            <Link href="/help" className="falcoon-header__link">
              Support <span className="falcoon-header__icon">?</span>
            </Link>
            <Link href="/faq" className="falcoon-header__link">
              Faq
            </Link>
          </nav>
          <a
            href="https://calendly.com/thesatishjassal/falcoon-fitness-business-strategy-call"
            className="falcoon-header__btn"
          >
            Book Free Strategy Call
            <span className="falcoon-header__calendar">
              <Image
                src="/assets/images/calendar_month.svg"
                alt=""
                width={20}
                height={20}
              />
            </span>
          </a>
        </div>

        {/* Burger Toggle */}
        <button
          className={`falcoon-header__toggle ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          <span className="burger-bar" />
          <span className="burger-bar" />
          <span className="burger-bar" />
        </button>
      </div>

      <div className={`falcoon-mobile-drawer ${isOpen ? "open" : ""}`}>
        <nav className="falcoon-mobile-drawer__nav">
          <Link
            href="/about"
            className="falcoon-mobile-drawer__link"
            onClick={closeMenu}
          >
            About
            <span className="falcoon-mobile-drawer__arrow">›</span>
          </Link>
          <Link
            href="/pricing"
            className="falcoon-mobile-drawer__link"
            onClick={closeMenu}
          >
            Pricing
            <span className="falcoon-mobile-drawer__arrow">›</span>
          </Link>
          <Link
            href="/help"
            className="falcoon-mobile-drawer__link"
            onClick={closeMenu}
          >
            Support <span className="falcoon-header__icon">?</span>
            <span className="falcoon-mobile-drawer__arrow">›</span>
          </Link>
          {/* <Link
            href="/careers"
            className="falcoon-mobile-drawer__link"
            onClick={closeMenu}
          >
            Careers
            <span className="falcoon-mobile-drawer__arrow">›</span>
          </Link> */}
          <Link
            href="/faq"
            className="falcoon-mobile-drawer__link"
            onClick={closeMenu}
          >
            Faq
            <span className="falcoon-mobile-drawer__arrow">›</span>
          </Link>
        </nav>

        <div className="falcoon-mobile-drawer__cta">
          <a
            href="https://calendly.com/thesatishjassal/falcoon-fitness-business-strategy-call"
            className="falcoon-mobile-drawer__btn"
            onClick={closeMenu}
          >
            📅 Book Free Strategy Call
          </a>
        </div>
      </div>
    </header>
  );
}
