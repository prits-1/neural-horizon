"use client";

import { motion } from "framer-motion";
import GlowCard from "./GlowCard";
import SectionTitle from "./SectionTitle";

export default function TrendingSection() {
  return (
    <section className="px-6 pb-40">
      <div className="mx-auto max-w-7xl">

        <SectionTitle
          subtitle="TRENDING"
          title="Insights Shaping Tomorrow"
        />

        <div className="grid gap-8 lg:grid-cols-2">

          {/* Large Card */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <GlowCard className="h-full p-8">

              <div className="mb-8 h-[320px] rounded-[2rem] bg-gradient-to-br from-blue-600 via-cyan-500 to-violet-600" />

              <div className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-400">
                AI Tools
              </div>

              <h3 className="mb-6 text-4xl font-bold leading-tight">
                Top AI Tools Every Student Should Know
              </h3>

              <p className="leading-8 text-gray-400">
                Discover powerful tools that boost productivity,
                creativity, coding, and learning in the AI era.
              </p>

            </GlowCard>
          </motion.div>

          {/* Right Column */}
          <div className="flex flex-col gap-8">

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <GlowCard className="p-8">

                <div className="mb-6 h-48 rounded-[1.5rem] bg-gradient-to-br from-violet-600 to-pink-500" />

                <div className="mb-3 text-sm uppercase tracking-[0.3em] text-blue-400">
                  Future Tech
                </div>

                <h3 className="mb-5 text-3xl font-bold">
                  The Rise of AI Agents
                </h3>

                <p className="leading-8 text-gray-400">
                  Autonomous agents are transforming the future
                  of software and productivity.
                </p>

              </GlowCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              <GlowCard className="p-8">

                <div className="mb-6 h-48 rounded-[1.5rem] bg-gradient-to-br from-cyan-500 to-emerald-500" />

                <div className="mb-3 text-sm uppercase tracking-[0.3em] text-blue-400">
                  Careers
                </div>

                <h3 className="mb-5 text-3xl font-bold">
                  AI and the Future of Work
                </h3>

                <p className="leading-8 text-gray-400">
                  Explore how artificial intelligence will reshape
                  industries and jobs over the next decade.
                </p>

              </GlowCard>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}