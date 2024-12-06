"use client";
import { delay, motion } from "motion/react";

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
      delay: 0.07 * index,
    },
  }),
};

function Skills() {
  return (
    <div className=" grid place-content-center py-[100px]">
      <div>
        <h2 className="text-center capitalize text-3xl font-bold">my skills</h2>
        <ul className="mt-10 flex flex-wrap gap-3 items-center justify-center max-w-[900px]">
          {skillsData.map((skill, index) => (
            <motion.li
              variants={fadeInAnimationVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
              }}
              custom={index}
              key={skill.id}
              className=" bg-slate-50 text-zinc-950 px-[40px] py-[10px] rounded-lg"
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
