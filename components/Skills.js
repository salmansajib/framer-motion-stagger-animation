"use client";
import { motion } from "motion/react";

const skillsData = [
  {
    id: 1,
    skillName: "HTML",
  },
  {
    id: 2,
    skillName: "CSS",
  },
  {
    id: 3,
    skillName: "JavaScript",
  },
  {
    id: 4,
    skillName: "React",
  },
  {
    id: 5,
    skillName: "Next.js",
  },
  {
    id: 6,
    skillName: "Vue",
  },
  {
    id: 7,
    skillName: "Nuxt.js",
  },
  {
    id: 8,
    skillName: "Framer Motion",
  },
  {
    id: 9,
    skillName: "Redux Toolkit",
  },
  {
    id: 10,
    skillName: "Tailwind CSS",
  },
  {
    id: 11,
    skillName: "Git",
  },
  {
    id: 12,
    skillName: "GitHub",
  },
];

const fadeInAnimationVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.03 * index,
    },
  }),
};

function Skills() {
  return (
    <div className="grid place-content-center py-[150px]">
      <div>
        <h2 className="text-left md:text-center capitalize text-3xl md:text-5xl font-bold">
          my skills
        </h2>
        <ul className="mt-7 md:mt-10 flex flex-wrap gap-3 items-center justify-start md:justify-center max-w-[900px]">
          {skillsData.map((skill, index) => (
            <motion.li
              variants={fadeInAnimationVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
              }}
              // Custom data to use to resolve dynamic variants differently for each animating component
              custom={index}
              key={skill.id}
              className="bg-zinc-600/50 text-slate-90 px-[40px] py-[10px] rounded-[10px]"
            >
              {skill.skillName}
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Skills;
