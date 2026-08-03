"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";
import siteContent from "@/constants/navbar-content.json";

interface Item {
  role: string;
  company: string;
  duration: string;
  type: string;
  logo: string;
  logoColor: string;
  description: string;
  skills: string[];
}

const technicalExperience: Item[] = siteContent.experience.technicalExperience as Item[];
const communityExperience: Item[] = siteContent.experience.communityExperience as Item[];

const badgeConfig: Record<string, { bg: string; border: string; text: string }> = {
  "Full Time": {
    bg: "rgba(113,47,255,0.2)",
    border: "rgba(113,47,255,0.5)",
    text: "#ba9cff",
  },
  Internship: {
    bg: "rgba(156,178,255,0.15)",
    border: "rgba(156,178,255,0.4)",
    text: "#9cb2ff",
  },
  Freelance: {
    bg: "rgba(229,156,255,0.15)",
    border: "rgba(229,156,255,0.4)",
    text: "#e59cff",
  },
  "Open Source": {
    bg: "rgba(34,197,94,0.15)",
    border: "rgba(34,197,94,0.4)",
    text: "#4ade80",
  },
  Leadership: {
    bg: "rgba(251,191,36,0.15)",
    border: "rgba(251,191,36,0.4)",
    text: "#fbbf24",
  },
  Community: {
    bg: "rgba(56,189,248,0.15)",
    border: "rgba(56,189,248,0.4)",
    text: "#38bdf8",
  },
};

const defaultBadge = {
  bg: "rgba(113,47,255,0.15)",
  border: "rgba(113,47,255,0.4)",
  text: "#ba9cff",
};

const CardContent = ({
  item,
  expanded,
  onToggle,
}: {
  item: Item;
  expanded: boolean;
  onToggle: () => void;
}) => {
  const badge = badgeConfig[item.type] ?? defaultBadge;

  return (
    <motion.div
      className="rounded-2xl p-5 md:p-6 cursor-pointer w-full"
      style={{
        background: "rgba(10,0,30,0.7)",
        border: expanded
          ? "1px solid rgba(112,66,248,0.5)"
          : "1px solid rgba(112,66,248,0.2)",
        boxShadow: expanded
          ? "inset 0 0 24px rgba(112,66,248,0.08), 0 4px 32px rgba(0,0,0,0.3)"
          : "0 4px 20px rgba(0,0,0,0.2)",
        backdropFilter: "blur(12px)",
      }}
      onClick={onToggle}
      whileHover={{
        scale: 1.02,
        boxShadow:
          "inset 0 0 24px rgba(112,66,248,0.12), 0 8px 40px rgba(112,66,248,0.18)",
      }}
      whileTap={{ scale: 0.99 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
    >
      <div className="flex items-start gap-4">
        {/* Card Logo — rounded square with solid border */}
        <div
          className="w-14 h-14 md:w-16 md:h-16 rounded-xl flex-shrink-0 overflow-hidden"
          style={{
            background: `${item.logoColor}18`,
            border: `2px solid ${item.logoColor}`,
            boxShadow: `0 0 16px 2px ${item.logoColor}33`,
          }}
        >
          <Image
            src={item.logo}
            alt={item.company}
            width={64}
            height={64}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 flex-wrap">
            <div>
              <h3 className="text-white font-bold text-lg md:text-xl leading-tight">
                {item.role}
              </h3>
              <p
                className="text-sm md:text-base font-semibold mt-0.5"
                style={{
                  background: "linear-gradient(90deg, #ba9cff, #9cb2ff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {item.company}
              </p>
              <p className="text-gray-500 text-xs mt-1 tracking-wide">
                {item.duration}
              </p>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <span
                className="text-[11px] font-medium px-3 py-1 rounded-full"
                style={{
                  background: badge.bg,
                  border: `1px solid ${badge.border}`,
                  color: badge.text,
                }}
              >
                {item.type}
              </span>
              <motion.span
                animate={{ rotate: expanded ? 180 : 0 }}
                transition={{ duration: 0.25 }}
                className="text-gray-500 text-sm select-none"
              >
                ▾
              </motion.span>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        initial={false}
        animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        style={{ overflow: "hidden" }}
      >
        <div
          className="h-[1px] w-full my-4"
          style={{
            background: "linear-gradient(90deg, rgba(112,66,248,0.5), transparent)",
          }}
        />
        <p className="text-gray-400 text-sm md:text-[15px] leading-relaxed text-justify mb-4">
          {item.description}
        </p>
        <div>
          <p className="text-white text-sm font-semibold mb-2">Skills:</p>
          <div className="flex flex-wrap gap-2">
            {item.skills.map((skill, i) => (
              <span
                key={i}
                className="text-[12px] font-medium px-3 py-1 rounded-full"
                style={{
                  background: `${item.logoColor}18`,
                  border: `1px solid ${item.logoColor}55`,
                  color: item.logoColor,
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const MobileTimelineItem = ({
  item,
  index,
  isLast,
  defaultOpen = false,
}: {
  item: Item;
  index: number;
  isLast: boolean;
  defaultOpen?: boolean;
}) => {
  const [expanded, setExpanded] = useState(defaultOpen);
  return (
    <motion.div
      variants={slideInFromLeft(index * 0.1 + 0.2)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative flex gap-4"
    >
      <div className="flex flex-col items-center flex-shrink-0">
        {/* Mobile Logo — circle with solid border */}
        <div
          className="w-10 h-10 rounded-full flex-shrink-0 z-10 overflow-hidden"
          style={{
            background: "#0d0020",
            border: `3px solid ${item.logoColor}`,
            boxShadow: `0 0 12px 2px ${item.logoColor}44`,
          }}
        >
          <Image
            src={item.logo}
            alt={item.company}
            width={40}
            height={40}
            className="w-full h-full object-cover"
          />
        </div>

        {!isLast && (
          <div
            className="w-[1px] flex-1 mt-1"
            style={{
              background: "rgba(112,66,248,0.9)",
              minHeight: "40px",
            }}
          />
        )}
      </div>
      <div className="flex-1 pb-8 overflow-visible">
        <CardContent
          item={item}
          expanded={expanded}
          onToggle={() => setExpanded(!expanded)}
        />
      </div>
    </motion.div>
  );
};

const DesktopTimelineItem = ({
  item,
  index,
  isLast,
  defaultOpen = false,
}: {
  item: Item;
  index: number;
  isLast: boolean;
  defaultOpen?: boolean;
}) => {
  const [expanded, setExpanded] = useState(defaultOpen);
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      variants={
        isLeft
          ? slideInFromLeft(index * 0.1 + 0.2)
          : slideInFromRight(index * 0.1 + 0.2)
      }
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative flex items-center justify-center mb-12"
    >
      {/* Left */}
      <div className="w-[46%] flex justify-end pr-10 overflow-visible">
        {isLeft && (
          <div className="w-full max-w-[420px]">
            <CardContent
              item={item}
              expanded={expanded}
              onToggle={() => setExpanded(!expanded)}
            />
          </div>
        )}
      </div>

      {/* Center — circle with solid border */}
      <div className="flex-shrink-0 z-10">
        <div
          className="w-14 h-14 rounded-full overflow-hidden"
          style={{
            background: "#0d0020",
            border: `3px solid ${item.logoColor}`,
            boxShadow: `0 0 20px 4px ${item.logoColor}55`,
          }}
        >
          <Image
            src={item.logo}
            alt={item.company}
            width={56}
            height={56}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Right */}
      <div className="w-[46%] pl-10 overflow-visible">
        {!isLeft && (
          <div className="w-full max-w-[420px]">
            <CardContent
              item={item}
              expanded={expanded}
              onToggle={() => setExpanded(!expanded)}
            />
          </div>
        )}
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const [tab, setTab] = useState<"technical" | "community">("technical");
  const data = tab === "technical" ? technicalExperience : communityExperience;

  return (
    <section
      id="experience"
      className="w-full pb-20 px-6 md:px-16 lg:px-24 scroll-mt-20 relative overflow-hidden"
    >
      <div
        className="absolute top-20 left-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(113,47,255,0.1) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-20 right-1/4 w-64 h-64 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(156,178,255,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-medium text-white leading-tight">
            {siteContent.experience.heading.first}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {siteContent.experience.heading.second}
            </span>
          </h2>
          <div className="h-1 w-48 bg-white/80 rounded-full mt-3 mx-auto" />
        </div>

        <div className="flex justify-center mb-12">
          <div
            className="flex rounded-xl p-1 gap-1"
            style={{
              background: "rgba(113,47,255,0.08)",
              border: "1px solid rgba(112,66,248,0.2)",
            }}
          >
            {(siteContent.experience.tabs as Array<{ id: "technical" | "community"; label: string }>).map((tabItem) => (
              <button
                key={tabItem.id}
                onClick={() => setTab(tabItem.id)}
                className="px-6 py-2 rounded-lg text-sm font-medium tracking-wide transition-all duration-300"
                style={{
                  background:
                    tab === tabItem.id
                      ? "linear-gradient(135deg, #7042f8, #9b6dff)"
                      : "transparent",
                  color: tab === tabItem.id ? "#fff" : "rgba(255,255,255,0.45)",
                  boxShadow:
                    tab === tabItem.id ? "0 4px 16px rgba(112,66,248,0.4)" : "none",
                }}
              >
                {tabItem.label}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Mobile */}
          <div className="lg:hidden">
            {data.map((item, index) => (
              <MobileTimelineItem
                key={`m-${tab}-${index}`}
                item={item}
                index={index}
                isLast={index === data.length - 1}
                defaultOpen={index === 0}
              />
            ))}
          </div>

          {/* Desktop */}
          <div className="hidden lg:block relative">
            <div
              className="absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 z-0"
              style={{
                background: "rgba(112,66,248,0.9)",
              }}
            />
            {data.map((item, index) => (
              <DesktopTimelineItem
                key={`d-${tab}-${index}`}
                item={item}
                index={index}
                isLast={index === data.length - 1}
                defaultOpen={index === 0}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;