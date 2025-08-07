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
  triggerOnReveal?: boolean;
  revealAmount?: number;
  revealOnce?: boolean;
  children: ReactNode;
}

const SlideAnimation = ({
  animationKey,
  offsetX = 0,
  offsetY = 0,
  duration = 0.4,
  delay,
  ease,
  triggerOnReveal,
  revealAmount = 0.3,
  revealOnce = true,
  children,
}: SlideAnimationProps) => {
  return (
    <motion.div
      key={animationKey}
      initial={{ opacity: 0, x: offsetX, y: offsetY }}
      exit={{ opacity: 0, x: offsetX, y: offsetY }}
      animate={triggerOnReveal ? undefined : { opacity: 1, x: 0, y: 0 }}
      whileInView={triggerOnReveal ? { opacity: 1, x: 0, y: 0 } : undefined}
      viewport={triggerOnReveal ? { amount: revealAmount, once: revealOnce } : undefined}
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
