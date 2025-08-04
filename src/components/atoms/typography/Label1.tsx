import clsx from "clsx";

import TypographyProps from "@/components/atoms/typography/props/typographyProps";

const Label1 = ({ text, styles }: TypographyProps) => {
  return <p className={clsx("text-label1 leading-label1", styles?.color, styles?.weight ?? "font-bold")}>{text}</p>;
};

export default Label1;
