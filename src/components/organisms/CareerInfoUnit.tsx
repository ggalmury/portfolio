"use client";

import clsx from "clsx";

import { Career } from "@/types/career";

import Heading1 from "@/components/atoms/typography/Heading1";
import Body1 from "@/components/atoms/typography/Body1";
import BulletListCard from "@/components/molecules/BulletListCard";
import TechSkillCard from "@/components/molecules/TechSkillCard";

interface CareerInfoUnitProps {
  career: Career;
}

const CareerInfoUnit = ({ career }: CareerInfoUnitProps) => {
  return (
    <div className={clsx("flex flex-col gap-2", "md:flex-row md:gap-10")}>
      <Body1 text={`${career.joinedAt} - ${career.resignedAt}`} styles={{ color: "text-gray-400" }} />

      <div className="flex flex-col flex-1 items-start gap-8">
        <div className="flex flex-col">
          <Heading1 text={career.company} styles={{ color: "text-primary-600" }} />

          <Body1 text={career.description} styles={{ color: "text-gray-400" }} />

          <Body1 text={career.role} styles={{ color: "text-gray-400" }} />
        </div>

        <BulletListCard items={career.tasks} />

        <TechSkillCard techSkillKeys={career.techSkills} size={20} />
      </div>
    </div>
  );
};

export default CareerInfoUnit;
