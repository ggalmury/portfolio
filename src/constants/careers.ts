import { Career } from "@/types/career";

export const CAREERS: Career[] = [
  {
    company: "주식회사 짐프렌드",
    description: "운동으로 세상을 바꾸고 싶은 사람들이 뭉친 스포츠 스타트업",
    joinedAt: "2024.06",
    resignedAt: "2025.05",
    role: "Dev Lead / Full-Stack Developer",
    tasks: [
      '"짐프렌드" 앱 서비스, API 서버 개발 및 플레이스토어, 앱스토어 배포',
      '"짐프렌드" 서비스 어드민 시스템 개발',
      '"그레이존" 스포츠 커뮤니티 서비스 프론트엔드 개발 및 배포',
      "자사 홈페이지 개발 및 배포",
      "결제 대행사를 통한 자동화 결제 시스템 구축",
      "2024 정부지원사업 선정",
    ],
    techSkills: ["flutter", "nextjs", "nestjs", "mysql", "redis", "aws", "vercel", "github"],
  },
] as const;
