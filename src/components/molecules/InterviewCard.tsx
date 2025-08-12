import { LuQuote } from "react-icons/lu";

import { Interview } from "@/types/interview";

import Body1 from "@/components/atoms/typography/Body1";
import Heading2 from "@/components/atoms/typography/Heading2";
import Label1 from "@/components/atoms/typography/Label1";

interface InterviewCardProps {
  interview: Interview;
}

const InterviewCard = ({ interview }: InterviewCardProps) => {
  return (
    <div className="flex flex-col gap-4">
      <LuQuote size={24} className="text-gray-400" />

      <Heading2 text={interview.question} styles={{ color: "text-primary-600" }} />

      <Body1 text={interview.answer} />

      <div className="pl-2 border-l-2 border-primary-600">
        <Label1 text={interview.summary} styles={{ color: "text-gray-400" }} />
      </div>
    </div>
  );
};

export default InterviewCard;
