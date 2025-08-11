import clsx from "clsx";

import { ReactNode } from "react";

import Body1 from "@/components/atoms/typography/Body1";

interface TimelineUnitProps {
  startedAt: string;
  endedAt: string;
  children: ReactNode;
}

const TimelineUnit = ({ startedAt, endedAt, children }: TimelineUnitProps) => {
  return (
    <div className={clsx("flex flex-col gap-2", "md:flex-row md:gap-10")}>
      <div className={clsx("flex flex-2", "md:justify-end")}>
        <Body1 text={`${startedAt} - ${endedAt}`} styles={{ color: "text-gray-400" }} />
      </div>

      <div className="flex-5">{children}</div>
    </div>
  );
};

export default TimelineUnit;
