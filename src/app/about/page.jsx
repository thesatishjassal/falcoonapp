import Image from "next/image";
import Link from "next/link";

const PURPOSE_ITEMS = [
  {
    heading: "Mission",
    text: (
      <>
        To make it <strong>simple and easy</strong> for every fitness professional
        in India to sell and launch their products online.
      </>
    ),
    image: "https://images.pexels.com/photos/8381747/pexels-photo-8381747.jpeg",
    alt: "Indian fitness coach",
    reverse: false,
  },
  {
    heading: "Vision",
    text: "To become India's most trusted platform for fitness coaches to build successful online businesses nationwide.",
    image: "https://images.pexels.com/photos/18955785/pexels-photo-18955785.jpeg",
    alt: "Fitness professional in India",
    reverse: true,
  },
  {
    heading: "Goal",
    text: (
      <>
        To empower <strong>1000+</strong> fitness professionals across India by
        2027 to successfully launch and sell their products online.
      </>
    ),
    image:
      "https://thelucknowtribune.org/wp-content/uploads/2024/06/freepressjournal_2021-07_0104e300-6f3e-4d22-9c04-ce1def3d50c4_Untitled_design___2021_07_23T130312_896.webp",
    alt: "Group fitness training",
    reverse: false,
  },
];

export const metadata = {
  title: "About Falcoon",
  description:
    "We help fitness professionals across India sell and launch their products and programs online.",
};

export default function AboutUs() {
  return (
    <>
      <main className="about">
        {/* ── Hero ─────────────────────────────── */}
        <section className="about__hero">
          <div className="about_overlay"></div>
          <div className="about__hero-inner">
            <h1 className="about__hero-title">About Falcoon</h1>
            <p className="about__hero-desc">
              We help fitness professionals across India sell and launch their
              products and programs online.
            </p>
          </div>
        </section>

        {/* ── Purpose ──────────────────────────── */}
 <section className="about__purpose">
  <h2 className="about__purpose-title">Our Purpose</h2>

  <div className="purpose-grid">
    {PURPOSE_ITEMS.map((item) => (
      <div key={item.heading} className="purpose-card">
        <img src={item.image} alt={item.alt} />
        <h3>{item.heading}</h3>
        <p>{item.text}</p>
      </div>
    ))}
  </div>
</section>

        {/* ── Story ────────────────────────────── */}
        <section className="about__story">
          <div className="about__story-content">
            <h2 className="about__story-title">Our Story</h2>
            <p>
              We created Falcoon to help talented fitness professionals across
              India turn their expertise into successful online businesses.
            </p>
            <p>
              Our simple goal: Make it easy for them to{" "}
              <strong>launch and sell</strong> their products with confidence.
            </p>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────── */}
        <section className="about__cta">
          <h2 className="about__cta-title">
            Ready to grow your fitness business across India?
          </h2>
          <p className="about__cta-desc">
            Let&apos;s help you launch and sell successfully.
          </p>
          <a
            href="https://calendly.com/thesatishjassal/falcoon-fitness-business-strategy-call"
            className="about__btn"
          >
            Book Free Strategy Call
          </a>
        </section>
      </main>
    </>
  );
}
