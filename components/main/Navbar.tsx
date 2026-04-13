"use client";

import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/#", id: "home" },
  { name: "Skills", href: "/#skills", id: "skills" },
  { name: "Experience", href: "/#experience", id: "experience" },
  {
    name: "Blogs",
    href: "/#blog",
    id: "blog",
  },
  { name: "Contact", href: "/#contact", id: "contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();

  // Restore active section from URL hash on mount and on route change
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && navLinks.some((l) => l.id === hash)) {
      setActiveSection(hash);
    } else {
      setActiveSection("home");
    }
  }, [pathname, navLinks]);

  // Re-attach IntersectionObservers on route change
  useEffect(() => {
    // Only run observers on the home page
    if (pathname !== "/") return;

    const sectionIds = navLinks
      .filter((l) => l.id !== "blogs")
      .map((l) => l.id);

    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const elId = id === "home" ? "about-me" : id;
      const el = document.getElementById(elId);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActiveSection(id);
          });
        },
        { threshold: 0.3, rootMargin: "-60px 0px -30% 0px" },
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [pathname, navLinks]);

  // Listen for popstate (browser back/forward)
  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && navLinks.some((l) => l.id === hash)) {
        setActiveSection(hash);
      } else {
        setActiveSection("home");
      }
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [navLinks]);

  return (
    <div className="fixed inset-x-0 top-0 h-[65px] box-border shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 sm:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-0">
        {/* Logo */}
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center gap-2"
        >
          <Image
            src="/my_image.jpeg"
            alt="Rohan Shrestha"
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="font-bold text-gray-300 text-sm md:text-base">
            Rohan Shrestha
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex w-full max-w-[500px] h-full flex-row items-center justify-between lg:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full">
            {navLinks.map((link) => {
              const active = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.id === "blogs" ? "_blank" : undefined}
                  rel={link.id === "blogs" ? "noopener noreferrer" : undefined}
                  className="relative group cursor-pointer text-sm px-1 pb-1 transition-colors duration-300"
                  style={{ color: active ? "#ba9cff" : "rgb(229,231,235)" }}
                >
                  {link.name}

                  {/* Active underline */}
                  <span
                    className="absolute bottom-0 left-0 h-[2px] rounded-full transition-all duration-300"
                    style={{
                      background: "linear-gradient(90deg, #ba9cff, #9cb2ff)",
                      width: active ? "100%" : "0%",
                    }}
                  />

                  {/* Hover underline — only when not active */}
                  {!active && (
                    <span
                      className="absolute bottom-0 left-0 h-[2px] rounded-full w-0 group-hover:w-full transition-all duration-300"
                      style={{
                        background:
                          "linear-gradient(90deg, rgba(186,156,255,0.5), rgba(156,178,255,0.5))",
                      }}
                    />
                  )}
                </a>
              );
            })}
          </div>
        </div>

        {/* Desktop Socials */}
        <div className="hidden lg:flex flex-row gap-5">
          {Socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-70 hover:opacity-100 transition-opacity duration-300"
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

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden flex items-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <XMarkIcon className="h-6 w-6 text-gray-300" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-gray-300" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-[65px] left-0 right-0 bg-[#090321]/95 backdrop-blur-md border-b border-[#7042f861] py-6 px-6">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => {
              const active = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.id === "blogs" ? "_blank" : undefined}
                  rel={link.id === "blogs" ? "noopener noreferrer" : undefined}
                  className="relative group w-fit text-lg transition-colors duration-300 pb-1"
                  style={{ color: active ? "#ba9cff" : "rgb(209,213,219)" }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}

                  {/* Active underline */}
                  <span
                    className="absolute bottom-0 left-0 h-[2px] rounded-full transition-all duration-300"
                    style={{
                      background: "linear-gradient(90deg, #ba9cff, #9cb2ff)",
                      width: active ? "100%" : "0%",
                    }}
                  />

                  {/* Hover underline */}
                  {!active && (
                    <span
                      className="absolute bottom-0 left-0 h-[2px] rounded-full w-0 group-hover:w-full transition-all duration-300"
                      style={{
                        background:
                          "linear-gradient(90deg, rgba(186,156,255,0.5), rgba(156,178,255,0.5))",
                      }}
                    />
                  )}
                </a>
              );
            })}

            {/* Mobile Socials */}
            <div className="flex flex-row gap-5 pt-4 border-t border-[#7042f861]">
              {Socials.map((social) => (
                  <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-70 hover:opacity-100 transition-opacity duration-300"
                >
                  <Image
                    src={social.src}
                    alt={social.name}
                    width={24}
                    height={24}
                    className="cursor-pointer"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;