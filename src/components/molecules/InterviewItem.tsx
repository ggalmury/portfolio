import Body1 from "@/components/atoms/typography/Body1";
import Heading1 from "@/components/atoms/typography/Heading1";

interface InterviewItemProps {
  question: string;
  answer: string;
}

const InterviewItem = ({ question, answer }: InterviewItemProps) => {
  return (
    <div className="flex flex-col px-4 py-2 gap-6 border-l-4 border-primary-600">
      <Heading1 text={`Q. ${question}`} />

      <Body1 text={answer} />
    </div>
  );
};

export default InterviewItem;
