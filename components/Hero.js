"use client";
import { motion } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const headingVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
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
      className="min-h-svh grid items-center justify-center"
    >
      <motion.div
        variants={containerVariants}
        className="flex flex-col items-start gap-2"
      >
        <motion.h1
          variants={headingVariants}
          className="bg-gradient-to-r from-blue-300 via-blue-100 to-green-300 text-transparent bg-clip-text text-4xl md:text-6xl lg:text-7xl font-bold capitalize max-w-max"
        >
          scroll down
        </motion.h1>
        <motion.h1
          variants={headingVariants}
          className="bg-gradient-to-r from-blue-300 via-blue-100 to-green-300 text-transparent bg-clip-text text-4xl md:text-6xl lg:text-7xl font-bold capitalize max-w-max"
        >
          to see the
        </motion.h1>
        <motion.h1
          variants={headingVariants}
          className="bg-gradient-to-r from-blue-300 via-blue-100 to-green-300 text-transparent bg-clip-text text-4xl h-[55px] md:h-[70px] lg:h-[82px] md:text-6xl lg:text-7xl font-bold capitalize max-w-max"
        >
          stagger animation
        </motion.h1>
      </motion.div>
    </motion.div>
  );
}

export default Hero;
