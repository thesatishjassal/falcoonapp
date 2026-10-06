import Link from "next/link";
import { notFound } from "next/navigation";
import { dmSans, fraunces } from "../fonts";
import { POSTS, AUTHOR, getPost, formatDate } from "../../../../posts";
import "../blog.css";

const CALENDLY = "https://calendly.com/thesatishjassal/free-strategy-call-uk";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      locale: "en_GB",
      publishedTime: post.date,
      siteName: "Falcoon",
    },
  };
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const url = `https://falcoon.in/blog/${post.slug}`;
  const video = post.video; // optional: { id, title, description, uploadDate, duration }

  const article = {
    "@type": "Article",
    "@id": `${url}#article`,
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    inLanguage: "en-GB",
    author: { "@type": "Person", name: AUTHOR.name },
    publisher: { "@id": "https://falcoon.in/#organization" },
    mainEntityOfPage: url,
    ...(video &&
      video.schema !== false && { video: { "@id": `${url}#video` } }),
  };

  // VideoObject helps this page appear in Google video results.
  const videoLd = video &&
    video.schema !== false && {
      "@type": "VideoObject",
      "@id": `${url}#video`,
      name: video.title || post.title,
      description: video.description || post.excerpt,
      thumbnailUrl: [`https://i.ytimg.com/vi/${video.id}/maxresdefault.jpg`],
      uploadDate: video.uploadDate || post.date,
      embedUrl: `https://www.youtube.com/embed/${video.id}`,
      contentUrl: `https://www.youtube.com/watch?v=${video.id}`,
      inLanguage: "en-GB",
      ...(video.duration && { duration: video.duration }), // e.g. "PT6M30S"
    };

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [article, ...(videoLd ? [videoLd] : [])],
  };

  return (
    <main className={`bl-page ${dmSans.variable} ${fraunces.variable}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article>
        <header className="bl-top bl-art-head">
          <div className="bl-c">
            <Link href="/blog" className="bl-back">
              ← All guides
            </Link>
            <span className="bl-cat">{post.category}</span>
            <h1 className="bl-h1 bl-h1-sm">{post.title}</h1>
            <p className="bl-meta">
              {AUTHOR.name} · {formatDate(post.date)} · {post.readTime} min read
            </p>
          </div>
        </header>

        <div className="bl-sec">
          <div className="bl-c">
            <div className="bl-prose">
              {video && (
                <figure className="bl-video">
                  <div className="bl-video-frame">
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${video.id}?rel=0`}
                      title={video.title || post.title}
                      loading="lazy"
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                  <figcaption className="bl-video-bar">
                    <span>Watch the video, or read the full guide below.</span>
                    <a
                      href={`https://www.youtube.com/watch?v=${video.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Watch on YouTube ↗
                    </a>
                  </figcaption>
                </figure>
              )}
              <p className="bl-lead">{post.excerpt}</p>
              {post.sections.map((s) => (
                <section key={s.h}>
                  <h2>{s.h}</h2>
                  {s.p.map((para) => (
                    <p key={para}>{para}</p>
                  ))}
                </section>
              ))}
            </div>
          </div>
        </div>
      </article>

      <section className="bl-cta">
        <div className="bl-c">
          <h2>
            Ready to get clients <em>booked and paid?</em>
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
