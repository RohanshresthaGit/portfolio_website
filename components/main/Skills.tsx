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

  // Track container widths
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

  // Start infinite animation
  useEffect(() => {
    if (mainContainerRef.current) {
      const containerWidth = mainContainerRef.current.scrollWidth / 2;
      
      controlsMain.start({
        x: [0, -containerWidth],
        transition: { 
          repeat: Infinity, 
          duration: 20, 
          ease: "linear",
          repeatType: "loop"
        },
      });
    }

    if (secondaryContainerRef.current) {
      const containerWidth = secondaryContainerRef.current.scrollWidth / 2;
      
      controlsSecondary.start({
        x: [-containerWidth, 0],
        transition: { 
          repeat: Infinity, 
          duration: 20, 
          ease: "linear",
          repeatType: "loop"
        },
      });
    }
  }, [controlsMain, controlsSecondary, isMobile]);

  const pauseAnimation = (controls: any) => {
    controls.stop();
  };

  const resumeAnimation = (
    motionValue: any, 
    controls: any, 
    containerRef: React.RefObject<HTMLDivElement>,
    direction: "forward" | "backward"
  ) => {
    if (!containerRef.current) return;

    const containerWidth = containerRef.current.scrollWidth / 2;
    const currentX = motionValue.get();
    
    // Calculate remaining distance and adjust duration proportionally
    let remainingDistance: number;
    let targetX: number;
    
    if (direction === "forward") {
      targetX = -containerWidth;
      remainingDistance = Math.abs(targetX - currentX);
    } else {
      targetX = 0;
      remainingDistance = Math.abs(targetX - currentX);
    }
    
    // Calculate proportional duration (20 seconds for full loop)
    const fullDuration = 20;
    const proportionalDuration = (remainingDistance / containerWidth) * fullDuration;
    
    // Animate to target, then loop
    controls.start({
      x: targetX,
      transition: { 
        duration: proportionalDuration, 
        ease: "linear",
      },
    }).then(() => {
      // After reaching target, restart the infinite loop
      if (direction === "forward") {
        motionValue.set(0);
        controls.start({
          x: [0, -containerWidth],
          transition: { 
            repeat: Infinity, 
            duration: fullDuration, 
            ease: "linear",
            repeatType: "loop"
          },
        });
      } else {
        motionValue.set(-containerWidth);
        controls.start({
          x: [-containerWidth, 0],
          transition: { 
            repeat: Infinity, 
            duration: fullDuration, 
            ease: "linear",
            repeatType: "loop"
          },
        });
      }
    });
  };

  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-0 py-20 scroll-mt-20"
      style={{ transform: "scale(0.9)" }}
    >
      <SkillText />

      {/* Main Skills */}
      <div className="flex w-full justify-center mt-12 md:mt-24">
        <div className="w-full md:w-3/4 overflow-hidden">
          <motion.div
            ref={mainContainerRef}
            className="flex flex-row flex-nowrap gap-3 md:gap-5 items-center"
            animate={controlsMain}
            style={{ x: xMain }}
            onMouseEnter={() => pauseAnimation(controlsMain)}
            onMouseLeave={() =>
              resumeAnimation(xMain, controlsMain, mainContainerRef, "forward")
            }
          >
            {[...mainSkills, ...mainSkills].map((image, index) => (
              <SkillDataProvider
                key={`main-${index}`}
                src={image.Image}
                width={getSize(image.width)}
                height={getHeight(image.height)}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Secondary Skills */}
      <div className="flex w-full justify-center mt-12 md:mt-24">
        <div className="w-full md:w-3/4 overflow-hidden">
          <motion.div
            ref={secondaryContainerRef}
            className="flex flex-row flex-nowrap gap-3 md:gap-5 items-center"
            animate={controlsSecondary}
            style={{ x: xSecondary }}
            onMouseEnter={() => pauseAnimation(controlsSecondary)}
            onMouseLeave={() =>
              resumeAnimation(xSecondary, controlsSecondary, secondaryContainerRef, "backward")
            }
          >
            {[...secondarySkills, ...secondarySkills].map((image, index) => (
              <SkillDataProvider
                key={`secondary-${index}`}
                src={image.Image}
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