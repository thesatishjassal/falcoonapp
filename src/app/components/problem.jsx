export default function Problem() {
  const problems = [
    {
      title: "You're chasing payments manually",
      sub: "Sending screenshots, following up on WhatsApp, hoping they paid",
    },
    {
      title: "Booking is a mess of back-and-forth",
      sub: '"Does 4pm work?" "What about Wednesday?" — for every single client',
    },
    {
      title: "Client info lives in 4 different places",
      sub: "Notes app, DMs, email, memory — and still things slip through",
    },
    {
      title: "You look DIY when you should look premium",
      sub: "First impressions cost you clients before you even speak to them",
    },
  ];

  const avatars = [
    { initials: "AK", bg: "#E6F1FB", color: "#185FA5" },
    { initials: "PR", bg: "#E1F5EE", color: "#0F6E56" },
    { initials: "SM", bg: "#FBEAF0", color: "#993556" },
    { initials: "RJ", bg: "#FAEEDA", color: "#854F0B" },
    { initials: "DL", bg: "#FAECE7", color: "#993C1D" },
  ];

  return (
    <section className="falcoon-problem">
      <div className="falcoon-problem__container falcoon-container">

        {/* Header */}
        <div className="falcoon-problem__header">
          <p className="falcoon-problem__eyebrow">
            <span className="falcoon-problem__eyebrow-dot" />
            Sound familiar?
          </p>
          <h2 className="falcoon-problem__title">
            You're a great coach.<br />
            Your <span className="falcoon-problem__title--accent">business setup</span> is letting you down.
          </h2>
          <p className="falcoon-problem__subtitle">
            Every day without a system, you're losing clients who judged your professionalism before the first call.
          </p>
        </div>

        {/* Content Grid */}
        <div className="falcoon-problem__content">

          {/* Left: Image */}
          <div className="falcoon-problem__image">
            <img src="/assets/images/stressed_girl.png" alt="Stressed coach" />
            <div className="falcoon-problem__badge">
              <span className="falcoon-problem__badge-dot" />
              <span className="falcoon-problem__badge-text">Coaches losing clients daily</span>
            </div>
          </div>

          {/* Right: Pain points */}
          <div className="falcoon-problem__info">

            <ul className="falcoon-problem__list">
              {problems.map((item, i) => (
                <li key={i} className="falcoon-problem__item">
                  <div className="falcoon-problem__item-icon">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 2L8 8M8 2L2 8" stroke="#E24B4A" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div className="falcoon-problem__item-body">
                    <span className="falcoon-problem__item-title">{item.title}</span>
                    <span className="falcoon-problem__item-sub">{item.sub}</span>
                  </div>
                </li>
              ))}
            </ul>

            {/* Verdict */}
            <div className="falcoon-problem__verdict">
              <p className="falcoon-problem__verdict-text">
                Every serious client you want is comparing you to coaches with{" "}
                <strong>clean, professional systems</strong>.
                Right now, yours tells a different story.
              </p>
            </div>

            {/* Social proof */}
            <div className="falcoon-problem__social">
              <div className="falcoon-problem__avatars">
                {avatars.map((a, i) => (
                  <div
                    key={i}
                    className="falcoon-problem__avatar"
                    style={{ background: a.bg, color: a.color }}
                  >
                    {a.initials}
                  </div>
                ))}
              </div>
              <p className="falcoon-problem__note">
                <strong>340+ coaches</strong> fixed this in the last 30 days
              </p>
            </div>

          </div>
        </div>

        {/* Bottom hook */}
        <div className="falcoon-problem__hook">
          <p className="falcoon-problem__hook-text">
            There's a reason some coaches scale to ₹1L/month and others stay stuck.{" "}
            <strong>It's not their workouts — it's their system.</strong>
          </p>
        </div>

      </div>
    </section>
  );
}