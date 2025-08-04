import clsx from "clsx";

import TypographyProps from "@/components/atoms/typography/props/typographyProps";

const Body2 = ({ text, styles }: TypographyProps) => {
  return <p className={clsx("text-body2 leading-body2", styles?.color, styles?.weight ?? "font-normal")}>{text}</p>;
};

export default Body2;
