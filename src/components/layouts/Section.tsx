import clsx from "clsx";
import { ReactNode } from "react";

interface SectionProps {
  fullScreen?: boolean;
  children: ReactNode;
}

const Section = ({ fullScreen, children }: SectionProps) => {
  return (
    <section className={clsx("flex flex-col justify-center items-center w-full py-8 gap-y-8", "md:py-24", fullScreen && "h-screen")}>
      {children}
    </section>
  );
};

export default Section;
