import React from "react";
import { FaReact } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";
import { TbBrandTailwind } from "react-icons/tb";
import { RiFirebaseLine } from "react-icons/ri";
import { BiLogoMongodb } from "react-icons/bi";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandThreejs } from "react-icons/tb";
import { SiPython } from "react-icons/si";

const SkillLogo: React.FC<{ skill: string; logo: React.ReactNode }> = ({
  skill,
  logo,
}) => {
  return (
    <div className="relative w-24 h-24 flex items-center justify-center">
      <div className="absolute w-full h-full flex items-center justify-center">
        {logo}
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const skills = [
    { name: "React", logo: <FaReact size={60} className="text-blue-500" /> },
    {
      name: "TypeScript",
      logo: <TbBrandTypescript size={60} className="text-blue-600" />,
    },
    {
      name: "Tailwind CSS",
      logo: <TbBrandTailwind size={60} className="text-teal-400" />,
    },
    {
      name: "Firebase",
      logo: <RiFirebaseLine size={60} className="text-yellow-400" />,
    },
    {
      name: "MongoDB",
      logo: <BiLogoMongodb size={60} className="text-green-600" />,
    },
    {
      name: "PostgresSQL",
      logo: <BiLogoPostgresql size={60} className="text-blue-700" />,
    },
    {
      name: "Three.js",
      logo: <TbBrandThreejs size={60} className="text-gray-300" />,
    },
    { name: "Python", logo: <SiPython size={60} className="text-blue-500" /> },
  ];

  return (
    <section id="skills" className="py-16 bg-white">
      <h3 className="text-4xl font-serif text-center mb-8">My Skills</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="bg-gray-800 p-6 rounded-lg shadow-lg text-center flex flex-col items-center border border-gray-600"
          >
            <SkillLogo skill={skill.name} logo={skill.logo} />
            <p className="mt-4 text-white font-serif">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
