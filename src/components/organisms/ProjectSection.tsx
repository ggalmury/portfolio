import clsx from "clsx";

import { projects } from "@/constants/projects";

import ProjectItem from "@/components/molecules/ProjectItem";
import SlideUpSection from "@/components/organisms/layouts/SlideUpSection";
import Content from "@/components/organisms/layouts/Content";

const ProjectSection = () => {
  return (
    <SlideUpSection>
      <Content title="프로젝트">
        <div className={clsx("grid w-full gap-12", "md:grid-cols-2 md:gap-8", "lg:grid-cols-3")}>
          {projects.map((project) => (
            <ProjectItem key={project.name} project={project} />
          ))}
        </div>
      </Content>
    </SlideUpSection>
  );
};

export default ProjectSection;
