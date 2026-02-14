"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-12 px-6 md:px-10 mt-[80px] md:mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start ">
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-10 text-3xl md:text-3xl text-white max-w-[600px] w-auto h-auto"
        >
          <span>Hello, I am</span>
        </motion.div>
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 text-4xl md:text-5xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>Rohan Shrestha👋</span>
        </motion.div>

        <div className="flex gap-4 flex-wrap">
          <motion.div
            variants={slideInFromTop}
            className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
          >
            <h1 className="Welcome-text text-[13px]">Flutter Developer</h1>
          </motion.div>

          {/* <motion.div
            variants={slideInFromTop}
            className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
          >
            <h1 className="Welcome-text text-[13px]">Django Developer</h1>
          </motion.div>

          <motion.div
            variants={slideInFromTop}
            className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
          >
            <h1 className="Welcome-text text-[13px]">UI/UX Enthusiast</h1>
          </motion.div>
          <motion.div
            variants={slideInFromTop}
            className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
          >
            <h1 className="Welcome-text text-[13px]">Kotlin Developer</h1>
          </motion.div> */}
        </div>
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="text-gray-300 text-4xl md:text-2xl font-bold max-w-[600px] w-auto h-auto mt-10"
        >
          Architecting experiences through
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            Code{" "}
          </span>
        </motion.div>
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base md:text-lg text-gray-400 my-0 max-w-[600px]"
        >
          I&apos;m Rohan Shrestha a product-driven developer who engineers
          scalable systems and meaningful user experiences. I believe great
          software isn&apos;t just written — it&apos;s architected with
          intention, performance, and long-term vision.
        </motion.p>
        <motion.div variants={slideInFromLeft(1)} className="flex gap-4">
          <motion.a
            className="py-2 button-primary text-center text-white cursor-pointer rounded-lg w-[200px]"
            href="#contact"
          >
            Hire ME!
          </motion.a>

          <motion.a className="py-2 button-primary text-center text-white cursor-pointer rounded-lg w-[200px]">
            Download CV
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full md:w-auto flex justify-center items-center flex-shrink-0"
      >
        <div className="relative w-[160px] h-[200px] sm:w-[260px] sm:h-[300px] md:w-[340px] md:h-[380px]">
          <div
            className="absolute inset-0 overflow-hidden shadow-2xl"
            style={{
              clipPath:
                "polygon(6% 0%, 94% 0%, 100% 6%, 100% 94%, 94% 100%, 6% 100%, 0% 94%, 0% 6%)",
              borderRadius: "40px",
            }}
          >
            <Image
              src="/rohan.svg"
              alt="Rohan portfolio"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              sizes="(max-width: 640px) 260px, (max-width: 768px) 300px, 340px"
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
