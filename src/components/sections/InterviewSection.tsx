import { INTERVIEWS } from "@/constants/interviews";

import SlideUpSection from "@/components/layouts/SlideUpSection";
import Content from "@/components/layouts/Content";
import InterviewItem from "@/components/molecules/InterviewItem";

const InterviewSection = () => {
  return (
    <SlideUpSection>
      <Content title="인터뷰">
        <div className="flex flex-col gap-y-8">
          {INTERVIEWS.map((interview) => (
            <InterviewItem key={interview.question} interview={interview} />
          ))}
        </div>
      </Content>
    </SlideUpSection>
  );
};

export default InterviewSection;
