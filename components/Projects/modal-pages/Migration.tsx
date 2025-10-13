"use client";

type MigrationItem = {
  title: string;
  description: string;
};

export const Migration = (props: { items: MigrationItem[] }) => {
  const { items } = props;

  return (
    <div className="space-y-8">
      {items.map((item, index) => (
        <div key={index} className="space-y-3">
          {/* 제목 */}
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
            {item.title}
          </h3>

          {/* 설명 */}
          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
};
