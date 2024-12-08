"use client";
import { motion } from "motion/react";

const groupVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 1,
    },
  },
};

const pathVariants = {
  hidden: {
    opacity: 0,
    y: -10,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1.1,
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

function ScrollDown() {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="45"
        viewBox="0 0 24 24"
        fill="none"
        stroke="url(#gradient)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-chevrons-down"
        initial="hidden"
        animate="visible"
      >
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#a78bfa" />
            {/* Start of the gradient */}
            <stop offset="100%" stopColor="#e879f9" />
            {/* End of the gradient */}
          </linearGradient>
        </defs>
        <motion.g variants={groupVariants}>
          <motion.path d="m7 20 5 5 5-5" variants={pathVariants} />
          <motion.path d="m7 13 5 5 5-5" variants={pathVariants} />
          <motion.path d="m7 6 5 5 5-5" variants={pathVariants} />
        </motion.g>
      </svg>
    </>
  );
}

export default ScrollDown;
