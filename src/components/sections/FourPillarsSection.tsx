"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface PillarItem {
  id: string;
  number: string;
  title: string;
  description: string;
  imageSrc: string;
}

const PILLARS: PillarItem[] = [
  {
    id: "learning",
    number: "01",
    title: "LEARNING",
    description:
      "Structured learning paths, workshops, and curated resources to build deep capability in AI and data.",
    imageSrc: "/images/cards/pillar-card-01.png",
  },
  {
    id: "experimentation",
    number: "02",
    title: "EXPERIMENTATION",
    description:
      "Rapid experimentation culture — test ideas, technologies, and approaches in a safe and collaborative environment.",
    imageSrc: "/images/cards/pillar-card-02.png",
  },
  {
    id: "research",
    number: "03",
    title: "RESEARCH",
    description:
      "Conduct meaningful research, publish papers, and create new knowledge that advances the field of AI and data science.",
    imageSrc: "/images/cards/pillar-card-03.png",
  },
  {
    id: "build",
    number: "04",
    title: "BUILD",
    description:
      "Turn ideas and research into production-grade projects, open-source tools, and real-world solutions that create impact.",
    imageSrc: "/images/cards/pillar-card-04.png",
  },
];

interface PillarCardProps {
  item: PillarItem;
  delayIndex?: number;
}

const PillarCard: React.FC<PillarCardProps> = ({ item, delayIndex = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.7,
        delay: 0.1 + delayIndex * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{
        y: -6,
        scale: 1.02,
        transition: { duration: 0.25, ease: "easeOut" },
      }}
      className="group relative w-full max-w-[320px] sm:max-w-[330px] xl:max-w-[340px] cursor-pointer select-none"
    >
      {/* Dynamic Purple Glow Highlight on Hover */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[32px] bg-[#8A4BFF]/0 group-hover:bg-[#8A4BFF]/30 blur-2xl transition-all duration-500 -z-10"
        aria-hidden="true"
      />

      {/* Exact Pixel-Perfect Figma Exported Card Asset */}
      <div className="relative w-full aspect-[618/508]">
        <Image
          src={item.imageSrc}
          alt={`${item.number} ${item.title}: ${item.description}`}
          fill
          sizes="(max-width: 640px) 320px, (max-width: 1024px) 330px, 340px"
          priority
          className="object-contain filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.6)] group-hover:drop-shadow-[0_16px_35px_rgba(138,75,255,0.45)] transition-all duration-300"
        />
      </div>

      {/* Screen Reader Semantic Text for Accessibility & SEO */}
      <span className="sr-only">
        {item.number} {item.title}: {item.description}
      </span>
    </motion.div>
  );
};

const TitleBlock: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex flex-col items-center justify-center text-center select-none"
    >
      {/* Ambient Purple Radial Glow Behind Center Title */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[600px] lg:w-[700px] h-[340px] sm:h-[400px] rounded-full bg-[#703EFF]/30 blur-[110px] sm:blur-[135px] -z-10"
        aria-hidden="true"
      />

      {/* Pill Badge (Exact Figma spec) */}
      <div className="inline-flex items-center justify-center px-4 py-1 rounded-[32px] bg-[rgba(255,255,255,0.12)] backdrop-blur-md border border-white/15 mb-3.5 shadow-[0_2px_10px_rgba(0,0,0,0.2)]">
        <span className="font-sans text-white text-[12px] leading-[18px] font-normal tracking-wide">
          What We Do
        </span>
      </div>

      {/* Main Nasalization Title (Exact Figma spec) */}
      <h2 className="font-nasalization text-[34px] sm:text-[42px] lg:text-[46px] xl:text-[50px] font-normal leading-[1.15] text-white tracking-[-0.011em] text-center drop-shadow-[0_4px_25px_rgba(255,255,255,0.25)]">
        Four Pillars<br />
        of Innovation
      </h2>
    </motion.div>
  );
};

export const FourPillarsSection: React.FC = () => {
  return (
    <section
      id="what-we-do"
      className="relative w-full min-h-[850px] lg:min-h-[920px] bg-[#050507] text-white py-16 lg:py-24 overflow-hidden select-none flex items-center justify-center"
    >
      {/* Master Cosmic Background from Figma */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/four-pillars-bg.png"
          alt="Cosmic space background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center select-none"
        />
      </div>

      {/* Main Constellation Content */}
      <div className="relative z-20 w-full max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* Desktop 3-Column Constellation (>= 1024px) */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-6 xl:gap-8 items-center">
          {/* Left Column: Card 01 & Card 03 */}
          <div className="lg:col-span-4 flex flex-col gap-24 xl:gap-32 items-end">
            <PillarCard item={PILLARS[0]} delayIndex={0} />
            <PillarCard item={PILLARS[2]} delayIndex={2} />
          </div>

          {/* Center Column: Badge & Title */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center">
            <TitleBlock />
          </div>

          {/* Right Column: Card 02 & Card 04 */}
          <div className="lg:col-span-4 flex flex-col gap-24 xl:gap-32 items-start">
            <PillarCard item={PILLARS[1]} delayIndex={1} />
            <PillarCard item={PILLARS[3]} delayIndex={3} />
          </div>
        </div>

        {/* Mobile & Tablet Layout (< 1024px) */}
        <div className="flex flex-col lg:hidden items-center gap-12 sm:gap-14">
          <TitleBlock />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-[760px] justify-items-center">
            <PillarCard item={PILLARS[0]} delayIndex={0} />
            <PillarCard item={PILLARS[1]} delayIndex={1} />
            <PillarCard item={PILLARS[2]} delayIndex={2} />
            <PillarCard item={PILLARS[3]} delayIndex={3} />
          </div>
        </div>
      </div>
    </section>
  );
};
