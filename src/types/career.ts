import { TechSkillKey } from "@/constants/techskills";

export interface Career {
  company: string;
  description: string;
  joinedAt: string;
  resignedAt: string;
  role: string;
  tasks: string[];
  techSkills: TechSkillKey[];
}
