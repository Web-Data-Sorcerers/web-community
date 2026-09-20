"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/common/Button";

export const RecruitmentCtaSection: React.FC = () => {
  return (
    <section
      id="recruitment"
      className="scroll-mt-24 sm:scroll-mt-28 relative w-full bg-[#050507] text-white pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-8 lg:px-12 select-none overflow-hidden"
    >
      {/* Ambient background glow behind the card on the page */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[1000px] h-[450px] bg-[#6C3BFF]/15 blur-[160px] -z-10"
        aria-hidden="true"
      />

      {/* Main CTA Card (Figma Node 765-16753: 1280x408px @ 1x) */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative max-w-[1280px] min-h-[380px] lg:h-[408px] mx-auto rounded-[32px] border border-white/20 bg-[#0E0C20] overflow-hidden px-6 py-12 sm:px-12 sm:py-14 lg:py-0 flex flex-col items-center justify-center text-center shadow-[0_25px_70px_-15px_rgba(0,0,0,0.9)]"
      >
        {/* 1. Left Atmospheric Violet Pool (bottom edge, 20-25% from left) */}
        <div
          className="pointer-events-none absolute -bottom-20 left-8 sm:left-20 w-[450px] sm:w-[500px] h-[180px] sm:h-[200px] rounded-full blur-[35px] opacity-95 -z-0"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(120, 79, 246, 1) 0%, rgba(93, 51, 216, 0.75) 45%, transparent 75%)",
          }}
          aria-hidden="true"
        />

        {/* 2. Right Purple Atmospheric Glow */}
        <div
          className="pointer-events-none absolute -bottom-36 -right-10 w-[600px] sm:w-[720px] h-[240px] sm:h-[280px] rounded-full blur-[55px] opacity-75 -z-0"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(121, 67, 255, 0.85) 0%, rgba(90, 36, 235, 0.45) 50%, transparent 75%)",
          }}
          aria-hidden="true"
        />

        {/* 3. Right Intense Luminous Diagonal Lavender-White Flare */}
        <div
          className="pointer-events-none absolute -bottom-28 -right-6 w-[560px] sm:w-[680px] h-[190px] sm:h-[230px] -rotate-[15deg] blur-[22px] opacity-95 -z-0"
          style={{
            background:
              "radial-gradient(ellipse at 78% 85%, #FFFFFF 0%, #E8E0FF 20%, #B899FF 46%, #7943FF 70%, transparent 85%)",
          }}
          aria-hidden="true"
        />

        {/* 4. Very Bottom-Right Specular Rim Flare */}
        <div
          className="pointer-events-none absolute bottom-0 right-0 w-[420px] sm:w-[560px] h-[70px] blur-[12px] opacity-95 -z-0"
          style={{
            background:
              "radial-gradient(ellipse at bottom right, #FFFFFF 0%, #EFE8FF 30%, rgba(184, 153, 255, 0.65) 55%, transparent 80%)",
          }}
          aria-hidden="true"
        />

        {/* Card Content Container */}
        <div className="relative z-10 flex flex-col items-center max-w-[960px] mx-auto pt-2 sm:pt-4">
          {/* Top Capsule Badge: "Recruitment" */}
          <div className="inline-flex items-center justify-center px-3.5 py-1 rounded-[32px] bg-white/[0.08] backdrop-blur-md border border-white/15 shadow-[0_2px_10px_rgba(0,0,0,0.2)] mb-5 sm:mb-6">
            <span className="font-sans text-white text-[12px] sm:text-[12.5px] leading-[18px] font-normal tracking-wide">
              Recruitment
            </span>
          </div>

          {/* Headline: "READY TO BECOME A SORCERY?" */}
          <h2 className="font-nasalization text-[28px] sm:text-[36px] md:text-[42px] lg:text-[46px] font-normal leading-[1.12] text-white tracking-[0.015em] drop-shadow-[0_4px_25px_rgba(255,255,255,0.25)] uppercase mb-3.5 sm:mb-4 max-w-[920px]">
            READY TO BECOME A SORCERY?
          </h2>

          {/* Subtitle Paragraph */}
          <p className="font-sans text-[#D1D1D6] text-[14px] sm:text-[15px] leading-[1.55] max-w-[565px] mb-7 sm:mb-8 text-center font-normal">
            Join a community where your learning can become experimentation, your ideas{" "}
            <br className="hidden sm:inline" />
            can become projects, and your work can create real impact.
          </p>

          {/* Dual Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto">
            {/* Button 1: "Join the Community" (Exact Figma Asset) */}
            <Button
              variant="primary-gradient"
              onClick={() => {
                const el = document.getElementById("recruitment");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
            />

            {/* Button 2: "See How It Works" (Exact Figma Asset) */}
            <Button
              variant="see-how-it-works"
              onClick={() => {
                const el = document.getElementById("about");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

