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
  coverImages: string[];
  overview: string;
  team: Member[];
  repo?: Link;
  mainRole?: string;
  timeline?: {
    images?: string[];
    caption?: string;
    description?: string;
  };
  requirements?: {
    images?: string[];
    caption?: string;
    description?: string;
  };
  architecture?: {
    images: string[];
    caption?: string;
    description?: string;
  };
  features?: {
    images?: string[];
    items: Array<{
      title: string;
      description?: string;
    }>;
  };
  migration?: Array<{
    title: string;
    description: string;
  }>;
  troubleshooting?: Array<{
    title: string;
    problem: {
      images?: string[];
      description: string;
    };
    solution: {
      images?: string[];
      description: string;
    };
    result: {
      images?: string[];
      description: string;
    };
  }>;
  presentation?: {
    url: string;
    title?: string;
  };
}

export const projects: Project[] = [
  {
    id: 1,
    name: "NewsToss",
    logo: "/assets/projects/news-toss.png",
    description: "주식투자를 위한 스마트 뉴스 플랫폼",
    period: "2025.04.30 - 2025.07.01",
    award:
      "K-디지털 트레이닝 Tech 우수인재를 위한 풀스택 과정 토스뱅크 2기 통합 프로젝트 시상 - 우수상",
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
    coverImages: ["/assets/projects/news-toss/cover.png"],
    overview:
      "인공지능이 분석한 핵심 뉴스와 과거 유사 뉴스를 제공하여\n과거 유사 뉴스 당시의 주가 경향을 확인할 수 있고\n각 유저별 맞춤 뉴스 제공으로 더 현명한 투자 결정을 내릴 수 있도록 도와주는 서비스",
    team: [{ name: "FE 1명 + BE 3명 + MLOps 4명", role: "" }],
    repo: {
      label: "GitHub 저장소",
      href: "https://github.com/kwgon0212/news-toss",
    },
    mainRole: "Figma UX / UI 디자인 전담\nFront-end 개발 전담",
    timeline: {
      images: ["/assets/projects/news-toss/timeline.png"],
      description:
        "간단하게 웹페이지의 와이어프레임 정도의 틀을 먼저 잡아가면서 개발 진행\n후에 백엔드와 소통하면서 API 스펙을 정하고\nAPI가 나올때마다 연동하고 디자인에 수정이 필요한지 재차 검증하면서\n점진적 개발 진행",
    },
    architecture: {
      images: ["/assets/projects/news-toss/architecture.png"],
      caption: "프로젝트 아키텍처",
    },
    features: {
      images: ["/assets/projects/news-toss/features.png"],
      items: [
        {
          title:
            "SSE를 통한 실시간 뉴스 데이터 바인딩 및 챗봇 텍스트 스트림 연동",
          description:
            "챗봇 HTML 텍스트를 보안을 위해 DOMPurify를 이용해 출력, XSS 예방",
        },
        {
          title: "Polling 방식의 실시간 국내 주가 데이터 바인딩",
          description:
            "개인 호출제한이 있어 20초마다 API를 호출하여 안정적으로 주가 데이터 반영",
        },
        {
          title:
            "Zustand로 유저의 관심종목 · 포트폴리오 · 스크랩 뉴스 전역 관리",
        },
        {
          title:
            "각 페이지마다 Animate UI 컴포넌트를 이용하여 마이크로인터렉션 적용(UX↑)",
          description: "랜딩페이지에 애니메이션(Framer-motion) 적용",
        },
        {
          title:
            "유저 편의를 위해 localStorage로 최근 본 종목을 10개씩 보여주도록 구현",
        },
        {
          title:
            "뉴스 및 종목검색 시 불필요한 API 호출을 방지하고자 디바운스 적용",
        },
        {
          title:
            "기존에 불러온 주가 데이터나 뉴스 데이터를 ISR방식, tanstack-query를 이용해 캐싱하여 리소스 절약 + 렌더링 속도 향상",
        },
        {
          title: "middleware를 통해 헤더의 user-agent로 모바일 / 데스크탑 구분",
          description: "모바일 접속시 데스크탑 유도 페이지로 리다이렉트",
        },
      ],
    },
    troubleshooting: [
      {
        title: "뉴스 상세 페이지 로딩속도 개선",
        problem: {
          images: ["/assets/projects/news-toss/troubleshooting1-1.png"],
          description:
            "1. Vercel 기본 리전이 미국(USA)으로 설정되어 있어 한국 사용자에게 응답 지연 발생\n2. API 동기 직렬 처리\n3. 클라이언트 컴포넌트에서 단순 fetch() 사용 → 캐싱 부재\n4. 공통적으로 보게 되는 캘린더 페이지, 뉴스 상세 페이지가 매번 새로 렌더링됨",
        },
        solution: {
          images: [
            "/assets/projects/news-toss/troubleshooting1-2.png",
            "/assets/projects/news-toss/troubleshooting1-3.png",
          ],
          description:
            "1. Vercel 리전 설정을 한국(ap-northeast-2) 으로 변경하여 물리적 거리 단축\n2. Promise.allSettled()를 이용해 병렬 처리\n3. ISR 방식 적용 → 데이터가 자주 바뀌지 않는 페이지를 정적으로 캐싱\n4. TanStack Query 도입 → 클라이언트 컴포넌트에서 fetch에 react-query를 적용하여 상태 관리 및 캐싱 처리",
        },
        result: {
          images: ["/assets/projects/news-toss/troubleshooting1-4.png"],
          description: "페이지 렌더링 시간 약 3000ms → 1250ms로 향상",
        },
      },
      {
        title:
          "미들웨어로 페이지 리다이렉트 시 페이지의 css가 적용되지 않는 문제",
        problem: {
          images: ["/assets/projects/news-toss/troubleshooting2-1.png"],
          description:
            "middleware가 _next/static/ 같은 정적 리소스 경로까지 가로채서 잘못된 동작을 유도해 CSS가 적용되지 않음",
        },
        solution: {
          images: ["/assets/projects/news-toss/troubleshooting2-2.png"],
          description:
            "해당 코드를 미들웨어 config의 matcher에 추가하여 정적 파일이나 브라우저가 기본적으로 요청하는 리소스는 middleware가 가로채지 않도록 함",
        },
        result: {
          images: ["/assets/projects/news-toss/troubleshooting2-3.png"],
          description:
            "tailwindcss가 정상적으로 로딩되어 페이지 스타일이 깨지지 않고, 원래 의도대로 동작",
        },
      },
      {
        title: "모달창 컴포넌트",
        problem: {
          images: ["/assets/projects/news-toss/troubleshooting3-1.jpg"],
          description:
            "일반적인 DOM 트리에 모달을 렌더링할 경우 부모 레이아웃의 position, overflow, z-index 등에 영향 받아 UI 깨짐 현상 발생",
        },
        solution: {
          images: ["/assets/projects/news-toss/troubleshooting3-2.png"],
          description:
            "1. createPortal()을 사용해 document.body에 직접 모달 렌더링\n1-1. 부모 컨텍스트에서 독립적으로 렌더링됨\n1-2. z-index 충돌 및 레이아웃 문제 방지",
        },
        result: {
          images: ["/assets/projects/news-toss/troubleshooting3-3.png"],
          description:
            "1. 어떤 위치에서도 안정적으로 모달 노출\n2. 레이아웃과 무관한 독립적인 UI 구현 가능",
        },
      },
    ],
    presentation: {
      url: "/assets/projects/news-toss/presentation.pdf",
      title: "프로젝트 발표 자료",
    },
  },
  {
    id: 2,
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
    coverImages: [
      "/assets/projects/fling/cover1.png",
      "/assets/projects/fling/cover2.png",
    ],
    overview:
      "대학교 캡스톤디자인 과제로 코로나 당시의 비대면 및 비혼주의 유행으로 저출산 문제를 해결하고자 만들게 된 데이팅 웹앱",
    team: [{ name: "Full-stack 1명", role: "" }],
    repo: {
      label: "GitHub 저장소",
      href: "https://github.com/kwgon0212/fling",
    },
    mainRole:
      "Figma UX / UI 디자인 전담\nFullstack 개발 전담 (기획·디자인·개발·배포 전 과정 수행)",
    requirements: {
      images: [
        "/assets/projects/fling/requirements1.png",
        "/assets/projects/fling/requirements2.png",
        "/assets/projects/fling/requirements3.png",
      ],
      caption: "소프트웨어 요구사항 명세서",
      description:
        "요구사항 ID > 요구사항명 > 기능ID > 기능명 > 요구사항 상세설명 > 필요 데이터\n위와 같은 구조로 개발을 진행하여, 누락 없이 요구사항을 충족하면서 기능별로 관리 및 개발 수행\n 위 구조를 통해 상위 요구사항을 세분화된 기능 단위로 분해하고, 각 기능에 필요한 데이터를 명확히 규정해 개발 범위를 점진적으로 축소",
    },
    architecture: {
      images: ["/assets/projects/fling/architecture.png"],
    },
    features: {
      images: [
        "/assets/projects/fling/features1.png",
        "/assets/projects/fling/features2.png",
        "/assets/projects/fling/features3.png",
        "/assets/projects/fling/features4.png",
        "/assets/projects/fling/features5.png",
        "/assets/projects/fling/features6.png",
      ],
      items: [
        {
          title: "next-pwa로 모바일 UX 최적화",
          description:
            "OS마다 PWA 설치 방식이 달라, Android/iOS 구분 후 설치 유도로 유입률 개선",
        },
        {
          title:
            "Firebase 실시간 트리거를 이용한 채팅기능 + FCM 푸시 알림 적용",
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
    migration: [
      {
        title: "React.js에서 Next.js로",
        description:
          "1. 소개팅앱이라는 점에서 SEO 강화 및 검색 노출 최적화\n2. 기존 React + Express 분리 구조 → Next.js 단일 포트 관리로 개발/운영 용이",
      },
      {
        title: "MongoDB + Socket.io → Firebase로 채팅기능",
        description:
          "1. Next.js에서 Socket.io 구현 시 필요한 커스텀 서버 복잡성 제거\n2. 유저 데이터(MongoDB)와 채팅 데이터(Firebase) 분산 저장으로 부하 분산",
      },
      {
        title: "RDB(MySQL) → NoSQL(MongoDB)",
        description:
          "1. 채팅 데이터의 삽입/조회가 빠른 MongoDB로 변경\n2. 비정형 데이터 처리에 적합하여 유지보수 효율 상승",
      },
      {
        title: "AWS EC2 배포 → PaaS cloudtype으로 배포",
        description:
          "1. EC2의 인프라 / 리소스 관리 부담 감소\n2. Github 기반 자동 빌드·배포 파이프라인 확보",
      },
      {
        title: "결제 기반 매칭 → 무료 랜덤 매칭으로 비즈니스 모델 변경",
        description:
          "1. 사업증 등록 및 PG사 결제기능 API 연동의 불편함 해소\n2. node-scheduler 활용하여 매주마다 랜덤으로 유저 매칭 자동화\n3. 대학생 타깃 서비스 특성을 반영해 접근성↑",
      },
    ],
  },
  {
    id: 3,
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
    coverImages: [
      "/assets/projects/payrunner/cover1.png",
      "/assets/projects/payrunner/cover2.png",
    ],
    overview:
      "근로 공고 등록부터 전자 근로계약서 작성, 출퇴근 관리, 자동 임금 정산까지\n근로자의 권익 보호와 고용주의 업무 편의를 위한 올인원 근로관리 솔루션",
    team: [{ name: "Full-stack 4명", role: "" }],
    repo: {
      label: "GitHub 저장소",
      href: "https://github.com/kwgon0212/PayRunner",
    },
    mainRole:
      "팀장으로서 기획 및 프로젝트를 리딩\nFigma UX / UI 디자인 80% 담당\n팀원들에게 React와 Express에서 모르는 부분의 지식을 전수하며 프로젝트를 완성",
    architecture: {
      images: [
        "/assets/projects/payrunner/architecture1.png",
        "/assets/projects/payrunner/architecture2.png",
      ],
    },
    features: {
      images: [
        "/assets/projects/payrunner/features1.png",
        "/assets/projects/payrunner/features2.png",
        "/assets/projects/payrunner/features3.png",
      ],
      items: [
        {
          title:
            "Puppeteer로 유저의 서명이 포함된 전자 근로계약서를 PDF로 생성",
        },
        {
          title: "사용자 유형별 UI 조건 분기 처리",
          description:
            "근로자/고용주에 따라 버튼(지원하기 / 채용현황) 등 상황 맞춤 기능 (UX↑)",
        },
        {
          title:
            "Geolocation API를 이용한 위치 인증을 통해 근로자와 고용주 모두에게 신뢰성 있는 출퇴근 기록 제공",
        },
        {
          title:
            "출퇴근 기록 기반 자동 임금 산출 및 관리 기능을 제공하여 자동 임금 정산",
          description: "자동 급여 계산 및 정산 프로세스 간소화",
        },
        {
          title:
            "NH오픈플랫폼 개발자센터 API를 이용하여 각 유저마다 모의 계좌 생성",
          description:
            "고용주가 정산 승인시 자동으로 연결된 근로자의 계좌로 입금",
        },
        {
          title:
            "Nodemailer를 이용하여 이메일 인증번호 방식의 회원가입 절차 과정 추가",
        },
        {
          title:
            "Socket.io + Express.js를 이용하여 근로자와 고용주 간 원활한 채팅 지원",
        },
      ],
    },
  },
  {
    id: 4,
    name: "Snab",
    logo: "/assets/projects/snab/logo.png",
    description: "브라우저 탭 관리 크롬 익스텐션 (배포 검수 중)",
    period: "2025.10.20 - 2025.11.05",
    techStack: [
      skills["React.js"],
      skills["CRXJS"],
      skills["tailwindcss"],
      skills["Zustand"],
      skills["dnd-kit"],
    ],
    details: [
      "드래그 앤 드롭으로 탭을 워크스페이스, 그룹, 브라우저 윈도우 간 자유롭게 이동할 수 있는 기능 개발",
      "스냅샷 기능을 통해 현재 브라우저의 모든 탭 상태를 워크스페이스로 저장하여 나중에 복원할 수 있는 기능 개발",
      "영구 저장을 통해 모든 데이터는 로컬에 저장되어 브라우저를 닫아도 유지되며, 외부 서버로 전송되지 않는 기능 개발",
      "데이터 백업 및 복원을 통해 워크스페이스 데이터를 JSON 파일로 내보내고 가져올 수 있는 기능 개발",
    ],
    githubUrl: "https://github.com/kwgon0212/Snab",
    // 상세 정보
    coverImages: ["/assets/projects/snab/cover1.png"],
    overview: "내가 쓰기 위해 만든 브라우저 탭 관리 크롬 익스텐션",
    team: [{ name: "개인 프로젝트", role: "" }],
    mainRole: "전체 개발 및 배포",
    repo: {
      label: "GitHub 저장소",
      href: "https://github.com/kwgon0212/Snab",
    },
    architecture: {
      images: ["/assets/projects/snab/cover2.png"],
    },
    features: {
      images: [],
      items: [
        {
          title: "브라우저 탭 관리",
          description:
            "현재 열려있는 모든 브라우저 탭을 확인하고 관리할 수 있습니다.",
        },
        {
          title: "워크스페이스 관리",
          description:
            "프로젝트별로 워크스페이스를 생성하여 탭을 체계적으로 분류하고 관리할 수 있습니다.",
        },
        {
          title: "탭 그룹화",
          description:
            "워크스페이스 내에서 탭을 그룹으로 분류하여 관리하고, 그룹의 모든 탭을 새 윈도우로 복원할 수 있습니다.",
        },
        {
          title: "드래그 앤 드롭",
          description:
            "직관적인 드래그 앤 드롭으로 탭을 워크스페이스, 그룹, 브라우저 윈도우 간 자유롭게 이동할 수 있습니다.",
        },
        {
          title: "스냅샷 기능",
          description:
            "현재 브라우저의 모든 탭 상태를 워크스페이스로 저장하여 나중에 복원할 수 있습니다.",
        },
        {
          title: "영구 저장",
          description:
            "모든 데이터는 로컬에 저장되어 브라우저를 닫아도 유지되며, 외부 서버로 전송되지 않습니다.",
        },
        {
          title: "데이터 백업 및 복원",
          description:
            "워크스페이스 데이터를 JSON 파일로 내보내고 가져올 수 있습니다.",
        },
      ],
    },
  },
];
