import clsx from "clsx";

import { TechSkillCategory, categorizedTechSkills } from "@/constants/techskills";

import TechSkillGroup from "@/components/molecules/TechSkillGroup";
import SlideUpSection from "@/components/organisms/layouts/SlideUpSection";
import Content from "@/components/organisms/layouts/Content";

const TechSkillSection = () => {
  return (
    <SlideUpSection>
      <Content title="기술 스택 및 도구">
        <div className={clsx("flex flex-col gap-6", "md:flex-row md:justify-between md:gap-0")}>
          {Object.entries(categorizedTechSkills).map(([category, techSkills]) => (
            <TechSkillGroup key={category} category={category as TechSkillCategory} techSkills={techSkills} />
          ))}
        </div>
      </Content>
    </SlideUpSection>
  );
};

export default TechSkillSection;
