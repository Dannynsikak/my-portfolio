import React from "react";

const Skills = () => {
  const skills = [
    "React",
    "Typescript",
    "Tailwind CSS",
    "Firebase",
    "MongoDB",
    "PostgresSQL",
  ];
  return (
    <section id="skills" className="py-[4em] bg-white">
      <h3 className="text-3xl font-bold text-center mb-[2em]">My Skills</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-gray-100 p-[1em] rounded-lg shadow-md text-center"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
