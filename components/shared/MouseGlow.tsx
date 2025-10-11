"use client";

import { useMousePosition } from "@/hooks/useMousePosition";

export default function MouseGlow() {
  const { x, y } = useMousePosition();

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition duration-300 opacity-70 dark:opacity-100"
      style={{
        background: `radial-gradient(700px at ${x}px ${y}px, rgba(29, 147, 216, 0.15), transparent 80%)`,
      }}
    />
  );
}
