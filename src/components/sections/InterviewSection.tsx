import clsx from "clsx";

import { INTERVIEWS } from "@/constants/interviews";

import SlideUpSection from "@/components/layouts/SlideUpSection";
import Content from "@/components/layouts/Content";
import InterviewCard from "@/components/molecules/InterviewCard";

const InterviewSection = () => {
  return (
    <SlideUpSection>
      <Content title="Interview">
        <div className={clsx("flex flex-col gap-10", "md:[&>*]:flex-1", "lg:flex-row")}>
          {INTERVIEWS.map((interview) => (
            <InterviewCard key={interview.question} interview={interview} />
          ))}
        </div>
      </Content>
    </SlideUpSection>
  );
};

export default InterviewSection;
