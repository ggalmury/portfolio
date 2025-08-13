import { TechSkillKey } from "@/constants/techskills";

export interface Project {
  name: string;
  summary: string;
  description: string;
  startedAt: string;
  endAt?: string;
  coreFeatures: string[];
  tasks: string[];
  techSkills: TechSkillKey[];
  githubUrl: string;
  serviceUrl?: string;
  imagePath: string;
}
