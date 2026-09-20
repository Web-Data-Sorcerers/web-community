import type { Metadata } from "next";
import { Manrope, Orbitron } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Web Community DS — Sorcery in Data, Magic in AI",
  description:
    "An AI & Data Innovation Community where people learn, experiment, research, and build meaningful technology together.",
  openGraph: {
    title: "Web Community DS — Sorcery in Data, Magic in AI",
    description:
      "An AI & Data Innovation Community where people learn, experiment, research, and build meaningful technology together.",
    images: [
      {
        url: "/images/hero-backdrop.png",
        width: 1653,
        height: 1036,
        alt: "Community DS Sorcery in Data Magic in AI",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${orbitron.variable} dark scroll-smooth`}
    >
      <body className="font-sans bg-[#0B0712] text-white min-h-screen antialiased selection:bg-[#6C3BFF] selection:text-white">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
