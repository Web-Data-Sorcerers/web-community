"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { DomainDetailModal } from "./DomainDetailModal";

interface DomainItem {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  glowColor: string;
}

const DOMAINS: DomainItem[] = [
  {
    id: "data-intelligence",
    title: "Data Intelligence",
    description:
      "Transform raw data into actionable insights through robust pipelines.",
    imageSrc: "/images/domains/data-intelligence.png",
    glowColor: "rgba(229, 30, 43, 0.35)",
  },
  {
    id: "core-ai-engineering",
    title: "Core AI & Engineering",
    description:
      "Develop foundational models and scalable engineering for robust AI.",
    imageSrc: "/images/domains/core-ai-engineering.png",
    glowColor: "rgba(124, 58, 237, 0.35)",
  },
  {
    id: "language-reasoning",
    title: "Language & Reasoning",
    description:
      "Enable systems to understand, generate, and reason with language.",
    imageSrc: "/images/domains/language-reasoning.png",
    glowColor: "rgba(2, 132, 199, 0.35)",
  },
  {
    id: "vision-multimodal",
    title: "Vision & Multimodal",
    description:
      "Empower machines to perceive and interpret multimodal visual data.",
    imageSrc: "/images/domains/vision-multimodal.png",
    glowColor: "rgba(13, 148, 136, 0.35)",
  },
  {
    id: "product-software",
    title: "Product & Software",
    description:
      "Turn ideas into impactful digital products through research, design, and development.",
    imageSrc: "/images/domains/product-software.png",
    glowColor: "rgba(217, 119, 6, 0.35)",
  },
  {
    id: "growth-community",
    title: "Growth & Community",
    description:
      "Grow together through creativity, meaningful connections, and community collaboration.",
    imageSrc: "/images/domains/growth-community.png",
    glowColor: "rgba(6, 182, 212, 0.35)",
  },
];

export const ChooseDomainSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [selectedDomainId, setSelectedDomainId] = useState<string | null>(null);

  const checkScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    el.scrollLeft = 0;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    // Exactly 1 card width (394px) + gap (41px) = 435px
    const scrollAmount = direction === "left" ? -435 : 435;
    scrollContainerRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="choose-domain"
      className="relative w-full bg-[#050507] text-white pt-12 pb-16 lg:pt-16 lg:pb-20 overflow-hidden select-none"
    >
      {/* Seamless continuation from Four Pillars: Pure #050507 background with subtle ambient flare */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[300px] bg-[#6C3BFF]/10 blur-[150px] -z-10"
        aria-hidden="true"
      />

      {/* Frame 2284: Header CTA (Exact Figma specs: 619x145px, flex col, gap 24px) */}
      <div className="flex flex-col items-center text-center gap-6 max-w-[619px] mx-auto px-4 select-none mb-6 lg:mb-8">
        {/* Capsule Badge (House of Data Sorcerers) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center justify-center px-4 py-1.5 rounded-[32px] bg-white/[0.08] backdrop-blur-md border border-white/15 shadow-[0_2px_10px_rgba(0,0,0,0.2)]"
        >
          <span className="font-sans text-white text-[12px] sm:text-[13px] leading-[18px] font-normal tracking-wide">
            House of Data Sorcerers
          </span>
        </motion.div>

        {/* Title: Choose Your Domain */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-nasalization text-[34px] sm:text-[44px] lg:text-[48px] font-normal leading-[1.12] text-white tracking-[-0.011em] text-center drop-shadow-[0_4px_25px_rgba(255,255,255,0.25)]"
        >
          Choose Your Domain
        </motion.h2>

        {/* Subtitle Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-sans text-[#9E9AA8] text-[14px] sm:text-[15px] leading-[1.6] max-w-[500px] text-center"
        >
          Every Sorcerer specializes. Find your domain and go deep with a
          community of experts.
        </motion.p>
      </div>

      {/* Navigation Controls (Desktop Navigation Buttons) */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 mb-2 hidden md:flex items-center justify-end gap-3">
        <button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          aria-label="Previous domain cards"
          className="w-10 h-10 rounded-full flex items-center justify-center border border-white/15 bg-white/[0.06] backdrop-blur-md text-white transition-all duration-200 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed hover:scale-105 active:scale-95"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          aria-label="Next domain cards"
          className="w-10 h-10 rounded-full flex items-center justify-center border border-white/15 bg-white/[0.06] backdrop-blur-md text-white transition-all duration-200 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed hover:scale-105 active:scale-95"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Horizontal Domain Cards Track (Node 2018-2607) - Generous vertical padding prevents hover clipping */}
      <div
        ref={scrollContainerRef}
        className="relative w-full overflow-x-auto scrollbar-none flex gap-8 sm:gap-10 lg:gap-[41px] pl-6 sm:pl-12 lg:pl-20 pr-6 sm:pr-12 lg:pr-20 scroll-smooth pt-10 pb-16 sm:pt-12 sm:pb-20"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {DOMAINS.map((domain, index) => (
          <motion.div
            key={domain.id}
            custom={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              },
            }}
            viewport={{ once: true, margin: "-40px" }}
            whileHover={{
              y: -4,
              transition: {
                duration: 0.35,
                ease: [0.25, 1, 0.5, 1],
              },
            }}
            transition={{
              duration: 0.35,
              ease: [0.25, 1, 0.5, 1],
            }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedDomainId(domain.id)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setSelectedDomainId(domain.id);
              }
            }}
            aria-label={`View details for ${domain.title}`}
            className="group relative flex-shrink-0 w-[280px] sm:w-[340px] md:w-[370px] lg:w-[394px] cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8A4BFF] will-change-transform"
          >
            {/* Exact Pixel-Perfect 2x Retina Card Container from Figma (786x870 @ 2x -> 393x435 @ 1x) */}
            <div className="relative w-full aspect-[786/870]">
              <Image
                src={domain.imageSrc}
                alt={`${domain.title}: ${domain.description}`}
                fill
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 370px, 394px"
                priority={index < 4}
                className="object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.5)]"
              />
            </div>

            {/* Semantic Screen Reader Accessibility */}
            <span className="sr-only">
              {domain.title} - {domain.description}. Click to explore domain details.
            </span>
          </motion.div>
        ))}
      </div>

      {/* Domain Detail Modal (Matching Figma Detail View) */}
      <DomainDetailModal
        domainId={selectedDomainId}
        onClose={() => setSelectedDomainId(null)}
      />
    </section>
  );
};
