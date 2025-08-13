import { Education } from "@/types/education";

import BulletListCard from "@/components/molecules/BulletListCard";
import TimelineUnit from "@/components/organisms/TimelineUnit";

interface EducationInfoUnitProps {
  education: Education;
}

const EducationInfoUnit = ({ education }: EducationInfoUnitProps) => {
  return (
    <TimelineUnit
      subject={education.schoolName}
      description={education.major}
      startedAt={education.enteredAt}
      endedAt={education.graduatedAt}
    >
      <BulletListCard items={education.curriculum} />
    </TimelineUnit>
  );
};

export default EducationInfoUnit;
