import clsx from "clsx";
import { ReactNode } from "react";

interface SectionProps {
  fullScreen?: boolean;
  children: ReactNode;
}

const Section = ({ fullScreen, children }: SectionProps) => {
  return <section className={clsx("flex flex-col justify-center items-center w-full gap-8", fullScreen && "h-screen")}>{children}</section>;
};

export default Section;
