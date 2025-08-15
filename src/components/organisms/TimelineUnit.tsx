import clsx from "clsx";

import { ReactNode } from "react";

import Heading1 from "@/components/atoms/typography/Heading1";
import Headline1 from "@/components/atoms/typography/Headline1";
import Body1 from "@/components/atoms/typography/Body1";

interface TimelineUnitProps {
  subject: string;
  description: string;
  startedAt: string;
  endedAt: string;
  children: ReactNode;
}

const TimelineUnit = ({ subject, description, startedAt, endedAt, children }: TimelineUnitProps) => {
  return (
    <div className={clsx("flex flex-col gap-4", "md:flex-row md:gap-0")}>
      <div className="flex flex-col flex-2 justify-start">
        <Heading1 text={subject} styles={{ color: "text-primary-600" }} />

        <Headline1 text={description} styles={{ color: "text-gray-400" }} />

        <Body1 text={`${startedAt} - ${endedAt}`} styles={{ color: "text-gray-400" }} />
      </div>

      <div className="flex-5">{children}</div>
    </div>
  );
};

export default TimelineUnit;
