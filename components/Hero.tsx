"use client";

import { motion } from "framer-motion";
import FloatingOrb from "./FloatingOrb";
import MagneticButton from "./MagneticButton";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">

      {/* Floating Orbs */}
      <FloatingOrb
        size={500}
        color="bg-blue-500/10"
      />

      <div className="absolute right-0 top-1/4">
        <FloatingOrb
          size={400}
          color="bg-violet-500/10"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-10"
        >
          <div className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-6 py-3 text-sm text-blue-300 backdrop-blur-xl">
            ✦ Exploring the Future of Artificial Intelligence
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 1,
          }}
          className="mx-auto max-w-6xl text-6xl font-bold leading-[0.9] tracking-tight md:text-8xl xl:text-[9rem]"
        >
          <span className="bg-gradient-to-r from-white via-blue-200 to-cyan-300 bg-clip-text text-transparent">
            AI Explained.
          </span>

          <br />

          <span className="bg-gradient-to-r from-blue-400 to-violet-300 bg-clip-text text-transparent">
            Future Decoded.
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.5,
          }}
          className="mx-auto mt-12 max-w-3xl text-xl leading-10 text-gray-400"
        >
          Neural Horizon delivers cutting-edge insights,
          AI news, and deep analysis on how artificial
          intelligence is transforming technology,
          work, creativity, and society.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.8,
          }}
          className="mt-16 flex flex-col items-center justify-center gap-6 sm:flex-row"
        >
          <MagneticButton>
            Explore Articles
          </MagneticButton>

          <button className="rounded-2xl border border-white/10 bg-white/[0.05] px-8 py-4 text-lg text-gray-300 backdrop-blur-xl transition hover:bg-white/[0.08]">
            Latest Insights
          </button>
        </motion.div>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{
            delay: 1.1,
          }}
          className="mt-24 flex flex-wrap items-center justify-center gap-4 text-sm text-gray-500"
        >
          <span>AI News</span>
          <span>•</span>
          <span>Machine Learning</span>
          <span>•</span>
          <span>AI Tools</span>
          <span>•</span>
          <span>Future Tech</span>
        </motion.div>
      </div>
    </section>
  );
}