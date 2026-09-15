"use client";

import "./testimonials.css";

export default function Testimonials() {
  const testimonials = [
    {
      name: "James Turner",
      role: "Gym Owner, Manchester",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "Falcoon helped me automate my gym operations completely. From memberships to payments, everything is smooth now. I saved hours every day.",
      result: "+40% time saved",
    },
    {
      name: "Dr. Emily Carter",
      role: "Consultant Psychologist, Clinical Psychology",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "My client bookings increased after using Falcoon. The system looks professional and clients trust it more than WhatsApp bookings.",
      result: "+60% bookings",
    },
    {
      name: "Daniel Wright",
      role: "Fitness Studio Owner, Leeds",
      image: "https://randomuser.me/api/portraits/men/76.jpg",
      text: "Before Falcoon, I was managing everything manually. Now I track clients, payments, and progress in one place.",
      result: "All-in-one system",
    },
    {
      name: "Charlotte Bennett",
      role: "Tarot Card Reader",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      text: "Very simple to use and clean UI. My clients love the booking experience. It feels like a premium service.",
      result: "Better client experience",
    },
  ];

  return (
    <section className="classic-testimonials" id="our_Work">
      <div className="classic-wrap">
        <h2 className="classic-testimonials-title">
          What our clients say 💬
        </h2>

        <div className="classic-testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="classic-testimonial-card">
              <div className="classic-testimonial-quote">"</div>

              <p className="classic-testimonial-text">{t.text}</p>

              <div className="classic-testimonial-user">
                <div className="classic-testimonial-avatar">
                  <img src={t.image} alt={t.name} />
                </div>
                <div>
                  <h4>{t.name}</h4>
                  <span>{t.role}</span>
                </div>
              </div>

              <div className="classic-testimonial-result">{t.result}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}