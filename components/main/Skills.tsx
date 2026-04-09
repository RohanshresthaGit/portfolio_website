"use client";

import { mainSkills, secondarySkills } from "@/constants";
import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useAnimation } from "framer-motion";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";

const Skills = () => {
  const [isMobile, setIsMobile] = useState(false);

  const xMain = useMotionValue(0);
  const xSecondary = useMotionValue(0);
  const controlsMain = useAnimation();
  const controlsSecondary = useAnimation();
  const mainContainerRef = useRef<HTMLDivElement>(null);
  const secondaryContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getSize = (width: number) => (isMobile ? width * 0.6 : width);
  const getHeight = (height: number) => (isMobile ? height * 0.6 : height);

  useEffect(() => {
    if (mainContainerRef.current) {
      const containerWidth = mainContainerRef.current.scrollWidth / 2;
      controlsMain.start({
        x: [0, -containerWidth],
        transition: { repeat: Infinity, duration: 20, ease: "linear", repeatType: "loop" },
      });
    }
    if (secondaryContainerRef.current) {
      const containerWidth = secondaryContainerRef.current.scrollWidth / 2;
      controlsSecondary.start({
        x: [-containerWidth, 0],
        transition: { repeat: Infinity, duration: 20, ease: "linear", repeatType: "loop" },
      });
    }
  }, [controlsMain, controlsSecondary, isMobile]);

  const pauseAnimation = (controls: any) => controls.stop();

  const resumeAnimation = (
    motionValue: any,
    controls: any,
    containerRef: any,
    direction: "forward" | "backward"
  ) => {
    if (!containerRef.current) return;
    const containerWidth = containerRef.current.scrollWidth / 2;
    const currentX = motionValue.get();
    const targetX = direction === "forward" ? -containerWidth : 0;
    const remainingDistance = Math.abs(targetX - currentX);
    const proportionalDuration = (remainingDistance / containerWidth) * 20;

    controls.start({
      x: targetX,
      transition: { duration: proportionalDuration, ease: "linear" },
    }).then(() => {
      if (direction === "forward") {
        motionValue.set(0);
        controls.start({
          x: [0, -containerWidth],
          transition: { repeat: Infinity, duration: 20, ease: "linear", repeatType: "loop" },
        });
      } else {
        motionValue.set(-containerWidth);
        controls.start({
          x: [-containerWidth, 0],
          transition: { repeat: Infinity, duration: 20, ease: "linear", repeatType: "loop" },
        });
      }
    });
  };

  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-40 py-5 scroll-mt-20"
      style={{ transform: "scale(0.9)" }}
    >
      {/* Ambient glow blobs */}
      <div
        className="absolute top-10 left-1/4 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(113,47,255,0.12) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-10 right-1/4 w-56 h-56 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(156,178,255,0.08) 0%, transparent 70%)" }}
      />

      <SkillText />

      {/* Main Skills row */}
      <div className="flex w-full justify-center mt-12 md:mt-24">
        <div
          className="w-full md:w-3/4 relative"
          style={{ overflowX: "hidden", overflowY: "visible" }}
        >
          <div
            className="absolute left-0 top-0 h-full w-16 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to right, #05071a, transparent)" }}
          />
          <div
            className="absolute right-0 top-0 h-full w-16 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to left, #05071a, transparent)" }}
          />

          <motion.div
            ref={mainContainerRef}
            className="flex flex-row flex-nowrap gap-3 md:gap-5 items-center py-4"
            animate={controlsMain}
            style={{ x: xMain }}
            onMouseEnter={() => pauseAnimation(controlsMain)}
            onMouseLeave={() => resumeAnimation(xMain, controlsMain, mainContainerRef, "forward")}
          >
            {[...mainSkills, ...mainSkills].map((image, index) => (
              <SkillDataProvider
                key={`main-${index}`}
                src={image.Image}
                alt={image.skill_name}
                width={getSize(image.width)}
                height={getHeight(image.height)}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Secondary Skills row */}
      <div className="flex w-full justify-center mt-12 md:mt-24">
        <div
          className="w-full md:w-3/4 relative"
          style={{ overflowX: "hidden", overflowY: "visible" }}
        >
          <div
            className="absolute left-0 top-0 h-full w-16 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to right, #05071a, transparent)" }}
          />
          <div
            className="absolute right-0 top-0 h-full w-16 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to left, #05071a, transparent)" }}
          />

          <motion.div
            ref={secondaryContainerRef}
            className="flex flex-row flex-nowrap gap-3 md:gap-5 items-center py-4"
            animate={controlsSecondary}
            style={{ x: xSecondary }}
            onMouseEnter={() => pauseAnimation(controlsSecondary)}
            onMouseLeave={() => resumeAnimation(xSecondary, controlsSecondary, secondaryContainerRef, "backward")}
          >
            {[...secondarySkills, ...secondarySkills].map((image, index) => (
              <SkillDataProvider
                key={`secondary-${index}`}
                src={image.Image}
                alt={image.skill_name}
                width={getSize(image.width)}
                height={getHeight(image.height)}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;