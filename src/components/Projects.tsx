import ProjectCard from "./ProjectCard";

const projects = [
  {
    imageUrl: "/match_a_cat.png",
    title: "Match-a-cat",
    technologies: ["MERN Stack", "TypeScript", "tailwindcss"],
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
    technologies: ["JavaScript", "TypeScript", "ts-jest"],
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
    <div className="flex flex-col lg:flex-row flex-wrap gap-8 justify-center items-center">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
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
