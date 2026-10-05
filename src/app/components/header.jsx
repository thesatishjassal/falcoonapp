"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fraunces } from "next/font/google";
import "./header.css";

const CALENDLY = "https://calendly.com/thesatishjassal/free-strategy-call-uk";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const SERVICES = [
  {
    href: "/sell-consultations",
    title: "Sell Consultations",
    text: "Clients book and pay before they talk to you.",
  },
  {
    href: "/sell-fitness-products",
    title: "Sell Fitness Products",
    text: "Sell supplements, plans and digital products 24/7.",
  },
  {
    href: "/sell-fitness-programmes",
    title: "Sell Fitness Programmes",
    text: "A system that brings clients daily, not randomly.",
  },
];

const CalendarIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="3.5" y="5" width="17" height="15" rx="1" />
    <path d="M3.5 10h17M8 3v4M16 3v4" />
  </svg>
);

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);
  const triggerRef = useRef(null);
  const pathname = usePathname();

  const closeMenu = () => {
    setIsOpen(false);
    setServicesOpen(false);
  };

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);
  const servicesActive = SERVICES.some((s) => isActive(s.href));
  const linkProps = (href) => ({
    "aria-current": isActive(href) ? "page" : undefined,
  });

  /* outside click + Escape */
  useEffect(() => {
    if (!isOpen && !servicesOpen) return;

    const handleClick = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        closeMenu();
      }
    };
    const handleKey = (e) => {
      if (e.key === "Escape") {
        if (servicesOpen) triggerRef.current?.focus();
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [isOpen, servicesOpen]);

  /* lock page scroll while the mobile drawer is open */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  /* border + blur once the page scrolls; close drawer on desktop resize */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    const onResize = () => {
      if (window.innerWidth > 900) closeMenu();
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <header
      className={`hdr ${fraunces.variable} ${scrolled ? "hdr-scrolled" : ""}`}
      ref={headerRef}
    >
      <div className="hdr-c hdr-bar">
        {/* Logo */}
        <Link
          href="/"
          className="hdr-logo"
          onClick={closeMenu}
          aria-label="Falcoon home"
        >
          <svg
            viewBox="0 4 150 58"
            width="150"
            height="58"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <text
              x="6"
              y="46"
              fontFamily="var(--font-fraunces), Georgia, serif"
              fontStyle="italic"
              fontWeight="600"
              fontSize="56"
              fill="#d0b477"
            >
              f
            </text>
            <text
              x="30"
              y="41"
              fontFamily="var(--font-fraunces), Georgia, serif"
              fontWeight="600"
              fontSize="30"
              letterSpacing="0.2"
              fill="#ffffff"
            >
              alcoon
            </text>
          </svg>
        </Link>

        {/* Desktop nav + CTA */}
        <div className="hdr-desktop">
          <nav className="hdr-nav" aria-label="Main navigation">
            <Link href="/about" className="hdr-link" {...linkProps("/about")}>
              About
            </Link>

            <div className={`hdr-services ${servicesOpen ? "hdr-open" : ""}`}>
              <button
                type="button"
                ref={triggerRef}
                className="hdr-link hdr-trigger"
                data-active={servicesActive ? "true" : undefined}
                onClick={() => setServicesOpen((prev) => !prev)}
                aria-expanded={servicesOpen}
                aria-controls="hdr-services-menu"
              >
                Services
                <span className="hdr-caret" aria-hidden="true" />
              </button>

              <div className="hdr-menu" id="hdr-services-menu">
                <div className="hdr-menu-in">
                  {SERVICES.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="hdr-menu-item"
                      onClick={closeMenu}
                      {...linkProps(service.href)}
                    >
                      <strong>{service.title}</strong>
                      <span>{service.text}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/pricing"
              className="hdr-link"
              {...linkProps("/pricing")}
            >
              Pricing
            </Link>
            <Link href="/help" className="hdr-link" {...linkProps("/help")}>
              Support
            </Link>
            <Link href="/team" className="hdr-link" {...linkProps("/team")}>
              Team
            </Link>
          </nav>

          <a
            href={CALENDLY}
            className="hdr-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Free Website Audit
            <CalendarIcon />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className={`hdr-toggle ${isOpen ? "hdr-open" : ""}`}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
          aria-controls="hdr-drawer"
        >
          <span className="hdr-bar-line" />
          <span className="hdr-bar-line" />
          <span className="hdr-bar-line" />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`hdr-drawer ${isOpen ? "hdr-open" : ""}`}
        id="hdr-drawer"
        aria-hidden={!isOpen}
      >
        <nav className="hdr-drawer-nav" aria-label="Mobile navigation">
          <Link
            href="/about"
            className="hdr-drawer-link"
            onClick={closeMenu}
            {...linkProps("/about")}
          >
            About <span aria-hidden="true">→</span>
          </Link>

          <div className="hdr-drawer-group">
            <div className="hdr-drawer-label">Services</div>
            {SERVICES.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="hdr-drawer-link hdr-sub"
                onClick={closeMenu}
                {...linkProps(service.href)}
              >
                {service.title} <span aria-hidden="true">→</span>
              </Link>
            ))}
          </div>

          {[
            ["/pricing", "Pricing"],
            ["/help", "Support"],
            ["/team", "Team"],
            ["/faq", "FAQ"],
          ].map(([href, label]) => (
            <Link
              key={href}
              href={href}
              className="hdr-drawer-link"
              onClick={closeMenu}
              {...linkProps(href)}
            >
              {label} <span aria-hidden="true">→</span>
            </Link>
          ))}
        </nav>

        <a
          href={CALENDLY}
          className="hdr-btn hdr-btn-block"
          onClick={closeMenu}
          target="_blank"
          rel="noopener noreferrer"
        >
          Book Free Website Audit
          <CalendarIcon />
        </a>
      </div>
    </header>
  );
}
