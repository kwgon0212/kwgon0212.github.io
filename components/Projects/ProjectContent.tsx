"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Project } from "../constants/projects";
import { Overview } from "./modal-pages/OverView";
import { Timeline } from "./modal-pages/Timeline";
import { Requirements } from "./modal-pages/Requirements";
import { Architecture } from "./modal-pages/Architecture";
import { Features } from "./modal-pages/Features";
import { Troubleshooting } from "./modal-pages/Troubleshooting";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

type ProjectContentProps = {
  project: Project;
  onClose: () => void;
};

type Page =
  | "overview"
  | "timeline"
  | "requirements"
  | "architecture"
  | "features"
  | "troubleshooting";

const ProjectContent = ({ project, onClose }: ProjectContentProps) => {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  // 사용 가능한 페이지 목록
  const pages: { id: Page; label: string; enabled: boolean }[] = [
    { id: "overview", label: "개요", enabled: true },
    { id: "timeline", label: "개발 일정", enabled: !!project.timeline },
    {
      id: "requirements",
      label: "소프트웨어 요구사항 명세서",
      enabled: !!project.requirements,
    },
    { id: "architecture", label: "아키텍처", enabled: !!project.architecture },
    { id: "features", label: "주요 개발", enabled: !!project.features },
    {
      id: "troubleshooting",
      label: "트러블슈팅",
      enabled: !!project.troubleshooting,
    },
  ];

  const enabledPages = pages.filter((p) => p.enabled);
  const currentPage = enabledPages[currentPageIndex]?.id || "overview";

  const goToPrevPage = () => {
    setCurrentPageIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const goToNextPage = () => {
    setCurrentPageIndex((prev) =>
      prev < enabledPages.length - 1 ? prev + 1 : prev
    );
  };

  return (
    <div className="flex flex-col h-full">
      {/* 헤더 */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200 dark:border-gray-700 shrink-0">
        <div className="flex items-center gap-3">
          {/* 프로젝트 로고 */}
          <Image
            src={project.logo}
            alt={project.name}
            width={30}
            height={30}
            className="object-contain rounded-sm"
          />
          {/* 프로젝트명 > 페이지명 */}
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-bold text-black dark:text-white">
              {project.name}
            </h2>
            <span className="text-gray-400 dark:text-gray-500">›</span>
            <p className="text-lg font-medium text-gray-600 dark:text-gray-400">
              {enabledPages[currentPageIndex]?.label}
            </p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors cursor-pointer"
          aria-label="닫기"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* 페이지 콘텐츠 (스크롤 가능, 애니메이션) */}
      <div className="flex-1 overflow-y-auto mb-6 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPageIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="h-full"
          >
            {currentPage === "overview" && (
              <Overview
                title={project.name}
                coverImage={project.coverImage}
                overview={project.overview}
                team={project.team}
                repo={project.repo}
                mainRole={project.mainRole}
                techStack={project.techStack}
              />
            )}

            {currentPage === "timeline" && project.timeline && (
              <Timeline {...project.timeline} />
            )}

            {currentPage === "requirements" && project.requirements && (
              <Requirements {...project.requirements} />
            )}

            {currentPage === "architecture" && project.architecture && (
              <Architecture {...project.architecture} />
            )}

            {currentPage === "features" && project.features && (
              <Features {...project.features} />
            )}

            {currentPage === "troubleshooting" && project.troubleshooting && (
              <Troubleshooting items={project.troubleshooting} />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 페이지네이션 컨트롤 (하단 고정) */}
      {enabledPages.length > 1 && (
        <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700 shrink-0">
          {/* 왼쪽 화살표 */}
          <button
            onClick={goToPrevPage}
            disabled={currentPageIndex === 0}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-lg transition-all font-medium",
              currentPageIndex === 0
                ? "opacity-40 cursor-not-allowed"
                : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
            )}
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="text-sm">이전</span>
          </button>

          {/* 인디케이터 */}
          <div className="flex items-center gap-2">
            {enabledPages.map((page, index) => (
              <button
                key={page.id}
                onClick={() => setCurrentPageIndex(index)}
                className={cn(
                  "transition-all rounded-full",
                  currentPageIndex === index
                    ? "w-8 h-2 bg-blue-500 dark:bg-blue-400"
                    : "w-2 h-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                )}
                aria-label={page.label}
              />
            ))}
          </div>

          {/* 오른쪽 화살표 */}
          <button
            onClick={goToNextPage}
            disabled={currentPageIndex === enabledPages.length - 1}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-lg transition-all font-medium",
              currentPageIndex === enabledPages.length - 1
                ? "opacity-40 cursor-not-allowed"
                : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
            )}
          >
            <span className="text-sm">다음</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectContent;
