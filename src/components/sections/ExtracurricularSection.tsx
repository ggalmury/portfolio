import { EXTRACURRICULARS } from "@/constants/extracurriculars";

import SlideUpSection from "@/components/layouts/SlideUpSection";
import Content from "@/components/layouts/Content";
import ActivityInfoUnit from "@/components/organisms/ExtracurricularInfoUnit";

const ExtracurricularSection = () => {
  return (
    <SlideUpSection>
      <Content title="Extracurricular">
        <div className="flex flex-col w-full gap-y-16">
          {EXTRACURRICULARS.map((extracurricular) => (
            <ActivityInfoUnit key={extracurricular.name} extracurricular={extracurricular} />
          ))}
        </div>
      </Content>
    </SlideUpSection>
  );
};

export default ExtracurricularSection;
