import Hero from "@/components/main/Hero";
import Skills from "@/components/main/Skills";
import Contact from "@/components/main/Contact";
import Experience from "@/components/main/Experience";
import Blog from "@/components/main/blogs";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Experience />
        <Blog />
        <Contact />
      </div>
    </main>
  );
}
