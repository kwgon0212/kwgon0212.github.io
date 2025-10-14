"use client";

type PresentationProps = {
  url: string;
  title?: string;
};

export const Presentation = ({ url, title }: PresentationProps) => {
  return (
    <div className="flex flex-col h-full gap-4">
      {/* 제목 */}
      {title && (
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
          {title}
        </h3>
      )}

      {/* iframe */}
      <div className="flex-1 relative rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
        <iframe
          src={url}
          className="absolute inset-0 w-full h-full"
          title={title || "프레젠테이션"}
          allowFullScreen
        />
      </div>
    </div>
  );
};
