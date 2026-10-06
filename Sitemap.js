import { POSTS } from "./lib/posts";

const BASE = "https://falcoon.in";

// Update the date only when a page's content actually changes.
// Google uses lastmod only if it proves accurate, so avoid new Date() here.
const PAGES = [
  { path: "/", lastModified: "2026-10-07" },
  { path: "/about", lastModified: "2026-10-07" },
  { path: "/pricing", lastModified: "2026-10-07" },
  { path: "/sell-fitness-programmes", lastModified: "2026-10-07" },
  { path: "/sell-fitness-products", lastModified: "2026-10-07" },
  { path: "/sell-consultations", lastModified: "2026-10-07" },
  { path: "/team", lastModified: "2026-10-07" },
  { path: "/faq", lastModified: "2026-10-07" },
  { path: "/blog", lastModified: POSTS[0].date },
  { path: "/terms", lastModified: "2026-03-01" },
  { path: "/privacy", lastModified: "2026-03-01" },
];

export default function sitemap() {
  const pages = PAGES.map(({ path, lastModified }) => ({
    url: path === "/" ? BASE : `${BASE}${path}`,
    lastModified: new Date(lastModified),
  }));
  const posts = POSTS.map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: new Date(p.date),
  }));
  return [...pages, ...posts];
}
