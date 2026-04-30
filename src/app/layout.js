import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Header from "./components/header";
import Footer from "./components/footer";
import SupportFloat from "./components/supportfloat";
export const metadata = {
  title: "Falcoon",
  description: "Fitness funnel system",
  verification: {
    google: "wmeKQp8rNpuVbdsm0s7OthyTLKw21J10-xRqGc4IV7s",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
    >
      <body>
<Header />
        {/* ✅ Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        <link
          href="https://fonts.googleapis.com/css2?family=Google+Sans:ital,opsz,wght@0,17..18,400..700&family=Oswald:wght@200..700&family=Prompt:wght@100..900&display=swap"
          rel="stylesheet"
        />

        {/* ✅ Material Icons */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
        />

        {children}<button className="falcoon-support__main">
  💬
  <span className="live-dot"></span>
</button><SupportFloat /> 
        <Footer />
      </body>
    </html>
  );
}