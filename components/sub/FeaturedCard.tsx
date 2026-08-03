"use client";

import React from "react";
import ImageCarousel from "./ImageCarousel";
import { motion } from "framer-motion";

interface FeaturedCardProps {
  item: {
    id: number;
    title: string;
    category: string;
    date: string;
    location: string;
    description: string;
    images: string[];
    tags: string[];
  };
  reverse?: boolean;
}

const FeaturedCard: React.FC<FeaturedCardProps> = ({ item, reverse = false }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
      className="rounded-[32px] border border-white/10 bg-[rgba(10,0,30,0.7)] p-4 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-xl md:p-6"
    >
      <div className={`grid items-center gap-8 lg:grid-cols-2 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
        <div className="w-full">
          <ImageCarousel images={item.images} alt={item.title} />
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-purple-400/40 bg-purple-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-purple-200">
              {item.category}
            </span>
            <span className="text-sm text-gray-400">{item.date}</span>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
            <p className="mt-2 text-sm text-cyan-300">{item.location}</p>
          </div>

          <p className="text-base leading-7 text-gray-300">{item.description}</p>

          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-gray-200"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default FeaturedCard;
