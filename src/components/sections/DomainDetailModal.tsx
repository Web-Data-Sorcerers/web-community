"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DomainDetail, DOMAIN_DETAILS } from "@/data/domainDetails";

interface DomainDetailModalProps {
  domainId: string | null;
  onClose: () => void;
}

export const DomainDetailModal: React.FC<DomainDetailModalProps> = ({
  domainId,
  onClose,
}) => {
  const detail: DomainDetail | undefined = domainId
    ? DOMAIN_DETAILS[domainId]
    : undefined;

  const [activeTag, setActiveTag] = useState<string>("");

  useEffect(() => {
    if (detail && detail.tags.length > 0) {
      setActiveTag(detail.tags[0]);
    }
  }, [detail]);

  // Lock body scroll and listen for Escape key
  useEffect(() => {
    if (!domainId) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [domainId, onClose]);

  if (!domainId || !detail) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="domain-modal-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        style={{
          backgroundColor: "#050507",
          backgroundImage:
            "linear-gradient(345.26deg, #6C3BFF -28.01%, #050507 23.9%)",
        }}
        className="fixed inset-0 z-[100] flex flex-col text-white overflow-y-auto"
      >

        {/* Modal Inner Container matching Figma: max-w 1440px, padding 80px, gap 58px */}
        <div className="relative w-full max-w-[1440px] mx-auto p-8 sm:p-14 lg:p-20 flex-1 flex flex-col gap-8 sm:gap-10 lg:gap-[58px]">
          {/* Back to HoDS Button */}
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="group inline-flex items-center gap-2.5 text-white/80 hover:text-white transition-colors duration-200 text-[14px] sm:text-[15px] font-medium w-fit cursor-pointer select-none"
            aria-label="Back to House of Data Sorcerers"
          >
            <svg
              className="w-4 h-4 text-white/70 group-hover:text-white group-hover:-translate-x-1 transition-all duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <span>Back to HoDS</span>
          </motion.button>

          {/* Main Nasalization Title */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="font-nasalization text-[32px] sm:text-[44px] lg:text-[54px] font-normal leading-[1.15] text-white tracking-[-0.011em] uppercase mb-4 drop-shadow-[0_4px_25px_rgba(255,255,255,0.25)]"
          >
            {detail.title}
          </motion.h1>

          {/* Subtitle / Domain Overview */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="font-sans text-[15px] sm:text-[17px] leading-[1.65] text-white/80 max-w-[850px] mb-8 sm:mb-12"
          >
            {detail.subtitle}
          </motion.p>

          {/* Sub-Domain Capability Pills (Tabs) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="flex flex-wrap gap-2.5 sm:gap-3.5 mb-10 sm:mb-14"
          >
            {detail.tags.map((tag) => {
              const isActive = activeTag === tag;
              return (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  className={`px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-[13px] sm:text-[14px] font-medium transition-all duration-200 cursor-pointer select-none ${
                    isActive
                      ? "bg-[#6C3BFF] text-white shadow-[0_4px_16px_rgba(108,59,255,0.45)] scale-105"
                      : "bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-white/80 hover:text-white"
                  }`}
                >
                  {tag}
                </button>
              );
            })}
          </motion.div>

          {/* Content Sections (LEARNING, Expected Skills, TOOLS, OUTPUT, etc.) */}
          <div className="flex flex-col space-y-8 sm:space-y-10 max-w-[960px]">
            {detail.sections.map((sec, idx) => (
              <motion.div
                key={sec.heading}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + idx * 0.08 }}
                className="flex flex-col"
              >
                {/* Section Heading */}
                <h2 className="font-sans text-[16px] sm:text-[18px] font-semibold text-white tracking-wider uppercase mb-3 sm:mb-4">
                  {sec.heading}
                </h2>

                {/* Section Content */}
                {sec.type === "bullets" && sec.bullets ? (
                  <ul className="space-y-2.5 sm:space-y-3">
                    {sec.bullets.map((b, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-[14px] sm:text-[15.5px] leading-[1.65] text-white/80"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8A4BFF] mt-2.5 flex-shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="font-sans text-[14px] sm:text-[15.5px] leading-[1.65] text-white/80">
                    {sec.content}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
