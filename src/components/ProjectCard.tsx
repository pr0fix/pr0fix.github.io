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
    <div className="flex flex-col gap-6 bg-[var(--secondary-bg-color)] border-2 rounded-2xl p-6 max-w-[450px]">
      <img src={imageUrl} className="rounded-md border-2" />

      <p className="font-bold text-lg shrink-0">{title}</p>
      <div className="flex flex-row gap-2 flex-wrap content-start">
        {technologies.map((tech, index) => (
          <TechItem key={index} name={tech} />
        ))}
      </div>
      <div className="flex flex-row gap-3">
        {links.map((link, index) => (
          <CardLinkItem
            key={index}
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
