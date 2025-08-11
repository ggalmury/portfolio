import Image from "next/image";

import clsx from "clsx";
import { MdClose } from "react-icons/md";

import { Project } from "@/constants/projects";
import { TechSkillKey, TECHSKILLS } from "@/constants/techskills";

import Title2 from "@/components/atoms/typography/Title2";
import Headline1 from "@/components/atoms/typography/Headline1";
import Body1 from "@/components/atoms/typography/Body1";
import TechSkillItem from "@/components/atoms/TechSkillItem";
import ProjectInfo from "@/components/molecules/ProjectInfo";

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

const ProjectDetail = ({ project, onClose }: ProjectDetailProps) => {
  return (
    <div className="group flex flex-col gap-8 w-full max-w-2xl max-h-[calc(100vh_-_6rem)] p-6 rounded-md border border-foreground/20 bg-background overflow-y-scroll">
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

      <ProjectInfo title="프로젝트 설명">
        <Body1 text={project.description} />
      </ProjectInfo>

      <ProjectInfo title="프로젝트 기간">
        <Body1 text={`${project.startedAt} - ${project.endAt ?? "진행중"}`} />
      </ProjectInfo>

      <ProjectInfo title="기술 스택">
        <div className="flex gap-2">
          {project.techSkills.map((techSkill) => {
            const Icon: any = TECHSKILLS[techSkill as TechSkillKey].Icon;

            return <TechSkillItem key={techSkill} Icon={Icon} size={20} />;
          })}
        </div>
      </ProjectInfo>

      <ProjectInfo title="작업 내용">
        <ul className="list-disc pl-5 space-y-1">
          {project.tasks.map((task) => (
            <li key={task}>
              <Body1 text={task} />
            </li>
          ))}
        </ul>
      </ProjectInfo>

      {project.serviceUrl && (
        <ProjectInfo title="서비스 링크">
          <a href={project.serviceUrl}>
            <Body1 text={project.serviceUrl} />
          </a>
        </ProjectInfo>
      )}

      <ProjectInfo title="Github">
        <a href={project.githubUrl}>
          <Body1 text={project.githubUrl} />
        </a>
      </ProjectInfo>
    </div>
  );
};

export default ProjectDetail;
