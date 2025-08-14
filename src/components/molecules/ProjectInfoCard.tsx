import { ReactNode } from "react";

import Body1 from "@/components/atoms/typography/Body1";

interface ProjectInfoCardProps {
  title: string;
  children: ReactNode;
}

const ProjectInfoCard = ({ title, children }: ProjectInfoCardProps) => {
  return (
    <div className="flex flex-col gap-1">
      <Body1 text={title} styles={{ color: "text-gray-400" }} />

      {children}
    </div>
  );
};

export default ProjectInfoCard;
