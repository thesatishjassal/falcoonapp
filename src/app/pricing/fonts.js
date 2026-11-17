// app/pricing/fonts.js
// Font loaders live in their own module, each called once at the top level
// and exported as a const. This is the pattern Next.js recommends and the
// one Turbopack handles most reliably.
import { DM_Sans, Fraunces } from "next/font/google";

export const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});