import { useEffect, useState } from "react";

export function useSectionTitle(introDone: boolean, initialTitle: string) {
  const [title, setTitle] = useState(initialTitle);

  useEffect(() => {
    if (!introDone) return;

    const handleScroll = () => {
      const sections = document.querySelectorAll("section[data-title]");

      let currentSection = sections[0];
      let maxVisibility = 0;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // 섹션이 화면에 보이는 정도를 계산
        const visibleTop = Math.max(0, rect.top);
        const visibleBottom = Math.min(windowHeight, rect.bottom);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);
        const visibility = visibleHeight / windowHeight;

        if (visibility > maxVisibility) {
          maxVisibility = visibility;
          currentSection = section;
        }
      });

      const newTitle = currentSection.getAttribute("data-title");
      if (newTitle && newTitle !== title) {
        console.log("Title changed to:", newTitle);
        setTitle(newTitle);
      }
    };

    // 초기 실행
    handleScroll();

    // 스크롤 이벤트 리스너 추가
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [introDone, title]);

  return title;
}
