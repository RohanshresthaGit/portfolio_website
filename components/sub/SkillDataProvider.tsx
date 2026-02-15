"use client";

import React from "react";
import Image from "next/image";

interface Props {
  src: string;
  width: number;
  height: number;
  index: number;
}

const SkillDataProvider = ({ src, width, height }: Props) => {
  return (
    <div className="flex-shrink-0 px-5 md:px-20">
      <Image src={src} width={width} height={height} alt="skill image" />
    </div>
  );
};

export default SkillDataProvider;
