"use client";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rohit Sharma",
      role: "Gym Owner, Ludhiana",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "Falcoon helped me automate my gym operations completely. From memberships to payments, everything is smooth now. I saved hours every day.",
      result: "+40% time saved",
    },
    {
      name: "Dr. Neha Mehta",
      role: "Consultant Psychologist, Clinical Psychologist",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "My client bookings increased after using Falcoon. The system looks professional and clients trust it more than WhatsApp bookings.",
      result: "+60% bookings",
    },
    {
      name: "Amanpreet Singh",
      role: "Fitness Studio Owner",
      image: "https://randomuser.me/api/portraits/men/76.jpg",
      text: "Before Falcoon, I was managing everything manually. Now I track clients, payments, and progress in one place.",
      result: "All-in-one system",
    },
    {
      name: "Pooja Bansal",
      role: "Tarot Card Reader",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      text: "Very simple to use and clean UI. My clients love the booking experience. It feels like a premium service.",
      result: "Better client experience",
    },
  ];

  return (
    <section className="falcoon-testimonials" id="our_Work">
      <div className="falcoon-container">
        <h2 className="falcoon-testimonials__title">
          What our clients say 💬
        </h2>

        <div className="falcoon-testimonials__grid">
          {testimonials.map((t, i) => (
            <div key={i} className="falcoon-testimonial__card">
              
              <p className="falcoon-testimonial__text">“{t.text}”</p>

              <div className="falcoon-testimonial__user">
                <img src={t.image} alt={t.name} />
                <div>
                  <h4>{t.name}</h4>
                  <span>{t.role}</span>
                </div>
              </div>

              <div className="falcoon-testimonial__result">
                {t.result}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}