import type { SectionDividerProps } from "../utils/types";

const SectionDivider: React.FC<SectionDividerProps> = ({
  title,
}: SectionDividerProps) => {
  return (
    <div className="offset-border flex justify-between py-6 mt-10 bg-[var(--secondary-bg-color)]">
      <h2 className="ml-6">{title}</h2>
    </div>
  );
};

export default SectionDivider;
