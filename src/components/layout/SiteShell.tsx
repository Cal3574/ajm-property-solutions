import { MotionConfig } from "framer-motion";
import { BackToTop } from "./BackToTop";
import { FloatingWhatsApp } from "./FloatingWhatsApp";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { PageLoader } from "./PageLoader";
import { ScrollProgress } from "./ScrollProgress";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <PageLoader />
      <ScrollProgress />
      <Navbar />
      <main className="min-h-screen pt-20">{children}</main>
      <Footer />
      <BackToTop />
      <FloatingWhatsApp />
    </MotionConfig>
  );
}
