import { TechSkill } from "@/types/techskill";

import { TechSkillKey, TECHSKILLS } from "@/constants/techskills";

import TechSkillItem from "@/components/atoms/TechSkillItem";

interface TechSkillGroupProps {
  techSkillKeys: TechSkillKey[];
  size?: number;
}

const TechSkillGroup = ({ techSkillKeys, size }: TechSkillGroupProps) => {
  const techSkills: TechSkill[] = techSkillKeys.map((techSkillKey) => TECHSKILLS[techSkillKey]);

  return (
    <div className="flex flex-wrap justify-center gap-2">
      {techSkills.map((techSkill) => (
        <TechSkillItem key={techSkill.name} Icon={techSkill.Icon} size={size} />
      ))}
    </div>
  );
};

export default TechSkillGroup;
