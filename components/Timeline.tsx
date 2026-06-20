"use client";

import { motion } from "framer-motion";
import GlowCard from "./GlowCard";
import SectionTitle from "./SectionTitle";

const milestones = [
  {
    year: "1950",
    title: "The Beginning",
    desc: "Alan Turing proposes the Turing Test.",
  },
  {
    year: "1997",
    title: "Deep Blue",
    desc: "IBM defeats Garry Kasparov.",
  },
  {
    year: "2012",
    title: "Deep Learning Revolution",
    desc: "AlexNet sparks modern AI.",
  },
  {
    year: "2022",
    title: "Generative AI Era",
    desc: "ChatGPT changes everything.",
  },
  {
    year: "2030+",
    title: "The Next Horizon",
    desc: "Agents and robotics redefine society.",
  },
];

export default function Timeline() {
  return (
    <section className="px-6 pb-40">
      <div className="mx-auto max-w-7xl">

        <SectionTitle
          subtitle="TIMELINE"
          title="Evolution of AI"
        />

        <div className="space-y-8">

          {milestones.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GlowCard className="p-10">

                <div className="mb-4 text-blue-400">
                  {item.year}
                </div>

                <h3 className="mb-5 text-4xl font-bold">
                  {item.title}
                </h3>

                <p className="leading-8 text-gray-400">
                  {item.desc}
                </p>

              </GlowCard>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}