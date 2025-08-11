"use client";

import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";

import { Project } from "@/types/project";

import Modal from "@/components/layouts/Modal";
import Heading1 from "@/components/atoms/typography/Heading1";
import Body1 from "@/components/atoms/typography/Body1";
import TechSkillCard from "@/components/molecules/TechSkillCard";
import ProjectDetailUnit from "@/components/organisms/ProjectDetailUnit";

interface ProjectPreviewUnitProps {
  project: Project;
}

const ProjectPreviewUnit = ({ project }: ProjectPreviewUnitProps) => {
  const [isDetailOpen, setIsDetailOpen] = useState<boolean>(false);

  const openDetail = (): void => setIsDetailOpen(true);

  const closeDetail = (): void => setIsDetailOpen(false);

  return (
    <div
      className={clsx("flex flex-col gap-4 cursor-pointer transition-transform duration-200", "hover:scale-105", "md:max-w-md")}
      onClick={openDetail}
    >
      <div className="relative h-48 rounded-lg overflow-hidden">
        <Image className="object-cover" src={project.imagePath} fill sizes="300px" alt={project.name} />
      </div>

      <div className="flex flex-col items-start gap-4">
        <div className="flex flex-col">
          <Heading1 text={project.name} styles={{ color: "text-primary-600" }} />

          <Body1 text={project.summary} styles={{ color: "text-gray-400" }} />
        </div>

        <TechSkillCard techSkillKeys={project.techSkills} size={20} />
      </div>

      <Modal open={isDetailOpen} onClose={closeDetail}>
        <ProjectDetailUnit project={project} onClose={closeDetail} />
      </Modal>
    </div>
  );
};

export default ProjectPreviewUnit;
