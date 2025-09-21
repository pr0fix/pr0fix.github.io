import type { SectionDividerProps } from "../utils/types";

const SectionDivider: React.FC<SectionDividerProps> = ({
  title,
}: SectionDividerProps) => {
  return (
    <div className="offset-border flex justify-between py-6 my-16 bg-[var(--secondary-bg-color)]">
      <h2 className="text-section-title ml-6">{title}</h2>
    </div>
  );
};

export default SectionDivider;
