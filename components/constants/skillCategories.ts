// 레벨별 색상 매핑
const getLevelColor = (level: number): string => {
  const colorMap: { [key: number]: string } = {
    // 0: "from-gray-500 to-gray-600",
    // 1: "from-pink-500 to-pink-600",
    // 2: "from-yellow-500 to-yellow-600",
    // 3: "from-purple-500 to-purple-600",
    // 4: "from-blue-500 to-blue-600",
    // 5: "from-green-500 to-green-600",
    0: "from-blue-400 to-purple-400",
    1: "from-blue-400 to-purple-400",
    2: "from-blue-400 to-purple-400",
    3: "from-blue-400 to-purple-400",
    4: "from-blue-400 to-purple-400",
    5: "from-blue-400 to-purple-400",
  };
  return colorMap[level] || "from-gray-500 to-gray-600";
};

export const skillCategories = [
  {
    category: "Frontend",
    icon: "🎨",
    skills: [
      {
        name: "HTML/CSS",
        level: 5,
        color: getLevelColor(5),
        images: [
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
        ],
      },
      {
        name: "JS/TS",
        level: 4,
        color: getLevelColor(4),
        images: [
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
        ],
      },
      {
        name: "React",
        level: 4,
        color: getLevelColor(4),
        images: [
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        ],
      },
      {
        name: "Next.js",
        level: 4,
        color: getLevelColor(4),
        images: [
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
        ],
      },
      {
        name: "Tailwind CSS",
        level: 4,
        color: getLevelColor(4),
        images: [
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        ],
      },
      {
        name: "Styled-Components",
        level: 4,
        color: getLevelColor(4),
        images: [
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/styledcomponents/styledcomponents-original.svg",
        ],
      },
      {
        name: "Redux-Toolkit",
        level: 5,
        color: getLevelColor(5),
        images: [
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
        ],
      },
      {
        name: "Zustand",
        level: 5,
        color: getLevelColor(5),
        images: [
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/zustand/zustand-original.svg",
        ],
      },
      {
        name: "Tanstack Query",
        level: 5,
        color: getLevelColor(5),
        images: [
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
        ],
      },
    ],
  },
  {
    category: "Backend / DB",
    icon: "⚙️",
    skills: [
      {
        name: "Node.js",
        level: 3,
        color: getLevelColor(3),
        images: [
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
        ],
      },
      {
        name: "express.js",
        level: 3,
        color: getLevelColor(3),
        images: [
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg",
        ],
      },
      {
        name: "MongoDB",
        level: 3,
        color: getLevelColor(3),
        images: [
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg",
        ],
      },
      {
        name: "Firebase",
        level: 3,
        color: getLevelColor(3),
        images: [
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
        ],
      },
      {
        name: "PostgreSQL",
        level: 2,
        color: getLevelColor(2),
        images: [
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
        ],
      },
    ],
  },
  {
    category: "DevOps & Other Tools",
    icon: "🛠️",
    skills: [
      {
        name: "Docker",
        level: 4,
        color: getLevelColor(4),
        images: [
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
        ],
      },
      {
        name: "GitHub Actions",
        level: 4,
        color: getLevelColor(4),
        images: [
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg",
        ],
      },
      {
        name: "AWS EC2 / S3",
        level: 3,
        color: getLevelColor(3),
        images: [
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
        ],
      },
      {
        name: "Figma",
        level: 4,
        color: getLevelColor(4),
        images: [
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
        ],
      },
    ],
  },
];
