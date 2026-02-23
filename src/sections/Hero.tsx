"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
          Philip Esigbone
        </h1>

        <p className="text-xl text-slate-400 mb-8">
          Backend Engineer building scalable digital systems with Python & Django.
        </p>

        <a
          href="#projects"
          className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:scale-105 transition"
        >
          View Projects
        </a>
      </motion.div>
    </section>
  );
}
