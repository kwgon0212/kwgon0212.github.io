"use client";

import { ImageCarousel } from "@/components/shared/ImageCarousel";

type FeaturesProps = {
  images?: string[];
  items: Array<{
    title: string;
    description?: string;
  }>;
};

export const Features = ({ images, items }: FeaturesProps) => {
  return (
    <div className="grid gap-6 md:grid-cols-2 h-full">
      {/* 대표 이미지 - 캐러셀 */}
      {images && images.length > 0 && (
        <ImageCarousel images={images} alt="주요 개발 사항" />
      )}

      {/* 기능 목록 */}
      <div
        className={
          images && images.length > 0 ? "space-y-3" : "col-span-2 space-y-3"
        }
      >
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
