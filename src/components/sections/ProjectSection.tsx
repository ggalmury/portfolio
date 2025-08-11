import clsx from "clsx";

import { PROJECTS } from "@/constants/projects";

import SlideUpSection from "@/components/layouts/SlideUpSection";
import Content from "@/components/layouts/Content";
import ProjectPreviewUnit from "@/components/organisms/ProjectPreviewUnit";

const ProjectSection = () => {
  return (
    <SlideUpSection>
      <Content title="프로젝트">
        <div className={clsx("grid w-full gap-12", "md:grid-cols-2 md:gap-8", "lg:grid-cols-3")}>
          {PROJECTS.map((project) => (
            <ProjectPreviewUnit key={project.name} project={project} />
          ))}
        </div>
      </Content>
    </SlideUpSection>
  );
};

export default ProjectSection;
