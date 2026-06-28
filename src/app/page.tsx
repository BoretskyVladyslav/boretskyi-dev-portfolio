import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-8">
      <Hero />
      <Projects />
      <Experience />
      <Footer />
    </div>
  );
}
