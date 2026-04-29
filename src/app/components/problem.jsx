import Image from "next/image";

export default function Problem() {
  const problems = [
    "You send payment screenshots",
    "You manually book calls",
    "You collect client details on WhatsApp",
    "Everything is scattered",
  ];

  return (
    <section className="falcoon-problem">
      <div className="falcoon-problem__container falcoon-container">
        <div className="falcoon-problem__header">
          <h2 className="falcoon-problem__title">
            Most Fitness Coaches Struggle To Sell Online
          </h2>
        </div>

        <div className="falcoon-problem__content">
          {/* Left Image */}
          <div className="falcoon-problem__image">
            <img src="/assets/images/stressed_girl.png" alt="Problem Image" />
          </div>

          {/* Right Content */}
          <div className="falcoon-problem__info">
            <ul className="falcoon-problem__list">
              {problems.map((item, i) => (
                <li key={i} className="falcoon-problem__item">{item}</li>
              ))}
            </ul>

            <p className="falcoon-problem__note">
              This makes your coaching look <strong>unprofessional</strong> and{" "}
              <strong>confusing.</strong>
            </p>

            <div className="falcoon-problem__avatars">
              <Image src="/assets/images/testmonials.png" alt="Testimonials" width={200} height={50} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}