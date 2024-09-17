import React from "react";

const projects = [
  {
    title: "Weather App",
    description: "A weather project using React Typescript and Tailwindcss",
    link: "https://weather-ojn6qqirh-dannynsikaks-projects.vercel.app",
  },
  {
    title: "Hotel webApp",
    description:
      "A Hotel webApp for Tourist and Travellers to easily get Accomodation.",
    link: "https://hotel-dashboard-93cd9.web.app",
  },
  // remember to add more projects
];

const Projects = () => {
  return (
    <section id="projects" className="py-[4em] bg-gray-50">
      <h3 className="text-3xl font-bold text-center mb-[2em]">My Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-white p-[1.5em] rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-bold mb-[1em]">{project.title}</h3>
            <p className="mb-[1em]">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
