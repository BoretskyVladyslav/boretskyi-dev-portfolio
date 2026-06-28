"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="flex flex-col items-start gap-6 pt-12 md:pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <span className="mb-6 inline-block rounded-full border border-border bg-glass px-3 py-1 text-xs font-mono text-muted-foreground">
          Available for new opportunities
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-foreground">
          Hi, I'm Vladyslav Boretskyi.
        </h1>
        <p className="mt-4 max-w-2xl text-lg md:text-xl leading-relaxed text-muted-foreground">
          Frontend Engineer specializing in React, Next.js, and high-performance web applications (100/100 Core Web Vitals).
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        className="mt-4 flex flex-wrap items-center gap-4"
      >
        <a
          href="#projects"
          className="group inline-flex h-10 items-center justify-center rounded-md bg-foreground px-6 text-sm font-medium text-background transition-colors hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border disabled:pointer-events-none disabled:opacity-50 glow"
        >
          View Projects
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 items-center justify-center rounded-md border border-border bg-transparent px-6 text-sm font-medium text-foreground transition-colors hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border disabled:pointer-events-none disabled:opacity-50"
        >
          <GithubIcon className="mr-2 h-4 w-4" />
          GitHub
        </a>
      </motion.div>
    </section>
  );
}
