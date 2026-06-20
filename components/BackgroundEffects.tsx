"use client";

import { motion } from "framer-motion";

export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">

      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[-10rem] top-[-10rem] h-[40rem] w-[40rem] rounded-full bg-blue-600/30 blur-[180px]"
      />

      <motion.div
        animate={{
          x: [0, -120, 0],
          y: [0, -60, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[-10rem] top-10 h-[45rem] w-[45rem] rounded-full bg-cyan-500/25 blur-[180px]"
      />

      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -80, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-10rem] left-1/3 h-[35rem] w-[35rem] rounded-full bg-violet-500/20 blur-[180px]"
      />
    </div>
  );
}