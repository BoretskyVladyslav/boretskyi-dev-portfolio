"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface Project {
  title: string;
  link: string;
  tech: readonly string[];
  description: string;
  metric: string;
}

const projects: readonly Project[] = [
  {
    title: "Alex Consulting",
    link: "https://buh.acg-ua.com",
    tech: ["Next.js", "Sanity.io", "TypeScript", "SendPulse"],
    description:
      "Achieved a 100/100 Core Web Vitals score via aggressive SSG and next/image optimization. Automated lead pipelines with SendPulse API for instant Telegram alerts.",
    metric: "100/100 Core Web Vitals",
  },
  {
    title: "Kolo Playground",
    link: "https://koloplayground.com",
    tech: ["Next.js", "Zustand", "Jest", "API Routes"],
    description:
      "Real-time booking platform with admin order dashboard, complex date-calculation verified with Jest, and robust Zustand session management.",
    metric: "Custom Zustand Session",
  },
  {
    title: "Luximport",
    link: "https://luximport.org",
    tech: ["Next.js", "ISR", "React"],
    description:
      "Premium E-Commerce platform built for scale with ISR product catalogs and a conversion-optimized checkout flow.",
    metric: "DAG Validation",
  },
];

function ProjectRow({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group border-b border-white/10 first:border-t transition-colors duration-200 hover:bg-white/5"
    >
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full flex-col gap-4 px-4 py-6 md:flex-row md:items-center md:gap-8"
        aria-label={`View ${project.title}`}
      >
        {/* Left: Project Name */}
        <span
          className={`flex-[1] text-lg font-medium tracking-tight transition-colors duration-200 ${
            hovered ? "text-foreground" : "text-foreground/70"
          }`}
        >
          {project.title}
        </span>

        {/* Center: Architectural Metric */}
        <span className="flex-[1.5] font-mono text-sm text-muted-foreground md:text-center">
          {project.metric}
        </span>

        {/* Right: Tech Stack */}
        <div className="flex flex-[1] flex-wrap items-center justify-start gap-2 md:justify-end">
          {project.tech.map((t) => (
            <span
              key={t}
              className="font-mono text-xs text-gray-500 transition-colors duration-200 group-hover:text-gray-400"
            >
              {t}
            </span>
          ))}
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
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="mb-10 px-4 md:px-0"
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

      <div role="list" className="flex flex-col -mx-4 md:mx-0">
        {projects.map((project) => (
          <div key={project.title} role="listitem">
            <ProjectRow project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}
