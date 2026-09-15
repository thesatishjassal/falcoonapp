"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "./header.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef(null);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleClick = (e) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [isOpen]);

  return (
    <header className="classic-header" ref={headerRef}>
      <div className="classic-header-container">

        {/* Logo */}
        <div className="classic-header-logo">
          <Link href="/" onClick={closeMenu} aria-label="Falcoon Home">
<svg width="220" height="60" viewBox="0 0 220 60" xmlns="http://www.w3.org/2000/svg">
  <text
    x="6" y="46"
    font-family="Fraunces, Georgia, 'Times New Roman', serif"
    font-style="italic"
    font-weight="600"
    font-size="56"
    fill="#241f1c"
  >f</text>
  <text
    x="30" y="41"
    font-family="Fraunces, Georgia, 'Times New Roman', serif"
    font-weight="600"
    font-size="30"
    letter-spacing="0.2"
    fill="#241f1c"
  >alcoon</text>
</svg>
          </Link>
        </div>

        {/* Desktop Navigation + CTA */}
        <div className="classic-header-cta">
          <nav className="classic-header-nav" aria-label="Main navigation">

            <Link
              href="/about"
              className="classic-header-link"
            >
              About
            </Link>

            <Link
              href="/pricing"
              className="classic-header-link"
            >
              Pricing
            </Link>

            <Link
              href="/help"
              className="classic-header-link"
            >
              Support{" "}
              <span className="classic-header-icon">?</span>
            </Link>

            <Link
              href="/faq"
              className="classic-header-link"
            >
              FAQ
            </Link>

          </nav>

          <a
            href="https://calendly.com/thesatishjassal/free-strategy-call-uk"
            className="classic-header-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Free Strategy Call

            <span className="classic-header-calendar">
              <Image
                src="/assets/images/calendar_month.svg"
                alt=""
                width={16}
                height={16}
              />
            </span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          className={`classic-header-toggle ${
            isOpen ? "open" : ""
          }`}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={
            isOpen ? "Close navigation" : "Open navigation"
          }
          aria-expanded={isOpen}
        >
          <span className="classic-burger-bar" />
          <span className="classic-burger-bar" />
          <span className="classic-burger-bar" />
        </button>

      </div>

      {/* Mobile Drawer */}
      <div
        className={`classic-mobile-drawer ${
          isOpen ? "open" : ""
        }`}
      >
        <nav className="classic-mobile-drawer-nav">

          <Link
            href="/about"
            className="classic-mobile-drawer-link"
            onClick={closeMenu}
          >
            <span>About</span>
            <span className="classic-mobile-drawer-arrow">
              ›
            </span>
          </Link>

          <Link
            href="/pricing"
            className="classic-mobile-drawer-link"
            onClick={closeMenu}
          >
            <span>Pricing</span>
            <span className="classic-mobile-drawer-arrow">
              ›
            </span>
          </Link>

          <Link
            href="/help"
            className="classic-mobile-drawer-link"
            onClick={closeMenu}
          >
            <span>
              Support{" "}
              <span className="classic-header-icon">?</span>
            </span>

            <span className="classic-mobile-drawer-arrow">
              ›
            </span>
          </Link>

          <Link
            href="/faq"
            className="classic-mobile-drawer-link"
            onClick={closeMenu}
          >
            <span>FAQ</span>

            <span className="classic-mobile-drawer-arrow">
              ›
            </span>
          </Link>

        </nav>

        <div className="classic-mobile-drawer-cta">
          <a
            href="https://calendly.com/thesatishjassal/free-strategy-call-uk"
            className="classic-mobile-drawer-btn"
            onClick={closeMenu}
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Free Strategy Call
          </a>
        </div>
      </div>
    </header>
  );
}