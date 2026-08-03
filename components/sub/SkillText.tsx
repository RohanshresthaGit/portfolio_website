"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import siteContent from "@/constants/navbar-content.json";

const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <motion.div
        variants={slideInFromTop}
        className="text-[32px] md:text-[40px] font-medium text-center text-gray-200"
      >
        {siteContent.skills.title}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          {" "}&{" "}
        </span>
        {siteContent.skills.subtitle}
      </motion.div>
       <div className="h-1 w-48 bg-white/80 rounded-full mt-3 mx-auto" />
    </div>
  );
};

export default SkillText;