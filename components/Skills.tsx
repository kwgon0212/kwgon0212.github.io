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
                <div className="relative group">
                  <svg
                    className="w-5 h-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 cursor-help"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-4 py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50 min-w-max">
                    <div className="space-y-1">
                      <div className="font-semibold text-xs text-gray-300 dark:text-gray-600 mb-2">
                        레벨별 설명
                      </div>
                      <div>Lv.0: 초보자 - 기본 개념 이해</div>
                      <div>Lv.1: 입문자 - 간단한 프로젝트 가능</div>
                      <div>Lv.2: 초급자 - 기본적인 기능 구현</div>
                      <div>Lv.3: 중급자 - 복잡한 프로젝트 개발</div>
                      <div>Lv.4: 고급자 - 아키텍처 설계 가능</div>
                      <div>Lv.5: 전문가 - 멘토링 및 리딩 가능</div>
                    </div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900 dark:border-t-gray-100"></div>
                  </div>
                </div>
              </div>

              {/* 무한 스크롤 컨테이너 */}
              <div className="relative scroll-container">
                {/* 왼쪽 페이드 효과 */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white dark:from-black to-transparent z-10 pointer-events-none"></div>

                {/* 오른쪽 페이드 효과 */}
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white dark:from-black to-transparent z-10 pointer-events-none"></div>

                {/* 스크롤 컨테이너 */}
                <div className="overflow-hidden py-3">
                  <div
                    className={`flex gap-6 ${
                      categoryIndex % 2 === 0
                        ? "animate-infinite-scroll"
                        : "animate-infinite-scroll-reverse"
                    }`}
                    style={{ width: "max-content" }}
                  >
                    {/* 첫 번째 세트 */}
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={`first-${skillIndex}`}
                        className="group relative flex-shrink-0 w-72 p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
                      >
                        {/* 스킬 이름과 아이콘 */}
                        <div className="flex items-center gap-3 mb-4">
                          <div className="flex items-center gap-2">
                            {skill.images.map((image) => {
                              if (image) {
                                return (
                                  <Image
                                    key={image}
                                    src={image}
                                    alt={skill.name}
                                    width={40}
                                    height={40}
                                  />
                                );
                              }
                            })}
                          </div>
                          <h4 className="text-lg font-semibold text-black dark:text-white">
                            {skill.name}
                          </h4>
                        </div>

                        {/* 레벨 표시 네모칸 */}
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                              Lv.{skill.level}
                            </span>
                          </div>
                          <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((level) => (
                              <div
                                key={level}
                                className={`flex-1 h-3 rounded-sm transition-all duration-300 ${
                                  level <= skill.level
                                    ? `bg-gradient-to-br ${skill.color}`
                                    : "bg-gray-200 dark:bg-gray-700"
                                }`}
                              />
                            ))}
                          </div>
                        </div>

                        {/* 호버 시 배경 그라데이션 */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`}
                        ></div>
                      </div>
                    ))}

                    {/* 두 번째 세트 (무한 스크롤용 복제) */}
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={`second-${skillIndex}`}
                        className="group relative flex-shrink-0 w-72 p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
                      >
                        {/* 스킬 이름과 아이콘 */}
                        <div className="flex items-center gap-3 mb-4">
                          <div className="flex items-center gap-2">
                            {skill.images.map((image) => {
                              if (image) {
                                return (
                                  <Image
                                    key={image}
                                    src={image}
                                    alt={skill.name}
                                    width={40}
                                    height={40}
                                  />
                                );
                              }
                            })}
                          </div>
                          <h4 className="text-lg font-semibold text-black dark:text-white">
                            {skill.name}
                          </h4>
                        </div>

                        {/* 레벨 표시 네모칸 */}
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                              Lv.{skill.level}
                            </span>
                          </div>
                          <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((level) => (
                              <div
                                key={level}
                                className={`flex-1 h-3 rounded-sm transition-all duration-300 ${
                                  level <= skill.level
                                    ? `bg-gradient-to-br ${skill.color}`
                                    : "bg-gray-200 dark:bg-gray-700"
                                }`}
                              />
                            ))}
                          </div>
                        </div>

                        {/* 호버 시 배경 그라데이션 */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`}
                        ></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
