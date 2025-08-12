import IntroductionSection from "@/components/sections/IntroductionSection";
import InterviewSection from "@/components/sections/InterviewSection";
import TechSkillSection from "@/components/sections/TechSkillSection";
import CareerSection from "@/components/sections/CareerSection";
import ProjectSection from "@/components/sections/ProjectSection";
import EducationSection from "@/components/sections/EducationSection";
import ActivitySection from "@/components/sections/ActivitySection";

const MainPage = () => {
  return (
    <main className="flex flex-col items-center max-w-screen-xl min-h-screen mx-auto px-6">
      <IntroductionSection />

      <InterviewSection />

      <TechSkillSection />

      <CareerSection />

      <ProjectSection />

      <EducationSection />

      <ActivitySection />
    </main>
  );
};

export default MainPage;
