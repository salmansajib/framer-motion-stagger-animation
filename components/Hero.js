"use client";
import { motion } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const headingVariants = {
  hidden: {
    y: 300,
  },
  visible: {
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

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

function Hero() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative min-h-svh grid items-center justify-center"
    >
      <motion.div
        variants={containerVariants}
        className="flex flex-col items-start gap-2"
      >
        <div className="overflow-hidden">
          <motion.h1
            variants={headingVariants}
            style={{
              fontSize: "clamp(3rem, 15vw, 15rem)",
              lineHeight: 1.2,
            }}
            className="bg-gradient-to-tr from-indigo-400 to bg-pink-400 text-transparent bg-clip-text font-bold capitalize"
          >
            stagger
          </motion.h1>
        </div>

        <div className="overflow-hidden">
          <motion.h1
            variants={headingVariants}
            style={{
              fontSize: "clamp(3rem, 15vw, 15rem)",
              lineHeight: 1.3,
            }}
            className="bg-gradient-to-tr from-indigo-400 to bg-pink-400 text-transparent bg-clip-text font-bold capitalize"
          >
            animation
          </motion.h1>
        </div>
      </motion.div>

      <div className=" absolute bottom-[30px] left-1/2 -translate-x-1/2 flex flex-col items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="45"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-chevrons-down"
          initial="hidden"
          animate="visible"
        >
          {/* Group for stagger */}
          <motion.g variants={groupVariants}>
            <motion.path d="m7 20 5 5 5-5" variants={pathVariants} />
            <motion.path d="m7 13 5 5 5-5" variants={pathVariants} />
            <motion.path d="m7 6 5 5 5-5" variants={pathVariants} />
          </motion.g>
        </svg>
      </div>
    </motion.div>
  );
}

export default Hero;
