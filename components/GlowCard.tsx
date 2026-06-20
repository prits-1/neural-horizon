"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
}

export default function GlowCard({
  children,
  className = "",
}: GlowCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.015,
      }}
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 20,
      }}
      className={`
        group relative overflow-hidden rounded-[2rem]
        border border-white/10
        bg-white/[0.04]
        backdrop-blur-2xl
        transition
        ${className}
      `}
    >
      {/* Top glow */}
      <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
        <div className="absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-blue-500/20 blur-[80px]" />
      </div>

      {/* Border glow */}
      <div className="absolute inset-0 rounded-[2rem] border border-transparent transition duration-500 group-hover:border-blue-500/30" />

      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}