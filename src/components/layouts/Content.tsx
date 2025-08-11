import { ReactNode } from "react";

import Title1 from "@/components/atoms/typography/Title1";

interface ContentProps {
  title: string;
  children: ReactNode;
}

const Content = ({ title, children }: ContentProps) => {
  return (
    <div className="flex flex-col justify-center items-center w-full gap-y-6">
      <Title1 text={title} />

      {children}
    </div>
  );
};

export default Content;
