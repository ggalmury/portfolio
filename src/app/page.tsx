import clsx from "clsx";

import IntroductionSection from "@/components/sections/IntroductionSection";
import InterviewSection from "@/components/sections/InterviewSection";
import TechSkillSection from "@/components/sections/TechSkillSection";
import CareerSection from "@/components/sections/CareerSection";
import ProjectSection from "@/components/sections/ProjectSection";
import EducationSection from "@/components/sections/EducationSection";

const MainPage = () => {
  return (
    <main className={clsx("flex flex-col w-full max-w-screen-lg min-h-screen mx-auto px-5 items-center", "md:px-8", "lg:px-10")}>
      <IntroductionSection />

      <InterviewSection />

      <TechSkillSection />

      <CareerSection />

      <ProjectSection />

      <EducationSection />
    </main>
  );
};

export default MainPage;
