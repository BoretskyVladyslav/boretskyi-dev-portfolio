import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-24">
      <Hero />
      <Projects />
      <Experience />
    </div>
  );
}
