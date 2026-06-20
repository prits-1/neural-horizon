"use client";

import { motion } from "framer-motion";

interface FloatingOrbProps {
  size?: number;
  color?: string;
}

export default function FloatingOrb({
  size = 350,
  color = "rgba(59,130,246,0.25)",
}: FloatingOrbProps) {
  return (
    <motion.div
      animate={{
        y: [0, -40, 0],
        x: [0, 20, 0],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        background: color,
        filter: "blur(140px)",
      }}
    />
  );
}