import { careers } from "@/constants/careers";

import CareerItem from "@/components/molecules/CareerItem";
import SlideUpSection from "@/components/organisms/layouts/SlideUpSection";
import Content from "@/components/organisms/layouts/Content";

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
