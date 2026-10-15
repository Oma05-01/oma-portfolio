"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

type Category = { 
  id: string; 
  name: string; 
};

type Project = { 
  id: string; 
  categoryId: string; 
  title: string; 
  description: string; 
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
};

export default function PortfolioTabs({ categories, projects }: { categories: Category[], projects: Project[] }) {
  // Default to the first category returned by your backend
  const [activeTab, setActiveTab] = useState(categories[0]?.id);

  const visibleProjects = projects.filter((p) => p.categoryId === activeTab);

  return (
    <div className="w-full max-w-4xl py-8">
      {/* Dynamic Tabs */}
      <div className="flex space-x-2 border-b border-zinc-800 mb-8 overflow-x-auto no-scrollbar">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveTab(category.id)}
            className={`relative px-4 py-3 text-sm font-medium transition-colors ${
              activeTab === category.id 
                ? "text-white" 
                : "text-zinc-500 hover:text-zinc-300"
            }`}
          >
            {category.name}
            {activeTab === category.id && (
              <motion.div
                layoutId="active-tab-indicator"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout">
          {visibleProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:border-zinc-700 transition-colors"
            >
              <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-zinc-400 text-sm mb-6 min-h-[60px]">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech) => (
                  <span key={tech} className="px-2 py-1 text-xs rounded-md bg-zinc-800 text-zinc-300">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center space-x-4 mt-auto">
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}