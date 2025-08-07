import clsx from "clsx";

import languageTechSkillMap from "@/constants/techskills/language";
import webTechSkillMap from "@/constants/techskills/web";
import frontendTechSkillMap from "@/constants/techskills/frontend";
import backendTechSkillMap from "@/constants/techskills/backend";
import databaseTechSkillMap from "@/constants/techskills/database";
import infraTechSkillMap from "@/constants/techskills/infra";

import TechSkillGroup from "@/components/molecules/TechSkillGroup";
import SlideUpSection from "@/components/organisms/layouts/SlideUpSection";
import Content from "@/components/organisms/layouts/Content";

const TechSkillSection = () => {
  return (
    <SlideUpSection>
      <Content title="기술 스택 및 도구">
        <div className={clsx("flex flex-col gap-6", "md:flex-row md:justify-between md:gap-0")}>
          <TechSkillGroup category="Language" techSkills={languageTechSkillMap} />

          <TechSkillGroup category="Web" techSkills={webTechSkillMap} />

          <TechSkillGroup category="Frontend" techSkills={frontendTechSkillMap} />

          <TechSkillGroup category="Backend" techSkills={backendTechSkillMap} />

          <TechSkillGroup category="Database" techSkills={databaseTechSkillMap} />

          <TechSkillGroup category="Infra" techSkills={infraTechSkillMap} />
        </div>
      </Content>
    </SlideUpSection>
  );
};

export default TechSkillSection;
