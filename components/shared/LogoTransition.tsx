"use client";

import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export default function LogoTransition({
  introDone,
  onFinish,
  title,
  className,
}: {
  introDone: boolean;
  onFinish: () => void;
  title: string;
  className?: string;
}) {
  return (
    <motion.h1
      initial={{
        top: "50%",
        left: "50%",
        x: "-50%",
        y: "-50%",
        scale: 3,
      }}
      animate={{
        top: introDone ? "20px" : "50%",
        left: introDone ? "20px" : "50%",
        x: introDone ? "0%" : "-50%",
        y: introDone ? "0%" : "-50%",
        scale: introDone ? 1 : 3,
      }}
      transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
      onAnimationComplete={() => onFinish()}
      className={cn("text-3xl font-bold fixed top-5 left-5 z-[100]", className)}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={title}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
          className={className}
        >
          {title}
        </motion.span>
      </AnimatePresence>
    </motion.h1>
  );
}
