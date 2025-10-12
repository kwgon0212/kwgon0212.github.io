"use client";

export const Troubleshooting = (props: {
  items: Array<{
    title: string;
    problem: string;
    cause?: string;
    fix: string;
    impact?: string;
  }>;
}) => {
  const { items } = props;
  return (
    <div className="space-y-4">
      {items.map((t, i) => (
        <details
          key={i}
          className="group rounded-xl border border-gray-300 dark:border-gray-600 overflow-hidden hover:border-gray-400 dark:hover:border-gray-500 transition-colors"
        >
          <summary className="cursor-pointer select-none p-4 font-semibold text-sm text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            {t.title}
          </summary>

          <div className="px-4 pb-4 pt-2 space-y-3 text-sm border-t border-gray-200 dark:border-gray-700">
            {/* 문제 */}
            <div>
              <span className="font-semibold text-gray-900 dark:text-white">
                문제:
              </span>{" "}
              <span className="text-gray-700 dark:text-gray-300">
                {t.problem}
              </span>
            </div>

            {/* 원인 */}
            {t.cause && (
              <div>
                <span className="font-semibold text-gray-900 dark:text-white">
                  원인:
                </span>{" "}
                <span className="text-gray-700 dark:text-gray-300">
                  {t.cause}
                </span>
              </div>
            )}

            {/* 해결 */}
            <div>
              <span className="font-semibold text-gray-900 dark:text-white">
                해결:
              </span>{" "}
              <span className="text-gray-700 dark:text-gray-300">{t.fix}</span>
            </div>

            {/* 영향 */}
            {t.impact && (
              <div>
                <span className="font-semibold text-gray-900 dark:text-white">
                  영향:
                </span>{" "}
                <span className="text-gray-700 dark:text-gray-300">
                  {t.impact}
                </span>
              </div>
            )}
          </div>
        </details>
      ))}
    </div>
  );
};
