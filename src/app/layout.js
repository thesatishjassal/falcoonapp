import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import SupportFloat from "./components/supportfloat";

import "./styles/base.css";
import "./styles/components.css";
import "./styles/mock.css";
import "./styles/hero.css";
import "./styles/sections.css";
import "./styles/showcase.css";
import "./styles/integrations.css";

const URL_BASE = "https://falcoon.in";
const OG_IMAGE = `${URL_BASE}/assets/images/falcoon_og.png`;

// Title <= 60 chars, description <= 155 chars so Google doesn't truncate.
const TITLE = "Fitness Websites & Funnels for UK Personal Trainers | Falcoon";
const DESCRIPTION =
  "Done-for-you websites, funnels and booking for UK personal trainers and online coaches. Get clients booked and paid. Fixed price, no hidden fees.";

export const metadata = {
  metadataBase: new URL(URL_BASE),

  // `default` is for the homepage only; inner pages use the template.
  title: { default: TITLE, template: "%s | Falcoon" },
  description: DESCRIPTION,

  // Google ignores the keywords tag. Kept for Bing/other crawlers and as a
  // single source of truth. The real work is in page copy (see playbook).
  keywords: [
    // Solution-aware (core money terms)
    "personal trainer website UK",
    "website for personal trainers UK",
    "online coaching website UK",
    "fitness coach website design UK",
    "fitness website agency UK",
    "fitness funnel agency UK",
    "fitness landing page UK",
    "done for you fitness funnel",
    // Problem-aware (what they type when stuck)
    "how to get more personal training clients online UK",
    "get personal training clients without Instagram",
    "how to start an online coaching business UK",
    "how to sell online fitness programmes UK",
    "sell workout plans online UK",
    // Booking, payments, no-shows
    "booking system for personal trainers UK",
    "take payments online personal trainer UK",
    "get paid before session personal trainer",
    "reduce client no-shows personal trainer",
    "Direct Debit for personal trainers UK",
    "GoCardless for fitness coaches",
    "Stripe checkout fitness coach UK",
    // Commercial / price anxiety
    "personal trainer website cost UK",
    "fixed price fitness website UK",
    "fitness website no monthly fees",
    "affordable website for online coach UK",
    // Comparison / alternatives
    "best website builder for personal trainers UK",
    "Trainerize alternative UK",
    "Wix vs custom website personal trainer",
    "ClickFunnels alternative UK",
    // Adjacent audiences
    "nutrition coach website UK",
    "gym studio owner website UK",
    "counsellor website UK",
    "therapist booking website UK",
    "Falcoon",
  ],

  authors: [{ name: "Falcoon", url: URL_BASE }],
  creator: "Falcoon",
  publisher: "Falcoon",
  category: "Business & Marketing Services",
  applicationName: "Falcoon",
  formatDetection: { telephone: true, email: true, address: true },

  // NOTE: no root-level canonical. Child pages that don't set their own
  // would wrongly inherit "/" as canonical. Set alternates on app/page.js:
  //   alternates: { canonical: "/", languages: { "en-GB": "/" } }

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
    // other: { "msvalidate.01": "YOUR_BING_CODE" },
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",

  openGraph: {
    type: "website",
    locale: "en_GB",
    url: URL_BASE,
    siteName: "Falcoon",
    title: TITLE,
    description:
      "Websites, funnels and automation for UK personal trainers, coaches and counsellors. Fixed price, no hidden fees.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Falcoon: fitness websites and funnels for UK personal trainers and coaches",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description:
      "Websites, funnels and automation for UK personal trainers and coaches.",
    images: [OG_IMAGE],
    site: "@falcoon_in",
    creator: "@falcoon_in",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

// JSON-LD. Only include facts that are visible on the site (Google policy).
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": `${URL_BASE}/#organization`,
      name: "Falcoon",
      url: URL_BASE,
      logo: `${URL_BASE}/assets/images/falcoon_logo.png`,
      image: OG_IMAGE,
      description:
        "Falcoon builds websites, sales funnels, booking and payment systems for UK personal trainers, online coaches and counsellors.",
      email: "hello@falcoon.in",
      // Placeholder phone removed: an invalid number can cause rich-result errors.
      // Add `telephone` only when you have a real, monitored number.
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Sales",
        email: "hello@falcoon.in",
        areaServed: "GB",
        availableLanguage: ["English"],
      },
      areaServed: { "@type": "Country", name: "United Kingdom" },
      knowsAbout: [
        "Personal trainer websites",
        "Online coaching funnels",
        "Landing pages",
        "Booking systems",
        "Online payments and Direct Debit",
        "Fitness business automation",
        "Lead generation",
      ],
      // Add real profiles: each one strengthens entity recognition.
      sameAs: [
        // "https://www.linkedin.com/company/falcoon",
        // "https://www.instagram.com/falcoon_in",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${URL_BASE}/#website`,
      url: URL_BASE,
      name: "Falcoon",
      publisher: { "@id": `${URL_BASE}/#organization` },
      inLanguage: "en-GB",
    },
    {
      "@type": "Service",
      "@id": `${URL_BASE}/#service`,
      serviceType: "Fitness website and funnel development",
      provider: { "@id": `${URL_BASE}/#organization` },
      areaServed: { "@type": "Country", name: "United Kingdom" },
      audience: {
        "@type": "Audience",
        audienceType:
          "Personal trainers, online coaches, studio owners, counsellors",
      },
      description:
        "Done-for-you funnels for selling fitness programmes, products and consultations, with fixed pricing and no hidden fees.",
      // Matches the "£249 fixed funnel build" shown on /about. Keep in sync.
      offers: {
        "@type": "Offer",
        price: "249",
        priceCurrency: "GBP",
        description: "Fixed-price funnel build, no hidden fees",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Falcoon funnels",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Sell fitness programmes funnel",
              url: `${URL_BASE}/sell-fitness-programmes`,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Sell fitness products funnel",
              url: `${URL_BASE}/sell-fitness-products`,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Sell consultations funnel",
              url: `${URL_BASE}/sell-consultations`,
            },
          },
        ],
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
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
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
        />
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
      </body>
    </html>
  );
}
