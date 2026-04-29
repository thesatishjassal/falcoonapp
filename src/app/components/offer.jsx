import Image from "next/image";

const cards = [
  {
    icon: "/assets/images/sales.png",
    regular: "Turn Followers Into",
    bold: "Paying Clients",
  },
  {
    icon: "/assets/images/packages.png",
    regular: "Sell Coaching ",
    bold: "Packages & Products",
    extraClass: "packages",
  },
  {
    icon: "/assets/images/appointments.png",
    regular: "Automate Bookings",
    bold: "& Payments",
  },
];

export default function Offer() {
  return (
    <section className="falcoon-offer">
      <div className="falcoon-offer__container falcoon-container">
        {/* Header */}
        <div className="falcoon-offer__header">
          <h2 className="falcoon-offer__title">
            Falcoon Helps You Launch Your Fitness Business
          </h2>
          <p className="falcoon-offer__desc">
            We builds conversion-focused systems for fitness professionals who want
            to grow their coaching business online.
          </p>
        </div>

        {/* Cards */}
        <div className="falcoon-offer__grid">
          {cards.map((card, i) => (
            <div key={i} className="falcoon-card">
              <div className="falcoon-card__icon">
                <img
                  src={card.icon}
                  alt={card.bold}
                  className={card.extraClass}
                />
              </div>
              {card.extraClass && <div className="spacer" />}
              <h3 className="falcoon-card__title text-center">
                <span className="regular_font">{card.regular}</span>{" "}
                <span className="bold_font">{card.bold}</span>
              </h3>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="falcoon-offer__bottom">
          <p>
            Built specifically for online <strong>fitness coaches and trainers.</strong>
          </p>
          <div className="falcoon-problem__avatars justify-center">
            <Image src="/assets/images/testmonials.png" alt="Testimonials" width={200} height={50} />
          </div>
        </div>
      </div>
    </section>
  );
}