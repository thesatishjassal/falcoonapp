// app/fonts.js
// No next/font here on purpose. next/font/google downloads font files at
// build/dev time, and when that download fails Turbopack shows
// "Can't resolve '@vercel/turbopack-next/internal/font/google/font'".
// The page loads DM Sans and Fraunces in the browser instead (see the
// <link> in page.jsx), and the CSS falls back to "DM Sans"/"Fraunces" by name.
// Same export names as before, so any file importing these keeps working.
export const dmSans = { variable: "", className: "" };
export const fraunces = { variable: "", className: "" };

export const GOOGLE_FONTS_URL =
  "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Fraunces:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap";
