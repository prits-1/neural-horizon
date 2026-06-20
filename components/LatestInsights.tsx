"use client";

import { motion } from "framer-motion";

const articles = [
  {
    title: "Top AI Tools Every Student Should Know",
    desc: "Boost productivity with the most powerful AI tools available today.",
  },
  {
    title: "The Rise of AI Agents",
    desc: "Autonomous agents are redefining software and productivity.",
  },
  {
    title: "AI and the Future of Work",
    desc: "How artificial intelligence will reshape industries and jobs.",
  },
];

export default function LatestInsights() {
  return (
    <section className="px-6 pb-28">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-5xl font-bold">Latest Insights</h2>

        <div className="grid gap-8 md:grid-cols-3">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-3 hover:border-blue-500/40"
            >
              <div className="mb-5 h-48 rounded-3xl bg-gradient-to-br from-blue-600/70 to-cyan-500/70" />

              <h3 className="mb-4 text-2xl font-bold transition group-hover:text-blue-300">
                {article.title}
              </h3>

              <p className="leading-8 text-gray-400">{article.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}