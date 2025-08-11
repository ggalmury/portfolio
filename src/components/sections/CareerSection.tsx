import { CAREERS } from "@/constants/careers";

import SlideUpSection from "@/components/layouts/SlideUpSection";
import Content from "@/components/layouts/Content";
import CareerInfoUnit from "@/components/organisms/CareerInfoUnit";

const CareerSection = () => {
  return (
    <SlideUpSection>
      <Content title="경력사항">
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
