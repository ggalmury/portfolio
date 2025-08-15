import { FC, SVGProps } from "react";

interface TechSkillItemProps {
  Icon: FC<SVGProps<SVGElement>>;
  size?: number;
}

const TechSkillItem = ({ Icon, size = 32 }: TechSkillItemProps) => {
  return (
    <div className="p-1.5 rounded-lg bg-white">
      <Icon width={size} height={size} />
    </div>
  );
};

export default TechSkillItem;
