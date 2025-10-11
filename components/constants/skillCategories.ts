import { skills } from "./stack";

export interface SkillItem {
  name: string;
  level: number;
  stacks: string[];
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    icon: "🎨",
    skills: [
      {
        name: "HTML",
        level: 5,
        stacks: ["HTML"],
      },
      {
        name: "CSS",
        level: 5,
        stacks: ["CSS"],
      },
      {
        name: "JavaScript",
        level: 4,
        stacks: ["JavaScript"],
      },
      {
        name: "TypeScript",
        level: 4,
        stacks: ["TypeScript"],
      },
      {
        name: "React.js",
        level: 4,
        stacks: ["React.js"],
      },
      {
        name: "Next.js",
        level: 4,
        stacks: ["Next.js"],
      },
      {
        name: "tailwindcss",
        level: 4,
        stacks: ["tailwindcss"],
      },
      {
        name: "styled-components",
        level: 4,
        stacks: ["styled-components"],
      },
      {
        name: "Redux-Toolkit",
        level: 5,
        stacks: ["Redux-toolkit"],
      },
      {
        name: "Zustand",
        level: 5,
        stacks: ["Zustand"],
      },
      {
        name: "Tanstack Query",
        level: 5,
        stacks: ["Tanstack-query"],
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
        stacks: ["Node.js"],
      },
      {
        name: "express.js",
        level: 3,
        stacks: ["express.js"],
      },
      {
        name: "mongoDB",
        level: 3,
        stacks: ["mongoDB"],
      },
      {
        name: "firebase",
        level: 3,
        stacks: ["firebase"],
      },
      {
        name: "PostgreSQL",
        level: 2,
        stacks: ["PostgreSQL"],
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
        stacks: ["Docker"],
      },
      {
        name: "GitHub Actions",
        level: 4,
        stacks: ["GitHub Actions"],
      },
      {
        name: "AWS EC2 / S3",
        level: 3,
        stacks: ["AWS"],
      },
      {
        name: "Figma",
        level: 4,
        stacks: ["Figma"],
      },
    ],
  },
];

// 헬퍼 함수: stacks 배열을 이용해 skills 객체에서 이미지 가져오기
export const getSkillImages = (stacks: string[]) => {
  return stacks.map((stack) => skills[stack]?.img).filter(Boolean);
};
