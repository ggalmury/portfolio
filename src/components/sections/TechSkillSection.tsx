import clsx from "clsx";

import SlideUpSection from "@/components/layouts/SlideUpSection";
import Content from "@/components/layouts/Content";
import CategorizedTechSkillUnit from "@/components/organisms/CategorizedTechSkillUnit";

const TechSkillSection = () => {
  return (
    <SlideUpSection>
      <Content title="Skill" subTitle="현재 보유하고 있는 기술 스택과 도구들입니다">
        <div className={clsx("flex flex-col gap-8", "md:flex-row md:justify-between md:gap-4")}>
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
