import type { ProjectCardProps } from "../utils/types";
import CardLinkItem from "./CardLinkItem";
import TechItem from "./TechItem";

const ProjectCard: React.FC<ProjectCardProps> = ({
  imageUrl,
  title,
  technologies,
  links,
}: ProjectCardProps) => {
  return (
    <div className="flex flex-col gap-6 mt-5 bg-[var(--secondary-bg-color)] border-2 rounded-2xl p-6 max-w-[450px]">
      <img src={imageUrl} className="rounded-md border-2" />

      <p className="font-bold text-lg">{title}</p>
      <div className="flex flex-row flex-wrap gap-2">
        {technologies.map((tech) => (
          <TechItem name={tech} />
        ))}
      </div>
      <div className="flex flex-row flex-wrap gap-3">
        {links.map((link) => (
          <CardLinkItem
            color={link.color}
            name={link.name}
            linkUrl={link.linkUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
