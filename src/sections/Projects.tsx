"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    title: "Tax Estimation Engine",
    subtitle: "2026 Finance Act",
    slug: "tax-estimator",
    problem:
      "Nigerian tax estimation involves complex progressive brackets, profile-specific statutory reliefs, and severe privacy risks when uploading sensitive bank statements to external servers.",
    architecture:
      "Privacy-first architecture leveraging WebAssembly (Pyodide) for zero-server data parsing, paired with a React state engine that dynamically adapts progressive tax models based on user profiles.",
    keyFocus: "Secure client-side data processing · proportional tax distribution · dynamic statutory relief calculation",
    stack: ["React", "TypeScript", "WebAssembly (Pyodide)", "Tailwind CSS"],
    github: "https://github.com/Oma05-01/TaxEstimator",
    liveUrl: "https://tax-esteem.vercel.app/",
    hasApi: false,
  },
  {
    title: "Modular LMS Backend",
    subtitle: "Educational Platform",
    slug: "lms-platform",
    problem:
      "Educational platforms require strict role-based access control, dynamic enrollment handling, timed course access, and secure content delivery tied to payment status.",
    architecture:
      "Layered backend system connecting Course → Package → Payment → Enrollment → Content access. Content state engine (LOCKED / AVAILABLE / COMPLETED), quiz submission workflow, resource analytics logging, JWT auth, and role-restricted endpoints.",
    keyFocus: "Access control · enrollment logic · learning progress tracking",
    stack: ["Python", "Django", "Django REST Framework", "SimpleJWT", "Celery", "Channels"],
    github: "https://github.com/drid-uniben/django-backend",
    hasApi: false,
  },
  {
    title: "Hospital Management System",
    subtitle: "Healthcare Backend",
    slug: "hospital-system",
    problem:
      "Healthcare workflows were fragmented, requiring structured role-based access and appointment tracking.",
    architecture:
      "Modular Django backend with role-based authentication and REST API endpoints designed for Flutter client integration.",
    keyFocus: "Role-based access control · API architecture",
    stack: ["Python", "Django", "REST API", "PostgreSQL"],
    github: "https://github.com/Oma05-01/hospital",
    liveUrl: "https://hospital-or65.onrender.com",
    hasApi: true,
  },
  {
    title: "Odyce Perfume Store",
    subtitle: "E-commerce Backend",
    slug: "odyce-store",
    problem:
      "Needed a scalable backend to handle authentication, product management, and order logic for a consumer perfume storefront.",
    architecture:
      "Structured Django models with clean separation of concerns across authentication, product cataloguing, and order management.",
    keyFocus: "E-commerce logic · authentication flows",
    stack: ["Python", "Django", "HTML", "CSS"],
    github: "https://github.com/Oma05-01/Odyce",
    liveUrl: "https://main-ie29.onrender.com/",
    hasApi: false,
  },
  {
    title: "QuestNest Infrastructure Engine",
    subtitle: "Operational Platform",
    slug: "questnest",
    problem:
      "Operational platforms often lack organisation-scoped identity control, lifecycle enforcement, and traceable automation across assets and payments.",
    architecture:
      "Infrastructure-first Django system centred on organisation ownership, lifecycle state validation, and event-driven automation with task generation.",
    keyFocus: "Operational infrastructure · automation · event-driven architecture",
    stack: ["Python", "Django", "PostgreSQL", "Event-Driven Architecture"],
    github: "https://github.com/Oma05-01/QuestNest",
    hasApi: false,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        background: "var(--bg)",
        padding: "8rem 1.5rem",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
          style={{ marginBottom: "4rem" }}
        >
          <p className="label" style={{ marginBottom: "0.8rem" }}>
            Selected Work
          </p>
          <h2 className="section-heading">
            Projects
          </h2>
        </motion.div>

        {/* Project list */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.07, ease: [0.4, 0, 0.2, 1] }}
              viewport={{ once: true }}
              style={{
                borderTop: "1px solid var(--border)",
                padding: "2rem 0",
                display: "grid",
                gridTemplateColumns: "1fr 1.8fr auto",
                gap: "2.5rem",
                alignItems: "start",
                transition: "background 0.2s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "var(--surface)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "transparent")
              }
            >
              {/* Left — title */}
              <div style={{ paddingRight: "1rem" }}>
                <p
                  style={{
                    fontSize: "0.58rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                    fontWeight: 500,
                    marginBottom: "0.4rem",
                  }}
                >
                  {project.subtitle}
                </p>
                <h3
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: 400,
                    color: "var(--fg)",
                    lineHeight: 1.3,
                    marginBottom: "0.8rem",
                  }}
                >
                  {project.title}
                </h3>
                {/* Stack tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        fontSize: "0.58rem",
                        letterSpacing: "0.08em",
                        color: "var(--fg-muted)",
                        padding: "3px 8px",
                        border: "1px solid var(--border)",
                        borderRadius: "2px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Middle — description */}
              <div>
                <p
                  style={{
                    fontSize: "0.82rem",
                    lineHeight: 1.75,
                    color: "var(--fg-mid)",
                    marginBottom: "0.5rem",
                  }}
                >
                  {project.problem}
                </p>
                <p
                  style={{
                    fontSize: "0.75rem",
                    lineHeight: 1.7,
                    color: "var(--fg-muted)",
                    fontStyle: "italic",
                  }}
                >
                  {project.keyFocus}
                </p>
              </div>

              {/* Right — links */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  alignItems: "flex-end",
                  flexShrink: 0,
                }}
              >
                <Link
                  href={`/projects/${project.slug}`}
                  style={{
                    fontSize: "0.65rem",
                    fontWeight: 500,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                    padding: "7px 14px",
                    border: "1px solid var(--accent-line)",
                    borderRadius: "2px",
                    whiteSpace: "nowrap",
                    transition: "background 0.2s ease, border-color 0.2s ease",
                    display: "inline-block",
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
                  Case Study ↗
                </Link>

                <div style={{ display: "flex", gap: "10px" }}>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        fontSize: "0.62rem",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "var(--fg-muted)",
                        transition: "color 0.2s ease",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "var(--fg)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "var(--fg-muted)")
                      }
                    >
                      Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        fontSize: "0.62rem",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "var(--fg-muted)",
                        transition: "color 0.2s ease",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "var(--fg)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "var(--fg-muted)")
                      }
                    >
                      Live
                    </a>
                  )}
                  {project.hasApi && (
                    <Link
                      href={`/api-docs/${project.slug}`}
                      style={{
                        fontSize: "0.62rem",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "var(--fg-muted)",
                        transition: "color 0.2s ease",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "var(--fg)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "var(--fg-muted)")
                      }
                    >
                      API
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Bottom border */}
          <div style={{ borderTop: "1px solid var(--border)" }} />
        </div>
      </div>
    </section>
  );
}