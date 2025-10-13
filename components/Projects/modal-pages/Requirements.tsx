"use client";

import { ImageCarousel } from "@/components/shared/ImageCarousel";

export const Requirements = (props: {
  images?: string[];
  caption?: string;
  description?: string;
}) => {
  const { images, caption, description } = props;

  if (!images || images.length === 0) {
    return (
      <div className="flex flex-col gap-3 justify-center h-full">
        {caption && (
          <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
            {caption}
          </p>
        )}
        {description && (
          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
            {description}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="grid gap-6 grid-cols-1 h-full">
      {/* 이미지 영역 - 캐러셀 */}
      <ImageCarousel
        images={images}
        alt={caption || "소프트웨어 요구사항 명세서"}
      />

      {/* 설명 영역 */}
      <div className="flex flex-col gap-3 justify-center">
        {caption && (
          <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
            {caption}
          </p>
        )}
        {description && (
          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};
