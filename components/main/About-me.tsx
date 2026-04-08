import Image from "next/image";
import AboutMeText from "../sub/AboutMeText";

const AboutMe = () => {
  return (
    <section id="aboutMe" className="pb-20 px-4">
      <div className="max-w-5xl mx-auto space-y-4">
        <AboutMeText />
        {/* Header - ListTile Style */}
        <div className="flex items-center gap-6">
          <div className="relative w-20 h-20 md:w-24 md:h-24">
            <Image
              src="/rohan.svg"
              alt="Rohan Shrestha"
              fill
              className="rounded-full object-cover border-4 border-white bg-gradient-to-r from-purple-500 to-cyan-500"
            />
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-white">
              Rohan Shrestha
            </h2>
            <p className="text-white/70 text-sm md:text-base mt-1 italic">
              Flutter Developer
            </p>
          </div>
        </div>

        {/* Refined Divider */}
        <div className="h-1 w-full bg-white/70 rounded-full"></div>

        {/* Content */}
        <div className=" text-white/80 leading-relaxed text-base md:text-lg">
          <p className="mb-6">
            Currently pursuing my Bachelor&apos;s degree in Computer Application at
            Tribhuwan University. With a strong passion for software
            development, I specialize in Flutter and have experience building
            maintainable, scalable and robust mobile applications. I am
            dedicated to crafting high-quality, user-friendly apps that solve
            real-world problems and provide seamless experiences for users.
          </p>
          <div>
            {/* <h3 className="text-white font-medium mb-3 mt-8">
              My Thoughts as a Developer
            </h3> */}
            <div className="max-w-5xl mx-auto mt-8">
              {/* Card Container */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-lg">
                <p className="text-white/80 leading-relaxed text-base md:text-lg">
                  A great software is built on clarity, architecture,
                  and deep understanding not just syntax that compiles. Every
                  line of code must be focused on performance,
                  maintainability, and anticipating future changes, ensuring the
                  system remains scalable, reliable, and easy to evolve over
                  time. A great developer isn&apos;t just a coder they are an architect.
                </p>
                <p className="text-white/60 text-sm text-right mt-2">
                — Rohan Shrestha
              </p>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
