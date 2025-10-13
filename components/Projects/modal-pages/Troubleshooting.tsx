"use client";

import { ImageCarousel } from "@/components/shared/ImageCarousel";

type TroubleshootingItem = {
  title: string;
  problem: {
    images?: string[];
    description: string;
  };
  solution: {
    images?: string[];
    description: string;
  };
  result: {
    images?: string[];
    description: string;
  };
};

export const Troubleshooting = (props: { items: TroubleshootingItem[] }) => {
  const { items } = props;

  return (
    <div className="space-y-10">
      {items.map((item, index) => (
        <div key={index} className="space-y-6">
          {/* 제목 */}
          <h3 className="font-bold text-lg text-gray-900 dark:text-white">
            {item.title}
          </h3>

          {/* 내용 - 가로 배치 */}
          <div className="grid grid-cols-3 gap-6">
            {/* 문제점 */}
            <Section
              title="문제점"
              images={item.problem.images}
              description={item.problem.description}
              color="red"
            />

            {/* 개선방안 */}
            <Section
              title="개선방안"
              images={item.solution.images}
              description={item.solution.description}
              color="blue"
            />

            {/* 결과 */}
            <Section
              title="결과"
              images={item.result.images}
              description={item.result.description}
              color="green"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

// 섹션 컴포넌트
const Section = ({
  title,
  images,
  description,
  color,
}: {
  title: string;
  images?: string[];
  description: string;
  color: "red" | "blue" | "green";
}) => {
  const colorClasses = {
    red: "text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20",
    blue: "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20",
    green:
      "text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20",
  };

  return (
    <div className="flex flex-col space-y-3">
      {/* 섹션 제목 */}
      <div
        className={`inline-block px-3 py-1 rounded-lg font-semibold text-sm ${colorClasses[color]}`}
      >
        {title}
      </div>

      {/* 이미지와 설명 - 세로 배치 */}
      {images && images.length > 0 && (
        <ImageCarousel
          images={images}
          alt={`${title} 이미지`}
          className="h-48"
        />
      )}

      {/* 설명 */}
      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
        {description}
      </p>
    </div>
  );
};
