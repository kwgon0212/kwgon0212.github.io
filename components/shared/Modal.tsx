"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  /** 바깥 클릭으로 닫기 허용 여부 (기본 true) */
  closeOnBackdrop?: boolean;
};

const backdropVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const sheetVariants = {
  initial: { opacity: 0, y: 40, scale: 0.98 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 480, damping: 32 },
  },
  exit: {
    opacity: 0,
    y: 40,
    scale: 0.98,
    transition: { duration: 0.18 },
  },
};

/** 스크롤 잠금 훅 */
function useLockBodyScroll(locked: boolean) {
  useEffect(() => {
    if (!locked) return;
    const { body } = document;
    const prev = body.style.overflow;
    body.style.overflow = "hidden";
    return () => {
      body.style.overflow = prev;
    };
  }, [locked]);
}

export const Modal = ({
  isOpen,
  onClose,
  children,
  closeOnBackdrop = true,
}: ModalProps) => {
  const portalRef = useRef<HTMLElement | null>(null);

  // 포털 루트 준비 (#modal-root가 없으면 동적 생성)
  useEffect(() => {
    let root = document.getElementById("modal-root") as HTMLElement | null;
    if (!root) {
      root = document.createElement("div");
      root.id = "modal-root";
      document.body.appendChild(root);
    }
    portalRef.current = root;
  }, []);

  // ESC 닫기
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  // 스크롤 잠금
  useLockBodyScroll(isOpen);

  if (!portalRef.current) return null;

  return createPortal(
    // 핵심 포인트: Modal 컴포넌트는 항상 마운트.
    // 내부에서 isOpen && (...) 로 조건부 렌더 → AnimatePresence가 exit 실행 기회 확보.
    <AnimatePresence initial={false} mode="sync">
      {isOpen && (
        <motion.div
          key="backdrop"
          className="fixed inset-0 z-[1000] grid place-items-center bg-black/40"
          variants={backdropVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          onClick={closeOnBackdrop ? onClose : undefined}
        >
          <motion.div
            key="sheet"
            className="mx-4 w-[min(95vw,1200px)] h-[85vh] rounded-2xl bg-white dark:bg-gray-800 p-6 shadow-2xl flex flex-col overflow-hidden"
            variants={sheetVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    portalRef.current
  );
};
