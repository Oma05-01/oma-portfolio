"use client";
import { Inter, Space_Grotesk, Playfair_Display, JetBrains_Mono} from "next/font/google";
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects"; // Make sure path is correct
import { motion, Variants } from "framer-motion";
import { ArrowUpRight, Github, Layers, Target, AlertCircle, ArrowRight } from "lucide-react";

const fadeIn: Variants= {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const inter = Inter({ subsets: ["latin"] });

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const fontMap = {
  inter: inter.className,
  space: spaceGrotesk.className,
  playfair: playfair.className,
  jetbrains: jetbrainsMono.className,
};

export default function ProjectPage() {
  const params = useParams();
  const slug = params.slug as string;

  // ✅ CORRECT LOOKUP for Record<string, Project>
  // Since projects is an object, we access it directly by key
  const project = projects[slug];

  // If the key doesn't exist, show 404
  if (!project) return notFound();

  const Icon = project.icon;

  // Check if we have detailed content
  const hasContent = project.problem && project.architecture;

  // --- FALLBACK VIEW (Link Only) ---
  if (!hasContent) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-6 text-center text-slate-200">
        <h1 className="mb-4 text-4xl font-bold text-white">{project.title}</h1>
        <p className="mb-8 max-w-lg text-slate-400">
          This project doesn't have a detailed case study yet, but you can view the source code directly.
        </p>
        
        <a
          href={project.github}
          target="_blank"
          className="group flex items-center gap-2 rounded-full bg-indigo-600 px-8 py-4 font-semibold text-white transition-all hover:bg-indigo-500 hover:scale-105"
        >
          <Github size={20} />
          View on GitHub
          <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
        </a>
      </main>
    );
  }

  // --- FULL PAGE VIEW ---
  return (
    <main className={`min-h-screen selection:bg-white/20 ${project.theme.background} ${fontMap[project.theme.font]} text-slate-200`}>
      
      {/* 3. HERO: Changed header -> motion.header */}
      <motion.header
        initial="hidden"
        animate="visible"
        custom={0} // Starts immediately
        variants={fadeIn}
        className="relative overflow-hidden border-b border-white/10 bg-black/20 px-6 py-24 backdrop-blur-sm"
      >
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="mb-6 inline-block" 
            >
              {/* 2. Increased size to w-16 h-16 to match the big title */}
              <Icon className={`w-16 h-16 ${project.theme.primary}`} />
            </motion.div>
            <h1 className={`mb-6 text-5xl font-bold tracking-tight md:text-6xl ${project.theme.primary}`}>
              {project.title}
            </h1>
            <p className="text-xl leading-relaxed text-slate-300">
              {project.summary}
            </p>
            
            <div className="mt-8 flex gap-4">
              <a
                href={project.github}
                target="_blank"
                className={`group flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-slate-950 transition-transform hover:scale-105 ${project.theme.accent}`}
              >
                <Github size={20} />
                View Source Code
              </a>
            </div>
          </div>
        </div>
      </motion.header>

      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[2fr_1fr]">
        
        {/* LEFT COLUMN */}
        <div className="space-y-16">
          
          {/* 4. PROBLEM: Changed section -> motion.section */}
          <motion.section
            initial="hidden"
            whileInView="visible" // Triggers animation when scrolled into view
            viewport={{ once: true }}
            custom={0.1} // Slight delay
            variants={fadeIn}
            className="group"
          >
            <div className={`mb-4 flex items-center gap-3 ${project.theme.primary}`}>
              <AlertCircle size={24} />
              <h2 className="text-sm font-bold uppercase tracking-widest opacity-80">The Challenge</h2>
            </div>
            <h3 className="mb-4 text-3xl font-semibold text-white">Defining the Problem</h3>
            <p className="text-lg leading-relaxed text-slate-300">
              {project.problem}
            </p>
          </motion.section>

          <hr className="border-white/10" />

          {/* 5. ARCHITECTURE: Changed section -> motion.section */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.2}
            variants={fadeIn}
            className="group"
          >
             <div className={`mb-4 flex items-center gap-3 ${project.theme.primary}`}>
              <Layers size={24} />
              <h2 className="text-sm font-bold uppercase tracking-widest opacity-80">System Design</h2>
            </div>
            <h3 className="mb-4 text-3xl font-semibold text-white">Architecture & Logic</h3>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 hover:border-white/20 transition-colors">
              <p className="text-lg leading-relaxed text-slate-200">
                {project.architecture}
              </p>
            </div>
          </motion.section>

           {/* 6. KEY FOCUS: Changed section -> motion.section */}
           <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.3}
            variants={fadeIn}
            className="group"
          >
             <div className={`mb-4 flex items-center gap-3 ${project.theme.primary}`}>
              <Target size={24} />
              <h2 className="text-sm font-bold uppercase tracking-widest opacity-80">Key Focus</h2>
            </div>
            <p className="text-lg leading-relaxed text-slate-300">
              {project.keyFocus}
            </p>
          </motion.section>
        </div>

        {/* 7. SIDEBAR: Changed aside -> motion.aside */}
        <motion.aside
          initial="hidden"
          animate="visible"
          custom={0.4} // Loads last
          variants={fadeIn}
          className="space-y-8 md:sticky md:top-10 md:h-fit"
        >
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <h3 className="mb-6 font-semibold text-white flex items-center gap-2">
              ⚡ Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {(project.stack || []).map((tech: string, index: number) => (
                <span
                  key={index}
                  className={`cursor-default select-none rounded-md border border-white/10 bg-black/20 px-3 py-1.5 text-sm font-medium transition-colors ${project.theme.primary}`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <h3 className="mb-4 font-semibold text-white">Project Details</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Type</span>
                <span className="text-slate-200">Backend System</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Role</span>
                <span className="text-slate-200">Lead Developer</span>
              </li>
              <li className="flex items-center justify-between pt-2">
                <span>Repository</span>
                <a 
                  href={project.github} 
                  target="_blank" 
                  className={`flex items-center gap-1 font-medium hover:underline ${project.theme.primary}`}
                >
                  github.com <ArrowUpRight size={14} />
                </a>
              </li>
            </ul>
          </div>
        </motion.aside>
      </div>
    </main>
  );
}