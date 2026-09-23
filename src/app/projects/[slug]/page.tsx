"use client";

import { useState } from "react";
import { useParams, notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.6, ease: [0.4, 0, 0.2, 1] as const },
});

const fadeInView = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay, duration: 0.6, ease: [0.4, 0, 0.2, 1] as const },
});

export default function ProjectPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const project = projects[slug];
  if (!project) return notFound();

  const hasContent = project.problem && project.architecture;

  // ── FALLBACK ──────────────────────────────────────────
  if (!hasContent) {
    return (
      <main
        style={{
          minHeight: "100vh",
          background: "var(--bg)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
          textAlign: "center",
        }}
      >
        <p className="label" style={{ marginBottom: "1rem" }}>Project</p>
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: 300,
            color: "var(--fg)",
            marginBottom: "1rem",
          }}
        >
          {project.title}
        </h1>
        <p
          style={{
            fontSize: "0.9rem",
            color: "var(--fg-muted)",
            maxWidth: "400px",
            lineHeight: 1.7,
            marginBottom: "2.5rem",
          }}
        >
          No detailed case study yet. View the source code directly.
        </p>
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          style={{
            fontSize: "0.68rem",
            fontWeight: 500,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            padding: "12px 28px",
            border: "1px solid var(--accent-line)",
            borderRadius: "2px",
            color: "var(--accent)",
            transition: "background 0.2s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = "var(--accent-dim)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = "transparent")
          }
        >
          View on GitHub ↗
        </a>
      </main>
    );
  }

  // ── FULL PAGE ─────────────────────────────────────────
  return (
    <main style={{ minHeight: "100vh", background: "var(--bg)" }}>

      {/* Back link */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "2rem 1.5rem 0",
        }}
      >
        <Link
          href="/#projects"
          style={{
            fontSize: "0.62rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--fg-muted)",
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            transition: "color 0.2s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.color = "var(--fg)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.color = "var(--fg-muted)")
          }
        >
          ← All Projects
        </Link>
      </div>

      {/* Hero */}
      <motion.header
        {...fade(0)}
        style={{
          borderBottom: "1px solid var(--border)",
          padding: "5rem 1.5rem 4rem",
          background: "var(--surface)",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <motion.p {...fade(0.1)} className="label" style={{ marginBottom: "1rem" }}>
            Case Study
          </motion.p>

          <motion.h1
            {...fade(0.2)}
            className="section-heading"
            style={{ maxWidth: "640px", marginBottom: "1.2rem" }}
          >
            {project.title}
          </motion.h1>

          {project.summary && (
            <motion.p
              {...fade(0.3)}
              style={{
                fontSize: "1rem",
                lineHeight: 1.8,
                color: "var(--fg-mid)",
                maxWidth: "560px",
                marginBottom: "2.5rem",
              }}
            >
              {project.summary}
            </motion.p>
          )}

          {/* Stack */}
          <motion.div
            {...fade(0.35)}
            style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "2.5rem" }}
          >
            {(project.stack || []).map((tech: string) => (
              <span
                key={tech}
                style={{
                  fontSize: "0.6rem",
                  letterSpacing: "0.1em",
                  color: "var(--fg-muted)",
                  padding: "4px 10px",
                  border: "1px solid var(--border)",
                  borderRadius: "2px",
                  textTransform: "uppercase",
                }}
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* Action links */}
          <motion.div
            {...fade(0.4)}
            style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
          >
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                style={{
                  fontSize: "0.65rem",
                  fontWeight: 500,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  padding: "10px 22px",
                  background: "var(--accent)",
                  color: "#080808",
                  borderRadius: "2px",
                  border: "1px solid var(--accent)",
                  transition: "opacity 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.opacity = "0.85")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.opacity = "1")
                }
              >
                Source Code ↗
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                style={{
                  fontSize: "0.65rem",
                  fontWeight: 400,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  padding: "10px 22px",
                  background: "transparent",
                  color: "var(--fg-mid)",
                  borderRadius: "2px",
                  border: "1px solid var(--border)",
                  transition: "color 0.2s ease, border-color 0.2s ease",
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
                Live Site ↗
              </a>
            )}
          </motion.div>
        </div>
      </motion.header>

      {/* Body */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "5rem 1.5rem",
          display: "grid",
          gridTemplateColumns: "1.8fr 1fr",
          gap: "5rem",
          alignItems: "start",
        }}
      >
        {/* Left — content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>

          {/* Problem */}
          <motion.section {...fadeInView(0)}>
            <p className="label" style={{ marginBottom: "0.8rem" }}>The Challenge</p>
            <span className="accent-rule" style={{ marginBottom: "1.5rem", display: "block" }} />
            <p style={{ fontSize: "1rem", lineHeight: 1.85, color: "var(--fg-mid)" }}>
              {project.problem}
            </p>
          </motion.section>

          {/* Architecture */}
          <motion.section {...fadeInView(0.1)}>
            <p className="label" style={{ marginBottom: "0.8rem" }}>Architecture</p>
            <span className="accent-rule" style={{ marginBottom: "1.5rem", display: "block" }} />
            <div
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "3px",
                padding: "1.8rem 2rem",
                transition: "border-color 0.2s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = "var(--accent-line)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "var(--border)")
              }
            >
              <p style={{ fontSize: "0.95rem", lineHeight: 1.85, color: "var(--fg-mid)" }}>
                {project.architecture}
              </p>
            </div>
          </motion.section>

          {/* Key Focus */}
          <motion.section {...fadeInView(0.15)}>
            <p className="label" style={{ marginBottom: "0.8rem" }}>Key Focus</p>
            <span className="accent-rule" style={{ marginBottom: "1.5rem", display: "block" }} />
            <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "var(--fg-mid)" }}>
              {project.keyFocus}
            </p>
          </motion.section>

          {/* Screenshots */}
          {project.screenshots && project.screenshots.length > 0 && (
            <motion.section {...fadeInView(0.2)}>
              <p className="label" style={{ marginBottom: "0.8rem" }}>Implementation</p>
              <span className="accent-rule" style={{ marginBottom: "1.5rem", display: "block" }} />
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {project.screenshots.map((snap: any, idx: number) => (
                  <div
                    key={idx}
                    style={{
                      border: "1px solid var(--border)",
                      borderRadius: "3px",
                      overflow: "hidden",
                      background: "var(--surface)",
                    }}
                  >
                    {snap.isPdf ? (
                      <div
                        style={{
                          padding: "3rem",
                          textAlign: "center",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          gap: "1rem",
                        }}
                      >
                        <p style={{ fontSize: "0.75rem", color: "var(--fg-muted)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                          Document
                        </p>
                        <a
                          href={snap.image}
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            fontSize: "0.65rem",
                            letterSpacing: "0.15em",
                            textTransform: "uppercase",
                            color: "var(--accent)",
                            padding: "10px 20px",
                            border: "1px solid var(--accent-line)",
                            borderRadius: "2px",
                          }}
                        >
                          Open PDF ↗
                        </a>
                      </div>
                    ) : (
                      <img
                        src={snap.image}
                        alt={snap.title}
                        style={{
                          width: "100%",
                          display: "block",
                          cursor: "zoom-in",
                          objectFit: "contain",
                          transition: "opacity 0.2s ease",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.opacity = "0.9")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.opacity = "1")
                        }
                        onClick={() => setSelectedImage(snap.image)}
                      />
                    )}
                    <div
                      style={{
                        padding: "1.2rem 1.5rem",
                        borderTop: "1px solid var(--border)",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "0.78rem",
                          fontWeight: 500,
                          color: "var(--fg)",
                          marginBottom: "0.3rem",
                        }}
                      >
                        {snap.title}
                      </p>
                      <p style={{ fontSize: "0.72rem", lineHeight: 1.6, color: "var(--fg-muted)" }}>
                        {snap.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          )}
        </div>

        {/* Right — sidebar */}
        <motion.aside
          {...fade(0.3)}
          style={{ position: "sticky", top: "2rem" }}
        >
          {/* Tech stack */}
          <div
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "3px",
              padding: "1.5rem",
              marginBottom: "1rem",
            }}
          >
            <p className="label" style={{ marginBottom: "1rem" }}>Stack</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {(project.stack || []).map((tech: string) => (
                <span
                  key={tech}
                  style={{
                    fontSize: "0.6rem",
                    letterSpacing: "0.08em",
                    color: "var(--fg-mid)",
                    padding: "4px 10px",
                    border: "1px solid var(--border)",
                    borderRadius: "2px",
                    textTransform: "uppercase",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project meta */}
          <div
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "3px",
              padding: "1.5rem",
            }}
          >
            <p className="label" style={{ marginBottom: "1rem" }}>Details</p>
            {[
              { key: "Type",       value: "Backend System"   },
              { key: "Role",       value: "Lead Developer"   },
              { key: "Repository", value: "github.com ↗", href: project.github },
            ].map((row, i, arr) => (
              <div
                key={row.key}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "0.7rem 0",
                  borderBottom: i < arr.length - 1 ? "1px solid var(--border)" : "none",
                }}
              >
                <span
                  style={{
                    fontSize: "0.62rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--fg-muted)",
                  }}
                >
                  {row.key}
                </span>
                {row.href ? (
                  <a
                    href={row.href}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      fontSize: "0.72rem",
                      color: "var(--accent)",
                      transition: "opacity 0.2s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                  >
                    {row.value}
                  </a>
                ) : (
                  <span style={{ fontSize: "0.72rem", color: "var(--fg-mid)" }}>
                    {row.value}
                  </span>
                )}
              </div>
            ))}
          </div>
        </motion.aside>
      </div>

      {/* Image lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 50,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(0,0,0,0.92)",
              backdropFilter: "blur(8px)",
              padding: "2rem",
              cursor: "zoom-out",
            }}
          >
            <button
              onClick={() => setSelectedImage(null)}
              style={{
                position: "absolute",
                top: "1.5rem",
                right: "1.5rem",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "2px",
                color: "var(--fg-mid)",
                padding: "8px 12px",
                cursor: "pointer",
                fontSize: "0.7rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Close ✕
            </button>
            <motion.img
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.25 }}
              src={selectedImage}
              alt="Enlarged view"
              style={{
                maxHeight: "90vh",
                maxWidth: "100%",
                objectFit: "contain",
                borderRadius: "3px",
                border: "1px solid var(--border)",
              }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}