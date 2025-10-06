"use client";

import Image from "next/image";
import React from "react";
import { skillCategories } from "./constants/skillCategories";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation(200);
  return (
    <section
      ref={ref}
      data-title="Skills"
      className={`min-h-screen py-20 px-6 md:px-12 lg:px-20 transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
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

        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              {/* 카테고리 제목 */}
              <div className="flex items-center gap-3 mb-8">
                <span className="text-4xl">{category.icon}</span>
                <h3 className="text-3xl font-bold text-black dark:text-white">
                  {category.category}
                </h3>
              </div>

              {/* 스킬 그리드 */}
              <div className="flex flex-wrap gap-8 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="relative group">
                    {/* 오각형 SVG */}
                    <svg
                      width="140"
                      height="140"
                      viewBox="0 0 140 140"
                      className="transition-all duration-500 group-hover:scale-0"
                    >
                      <defs>
                        <linearGradient
                          id={`gradient-${categoryIndex}-${skillIndex}`}
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop
                            offset="0%"
                            stopColor="currentColor"
                            stopOpacity="0.3"
                          />
                          <stop
                            offset="100%"
                            stopColor="currentColor"
                            stopOpacity="0.8"
                          />
                        </linearGradient>
                      </defs>
                      {/* 오각형의 각 변을 개별적으로 그리기 */}
                      {[1, 2, 3, 4, 5].map((side) => {
                        const isActive = side <= skill.level;

                        // 정오각형의 5개 꼭짓점 좌표 (중심: 70,70, 반지름: 60)
                        const centerX = 70;
                        const centerY = 70;
                        const radius = 60;
                        const points = [];

                        for (let i = 0; i < 5; i++) {
                          const angle = (i * 2 * Math.PI) / 5 - Math.PI / 2; // -90도부터 시작
                          const x = centerX + radius * Math.cos(angle);
                          const y = centerY + radius * Math.sin(angle);
                          points.push({ x, y });
                        }

                        const currentPoint = points[side - 1];
                        const nextPoint = points[side % 5]; // 마지막 점은 첫 번째 점과 연결

                        return (
                          <line
                            key={side}
                            x1={currentPoint.x}
                            y1={currentPoint.y}
                            x2={nextPoint.x}
                            y2={nextPoint.y}
                            stroke="currentColor"
                            strokeWidth="3"
                            className={`transition-all duration-300 ${
                              isActive
                                ? `text-gradient-${skill.level}`
                                : "text-gray-300 dark:text-gray-600"
                            }`}
                          />
                        );
                      })}
                    </svg>

                    {/* 스택 이미지 */}
                    <div className="absolute inset-0 flex items-center justify-center gap-1">
                      {skill.images.map((image, index) => {
                        if (image) {
                          return (
                            <Image
                              key={image}
                              src={image}
                              alt={skill.name}
                              width={skill.images.length > 1 ? 35 : 45}
                              height={skill.images.length > 1 ? 35 : 45}
                              className="transition-all duration-500 group-hover:scale-0"
                            />
                          );
                        }
                      })}
                    </div>

                    {/* 레벨 설명 텍스트 */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-black dark:text-white mb-2">
                          Lv.{skill.level}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 max-w-20">
                          {skill.level === 0 && "초보자"}
                          {skill.level === 1 && "입문자"}
                          {skill.level === 2 && "초급자"}
                          {skill.level === 3 && "중급자"}
                          {skill.level === 4 && "고급자"}
                          {skill.level === 5 && "전문가"}
                        </div>
                      </div>
                    </div>

                    {/* 호버 시 스택명 */}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                      {skill.name}
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-gray-900 dark:border-b-gray-100"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
