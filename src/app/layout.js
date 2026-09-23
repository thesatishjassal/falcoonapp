import "./globals.css";
import Script from "next/script";
import Header from "./components/header";
import Footer from "./components/footer";
import SupportFloat from "./components/supportfloat";
import Link from "next/link";

// ─────────────────────────────────────────────
// UK SEO Metadata
// ─────────────────────────────────────────────
export const metadata = {
  metadataBase: new URL("https://falcoon.in"),

  title: {
    default:
      "Falcoon | Fitness Funnel & Website Agency for UK Fitness Professionals",
    template: "%s | Falcoon",
  },

  description:
    "Falcoon builds high-converting websites, funnels and automation systems for UK fitness professionals. Attract leads, book clients, take payments and sell fitness services online.",

  keywords: [
    "fitness funnel agency UK",
    "fitness website agency UK",
    "personal trainer website UK",
    "fitness coach website UK",
    "online coach website UK",
    "gym website design UK",
    "fitness business automation UK",
    "fitness funnel builder UK",
    "landing page for personal trainer UK",
    "online fitness business UK",
    "fitness marketing funnels UK",
    "fitness sales automation UK",
    "Falcoon",
  ],

  authors: [
    {
      name: "Falcoon",
      url: "https://falcoon.in",
    },
  ],

  creator: "Falcoon",
  publisher: "Falcoon",

  // Helps some search engines classify the site/business type
  category: "Business & Marketing Services",

  applicationName: "Falcoon",

  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },

  alternates: {
    canonical: "https://falcoon.in",
    // Explicit UK-locale signal — prevents ambiguity with other en-* markets
    languages: {
      "en-GB": "https://falcoon.in",
    },
  },

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

  verification: {
    google: "wmeKQp8rNpuVbdsm0s7OthyTLKw21J10-xRqGc4IV7s",
    // Add your Bing Webmaster Tools verification code here once generated
    // other: { "msvalidate.01": "YOUR_BING_CODE" },
  },

  // Icons — Next.js metadata API handles these more reliably than manual <link> tags
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",

  // ─────────────────────────────────────────────
  // Open Graph
  // ─────────────────────────────────────────────
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://falcoon.in",
    siteName: "Falcoon",

    title:
      "Falcoon | Fitness Funnel & Website Agency for UK Fitness Professionals",

    description:
      "High-converting websites, funnels and automation systems for UK fitness professionals.",

    images: [
      {
        url: "https://falcoon.in/assets/images/falcoon_og.png",
        width: 1200,
        height: 630,
        alt:
          "Falcoon - Fitness Funnel and Website Agency for UK Fitness Professionals",
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Twitter / X
  // ─────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",

    title:
      "Falcoon | Fitness Funnel Agency for UK Fitness Professionals",

    description:
      "Websites, funnels and automation systems built for UK fitness professionals.",

    images: [
      "https://falcoon.in/assets/images/falcoon_og.png",
    ],

    site: "@falcoon_in",
    creator: "@falcoon_in",
  },
};

// ─────────────────────────────────────────────
// Viewport / Theme (Next.js 14+ requires this as a
// separate export — themeColor no longer lives in metadata)
// ─────────────────────────────────────────────
export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

// ─────────────────────────────────────────────
// JSON-LD Structured Data
// ─────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",

  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://falcoon.in/#organization",

      name: "Falcoon",
      url: "https://falcoon.in",
      logo: "https://falcoon.in/assets/images/falcoon_logo.png",
      image: "https://falcoon.in/assets/images/falcoon_og.png",

      description:
        "Falcoon is a fitness funnel and website agency serving UK fitness professionals with high-converting websites, funnels and automation systems.",

      // TODO: fill these in — real contact/address data is a strong
      // trust + local-SEO signal for UK searches
      email: "hello@falcoon.in",
      telephone: "+44-XXXX-XXXXXX",
      address: {
        "@type": "PostalAddress",
        addressCountry: "GB",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Customer Service",
        email: "hello@falcoon.in",
        areaServed: "GB",
        availableLanguage: ["English"],
      },

      areaServed: {
        "@type": "Country",
        name: "United Kingdom",
      },

      knowsAbout: [
        "Fitness Websites",
        "Sales Funnels",
        "Landing Pages",
        "Fitness Business Automation",
        "Online Fitness Businesses",
        "Lead Generation",
        "Booking Systems",
        "Payment Systems",
      ],

      // TODO: add your real social profile URLs — empty sameAs wastes
      // an easy entity-verification signal for Google
      sameAs: [
        // "https://www.linkedin.com/company/falcoon",
        // "https://www.instagram.com/falcoon_in",
      ],
    },

    {
      "@type": "WebSite",
      "@id": "https://falcoon.in/#website",

      url: "https://falcoon.in",
      name: "Falcoon",
      publisher: {
        "@id": "https://falcoon.in/#organization",
      },
      inLanguage: "en-GB",
    },

    {
      "@type": "Service",
      "@id": "https://falcoon.in/#service",

      serviceType: "Fitness Website & Funnel Development",
      provider: {
        "@id": "https://falcoon.in/#organization",
      },
      areaServed: {
        "@type": "Country",
        name: "United Kingdom",
      },
      audience: {
        "@type": "Audience",
        audienceType: "Fitness Professionals",
      },
      description:
        "High-converting websites, sales funnels and automation systems built specifically for UK personal trainers, fitness coaches and gym owners.",
    },
  ],
};

// ─────────────────────────────────────────────
// Root Layout
// ─────────────────────────────────────────────
export default function RootLayout({ children }) {
  return (
    <html lang="en-GB">
      <head>
        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700;9..144,800&family=Karla:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />

        {/* Material Symbols */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
        />

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>

      <body>
        <Header />

        {children}

        <SupportFloat />

        <Footer />

        {/* ─────────────────────────────────────────
            Tawk.to Live Chat
        ───────────────────────────────────────── */}
        {/* <Script id="tawk-to" strategy="afterInteractive">
          {`
            var Tawk_API = Tawk_API || {};
            var Tawk_LoadStart = new Date();

            (function () {
              var s1 = document.createElement("script");
              var s0 = document.getElementsByTagName("script")[0];

              s1.async = true;
              s1.src = "https://embed.tawk.to/69f5eeb382a2b91c3a6307b8/1jnkaorrr";
              s1.charset = "UTF-8";
              s1.setAttribute("crossorigin", "*");

              s0.parentNode.insertBefore(s1, s0);
            })();
          `}
        </Script> */}

        {/* ─────────────────────────────────────────
            Floating Quotation CTA
        ───────────────────────────────────────── */}
        {/* <div className="left_cta_wrapper">
          <Link href="/pricing" className="left_cta_tab">
            <span className="left_cta_text">Get Free Quotation</span>
          </Link>
        </div> */}
      </body>
    </html>
  );
}