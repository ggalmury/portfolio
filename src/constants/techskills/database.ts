import { MySQL, Sqlite, Redis } from "@/components/icons/techskills/database";

const databaseTechSkillMap = {
  MySQL: MySQL,
  Sqlite: Sqlite,
  Redis: Redis,
} as const;

export default databaseTechSkillMap;
