"use client";

import SectionTitle from "./SectionTitle";
import MagneticButton from "./MagneticButton";
import FloatingOrb from "./FloatingOrb";

export default function Newsletter() {
  return (
    <section className="relative px-6 pb-40">

      <FloatingOrb
        size={350}
        color="bg-blue-500/10"
      />

      <div className="mx-auto max-w-5xl rounded-[3rem] border border-white/10 bg-white/[0.04] p-16 backdrop-blur-3xl">

        <SectionTitle
          subtitle="NEWSLETTER"
          title="Stay Ahead of AI"
        />

        <p className="mb-12 max-w-2xl text-lg leading-9 text-gray-400">
          Weekly insights, breakthroughs, and emerging trends delivered directly to your inbox.
        </p>

        <div className="flex flex-col gap-5 sm:flex-row">

          <input
            className="flex-1 rounded-2xl border border-white/10 bg-black/20 px-6 py-5 outline-none"
            placeholder="Enter your email"
          />

          <MagneticButton>
            Subscribe
          </MagneticButton>

        </div>

      </div>
    </section>
  );
}