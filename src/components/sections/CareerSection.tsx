import { careers } from "@/constants/careers";

import SlideUpSection from "@/components/layouts/SlideUpSection";
import Content from "@/components/layouts/Content";
import CareerItem from "@/components/molecules/CareerItem";

const CareerSection = () => {
  return (
    <SlideUpSection>
      <Content title="경력사항">
        <div className="flex flex-col gap-y-16">
          {careers.map((career) => (
            <CareerItem key={career.company} career={career} />
          ))}
        </div>
      </Content>
    </SlideUpSection>
  );
};

export default CareerSection;
