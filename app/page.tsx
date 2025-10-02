"use client";

// import Contact from "@/components/Contact";
import LogoTransition from "@/components/LogoTransition";
import MouseGlow from "@/components/MouseGlow";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Skills from "@/components/Skills";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useScrollLock } from "@/hooks/useScrollLock";
import { useSectionTitle } from "@/hooks/useSectionTitle";
import { ThemeTogglerButton } from "@/components/ThemeToggler";

export default function Page() {
  const [introDone, setIntroDone] = useState(false);

  useScrollLock(!introDone);
  const title = useSectionTitle(introDone, "김우곤's Portfolio");

  return (
    <div className="relative min-h-screen bg-white dark:bg-black">
      {/* 마우스 글로우 효과 */}
      <MouseGlow />

      <ThemeTogglerButton direction="btt" position="br" />

      <AnimatePresence>
        {!introDone && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3, ease: "easeInOut" }}
            className="fixed inset-0 bg-white dark:bg-black z-[100] overflow-hidden"
          />
        )}
      </AnimatePresence>

      <LogoTransition
        introDone={introDone}
        onFinish={() => setIntroDone(true)}
        className="text-black dark:text-white"
        title={title}
      />

      <div className="pt-20">
        <Resume />
        <Projects />
        <Skills />
        {/* <Contact /> */}
      </div>
    </div>
  );
}
