import "./about.css";

export const metadata = {
  title: "About Falcoon",
  description:
    "We help fitness professionals across the UK sell and launch their products and programs online.",
};

const PURPOSE_ITEMS = [
  {
    index: "01",
    heading: "Mission",
    text: (
      <>
        To make it <strong>simple and easy</strong> for every fitness
        professional in the UK to sell and launch their products online.
      </>
    ),
    image: "https://images.pexels.com/photos/8381747/pexels-photo-8381747.jpeg",
    alt: "UK fitness coach",
  },
  {
    index: "02",
    heading: "Vision",
    text: "To become the UK's most trusted platform for fitness coaches to build successful online businesses nationwide.",
    image:
      "https://images.pexels.com/photos/18955785/pexels-photo-18955785.jpeg",
    alt: "Fitness professional in the UK",
  },
  {
    index: "03",
    heading: "Goal",
    text: (
      <>
        To empower <strong>1000+</strong> UK fitness professionals by 2027 to
        successfully launch and sell their products online.
      </>
    ),
    image:
      "https://thelucknowtribune.org/wp-content/uploads/2024/06/freepressjournal_2021-07_0104e300-6f3e-4d22-9c04-ce1def3d50c4_Untitled_design___2021_07_23T130312_896.webp",
    alt: "Group fitness training",
  },
];

const STORY_STATS = [
  { value: "1000+", label: "UK coaches by 2027" },
  { value: "£249", label: "Fixed funnel build" },
  { value: "3 pages", label: "Live in every build" },
];

export default function AboutUs() {
  return (
    <main className="classic-about">
      {/* ── Hero ─────────────────────────────── */}
      <section className="classic-hero">
        <div className="classic-wrap">
          <div className="classic-hero-inner">
            <div className="classic-eyebrow">★ Built for UK fitness brands</div>
            <h1 className="classic-hero-title">About Falcoon</h1>
            <p className="classic-hero-desc">
              We help fitness professionals across the UK sell and launch
              their products and programs online — with fixed pricing and no
              hidden fees.
            </p>
          </div>
        </div>
      </section>

      {/* ── Purpose ──────────────────────────── */}
      <section className="classic-purpose">
        <div className="classic-wrap">
          <div className="classic-block-head">
            <div className="classic-block-num">✓</div>
            <div>
              <div className="classic-block-index">What drives us</div>
              <h2 className="classic-block-title">Our purpose</h2>
              <p className="classic-block-sub">
                Three things we come back to every time we build something for a
                coach.
              </p>
            </div>
          </div>

          <div className="classic-purpose-grid">
            {PURPOSE_ITEMS.map((item) => (
              <article key={item.heading} className="classic-purpose-card">
                <div className="classic-purpose-media">
                  <img src={item.image} alt={item.alt} />
                </div>
                <div className="classic-purpose-body">
                  <span className="classic-purpose-num">{item.index}</span>
                  <h3 className="classic-purpose-heading">{item.heading}</h3>
                  <p className="classic-purpose-text">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Story ────────────────────────────── */}
      <section className="classic-story">
        <div className="classic-wrap">
          <div className="classic-story-card">
            <div className="classic-story-content">
              <div className="classic-block-index">Where it started</div>
              <h2 className="classic-story-title">Our story</h2>
              <p className="classic-story-text">
                We created Falcoon to help talented fitness professionals
                across the UK turn their expertise into successful online
                businesses. Great coaching gets lost behind bad funnels — so
                we build the funnel, and you keep coaching.
              </p>
            </div>
            <div className="classic-story-stats">
              {STORY_STATS.map((stat) => (
                <div key={stat.label} className="classic-stat">
                  <div className="classic-stat-value">{stat.value}</div>
                  <div className="classic-stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────── */}
      <section className="classic-cta">
        <div className="classic-wrap">
          <div className="classic-cta-card">
            <h2 className="classic-cta-title">
              Ready to grow your fitness business across the UK?
            </h2>
            <p className="classic-cta-desc">
              Let&apos;s help you launch and sell successfully.
            </p>
            <a
              href="https://calendly.com/thesatishjassal/free-strategy-call-uk"
              className="classic-btn"
            >
              Book Free Strategy Call
            </a>
            <div className="classic-cta-trust">
              🔒 Fixed pricing · No hidden fees · No obligation
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
