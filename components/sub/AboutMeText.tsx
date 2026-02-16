"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromTop,
} from "@/utils/motion";

const AboutMeText = () => {
  return (
    // <div className="w-full h-auto flex flex-col items-center justify-center">
      <div className="relative pt-20 pb-[5px] md:pb-10 px-4">
        <motion.div
          variants={slideInFromTop}
          className="text-[40px] font-medium text-center text-gray-200 "
        >
          About
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            Me{" "}
          </span>
          <div className="h-1 w-24 bg-white/80 rounded-full my-1 mx-auto"></div>
        </motion.div>
      </div>
 
  );
};

export default AboutMeText;
