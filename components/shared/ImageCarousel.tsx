"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

type ImageCarouselProps = {
  images: string[];
  alt: string;
  className?: string;
};

export const ImageCarousel = ({
  images,
  alt,
  className,
}: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1: 다음, -1: 이전
  const [isFullscreen, setIsFullscreen] = useState(false);

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  const goToIndex = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // 슬라이드 애니메이션 설정
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  return (
    <>
      <div
        className={cn(
          "relative overflow-hidden rounded-xl bg-white dark:bg-gray-900 group",
          className
        )}
      >
        {/* 애니메이션이 적용된 이미지 */}
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="relative w-full h-full cursor-pointer"
            onClick={() => setIsFullscreen(true)}
          >
            <Image
              src={images[currentIndex]}
              alt={alt}
              fill
              className="object-contain"
            />
          </motion.div>
        </AnimatePresence>

        {/* 확대 버튼 */}
        <button
          onClick={() => setIsFullscreen(true)}
          className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70 z-10 cursor-pointer"
          aria-label="이미지 크게 보기"
        >
          <Maximize2 className="w-5 h-5" />
        </button>

        {/* 캐러셀 컨트롤 (이미지가 여러 개일 때만 표시) */}
        {images.length > 1 && (
          <>
            {/* 왼쪽 화살표 */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70 z-10"
              aria-label="이전 이미지"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* 오른쪽 화살표 */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70 z-10"
              aria-label="다음 이미지"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* 인디케이터 */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    goToIndex(index);
                  }}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all",
                    currentIndex === index
                      ? "bg-blue-500 w-6"
                      : "bg-gray-300 hover:bg-gray-400"
                  )}
                  aria-label={`이미지 ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* 전체 화면 모달 */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={() => setIsFullscreen(false)}
          >
            {/* 닫기 버튼 */}
            <button
              onClick={() => setIsFullscreen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-10"
              aria-label="닫기"
            >
              <X className="w-6 h-6" />
            </button>

            {/* 전체 화면 이미지 */}
            <div
              className="relative w-full h-full p-16"
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  className="relative w-full h-full max-w-5xl max-h-[85vh] mx-auto"
                >
                  <Image
                    src={images[currentIndex]}
                    alt={alt}
                    fill
                    className="object-contain"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* 전체 화면 컨트롤 */}
            {images.length > 1 && (
              <>
                {/* 왼쪽 화살표 */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goToPrevious();
                  }}
                  className="absolute left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                  aria-label="이전 이미지"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>

                {/* 오른쪽 화살표 */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goToNext();
                  }}
                  className="absolute right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                  aria-label="다음 이미지"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>

                {/* 인디케이터 */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation();
                        goToIndex(index);
                      }}
                      className={cn(
                        "w-3 h-3 rounded-full transition-all",
                        currentIndex === index
                          ? "bg-white w-8"
                          : "bg-white/50 hover:bg-white/70"
                      )}
                      aria-label={`이미지 ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
