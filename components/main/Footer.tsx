
"use client";

import { Socials } from "@/constants";
import Image from "next/image";
import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";
import siteContent from "@/constants/navbar-content.json";

const Footer = () => {
  const footer = siteContent.footer;

  return (
    <footer className="relative overflow-hidden bg-gray-900 px-5 py-12 text-gray-300 md:px-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8">
        {/* Branding and Contact Information */}
        <div className="flex w-full flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          {/* Branding */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-white">
              {footer.name}
            </h2>

            <p className="mt-2 max-w-[580px] text-base leading-relaxed text-gray-400">
              {footer.role}
            </p>

            {/* Social Links */}
            <div className="mt-5 flex flex-wrap justify-center gap-5 md:justify-start">
              {Socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit Rohan Shrestha on ${social.name}`}
                  className="rounded-md transition-transform duration-200 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  <Image
                    src={social.src}
                    alt=""
                    width={24}
                    height={24}
                    className="h-6 w-6 object-contain"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-6">
            {/* Location */}
            <div className="flex items-center gap-3 rounded-xl bg-gray-800 px-5 py-3 shadow-md transition-colors hover:bg-gray-700">
              <div className="flex items-center justify-center rounded-lg bg-purple-500/10 p-3">
                <MapPinIcon className="h-6 w-6 text-purple-400" />
              </div>

              <span className="text-sm text-white md:text-base">
                {footer.location}
              </span>
            </div>

            {/* Email */}
            <a
              href="mailto:shrestharohan495@gmail.com"
              aria-label={`Email Rohan Shrestha at ${footer.email}`}
              className="flex items-center gap-3 rounded-xl bg-gray-800 px-5 py-3 shadow-md transition-colors hover:bg-gray-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <div className="flex items-center justify-center rounded-lg bg-cyan-500/10 p-3">
                <EnvelopeIcon className="h-6 w-6 text-cyan-400" />
              </div>

              <span className="text-sm text-white md:text-base">
                {footer.email}
              </span>
            </a>
          </div>
        </div>

        {/* Footer Navigation */}
        <nav
          aria-label="Footer navigation"
          className="mt-4 flex flex-wrap justify-center gap-x-8 gap-y-4 text-center text-gray-400"
        >
          {footer.links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              aria-label={`Navigate to ${link.name}`}
              className="text-sm transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 md:text-base"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Divider */}
        <div className="h-px w-full bg-gray-700" />

        {/* Copyright */}
        <div className="text-center text-sm text-gray-500">
          {footer.copyright.replace(
            "{year}",
            String(new Date().getFullYear())
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
