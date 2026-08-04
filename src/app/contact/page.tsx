import type { Metadata } from "next";
import { HiOutlineClock, HiOutlineMail, HiOutlineLocationMarker, HiOutlinePhone } from "react-icons/hi";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { ContactForm } from "@/components/contact/ContactForm";
import { siteConfig } from "@/lib/site-config";

const title = "Contact";
const description =
  "Get in touch with AJM Property Solutions for a free quote on brickwork, masonry, structural alterations, or general building work.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `${title} | ${siteConfig.name}`,
    description,
    url: `${siteConfig.url}/contact`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | ${siteConfig.name}`,
    description,
  },
};

const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  siteConfig.address.full,
)}&output=embed`;

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
      <div className="max-w-2xl">
        <h1 className="font-heading text-4xl font-bold text-foreground sm:text-5xl">
          Get In Touch
        </h1>
        <p className="mt-4 text-lg text-foreground-muted">
          Ready to start your project? Reach out using the details below, or
          send us a message directly.
        </p>
      </div>

      <div className="mt-16 grid gap-16 lg:grid-cols-2">
        <div>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <HiOutlinePhone className="mt-1 shrink-0 text-2xl text-accent" />
              <div>
                <p className="text-sm tracking-wide text-foreground-muted">
                  Phone
                </p>
                <a
                  href={siteConfig.phoneHref}
                  className="text-lg text-foreground transition-colors hover:text-accent"
                >
                  {siteConfig.phone}
                </a>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <HiOutlineMail className="mt-1 shrink-0 text-2xl text-accent" />
              <div>
                <p className="text-sm tracking-wide text-foreground-muted">
                  Email
                </p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-lg text-foreground transition-colors hover:text-accent"
                >
                  {siteConfig.email}
                </a>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <FaWhatsapp className="mt-1 shrink-0 text-2xl text-accent" />
              <div>
                <p className="text-sm tracking-wide text-foreground-muted">
                  WhatsApp
                </p>
                <a
                  href={siteConfig.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-foreground transition-colors hover:text-accent"
                >
                  {siteConfig.whatsapp}
                </a>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <FaInstagram className="mt-1 shrink-0 text-2xl text-accent" />
              <div>
                <p className="text-sm tracking-wide text-foreground-muted">
                  Instagram
                </p>
                <a
                  href={siteConfig.instagramHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-foreground transition-colors hover:text-accent"
                >
                  @ajm_property_solutions
                </a>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <HiOutlineLocationMarker className="mt-1 shrink-0 text-2xl text-accent" />
              <div>
                <p className="text-sm tracking-wide text-foreground-muted">
                  Address
                </p>
                <p className="text-lg text-foreground">
                  {siteConfig.address.full}
                </p>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <HiOutlineClock className="mt-1 shrink-0 text-2xl text-accent" />
              <div>
                <p className="text-sm tracking-wide text-foreground-muted">
                  Opening Hours
                </p>
                <ul className="text-lg text-foreground">
                  {siteConfig.hours.map((entry) => (
                    <li key={entry.days} className="flex gap-2">
                      <span className="text-foreground-muted">
                        {entry.days}:
                      </span>
                      {entry.time}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>

          <div className="mt-10 aspect-[4/3] w-full overflow-hidden border border-border-hairline sm:aspect-video">
            <iframe
              title="AJM Property Solutions location"
              src={mapEmbedSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
