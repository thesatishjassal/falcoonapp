import Image from "next/image";

const niches = [
  { icon: "/assets/images/pt.png", title: "Personal Trainers", desc: "Gym & Home Coaches" },
  { icon: "/assets/images/yoga.png", title: "Yoga & Mindfulness", desc: "Yoga & Mindfulness Experts" },
  { icon: "/assets/images/diet.png", title: "Nutrition & Diet Experts", desc: "Nutrition & Dietitians" },
  { icon: "/assets/images/fit.png", title: "Fitness & Transformation", desc: "Online Fitness Coaches" },
  { icon: "/assets/images/online.png", title: "Online Fitness Creators", desc: "Influencers & Content Creators" },
  { icon: "/assets/images/gym.png", title: "Gym & Studio Owners", desc: "Gym & Fitness Studio" },
];

export default function Services() {
  return (
    <section className="falcoon-services">
      <div className="falcoon-services__container falcoon-container">
        <div className="falcoon-services__header">
          <h2 className="falcoon-services__title">
            No Matter Your Fitness Niche You Can Launch
          </h2>
          <p className="falcoon-services__desc">
            Falcoon supports every type of fitness professional.
          </p>
        </div>

        <div className="falcoon-services__grid">
          {niches.map((niche, i) => (
            <div key={i} className="falcoon-service-card">
              <img
                src={niche.icon}
                alt={niche.title}
                className="falcoon-service-card__icon"
              />
              <h3 className="falcoon-service-card__title">{niche.title}</h3>
              <p className="falcoon-service-card__desc">{niche.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}