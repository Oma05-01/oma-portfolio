"use client";

import { motion } from "framer-motion";

const skills = [
  { label: "Core",      items: "Python · Django · Django REST Framework · PostgreSQL" },
  { label: "Tooling",   items: "Celery · Docker · JWT · Channels" },
  { label: "Exposure",  items: "React · Next.js · FastAPI · Flutter · Node.js" },
];

export default function About() {
  return (
    <section
      id="about"
      style={{
        background: "var(--bg)",
        padding: "8rem 1.5rem",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* Two-column layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: "5rem",
            alignItems: "start",
          }}
        >
          {/* Left — heading + label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true }}
          >
            <p className="label" style={{ marginBottom: "1rem" }}>
              About
            </p>
            <h2 className="section-heading" style={{ marginBottom: "1.5rem" }}>
              Systems thinker,<br />
              <span style={{ color: "var(--fg-muted)" }}>backend builder.</span>
            </h2>
            <span className="accent-rule" />

            {/* Skills table */}
            <div style={{ marginTop: "2.5rem", display: "flex", flexDirection: "column", gap: "1.2rem" }}>
              {skills.map((s) => (
                <div key={s.label}>
                  <p
                    style={{
                      fontSize: "0.58rem",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "var(--accent)",
                      marginBottom: "0.3rem",
                      fontWeight: 500,
                    }}
                  >
                    {s.label}
                  </p>
                  <p
                    style={{
                      fontSize: "0.78rem",
                      color: "var(--fg-mid)",
                      lineHeight: 1.6,
                      letterSpacing: "0.02em",
                    }}
                  >
                    {s.items}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — body copy */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true }}
            style={{ paddingTop: "0.5rem" }}
          >
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.85,
                color: "var(--fg-mid)",
                marginBottom: "1.5rem",
              }}
            >
              I transitioned from Mechanical Engineering into software because
              I'm drawn to the same question in both fields: how do you design
              something that holds up under load? In backend development that
              means clean data models, well-scoped APIs, and architecture that
              doesn't need to be rewritten when requirements change.
            </p>

            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.85,
                color: "var(--fg-muted)",
              }}
            >
              My current focus is systems design — understanding the decisions
              that sit below the framework level and affect everything above it.
              I'm available for backend roles and open to remote or Lagos-based
              opportunities.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}