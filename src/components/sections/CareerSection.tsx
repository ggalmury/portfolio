import { CAREERS } from "@/constants/careers";

import SlideUpSection from "@/components/layouts/SlideUpSection";
import Content from "@/components/layouts/Content";
import CareerInfoUnit from "@/components/organisms/CareerInfoUnit";

const CareerSection = () => {
  return (
    <SlideUpSection>
      <Content title="Career" subTitle="주요 경력과 업무 이력들입니다.">
        <div className="flex flex-col w-full gap-y-16">
          {CAREERS.map((career) => (
            <CareerInfoUnit key={career.company} career={career} />
          ))}
        </div>
      </Content>
    </SlideUpSection>
  );
};

export default CareerSection;
