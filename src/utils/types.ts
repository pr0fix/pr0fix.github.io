export interface SectionDividerProps {
  title: string;
}

export interface TechItemProps {
  name: string;
}

export interface CardLinkItemProps extends TechItemProps {
  color: string;
  linkUrl: string;
}

export interface ProjectCardProps {
  imageUrl: string;
  title: string;
  technologies: string[];
  links: CardLinkItemProps[];
}
