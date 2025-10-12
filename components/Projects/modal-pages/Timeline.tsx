"use client";

import Image from "next/image";

export const Timeline = (props: {
  image?: string;
  caption?: string;
  description?: string;
}) => {
  const { image, caption, description } = props;

  if (!image) {
    return (
      <div className="flex flex-col gap-3 justify-center h-full">
        {caption && (
          <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
            {caption}
          </p>
        )}
        {description && (
          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            {description}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 h-full">
      {/* 이미지 영역 */}
      <div className="relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
        <Image
          src={image}
          alt={caption || "개발 일정"}
          fill
          className="object-contain p-6"
        />
      </div>

      {/* 설명 영역 */}
      <div className="flex flex-col gap-3 justify-center">
        {caption && (
          <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
            {caption}
          </p>
        )}
        {description && (
          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};
