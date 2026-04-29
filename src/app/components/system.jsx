import Image from "next/image";

export default function System() {
  return (
    <section className="falcoon-header container-fluid">
      <div className="container falcoon-header__wrapper">
        {/* Top Text */}
        <div className="falcoon-header__content text-center">
          <h1 className="falcoon-header__title">Everything You Need To Grow</h1>
        </div>

        {/* System Image */}
        <div className="falcoon-header__image-wrapper">
          <img
            src="/assets/images/falcoon_system.svg"
            alt="Falcoon Funnel System"
            className="falcoon-header__image img-fluid"
          />
        </div>

        {/* Bottom CTA */}
        <div className="falcoon-services__cta">
          <p className="falcoon-services__cta-text">
            If you're managing clients through DMs, calls, and random links...
          </p>
          <h3 className="falcoon-services__cta-highlight">Falcoon is built for you.</h3>
          <a
            href="https://calendly.com/thesatishjassal/falcoon-fitness-business-strategy-call"
            className="falcoon-btn falcoon-btn--primary"
          >
            Book Free Strategy Call{" "}
            <Image src="/assets/images/calendar_month.svg" alt="" width={20} height={20} />
          </a>
        </div>
      </div>
    </section>
  );
}