"use client";

import React, { useState } from "react";
import Image from "next/image";
import { projects } from "./constants/projects";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Projects = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { ref, isVisible } = useScrollAnimation(400);

  return (
    <section
      ref={ref}
      data-title="Projects"
      className={`min-h-screen py-20 px-6 md:px-12 lg:px-20 transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* 헤더 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
            Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            진행한 프로젝트들
          </p>
        </div>

        {/* 프로젝트 탭 */}
        <div className="max-w-4xl mx-auto">
          {/* 탭 헤더 */}
          <div className="flex flex-wrap gap-1 mb-8 border-b border-gray-200 dark:border-gray-700">
            {projects.map((project, index) => (
              <button
                key={project.id}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors duration-200 cursor-pointer ${
                  activeTab === index
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                }`}
              >
                {project.name}
              </button>
            ))}
          </div>

          {/* 탭 콘텐츠 슬라이더 */}
          <div className="relative bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeTab * 100}%)` }}
            >
              {projects.map((project) => (
                <div key={project.id} className="w-full flex-shrink-0">
                  <div className="p-8">
                    <div className="flex flex-col lg:flex-row gap-8">
                      {/* 프로젝트 이미지/로고 */}
                      <div className="w-full lg:w-80 h-64 lg:h-80 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center flex-shrink-0 rounded-lg">
                        <Image
                          src={project.logo}
                          alt={project.name}
                          width={120}
                          height={120}
                          className="object-contain"
                        />
                      </div>

                      {/* 프로젝트 정보 */}
                      <div className="flex-1">
                        {/* 프로젝트명과 기간 */}
                        <div className="mb-6">
                          <h3 className="text-3xl font-bold text-black dark:text-white mb-2">
                            {project.name}
                          </h3>
                          <p className="text-lg text-gray-500 dark:text-gray-400 mb-4">
                            {project.period}
                          </p>
                          {project.award && (
                            <div className="inline-flex items-center px-4 py-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 text-sm font-medium rounded-full break-keep">
                              🏆 {project.award}
                            </div>
                          )}
                        </div>

                        {/* 프로젝트 설명 */}
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-black dark:text-white mb-3">
                            프로젝트 소개
                          </h4>
                          <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                            {project.description}
                          </p>
                        </div>

                        {/* 기술 스택 */}
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-black dark:text-white mb-3">
                            사용 기술
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* 주요 기능 */}
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-black dark:text-white mb-3">
                            주요 기능 및 특징
                          </h4>
                          <ul className="space-y-2">
                            {project.details.map((detail, detailIndex) => (
                              <li
                                key={detailIndex}
                                className="flex items-start gap-2"
                              >
                                <span className="text-blue-500 mt-1">•</span>
                                <span className="text-gray-600 dark:text-gray-400">
                                  {detail}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* 링크 버튼들 */}
                        <div className="flex gap-4">
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                            >
                              <svg
                                className="w-4 h-4"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              GitHub
                            </a>
                          )}
                          {project.demoUrl && (
                            <a
                              href={project.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
                            >
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                              </svg>
                              데모 보기
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
