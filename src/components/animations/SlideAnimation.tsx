"use client";

import { ReactNode } from "react";
import { motion, Easing } from "framer-motion";

interface SlideAnimationProps {
  animationKey?: string;
  offsetX?: number | string;
  offsetY?: number | string;
  duration?: number;
  delay?: number;
  ease?: Easing | Easing[];
  children: ReactNode;
}

const SlideAnimation = ({ animationKey, offsetX = 0, offsetY = 0, duration = 0.3, delay, ease, children }: SlideAnimationProps) => {
  return (
    <motion.div
      key={animationKey}
      initial={{ opacity: 0, x: offsetX, y: offsetY }}
      exit={{ opacity: 0, x: offsetX, y: offsetY }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{
        type: "tween",
        ease,
        duration,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
};

export default SlideAnimation;
