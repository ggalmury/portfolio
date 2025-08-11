import clsx from "clsx";

import SlideUpSection from "@/components/layouts/SlideUpSection";
import Content from "@/components/layouts/Content";
import CategorizedTechSkillGroup from "@/components/organisms/CategorizedTechSkillGroup";

const TechSkillSection = () => {
  return (
    <SlideUpSection>
      <Content title="기술 스택 및 도구">
        <div className={clsx("flex flex-col gap-6", "md:flex-row md:justify-between")}>
          <CategorizedTechSkillGroup category="language" />

          <CategorizedTechSkillGroup category="web" />

          <CategorizedTechSkillGroup category="frontend" />

          <CategorizedTechSkillGroup category="backend" />

          <CategorizedTechSkillGroup category="database" />

          <CategorizedTechSkillGroup category="infra" />
        </div>
      </Content>
    </SlideUpSection>
  );
};

export default TechSkillSection;
