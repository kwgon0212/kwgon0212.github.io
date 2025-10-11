"use client";

import Image from "next/image";
import React from "react";
import { educations } from "./constants/resume/educations";
import { profile } from "./constants/resume/profile";
import { actives } from "./constants/resume/actives";
import { certificates } from "./constants/resume/certificates";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import TypingAnimation from "./shared/TypingAnimation";
import { mottos } from "./constants/resume/mottos";
import { cn } from "@/lib/utils";

const Resume = () => {
  const { ref, isVisible } = useScrollAnimation(600);

  return (
    <section
      ref={ref}
      data-title="김우곤's Portfolio"
      className={cn(
        "min-h-screen py-20 px-6 md:px-12 lg:px-20 transition-all duration-1000 ease-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* 프로필 이미지 */}
          <div className="flex-shrink-0">
            <div className="w-48 h-48 relative rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 shadow-lg">
              <Image
                src={profile.image}
                alt="김우곤"
                className="w-full h-full object-cover"
                fill
              />
            </div>
          </div>

          {/* 프로필 정보 */}
          <div className="flex-1 flex flex-col gap-3">
            <h1 className="text-4xl font-bold text-black dark:text-white">
              {profile.name}
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-400">
              {profile.description}
            </p>

            <div className="text-2xl font-medium min-h-[2.5rem] flex items-center">
              <TypingAnimation
                texts={mottos}
                typingSpeed={100}
                deletingSpeed={30}
                pauseTime={3000}
                className="text-black dark:text-white"
              />
            </div>

            {/* 연락처 정보 표 */}
            <div>
              <table className="w-full">
                <tbody>
                  <tr className="border-b border-gray-300 dark:border-gray-600">
                    <td className="px-4 py-3 text-sm font-medium text-gray-500 dark:text-gray-400 w-24 whitespace-nowrap border-r border-gray-300 dark:border-gray-600">
                      📧 이메일
                    </td>
                    <td className="px-4 py-3 text-gray-700 dark:text-gray-300">
                      {profile.email}
                    </td>
                  </tr>
                  <tr className="border-b border-gray-300 dark:border-gray-600">
                    <td className="px-4 py-3 text-sm font-medium text-gray-500 dark:text-gray-400 w-24 whitespace-nowrap border-r border-gray-300 dark:border-gray-600">
                      💻 GitHub
                    </td>
                    <td className="px-4 py-3">
                      <a
                        href={profile.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        {profile.github}
                      </a>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-300 dark:border-gray-600">
                    <td className="px-4 py-3 text-sm font-medium text-gray-500 dark:text-gray-400 w-24 whitespace-nowrap border-r border-gray-300 dark:border-gray-600">
                      📱 전화번호
                    </td>
                    <td className="px-4 py-3 text-gray-700 dark:text-gray-300">
                      {profile.phone}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-500 dark:text-gray-400 w-24 whitespace-nowrap border-r border-gray-300 dark:border-gray-600">
                      📍 주소
                    </td>
                    <td className="px-4 py-3 text-gray-700 dark:text-gray-300">
                      {profile.address}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <div className="relative pl-8 border-l-2 border-gray-300 dark:border-gray-700">
            <div className="mb-8 mt-12">
              <div className="absolute -left-[13px] w-6 h-6 rounded-full bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-white dark:bg-black"></div>
              </div>
              <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
                학력
              </h3>
            </div>

            {educations.map((edu, index) => (
              <div key={`edu-${index}`} className="mb-8 flex flex-col gap-1">
                <div className="absolute -left-[9px] w-4 h-4 rounded-full bg-green-500"></div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                  {edu.period}
                </div>
                <h3 className="text-xl font-semibold text-black dark:text-white mb-1 flex items-center gap-2">
                  <Image
                    src={edu.image}
                    alt={edu.school}
                    width={30}
                    height={30}
                    className="bg-blend-multiply"
                  />
                  {edu.school}
                </h3>
                <div className="text-base text-gray-600 dark:text-gray-400">
                  {edu.major}
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>

          <div className="relative pl-8 border-l-2 border-gray-300 dark:border-gray-700">
            <div className="mb-8">
              <div className="absolute -left-[13px] w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-white dark:bg-black"></div>
              </div>
              <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
                교육이수 및 경험
              </h3>
            </div>

            {actives.map((exp, index) => (
              <div key={`exp-${index}`} className="mb-8">
                <div className="absolute -left-[9px] w-4 h-4 rounded-full bg-blue-500"></div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                  {exp.period}
                </div>
                <h3 className="text-xl font-semibold text-black dark:text-white mb-1">
                  {exp.description}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  {exp.company}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-black dark:text-white mb-8 pb-3 border-b-2 border-gray-300 dark:border-gray-700">
            자격증
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="p-4 rounded-lg bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 transition"
              >
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {cert.period}
                </span>
                <h3 className="text-lg font-semibold text-black dark:text-white mb-1">
                  {cert.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {cert.company}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
