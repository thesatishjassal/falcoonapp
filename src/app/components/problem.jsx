import "./problem.css";

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
    <section className="classic-problem">
      <div className="classic-wrap">
        {/* HEADER */}
        <div className="classic-problem-header">
          <h2 className="classic-problem-title">
            Why Most Fitness Coaches <br />
            <span className="accent">Struggle to Grow</span>
          </h2>
        </div>

        {/* GRID */}
        <div className="classic-problem-grid">
          {problems.map((item, i) => (
            <div key={i} className="classic-problem-card">
              <div className="classic-problem-icon">{item.icon}</div>

              <h3>{item.title}</h3>
              <p>{item.sub}</p>
            </div>
          ))}
        </div>

        {/* BOTTOM HOOK */}
        <div className="classic-problem-hook">
          <p>
            It&apos;s not your skills. <br />
            <strong>It&apos;s your system.</strong>
          </p>
        </div>
      </div>
    </section>
  );
}