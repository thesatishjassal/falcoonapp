import { features } from "../../../lib/emailTemplates/data";

export default function Features() {
  return (
    <section className="fc-section fc-features">
      <div className="fc-container">
        <div className="fc-features__head fc-reveal">
          <p className="fc-label">04 — Sell consultations</p>
          <h2 className="fc-h2">
            Clients book and pay <em>before</em> they talk to you.
          </h2>
          <p>No negotiation, no delays. Here&apos;s what we build for you.</p>
        </div>

        <div className="fc-features__grid">
          {features.map((f, i) => (
            <article key={f.title} className="fc-feature fc-reveal">
              <span className="fc-feature__num">0{i + 1}</span>
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
