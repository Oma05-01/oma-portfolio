"use client";

import { motion } from "framer-motion";
import Link from "next/link"; // Improved: Use Next.js Link for internal navigation

const projects = [
{
  title: "Tax Estimation Engine (2026 Act)",
  slug: "tax-estimator",
  summary: "Client-side, WASM-powered tax calculation engine featuring dynamic user profiling, proportional tax distribution, and automated receipt generation.",
  problem: "Nigerian tax estimation involves complex progressive brackets, profile-specific statutory reliefs, and severe privacy risks when uploading sensitive bank statements to external servers.",
  architecture: "Privacy-first architecture leveraging WebAssembly (Pyodide) for zero-server data parsing, paired with a React state engine that dynamically adapts progressive tax models based on user profiles.",
  keyFocus: "Secure client-side data processing, proportional tax distribution algorithms, state-locked interactive workflows, and dynamic statutory relief calculation.",
  stack: ["React", "TypeScript", "WebAssembly (Pyodide)", "Tailwind CSS"],
  github: "https://github.com/Oma05-01/TaxEstimator", // Update repo name if different!
  liveUrl: "https://tax-esteem.vercel.app/",
  theme: {
    primary: "text-blue-500",
    background: "bg-slate-900",
    accent: "hover:text-blue-400",
    font: "inter" // Replace with the font used in your portfolio
  },
},
  {
    title: "Modular LMS Backend System",
    problem:
      "Educational platforms require strict role-based access control, dynamic enrollment handling, timed course access, and secure content delivery tied to payment status.",
    architecture:
      "Built a layered backend system connecting Course → Package → Payment → Enrollment → Content access. Implemented a content state engine (LOCKED/AVAILABLE/COMPLETED), quiz submission workflow with answer tracking, resource analytics logging (views/downloads), JWT-based authentication, and role-restricted admin/student endpoints.",
    keyFocus: "Access Control, Enrollment Logic & Learning Progress Tracking",
    stack: ["Python", "Django", "Django REST Framework", "SimpleJWT", "Celery", "Channels"],
    github: "https://github.com/drid-uniben/django-backend",
    slug: "lms-platform",
    hasApi: false, // Added this flag to indicate API documentation availability
    theme: {
      primary: "text-blue-400",
      background: "bg-slate-950",
      accent: "hover:text-blue-300",
    },
  },
  {
    title: "Hospital Management System",
    problem:
      "Healthcare workflows were fragmented, requiring structured role-based access and appointment tracking.",
    architecture:
      "Designed a modular Django backend with role-based authentication and REST API endpoints for Flutter integration.",
    keyFocus: "Role-Based Access Control & API Architecture",
    stack: ["Python", "Django", "REST API", "PostgreSQL"],
    github: "https://github.com/Oma05-01/hospital",
    slug: "hospital-system",
    hasApi: true,
    theme: {
      primary: "text-blue-400",
      background: "bg-slate-950",
      accent: "hover:text-blue-300",
    },
  },
  {
    title: "Odyce Perfume Store",
    problem:
      "Needed a scalable backend to handle authentication, product management, and order logic.",
    architecture:
      "Built structured Django models and implemented authentication flows with clean separation of concerns.",
    keyFocus: "E-commerce Logic & Authentication Flows",
    stack: ["Python", "Django", "HTML", "CSS"],
    github: "https://github.com/Oma05-01/Odyce",
    slug: "odyce-store",
    hasApi: false,
    theme: {
      primary: "text-rose-400",
      background: "bg-black",
      accent: "hover:text-rose-300",
    },
  },
  {
    title: "QuestNest Infrastructure Engine",
    problem:
      "Operational platforms often lack organisation-scoped identity control, lifecycle enforcement, and traceable automation across assets and payments.",
    architecture:
      "Designed an infrastructure-first Django system centered on organisation ownership, lifecycle state validation, and event-driven automation with task generation.",
    keyFocus: "Operational Infrastructure & Automation",
    stack: ["Python", "Django", "PostgreSQL", "Event-Driven Architecture"],
    github: "https://github.com/Oma05-01/QuestNest",
    slug: "questnest",
    hasApi: false,
  },
  {
    title: "DRID Student Platform Contribution",
    problem:
      "Institutional digital systems required backend flow improvements and logic restructuring.",
    architecture:
      "Contributed backend logic fixes and improved system reliability during peak usage.",
    keyFocus: "Backend Logic Optimization",
    stack: ["Python", "Django"],
    github: "https://drid.uniben.edu/",
    slug: "drid-platform", // Added a slug here to prevent errors
    hasApi: false,
  }
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-slate-950 px-6 py-24 text-white"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-20 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-purple-600/20 blur-[120px]"></div>
      </div>

      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-4xl font-bold">
          Selected Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col justify-between rounded-xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-slate-600 hover:shadow-2xl hover:shadow-purple-500/10"
            >
              <div>
                <h3 className="mb-4 text-xl font-semibold">{project.title}</h3>

                <p className="mb-3 text-slate-400">
                  <span className="font-semibold text-white">Problem:</span>{" "}
                  {project.problem}
                </p>

                <p className="mb-3 text-slate-400">
                  <span className="font-semibold text-white">Architecture:</span>{" "}
                  {project.architecture}
                </p>

                <p className="mb-4 text-slate-300">
                  <span className="font-semibold text-white">Focus:</span>{" "}
                  {project.keyFocus}
                </p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-slate-800 px-3 py-1 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Corrected Link Section */}
              <div className="mt-4 flex items-center gap-4">
                 {/* Option 1: Link to detailed Case Study page */}
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-2 rounded-lg border border-indigo-500/30 px-5 py-2.5 text-sm font-medium text-indigo-400 transition-all hover:bg-indigo-500/10 hover:text-indigo-300"
                >
                  Read Case Study →
                </Link>

                {/* Option 2: Link to GitHub (External) */}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-slate-400 hover:text-white"
                  >
                    View Code ↗
                  </a>
                )}

                {/* 👇 NEW: Live Demo Link */}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-emerald-400/80 transition-colors hover:text-emerald-300"
                  >
                    Live Demo ↗
                  </a>
                )}

                {/* Option 3: Link to API Documentation (Now generic for any project) */}
                {project.hasApi && (
                  <Link
                    href={`/api-docs/${project.slug}`}
                    className="text-sm font-medium text-indigo-400/80 transition-colors hover:text-indigo-300"
                  >
                    API Docs ↗
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}