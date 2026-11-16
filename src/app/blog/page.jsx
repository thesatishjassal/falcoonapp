import Link from "next/link";
import { dmSans, fraunces } from "./fonts";
import { POSTS, formatDate } from "../../../posts";
import "./blog.css";

const CALENDLY = "https://calendly.com/thesatishjassal/free-strategy-call-uk";
const DESCRIPTION =
  "Practical guides for UK personal trainers and online coaches: website costs, payments, getting clients and booking.";

export const metadata = {
  title: "Blog | Guides for UK Fitness Coaches",
  description: DESCRIPTION,
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog | Falcoon",
    description: DESCRIPTION,
    locale: "en_GB",
    type: "website",
    siteName: "Falcoon",
  },
};

export default function BlogPage() {
  const [feature, ...rest] = POSTS;

  return (
    <main className={`bl-page ${dmSans.variable} ${fraunces.variable}`}>
      <section className="bl-top">
        <div className="bl-c">
          <div className="bl-eyebrow">The Falcoon blog</div>
          <h1 className="bl-h1">
            Guides for coaches who&apos;d rather be <em>coaching.</em>
          </h1>
          <p>
            Straight answers on pricing, payments, booking and getting clients,
            written for UK fitness professionals.
          </p>
        </div>
      </section>

      <section className="bl-sec">
        <div className="bl-c">
          <Link href={`/blog/${feature.slug}`} className="bl-feature">
            <span className="bl-cat">{feature.category}</span>
            <h2>{feature.title}</h2>
            <p>{feature.excerpt}</p>
            <span className="bl-meta">
              {formatDate(feature.date)} · {feature.readTime} min read
            </span>
          </Link>

          <div className="bl-grid">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bl-card"
              >
                <span className="bl-cat">{post.category}</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <span className="bl-meta">
                  {formatDate(post.date)} · {post.readTime} min read
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bl-cta">
        <div className="bl-c">
          <h2>
            Want a funnel built <em>for you?</em>
          </h2>
          <p>Fixed pricing, no hidden fees, no obligation.</p>
          <a
            href={CALENDLY}
            className="bl-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Free Website Audit <span>→</span>
          </a>
        </div>
      </section>
    </main>
  );
}
