import type { CardLinkItemProps } from "../utils/types";

const CardLinkItem: React.FC<CardLinkItemProps> = ({
  color,
  name,
  linkUrl,
}: CardLinkItemProps) => {
  return (
    <div
      className="border-[3px] rounded-xl py-[0.75rem] px-[1rem] font-bold text-sm"
      style={{ backgroundColor: color }}
    >
      <a href={linkUrl}>{name}</a>
    </div>
  );
};

export default CardLinkItem;
