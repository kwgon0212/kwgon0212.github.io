"use client";

import React, { useState, useEffect } from "react";

interface TypingAnimationProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
  className?: string;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 2000,
  className = "",
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const fullText = texts[currentTextIndex];

        if (!isDeleting) {
          // 타이핑 중
          if (currentText.length < fullText.length) {
            setCurrentText(fullText.slice(0, currentText.length + 1));
          } else {
            // 타이핑 완료 후 잠시 대기
            setTimeout(() => setIsDeleting(true), pauseTime);
          }
        } else {
          // 삭제 중
          if (currentText.length > 0) {
            setCurrentText(currentText.slice(0, -1));
          } else {
            // 삭제 완료 후 다음 텍스트로
            setIsDeleting(false);
            setCurrentTextIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [
    currentText,
    isDeleting,
    currentTextIndex,
    texts,
    typingSpeed,
    deletingSpeed,
    pauseTime,
  ]);

  const renderText = (text: string) => {
    const highlightWords = ["이야기", "고민", "UX", "소통"];

    let result = text;
    highlightWords.forEach((word) => {
      const regex = new RegExp(`(${word})`, "g");
      result = result.replace(
        regex,
        `<span class="bg-gradient-to-r from-purple-500 font-bold to-blue-500 bg-clip-text text-transparent">$1</span>`
      );
    });

    return result;
  };

  return (
    <span className={className}>
      <span dangerouslySetInnerHTML={{ __html: renderText(currentText) }} />
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypingAnimation;
