"use client";

import { motion } from "framer-motion";
import Link from "next/link"; // Improved: Use Next.js Link for internal navigation

const projects = [
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
  },
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}