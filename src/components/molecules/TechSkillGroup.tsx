import { TechSkillCategory, TechSkill } from "@/constants/techskills";

import Heading1 from "@/components/atoms/typography/Heading1";
import TechSkillItem from "@/components/atoms/TechSkillItem";

interface TechSkillGroupProps {
  category: TechSkillCategory;
  techSkills: TechSkill[];
}

const TechSkillGroup = ({ category, techSkills }: TechSkillGroupProps) => {
  return (
    <div className="flex flex-col w-full items-center gap-4">
      <Heading1 text={category.toUpperCase()} styles={{ color: "text-primary-600" }} />

      <div className="flex flex-wrap justify-center gap-2">
        {techSkills.map((techSkill) => (
          <TechSkillItem key={techSkill.name} Icon={techSkill.Icon} />
        ))}
      </div>
    </div>
  );
};

export default TechSkillGroup;
