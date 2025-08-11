"use client";

import clsx from "clsx";

import { Education } from "@/types/education";

import Heading1 from "@/components/atoms/typography/Heading1";
import Body1 from "@/components/atoms/typography/Body1";
import BulletListCard from "@/components/molecules/BulletListCard";

interface EducationInfoUnitProps {
  education: Education;
}

const EducationInfoUnit = ({ education }: EducationInfoUnitProps) => {
  return (
    <div className={clsx("flex flex-col gap-2", "md:flex-row md:gap-10")}>
      <Body1 text={`${education.enteredAt} - ${education.graduatedAt}`} styles={{ color: "text-gray-400" }} />

      <div className="flex flex-col flex-1 items-start gap-8">
        <div className="flex flex-col">
          <Heading1 text={education.schoolName} styles={{ color: "text-primary-600" }} />

          <Body1 text={education.major} styles={{ color: "text-gray-400" }} />
        </div>

        <BulletListCard items={education.curriculum} />
      </div>
    </div>
  );
};

export default EducationInfoUnit;
