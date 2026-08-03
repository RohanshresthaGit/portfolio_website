import Image from "next/image";
import AboutMeText from "../sub/AboutMeText";
import siteContent from "@/constants/navbar-content.json";

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
              {siteContent.about.name}
            </h2>
            <p className="text-white/70 text-sm md:text-base mt-1 italic">
              {siteContent.about.role}
            </p>
          </div>
        </div>

        {/* Refined Divider */}
        <div className="h-1 w-full bg-white/70 rounded-full"></div>

        {/* Content */}
        <div className=" text-white/80 leading-relaxed text-base md:text-lg">
          <p className="mb-6">
            {siteContent.about.intro}
          </p>
          <div>
            {/* <h3 className="text-white font-medium mb-3 mt-8">
              My Thoughts as a Developer
            </h3> */}
            <div className="max-w-5xl mx-auto mt-8">
              {/* Card Container */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-lg">
                <p className="text-white/80 leading-relaxed text-base md:text-lg">
                  {siteContent.about.quote}
                </p>
                <p className="text-white/60 text-sm text-right mt-2">
                — {siteContent.about.quoteAuthor}
              </p>
                <p className="text-white/60 text-sm mt-4">
                  {siteContent.about.certifications}
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
