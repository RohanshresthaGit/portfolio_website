"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Props {
  src: string;
  width: number;
  height: number;
  index: number;
  alt: string;
}

const SkillDataProvider = ({ src, width, height, alt}: Props) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="flex-shrink-0 px-5 md:px-10 relative flex items-center justify-center overflow-visible"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ scale: 1.15, y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {hovered && (
        <motion.div
          className="absolute inset-0 rounded-full pointer-events-none"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1.3 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            background: "radial-gradient(circle, rgba(186,156,255,0.25) 0%, transparent 70%)",
            filter: "blur(8px)",
          }}
        />
      )}

      <div
        className="relative flex items-center justify-center rounded-2xl p-4 transition-all duration-300"
        style={{
          background: hovered
            ? "linear-gradient(180deg, rgba(60,8,126,0) 0%, rgba(60,8,126,0.32) 100%), rgba(113,47,255,0.18)"
            : "rgba(113,47,255,0.06)",
          boxShadow: hovered
            ? "inset 0 0 12px #bf97ff3d, 0 0 20px rgba(186,156,255,0.15)"
            : "inset 0 -7px 11px #a48fff0f",
          border: hovered
            ? "1px solid rgba(191,151,255,0.35)"
            : "1px solid rgba(191,151,255,0.1)",
          backdropFilter: "blur(6px)",
        }}
      >
        <Image
          src={src}
          width={40}
          height={40}
          alt={alt}
          className="object-contain w-10 h-10"
          style={{
            filter: hovered
              ? "drop-shadow(0 0 8px rgba(186,156,255,0.6)) brightness(1.1)"
              : "brightness(0.85) saturate(0.9)",
            transition: "filter 0.3s ease",
          }}
        />
      </div>
    </motion.div>
  );
};

export default SkillDataProvider;