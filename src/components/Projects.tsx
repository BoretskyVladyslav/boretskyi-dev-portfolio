"use client";

import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface Project {
  title: string;
  link: string;
  tech: readonly string[];
  description: string;
  /** Tailwind gradient classes for the floating preview swatch */
  previewGradient: string;
  /** Accent label shown in the preview card */
  previewLabel: string;
}

const projects: readonly Project[] = [
  {
    title: "Alex Consulting",
    link: "https://buh.acg-ua.com",
    tech: ["Next.js", "Sanity.io", "TypeScript", "SendPulse"],
    description:
      "Achieved a 100/100 Core Web Vitals score via aggressive SSG and next/image optimization. Automated lead pipelines with SendPulse API for instant Telegram alerts.",
    previewGradient: "from-slate-700 via-slate-800 to-slate-900",
    previewLabel: "ACG",
  },
  {
    title: "Kolo Playground",
    link: "https://koloplayground.com",
    tech: ["Next.js", "Zustand", "Jest", "API Routes"],
    description:
      "Real-time booking platform with admin order dashboard, complex date-calculation verified with Jest, and robust Zustand session management.",
    previewGradient: "from-emerald-900 via-teal-900 to-slate-900",
    previewLabel: "KOLO",
  },
  {
    title: "Luximport",
    link: "https://luximport.org",
    tech: ["Next.js", "ISR", "React"],
    description:
      "Premium E-Commerce platform built for scale with ISR product catalogs and a conversion-optimized checkout flow.",
    previewGradient: "from-amber-900 via-orange-900 to-slate-900",
    previewLabel: "LUX",
  },
];

/** Floating preview card that follows the cursor inside each row */
function FloatingPreview({
  isVisible,
  gradient,
  label,
}: {
  isVisible: boolean;
  gradient: string;
  label: string;
}) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="preview"
          initial={{ opacity: 0, scale: 0.85, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 8 }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
          className="pointer-events-none absolute z-50 overflow-hidden rounded-xl border border-white/10 shadow-2xl"
          style={{ width: 180, height: 120 }}
        >
          <div
            className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${gradient}`}
          >
            <span className="font-mono text-xl font-bold tracking-widest text-white/30">
              {label}
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ProjectRow({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false);
  const rowRef = useRef<HTMLDivElement>(null);

  // Spring-physics cursor tracking
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const springX = useSpring(rawX, { stiffness: 200, damping: 25 });
  const springY = useSpring(rawY, { stiffness: 200, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!rowRef.current) return;
    const rect = rowRef.current.getBoundingClientRect();
    rawX.set(e.clientX - rect.left - 90); // center the 180px wide preview
    rawY.set(e.clientY - rect.top - 60);  // center the 120px tall preview
  };

  return (
    <motion.div
      ref={rowRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group relative border-b border-white/10 first:border-t"
    >
      {/* Floating cursor-tracked preview */}
      <motion.div
        className="pointer-events-none absolute z-50"
        style={{ x: springX, y: springY }}
      >
        <FloatingPreview
          isVisible={hovered}
          gradient={project.previewGradient}
          label={project.previewLabel}
        />
      </motion.div>

      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="relative z-10 flex w-full flex-col gap-4 py-7 md:flex-row md:items-center md:gap-0"
        aria-label={`View ${project.title}`}
      >
        {/* Title */}
        <span
          className={`flex-1 text-2xl font-medium tracking-tight transition-colors duration-200 ${
            hovered ? "text-foreground" : "text-foreground/70"
          }`}
        >
          {project.title}
        </span>

        {/* Tech tags — hidden on mobile, centered on desktop */}
        <div className="hidden flex-1 items-center justify-center gap-2 md:flex">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-muted-foreground transition-colors duration-200 group-hover:border-white/20 group-hover:text-foreground/80"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Arrow */}
        <div className="flex shrink-0 items-center justify-end">
          <motion.div
            animate={{ x: hovered ? 4 : 0, y: hovered ? -4 : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <ArrowUpRight
              className={`h-6 w-6 transition-colors duration-200 ${
                hovered ? "text-foreground" : "text-muted-foreground"
              }`}
              aria-hidden="true"
            />
          </motion.div>
        </div>
      </a>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="pt-16 md:pt-24">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="mb-10"
      >
        <h2
          id="projects-heading"
          className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl"
        >
          Featured Work
        </h2>
        <p className="mt-2 text-muted-foreground">
          A selection of projects that showcase my technical expertise.
        </p>
      </motion.div>

      <div role="list">
        {projects.map((project) => (
          <div key={project.title} role="listitem">
            <ProjectRow project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}
