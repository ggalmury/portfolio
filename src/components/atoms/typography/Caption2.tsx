import clsx from "clsx";

import TypographyProps from "@/components/atoms/typography/props/typographyProps";

const Caption2 = ({ text, styles }: TypographyProps) => {
  return <span className={clsx("text-caption2 leading-caption2", styles?.color, styles?.weight ?? "font-normal")}>{text}</span>;
};

export default Caption2;
