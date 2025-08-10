export interface Project {
  name: string;
  summary: string;
  description: string;
  startedAt: string;
  endAt?: string;
  tasks: string[];
  techSkills: string[];
  githubUrl: string;
  serviceUrl?: string;
  imagePath: string;
}

export const projects: Project[] = [
  {
    name: "씨에스팜",
    summary: '"티끌 모아 태산"을 꿈꾸는 개발자들을 위한 1일 1지식 수확 서비스',
    description: `본 프로젝트는 개발 공부를 막 시작했거나, 기본기가 부족하다고 느끼는 초보 개발자들을 위해 설계된 학습 플랫폼입니다. "농장"이라는 친근한 세계관을 접목해, 개발 지식을 "수확"하고 관련 퀴즈를 풀어 "타작"하는 과정을 통해 실력을 기를 수 있도록 돕습니다.

많은 입문자들은 방대한 CS 지식 앞에서 어디서부터 시작해야 할지 모르는 문제를 겪습니다. 씨에스팜은 이 문제를 해결하기 위해 "하루 한 개의 랜덤한 지식"이라는 단순한 규칙을 제안합니다. 사용자는 매일 새로운 지식을 배우고 퀴즈를 풀어 스스로의 "논밭"을 가꿔가며 성장할 수 있습니다.
`,
    startedAt: "2025.04",
    tasks: [
      "Next.js15 기반 반응형 웹 애플리케이션 개발, SSR·CSR 혼합 렌더링으로 초기 로딩 속도 및 SEO 성능 개선",
      "Atomic Design 방법론과 Container / Presenter 패턴 도입으로 UI 컴포넌트 재사용률·유지보수성 향상, UI와 로직 계층 분리로 신규 화면 개발 속도 단축",
      "React Query를 활용해 서버 상태 관리 및 데이터 캐싱 최적화, 불필요한 네트워크 요청 감소",
      "Zustand를 통한 로컬 UI 상태 관리로 컴포넌트 간 상태 공유 및 상태 흐름 단순화",
      "Framer Motion 활용으로 UI 인터랙션에 부드러운 애니메이션 적용, 사용자 피드백과 몰입도 강화",
      "카카오 소셜 로그인 연동 및 JWT 기반 인증·인가 로직 구현으로 보안성과 사용자 편의성 향상",
      "Next.js 서버를 BFF(Backend for Frontend)로 활용하여 API Route를 통해 API 서버에 요청, 클라이언트 직접 접근 차단으로 보안성 강화",
      "GitHub Flow와 PR 리뷰 기반 협업 프로세스 운영, Vercel 기반 CI/CD 파이프라인 구축으로 배포 효율성 향상",
    ],
    techSkills: ["nextjs", "zustand", "vercel"],
    githubUrl: "https://github.com/MeerkatBrothers/csfarm-web",
    serviceUrl: "https://csfarm.me",
    imagePath: "/images/ai_tutor_appscreen.png",
  },
  {
    name: "Gymmy",
    summary: "개인화 운동 기록 앱",
    description: `본 프로젝트는 사용자의 운동 루틴을 체계적으로 계획하고 기록할 수 있도록 설계된 개인 맞춤형 헬스 트래커 앱입니다. "운동을 더 효율적으로, 더 꾸준하게"라는 목표 아래, 날짜별 루틴 관리와 부위별 세분화 기능을 제공합니다.

많은 사용자들이 운동 계획을 세우더라도 기록이 흩어지거나 관리가 어려워 꾸준함을 유지하기 힘듭니다. 이 앱은 이러한 문제를 해결하기 위해 날짜 기반 루틴 관리와 부위별 운동 분류 기능을 결합했습니다. 사용자는 원하는 날짜에 운동 루틴을 설정하고, 전신·하체·가슴 등 부위를 선택한 뒤 세트 수, 횟수, 중량을 자유롭게 입력할 수 있습니다. 모든 기록은 날짜별로 저장되어 추후 확인 및 수정이 가능하며, 이를 통해 체계적인 운동 습관 형성을 지원합니다.`,
    startedAt: "2023.10",
    endAt: "2023.11",
    tasks: [
      "Flutter 기반 크로스플랫폼 앱을 개발, iOS·Android 동시 지원",
      "BLoC 아키텍처로 상태 관리, UI/데이터 책임 분리",
      "Hive 로컬 스토리지로 오프라인 퍼시스턴스 및 빠른 조회 지원",
      "달력 기반 UI로 날짜별 루틴 관리",
      "운동 부위 태그/필터를 활용한 루틴 구성 및 탐색",
      "운동별 세트 동적 추가·삭제 입력 플로우 구현",
    ],
    techSkills: ["flutter"],
    githubUrl: "https://github.com/ggalmury/gymmy-client",
    imagePath: "/images/gymmy_appscreen.png",
  },
  {
    name: "아이-튜터",
    summary: "디지털 약자인 노인들의 스마트폰 사용을 돕는 AI 선생님",
    description: `본 프로젝트는 서울시 주최 SWF 2023 Web 3.0 Festival 수상작으로, 디지털 소외 계층인 노인들의 스마트폰 접근성을 높이기 위해 설계된 서비스입니다. "노인도 스마트폰과 자연스럽게 친해질 수 있다"는 믿음을 바탕으로, 가독성 높은 UI/UX에 AI 기술을 결합했습니다.

많은 노인들은 복잡한 스마트폰 조작과 작은 화면, 어려운 메뉴 구조로 인해 디지털 서비스 사용에 어려움을 겪습니다. 이 프로젝트는 이러한 문제를 해결하기 위해 음성 중심의 상호작용과 친근한 대화형 AI를 제안합니다.

사용자는 GPT API 기반 챗봇과 자유롭게 대화하며, TTS(Text-to-Speech)와 STT(Speech-to-Text)를 통해 음성과 텍스트를 동시에 활용할 수 있습니다. 또한, 스마트폰 기능 교육 강의를 수강하면 NFT 보상을 제공하는 기획을 더해, 학습 동기와 성취감을 높였습니다.`,
    startedAt: "2023.07",
    endAt: "2023.08",
    tasks: [
      "Flutter 기반 크로스플랫폼 앱을 개발, iOS·Android 동시 지원",
      "노인층을 위한 가독성 높은 UI 도입으로 사용 편의성 향상",
      " BLoC 아키텍처로 상태 관리, UI/데이터 책임 분리",
      " ChatGPT API를 활용한 인공지능 1:1 채팅 기능 구현",
      " 음성 입력(STT) 및 음성 출력(TTS) 기능 구현으로 음성 기반 상호작용 지원",
      "Sqlite를 사용해 로컬에 채팅 기록 저장 기능 구현으로 대화 내용 복기 및 재사용 가능",
      "유튜브 동영상 재생 기능 추가로 학습 콘텐츠 제공 범위 확대",
    ],
    techSkills: ["flutter", "sqlite"],
    githubUrl: "https://github.com/ggalmury/ai-tutor",
    imagePath: "/images/ai_tutor_appscreen.png",
  },
] as const;
