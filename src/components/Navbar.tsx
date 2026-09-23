"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "About",    href: "#about"    },
  { label: "Projects", href: "#projects" },
  { label: "Contact",  href: "#contact"  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 50,
        transition: "background 0.4s ease, border-color 0.4s ease",
        background: scrolled ? "rgba(8,8,8,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(200,169,126,0.12)"
          : "1px solid transparent",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 1.5rem",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Wordmark */}
        <a
          href="/"
          style={{
            fontSize: "0.7rem",
            fontWeight: 500,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "var(--accent)",
          }}
        >
          Philip Esigbone
        </a>

        {/* Links */}
        <div style={{ display: "flex", gap: "2.5rem", alignItems: "center" }}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontSize: "0.68rem",
                fontWeight: 400,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--fg-mid)",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--fg)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--fg-mid)")
              }
            >
              {link.label}
            </a>
          ))}

          <a
            href="https://github.com/Oma05-01"
            target="_blank"
            rel="noreferrer"
            style={{
              fontSize: "0.65rem",
              fontWeight: 500,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--accent)",
              padding: "6px 14px",
              border: "1px solid var(--accent-line)",
              borderRadius: "2px",
              transition: "background 0.2s ease, border-color 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--accent-dim)";
              e.currentTarget.style.borderColor = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.borderColor = "var(--accent-line)";
            }}
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </motion.nav>
  );
}