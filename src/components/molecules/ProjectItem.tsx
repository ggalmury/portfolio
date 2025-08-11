"use client";

import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";

import { Project } from "@/constants/projects";
import { TechSkillKey, TECHSKILLS } from "@/constants/techskills";

import Modal from "@/components/layouts/Modal";
import Heading1 from "@/components/atoms/typography/Heading1";
import Body1 from "@/components/atoms/typography/Body1";
import TechSkillItem from "@/components/atoms/TechSkillItem";
import ProjectDetail from "@/components/organisms/ProjectDetail";

interface ProjectItemProps {
  project: Project;
}

const ProjectItem = ({ project }: ProjectItemProps) => {
  const [isDetailOpen, setIsDetailOpen] = useState<boolean>(false);

  const detailOpen = (): void => setIsDetailOpen(true);

  const detailClose = (): void => setIsDetailOpen(false);

  return (
    <div
      className={clsx("flex flex-col gap-4 cursor-pointer transition-transform duration-200 hover:scale-105", "md:max-w-md")}
      onClick={detailOpen}
    >
      <div className="relative h-48 rounded-lg overflow-hidden">
        <Image className="object-cover" src={project.imagePath} fill sizes="300px" alt={project.name} />
      </div>

      <div className="flex flex-col">
        <Heading1 text={project.name} styles={{ color: "text-primary-600" }} />

        <Body1 text={project.summary} styles={{ color: "text-gray-400" }} />
      </div>

      <div className="flex gap-2">
        {project.techSkills.map((techSkill) => {
          const Icon: any = TECHSKILLS[techSkill as TechSkillKey].Icon;

          return <TechSkillItem key={techSkill} Icon={Icon} size={20} />;
        })}
      </div>

      <Modal open={isDetailOpen} onClose={detailClose}>
        <ProjectDetail project={project} onClose={detailClose} />
      </Modal>
    </div>
  );
};

export default ProjectItem;
