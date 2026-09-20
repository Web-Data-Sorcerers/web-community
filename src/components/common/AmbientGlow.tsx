"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export const AmbientGlow: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate static seed particles on client to avoid hydration mismatch
    const pts: Particle[] = Array.from({ length: 28 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2.5 + 1,
      duration: Math.random() * 4 + 3,
      delay: Math.random() * 2,
    }));
    setParticles(pts);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
      {/* Floating Stardust Particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ opacity: 0.2, scale: 0.8 }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [0.8, 1.4, 0.8],
            y: ["0%", "-15%", "0%"],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
          }}
          className="absolute rounded-full bg-violet-300 shadow-[0_0_8px_#9B7BFF]"
        />
      ))}

      {/* Ambient Radial Nebula Glows */}
      <div className="absolute top-[20%] right-[15%] w-[500px] h-[500px] rounded-full bg-[#6C3BFF]/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[25%] right-[28%] w-[380px] h-[380px] rounded-full bg-[#9B7BFF]/20 blur-[90px] animate-crystal-glow pointer-events-none" />
    </div>
  );
};
