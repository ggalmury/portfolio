import { Career } from "@/types/career";

import Headline1 from "@/components/atoms/typography/Headline1";
import BulletListCard from "@/components/molecules/BulletListCard";
import TechSkillCard from "@/components/molecules/TechSkillCard";
import TimelineUnit from "@/components/organisms/TimelineUnit";

interface CareerInfoUnitProps {
  career: Career;
}

const CareerInfoUnit = ({ career }: CareerInfoUnitProps) => {
  return (
    <TimelineUnit subject={career.company} description={career.role} startedAt={career.joinedAt} endedAt={career.resignedAt}>
      <div className="flex flex-col items-start gap-6">
        <Headline1 text={career.description} />

        <BulletListCard items={career.tasks} />

        <TechSkillCard techSkillKeys={career.techSkills} size={20} />
      </div>
    </TimelineUnit>
  );
};

export default CareerInfoUnit;
