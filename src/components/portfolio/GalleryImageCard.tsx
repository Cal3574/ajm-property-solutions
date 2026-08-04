import Image from "next/image";
import type { GalleryImage } from "@/lib/gallery";

export function GalleryImageCard({ image }: { image: GalleryImage }) {
  return (
    <div className="relative w-full overflow-hidden">
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </div>
  );
}
