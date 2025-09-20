import ProjectCard from "./ProjectCard";

const projects = [
  {
    imageUrl: "/match-a-cat.png",
    title: "Match-a-cat",
    technologies: ["MERN Stack", "TypeScript", "zustand", "tailwindcss"],
    links: [
      {
        color: "#63a4ff",
        name: "Docs",
        linkUrl: "https://github.com/pr0fix/match-a-cat/blob/main/README.md",
      },
      {
        color: "#7fffd4",
        name: "Code",
        linkUrl: "https://github.com/pr0fix/match-a-cat",
      },
      { color: "#b39ddb", name: "Site", linkUrl: "https://placehold.co/" },
    ],
  },
  {
    imageUrl: "/coffee_companion.png",
    title: "CoffeeCompanion",
    technologies: ["React Native", "Expo", "Firebase"],
    links: [
      {
        color: "#63a4ff",
        name: "Docs",
        linkUrl:
          "https://github.com/pr0fix/CoffeeCompanion/blob/main/README.md",
      },
      {
        color: "#7fffd4",
        name: "Code",
        linkUrl: "https://github.com/pr0fix/CoffeeCompanion",
      },
      { color: "#b39ddb", name: "Site", linkUrl: "https://placehold.co/" },
    ],
  },
  {
    imageUrl: "/caffeinated-strings.png",
    title: "caffenaited-strings",
    technologies: ["JavaScript", "TypeScript", "ts-jest", "CI-CD Pipeline"],
    links: [
      {
        color: "#63a4ff",
        name: "Docs",
        linkUrl:
          "https://github.com/pr0fix/caffeinated-strings/blob/main/README.md",
      },
      {
        color: "#7fffd4",
        name: "Code",
        linkUrl: "https://github.com/pr0fix/caffeinated-strings",
      },
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
