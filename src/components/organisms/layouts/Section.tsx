import { ReactNode } from "react";

interface SectionProps {
  children?: ReactNode;
}

const Section = ({ children }: SectionProps) => {
  return <section className="flex flex-col justify-center items-center w-full py-24 gap-y-8">{children}</section>;
};

export default Section;
