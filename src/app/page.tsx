import clsx from "clsx";

import IntroductionSection from "@/components/organisms/IntroductionSection";
import InterviewSection from "@/components/organisms/InterviewSection";
import TechSkillSection from "@/components/organisms/TechSkillSection";
import CareerSection from "@/components/organisms/CareerSection";

const MainPage = () => {
  return (
    <main className={clsx("flex flex-col w-full max-w-screen-lg min-h-screen mx-auto px-5 items-center", "md:px-8", "lg:px-10")}>
      <IntroductionSection />

      <InterviewSection />

      <TechSkillSection />

      <CareerSection />
    </main>
  );
};

export default MainPage;
