"use client";

import type { ReactNode } from "react";
import { LazyMotion } from "framer-motion";

const loadFeatures = () =>
    import("./motion-features").then((module) => module.default);

const MotionProvider = ({ children }: { children: ReactNode }) => (
    <LazyMotion features={loadFeatures}>{children}</LazyMotion>
);

export default MotionProvider;