import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { Logo } from "./Logo";
import { navLinks, siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-border-hairline bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-foreground-muted">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex items-center gap-4 text-xl text-foreground-muted">
              <a
                href={siteConfig.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="transition-colors hover:text-accent"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="text-sm font-medium tracking-wide text-foreground">
              Navigate
            </h2>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground-muted transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm text-foreground-muted transition-colors hover:text-accent"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-medium tracking-wide text-foreground">
              Contact
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-foreground-muted">
              <li>
                <a
                  href={siteConfig.phoneHref}
                  className="transition-colors hover:text-accent"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors hover:text-accent"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>{siteConfig.address.full}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border-hairline pt-8 text-xs text-foreground-muted">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
