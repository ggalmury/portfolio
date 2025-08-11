import { Interview } from "@/types/interview";

import Body1 from "@/components/atoms/typography/Body1";
import Heading1 from "@/components/atoms/typography/Heading1";

interface InterviewItemProps {
  interview: Interview;
}

const InterviewItem = ({ interview }: InterviewItemProps) => {
  return (
    <div className="flex flex-col px-4 py-2 gap-6 border-l-2 border-primary-600">
      <Heading1 text={`Q. ${interview.question}`} styles={{ color: "text-primary-600" }} />

      <Body1 text={interview.answer} />
    </div>
  );
};

export default InterviewItem;
