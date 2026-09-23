"use client";

import { motion } from "framer-motion";

const links = [
  { label: "Email",    href: "mailto:oesigbone@gmail.com",            display: "oesigbone@gmail.com" },
  { label: "GitHub",   href: "https://github.com/Oma05-01",      display: "github.com/Oma05-01" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/oma-esigbone-80b54a3a6", display: "https://www.linkedin.com/in/oma-esigbone-80b54a3a6" },
];

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        background: "var(--bg)",
        padding: "8rem 1.5rem",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
        >
          <p className="label" style={{ marginBottom: "1rem" }}>
            Contact
          </p>

          <h2
            className="section-heading"
            style={{ marginBottom: "1rem", maxWidth: "480px" }}
          >
            Let's build
            <br />
            <span style={{ color: "var(--fg-muted)" }}>something solid.</span>
          </h2>

          <span className="accent-rule" style={{ marginBottom: "3rem", display: "block" }} />

          <p
            style={{
              fontSize: "0.95rem",
              lineHeight: 1.8,
              color: "var(--fg-mid)",
              maxWidth: "420px",
              marginBottom: "3rem",
            }}
          >
            I'm currently available for backend roles — remote or Lagos-based.
            If you're working on something interesting, reach out.
          </p>

          {/* Contact links */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {links.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "1.2rem 0",
                  borderTop: i === 0 ? "1px solid var(--border)" : "none",
                  borderBottom: "1px solid var(--border)",
                  transition: "color 0.2s ease",
                  color: "var(--fg-mid)",
                  gap: "2rem",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--fg)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--fg-mid)";
                }}
              >
                <span
                  style={{
                    fontSize: "0.58rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                    fontWeight: 500,
                    flexShrink: 0,
                    width: "80px",
                  }}
                >
                  {link.label}
                </span>
                <span
                  style={{
                    fontSize: "0.9rem",
                    letterSpacing: "0.02em",
                    flex: 1,
                  }}
                >
                  {link.display}
                </span>
                <span style={{ color: "var(--accent)", fontSize: "1rem" }}>
                  ↗
                </span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}