import clsx from "clsx";

import SlideUpSection from "@/components/layouts/SlideUpSection";
import Content from "@/components/layouts/Content";
import CategorizedTechSkillUnit from "@/components/organisms/CategorizedTechSkillUnit";

const TechSkillSection = () => {
  return (
    <SlideUpSection>
      <Content title="기술 스택 및 도구">
        <div className={clsx("flex flex-col gap-6", "md:flex-row md:justify-between")}>
          <CategorizedTechSkillUnit category="language" />

          <CategorizedTechSkillUnit category="web" />

          <CategorizedTechSkillUnit category="frontend" />

          <CategorizedTechSkillUnit category="backend" />

          <CategorizedTechSkillUnit category="database" />

          <CategorizedTechSkillUnit category="infra" />
        </div>
      </Content>
    </SlideUpSection>
  );
};

export default TechSkillSection;
