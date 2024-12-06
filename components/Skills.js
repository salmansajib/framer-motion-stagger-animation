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

function Skills() {
  return (
    <div className=" grid place-content-center py-10">
      <div>
        <h2 className=" capitalize text-2xl font-bold">my skills</h2>
        <ul>
          {skillsData.map((skill) => (
            <li key={skill.id}>{skill.skillName}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Skills;
