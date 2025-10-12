"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

export const Features = (props: {
  items: Array<{ image?: string; title: string; description?: string }>;
}) => {
  const { items } = props;

  return (
    <div className="space-y-6">
      {items.map((f, i) => (
        <div
          key={i}
          className={cn(
            "grid gap-6",
            f.image ? "md:grid-cols-2" : "grid-cols-1"
          )}
        >
          {/* 이미지 */}
          {f.image && (
            <div className="relative h-64 overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
              <Image
                src={f.image}
                alt={f.title}
                fill
                className="object-contain p-6"
              />
            </div>
          )}

          {/* 설명 */}
          <div className="flex flex-col justify-center gap-3">
            <h4 className="text-base font-semibold text-gray-900 dark:text-white">
              {f.title}
            </h4>
            {f.description && (
              <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed">
                {f.description}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
