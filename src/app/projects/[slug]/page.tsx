"use client";
import { useState } from "react";
import { Inter, Space_Grotesk, Playfair_Display, JetBrains_Mono, Roboto, Montserrat} from "next/font/google";
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects"; // Make sure path is correct
import { AnimatePresence, motion, Variants } from "framer-motion";
import { ArrowUpRight, Github, Layers, Target, AlertCircle, ArrowRight, Terminal, X } from "lucide-react";

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

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});



const fontMap = {
  inter: inter.className,
  space: spaceGrotesk.className,
  playfair: playfair.className,
  jetbrains: jetbrainsMono.className,
  roboto: roboto.className,
  montserrat: montserrat.className,
};

export default function ProjectPage() {
  const params = useParams();
  const slug = params.slug as string;


  const [selectedImage, setSelectedImage] = useState<string | null>(null);
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

          {project.screenshots && project.screenshots.length > 0 && (
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.4}
              variants={fadeIn}
              className="group"
            >
              <div className={`mb-4 flex items-center gap-3 ${project.theme.primary}`}>
                <Terminal size={24} />
                <h2 className="text-sm font-bold uppercase tracking-widest opacity-80">Implementation</h2>
              </div>
              <h3 className="mb-6 text-3xl font-semibold text-white">Code & API Testing</h3>
              
              <div className="space-y-8">
                {project.screenshots.map((snap: any, idx: number) => (
                  <div key={idx} className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-colors hover:border-white/20">
                    {/* Image Area */}
                    <div className="relative w-full overflow-hidden border-b border-white/10 bg-black/50">
                      <img 
                        src={snap.image} 
                        alt={snap.title}
                        // 👇 Added cursor-pointer, a hover zoom effect, and the onClick handler
                        className="w-full cursor-pointer object-contain transition-transform duration-300 hover:scale-[1.02]"
                        onClick={() => setSelectedImage(snap.image)} 
                      />
                    </div>
                    {/* Descriptive Text Area */}
                    <div className="p-6">
                      <h4 className="mb-2 text-lg font-semibold text-white">{snap.title}</h4>
                      <p className="text-sm leading-relaxed text-slate-400">
                        {snap.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          )}
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

      {/* 8. IMAGE MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)} // Clicking the background closes it
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute right-6 top-6 z-50 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 md:right-10 md:top-10"
            >
              <X size={24} />
            </button>

            {/* The Enlarged Image */}
            <motion.img
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              src={selectedImage}
              alt="Enlarged view"
              className="max-h-[90vh] max-w-full rounded-lg object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()} // Prevents clicking the actual image from closing the modal
            />
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}