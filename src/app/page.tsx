import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <main className="flex flex-col gap-16">
        <Projects />
        <Experience />
      </main>
      <Footer />
    </>
  );
}
