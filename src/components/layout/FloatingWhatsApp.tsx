"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { siteConfig } from "@/lib/site-config";

export function FloatingWhatsApp() {
  return (
    <motion.a
      href={siteConfig.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-accent/60 bg-surface text-lg text-accent shadow-lg transition-colors hover:border-accent hover:bg-surface-raised"
    >
      <FaWhatsapp />
    </motion.a>
  );
}
