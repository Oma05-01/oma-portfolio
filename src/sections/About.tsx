"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="bg-slate-950 text-white py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-8">About</h2>

        <p className="text-slate-400 text-lg leading-relaxed">
          I transitioned from Mechanical Engineering into software development
          because I am deeply interested in systems — how they are structured,
          how they scale, and how small architectural decisions affect long-term
          performance. My focus is backend development using Python and Django,
          where I design clean, maintainable APIs and structured workflows.
        </p>

        <p className="text-slate-400 text-lg leading-relaxed mt-6">
          Beyond building applications, I am continuously exploring deeper
          concepts in systems design, performance, and backend architecture.
          I enjoy solving real-world problems and turning complexity into
          structured, scalable solutions.
        </p>
      </motion.div>
    </section>
  );
}
