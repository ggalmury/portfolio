import { Extracurricular } from "@/types/extracurricular";

import Body1 from "@/components/atoms/typography/Body1";
import BulletListCard from "@/components/molecules/BulletListCard";
import TimelineUnit from "@/components/organisms/TimelineUnit";

interface ExtracurricularInfoUnitProps {
  extracurricular: Extracurricular;
}

const ExtracurricularInfoUnit = ({ extracurricular }: ExtracurricularInfoUnitProps) => {
  return (
    <TimelineUnit
      subject={extracurricular.name}
      description={extracurricular.organizer}
      startedAt={extracurricular.startedAt}
      endedAt={extracurricular.endedAt}
    >
      <div className="flex flex-col flex-1 items-start gap-4">
        <Body1 text={extracurricular.description} />

        <BulletListCard items={extracurricular.tasks} />

        {extracurricular.awards && (
          <div className="flex gap-2">
            {extracurricular.awards.map((award) => (
              <Body1 key={award} text={`🏆 ${award}`} styles={{ weight: "font-bold" }} />
            ))}
          </div>
        )}
      </div>
    </TimelineUnit>
  );
};

export default ExtracurricularInfoUnit;
