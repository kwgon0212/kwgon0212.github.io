"use client";

import { ImageCarousel } from "@/components/shared/ImageCarousel";

export const Timeline = (props: {
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
    <div className="flex flex-col gap-4 h-full">
      {/* 이미지 캐러셀 */}
      <ImageCarousel
        images={images}
        alt={caption || "개발 일정"}
        className="flex-1"
      />

      {/* 캡션과 설명 */}
      <div className="flex flex-col gap-2">
        {caption && (
          <p className="text-sm text-center text-gray-600 dark:text-gray-400 font-medium">
            {caption}
          </p>
        )}
        {description && (
          <p className="text-sm text-center text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};
