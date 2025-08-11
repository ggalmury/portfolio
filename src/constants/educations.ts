import { Education } from "@/types/education";

export const EDUCATIONS: Education[] = [
  {
    schoolName: "동서울대학교",
    major: "컴퓨터소프트웨어학과",
    enteredAt: "2019.03",
    graduatedAt: "2024.02",
    curriculum: [
      "C, Python, JavaScript, C++ 등 다양한 프로그래밍 언어의 문법, 자료형, 제어문, 함수, 객체지향 프로그래밍 개념 학습",
      "자료구조(배열, 연결 리스트, 스택, 큐, 트리, 그래프)와 알고리즘(정렬, 탐색, 재귀, 동적 계획법 등) 설계 및 구현 능력 습득",
      "네트워크의 기본 개념, OSI 7계층, TCP/IP 프로토콜, HTTP/HTTPS 동작 원리와 네트워크 보안 개념 학습",
      "소규모 팀 프로젝트를 통한 설계, 구현, 테스트, 배포 전 과정을 경험하며 문제 해결 능력과 협업 능력 강화",
    ],
  },
] as const;
