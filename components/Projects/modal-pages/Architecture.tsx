"use client";

import Image from "next/image";

export const Architecture = (props: { image: string; caption?: string }) => {
  const { image, caption } = props;
  return (
    <div className="flex flex-col gap-4 h-full">
      {/* 이미지 */}
      <div className="relative flex-1 overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-white">
        <Image
          src={image}
          alt={caption || "아키텍처"}
          fill
          className="object-contain p-8"
        />
      </div>

      {/* 캡션 */}
      {caption && (
        <p className="text-sm text-center text-gray-600 dark:text-gray-400">
          {caption}
        </p>
      )}
    </div>
  );
};
