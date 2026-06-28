"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { GithubIcon } from "@/components/icons";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

export function Hero() {
  return (
    <header className="flex flex-col items-start gap-6 pt-12 pb-16 md:pt-20">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col items-start gap-6"
      >
        <motion.span
          variants={item}
          className="mb-2 inline-block rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground glass"
        >
          Available for new opportunities
        </motion.span>
        <motion.h1
          variants={item}
          className="text-4xl font-medium tracking-tight text-foreground sm:text-5xl md:text-6xl"
        >
          Hi, I&apos;m Vladyslav Boretskyi.
        </motion.h1>
        <motion.p
          variants={item}
          className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl"
        >
          Frontend Engineer specializing in React, Next.js, and
          high-performance web applications (100/100 Core Web Vitals).
        </motion.p>

        <motion.nav
          variants={item}
          className="mt-4 flex flex-wrap items-center gap-4"
          aria-label="Primary actions"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="group inline-flex h-10 items-center justify-center rounded-md bg-foreground px-6 text-sm font-medium text-background transition-colors hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border glow"
          >
            View Projects
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/BoretskyVladyslav"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center justify-center rounded-md border border-border bg-transparent px-6 text-sm font-medium text-foreground transition-colors hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border"
          >
            <GithubIcon className="mr-2 h-4 w-4" />
            GitHub
          </motion.a>
        </motion.nav>
      </motion.div>
    </header>
  );
}
