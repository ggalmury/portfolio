import { EDUCATIONS } from "@/constants/educations";

import SlideUpSection from "@/components/layouts/SlideUpSection";
import Content from "@/components/layouts/Content";
import EducationInfoUnit from "@/components/organisms/EducationInfoUnit";

const EducationSection = () => {
  return (
    <SlideUpSection>
      <Content title="Education">
        <div className="flex flex-col w-full gap-y-16">
          {EDUCATIONS.map((education) => (
            <EducationInfoUnit key={education.schoolName} education={education} />
          ))}
        </div>
      </Content>
    </SlideUpSection>
  );
};

export default EducationSection;
