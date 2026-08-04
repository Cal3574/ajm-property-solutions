"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { HiOutlineArrowUp } from "react-icons/hi";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-20 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-accent/60 bg-surface text-lg text-accent shadow-lg transition-colors hover:border-accent hover:bg-surface-raised"
        >
          <HiOutlineArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
