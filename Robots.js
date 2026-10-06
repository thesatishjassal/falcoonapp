const BASE = "https://falcoon.in";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Keep private/utility routes out of search. Do NOT block /_next/,
        // Google needs your CSS and JS to render pages.
        disallow: ["/api/", "/thank-you"],
      },
    ],
    sitemap: `${BASE}/sitemap.xml`,
    host: BASE,
  };
}
