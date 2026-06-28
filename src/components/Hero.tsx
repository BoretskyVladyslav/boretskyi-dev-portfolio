"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { useTextScramble } from "@/hooks/useTextScramble";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

export function Hero() {
  const scrambledName = useTextScramble("Vladyslav Boretskyi", 900);

  return (
    <header className="flex flex-col items-start gap-6 pt-12 pb-16 md:pt-20">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col items-start gap-6 w-full"
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
          Hi, I&apos;m{" "}
          <span
            className="font-mono text-foreground"
            aria-label="Vladyslav Boretskyi"
          >
            {scrambledName}
          </span>
          .
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

        {/* Terminal code snippet */}
        <motion.div
          variants={item}
          className="mt-8 w-full max-w-2xl overflow-hidden rounded-xl border border-white/10 bg-black/50 shadow-2xl backdrop-blur-md"
          aria-hidden="true"
        >
          {/* Mac window chrome */}
          <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
            <div className="h-3 w-3 rounded-full bg-red-500/80" />
            <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
            <div className="h-3 w-3 rounded-full bg-green-500/80" />
            <span className="ml-2 font-mono text-xs text-muted-foreground/60">
              engineer.ts
            </span>
          </div>

          {/* Syntax-highlighted code */}
          <div className="p-5 font-mono text-sm leading-7">
            {/* Line 1 */}
            <div>
              <span className="text-purple-400">import</span>
              <span className="text-foreground/80"> {"{ "}</span>
              <span className="text-blue-400">initArchitecture</span>
              <span className="text-foreground/80">{" }"}</span>
              <span className="text-purple-400"> from </span>
              <span className="text-green-400">&apos;@clickup/core&apos;</span>
              <span className="text-foreground/80">;</span>
            </div>

            {/* Blank line */}
            <div>&nbsp;</div>

            {/* Comment line */}
            <div className="text-white/30">
              {"// Current fuel source 🥃"}
            </div>

            {/* fuel line */}
            <div>
              <span className="text-purple-400">const </span>
              <span className="text-blue-400">fuel</span>
              <span className="text-foreground/80"> = </span>
              <span className="text-green-400">&quot;кава з віскі&quot;</span>
              <span className="text-foreground/80">;</span>
            </div>

            {/* Blank line */}
            <div>&nbsp;</div>

            {/* developer object */}
            <div>
              <span className="text-purple-400">const </span>
              <span className="text-blue-400">developer</span>
              <span className="text-foreground/80"> = {"{"}</span>
            </div>
            <div className="pl-6">
              <span className="text-foreground/60">role</span>
              <span className="text-foreground/80">: </span>
              <span className="text-green-400">&apos;Staff Frontend Engineer&apos;</span>
              <span className="text-foreground/80">,</span>
            </div>
            <div className="pl-6">
              <span className="text-foreground/60">vitals</span>
              <span className="text-foreground/80">: </span>
              <span className="text-orange-400">&apos;100/100&apos;</span>
              <span className="text-foreground/80">,</span>
            </div>
            <div className="pl-6">
              <span className="text-foreground/60">status</span>
              <span className="text-foreground/80">: </span>
              <span className="text-yellow-400">&apos;Deploying...&apos;</span>
            </div>
            <div>
              <span className="text-foreground/80">{"}"}</span>
              <span className="text-foreground/80">;</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </header>
  );
}
