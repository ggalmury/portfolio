import Image from "next/image";

import clsx from "clsx";
import { MdClose } from "react-icons/md";

import { Project } from "@/types/project";

import Title2 from "@/components/atoms/typography/Title2";
import Headline1 from "@/components/atoms/typography/Headline1";
import Body1 from "@/components/atoms/typography/Body1";
import TechSkillCard from "@/components/molecules/TechSkillCard";
import BulletListCard from "@/components/molecules/BulletListCard";
import ProjectInfoCard from "@/components/molecules/ProjectInfoCard";

interface ProjectDetailUnitProps {
  project: Project;
  onClose: () => void;
}

const ProjectDetailUnit = ({ project, onClose }: ProjectDetailUnitProps) => {
  return (
    <div className="flex flex-col gap-8 w-full max-w-2xl max-h-[calc(100vh_-_6rem)] p-6 rounded-md border border-foreground/20 bg-background overflow-y-scroll">
      <div className="flex flex-col gap-4">
        <MdClose className="self-end cursor-pointer" size={32} onClick={onClose} />

        <div className={clsx("relative h-56 rounded-lg overflow-hidden", "md:h-96")}>
          <Image className="object-cover" src={project.imagePath} fill sizes="600px" alt={project.name} />
        </div>

        <div className="flex flex-col">
          <Title2 text={project.name} styles={{ color: "text-primary-600" }} />

          <Headline1 text={project.summary} styles={{ color: "text-gray-400" }} />
        </div>
      </div>

      <div className="flex flex-col items-start gap-8">
        <ProjectInfoCard title="프로젝트 설명">
          <Body1 text={project.description} />
        </ProjectInfoCard>

        <ProjectInfoCard title="프로젝트 기간">
          <Body1 text={`${project.startedAt} - ${project.endAt ?? "진행중"}`} />
        </ProjectInfoCard>

        <ProjectInfoCard title="기술 스택">
          <TechSkillCard techSkillKeys={project.techSkills} size={20} />
        </ProjectInfoCard>

        <ProjectInfoCard title="작업 내용">
          <BulletListCard items={project.tasks} />
        </ProjectInfoCard>

        {project.serviceUrl && (
          <ProjectInfoCard title="서비스 링크">
            <a href={project.serviceUrl}>
              <Body1 text={project.serviceUrl} />
            </a>
          </ProjectInfoCard>
        )}

        <ProjectInfoCard title="Github">
          <a href={project.githubUrl}>
            <Body1 text={project.githubUrl} />
          </a>
        </ProjectInfoCard>
      </div>
    </div>
  );
};

export default ProjectDetailUnit;
