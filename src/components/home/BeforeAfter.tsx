"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { HiOutlineArrowRight } from "react-icons/hi";
import { transformations, type GalleryImage } from "@/lib/gallery";

const badgeClass =
  "absolute top-4 z-10 bg-background/80 px-3 py-1 text-xs tracking-[0.2em] text-foreground uppercase backdrop-blur-sm";

function ComparisonSlider({
  before,
  after,
}: {
  before: GalleryImage;
  after: GalleryImage;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, next)));
  }, []);

  useEffect(() => {
    if (!dragging) return;

    const handleMove = (event: PointerEvent) => updateFromClientX(event.clientX);
    const stop = () => setDragging(false);

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerup", stop);
    window.addEventListener("pointercancel", stop);
    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerup", stop);
      window.removeEventListener("pointercancel", stop);
    };
  }, [dragging, updateFromClientX]);

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    setDragging(true);
    updateFromClientX(event.clientX);
  };

  return (
    <div
      ref={containerRef}
      onPointerDown={handlePointerDown}
      className="group relative aspect-square w-full cursor-ew-resize overflow-hidden border border-border-hairline select-none"
    >
      {/* After (base layer) */}
      <Image
        src={after.src}
        alt={after.alt}
        fill
        sizes="(min-width: 1024px) 900px, 100vw"
        className="object-cover"
        priority
      />
      <span className={`${badgeClass} right-4`}>After</span>

      {/* Before (clipped overlay) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={before.src}
          alt={before.alt}
          fill
          sizes="(min-width: 1024px) 900px, 100vw"
          className="object-cover"
        />
        <span className={`${badgeClass} left-4`}>Before</span>
      </div>

      {/* Handle */}
      <div
        className="absolute inset-y-0 z-20 w-0.5 bg-foreground"
        style={{ left: `${position}%` }}
      >
        <div className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border-hairline bg-background text-foreground shadow-lg">
          <HiOutlineArrowRight className="-scale-x-100" />
          <HiOutlineArrowRight />
        </div>
      </div>
    </div>
  );
}

function StaticComparison({
  before,
  after,
}: {
  before: GalleryImage[];
  after: GalleryImage[];
}) {
  const tiles = [
    ...before.map((image) => ({ image, label: "Before" })),
    ...after.map((image) => ({ image, label: "After" })),
  ];

  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {tiles.map(({ image, label }) => (
        <div
          key={image.id}
          className="relative aspect-square overflow-hidden border border-border-hairline"
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1024px) 450px, 50vw"
            className="object-cover"
          />
          <span className={`${badgeClass} left-4`}>{label}</span>
        </div>
      ))}
    </div>
  );
}

export function BeforeAfter() {
  const [activeId, setActiveId] = useState(transformations[0]?.id);
  const active =
    transformations.find((item) => item.id === activeId) ?? transformations[0];

  if (!active) return null;

  const isSlider = active.before.length === 1 && active.after.length === 1;

  return (
    <section className="border-y border-border-hairline bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-sm tracking-[0.2em] text-accent uppercase">
              Before &amp; after
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
              See The Difference
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-2 text-sm tracking-wide text-foreground transition-colors hover:text-accent"
          >
            More transformations
            <HiOutlineArrowRight className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_16rem] lg:items-start">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            {isSlider ? (
              <ComparisonSlider
                before={active.before[0]}
                after={active.after[0]}
              />
            ) : (
              <StaticComparison before={active.before} after={active.after} />
            )}

            <p className="mt-4 font-heading text-lg font-bold text-foreground">
              {active.title}
            </p>
            <p className="mt-1 text-sm text-foreground-muted">
              {isSlider
                ? "Drag the slider to reveal the transformation."
                : "The same space, before and after."}
            </p>
          </motion.div>

          {/* Selector - one tile per transformation, room for more as they are added */}
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {transformations.map((item) => {
              const isActive = item.id === active.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveId(item.id)}
                  aria-pressed={isActive}
                  className={`group relative flex items-center gap-3 border p-2 text-left transition-colors ${
                    isActive
                      ? "border-accent bg-surface-raised"
                      : "border-border-hairline hover:border-foreground-muted"
                  }`}
                >
                  <span className="relative h-14 w-14 shrink-0 overflow-hidden">
                    <Image
                      src={item.after[0].src}
                      alt=""
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </span>
                  <span className="text-sm font-medium text-foreground">
                    {item.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
