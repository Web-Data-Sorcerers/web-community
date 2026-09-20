"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export const Footer: React.FC = () => {
  return (
    <footer className="relative w-full bg-[#0B0715] text-white select-none overflow-hidden">
      {/* Crisp, distinct Section Divider Line ("Pembatas Antara Section dan Footer") */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-white/[0.18] z-20" />
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#9D6BFF] to-transparent z-20 shadow-[0_0_12px_rgba(157,107,255,0.9)]" />

      {/* 1. Master High-Definition Background Art (Figma Node 765-17156: 2880x1112 @ 2x) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/footer-backdrop.png"
          alt="Footer Backdrop"
          fill
          priority
          sizes="100vw"
          className="object-cover object-bottom"
        />
        {/* Atmospheric Cosmic Sky Nebula: eliminates empty pitch-black void, enhances celestial stars */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 90% 60% at 50% 15%, rgba(108, 59, 255, 0.32) 0%, rgba(68, 25, 160, 0.18) 45%, transparent 80%)",
          }}
        />
      </div>

      {/* 2. Footer Content Container (1440px layout) */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 pt-16 sm:pt-20 lg:pt-[74px] pb-9 sm:pb-10 flex flex-col justify-between min-h-[520px] lg:h-[556px]">
        {/* Top Content Row: 3 Columns matching Figma 1-to-1 */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 md:gap-0">
          {/* Col 1: Brand Logo, Tagline, Mission, Social Icons (width ~555px) */}
          <div className="w-full md:w-[480px] lg:w-[555px] flex flex-col">
            {/* Logo: DATA SORCERERS */}
            <Link href="/" className="inline-block group w-fit">
              <div className="font-nasalization font-normal text-[26px] sm:text-[28px] leading-[1.05] tracking-[0.04em] text-white group-hover:text-purple-300 transition-colors uppercase">
                <div>DATA</div>
                <div>SORCERERS</div>
              </div>
            </Link>

            {/* Tagline */}
            <p className="font-sans text-[15px] sm:text-[16px] text-white/95 font-normal mt-4 sm:mt-5 tracking-wide">
              Sorcery In Data, Magic In AI
            </p>

            {/* Subtitle / Mission */}
            <p className="font-sans text-[14.5px] sm:text-[15.5px] leading-[1.65] text-[#D1D1D6] font-normal mt-5 sm:mt-6 max-w-[320px]">
              United by curiosity, driven by{" "}
              <br className="hidden sm:inline" />
              technology, enchanted by{" "}
              <br className="hidden sm:inline" />
              collaboration.
            </p>

            {/* Social Icons (exact Figma 52px circular bordered buttons) */}
            <div className="flex items-center gap-4.5 sm:gap-5 mt-7 sm:mt-8">
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-[50px] h-[50px] sm:w-[52px] sm:h-[52px] rounded-full border border-white/30 flex items-center justify-center text-white/90 hover:text-white hover:border-white/70 hover:bg-white/10 hover:scale-105 active:scale-95 transition-all duration-200"
              >
                <svg
                  className="w-[24px] h-[24px]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-[50px] h-[50px] sm:w-[52px] sm:h-[52px] rounded-full border border-white/30 flex items-center justify-center text-white/90 hover:text-white hover:border-white/70 hover:bg-white/10 hover:scale-105 active:scale-95 transition-all duration-200"
              >
                <svg
                  className="w-[24px] h-[24px]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <rect x="2" y="2" width="20" height="20" rx="4.5" ry="4.5" fill="white" />
                  <path
                    d="M7.5 10H5.5V17H7.5V10ZM6.5 7C5.8 7 5.3 7.5 5.3 8.2C5.3 8.9 5.8 9.4 6.5 9.4C7.2 9.4 7.7 8.9 7.7 8.2C7.7 7.5 7.2 7 6.5 7ZM18.5 13.8C18.5 11.3 17.2 10 15.2 10C13.8 10 13.1 10.8 12.7 11.4V10.2H10.7V17H12.7V13.3C12.7 12.3 12.9 11.4 14.1 11.4C15.3 11.4 15.3 12.5 15.3 13.4V17H17.3C17.3 17 18.5 17 18.5 13.8Z"
                    fill="#050507"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation (aligned at x=635px -> offset 555px from left) */}
          <div className="w-full md:w-[280px] lg:w-[369px] flex flex-col md:pt-2.5">
            <h3 className="font-sans font-semibold text-[17px] sm:text-[18px] text-white tracking-wide mb-5 sm:mb-6">
              Navigation
            </h3>
            <ul className="flex flex-col gap-3.5 sm:gap-4">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "#about" },
                { label: "Recruitment", href: "#recruitment" },
                { label: "Hall of Frames", href: "#hall-of-frames" },
                { label: "Partners", href: "#partners" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-sans font-normal text-[15px] sm:text-[15.5px] text-[#D1D1D6] hover:text-white hover:translate-x-0.5 inline-block transition-all duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact (aligned at x=1004.5px) */}
          <div className="w-full md:w-[320px] lg:w-[356px] flex flex-col md:pt-2.5">
            <h3 className="font-sans font-semibold text-[17px] sm:text-[18px] text-white tracking-wide mb-5 sm:mb-6">
              Contact
            </h3>
            <div className="flex flex-col gap-4 sm:gap-5">
              <div>
                <a
                  href="https://wa.me/6285727246733"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans font-normal text-[15px] sm:text-[15.5px] text-[#D1D1D6] hover:text-white transition-colors duration-200"
                >
                  Contact Person: +62 8572 -7246-733
                </a>
              </div>
              <div>
                <a
                  href="mailto:datasorcerers@gmail.com"
                  className="font-sans font-normal text-[15px] sm:text-[15.5px] text-[#D1D1D6] hover:text-white transition-colors duration-200"
                >
                  Email: datasorcerers@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Divider & Legal Row */}
        <div className="w-full mt-12 sm:mt-16 lg:mt-auto pt-2">
          {/* Subtle horizontal divider line matching Figma y=463px */}
          <div className="w-full h-[1px] bg-white/[0.12] mb-5 sm:mb-6" />

          {/* Bottom Grid/Row aligned with top columns */}
          <div className="flex flex-col md:flex-row items-start md:items-center text-[13.5px] sm:text-[14px]">
            {/* Left Copyright (aligned with Column 1: width 555px) */}
            <div className="w-full md:w-[480px] lg:w-[555px]">
              <p className="font-sans text-[#A1A1AA] font-normal">
                © DATA SORCERERS 2026 . All right reserved
              </p>
            </div>

            {/* Legal Links (aligned with Column 2 Navigation) */}
            <div className="flex items-center gap-7 sm:gap-8 font-sans text-[#D1D1D6] font-normal mt-3 md:mt-0">
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms
              </Link>
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="/cookies" className="hover:text-white transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
