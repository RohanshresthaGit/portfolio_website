"use client";
import { Socials } from "@/constants";
import Image from "next/image";
import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-5 md:px-20 relative overflow-hidden ">
      {/* Optional: Starry background */}
      <div className="absolute inset-0 bg-[url('/space-bg.png')] bg-cover bg-center opacity-20 -z-10"></div>

      <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
        {/* Branding */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between w-full gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-white">Rohan Shrestha</h2>
            <p className="mt-2 text-base text-gray-300">
              Flutter Developer | Mobile App Developer
            </p>
                    <div className="flex flex-wrap justify-center md:justify-start gap-5 mt-5">
                      {Socials.map((social) => (
                        <a
                          key={social.name}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image
                            src={social.src}
                            alt={social.name}
                            width={24}
                            height={24}
                          />
                        </a>
                      ))}
                    </div>
          </div>

          {/* Contact info inside cards */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6">
            {/* Location Card */}
            <div className="flex items-center gap-3 px-5 py-3 bg-gray-800 rounded-xl shadow-md hover:bg-gray-700 transition-colors lg:cursor-pointer">
              <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500/20 to-cyan-500/20 flex items-center justify-center">
                <MapPinIcon className="h-6 w-6 text-purple-500" />
              </div>
              <span className="text-sm md:text-base text-white">
                Kathmandu, Nepal
              </span>
            </div>

            {/* Email Card */}
            <a
              href="mailto:shrestharohan495@gmail.com"
              className="flex items-center gap-3 px-5 py-3 bg-gray-800 rounded-xl shadow-md hover:bg-gray-700 transition-colors"
            >
              <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500/20 to-cyan-500/20 flex items-center justify-center">
                <EnvelopeIcon className="h-6 w-6 text-cyan-500" />
              </div>
              <span className="text-sm md:text-base text-white">
                shrestharohan495@gmail.com
              </span>
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-8 text-center mt-6 text-gray-400">
          <a href="/#" className="text-sm md:text-base hover:text-white transition-colors">
            Home
          </a>
          <a href="/#skills" className="text-sm md:text-base hover:text-white transition-colors">
            Skills
          </a>
          <a href="/#experience" className="text-sm md:text-base hover:text-white transition-colors">
            Experience
          </a>

          {/* <a href="/#projects" className="text-sm md:text-base hover:text-white transition-colors">
            Projects
          </a> */}
          <a href="/#blog" className="text-sm md:text-base hover:text-white transition-colors">
            Blogs
          </a>
          <a href="/#contact" className="text-sm md:text-base hover:text-white transition-colors">
            Contact
          </a>
          <a
            href="/privacy-policy"
            className="text-sm md:text-base hover:text-white transition-colors"
          >
            Privacy Policy
          </a>
        </div>

        {/* Bottom copyright */}
        <div className="mt-6 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Rohan Shrestha. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
