"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";
import Image from "next/image";
import siteContent from "@/constants/navbar-content.json";

const roles = siteContent.hero.roles;

const TypingText = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const full = roles[currentRole];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayed.length < full.length) {
      timeout = setTimeout(
        () => setDisplayed(full.slice(0, displayed.length + 1)),
        80,
      );
    } else if (!isDeleting && displayed.length === full.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(
        () => setDisplayed(full.slice(0, displayed.length - 1)),
        45,
      );
    } else {
      setIsDeleting(false);
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, currentRole]);

  return (
    <span className="inline-flex items-center gap-[2px]">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-bold">
        {displayed}
      </span>
      <span
        className="inline-block w-[2px] h-[1em] bg-purple-400 ml-[1px] align-middle"
        style={{ animation: "blink 1s step-end infinite" }}
      />
      <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
    </span>
  );
};

const HeroContent = () => {
  const [isInteractive, setIsInteractive] = useState(false);

  useEffect(() => {
    const enable = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    setIsInteractive(enable);
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-10 lg:gap-16 px-5 sm:px-8 lg:px-24 pt-32 sm:pt-36 lg:pt-32 pb-10 mx-auto"
      style={{ maxWidth: "1300px" }}
    >
      {/* Left content */}
      <div className="w-full lg:w-[55%] flex flex-col gap-3 justify-center items-center lg:items-start text-center lg:text-start order-2 lg:order-1">
        <motion.div
          variants={slideInFromLeft(0.2)}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-white"
        >
          {siteContent.hero.greeting}
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.3)}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
        >
          {siteContent.hero.name}
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.4)}
          className="text-xl md:text-2xl font-bold text-white flex flex-wrap items-center justify-center md:justify-start gap-x-2 mt-1"
        >
          <span>a</span>
          <TypingText />
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.6)}
          className="text-sm md:text-base lg:text-[17px] text-gray-400 leading-relaxed text-justify max-w-[580px] mt-2"
        >
          {siteContent.hero.description}
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={slideInFromLeft(0.8)}
          className="flex gap-4 mt-5 flex-wrap justify-center md:justify-start"
        >
          {/* Work with me — solid purple */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center justify-center text-white font-semibold rounded-xl text-sm md:text-base w-[160px] md:w-[180px] py-3 tracking-wide transition-all"
            style={{
              background: "linear-gradient(135deg, #7042f8, #9b6dff)",
              boxShadow:
                "0 4px 20px rgba(112,66,248,0.5), inset 0 1px 0 rgba(255,255,255,0.1)",
            }}
          >
            {siteContent.hero.primaryCta}
          </motion.a>

          {/* Download CV — outlined */}
          <motion.a
            href={siteContent.hero.secondaryLink}
            download={true}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center justify-center text-white font-semibold rounded-xl text-sm md:text-base w-[160px] md:w-[180px] py-3 tracking-wide transition-all"
            style={{
              background: "transparent",
              border: "1.5px solid rgba(112,66,248,0.7)",
              boxShadow:
                "0 4px 16px rgba(112,66,248,0.2), inset 0 0 12px rgba(112,66,248,0.08)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background =
                "rgba(112,66,248,0.15)";
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 4px 20px rgba(112,66,248,0.35), inset 0 0 16px rgba(112,66,248,0.15)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 4px 16px rgba(112,66,248,0.2), inset 0 0 12px rgba(112,66,248,0.08)";
            }}
          >
            {siteContent.hero.secondaryCta}
          </motion.a>
        </motion.div>
      </div>

      {/* Right — image */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full lg:w-[45%] flex justify-center lg:justify-end items-center flex-shrink-0 order-1 lg:order-2"
      >
        {/* Floating animation wrapper */}
        <motion.div
          animate={{ y: [0, -14, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        >
          <motion.div
            className="relative w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[340px] md:h-[340px] lg:w-[380px] lg:h-[380px]"
            onMouseMove={isInteractive ? (e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = (e.clientX - rect.left) / rect.width - 0.5;
              const y = (e.clientY - rect.top) / rect.height - 0.5;
              e.currentTarget.style.transform = `rotateY(${x * 10}deg) rotateX(${y * -10}deg)`;
            } : undefined}
            onMouseLeave={isInteractive ? (e) => {
              e.currentTarget.style.transform = "rotateY(0deg) rotateX(0deg)";
            } : undefined}
            style={{
              transformStyle: "preserve-3d",
              perspective: 700,
              transition: "transform 0.2s ease-out",
            }}
          >
            {/* Ambient glow */}
            <div
              className="absolute pointer-events-none"
              style={{
                inset: "-50px",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(113,47,255,0.38) 0%, transparent 70%)",
                filter: "blur(36px)",
              }}
            />

            {/* Rotating gradient border ring */}
            <motion.div
              className="absolute pointer-events-none"
              style={{
                inset: "-4px",
                borderRadius: "50%",
                padding: "3px",
                background:
                  "conic-gradient(from 0deg, #7042f8, #ba9cff, #9cb2ff, #e59cff, #7042f8)",
              }}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  background: "#05071a",
                }}
              />
            </motion.div>

            {/* Orbiting purple dot */}
            <motion.div
              className="absolute pointer-events-none"
              style={{ inset: "-24px", borderRadius: "50%" }}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
            >
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: "#ba9cff",
                  boxShadow: "0 0 12px 4px rgba(186,156,255,0.8)",
                }}
              />
            </motion.div>

            {/* Orbiting blue dot */}
            <motion.div
              className="absolute pointer-events-none"
              style={{ inset: "-24px", borderRadius: "50%" }}
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            >
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  background: "#9cb2ff",
                  boxShadow: "0 0 8px 3px rgba(156,178,255,0.7)",
                }}
              />
            </motion.div>

            {/* Circle image */}
            <div
              className="relative w-full h-full overflow-hidden"
              style={{ borderRadius: "50%" }}
            >
              <div
                className="absolute bottom-0 left-0 right-0 pointer-events-none z-10"
                style={{
                  height: "25%",
                  background:
                    "linear-gradient(to top, rgba(5,7,26,0.8), transparent)",
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, #1a0040 0%, #05071a 100%)",
                }}
              />
              <Image
                src="/my_image.jpeg"
                alt={siteContent.hero.imageAlt}
                fill
                priority
                loading="eager"
                style={{ objectFit: "cover", objectPosition: "center" }}
                sizes="(max-width: 640px) 220px, (max-width: 768px) 280px, (max-width: 1024px) 340px, 380px"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
