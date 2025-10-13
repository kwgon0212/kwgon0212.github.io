"use client";

import Image from "next/image";

type FeaturesProps = {
  image?: string;
  items: Array<{
    title: string;
    description?: string;
  }>;
};

export const Features = ({ image, items }: FeaturesProps) => {
  return (
    <div className="grid gap-6 md:grid-cols-2 h-full">
      {/* 대표 이미지 */}
      {image && (
        <div className="relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
          <Image
            src={image}
            alt="주요 개발 사항"
            fill
            className="object-contain p-2"
          />
        </div>
      )}

      {/* 기능 목록 */}
      <div className={image ? "space-y-3" : "col-span-2 space-y-3"}>
        {items.map((item, index) => (
          <div key={index} className="space-y-1">
            <div className="flex gap-2">
              <span className="text-gray-400 dark:text-gray-500 text-sm shrink-0">
                •
              </span>
              <div>
                <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                  {item.title}
                </h4>
                {item.description && (
                  <p className="text-sm text-gray-600 dark:text-gray-400 whitespace-pre-line leading-relaxed mt-1">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
