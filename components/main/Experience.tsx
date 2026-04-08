"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";

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

const technicalExperience: Item[] = [
  {
    role: "Flutter Developer",
    company: "Dynamic Technosoft Pvt. Ltd.",
    duration: "June 2025 - Present",
    type: "Full Time",
    logo: "/dynamic_technosoft.jpg",
    logoColor: "#7042f8",
    description:
      "Developed mobile application features using Flutter and Dartfot both android and ios platforms. Built responsive user interfaces and implemented application logic. Integrated REST APIs and worked with backend services for data handling. Focused on writing clean and maintainable code while collaborating with the development team.",
    skills: [
      "Flutter",
      "Dart",
      "REST API",
      "Git",
      "GitHub",
      "Clean Code",
      "State Management",
      "UI/UX",
      "Responsive Design",
      "Version Control",
      "Debugging",
    ],
  },
  {
    role: "Junior Flutter Developer",
    company: "Vroom Nepal",
    duration: "Oct 2024 - June 2025",
    type: "Full Time",
    logo: "/vroom_nepal.webp",
    logoColor: "#0ea5e9",
    description:
      "Contributed to the development of a ride-sharing mobile application using Flutter. Implemented responsive UI components and improved existing features. Assisted in API integration, performance optimization, and debugging application issues. Worked closely with the development team to plan and improve application performance.",
    skills: [
      "Flutter",
      "Dart",
      "API Integration",
      "UI/UX",
      "Debugging",
      "Technical Documentation",
      "State Management",
      "MVVM",
    ],
  },
  {
    role: "Flutter Developer Intern",
    company: "Vroom Nepal",
    duration: "Sept 2024 - Oct 2024",
    type: "Internship",
    logo: "/vroom_nepal.webp",
    logoColor: "#0ea5e9",
    description:
      "Assisted in building and maintaining mobile app features using Flutter and Dart. Learned industry development workflows and collaborative development practices. Supported the team in implementing UI components, and fixing bugs.",
    skills: ["Flutter", "Dart", "Git", "Responsive Design"],
  },
  {
    role: "Freelance Flutter Developer",
    company: "Eclat Info. Sys.",
    duration: "June 2024 - Aug 2025",
    type: "Freelance",
    logo: "/eclat.jpg",
    logoColor: "#e59cff",
    description:
      "Worked on a Hospital Management System mobile application focused on the patient side. Developed application features and UI using Flutter. Integrated backend APIs for managing patient data and services. Delivered maintainable and efficient mobile application solutions.",
    skills: ["Flutter", "Dart", "REST API", "Git", "Gitlab"],
  },
];

const communityExperience: Item[] = [
  {
    role: "Contributor",
    company: "GNOME Nepal",
    duration: "July 2024 - Present",
    type: "Open Source",
    logo: "/gnome.jpg",
    logoColor: "#4ade80",
    description:
      "Contributed to open-source community initiatives and collaborative activities under GNOME Nepal, supporting the growth of open-source culture in Nepal. Organized, Volunteered, and participated in events, workshops, and discussions to promote linux & open-source in Nepal.",
    skills: [
      "Linux",
      "Event Management",
      "Open Source",
      "Community Engagement",
    ],
  },
  {
    role: "College Representative (CR)",
    company: "Code for Change - Padmashree International College",
    duration: "Jan 2025 - Dec 2025",
    type: "Leadership",
    logo: "/code_for_change.jpg",
    logoColor: "#fbbf24",
    description:
      "Represented the college in Code for Change initiatives. Coordinated activities and supported collaboration among student members to drive technology-focused community work. Organized events, workshops, and discussions to promote technology for social good and skill development among students.",
    skills: [
      "Leadership",
      "Coordination",
      "Community",
      "Event Management",
      "Networking",
      "Communication",
    ],
  },
  {
    role: "Member",
    company: "Code for Change",
    duration: "Jan 2024 - Dec 2024",
    type: "Community",
    logo: "/code_for_change.jpg",
    logoColor: "#38bdf8",
    description:
      "Participated in technology-driven community initiatives and programs focused on using technology for social good and skill building.",
    skills: ["Web development", "Networking"],
  },
  {
    role: "Member",
    company: "Flutter Kathmandu",
    duration: "Feb 2024 - Present",
    type: "Community",
    logo: "/flutter_white.jpg",
    logoColor: "#54d7eb",
    description:
      "Engaged with the Flutter developer community in Kathmandu. Participated in knowledge sharing sessions, meetups, workshops and community events to grow as a Flutter developer.",
    skills: ["Flutter", "Dart", "Networking"],
  },
];

const badgeConfig: Record<
  string,
  { bg: string; border: string; text: string }
> = {
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
            fill
            className="object-cover"
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
            background:
              "linear-gradient(90deg, rgba(112,66,248,0.5), transparent)",
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
            fill
            className="object-cover"
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
            fill
            className="object-cover"
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
            Experience &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Involvement
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
            {(["technical", "community"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className="px-6 py-2 rounded-lg text-sm font-medium tracking-wide transition-all duration-300"
                style={{
                  background:
                    tab === t
                      ? "linear-gradient(135deg, #7042f8, #9b6dff)"
                      : "transparent",
                  color: tab === t ? "#fff" : "rgba(255,255,255,0.45)",
                  boxShadow:
                    tab === t ? "0 4px 16px rgba(112,66,248,0.4)" : "none",
                }}
              >
                {t === "technical" ? "💼 Technical" : "🌐 Community"}
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
          <div className="md:hidden">
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
          <div className="hidden md:block relative">
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
