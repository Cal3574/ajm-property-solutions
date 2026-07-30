import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="inline-flex items-center"
      aria-label="AJM Property Solutions - home"
    >
      <Image
        src="/ajm-logo-mark.png"
        alt="AJM Property Solutions"
        width={2220}
        height={1257}
        priority
        className="h-10 w-auto"
      />
    </Link>
  );
}
