"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface PhilosophyItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

const PHILOSOPHY_ITEMS: PhilosophyItem[] = [
  {
    id: "learn",
    title: "LEARN",
    description: "Build Knowledge",
    icon: "/images/icons/philosophy-learn-v2.png",
  },
  {
    id: "ship",
    title: "SHIP",
    description: "Release",
    icon: "/images/icons/philosophy-ship-v2.png",
  },
  {
    id: "experiment",
    title: "EXPERIMENT",
    description: "Test Ideas",
    icon: "/images/icons/philosophy-experiment-v2.png",
  },
  {
    id: "impact",
    title: "IMPACT",
    description: "Change",
    icon: "/images/icons/philosophy-impact-v2.png",
  },
  {
    id: "research-build",
    title: "RESEARCH / BUILD",
    description: "Discover / Create",
    icon: "/images/icons/philosophy-research-build-v2.png",
  },
];

export const PhilosophySection: React.FC = () => {
  return (
    <section
      id="about-us"
      className="relative w-full min-h-[740px] lg:min-h-[837px] bg-[#050507] text-white py-16 lg:py-0 overflow-hidden select-none flex items-center"
    >
      {/* Pristine Master Backdrop (Figma Bit-Perfect: Cosmic Sorcerer Artwork + Exact Purple Ambient Glow) */}
      <div className="hidden lg:block absolute inset-0 z-0">
        <Image
          src="/images/philosophy-backdrop-master.png"
          alt="Our Philosophy Cosmic Sorcerer Artwork"
          fill
          priority
          sizes="100vw"
          className="object-cover object-left-center select-none pointer-events-none"
        />
      </div>

      {/* Mobile-only Background */}
      <div className="block lg:hidden absolute inset-0 z-0">
        <Image
          src="/images/philosophy-bg-master.png"
          alt="Philosophy Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center select-none pointer-events-none"
        />
      </div>

      {/* Content Container aligned with 1440px grid */}
      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Mobile-only Sorcerer Visual */}
          <div className="block lg:hidden w-full max-w-[380px] mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full aspect-[1530/1236]"
            >
              <Image
                src="/images/philosophy-sorcerer-tight.png"
                alt="AI Sorcerer holding cosmic power crystal"
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </motion.div>
          </div>

          {/* Left Column Spacer on Desktop (where the corner sorcerer sits) */}
          <div className="hidden lg:block lg:col-span-6 pointer-events-none" />

          {/* Right Column: Pill Badge, Nasalization Headline, and 5 Value Cards */}
          <div className="lg:col-span-6 flex flex-col gap-5 lg:gap-6">
            {/* CTA Badge (Exact Figma specs: 93x26px, rgba(255,255,255,0.15), Manrope 12px) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex"
            >
              <div className="inline-flex items-center justify-center px-[8px] py-[4px] rounded-[32px] bg-[rgba(255,255,255,0.15)] backdrop-blur-sm border border-white/10">
                <span className="font-sans text-white text-[12px] leading-[18px] font-normal tracking-wide">
                  Our Philosphy
                </span>
              </div>
            </motion.div>

            {/* Headline (Exact Figma specs: Nasalization 48px, line-height 57px, 270deg gradient) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col"
            >
              <h2 className="font-nasalization text-[30px] sm:text-[40px] lg:text-[48px] font-normal leading-[1.18] lg:leading-[57px] philosophy-headline-gradient">
                We Don&apos;t<br />
                Just Learn AI<br />
                We Build With It
              </h2>
            </motion.div>

            {/* 5 Core Values Grid (Exact Figma 2-Column layout) */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 pt-3 lg:pt-5"
            >
              {PHILOSOPHY_ITEMS.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.15 + index * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{ x: 4 }}
                  className="group flex items-center gap-4 cursor-default select-none"
                >
                  {/* Glowing 3D Holographic Icon (100% clean alpha, no square box) */}
                  <div className="relative w-12 h-12 lg:w-14 lg:h-14 flex-shrink-0 flex items-center justify-center">
                    <Image
                      src={item.icon}
                      alt={`${item.title} icon`}
                      width={56}
                      height={56}
                      className="object-contain filter drop-shadow-[0_0_12px_rgba(155,123,255,0.45)] transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_20px_rgba(155,123,255,0.85)]"
                    />
                  </div>

                  {/* Title & Description */}
                  <div className="flex flex-col">
                    <span className="font-sans text-white text-[15px] lg:text-[17px] font-bold tracking-wider group-hover:text-[#D4C5FF] transition-colors duration-200">
                      {item.title}
                    </span>
                    <span className="font-sans text-[#9E9AA8] text-xs lg:text-sm font-normal">
                      {item.description}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
