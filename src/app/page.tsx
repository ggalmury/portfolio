import clsx from "clsx";

import IntroductionSection from "@/components/organisms/IntroductionSection";

const MainPage = () => {
  return (
    <main className={clsx("flex flex-col w-full max-w-screen-lg min-h-screen mx-auto px-5 items-center", "md:px-8", "lg:px-10")}>
      <IntroductionSection />
    </main>
  );
};

export default MainPage;
