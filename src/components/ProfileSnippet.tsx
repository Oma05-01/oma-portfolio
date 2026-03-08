import Image from "next/image";

export default function ProfileSnippet() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      {/* The Wide, Rounded Rectangle */}
      <div className="flex flex-col items-center gap-8 rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-colors hover:border-white/20 hover:bg-white/10 md:flex-row md:p-10">
        
        {/* Larger Image Section */}
        <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-2xl border border-white/10 md:h-40 md:w-40">
          <Image
            src="/oma-profile.jpg" // Make sure this image is in your public folder
            alt="Esigbone Oma"
            fill
            className="object-cover"
          />
        </div>

        {/* Text & Bio Section */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="mb-2 text-2xl font-bold text-white md:text-3xl">
            Esigbone Oma
          </h2>
          <p className="mb-4 font-medium text-indigo-400">
            Python Developer & Mechanical Engineer
          </p>
          <p className="text-sm leading-relaxed text-slate-400 md:text-base">
            Specializing in backend development, robust API endpoints, and scalable systems. 
            I combine a strong mechanical engineering foundation with a passion for structured 
            logic and building practical solutions to complex problems.
          </p>
          
          {/* Optional: A quick link or status */}
          <div className="mt-6 flex items-center justify-center gap-2 md:justify-start">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
            </span>
            <span className="text-sm font-medium text-slate-300">Available for new opportunities</span>
          </div>
        </div>

      </div>
    </section>
  );
}