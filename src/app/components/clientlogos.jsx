"use client";

import "./clients.css";

export default function ClientLogos() {
  const logos = [
    "https://thesatishjassal.vercel.app/_next/image?url=%2Fclients%2Fdigitalchaabi.png&w=3840&q=75",
    "https://drnehamehta.com/wp-content/uploads/2024/09/cropped-dr-neha-logo.webp",
    "https://thesatishjassal.vercel.app/_next/image?url=%2Fclients%2Fmyfitbrain.png&w=3840&q=75",
    "https://thesatishjassal.vercel.app/_next/image?url=%2Fclients%2Fnaturemania.png&w=3840&q=75",
    "https://thesatishjassal.vercel.app/_next/image?url=%2Fclients%2Fnd360.png&w=3840&q=75",
    "https://thesatishjassal.vercel.app/_next/image?url=%2Fclients%2Faoroa-tour-travels.png&w=3840&q=75",
    "https://thesatishjassal.vercel.app/_next/image?url=%2Fclients%2Fjaimaatoursandtravels.png&w=3840&q=75",
    "https://sethidjhouse.com/wp-content/uploads/2026/03/sethidjhouse.jpeg",
    "https://panvik.com/wp-content/uploads/2025/01/logo-removebg-preview.png",
    "https://www.sukhmanitaxiservices.in/assets/Images/logo-alt.png",
    "https://www.kheratourandtravel.in/Images/logo.png",
    "https://boxbud.co.uk/wp-content/uploads/2023/11/boxbud_png.png",
  ];

  return (
    <section className="classic-clients">
      <div className="classic-wrap">
        <h2 className="classic-clients-title">
          Trusted by <span>Professionals & Growing Brands</span>
        </h2>

        <div className="classic-clients-grid">
          {logos.map((logo, i) => (
            <div className="classic-clients-card" key={i}>
              <img src={logo} alt="client logo" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}