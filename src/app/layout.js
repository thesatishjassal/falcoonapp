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

  alternates: {
    canonical: "https://falcoon.in",
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
  },

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

    creator: "@falcoon_in",
  },
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

      sameAs: [],
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
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />

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

        {/* Favicon */}
        <link
          rel="icon"
          href="/favicon.ico"
          sizes="any"
        />

        <link
          rel="icon"
          href="/favicon.svg"
          type="image/svg+xml"
        />

        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
        />

        <link
          rel="manifest"
          href="/site.webmanifest"
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
        <Script
          id="tawk-to"
          strategy="afterInteractive"
        >
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
        </Script>

        {/* ─────────────────────────────────────────
            Floating Quotation CTA
        ───────────────────────────────────────── */}
        <div className="left_cta_wrapper">
          <Link
            href="/pricing"
            className="left_cta_tab"
          >
            <span className="left_cta_text">
              Get Free Quotation
            </span>
          </Link>
        </div>
      </body>
    </html>
  );
}