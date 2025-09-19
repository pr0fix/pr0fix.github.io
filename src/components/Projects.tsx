import ProjectCard from "./ProjectCard";

const projects = [
  {
    imageUrl: "",
    title: "Match-a-cat",
    technologies: ["MERN Stack", "TypeScript", "zustand", "tailwindcss"],
    links: [
      { color: "#63a4ff", name: "Docs", linkUrl: "https://placehold.co/" },
      { color: "#7fffd4", name: "Code", linkUrl: "https://placehold.co/" },
      { color: "#b39ddb", name: "Site", linkUrl: "https://placehold.co/" },
    ],
  },
  {
    imageUrl: "",
    title: "caffenaited-strings",
    technologies: ["JavaScript", "TypeScript", "ts-jest", "CI-CD Pipeline"],
    links: [
      { color: "#63a4ff", name: "Docs", linkUrl: "https://placehold.co/" },
      { color: "#7fffd4", name: "Code", linkUrl: "https://placehold.co/" },
      { color: "#b39ddb", name: "Site", linkUrl: "https://placehold.co/" },
    ],
  },
  {
    imageUrl: "",
    title: "CoffeeCompanion",
    technologies: ["React Native", "Expo", "Firebase"],
    links: [
      { color: "#63a4ff", name: "Docs", linkUrl: "https://placehold.co/" },
      { color: "#7fffd4", name: "Code", linkUrl: "https://placehold.co/" },
      { color: "#b39ddb", name: "Site", linkUrl: "https://placehold.co/" },
    ],
  },
];

const Projects = () => {
  return (
    <div className="flex flex-row gap-5 justify-center">
      {projects.map((project) => (
        <ProjectCard
          imageUrl={project.imageUrl}
          title={project.title}
          technologies={project.technologies}
          links={project.links}
        />
      ))}
    </div>
  );
};

export default Projects;
