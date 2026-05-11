import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Header from "./components/header";
import Footer from "./components/footer";
import SupportFloat from "./components/supportfloat";
import Link from "next/link";
export const metadata = {
  title: "Falcoon",
  description: "Fitness funnel system",
  verification: {
    google: "wmeKQp8rNpuVbdsm0s7OthyTLKw21J10-xRqGc4IV7s",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Font Awesome (ONLY THIS) */}
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
          href="https://fonts.googleapis.com/css2?family=Google+Sans:ital,opsz,wght@0,17..18,400..700&family=Oswald:wght@200..700&family=Prompt:wght@100..900&display=swap"
          rel="stylesheet"
        />

        {/* Material Icons */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
        />
      </head>

      <body>
        <Header />
        {children}
        <SupportFloat />
        <Footer />
        {/* Tawk Script */}
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
        </Script><Script>  {`function initApollo(){var n=Math.random().toString(36).substring(7),o=document.createElement("script");
o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n,o.async=!0,o.defer=!0,
o.onload=function(){window.trackingFunctions.onLoad({appId:"6a0179f627ecf500194c1d1f"})},
document.head.appendChild(o)}initApollo();`}</Script>
        <div className="left_cta_wrapper">
          <Link href="/pricing" className="left_cta_tab">
            <span className="left_cta_text">Get Free Quotation</span>
          </Link>
        </div>
      </body>
    </html>
  );
}
