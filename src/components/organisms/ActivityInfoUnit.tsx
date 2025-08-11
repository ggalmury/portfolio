"use client";

import clsx from "clsx";

import { Activity } from "@/types/activity";

import Heading1 from "@/components/atoms/typography/Heading1";
import Body1 from "@/components/atoms/typography/Body1";

interface ActivityInfoUnitProps {
  activity: Activity;
}

const ActivityInfoUnit = ({ activity }: ActivityInfoUnitProps) => {
  return (
    <div className={clsx("flex flex-col gap-2", "md:flex-row md:gap-10")}>
      <Body1 text={`${activity.startedAt} - ${activity.endedAt}`} styles={{ color: "text-gray-400" }} />

      <div className="flex flex-col flex-1 items-start gap-4">
        <div className="flex flex-col">
          <Heading1 text={activity.name} styles={{ color: "text-primary-600" }} />

          <Body1 text={activity.organizer} styles={{ color: "text-gray-400" }} />
        </div>

        <Body1 text={activity.description} />

        {activity.awards && (
          <div className="flex gap-2">
            {activity.awards.map((award) => (
              <Body1 key={award} text={`🏆 ${award}`} styles={{ weight: "font-bold" }} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ActivityInfoUnit;
