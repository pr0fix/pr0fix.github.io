import type { TechItemProps } from "../utils/types"

const TechItem: React.FC<TechItemProps> = ({name}: TechItemProps) =>{
    return (
        <div className="border-[3px] shadow bg-[#FFFF00] p-1 font-bold text-sm">
            {name}
        </div>
    )
}

export default TechItem