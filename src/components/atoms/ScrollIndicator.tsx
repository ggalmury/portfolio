"use client";

import { motion } from "framer-motion";

interface ScrollIndicatorProps {
  duration?: number;
  delay?: number;
}

const ScrollIndicator = ({ duration = 1, delay }: ScrollIndicatorProps) => {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 translate -translate-x-1/2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration, delay }}
    >
      <motion.div
        className="flex justify-center w-6 h-10 border-2 rounded-full border-gray-400"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: duration * 1.5, repeat: Infinity }}
      >
        <motion.div
          className="w-1 h-3 mt-2 rounded-full bg-gray-400"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: duration * 1.5, repeat: Infinity }}
        />
      </motion.div>
    </motion.div>
  );
};

export default ScrollIndicator;
