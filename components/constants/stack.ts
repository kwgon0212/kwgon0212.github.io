export interface Skill {
  name: string;
  img: string;
}

export const skills: Record<string, Skill> = {
  JavaScript: {
    name: "JavaScript",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  TypeScript: {
    name: "TypeScript",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  "Next.js": {
    name: "Next.js",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },
  "React.js": {
    name: "React.js",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  "React Router": {
    name: "React Router",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original.svg",
  },
  "express.js": {
    name: "express.js",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
  },
  tailwindcss: {
    name: "tailwindcss",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  "styled-components": {
    name: "styled-components",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/styledcomponents/styledcomponents-original.svg",
  },
  PWA: {
    name: "PWA",
    img: "",
  },
  "Redux-toolkit": {
    name: "Redux-toolkit",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
  },
  mongoDB: {
    name: "mongoDB",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  },
  firebase: {
    name: "firebase",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
  },
  "Framer-motion": {
    name: "Framer-motion",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg",
  },
  Zustand: {
    name: "Zustand",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/zustand/zustand-original.svg",
  },
  "Tanstack-query": {
    name: "Tanstack-query",
    img: "/assets/stack/tanstack-query.png",
  },
  Sentry: {
    name: "Sentry",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sentry/sentry-original.svg",
  },
  Vercel: {
    name: "Vercel",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
  },
};
