import { BeforeAfter } from "@/components/home/BeforeAfter";
import { CTA } from "@/components/home/CTA";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { Hero } from "@/components/home/Hero";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { Stats } from "@/components/home/Stats";
import { Testimonials } from "@/components/home/Testimonials";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <ServicesPreview />
      <WhyChooseUs />
      <FeaturedProjects />
      <BeforeAfter />
      <Testimonials />
      <CTA />
    </>
  );
}
