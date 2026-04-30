"use client";

export default function Team() {
  const team = [
    { name: "Satish", role: "Founder", img: "https://images.pexels.com/photos/29995629/pexels-photo-29995629.jpeg" },
    { name: "Aman", role: "Designer", img: "https://images.pexels.com/photos/29995629/pexels-photo-29995629.jpeg" },
    { name: "Riya", role: "Marketing", img: "https://images.pexels.com/photos/29995629/pexels-photo-29995629.jpeg" },
    { name: "Karan", role: "Developer", img: "https://images.pexels.com/photos/29995629/pexels-photo-29995629.jpeg" },
  ];

  return (
     <section className="falcoon-team">
      <div className="falcoon-container">
        <div className="falcoon-team__grid">
          {team.map((m, i) => (
            <div className="falcoon-team__card" key={i}>
              <div className="falcoon-team__img">
                <img src={m.img} alt={m.name} />
              </div>

              <h4>{m.name}</h4>
              <span>{m.role}</span>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do.
              </p>

              <div className="falcoon-team__social">
                <i className="ri-facebook-line"></i>
                <i className="ri-instagram-line"></i>
                <i className="ri-twitter-x-line"></i>
                <i className="ri-dribbble-line"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}