"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed left-0 top-0 z-50 w-full"
    >
      <div className="mx-auto mt-5 flex w-[95%] max-w-7xl items-center justify-between rounded-3xl border border-white/10 bg-white/[0.05] px-8 py-5 backdrop-blur-2xl">

        {/* Logo */}
        <Link href="/">
          <motion.h1
            whileHover={{ scale: 1.03 }}
            className="cursor-pointer bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-300 bg-clip-text text-2xl font-bold text-transparent"
          >
            Neural Horizon
          </motion.h1>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-10 text-gray-300 md:flex">

          <Link
            href="/"
            className="transition duration-300 hover:text-white"
          >
            Home
          </Link>

          <Link
            href="/articles"
            className="transition duration-300 hover:text-white"
          >
            Articles
          </Link>

          <Link
            href="/ai-tools"
            className="transition duration-300 hover:text-white"
          >
            AI Tools
          </Link>

          <Link
            href="/opinion"
            className="transition duration-300 hover:text-white"
          >
            Opinion
          </Link>

          <Link
            href="/about"
            className="transition duration-300 hover:text-white"
          >
            About
          </Link>

        </nav>

        {/* Subscribe Button */}
        <Link href="/articles">
          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="rounded-2xl border border-blue-500/30 bg-blue-500/10 px-5 py-3 text-sm font-medium text-blue-300 transition hover:bg-blue-500/20"
          >
            Subscribe
          </motion.button>
        </Link>

      </div>
    </motion.header>
  );
}