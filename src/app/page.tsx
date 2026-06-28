import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      <Hero />
      <Projects />
    </div>
  );
}
