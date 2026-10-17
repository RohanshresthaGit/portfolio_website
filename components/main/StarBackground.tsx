"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const StarScene = dynamic(() => import("./StarScene"), { ssr: false });

const StarsCanvas = () => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia(
      "(min-width: 1024px) and (prefers-reduced-motion: no-preference)"
    );

    const update = () => setEnabled(mediaQuery.matches);
    update();
    mediaQuery.addEventListener?.("change", update);

    return () => mediaQuery.removeEventListener?.("change", update);
  }, []);

  if (!enabled) return null;

  return enabled ? <StarScene /> : null;
};

export default StarsCanvas;
