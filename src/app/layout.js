import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Header from "./components/header";
import Footer from "./components/footer";
import SupportFloat from "./components/supportfloat";
import Link from "next/link";

// ─────────────────────────────────────────────
// ✅ LEVEL SEO - Full Metadata (Next.js 14+)
// ─────────────────────────────────────────────
export const metadata = {
  // 🔷 Core
  metadataBase: new URL("https://falcoon.in"),
  title: {
    default:
      "Falcoon - Fitness Funnel Agency India | Websites & Automation for Coaches",
    template: "%s | Falcoon",
  },
  description:
    "We build high-converting funnels, landing pages & WhatsApp automation for fitness coaches in India. 50+ projects delivered. Book a free strategy call today.",
  keywords: [
    "fitness funnel agency India",
    "website for personal trainer India",
    "fitness coach automation India",
    "landing page for fitness coach",
    "WhatsApp automation for gym",
    "gym website design India",
    "online fitness coach website",
    "fitness business automation Jalandhar",
    "digital marketing for fitness coaches",
    "falcoon",
  ],
  authors: [{ name: "Falcoon", url: "https://falcoon.in" }],
  creator: "Falcoon",
  publisher: "Falcoon",

  // 🔷 Canonical
  alternates: {
    canonical: "https://falcoon.in",
  },

  // 🔷 Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // 🔷 Google Site Verification
  verification: {
    google: "wmeKQp8rNpuVbdsm0s7OthyTLKw21J10-xRqGc4IV7s",
  },

  // 🔷 Open Graph (Facebook, WhatsApp, LinkedIn previews)
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://falcoon.in",
    siteName: "Falcoon",
    title:
      "Falcoon - Fitness Funnel Agency India | Websites & Automation for Coaches",
    description:
      "We build high-converting funnels, landing pages & WhatsApp automation for fitness coaches in India. 50+ projects delivered. Book a free strategy call.",
    images: [
      {
        url: "https://falcoon.in/assets/images/falcoon_og.png", // ⚠️ Upload a 1200×630px OG image
        width: 1200,
        height: 630,
        alt: "Falcoon - Fitness Funnel Agency India",
      },
    ],
  },

  // 🔷 Twitter / X Card
  twitter: {
    card: "summary_large_image",
    title: "Falcoon - Fitness Funnel Agency India",
    description:
      "High-converting funnels, landing pages & WhatsApp automation for fitness coaches. 50+ projects. Book a free call.",
    images: ["https://falcoon.in/assets/images/falcoon_og.png"], // ⚠️ Same OG image
    creator: "@falcoon_in", // update if you have a Twitter handle
  },
};

// ─────────────────────────────────────────────
// ✅ JSON-LD Structured Data - LocalBusiness + WebSite
// ─────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://falcoon.in/#business",
      name: "Falcoon",
      url: "https://falcoon.in",
      logo: "https://falcoon.in/assets/images/falcoon_logo.png",
      image: "https://falcoon.in/assets/images/falcoon_og.png",
      description:
        "Falcoon is a fitness funnel agency based in Jalandhar, India. We build high-converting websites, funnels, and WhatsApp automation for fitness coaches.",
      telephone: "+91-7888467258",
      email: "thesatishjassal@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Jalandhar",
        addressRegion: "Punjab",
        addressCountry: "IN",
      },
      areaServed: "IN",
      priceRange: "₹₹",
      sameAs: [
        // Add your social URLs here:
        // "https://www.instagram.com/falcoon_in",
        // "https://www.facebook.com/falcoon.in",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://falcoon.in/#website",
      url: "https://falcoon.in",
      name: "Falcoon",
      publisher: { "@id": "https://falcoon.in/#business" },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://falcoon.in/?s={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

// ─────────────────────────────────────────────
// ✅ Root Layout
// ─────────────────────────────────────────────
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />

        {/* ✅ Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Google+Sans:ital,opsz,wght@0,17..18,400..700&family=Oswald:wght@200..700&family=Prompt:wght@100..900&display=swap"
          rel="stylesheet"
        />

        {/* ✅ Material Icons */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
        />

        {/* ✅ Favicon - add these files to /public */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* ✅ JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>

      <body>
        <Header />
        {children}
        <SupportFloat />
        <Footer />

        {/* ✅ Tawk.to Live Chat */}
        <Script id="tawk-to" strategy="afterInteractive">
          {`
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/69f5eeb382a2b91c3a6307b8/1jnkaorrr';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
          `}
        </Script>

        {/* ✅ Floating CTA */}
        <div className="left_cta_wrapper">
          <Link href="/pricing" className="left_cta_tab">
            <span className="left_cta_text">Get Free Quotation</span>
          </Link>
        </div>
      </body>
    </html>
  );
}
