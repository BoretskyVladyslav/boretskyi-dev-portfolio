"use client";

import { motion } from "framer-motion";

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

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="flex flex-col gap-12 pt-16 md:pt-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
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
          <div
            className="flex flex-col gap-8 border-l border-white/10 pl-6"
            role="list"
          >
            {experience.map((item) => (
              <motion.div
                key={`${item.company}-${item.role}`}
                role="listitem"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative flex flex-col gap-2"
              >
                <div
                  className="absolute -left-[31px] top-1.5 h-2 w-2 rounded-full border border-white/20 bg-background"
                  aria-hidden="true"
                />
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
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <h3 className="text-lg font-medium text-foreground">Education</h3>
          <div
            className="flex flex-col gap-8 border-l border-white/10 pl-6"
            role="list"
          >
            {education.map((item) => (
              <motion.div
                key={`${item.school}-${item.degree}`}
                role="listitem"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative flex flex-col gap-2"
              >
                <div
                  className="absolute -left-[31px] top-1.5 h-2 w-2 rounded-full border border-white/20 bg-background"
                  aria-hidden="true"
                />
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h4 className="font-medium text-foreground">{item.degree}</h4>
                  <time className="font-mono text-xs text-muted-foreground">
                    {item.date}
                  </time>
                </div>
                <div className="text-sm text-muted-foreground">
                  {item.school}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
