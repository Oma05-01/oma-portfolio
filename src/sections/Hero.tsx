"use client";

import { motion } from "framer-motion";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.4, 0, 0.2, 1] },
});

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100svh",
        background: "var(--bg)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 1.5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle radial glow behind heading */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "400px",
          background:
            "radial-gradient(ellipse at center, rgba(200,169,126,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "780px",
          width: "100%",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Eyebrow */}
        <motion.p {...fade(0.1)} className="label" style={{ marginBottom: "1.5rem" }}>
          Backend Engineer · Python & Django
        </motion.p>

        {/* Display heading */}
        <motion.h1 {...fade(0.25)} className="display" style={{ marginBottom: "1.5rem" }}>
          Philip
          <br />
          <span style={{ color: "var(--fg-muted)", fontWeight: 200 }}>
            Esigbone
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          {...fade(0.4)}
          style={{
            fontSize: "1rem",
            lineHeight: 1.75,
            color: "var(--fg-mid)",
            maxWidth: "480px",
            marginBottom: "2.5rem",
          }}
        >
          I build backend infrastructure that scales — APIs, data pipelines,
          and systems logic. Mechanical Engineering background; systems thinking
          by instinct.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fade(0.55)}
          style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
        >
          <a
            href="#projects"
            style={{
              fontSize: "0.68rem",
              fontWeight: 500,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              padding: "12px 28px",
              background: "var(--accent)",
              color: "#080808",
              borderRadius: "2px",
              border: "1px solid var(--accent)",
              transition: "opacity 0.2s ease",
              display: "inline-block",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            View Projects
          </a>

          <a
            href="#contact"
            style={{
              fontSize: "0.68rem",
              fontWeight: 400,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              padding: "12px 28px",
              background: "transparent",
              color: "var(--fg-mid)",
              borderRadius: "2px",
              border: "1px solid var(--border)",
              transition: "color 0.2s ease, border-color 0.2s ease",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--fg)";
              e.currentTarget.style.borderColor = "var(--border-hover)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--fg-mid)";
              e.currentTarget.style.borderColor = "var(--border)";
            }}
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}