import { FC, SVGProps } from "react";

export type TechSkillCategory = "language" | "web" | "frontend" | "backend" | "database" | "infra";

export interface TechSkill {
  name: string;
  category: TechSkillCategory;
  Icon: FC<SVGProps<SVGElement>>;
}
