import { TechSkill } from "@/types/techskill";

import { Javascript, Typescript, Dart } from "@/components/icons/techskills/language";
import { HTML5, CSS3, SCSS, TailwindCSS } from "@/components/icons/techskills/web";
import { React, ReactNative, Nextjs, Flutter, Zustand, Redux } from "@/components/icons/techskills/frontend";
import { NestJS, ExpressJS } from "@/components/icons/techskills/backend";
import { MySQL, Sqlite, Redis } from "@/components/icons/techskills/database";
import { Git, Github, Vercel, CloudFlare, AWS } from "@/components/icons/techskills/infra";

export const TECHSKILLS = {
  javascript: { name: "Javascript", category: "language", Icon: Javascript },
  typescript: { name: "Typescript", category: "language", Icon: Typescript },
  dart: { name: "Dart", category: "language", Icon: Dart },

  html5: { name: "HTML5", category: "web", Icon: HTML5 },
  css3: { name: "CSS3", category: "web", Icon: CSS3 },
  scss: { name: "SCSS", category: "web", Icon: SCSS },
  tailwindcss: { name: "TailwindCSS", category: "web", Icon: TailwindCSS },

  react: { name: "React", category: "frontend", Icon: React },
  nextjs: { name: "Next.js", category: "frontend", Icon: Nextjs },
  reactnative: { name: "React Native", category: "frontend", Icon: ReactNative },
  flutter: { name: "Flutter", category: "frontend", Icon: Flutter },
  zustand: { name: "Zustand", category: "frontend", Icon: Zustand },
  redux: { name: "Redux", category: "frontend", Icon: Redux },

  nestjs: { name: "NestJS", category: "backend", Icon: NestJS },
  expressjs: { name: "ExpressJS", category: "backend", Icon: ExpressJS },

  mysql: { name: "MySQL", category: "database", Icon: MySQL },
  sqlite: { name: "Sqlite", category: "database", Icon: Sqlite },
  redis: { name: "Redis", category: "database", Icon: Redis },

  git: { name: "Git", category: "infra", Icon: Git },
  github: { name: "Github", category: "infra", Icon: Github },
  vercel: { name: "Vercel", category: "infra", Icon: Vercel },
  cloudflare: { name: "CloudFlare", category: "infra", Icon: CloudFlare },
  aws: { name: "AWS", category: "infra", Icon: AWS },
} as const satisfies Record<string, TechSkill>;

export type TechSkillKey = keyof typeof TECHSKILLS;
