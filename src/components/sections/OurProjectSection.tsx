"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArutalaBrowserMockup } from "@/components/ui/ArutalaBrowserMockup";
import { PROJECTS } from "@/data/projectsData";

export const OurProjectSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const totalProjects = PROJECTS.length;

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % totalProjects);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + totalProjects) % totalProjects);
  };

  // Indices for Left, Center, and Right cards in circular carousel
  const leftIndex = (activeIndex - 1 + totalProjects) % totalProjects;
  const rightIndex = (activeIndex + 1) % totalProjects;

  const currentProject = PROJECTS[activeIndex];
  const leftProject = PROJECTS[leftIndex];
  const rightProject = PROJECTS[rightIndex];

  return (
    <section
      id="our-project"
      className="relative w-full bg-[#050507] text-white pt-24 pb-20 sm:pt-32 sm:pb-28 lg:pt-36 lg:pb-36 overflow-hidden select-none"
    >
      {/* Ambient Lighting Flare (Zero-Banding GPU Blur) */}
      <div
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] lg:w-[1100px] h-[450px] bg-[#6C3BFF]/12 blur-[160px] -z-10"
        aria-hidden="true"
      />

      {/* Container matching Figma Layout */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header CTA: Pill Badge & Headline */}
        <div className="flex flex-col items-start mb-10 sm:mb-14 lg:mb-16">
          {/* Badge: "Our Project" */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center px-4 py-1.5 rounded-[32px] bg-white/[0.08] backdrop-blur-md border border-white/15 shadow-[0_2px_10px_rgba(0,0,0,0.2)] mb-4"
          >
            <span className="font-sans text-white text-[12px] sm:text-[13px] leading-[18px] font-normal tracking-wide">
              Our Project
            </span>
          </motion.div>

          {/* Headline: "WHAT OUR SORCERY CREATE" */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-nasalization text-[30px] sm:text-[42px] lg:text-[48px] font-normal leading-[1.15] text-white tracking-[-0.011em] drop-shadow-[0_4px_25px_rgba(255,255,255,0.25)] uppercase"
          >
            WHAT OUR SORCERY CREATE
          </motion.h2>
        </div>

        {/* 3D Coverflow Carousel Showcase */}
        <div className="relative w-full flex items-center justify-center min-h-[600px] sm:min-h-[680px] lg:min-h-[720px] [perspective:1400px]">
          {/* Navigation Prev Chevron (Left) */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous project"
            className="absolute left-2 sm:left-4 lg:left-8 z-30 w-11 h-11 rounded-full flex items-center justify-center border border-white/15 bg-black/50 backdrop-blur-md text-white/75 hover:text-white hover:bg-white/15 hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Navigation Next Chevron (Right) */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next project"
            className="absolute right-2 sm:right-4 lg:right-8 z-30 w-11 h-11 rounded-full flex items-center justify-center border border-white/15 bg-black/50 backdrop-blur-md text-white/75 hover:text-white hover:bg-white/15 hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* 1. Left Card (Angled inward towards center: rotateY 18deg) */}
          <div
            onClick={handlePrev}
            role="button"
            tabIndex={0}
            aria-label={`Switch to ${leftProject.title}`}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handlePrev();
              }
            }}
            className="hidden md:block absolute -left-12 lg:-left-4 xl:left-4 z-10 w-[380px] lg:w-[460px] xl:w-[500px] h-[640px] sm:h-[680px] rounded-[28px] sm:rounded-[32px] border border-white/15 hover:border-purple-400/50 bg-[#0B0918]/90 backdrop-blur-md shadow-2xl cursor-pointer transition-all duration-500 ease-out origin-right"
            style={{
              transform: "rotateY(18deg) scale(0.88)",
              transformStyle: "preserve-3d",
            }}
          >
            {/* Subtle inner dark gradient overlay */}
            <div className="absolute inset-0 rounded-[28px] sm:rounded-[32px] bg-gradient-to-br from-white/[0.04] to-transparent pointer-events-none" />
            <div className="p-8 flex flex-col justify-end h-full opacity-60 hover:opacity-95 transition-opacity">
              <span className="text-xs uppercase tracking-widest text-[#8A4BFF] font-semibold mb-2">
                {leftProject.category}
              </span>
              <h3 className="font-sans font-bold text-2xl text-white">
                {leftProject.title}
              </h3>
            </div>
          </div>

          {/* 2. Center Card (Active Front Showcase) */}
          <div className="relative z-20 w-full max-w-[340px] sm:max-w-[480px] lg:max-w-[580px] xl:max-w-[620px] rounded-[28px] sm:rounded-[32px] border border-white/20 bg-[#0F0D1F] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden transition-all duration-300">
            {/* Browser Mockup Area */}
            {activeIndex === 0 ? (
              // 100% Native Vector DOM Arutala Aksara Mockup
              <ArutalaBrowserMockup />
            ) : (
              // Alternative Project Mockup View
              <div className="w-full rounded-t-[24px] sm:rounded-t-[28px] overflow-hidden bg-white/5 border-b border-white/10 p-8 flex flex-col items-center justify-center min-h-[380px] relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#6C3BFF] to-[#00E5FF] flex items-center justify-center mb-4 shadow-lg">
                  <span className="text-2xl font-bold">✨</span>
                </div>
                <span className="text-sm font-semibold tracking-wide text-white/80">
                  {currentProject.url}
                </span>
                <span className="text-xs text-white/50 mt-1">
                  Interactive AI Engine Ready
                </span>
              </div>
            )}

            {/* Overlapping Floating Domain & Lomba Badges */}
            <div className="relative -mt-4 sm:-mt-5 px-6 sm:px-8 z-30 flex flex-wrap gap-2.5">
              {currentProject.badgeTags.map((tag) => (
                <div
                  key={tag}
                  className="inline-flex items-center px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-semibold text-white bg-gradient-to-r from-[#6C3BFF] to-[#8A4BFF] shadow-[0_4px_15px_rgba(108,59,255,0.45)] border border-white/25 backdrop-blur-md"
                >
                  {tag}
                </div>
              ))}
            </div>

            {/* Card Bottom Description Details */}
            <div className="p-6 sm:p-8 bg-[#0F0D1F] select-text">
              {/* Project Title */}
              <h3 className="font-sans font-bold text-2xl sm:text-3xl text-white tracking-tight mb-2">
                {currentProject.title}
              </h3>

              {/* Project Paragraph Description */}
              <p className="font-sans text-[#9E9AA8] text-[13px] sm:text-[14px] leading-relaxed">
                {currentProject.description}
              </p>
            </div>
          </div>

          {/* 3. Right Card (Angled inward towards center: rotateY -18deg) */}
          <div
            onClick={handleNext}
            role="button"
            tabIndex={0}
            aria-label={`Switch to ${rightProject.title}`}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleNext();
              }
            }}
            className="hidden md:block absolute -right-12 lg:-right-4 xl:right-4 z-10 w-[380px] lg:w-[460px] xl:w-[500px] h-[640px] sm:h-[680px] rounded-[28px] sm:rounded-[32px] border border-white/15 hover:border-purple-400/50 bg-[#0B0918]/90 backdrop-blur-md shadow-2xl cursor-pointer transition-all duration-500 ease-out origin-left"
            style={{
              transform: "rotateY(-18deg) scale(0.88)",
              transformStyle: "preserve-3d",
            }}
          >
            {/* Subtle inner dark gradient overlay */}
            <div className="absolute inset-0 rounded-[28px] sm:rounded-[32px] bg-gradient-to-br from-white/[0.04] to-transparent pointer-events-none" />
            <div className="p-8 flex flex-col justify-end h-full opacity-60 hover:opacity-95 transition-opacity">
              <span className="text-xs uppercase tracking-widest text-[#8A4BFF] font-semibold mb-2">
                {rightProject.category}
              </span>
              <h3 className="font-sans font-bold text-2xl text-white">
                {rightProject.title}
              </h3>
            </div>
          </div>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-8 sm:mt-12">
          {PROJECTS.map((p, idx) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setActiveIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === idx
                  ? "w-8 bg-[#8A4BFF]"
                  : "w-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
