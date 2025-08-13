import { Extracurricular } from "@/types/extracurricular";

export const EXTRACURRICULARS: Extracurricular[] = [
  {
    name: "2023 Seoul Web 3.0 Festival",
    organizer: "서울특별시",
    description: "Web 3.0 기술을 사용해 사회문제를 해결하는 해커톤",
    startedAt: "2023.07",
    endedAt: "2023.08",
    tasks: ["아이-튜터 개발", "ChatGPT 프롬포트 작성"],
    awards: ["인기상", "팀워크상"],
  },
  {
    name: "MSW X SUPER HACKATHON 2022",
    organizer: "넥슨코리아 및 멋쟁이사자처럼",
    description: "넥슨코리아의 신생 플랫폼에서 게임을 개발하는 해커톤",
    startedAt: "2022.09",
    endedAt: "2022.12",
    tasks: ["전투 맵 구조 설계 및 게임 오브젝트 배치", "스킬 추상화 인터페이스 설계", "게임 엔진을 사용한 컷신 애니메이션 제작"],
  },
] as const;
