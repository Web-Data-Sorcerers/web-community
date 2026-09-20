"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/common/Button";
import { AmbientGlow } from "@/components/common/AmbientGlow";

export const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-start overflow-hidden bg-[#0B0712] pt-32 pb-16 lg:py-0"
    >
      {/* Pristine Ultra HD Background (Original Figma Artwork) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg-master.png"
          alt="Web Community DS Cosmic Sorcerer Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[75%_center] md:object-[68%_center] lg:object-center select-none pointer-events-none"
        />

        {/* Seamless bottom fade into Philosophy Section (#050507) */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#050507] via-[#050507]/60 to-transparent pointer-events-none z-10" />
      </div>

      {/* Floating Stardust & Ambient Glow Atmosphere */}
      <AmbientGlow />

      {/* Hero Content Container (Figma 1440px grid, 80px left padding) */}
      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20">
        <div className="max-w-[850px] flex flex-col gap-5 sm:gap-6 md:gap-7">
          {/* Main Headline with exact Nasalization typography and metallic gradient from Figma */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-1 sm:gap-2"
          >
            <h1 className="font-nasalization text-[28px] min-[390px]:text-[34px] min-[480px]:text-[42px] sm:text-[56px] md:text-[68px] lg:text-[76px] xl:text-[80px] font-normal leading-[1.12] sm:leading-[1.16] lg:leading-[98px] uppercase select-none whitespace-nowrap hero-headline-gradient">
              SORCERY IN DATA
            </h1>
            <h1 className="font-nasalization text-[28px] min-[390px]:text-[34px] min-[480px]:text-[42px] sm:text-[56px] md:text-[68px] lg:text-[76px] xl:text-[80px] font-normal leading-[1.12] sm:leading-[1.16] lg:leading-[98px] uppercase select-none whitespace-nowrap hero-headline-gradient">
              MAGIC IN AI
            </h1>
          </motion.div>

          {/* Subtitle Description from Figma (Exactly 2 lines at max-w-[466px]) */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-[15px] sm:text-[17px] md:text-[18px] text-[#D8D4E8] max-w-[466px] font-normal leading-[1.55] select-none"
          >
            An AI &amp; Data Innovation Community where people learn, experiment,
            research, and build meaningful technology together.
          </motion.p>

          {/* Dual CTAs using exact 3D Liquid Assets from Figma */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-row items-center gap-4 pt-2 md:pt-4"
          >
            {/* Join the Community (Exact Figma liquid purple button) */}
            <Button
              variant="primary-gradient"
              onClick={() => {
                const el = document.getElementById("recruitment");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
            />

            {/* Explore Our Project (Exact Figma liquid chrome button) */}
            <Button
              variant="glass-dark"
              onClick={() => {
                const el = document.getElementById("hall-of-frames");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
