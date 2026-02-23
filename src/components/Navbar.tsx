"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-md border-b border-slate-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center text-white">
        <span className="font-semibold tracking-tight">
          Philip
        </span>

        <div className="flex gap-8 text-sm">
          <a href="#about" className="hover:text-slate-400 transition">
            About
          </a>
          <a href="#projects" className="hover:text-slate-400 transition">
            Projects
          </a>
          <a href="https://github.com/Oma05-01" target="_blank" className="hover:text-slate-400 transition">
            GitHub
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
