import { ReactNode } from "react";

import Title1 from "@/components/atoms/typography/Title1";
import Headline1 from "@/components/atoms/typography/Headline1";

interface ContentProps {
  title: string;
  subTitle?: string;
  children: ReactNode;
}

const Content = ({ title, subTitle, children }: ContentProps) => {
  return (
    <div className="flex flex-col justify-center items-center w-full gap-10">
      <div className="flex flex-col items-center gap-1">
        <Title1 text={title} />

        {subTitle && <Headline1 text={subTitle} styles={{ color: "text-gray-400" }} />}
      </div>

      {children}
    </div>
  );
};

export default Content;
