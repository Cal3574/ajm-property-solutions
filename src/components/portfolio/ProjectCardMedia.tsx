import Image from "next/image";
import type { PortfolioProject } from "@/lib/portfolio";

const aspectClass: Record<PortfolioProject["aspect"], string> = {
  portrait: "aspect-[3/4]",
  square: "aspect-square",
  landscape: "aspect-[4/3]",
};

export function ProjectCardMedia({ project }: { project: PortfolioProject }) {
  return (
    <div className={`relative w-full ${aspectClass[project.aspect]}`}>
      <Image
        src={project.image}
        alt={project.title}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="absolute inset-x-0 bottom-0 translate-y-3 p-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <p className="text-xs tracking-wide text-accent">
          {project.category}
        </p>
        <p className="mt-1 font-heading text-lg font-bold text-foreground">
          {project.title}
        </p>
      </div>
    </div>
  );
}
