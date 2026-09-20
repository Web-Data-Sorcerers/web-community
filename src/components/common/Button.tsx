"use client";

import React from "react";
import Image from "next/image";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { ButtonVariant } from "@/types";

export interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: ButtonVariant;
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  children?: React.ReactNode;
  label?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary-gradient",
      size = "md",
      fullWidth = false,
      className,
      children,
      label,
      disabled,
      ...props
    },
    ref
  ) => {
    // Exact Figma Exported Asset Button for "primary-gradient" (Join the Community)
    if (variant === "primary-gradient") {
      return (
        <motion.button
          ref={ref}
          whileHover={{ scale: disabled ? 1 : 1.03, filter: "brightness(1.12)" }}
          whileTap={{ scale: disabled ? 1 : 0.97 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className={cn(
            "relative inline-flex items-center justify-center select-none cursor-pointer rounded-full overflow-hidden transition-shadow duration-300 drop-shadow-[0_0_15px_rgba(108,59,255,0.4)] hover:drop-shadow-[0_0_25px_rgba(108,59,255,0.8)] focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 disabled:opacity-50 disabled:cursor-not-allowed",
            "w-[207px] h-[53px]",
            fullWidth && "w-full",
            className
          )}
          disabled={disabled}
          aria-label={label || (typeof children === "string" ? children : "Join the Community")}
          {...props}
        >
          <Image
            src="/images/buttons/join-the-community.png"
            alt={label || "Join the Community"}
            fill
            sizes="207px"
            className="object-contain pointer-events-none"
            priority
          />
        </motion.button>
      );
    }

    // Exact Figma Exported Asset Button for "glass-dark" (Explore Our Project)
    if (variant === "glass-dark") {
      return (
        <motion.button
          ref={ref}
          whileHover={{ scale: disabled ? 1 : 1.03, filter: "brightness(1.15)" }}
          whileTap={{ scale: disabled ? 1 : 0.97 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className={cn(
            "relative inline-flex items-center justify-center select-none cursor-pointer rounded-full overflow-hidden transition-shadow duration-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)] hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 disabled:opacity-50 disabled:cursor-not-allowed",
            "w-[198px] h-[51px]",
            fullWidth && "w-full",
            className
          )}
          disabled={disabled}
          aria-label={label || (typeof children === "string" ? children : "Explore Our Project")}
          {...props}
        >
          <Image
            src="/images/buttons/explore-our-project.png"
            alt={label || "Explore Our Project"}
            fill
            sizes="198px"
            className="object-contain pointer-events-none"
            priority
          />
        </motion.button>
      );
    }

    // Exact Figma Exported Asset Button for "see-how-it-works"
    if (variant === "see-how-it-works") {
      return (
        <motion.button
          ref={ref}
          whileHover={{ scale: disabled ? 1 : 1.03, filter: "brightness(1.15)" }}
          whileTap={{ scale: disabled ? 1 : 0.97 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className={cn(
            "relative inline-flex items-center justify-center select-none cursor-pointer rounded-full overflow-hidden transition-shadow duration-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)] hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 disabled:opacity-50 disabled:cursor-not-allowed",
            "w-[179px] h-[51px]",
            fullWidth && "w-full",
            className
          )}
          disabled={disabled}
          aria-label={label || (typeof children === "string" ? children : "See How It Works")}
          {...props}
        >
          <Image
            src="/images/buttons/see-how-it-works.png"
            alt={label || "See How It Works"}
            fill
            sizes="179px"
            className="object-contain pointer-events-none"
            priority
          />
        </motion.button>
      );
    }

    // White Pill Button (Join Community in Navbar)
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: disabled ? 1 : 1.03 }}
        whileTap={{ scale: disabled ? 1 : 0.97 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className={cn(
          "relative inline-flex items-center justify-center font-sans font-semibold rounded-full select-none cursor-pointer whitespace-nowrap btn-white-pill transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 disabled:opacity-50 disabled:cursor-not-allowed",
          size === "sm" && "h-[36px] px-4 text-[14px]",
          size === "md" && "w-[172px] h-[43px] text-[18px]",
          size === "lg" && "h-[51px] px-8 text-[18px]",
          fullWidth && "w-full",
          className
        )}
        disabled={disabled}
        aria-label={label || (typeof children === "string" ? children : "Button")}
        {...props}
      >
        <span className="relative z-10">{children}</span>
      </motion.button>
    );
  }
);

Button.displayName = "Button";
