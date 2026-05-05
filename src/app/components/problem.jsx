export default function Problem() {
  const problems = [
    {
      icon: "💸",
      title: "Manual Payments",
      sub: "Chasing clients on WhatsApp",
    },
    {
      icon: "📅",
      title: "Messy Bookings",
      sub: "Endless back & forth",
    },
    {
      icon: "📂",
      title: "Scattered Data",
      sub: "Clients everywhere",
    },
    {
      icon: "😕",
      title: "Low Trust",
      sub: "Looks unprofessional",
    },
  ];

  return (
    <section className="falcoon-problem">
      <div className="falcoon-container">
        {/* 🔥 HEADER */}
        <div className="falcoon-problem__header">
          <h2 className="falcoon-problem__title">
            Why Most Fitness Coaches <br />
            <span className="accent">Struggle to Grow</span>
          </h2>
        </div>

        {/* 🔥 GRID */}
        <div className="falcoon-problem__grid">
          {problems.map((item, i) => (
            <div key={i} className="falcoon-problem__card">
              <div className="falcoon-problem__icon">{item.icon}</div>

              <h3>{item.title}</h3>
              <p>{item.sub}</p>
            </div>
          ))}
        </div>

        {/* 🔥 BOTTOM HOOK */}
        <div className="falcoon-problem__hook">
          <p>
            It’s not your skills. <br />
            <strong>It’s your system.</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
