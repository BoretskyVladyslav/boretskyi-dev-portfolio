"use client";

import { motion, type Variants } from "framer-motion";
import { SpotlightCard } from "./SpotlightCard";

interface ExperienceItem {
  role: string;
  company: string;
  date: string;
  description: string;
}

interface EducationItem {
  degree: string;
  school: string;
  date: string;
}

const experience: readonly ExperienceItem[] = [
  {
    role: "Front-End Engineer",
    company: "Freelance / Direct Clients",
    date: "03/2024 – Present",
    description:
      "Deployed 6+ production web apps end-to-end, translating complex B2B client requirements into scalable Next.js architectures and accelerating time-to-market by 30%.",
  },
  {
    role: "Front-End Developer",
    company: "Tech Defenders Inc.",
    date: "01/2024 – 12/2024",
    description:
      "Led frontend development for international projects, owning frontend architectural decisions and establishing strict code quality benchmarks.",
  },
];

const education: readonly EducationItem[] = [
  {
    degree: "Software Engineering",
    school: "IT STEP Computer Academy",
    date: "09/2024 – Present",
  },
  {
    degree: "Software Engineering",
    school: "GOIT",
    date: "06/2023 – 06/2024",
  },
];

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const dotVariants: Variants = {
  hidden: { opacity: 0, backgroundColor: "rgba(255,255,255,0.2)" },
  show: {
    opacity: 1,
    backgroundColor: "rgba(255,255,255,0.2)",
    transition: { duration: 0.3, ease: "easeOut" },
  },
  hover: {
    backgroundColor: "rgba(255,255,255,0.8)",
    transition: { duration: 0.2 },
  },
};

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="flex flex-col gap-12 pt-16 md:pt-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <h2
          id="experience-heading"
          className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl"
        >
          Experience & Education
        </h2>
        <p className="mt-2 text-muted-foreground">
          My professional journey and academic background.
        </p>
      </motion.div>

      <div className="grid gap-12 md:grid-cols-2">
        <div className="flex flex-col gap-8">
          <h3 className="text-lg font-medium text-foreground">Experience</h3>
          <div className="flex flex-col" role="list">
            {experience.map((item, index) => {
              const isLast = index === experience.length - 1;
              return (
                <SpotlightCard
                  key={`${item.company}-${item.role}`}
                  role="listitem"
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="show"
                  whileHover="hover"
                  viewport={{ once: true, margin: "-100px" }}
                  className="group relative flex gap-6 rounded-xl border border-transparent p-4 -mx-4 transition-colors hover:border-white/10 hover:bg-white/5"
                >
                  <div className="flex flex-col items-center">
                    <motion.div
                      variants={dotVariants}
                      className="mt-1.5 h-2 w-2 shrink-0 rounded-[2px]"
                      aria-hidden="true"
                    />
                    {!isLast && (
                      <div
                        className="mt-2 w-px grow bg-white/10"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  <div className={`flex flex-col gap-2 relative z-10 pointer-events-none ${!isLast ? "pb-8" : ""}`}>
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h4 className="font-medium text-foreground">{item.role}</h4>
                      <time className="font-mono text-xs text-muted-foreground">
                        {item.date}
                      </time>
                    </div>
                    <div className="text-sm font-medium text-muted-foreground">
                      {item.company}
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </SpotlightCard>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <h3 className="text-lg font-medium text-foreground">Education</h3>
          <div className="flex flex-col" role="list">
            {education.map((item, index) => {
              const isLast = index === education.length - 1;
              return (
                <SpotlightCard
                  key={`${item.school}-${item.degree}`}
                  role="listitem"
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="show"
                  whileHover="hover"
                  viewport={{ once: true, margin: "-100px" }}
                  className="group relative flex gap-6 rounded-xl border border-transparent p-4 -mx-4 transition-colors hover:border-white/10 hover:bg-white/5"
                >
                  <div className="flex flex-col items-center">
                    <motion.div
                      variants={dotVariants}
                      className="mt-1.5 h-2 w-2 shrink-0 rounded-[2px]"
                      aria-hidden="true"
                    />
                    {!isLast && (
                      <div
                        className="mt-2 w-px grow bg-white/10"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  <div className={`flex flex-col gap-2 relative z-10 pointer-events-none ${!isLast ? "pb-8" : ""}`}>
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h4 className="font-medium text-foreground">{item.degree}</h4>
                      <time className="font-mono text-xs text-muted-foreground">
                        {item.date}
                      </time>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {item.school}
                    </div>
                  </div>
                </SpotlightCard>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
