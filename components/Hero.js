"use client";
import { motion } from "motion/react";
import ScrollDown from "./ScrollDown";

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
    y: "100%",
  },
  visible: {
    y: "0%",
    transition: {
      duration: 0.5,
    },
  },
};

function Hero() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative min-h-svh flex items-center justify-center"
    >
      <motion.div variants={containerVariants} className="w-full">
        <div className="overflow-hidden">
          <motion.h1
            variants={headingVariants}
            style={{
              fontSize: "clamp(3rem, 15vw, 15rem)",
              lineHeight: 1.3,
            }}
            className="bg-gradient-to-r from-purple-400 to bg-red-500 text-transparent bg-clip-text font-bold capitalize text-left"
          >
            stagger
          </motion.h1>
        </div>

        <div className="overflow-hidden">
          <motion.h1
            variants={headingVariants}
            style={{
              fontSize: "clamp(3rem, 15vw, 15rem)",
              lineHeight: 1.2,
            }}
            className="bg-gradient-to-r from-purple-400 to bg-red-500 text-transparent bg-clip-text font-bold capitalize text-right"
          >
            animation
          </motion.h1>
        </div>
      </motion.div>

      <div className="absolute bottom-[10px] left-1/2 -translate-x-1/2">
        <ScrollDown />
      </div>
    </motion.div>
  );
}

export default Hero;
