"use client";

import Image from "next/image";
import React, { useState } from "react";
import { skillCategories, getSkillImages } from "./constants/skillCategories";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation(200);
  const [rotations, setRotations] = useState<
    Record<
      string,
      { rotateX: number; rotateY: number; xPercent?: number; yPercent?: number }
    >
  >({});

  const getLevelText = (level: number) => {
    const levels = ["초보자", "입문자", "초급자", "중급자", "고급자", "전문가"];
    return levels[level] || "초보자";
  };

  const getLevelColor = (level: number) => {
    if (level >= 5) return "bg-purple-500 dark:bg-purple-400";
    if (level >= 4) return "bg-blue-500 dark:bg-blue-400";
    if (level >= 3) return "bg-green-500 dark:bg-green-400";
    if (level >= 2) return "bg-yellow-500 dark:bg-yellow-400";
    return "bg-orange-500 dark:bg-orange-400";
  };

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
    cardId: string
  ) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    // 빛 반사 효과를 위한 마우스 위치 퍼센트 계산
    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;

    setRotations((prev) => ({
      ...prev,
      [cardId]: { rotateX, rotateY, xPercent, yPercent },
    }));
  };

  const handleMouseLeave = (cardId: string) => {
    setRotations((prev) => ({
      ...prev,
      [cardId]: { rotateX: 0, rotateY: 0 },
    }));
  };

  return (
    <section
      ref={ref}
      data-title="Skills"
      className={cn(
        "min-h-screen py-20 px-6 md:px-12 lg:px-20 transition-all duration-1000 ease-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
    >
      <div className="max-w-6xl mx-auto">
        {/* 헤더 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
            Skills
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            보유 기술 스택 및 숙련도
          </p>
        </div>

        <div className="grid grid-cols gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              {/* 카테고리 제목 */}
              <div className="flex items-center gap-2 mb-6">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-2xl font-bold text-black dark:text-white">
                  {category.category}
                </h3>
              </div>

              {/* 스킬 그리드 */}
              <div className="grid grid-cols-6 gap-4">
                {category.skills.map((skill, skillIndex) => {
                  const images = getSkillImages(skill.stacks);
                  const cardId = `${categoryIndex}-${skillIndex}`;
                  const rotation = rotations[cardId] || {
                    rotateX: 0,
                    rotateY: 0,
                  };

                  return (
                    <div
                      key={skillIndex}
                      onMouseMove={(e) => handleMouseMove(e, cardId)}
                      onMouseLeave={() => handleMouseLeave(cardId)}
                      className="aspect-[3/4] bg-gradient-to-br from-indigo-50 via-violet-50 to-purple-50 dark:from-slate-800 dark:via-slate-700 dark:to-slate-800 rounded-2xl p-5 border border-indigo-100 dark:border-slate-600 shadow-sm hover:shadow-xl group cursor-pointer relative overflow-hidden backdrop-blur-sm"
                      style={{
                        transform: `perspective(1000px) rotateX(${
                          rotation.rotateX
                        }deg) rotateY(${rotation.rotateY}deg) scale(${
                          rotation.rotateX !== 0 || rotation.rotateY !== 0
                            ? 1.1
                            : 1
                        })`,
                        transformStyle: "preserve-3d",
                        transition:
                          "transform 0.1s ease-out, box-shadow 0.2s ease-out",
                      }}
                    >
                      {/* 빛 반사 오버레이 - 라이트모드 (원형) */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 dark:hidden"
                        style={{
                          background: rotation.xPercent
                            ? `radial-gradient(circle at ${rotation.xPercent}% ${rotation.yPercent}%, 
                               rgba(165, 180, 252, 0.5) 0%, 
                               rgba(196, 181, 253, 0.4) 30%, 
                               rgba(221, 214, 254, 0.3) 50%, 
                               transparent 70%)`
                            : "none",
                        }}
                      />

                      {/* 빛 반사 오버레이 - 다크모드 (대각선 줄) */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 hidden dark:block"
                        style={{
                          background: rotation.xPercent
                            ? `linear-gradient(135deg, 
                               transparent 0%, 
                               transparent ${Math.max(
                                 0,
                                 (rotation.xPercent! + rotation.yPercent!) / 2 -
                                   25
                               )}%, 
                               rgba(255, 255, 255, 0.15) ${Math.max(
                                 0,
                                 (rotation.xPercent! + rotation.yPercent!) / 2 -
                                   15
                               )}%, 
                               rgba(255, 255, 255, 0.5) ${
                                 (rotation.xPercent! + rotation.yPercent!) / 2
                               }%, 
                               rgba(255, 255, 255, 0.15) ${Math.min(
                                 100,
                                 (rotation.xPercent! + rotation.yPercent!) / 2 +
                                   15
                               )}%, 
                               transparent ${Math.min(
                                 100,
                                 (rotation.xPercent! + rotation.yPercent!) / 2 +
                                   25
                               )}%, 
                               transparent 100%)`
                            : "none",
                          mixBlendMode: "overlay",
                        }}
                      />

                      <div className="flex flex-col items-center justify-between h-full relative z-10">
                        {/* 로고 이미지 - 상단, 크게 */}
                        <div className="flex items-center justify-center flex-1 w-full py-4">
                          <div className="flex items-center justify-center gap-2">
                            {images.map((image, imgIndex) => (
                              <div
                                key={imgIndex}
                                className="flex items-center justify-center"
                              >
                                <Image
                                  src={image}
                                  alt={skill.name}
                                  width={70}
                                  height={70}
                                  className="object-contain"
                                />
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* 하단 정보 */}
                        <div className="flex flex-col items-center gap-2.5 w-full">
                          {/* 스택명 */}
                          <div className="relative group/name w-full">
                            <h4 className="text-lg font-semibold text-black dark:text-white text-center truncate px-1">
                              {skill.name}
                            </h4>
                            {/* 툴팁 */}
                            {skill.name.length > 12 && (
                              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-sm rounded-lg opacity-0 group-hover/name:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50 shadow-lg">
                                {skill.name}
                                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900 dark:border-t-gray-100"></div>
                              </div>
                            )}
                          </div>

                          {/* 레벨 */}
                          <div className="flex justify-between items-center w-full">
                            <div className="text-base font-bold text-black dark:text-white">
                              Lv.{skill.level}
                            </div>
                            <div className="text-xs font-medium text-gray-600 dark:text-gray-300">
                              {getLevelText(skill.level)}
                            </div>
                          </div>

                          {/* 프로그레스 바 */}
                          <div className="relative w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                            <div
                              className={`absolute top-0 left-0 h-full ${getLevelColor(
                                skill.level
                              )} transition-all duration-1000 ease-out rounded-full`}
                              style={{
                                width: `${(skill.level / 5) * 100}%`,
                              }}
                            >
                              <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
