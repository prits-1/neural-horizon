"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import GlowCard from "./GlowCard";
import MagneticButton from "./MagneticButton";
import FloatingOrb from "./FloatingOrb";

export default function FeaturedArticle() {
  return (
    <section className="relative px-6 pb-40">
      {/* Decorative Orb */}
      <div className="absolute left-0 top-20">
        <FloatingOrb
          size={350}
          color="bg-cyan-500/10"
        />
      </div>

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <GlowCard>
            <div className="grid lg:grid-cols-2">

              {/* Left Side */}
              <div className="flex flex-col justify-center p-10 lg:p-16">
                <div className="mb-6 text-sm uppercase tracking-[0.4em] text-blue-400">
                  Featured Story
                </div>

                <h2 className="mb-8 text-5xl font-bold leading-tight lg:text-6xl">
                  Will AI Replace Software Engineers?
                </h2>

                <p className="mb-10 text-lg leading-9 text-gray-400">
                  AI coding assistants are evolving rapidly.
                  But instead of replacing developers, they're
                  transforming the way software is built.
                  Explore the future of programming in the age
                  of intelligence.
                </p>

                <div className="flex items-center gap-5">
                  <MagneticButton>
                    Read Story
                  </MagneticButton>

                  <button className="flex items-center gap-2 text-gray-400 transition hover:text-white">
                    Learn More
                    <ArrowUpRight size={18} />
                  </button>
                </div>
              </div>

              {/* Right Side */}
              <div className="relative min-h-[550px] overflow-hidden">

                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-cyan-500 to-violet-600" />

                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                  }}
                  className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-[100px]"
                />

                {/* Floating Card */}
                <div className="absolute bottom-10 left-10 right-10 rounded-[2rem] border border-white/10 bg-black/20 p-8 backdrop-blur-2xl">

                  <div className="mb-3 text-sm text-blue-200">
                    Neural Horizon • AI Careers
                  </div>

                  <div className="mb-4 text-3xl font-bold">
                    Programming in the AI Era
                  </div>

                  <p className="text-gray-200">
                    Understanding how AI will reshape the role
                    of developers in the coming decade.
                  </p>

                </div>

              </div>

            </div>
          </GlowCard>
        </motion.div>
      </div>
    </section>
  );
}