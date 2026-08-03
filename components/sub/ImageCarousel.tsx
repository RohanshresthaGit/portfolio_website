"use client";

import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

interface ImageCarouselProps {
  images: string[];
  alt: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, alt }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const renderCurrentImage = (src: string, index: number) => {
    const isRemoteOrDataUrl =
      /^https?:\/\//.test(src) || src.startsWith("data:");

    if (isRemoteOrDataUrl) {
      return (
        <img
          src={src}
          alt={`${alt} ${index + 1}`}
          className="h-full w-full object-cover"
          loading={index === 0 ? "eager" : "lazy"}
          decoding={index === 0 ? "sync" : "async"}
        />
      );
    }

    return (
      <Image
        src={src}
        alt={`${alt} ${index + 1}`}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
        priority={index === 0}
        loading={index === 0 ? "eager" : "lazy"}
        unoptimized
      />
    );
  };

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goToPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);


  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      goToNext();
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goToPrev();
    }
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    const touch = event.touches[0];
    const startX = touch.clientX;
    (event.currentTarget as HTMLDivElement).dataset.touchStart = String(startX);
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    const touch = event.changedTouches[0];
    const startX = Number((event.currentTarget as HTMLDivElement).dataset.touchStart || 0);
    const endX = touch.clientX;
    const distance = endX - startX;

    if (distance > 50) goToPrev();
    if (distance < -50) goToNext();
  };

  if (!images.length) return null;

  return (
    <div
      className="relative w-full aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-[#080b1f] shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label={`Image carousel for ${alt}`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={images[activeIndex]}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {renderCurrentImage(images[activeIndex], activeIndex)}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      <button
        type="button"
        onClick={goToPrev}
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/30 p-2 text-white backdrop-blur-sm transition hover:bg-black/50"
        aria-label="Previous image"
      >
        <ChevronLeftIcon className="h-5 w-5" />
      </button>

      <button
        type="button"
        onClick={goToNext}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/30 p-2 text-white backdrop-blur-sm transition hover:bg-black/50"
        aria-label="Next image"
      >
        <ChevronRightIcon className="h-5 w-5" />
      </button>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Go to image ${index + 1}`}
            onClick={() => setActiveIndex(index)}
            className={`h-2.5 rounded-full transition-all ${
              activeIndex === index ? "w-8 bg-white" : "w-2.5 bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
