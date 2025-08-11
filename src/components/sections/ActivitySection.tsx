import { ACTIVITIES } from "@/constants/activities";

import SlideUpSection from "@/components/layouts/SlideUpSection";
import Content from "@/components/layouts/Content";
import ActivityInfoUnit from "@/components/organisms/ActivityInfoUnit";

const ActivitySection = () => {
  return (
    <SlideUpSection>
      <Content title="대외활동">
        <div className="flex flex-col gap-y-16">
          {ACTIVITIES.map((activity) => (
            <ActivityInfoUnit key={activity.name} activity={activity} />
          ))}
        </div>
      </Content>
    </SlideUpSection>
  );
};

export default ActivitySection;
