"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface NavItemProps {
  label: string;
  href: string;
  isActive?: boolean;
  onClick?: () => void;
}

export const NavItem: React.FC<NavItemProps> = ({
  label,
  href,
  isActive = false,
  onClick,
}) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "relative flex flex-col items-center justify-center px-3 py-2 text-[17px] lg:text-[18px] font-medium font-sans transition-colors duration-200 select-none group",
        isActive ? "text-white" : "text-[#707070] hover:text-white"
      )}
    >
      <span className="relative z-10 transition-transform duration-200 group-hover:-translate-y-0.5">
        {label}
      </span>

      {/* Active Indicator Underline (Figma: width 49px) */}
      {isActive && (
        <motion.span
          layoutId="activeNavIndicator"
          className="absolute -bottom-1 w-[49px] h-[2px] bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
    </Link>
  );
};
