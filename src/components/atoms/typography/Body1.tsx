import clsx from "clsx";

import TypographyProps from "@/components/atoms/typography/props/typographyProps";

const Body1 = ({ text, styles }: TypographyProps) => {
  return <p className={clsx("text-body1 leading-body1", styles?.color, styles?.weight ?? "font-normal")}>{text}</p>;
};

export default Body1;
