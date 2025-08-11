import { TechSkillCategory } from "@/types/techskill";
import { TechSkillKey, TECHSKILLS } from "@/constants/techskills";

import Heading1 from "@/components/atoms/typography/Heading1";
import TechSkillGroup from "@/components/molecules/TechSkillGroup";

interface CategorizedTechSkillGroupProps {
  category: TechSkillCategory;
}

const CategorizedTechSkillGroup = ({ category }: CategorizedTechSkillGroupProps) => {
  const techSkillKeys: TechSkillKey[] = Object.entries(TECHSKILLS)
    .filter(([_, skill]) => skill.category === category)
    .map(([key]) => key as TechSkillKey);

  return (
    <div className="flex flex-col w-full items-center gap-4">
      <Heading1 text={category.toUpperCase()} styles={{ color: "text-primary-600" }} />

      <TechSkillGroup techSkillKeys={techSkillKeys} />
    </div>
  );
};

export default CategorizedTechSkillGroup;
