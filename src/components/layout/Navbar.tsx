"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { List, X } from "@phosphor-icons/react";
import { NavItem } from "./NavItem";
import { Button } from "@/components/common/Button";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Recruitment", href: "#recruitment" },
  { label: "Hall of Frames", href: "#hall-of-frames" },
  { label: "Partners", href: "#partners" },
  { label: "Contact", href: "#contact" },
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center pointer-events-none navbar-gradient">
      <div className="w-full max-w-[1440px] pointer-events-auto px-6 sm:px-12 lg:px-20 py-5 lg:py-6 flex items-center justify-between">
        {/* Left: Brand Logo (Figma: width 54px, height 58.8px) */}
        <Link
          href="/"
          className="relative flex items-center group transition-transform duration-300 hover:scale-105"
        >
          <div className="relative w-[52px] h-[58px] drop-shadow-[0_0_15px_rgba(108,59,255,0.6)]">
            <Image
              src="/images/logo-community.png"
              alt="Community DS Logo"
              fill
              sizes="60px"
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Center: Desktop Navigation Menu (Figma: gap 18px) */}
        <div className="hidden lg:flex items-center gap-3 xl:gap-[20px]">
          {NAV_LINKS.map((item) => (
            <NavItem
              key={item.label}
              label={item.label}
              href={item.href}
              isActive={activeTab === item.label}
              onClick={() => setActiveTab(item.label)}
            />
          ))}
        </div>

        {/* Right: Desktop CTA Button (Figma: width 172px, height 43px) */}
        <div className="hidden lg:flex items-center">
          <Button
            variant="white-pill"
            className="min-w-[172px] h-[43px] px-6 text-[18px] font-semibold"
            onClick={() => alert("Join Community clicked!")}
          >
            Join Community
          </Button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex lg:hidden items-center gap-3">
          <Button
            variant="white-pill"
            size="sm"
            className="text-[14px] h-[36px] px-3.5"
            onClick={() => alert("Join Community clicked!")}
          >
            Join
          </Button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white/80 hover:text-white bg-white/5 border border-white/10 rounded-full transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <List size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="pointer-events-auto absolute top-20 inset-x-4 max-w-[420px] mx-auto bg-[#110B22]/95 backdrop-blur-2xl border border-[#6C3BFF]/30 rounded-2xl p-6 flex flex-col gap-4 shadow-2xl z-50 lg:hidden"
          >
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => {
                    setActiveTab(item.label);
                    setMobileMenuOpen(false);
                  }}
                  className={`px-4 py-3 rounded-xl font-medium transition-all ${
                    activeTab === item.label
                      ? "bg-[#6C3BFF]/20 text-white font-semibold border border-[#6C3BFF]/40"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="pt-2 border-t border-white/10">
              <Button
                variant="primary-gradient"
                fullWidth
                size="md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Join Community
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
