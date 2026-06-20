"use client";

import { motion } from "framer-motion";
import {
  Newspaper,
  Brain,
  Briefcase,
  Wrench,
} from "lucide-react";

import GlowCard from "./GlowCard";
import SectionTitle from "./SectionTitle";

export default function Categories() {
  return (
    <section className="px-6 pb-40">
      <div className="mx-auto max-w-7xl">

        <SectionTitle
          subtitle="EXPLORE"
          title="Categories"
        />

        <div className="grid gap-8 md:grid-cols-2">

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <GlowCard className="p-10">

              <Newspaper
                size={40}
                className="mb-8 text-blue-400"
              />

              <h3 className="mb-5 text-4xl font-bold">
                AI News
              </h3>

              <p className="leading-8 text-gray-400">
                Stay updated with breakthroughs,
                research, startups, and major
                developments in artificial intelligence.
              </p>

            </GlowCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <GlowCard className="p-10">

              <Wrench
                size={40}
                className="mb-8 text-cyan-400"
              />

              <h3 className="mb-5 text-4xl font-bold">
                AI Tools
              </h3>

              <p className="leading-8 text-gray-400">
                Explore powerful AI applications
                that improve productivity,
                coding, creativity, and learning.
              </p>

            </GlowCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            viewport={{ once: true }}
          >
            <GlowCard className="p-10">

              <Briefcase
                size={40}
                className="mb-8 text-violet-400"
              />

              <h3 className="mb-5 text-4xl font-bold">
                Careers
              </h3>

              <p className="leading-8 text-gray-400">
                Understand how AI will transform
                jobs, skills, and opportunities
                in the coming decade.
              </p>

            </GlowCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <GlowCard className="p-10">

              <Brain
                size={40}
                className="mb-8 text-pink-400"
              />

              <h3 className="mb-5 text-4xl font-bold">
                Future Tech
              </h3>

              <p className="leading-8 text-gray-400">
                Dive into robotics, agents,
                AGI, and the technologies
                shaping tomorrow.
              </p>

            </GlowCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
}