"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  subtitle: string;
  title: string;
}

export default function SectionTitle({
  subtitle,
  title,
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      <div className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-400">
        {subtitle}
      </div>

      <h2 className="text-5xl font-bold leading-tight md:text-6xl">
        {title}
      </h2>
    </motion.div>
  );
}