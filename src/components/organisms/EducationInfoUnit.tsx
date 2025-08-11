import { Education } from "@/types/education";

import Heading1 from "@/components/atoms/typography/Heading1";
import Body1 from "@/components/atoms/typography/Body1";
import BulletListCard from "@/components/molecules/BulletListCard";
import TimelineUnit from "@/components/organisms/TimelineUnit";

interface EducationInfoUnitProps {
  education: Education;
}

const EducationInfoUnit = ({ education }: EducationInfoUnitProps) => {
  return (
    <TimelineUnit startedAt={education.enteredAt} endedAt={education.graduatedAt}>
      <div className="flex flex-col flex-1 items-start gap-8">
        <div className="flex flex-col">
          <Heading1 text={education.schoolName} styles={{ color: "text-primary-600" }} />

          <Body1 text={education.major} styles={{ color: "text-gray-400" }} />
        </div>

        <BulletListCard items={education.curriculum} />
      </div>
    </TimelineUnit>
  );
};

export default EducationInfoUnit;
