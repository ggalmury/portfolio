import clsx from "clsx";

import IntroductionSection from "@/components/sections/IntroductionSection";
import InterviewSection from "@/components/sections/InterviewSection";
import TechSkillSection from "@/components/sections/TechSkillSection";
import CareerSection from "@/components/sections/CareerSection";
import ProjectSection from "@/components/sections/ProjectSection";
import EducationSection from "@/components/sections/EducationSection";
import ExtracurricularSection from "@/components/sections/ExtracurricularSection";
import OutroSection from "@/components/sections/OutroSection";

const MainPage = () => {
  return (
    <main className={clsx("flex flex-col items-center max-w-screen-xl min-h-screen mx-auto px-6 gap-32", "md:gap-48", "lg:gap-60")}>
      <IntroductionSection />

      <InterviewSection />

      <TechSkillSection />

      <CareerSection />

      <ProjectSection />

      <EducationSection />

      <ExtracurricularSection />

      <OutroSection />
    </main>
  );
};

export default MainPage;
