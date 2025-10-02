export interface Project {
  id: number;
  name: string;
  logo: string;
  description: string;
  period: string;
  award?: string;
  techStack: string[];
  details: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: "Fling",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    description: "대학생을 위한 랜덤 데이팅 웹앱",
    period: "2024.03.01 - 2024.12.24",
    techStack: [
      "JavaScript",
      "Next.js",
      "Express.js",
      "tailwindcss",
      "Styled-components",
      "PWA",
      "Redux-toolkit",
      "MongoDB",
      "Firebase",
      "Framer-motion",
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
    demoUrl: "https://portfolio-demo.vercel.app",
  },
  {
    id: 2,
    name: "PayRunner",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    description: "근로관리 올인원 플랫폼",
    period: "2025.02.18 - 2025.03.18",
    award:
      "K-디지털 트레이닝 Tech 우수인재를 위한 풀스택 과정 토스뱅크 2기 중간 프로젝트 시상 - 우수상",
    techStack: [
      "TypeScript",
      "React.js",
      "tailwindcss",
      "Styled-components",
      "Redux-toolkit",
      "Express.js",
      "Firebase",
      "MongoDB",
      "Framer-motion",
    ],
    details: [
      "팀장으로서 프로젝트를 리딩하며, FE - BE 전반을 주도적으로 개발",
      "팀원들에게 React와 Express에서 모르는 부분의 지식을 전수하며 프로젝트를 완성",
      "Puppeteer를 이용한 유저의 서명이 포함된 전자 근로계약서 PDF 생성기능 개발",
    ],
    githubUrl: "https://github.com/kwgon0212/PayRunner",
  },
  {
    id: 3,
    name: "NewsToss",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg",
    description: "주식투자를 위한 스마트 뉴스 플랫폼",
    period: "2025.04.30 - 2025.07.01",
    award:
      "K-디지털 트레이닝 Tech 우수인재를 위한 풀스택 과정 토스뱅크 2기 통합 프로젝트 시상- 우수상",
    techStack: [
      "TypeScript",
      "Next.js",
      "tailwindcss",
      "Zustand",
      "Tanstack-query",
      "Sentry",
      "Vercel",
    ],
    details: [
      "Figma를 이용한 UX/UI 디자인 및 프론트엔드 개발 전체 주도",
      "Sentry를 이용한 배포 후 유저 환경의 오류를 실시간으로 모니터링하여 Slack으로 에러 알림 전송",
      "SSE 챗봇 이벤트 스트림 연동 및 polling 방식을 이용한 실시간 주가차트 반영",
      "상세뉴스 페이지의 렌더링 속도를 3000ms → 1200ms로 60% 개선하여 사용자 체감 성능을 크게 향상",
      "Vercel을 이용하여 서비스 배포 자동화 구축",
    ],
    githubUrl: "https://github.com/kwgon0212/news-toss",
  },
];
