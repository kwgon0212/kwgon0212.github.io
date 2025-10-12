import { skills, Skill } from "./stack";

export type Member = { name: string; role: string };
export type Link = { label: string; href: string };

export interface Project {
  id: number;
  name: string;
  logo: string;
  description: string;
  period: string;
  award?: string;
  techStack: Skill[];
  details: string[];
  githubUrl?: string;
  demoUrl?: string;
  // 상세 정보
  coverImage: string;
  overview: string;
  team: Member[];
  repo?: Link;
  mainRole?: string;
  timeline?: {
    image?: string;
    caption?: string;
    description?: string;
  };
  requirements?: {
    image?: string;
    caption?: string;
    description?: string;
  };
  architecture?: {
    image: string;
    caption?: string;
  };
  features?: Array<{
    image?: string;
    title: string;
    description?: string;
  }>;
  troubleshooting?: Array<{
    title: string;
    problem: string;
    cause?: string;
    fix: string;
    impact?: string;
  }>;
}

export const projects: Project[] = [
  {
    id: 1,
    name: "Fling",
    logo: "/assets/projects/fling.svg",
    description: "대학생을 위한 랜덤 데이팅 웹앱",
    period: "2024.03.01 - 2024.12.24",
    techStack: [
      skills["JavaScript"],
      skills["Next.js"],
      skills["express.js"],
      skills["tailwindcss"],
      skills["styled-components"],
      skills["PWA"],
      skills["Redux-toolkit"],
      skills["mongoDB"],
      skills["firebase"],
      skills["Framer-motion"],
    ],
    details: [
      "풀스택 개발 전체 주도",
      "next-pwa를 이용해 모바일 환경에서의 UX 제공",
      "node-scheduler를 이용해 매주 월요일마다 새롭게 유저들을 랜덤 매칭해주는 기능 개발",
      "FCM을 통해 유저간의 채팅 시 모바일 환경에서 알림 서비스 제공",
      "Puppeteer를 이용한 데이트 맛집 정보 수집",
      "cloudtype을 이용한 서비스 배포 자동화 구축",
    ],
    githubUrl: "https://github.com/kwgon0212/fling",
    // 상세 정보
    coverImage: "/assets/projects/fling.svg",
    overview:
      "대학교 캡스톤디자인 과제로 코로나 당시의 비대면 및 비혼주의 유행으로 저출산 문제를 해결하고자 만들게 된 데이팅 웹앱",
    team: [{ name: "Full-stack 1명", role: "" }],
    repo: {
      label: "GitHub 저장소",
      href: "https://github.com/kwgon0212/fling",
    },
    mainRole:
      "Figma UX / UI 디자인 전담\nFullstack 개발 전담 (기획·디자인·개발·배포 전 과정 수행)",
    architecture: {
      image: "/assets/projects/fling-architecture.png",
    },
    requirements: {
      image: "/assets/projects/fling-requirements.png",
      caption: "소프트웨어 요구사항 명세서",
      description:
        "요구사항 ID > 요구사항명 > 기능ID > 기능명 > 요구사항 상세설명 > 필요 데이터\n위와 같은 구조로 개발을 진행하여, 누락 없이 요구사항을 충족하면서 기능별로 관리 및 개발 수행\n 위 구조를 통해 상위 요구사항을 세분화된 기능 단위로 분해하고, 각 기능에 필요한 데이터를 명확히 규정해 개발 범위를 점진적으로 축소",
    },
    features: [
      {
        title: "next-pwa로 모바일 UX 최적화",
        description:
          "OS마다 PWA 설치 방식이 달라, Android/iOS 구분 후 설치 유도로 유입률 개선",
      },
      {
        title: "Firebase 실시간 트리거를 이용한 채팅기능 + FCM 푸시 알림 적용",
        description:
          "service-worker를 이용해 모바일 백그라운드 환경에서도 알림 수신가능",
      },
      {
        title: "Puppeteer로 맛집 크롤링 자동화 및 KakaoMap API로 위치 표시",
        description: "대전광역시로 국한하여 데이트 맛집 크롤링",
      },
      {
        title: "node-scheduler로 매주 월요일마다 유저 랜덤 매칭 자동화",
      },
      {
        title: "회원가입 시 질문을 통해 연애 성향 설정",
      },
      {
        title:
          "회원가입 시 대학교 메일로 계정관리 및 관리자 페이지를 통해 대학생 인증 관리",
        description: "대학생 신뢰도 확보",
      },
      {
        title: "관리자 페이지를 통해 유저의 문의내역, 신고내역 관리",
      },
      {
        title: "OpenAI API로 주간 운세 제공 기능 구현",
      },
    ],
  },
  {
    id: 2,
    name: "PayRunner",
    logo: "/assets/projects/payrunner.png",
    description: "근로관리 올인원 플랫폼",
    period: "2025.02.18 - 2025.03.18",
    award:
      "K-디지털 트레이닝 Tech 우수인재를 위한 풀스택 과정 토스뱅크 2기 중간 프로젝트 시상 - 우수상",
    techStack: [
      skills["TypeScript"],
      skills["React.js"],
      skills["React Router"],
      skills["tailwindcss"],
      skills["styled-components"],
      skills["Redux-toolkit"],
      skills["express.js"],
      skills["firebase"],
      skills["mongoDB"],
      skills["Framer-motion"],
    ],
    details: [
      "팀장으로서 프로젝트를 리딩하며, FE - BE 전반을 주도적으로 개발",
      "팀원들에게 React와 Express에서 모르는 부분의 지식을 전수하며 프로젝트를 완성",
      "Puppeteer를 이용한 유저의 서명이 포함된 전자 근로계약서 PDF 생성기능 개발",
    ],
    githubUrl: "https://github.com/kwgon0212/PayRunner",
    // 상세 정보
    coverImage: "/assets/projects/payrunner.png",
    overview:
      "근로관리 올인원 플랫폼으로, 근로계약서 작성부터 급여 정산까지 한 번에 관리할 수 있습니다.",
    team: [
      { name: "김우곤", role: "팀장 / 풀스택 개발" },
      { name: "팀원들", role: "프론트엔드 개발" },
    ],
    repo: {
      label: "GitHub 저장소",
      href: "https://github.com/kwgon0212/PayRunner",
    },
    mainRole: "팀장으로서 프로젝트를 리딩하며, FE - BE 전반을 주도적으로 개발",
    features: [
      {
        title: "전자 근로계약서 생성",
        description:
          "Puppeteer를 이용한 유저의 서명이 포함된 전자 근로계약서 PDF 생성 기능을 개발했습니다.",
      },
    ],
  },
  {
    id: 3,
    name: "NewsToss",
    logo: "/assets/projects/news-toss.png",
    description: "주식투자를 위한 스마트 뉴스 플랫폼",
    period: "2025.04.30 - 2025.07.01",
    award:
      "K-디지털 트레이닝 Tech 우수인재를 위한 풀스택 과정 토스뱅크 2기 통합 프로젝트 시상- 우수상",
    techStack: [
      skills["TypeScript"],
      skills["Next.js"],
      skills["tailwindcss"],
      skills["Zustand"],
      skills["Tanstack-query"],
      skills["Sentry"],
      skills["Vercel"],
    ],
    details: [
      "Figma를 이용한 UX/UI 디자인 및 프론트엔드 개발 전체 주도",
      "Sentry를 이용한 배포 후 유저 환경의 오류를 실시간으로 모니터링하여 Slack으로 에러 알림 전송",
      "SSE 챗봇 이벤트 스트림 연동 및 polling 방식을 이용한 실시간 주가차트 반영",
      "상세뉴스 페이지의 렌더링 속도를 3000ms → 1200ms로 60% 개선하여 사용자 체감 성능을 크게 향상",
      "Vercel을 이용하여 서비스 배포 자동화 구축",
    ],
    githubUrl: "https://github.com/kwgon0212/news-toss",
    // 상세 정보
    coverImage: "/assets/projects/news-toss.png",
    overview:
      "주식투자를 위한 스마트 뉴스 플랫폼입니다. AI 챗봇과 실시간 주가 차트를 제공합니다.",
    team: [
      { name: "김우곤", role: "프론트엔드 개발 / UX/UI 디자인" },
      { name: "백엔드 팀", role: "API 개발" },
    ],
    repo: {
      label: "GitHub 저장소",
      href: "https://github.com/kwgon0212/news-toss",
    },
    mainRole: "Figma를 이용한 UX/UI 디자인 및 프론트엔드 개발 전체 주도",
    features: [
      {
        title: "SSE 챗봇 연동",
        description:
          "SSE 챗봇 이벤트 스트림 연동 및 polling 방식을 이용한 실시간 주가차트 반영",
      },
      {
        title: "성능 최적화",
        description:
          "상세뉴스 페이지의 렌더링 속도를 3000ms → 1200ms로 60% 개선하여 사용자 체감 성능을 크게 향상",
      },
      {
        title: "실시간 모니터링",
        description:
          "Sentry를 이용한 배포 후 유저 환경의 오류를 실시간으로 모니터링하여 Slack으로 에러 알림 전송",
      },
    ],
  },
];
