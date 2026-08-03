"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import featuredContent from "@/constants/featured.json";
import FeaturedCard from "@/components/sub/FeaturedCard";

const FeaturedPage = () => {
  const { pageTitle, pageSubtitle, items } = featuredContent;

  return (
    <div className="min-h-screen relative overflow-hidden text-gray-200" style={{ background: "#05071a" }}>
      <div
        className="absolute top-20 left-1/4 h-96 w-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(113,47,255,0.16) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute bottom-20 right-1/4 h-72 w-72 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(156,178,255,0.1) 0%, transparent 70%)",
          filter: "blur(36px)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pb-24 pt-28 md:px-10 md:pt-36">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href="/"
            className="mb-10 inline-flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-purple-400"
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span>
            Back to Home
          </Link>
        </motion.div>

        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-14 text-center"
        >
          <h1 className="text-4xl font-bold text-white md:text-5xl">
            {pageTitle}
          </h1>
          <div className="mx-auto mt-4 h-[2px] w-32 rounded-full" style={{ background: "linear-gradient(90deg, #ba9cff, #9cb2ff, transparent)" }} />
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-400 md:text-lg">
            {pageSubtitle}
          </p>
        </motion.header>

        <div className="space-y-10">
          {items.map((item, index) => (
            <FeaturedCard key={item.id} item={item} reverse={index % 2 !== 0} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedPage;
