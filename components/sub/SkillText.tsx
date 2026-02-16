"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
// import { SparklesIcon } from '@heroicons/react/24/solid'

const SkillText = () => {
  return (
    // <div className="w-full h-auto flex flex-col items-center justify-center">
      <div className="absolute w-auto h-auto top-0 z-[5]">
        <motion.div
          variants={slideInFromTop}
          className="text-[40px] font-medium text-center text-gray-200 "
        >
          Skills
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            &{" "}
          </span>
          Technologies
        </motion.div>
          <div className="h-1 w-3/4 bg-white/80 rounded-full my-2 mx-auto"></div>

      </div>
      // {/* <motion.div
      //   variants={slideInFromLeft(0.5)}
      //   className='text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]'
      //   >
      //       Technologies behind the Magic.
      //   </motion.div>
      //   <motion.div
      //   variants={slideInFromRight(0.5)}
      //   className='cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center'
      //   >
      //       Never miss a task, deadline or idea
      //   </motion.div> */}
    // </div>
  );
};

export default SkillText;
