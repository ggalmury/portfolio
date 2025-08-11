import { Career } from "@/types/career";

import Heading1 from "@/components/atoms/typography/Heading1";
import Body1 from "@/components/atoms/typography/Body1";
import BulletListCard from "@/components/molecules/BulletListCard";
import TechSkillCard from "@/components/molecules/TechSkillCard";
import TimelineUnit from "@/components/organisms/TimelineUnit";

interface CareerInfoUnitProps {
  career: Career;
}

const CareerInfoUnit = ({ career }: CareerInfoUnitProps) => {
  return (
    <TimelineUnit startedAt={career.joinedAt} endedAt={career.resignedAt}>
      <div className="flex flex-col items-start gap-8">
        <div className="flex flex-col">
          <Heading1 text={career.company} styles={{ color: "text-primary-600" }} />

          <Body1 text={career.description} styles={{ color: "text-gray-400" }} />

          <Body1 text={career.role} styles={{ color: "text-gray-400" }} />
        </div>

        <BulletListCard items={career.tasks} />

        <TechSkillCard techSkillKeys={career.techSkills} size={20} />
      </div>
    </TimelineUnit>
  );
};

export default CareerInfoUnit;
