"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MagneticButtonProps {
  children: ReactNode;
}

export default function MagneticButton({
  children,
}: MagneticButtonProps) {
  return (
    <motion.button
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.95,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
      }}
      className="
        rounded-2xl
        bg-gradient-to-r
        from-blue-600
        to-cyan-500
        px-8
        py-4
        font-semibold
        shadow-[0_0_40px_rgba(59,130,246,0.35)]
      "
    >
      {children}
    </motion.button>
  );
}