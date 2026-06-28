"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface Project {
  title: string;
  link: string;
  tech: readonly string[];
  architecture: string;
}

const projects: readonly Project[] = [
  {
    title: "Alex Consulting (ACG)",
    link: "https://buh.acg-ua.com",
    tech: ["Next.js", "Sanity.io", "Tailwind CSS", "SendPulse API"],
    architecture:
      "Achieved a 100/100 Core Web Vitals score via aggressive static site generation (SSG) and next/image optimization. Automated client lead pipelines with SendPulse API and Next.js API Routes for instant Telegram alerts, deployed on fully managed Vercel infrastructure.",
  },
  {
    title: "Kolo Playground",
    link: "https://koloplayground.com",
    tech: ["Next.js", "API Routes", "Jest", "Zustand"],
    architecture:
      "Custom real-time booking platform featuring an admin order queue dashboard built on API Routes, complex date-calculation edge case handling verified with Jest, and robust Zustand session management.",
  },
  {
    title: "Luximport",
    link: "https://luximport.org",
    tech: ["Next.js", "ISR", "React"],
    architecture:
      "Premium E-Commerce platform architected for scale, handling complex product catalogs with Incremental Static Regeneration (ISR) and a highly customized, conversion-optimized checkout flow.",
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="flex flex-col gap-8 pt-16 md:pt-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h2
          id="projects-heading"
          className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl"
        >
          Featured Projects
        </h2>
        <p className="mt-2 text-muted-foreground">
          Architectural challenges and technical implementations.
        </p>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: index * 0.1,
            }}
            className="group relative flex h-full flex-col justify-between rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:scale-[1.02] hover:border-white/20 hover:bg-white/10"
          >
            <div
              className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              aria-hidden="true"
            />

            <div className="relative z-10 flex flex-col gap-4">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-medium text-foreground">
                  {project.title}
                </h3>
                <ArrowUpRight
                  className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-foreground"
                  aria-hidden="true"
                />
              </div>

              <p className="text-sm leading-relaxed text-muted-foreground">
                {project.architecture}
              </p>
            </div>

            <ul
              className="relative z-10 mt-6 flex flex-wrap gap-2"
              aria-label={`Technologies used in ${project.title}`}
            >
              {project.tech.map((tech) => (
                <li
                  key={tech}
                  className="inline-flex items-center rounded-md border border-white/10 bg-white/5 px-2 py-1 font-mono text-xs text-muted-foreground transition-colors group-hover:border-white/20 group-hover:text-foreground"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
