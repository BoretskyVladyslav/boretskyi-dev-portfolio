"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { GithubIcon } from "@/components/icons";

export function Hero() {
  return (
    <header className="flex flex-col items-start gap-6 pt-12 pb-16 md:pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <span className="mb-6 inline-block rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground glass">
          Available for new opportunities
        </span>
        <h1 className="text-4xl font-medium tracking-tight text-foreground sm:text-5xl md:text-6xl">
          Hi, I&apos;m Vladyslav Boretskyi.
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          Frontend Engineer specializing in React, Next.js, and
          high-performance web applications (100/100 Core Web Vitals).
        </p>
      </motion.div>

      <motion.nav
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        className="mt-4 flex flex-wrap items-center gap-4"
        aria-label="Primary actions"
      >
        <a
          href="#projects"
          className="group inline-flex h-10 items-center justify-center rounded-md bg-foreground px-6 text-sm font-medium text-background transition-colors hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border glow"
        >
          View Projects
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
        <a
          href="https://github.com/BoretskyVladyslav"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 items-center justify-center rounded-md border border-border bg-transparent px-6 text-sm font-medium text-foreground transition-colors hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border"
        >
          <GithubIcon className="mr-2 h-4 w-4" />
          GitHub
        </a>
      </motion.nav>
    </header>
  );
}
