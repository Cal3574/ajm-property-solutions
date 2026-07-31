"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsLoading(false);
      return;
    }
    const timer = setTimeout(() => setIsLoading(false), 700);
    return () => clearTimeout(timer);
  }, [prefersReducedMotion]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="absolute inset-0 -z-10 scale-[2.5] rounded-full bg-accent/40 blur-3xl" />
            <Image
              src="/ajm-logo-mark.png"
              alt="AJM Property Solutions"
              width={2220}
              height={1257}
              priority
              className="h-16 w-auto drop-shadow-[0_0_35px_rgba(111,163,216,0.7)]"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
