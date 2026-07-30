import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowRight, HiOutlineCheck } from "react-icons/hi";
import type { Service } from "@/lib/services";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex flex-col overflow-hidden border border-border-hairline bg-surface transition-colors hover:border-accent/60"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={service.image}
          alt={service.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-accent/40 bg-background/80 text-xl text-accent backdrop-blur-sm transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
          <Icon />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-heading text-xl font-bold text-foreground">
          {service.name}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
          {service.shortDescription}
        </p>
        <ul className="mt-4 space-y-2">
          {service.benefits.slice(0, 2).map((benefit) => (
            <li
              key={benefit}
              className="flex items-start gap-2 text-xs text-foreground-muted"
            >
              <HiOutlineCheck className="mt-0.5 shrink-0 text-accent" />
              {benefit}
            </li>
          ))}
        </ul>
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent">
          Learn more
          <HiOutlineArrowRight className="transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
