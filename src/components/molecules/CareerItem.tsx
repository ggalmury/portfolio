"use client";

import clsx from "clsx";

import { TechSkillKey, TECHSKILLS } from "@/constants/techskills";
import { Career } from "@/constants/careers";

import Heading1 from "@/components/atoms/typography/Heading1";
import Body1 from "@/components/atoms/typography/Body1";
import TechSkillItem from "@/components/atoms/TechSkillItem";

interface CareerItemProps {
  career: Career;
}

const CareerItem = ({ career }: CareerItemProps) => {
  return (
    <div className={clsx("flex flex-col gap-2", "md:flex-row md:gap-10")}>
      <Body1 text={`${career.joinedAt} - ${career.resignedAt}`} styles={{ color: "text-gray-400" }} />

      <div className="flex flex-col flex-1 gap-8">
        <div className="flex flex-col">
          <Heading1 text={career.company} styles={{ color: "text-primary-600" }} />

          <Body1 text={career.description} styles={{ color: "text-gray-400" }} />

          <Body1 text={career.role} styles={{ color: "text-gray-400" }} />
        </div>

        <ul className="list-disc pl-5 space-y-1">
          {career.tasks.map((task) => (
            <li key={task}>
              <Body1 text={task} />
            </li>
          ))}
        </ul>

        <div className="flex gap-2">
          {career.techSkills.map((techSkill) => {
            const Icon: any = TECHSKILLS[techSkill as TechSkillKey].Icon;

            return <TechSkillItem key={techSkill} Icon={Icon} size={20} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default CareerItem;
