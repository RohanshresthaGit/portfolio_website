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
      className="flex flex-row items-center justify-center px-10 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">


        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-5xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Architecting experiences through
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Code{" "}
            </span>

          </span>
        </motion.div>

        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          {/* <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" /> */}
          <h1 className="Welcome-text text-[13px]">
            Flutter Developer
          </h1>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m a product-driven developer who engineers scalable systems and meaningful user experiences. I believe great software isn&apos;t just written — it&apos;s architected with intention, performance, and long-term vision.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Hire ME!
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <div className="relative w-[300px] h-[300px] md:w-[380px] md:h-[380px]">
          <div
            className="absolute inset-0 overflow-hidden shadow-2xl"
            style={{ clipPath: 'polygon(0 12%, 100% 0, 100% 88%, 0 100%)', borderRadius: '28px' }}
          >
            <Image
              src="/my_image.jpeg"
              alt="work icons"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 300px, 380px"
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
