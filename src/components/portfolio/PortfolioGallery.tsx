"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { ProjectCardMedia } from "@/components/portfolio/ProjectCardMedia";
import { ProjectModal } from "@/components/portfolio/ProjectModal";
import {
  portfolioCategories,
  portfolioProjects,
  type PortfolioCategory,
  type PortfolioProject,
} from "@/lib/portfolio";

const filters = ["All", ...portfolioCategories] as const;

export function PortfolioGallery() {
  const [activeFilter, setActiveFilter] =
    useState<(typeof filters)[number]>("All");
  const [selectedProject, setSelectedProject] =
    useState<PortfolioProject | null>(null);

  const visibleProjects = useMemo(() => {
    if (activeFilter === "All") return portfolioProjects;
    return portfolioProjects.filter(
      (project) => project.category === (activeFilter as PortfolioCategory),
    );
  }, [activeFilter]);

  return (
    <>
      <div
        className="flex flex-wrap gap-3"
        role="group"
        aria-label="Filter projects by category"
      >
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            aria-pressed={activeFilter === filter}
            className={`rounded-full border px-5 py-2 text-sm tracking-wide transition-colors ${
              activeFilter === filter
                ? "border-accent bg-accent text-background"
                : "border-border-hairline text-foreground-muted hover:border-accent hover:text-accent"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="mt-12 columns-1 gap-6 sm:columns-2 lg:columns-3">
        {visibleProjects.map((project, index) => (
          <motion.button
            key={project.id}
            type="button"
            onClick={() => setSelectedProject(project)}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: (index % 6) * 0.06 }}
            className="group relative mb-6 block w-full overflow-hidden break-inside-avoid text-left"
          >
            <ProjectCardMedia project={project} />
          </motion.button>
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
