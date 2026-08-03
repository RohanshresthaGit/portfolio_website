"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import siteContent from "@/constants/navbar-content.json";

const privacyPolicy = siteContent.privacyPolicy;

const PrivacyPolicy = () => {
  return (
    <div
      className="min-h-screen relative overflow-hidden text-gray-200"
      style={{ background: "#05071a" }}
    >
      {/* Ambient blobs */}
      <div
        className="absolute top-20 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(113,47,255,0.12) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute bottom-40 right-1/4 w-72 h-72 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(156,178,255,0.07) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-10 pt-28 md:pt-36 pb-20">

        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-purple-400 transition-colors mb-10 group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            {privacyPolicy.backLink}
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10"
        >
       

          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-3">
            {privacyPolicy.title.first}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {privacyPolicy.title.second}
            </span>
          </h1>

          <div
            className="h-[2px] w-32 rounded-full mb-4"
            style={{ background: "linear-gradient(90deg, #ba9cff, #9cb2ff, transparent)" }}
          />

          <p className="text-gray-500 text-sm tracking-wide">{privacyPolicy.updated}</p>
        </motion.div>

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-2xl p-5 md:p-6 mb-6"
          style={{
            background: "rgba(10,0,30,0.6)",
            border: "1px solid rgba(112,66,248,0.2)",
            backdropFilter: "blur(12px)",
          }}
        >
          <p className="text-gray-400 leading-relaxed text-sm md:text-base">
            {privacyPolicy.intro}
          </p>
        </motion.div>

        {/* List sections */}
        {privacyPolicy.sections.map((section, si) => (
          <motion.div
            key={si}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 + si * 0.08 }}
            className="rounded-2xl p-5 md:p-6 mb-6"
            style={{
              background: "rgba(10,0,30,0.6)",
              border: "1px solid rgba(112,66,248,0.2)",
              backdropFilter: "blur(12px)",
            }}
          >
            <h2 className="text-lg md:text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span
                className="w-1.5 h-5 rounded-full flex-shrink-0"
                style={{ background: "linear-gradient(to bottom, #ba9cff, #9cb2ff)" }}
              />
              {section.title}
            </h2>
            <ul className="flex flex-col gap-3">
              {section.items.map((item, i) => (
                <li
                  key={i}
                  className="flex gap-3 items-start text-gray-400 text-sm md:text-base leading-relaxed"
                >
                  <span
                    className="mt-[7px] w-[5px] h-[5px] rounded-full flex-shrink-0"
                    style={{ background: "#ba9cff" }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}

        {/* Data Sharing */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.42 }}
          className="rounded-2xl p-5 md:p-6 mb-6"
          style={{
            background: "rgba(10,0,30,0.6)",
            border: "1px solid rgba(112,66,248,0.2)",
            backdropFilter: "blur(12px)",
          }}
        >
          <h2 className="text-lg md:text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span
              className="w-1.5 h-5 rounded-full flex-shrink-0"
              style={{ background: "linear-gradient(to bottom, #ba9cff, #9cb2ff)" }}
            />
            {privacyPolicy.dataSharing.title}
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            {privacyPolicy.dataSharing.description}
          </p>
        </motion.div>

        {/* Your Rights */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.48 }}
          className="rounded-2xl p-5 md:p-6 mb-6"
          style={{
            background: "rgba(10,0,30,0.6)",
            border: "1px solid rgba(112,66,248,0.2)",
            backdropFilter: "blur(12px)",
          }}
        >
          <h2 className="text-lg md:text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span
              className="w-1.5 h-5 rounded-full flex-shrink-0"
              style={{ background: "linear-gradient(to bottom, #ba9cff, #9cb2ff)" }}
            />
            {privacyPolicy.yourRights.title}
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            {privacyPolicy.yourRights.description}{" "}
            
             <a href="mailto:shrestharohan495@gmail.com"
              style={{ color: "#ba9cff" }}
              className="font-medium transition-colors hover:text-purple-300"
            >
              shrestharohan495@gmail.com
            </a>
            .
          </p>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.54 }}
          className="rounded-2xl p-5 md:p-6 mb-10"
          style={{
            background:
              "linear-gradient(180deg, rgba(60,8,126,0.15) 0%, rgba(60,8,126,0.08) 100%), rgba(113,47,255,0.07)",
            border: "1px solid rgba(112,66,248,0.35)",
            backdropFilter: "blur(12px)",
          }}
        >
          <h2 className="text-lg md:text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span
              className="w-1.5 h-5 rounded-full flex-shrink-0"
              style={{ background: "linear-gradient(to bottom, #ba9cff, #9cb2ff)" }}
            />
            {privacyPolicy.contact.title}
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            {privacyPolicy.contact.description}{" "}
            
             <a href="mailto:shrestharohan495@gmail.com"
              style={{ color: "#ba9cff" }}
              className="font-medium transition-colors hover:text-purple-300"
            >
              shrestharohan495@gmail.com
            </a>
            .
          </p>
        </motion.div>


      </div>
    </div>
  );
};

export default PrivacyPolicy;