// import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
// import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Contact from "@/components/main/Contact";
import AboutMe from "@/components/main/About-me";
import Experience from "@/components/main/Experience";
// import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Experience />
        <Contact />
        {/* <AboutMe /> */}
        {/* <Projects /> */}
        {/* <Encryption /> */}
      </div>
    </main>
  );
}
