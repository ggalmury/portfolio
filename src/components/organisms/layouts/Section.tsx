import clsx from "clsx";
import { ReactNode } from "react";

interface SectionProps {
  children?: ReactNode;
}

const Section = ({ children }: SectionProps) => {
  return <section className={clsx("flex flex-col justify-center items-center w-full py-8 gap-y-8", "md:py-24")}>{children}</section>;
};

export default Section;
