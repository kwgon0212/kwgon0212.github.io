"use client";

import Image from "next/image";
import { Skill } from "@/components/constants/stack";

type Props = {
  title: string;
  coverImage: string;
  overview: string;
  team: { name: string; role: string }[];
  repo?: { label: string; href: string };
  mainRole?: string;
  techStack: Skill[];
};

export const Overview = ({
  title,
  coverImage,
  overview,
  team,
  repo,
  mainRole,
  techStack,
}: Props) => {
  return (
    <div className="grid gap-6 md:grid-cols-2 h-full">
      {/* 이미지 영역 */}
      <div className="relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
        <Image
          src={coverImage}
          alt={`${title} cover`}
          fill
          className="object-contain p-8"
          priority
        />
      </div>

      {/* 정보 영역 */}
      <div className="flex flex-col gap-6 overflow-y-auto">
        {/* 개요 */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 pb-2 border-b border-gray-200 dark:border-gray-700">
            프로젝트 개요
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed">
            {overview}
          </p>
        </div>

        {/* 개발 인원 */}
        <div>
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 pb-2 border-b border-gray-200 dark:border-gray-700">
            개발 인원
          </h4>
          <ul className="space-y-1.5 text-sm text-gray-700 dark:text-gray-300">
            {team.map((m, i) => (
              <li key={i}>{m.role ? `${m.name} — ${m.role}` : m.name}</li>
            ))}
          </ul>
        </div>

        {/* 주역할 */}
        {mainRole && (
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 pb-2 border-b border-gray-200 dark:border-gray-700">
              주역할
            </h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed">
              {mainRole}
            </p>
          </div>
        )}

        {/* 기술 스택 */}
        <div>
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 pb-2 border-b border-gray-200 dark:border-gray-700">
            기술 스택
          </h4>
          <div className="flex flex-wrap gap-2">
            {techStack.map(({ name: stack, img }) => (
              <div
                key={`project-modal-tech-stack-${stack}`}
                className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 text-sm rounded-lg border border-blue-200 dark:border-blue-800/50 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors cursor-default"
              >
                {img && (
                  <div className="w-5 h-5 flex items-center justify-center bg-white dark:bg-white/90 rounded p-0.5">
                    <Image
                      src={img}
                      alt={stack}
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </div>
                )}
                <span className="font-medium">{stack}</span>
              </div>
            ))}
          </div>
        </div>

        {/* GitHub 링크 */}
        {repo && (
          <a
            href={repo.href}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 rounded-lg border border-gray-300 dark:border-gray-600 px-4 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors mt-2"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                clipRule="evenodd"
              />
            </svg>
            {repo.label}
          </a>
        )}
      </div>
    </div>
  );
};
