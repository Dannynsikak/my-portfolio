import React from "react";
import SkillLogo from "./SkillLogo"; // Adjust the import path if needed
import { Frame2, Frame3, Frame4 } from "../imgs";

const Skills: React.FC = () => {
  const skills = [
    { name: "React", image: Frame2 }, // Update with your image paths
    { name: "TypeScript", image: Frame4 },
    { name: "Tailwind CSS", image: Frame3 },
    // { name: "Firebase", image: "./imgs/" },
  ];

  return (
    <section id="skills" className="py-16 bg-black">
      <h3 className="text-white text-center text-3xl mb-8">My Skills</h3>
      <div className="flex justify-around">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="text-center text-white flex flex-col items-center"
          >
            <div className="w-full  h-full mb-4">
              <SkillLogo image={skill.image} />
            </div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
