"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { useTextScramble } from "@/hooks/useTextScramble";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

export function Hero() {
  const scrambledName = useTextScramble("Vladyslav Boretskyi", 900);

  return (
    <header className="flex flex-col items-start gap-6 pt-8 pb-16 md:pt-14">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col items-start gap-5 w-full"
      >
        {/* Terminal prompt badge */}
        <motion.div variants={item} className="flex items-center gap-2">
          <span className="text-[#4AF626] text-sm">user@boretskyi:~</span>
          <span className="text-muted-foreground text-sm">$</span>
          <span className="text-foreground/60 text-sm">whoami</span>
        </motion.div>

        {/* Main heading with scrambled name + blinking cursor */}
        <motion.h1
          variants={item}
          className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl"
        >
          Hi, I&apos;m{" "}
          <span
            className="text-[#4AF626]"
            aria-label="Vladyslav Boretskyi"
          >
            {scrambledName}
          </span>
          <span className="cursor-blink" aria-hidden="true">█</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="max-w-2xl text-base leading-relaxed text-muted-foreground"
        >
          <span className="text-[#4AF626]">{"//"}</span>{" "}
          Frontend Engineer specializing in React, Next.js, and
          high-performance web applications (100/100 Core Web Vitals).
        </motion.p>

        <motion.nav
          variants={item}
          className="flex flex-wrap items-center gap-4"
          aria-label="Primary actions"
        >
          <motion.a
            whileHover={{ color: "#000", backgroundColor: "#4AF626" }}
            whileTap={{ scale: 0.97 }}
            href="#projects"
            className="group inline-flex h-9 items-center justify-center border border-[#4AF626]/50 px-5 text-sm text-[#4AF626] transition-colors duration-150 hover:text-black hover:bg-[#4AF626]"
          >
            ./projects
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </motion.a>
          <motion.a
            whileHover={{ color: "#000", backgroundColor: "#4AF626" }}
            whileTap={{ scale: 0.97 }}
            href="https://github.com/BoretskyVladyslav"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center justify-center border border-white/20 px-5 text-sm text-foreground transition-colors duration-150 hover:text-black hover:bg-[#4AF626] hover:border-[#4AF626]"
          >
            <GithubIcon className="mr-2 h-4 w-4" />
            github
          </motion.a>
        </motion.nav>

        {/* Terminal code block — raw text header instead of mac dots */}
        <motion.div
          variants={item}
          className="mt-6 w-full max-w-2xl border border-white/15"
          aria-hidden="true"
        >
          {/* Raw text-based window header */}
          <div className="flex items-center justify-between border-b border-white/15 bg-white/5 px-4 py-2">
            <span className="text-[#4AF626] text-xs">[ user@boretskyi:~ ]</span>
            <span className="text-muted-foreground text-xs hover:text-red-400 cursor-default transition-colors">[x]</span>
          </div>

          {/* Syntax-highlighted code */}
          <div className="p-5 text-sm leading-7 bg-black">
            <div>
              <span className="text-purple-400">import</span>
              <span className="text-foreground/80"> {"{ "}</span>
              <span className="text-[#4AF626]">initArchitecture</span>
              <span className="text-foreground/80">{" }"}</span>
              <span className="text-purple-400"> from </span>
              <span className="text-amber-400">&apos;@clickup/core&apos;</span>
              <span className="text-foreground/80">;</span>
            </div>
            <div>&nbsp;</div>
            <div className="text-white/30">{"// Current fuel source 🥃"}</div>
            <div>
              <span className="text-purple-400">const </span>
              <span className="text-[#4AF626]">fuel</span>
              <span className="text-foreground/80"> = </span>
              <span className="text-amber-400">&quot;кава з віскі&quot;</span>
              <span className="text-foreground/80">;</span>
            </div>
            <div>&nbsp;</div>
            <div>
              <span className="text-purple-400">const </span>
              <span className="text-[#4AF626]">developer</span>
              <span className="text-foreground/80"> = {"{"}</span>
            </div>
            <div className="pl-6">
              <span className="text-white/50">role</span>
              <span className="text-foreground/80">: </span>
              <span className="text-amber-400">&apos;Staff Frontend Engineer&apos;</span>
              <span className="text-foreground/80">,</span>
            </div>
            <div className="pl-6">
              <span className="text-white/50">vitals</span>
              <span className="text-foreground/80">: </span>
              <span className="text-[#4AF626]">&apos;100/100&apos;</span>
              <span className="text-foreground/80">,</span>
            </div>
            <div className="pl-6">
              <span className="text-white/50">status</span>
              <span className="text-foreground/80">: </span>
              <span className="text-amber-400">&apos;Deploying...&apos;</span>
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
