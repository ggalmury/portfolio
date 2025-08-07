import Heading1 from "@/components/atoms/typography/Heading1";
import TechSkillItem from "@/components/atoms/TechSkillItem";

interface TechSkillGroupProps {
  category: string;
  techSkills: { [techSkillName: string]: any };
}

const TechSkillGroup = ({ category, techSkills }: TechSkillGroupProps) => {
  return (
    <div className="flex flex-col w-full items-center gap-4">
      <Heading1 text={category} styles={{ color: "text-primary-600" }} />

      <div className="flex flex-wrap justify-center gap-2">
        {Object.entries(techSkills).map(([name, Icon]) => (
          <TechSkillItem key={name} Icon={Icon} />
        ))}
      </div>
    </div>
  );
};

export default TechSkillGroup;
