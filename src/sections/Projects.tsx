"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { getProjectIcon } from "@/data/projects";

// 1. Updated API Types to match Django DRF Serializer
export interface ApiScreenshot {
  title: string;
  description: string;
  image: string; // Absolute URL from Django/Cloudinary
  isPdf?: boolean;
}

export interface ApiProject {
  title: string;
  slug: string;
  summary: string;
  problem: string;
  architecture: string;
  keyFocus: string;
  stack: string[];
  github: string | null;
  liveUrl: string | null;
  hasApi: boolean;
  icon?: string; // Icon name string from Django (e.g. "BookOpen")
  screenshots?: ApiScreenshot[];
}

export interface ApiCategory {
  id: number;
  name: string;
  slug: string;
  projects: ApiProject[];
}

export default function Projects({ categories }: { categories: ApiCategory[] }) {
  const [activeCategorySlug, setActiveCategorySlug] = useState(categories[0]?.slug || "");

  const activeCategory = categories.find((c) => c.slug === activeCategorySlug);
  const activeProjects = activeCategory?.projects || [];

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
          style={{ marginBottom: "2rem" }}
        >
          <p className="label" style={{ marginBottom: "0.8rem" }}>
            Selected Work
          </p>
          <h2 className="section-heading">Projects</h2>
        </motion.div>

        {/* Category Tabs */}
        {categories.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            style={{
              display: "flex",
              gap: "1.5rem",
              marginBottom: "3rem",
              borderBottom: "1px solid var(--border)",
              paddingBottom: "1rem",
            }}
          >
            {categories.map((category) => (
              <button
                key={category.slug}
                onClick={() => setActiveCategorySlug(category.slug)}
                style={{
                  background: "none",
                  border: "none",
                  padding: 0,
                  fontSize: "0.85rem",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  color: activeCategorySlug === category.slug ? "var(--fg)" : "var(--fg-muted)",
                  fontWeight: activeCategorySlug === category.slug ? 500 : 400,
                  transition: "color 0.2s ease",
                }}
              >
                {category.name}
              </button>
            ))}
          </motion.div>
        )}

        {/* Project List */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategorySlug}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              style={{ display: "flex", flexDirection: "column", gap: "0" }}
            >
              {activeProjects.map((project, index) => {
                // Resolves string icon name like "BookOpen" to Lucide component
                const IconComponent = getProjectIcon(project.icon);

                return (
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
                  >
                    {/* Left — title & icon */}
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
                        {project.summary}
                      </p>
                      <h3
                        style={{
                          fontSize: "1.05rem",
                          fontWeight: 400,
                          color: "var(--fg)",
                          lineHeight: 1.3,
                          marginBottom: "0.8rem",
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                        }}
                      >
                        <IconComponent style={{ width: "18px", height: "18px" }} />
                        {project.title}
                      </h3>
                      {/* Stack tags */}
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                        {project.stack?.map((tech) => (
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
                      >
                        Case Study ↗
                      </Link>

                      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", justifyContent: "flex-end" }}>
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            style={{
                              fontSize: "0.62rem",
                              letterSpacing: "0.12em",
                              textTransform: "uppercase",
                              color: "var(--fg-mid)",
                              padding: "5px 11px",
                              border: "1px solid var(--border)",
                              borderRadius: "2px",
                              background: "var(--surface)",
                              transition: "all 0.2s ease",
                              display: "inline-flex",
                              alignItems: "center",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.color = "var(--fg)";
                              e.currentTarget.style.borderColor = "var(--border-hover)";
                              e.currentTarget.style.background = "var(--bg)";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.color = "var(--fg-mid)";
                              e.currentTarget.style.borderColor = "var(--border)";
                              e.currentTarget.style.background = "var(--surface)";
                            }}
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
                              letterSpacing: "0.12em",
                              textTransform: "uppercase",
                              color: "var(--fg-mid)",
                              padding: "5px 11px",
                              border: "1px solid var(--border)",
                              borderRadius: "2px",
                              background: "var(--surface)",
                              transition: "all 0.2s ease",
                              display: "inline-flex",
                              alignItems: "center",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.color = "var(--fg)";
                              e.currentTarget.style.borderColor = "var(--border-hover)";
                              e.currentTarget.style.background = "var(--bg)";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.color = "var(--fg-mid)";
                              e.currentTarget.style.borderColor = "var(--border)";
                              e.currentTarget.style.background = "var(--surface)";
                            }}
                          >
                            Live
                          </a>
                        )}
                        {project.hasApi && (
                          <Link
                            href={`/api-docs/${project.slug}`}
                            style={{
                              fontSize: "0.62rem",
                              letterSpacing: "0.12em",
                              textTransform: "uppercase",
                              color: "var(--fg-mid)",
                              padding: "5px 11px",
                              border: "1px solid var(--border)",
                              borderRadius: "2px",
                              background: "var(--surface)",
                              transition: "all 0.2s ease",
                              display: "inline-flex",
                              alignItems: "center",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.color = "var(--fg)";
                              e.currentTarget.style.borderColor = "var(--border-hover)";
                              e.currentTarget.style.background = "var(--bg)";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.color = "var(--fg-mid)";
                              e.currentTarget.style.borderColor = "var(--border)";
                              e.currentTarget.style.background = "var(--surface)";
                            }}
                          >
                            API
                          </Link>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          <div style={{ borderTop: "1px solid var(--border)" }} />
        </div>
      </div>
    </section>
  );
}